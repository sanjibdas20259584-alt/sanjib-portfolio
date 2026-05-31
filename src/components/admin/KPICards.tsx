import React from "react";
import { Eye, Users, MessageSquare, Phone, MousePointer, Package, Video, TrendingUp } from "lucide-react";

interface KPICardsProps {
  data: {
    totalPageViews: number;
    uniqueVisitors: number;
    contactSubmissions: number;
    whatsappClicks: number;
    getStartedClicks: number;
    pricingPackageClicks: number;
    videoPlays: number;
    conversionRate: number;
  };
}

const cards = [
  { key: "totalPageViews", label: "Page Views", icon: Eye, color: "text-blue-400" },
  { key: "uniqueVisitors", label: "Unique Visitors", icon: Users, color: "text-green-400" },
  { key: "contactSubmissions", label: "Form Submissions", icon: MessageSquare, color: "text-purple-400" },
  { key: "whatsappClicks", label: "WhatsApp Clicks", icon: Phone, color: "text-emerald-400" },
  { key: "getStartedClicks", label: "Get Started Clicks", icon: MousePointer, color: "text-amber-400" },
  { key: "pricingPackageClicks", label: "Pricing Clicks", icon: Package, color: "text-pink-400" },
  { key: "videoPlays", label: "Video Plays", icon: Video, color: "text-cyan-400" },
  { key: "conversionRate", label: "Conversion Rate", icon: TrendingUp, color: "text-orange-400" },
] as const;

export const KPICards: React.FC<KPICardsProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {cards.map((card) => {
        const Icon = card.icon;
        const value = data[card.key as keyof typeof data];
        const display = card.key === "conversionRate" ? `${value.toFixed(1)}%` : value.toLocaleString();
        return (
          <div
            key={card.key}
            className="glass-card rounded-xl p-5 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-cabin uppercase tracking-wider text-muted font-bold">{card.label}</span>
              <Icon size={16} className={card.color} />
            </div>
            <span className="text-2xl md:text-3xl font-serif text-foreground font-semibold">{display}</span>
          </div>
        );
      })}
    </div>
  );
};
