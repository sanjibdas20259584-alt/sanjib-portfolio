import React from "react";

interface ActivityEvent {
  id: string;
  created_at: string;
  event_name: string;
  page_path: string | null;
  element_name: string | null;
  category: string | null;
  device_type: string | null;
}

interface ActivityTableProps {
  events: ActivityEvent[];
}

export const ActivityTable: React.FC<ActivityTableProps> = ({ events }) => {
  return (
    <div className="glass-card rounded-xl p-5">
      <h3 className="text-sm font-cabin uppercase tracking-wider text-muted font-bold mb-4">Recent Website Activity</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[rgba(164,132,215,0.15)]">
              <th className="text-left py-3 px-2 text-muted font-cabin text-xs uppercase tracking-wider">Time</th>
              <th className="text-left py-3 px-2 text-muted font-cabin text-xs uppercase tracking-wider">Event</th>
              <th className="text-left py-3 px-2 text-muted font-cabin text-xs uppercase tracking-wider hidden sm:table-cell">Page</th>
              <th className="text-left py-3 px-2 text-muted font-cabin text-xs uppercase tracking-wider hidden md:table-cell">Element</th>
              <th className="text-left py-3 px-2 text-muted font-cabin text-xs uppercase tracking-wider hidden md:table-cell">Category</th>
              <th className="text-left py-3 px-2 text-muted font-cabin text-xs uppercase tracking-wider hidden lg:table-cell">Device</th>
            </tr>
          </thead>
          <tbody>
            {events.length === 0 ? (
              <tr><td colSpan={6} className="text-center py-8 text-muted/50">No activity yet</td></tr>
            ) : (
              events.map((ev) => (
                <tr key={ev.id} className="border-b border-[rgba(164,132,215,0.08)] hover:bg-[rgba(164,132,215,0.05)]">
                  <td className="py-2.5 px-2 text-muted text-xs whitespace-nowrap">
                    {new Date(ev.created_at).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
                  </td>
                  <td className="py-2.5 px-2">
                    <span className="text-xs font-mono bg-primary/10 text-primary/90 rounded px-1.5 py-0.5">
                      {ev.event_name}
                    </span>
                  </td>
                  <td className="py-2.5 px-2 text-muted text-xs hidden sm:table-cell">{ev.page_path || "—"}</td>
                  <td className="py-2.5 px-2 text-muted text-xs hidden md:table-cell">{ev.element_name || "—"}</td>
                  <td className="py-2.5 px-2 text-muted text-xs hidden md:table-cell">{ev.category || "—"}</td>
                  <td className="py-2.5 px-2 text-muted text-xs hidden lg:table-cell capitalize">{ev.device_type || "—"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
