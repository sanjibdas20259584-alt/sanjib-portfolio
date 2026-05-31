import React, { useState, useEffect, useCallback } from "react";
import { supabase } from "../../lib/supabase";
import { KPICards } from "./KPICards";
import { AnalyticsCharts } from "./AnalyticsCharts";
import { SubmissionsTable } from "./SubmissionsTable";
import { ActivityTable } from "./ActivityTable";
import { RefreshCw, LogOut } from "lucide-react";

interface AdminDashboardProps {
  onLogout: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [loading, setLoading] = useState(true);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [allEvents, setAllEvents] = useState<any[]>([]);
  const [lastRefresh, setLastRefresh] = useState(new Date());

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [subsRes, eventsRes, recentRes] = await Promise.all([
        supabase.from("contact_submissions").select("*").order("created_at", { ascending: false }),
        supabase.from("analytics_events").select("*").order("created_at", { ascending: false }),
        supabase.from("analytics_events").select("*").order("created_at", { ascending: false }).limit(50),
      ]);
      setSubmissions(subsRes.data || []);
      setAllEvents(eventsRes.data || []);
      setEvents(recentRes.data || []);
      setLastRefresh(new Date());
    } catch (err) {
      console.error("Failed to fetch admin data:", err);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, [fetchData]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onLogout();
  };

  // KPI calculations
  const totalPageViews = allEvents.filter((e) => e.event_name === "page_view").length;
  const uniqueVisitors = new Set(allEvents.map((e) => e.visitor_id).filter(Boolean)).size;
  const contactSubmissions = submissions.length;
  const whatsappClicks = allEvents.filter((e) => e.event_name === "whatsapp_click").length;
  const getStartedClicks = allEvents.filter((e) => e.event_name === "get_started_click").length;
  const pricingPackageClicks = allEvents.filter((e) => e.event_name === "pricing_package_click").length;
  const videoPlays = allEvents.filter((e) => e.event_name === "video_play").length;
  const conversionRate = uniqueVisitors > 0
    ? ((contactSubmissions + whatsappClicks) / uniqueVisitors) * 100
    : 0;

  // Chart data: Page Views Over Time (last 30 days)
  const pageViewsOverTime = (() => {
    const days: Record<string, number> = {};
    const now = new Date();
    for (let i = 29; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      days[d.toISOString().split("T")[0]] = 0;
    }
    allEvents
      .filter((e) => e.event_name === "page_view")
      .forEach((e) => {
        const day = new Date(e.created_at).toISOString().split("T")[0];
        if (days[day] !== undefined) days[day]++;
      });
    return Object.entries(days).map(([date, views]) => ({
      date: new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "short" }),
      views,
    }));
  })();

  // Chart data: Top Pages
  const topPages = (() => {
    const pages: Record<string, number> = {};
    allEvents
      .filter((e) => e.event_name === "page_view")
      .forEach((e) => {
        const p = e.page_path || "/";
        const label = p === "/" ? "Home" : p === "/works" ? "Works" : p === "/pricing" ? "Pricing" : p;
        pages[label] = (pages[label] || 0) + 1;
      });
    return Object.entries(pages)
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 5);
  })();

  // Chart data: Top CTAs
  const topCTAs = (() => {
    const ctaEvents = ["get_started_click", "whatsapp_click", "view_more_click", "view_full_pricing_click", "work_inquiry_click"];
    const ctaLabels: Record<string, string> = {
      get_started_click: "Get Started",
      whatsapp_click: "WhatsApp",
      view_more_click: "View More",
      view_full_pricing_click: "Full Pricing",
      work_inquiry_click: "Inquire",
    };
    return ctaEvents.map((name) => ({
      name: ctaLabels[name] || name,
      clicks: allEvents.filter((e) => e.event_name === name).length,
    }));
  })();

  // Chart data: Device Breakdown
  const deviceBreakdown = (() => {
    const devices: Record<string, number> = { desktop: 0, mobile: 0, tablet: 0 };
    const seen = new Set<string>();
    allEvents.forEach((e) => {
      if (e.visitor_id && !seen.has(e.visitor_id)) {
        seen.add(e.visitor_id);
        const d = e.device_type || "desktop";
        devices[d] = (devices[d] || 0) + 1;
      }
    });
    return Object.entries(devices).map(([device, count]) => ({ device, count }));
  })();

  // Chart data: Pricing Interest
  const pricingInterest = (() => {
    const cats: Record<string, number> = {};
    allEvents
      .filter((e) => e.event_name === "pricing_package_click" && e.metadata)
      .forEach((e) => {
        const cat = (e.metadata as any)?.category || "Other";
        cats[cat] = (cats[cat] || 0) + 1;
      });
    return Object.entries(cats).map(([category, clicks]) => ({ category, clicks })).sort((a, b) => b.clicks - a.clicks);
  })();

  // Chart data: Top Packages
  const topPackages = (() => {
    const pkgs: Record<string, number> = {};
    allEvents
      .filter((e) => e.event_name === "pricing_package_click" && e.metadata)
      .forEach((e) => {
        const name = (e.metadata as any)?.packageName || "Unknown";
        pkgs[name] = (pkgs[name] || 0) + 1;
      });
    return Object.entries(pkgs).map(([name, clicks]) => ({ name, clicks })).sort((a, b) => b.clicks - a.clicks).slice(0, 8);
  })();

  // Chart data: Submissions Over Time
  const submissionsOverTime = (() => {
    const days: Record<string, number> = {};
    const now = new Date();
    for (let i = 29; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      days[d.toISOString().split("T")[0]] = 0;
    }
    submissions.forEach((s) => {
      const day = new Date(s.created_at).toISOString().split("T")[0];
      if (days[day] !== undefined) days[day]++;
    });
    return Object.entries(days).map(([date, count]) => ({
      date: new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "short" }),
      count,
    }));
  })();

  // Chart data: Works Engagement
  const worksEngagement = (() => {
    const works: Record<string, number> = {};
    allEvents
      .filter((e) => ["work_inquiry_click", "video_play"].includes(e.event_name) && e.metadata)
      .forEach((e) => {
        const title = (e.metadata as any)?.workTitle || (e.metadata as any)?.title || "Unknown";
        works[title] = (works[title] || 0) + 1;
      });
    return Object.entries(works).map(([title, interactions]) => ({ title, interactions })).sort((a, b) => b.interactions - a.interactions).slice(0, 8);
  })();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-[rgba(164,132,215,0.15)] bg-[rgba(30,22,54,0.3)] backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-serif text-xl text-foreground">Sanjib Admin</h1>
            <p className="text-xs text-muted/60 font-sans">Last updated: {lastRefresh.toLocaleTimeString()}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchData}
              disabled={loading}
              className="btn-secondary !py-2 !px-3 text-xs !gap-1.5 disabled:opacity-50"
            >
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
              Refresh
            </button>
            <button onClick={handleLogout} className="btn-secondary !py-2 !px-3 text-xs !gap-1.5">
              <LogOut size={14} />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {loading && allEvents.length === 0 ? (
          <div className="text-center py-20 text-muted">Loading dashboard data...</div>
        ) : (
          <>
            <KPICards
              data={{
                totalPageViews,
                uniqueVisitors,
                contactSubmissions,
                whatsappClicks,
                getStartedClicks,
                pricingPackageClicks,
                videoPlays,
                conversionRate,
              }}
            />

            <AnalyticsCharts
              pageViewsOverTime={pageViewsOverTime}
              topPages={topPages}
              topCTAs={topCTAs}
              deviceBreakdown={deviceBreakdown}
              pricingInterest={pricingInterest}
              topPackages={topPackages}
              submissionsOverTime={submissionsOverTime}
              worksEngagement={worksEngagement}
            />

            <SubmissionsTable submissions={submissions} onRefresh={fetchData} />

            <ActivityTable events={events} />
          </>
        )}
      </main>
    </div>
  );
};
