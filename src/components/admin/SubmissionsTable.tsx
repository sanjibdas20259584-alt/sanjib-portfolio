import React, { useState } from "react";
import { supabase } from "../../lib/supabase";
import { Copy, ExternalLink, Check } from "lucide-react";

interface Submission {
  id: string;
  created_at: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  business_name: string | null;
  service_interest: string | null;
  budget: string | null;
  deadline: string | null;
  message: string | null;
  status: string;
}

interface SubmissionsTableProps {
  submissions: Submission[];
  onRefresh: () => void;
}

const statusColors: Record<string, string> = {
  new: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  contacted: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  closed: "bg-green-500/20 text-green-400 border-green-500/30",
  rejected: "bg-red-500/20 text-red-400 border-red-500/30",
};

export const SubmissionsTable: React.FC<SubmissionsTableProps> = ({ submissions, onRefresh }) => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = submissions.filter((s) => {
    const matchSearch = !search ||
      (s.name?.toLowerCase().includes(search.toLowerCase())) ||
      (s.email?.toLowerCase().includes(search.toLowerCase())) ||
      (s.service_interest?.toLowerCase().includes(search.toLowerCase()));
    const matchStatus = statusFilter === "all" || s.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const updateStatus = async (id: string, newStatus: string) => {
    await supabase.from("contact_submissions").update({ status: newStatus }).eq("id", id);
    onRefresh();
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="glass-card rounded-xl p-5">
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <h3 className="text-sm font-cabin uppercase tracking-wider text-muted font-bold flex-grow">Contact Submissions ({filtered.length})</h3>
        <input
          type="text"
          placeholder="Search name, email, service..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[rgba(30,22,54,0.4)] border border-[rgba(164,132,215,0.2)] rounded-lg px-3 py-2 text-sm text-foreground placeholder-muted/50 outline-none focus:border-primary w-full sm:w-64"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-[rgba(30,22,54,0.4)] border border-[rgba(164,132,215,0.2)] rounded-lg px-3 py-2 text-sm text-foreground outline-none focus:border-primary appearance-none"
        >
          <option value="all" className="bg-[#100820]">All Status</option>
          <option value="new" className="bg-[#100820]">New</option>
          <option value="contacted" className="bg-[#100820]">Contacted</option>
          <option value="closed" className="bg-[#100820]">Closed</option>
          <option value="rejected" className="bg-[#100820]">Rejected</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[rgba(164,132,215,0.15)]">
              <th className="text-left py-3 px-2 text-muted font-cabin text-xs uppercase tracking-wider">Date</th>
              <th className="text-left py-3 px-2 text-muted font-cabin text-xs uppercase tracking-wider">Name</th>
              <th className="text-left py-3 px-2 text-muted font-cabin text-xs uppercase tracking-wider">Email</th>
              <th className="text-left py-3 px-2 text-muted font-cabin text-xs uppercase tracking-wider hidden md:table-cell">Service</th>
              <th className="text-left py-3 px-2 text-muted font-cabin text-xs uppercase tracking-wider hidden lg:table-cell">Message</th>
              <th className="text-left py-3 px-2 text-muted font-cabin text-xs uppercase tracking-wider">Status</th>
              <th className="text-left py-3 px-2 text-muted font-cabin text-xs uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan={7} className="text-center py-8 text-muted/50">No submissions found</td></tr>
            ) : (
              filtered.map((s) => (
                <tr key={s.id} className="border-b border-[rgba(164,132,215,0.08)] hover:bg-[rgba(164,132,215,0.05)]">
                  <td className="py-3 px-2 text-muted text-xs whitespace-nowrap">
                    {new Date(s.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                  </td>
                  <td className="py-3 px-2 text-foreground font-medium">{s.name || "—"}</td>
                  <td className="py-3 px-2 text-muted">
                    <div className="flex items-center gap-1">
                      <span className="truncate max-w-[120px]">{s.email || "—"}</span>
                      {s.email && (
                        <button onClick={() => copyToClipboard(s.email!, s.id + "email")} className="text-muted/50 hover:text-primary shrink-0">
                          {copiedId === s.id + "email" ? <Check size={12} /> : <Copy size={12} />}
                        </button>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-2 text-muted hidden md:table-cell">{s.service_interest || "—"}</td>
                  <td className="py-3 px-2 text-muted hidden lg:table-cell">
                    <span className="truncate max-w-[200px] block">{s.message || "—"}</span>
                  </td>
                  <td className="py-3 px-2">
                    <select
                      value={s.status}
                      onChange={(e) => updateStatus(s.id, e.target.value)}
                      className={`text-xs font-bold rounded-full px-2 py-1 border cursor-pointer outline-none ${statusColors[s.status] || statusColors.new} bg-transparent`}
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="closed">Closed</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </td>
                  <td className="py-3 px-2">
                    <div className="flex gap-1">
                      {s.phone && (
                        <a
                          href={`https://wa.me/${s.phone.replace(/[^0-9]/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted/50 hover:text-green-400 p-1"
                          title="WhatsApp"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
