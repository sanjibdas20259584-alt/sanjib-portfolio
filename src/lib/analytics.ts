import { supabase } from "./supabase";

function getVisitorId(): string {
  let id = localStorage.getItem("sanjib_visitor_id");
  if (!id) {
    id = typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : Math.random().toString(36).substring(2) + Date.now().toString(36);
    localStorage.setItem("sanjib_visitor_id", id);
  }
  return id;
}

function getSessionId(): string {
  let id = sessionStorage.getItem("sanjib_session_id");
  if (!id) {
    id = typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : Math.random().toString(36).substring(2) + Date.now().toString(36);
    sessionStorage.setItem("sanjib_session_id", id);
  }
  return id;
}

function getDeviceType(): string {
  const w = window.innerWidth;
  if (w < 768) return "mobile";
  if (w < 1024) return "tablet";
  return "desktop";
}

interface TrackEventParams {
  eventName: string;
  pagePath?: string;
  elementName?: string;
  category?: string;
  metadata?: Record<string, any>;
}

export async function trackEvent({
  eventName,
  pagePath,
  elementName,
  category,
  metadata,
}: TrackEventParams): Promise<void> {
  try {
    await supabase.from("analytics_events").insert({
      event_name: eventName,
      page_path: pagePath || window.location.pathname,
      element_name: elementName || null,
      category: category || null,
      metadata: metadata || null,
      visitor_id: getVisitorId(),
      session_id: getSessionId(),
      referrer: document.referrer || null,
      user_agent: navigator.userAgent || null,
      device_type: getDeviceType(),
    });
  } catch {
    // Analytics should never break the site
  }
}
