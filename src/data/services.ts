import { Zap, Video, Image, Smartphone } from "lucide-react";
import { ComponentType } from "react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  bestFor: string;
  icon: ComponentType<{ size?: number | string; className?: string }>;
}

export const services: ServiceItem[] = [
  {
    id: "ai-ad-creatives",
    title: "AI Ad Creatives",
    description: "High-quality AI-generated ad visuals and product creatives for brands that need better content for Instagram, Facebook, websites, or paid ads.",
    bullets: [
      "Product ad visuals",
      "Hook-based creative concepts",
      "Social media ad layouts",
      "Campaign-ready visual directions"
    ],
    bestFor: "Skincare, fashion, food, SaaS, coaching, and e-commerce brands.",
    icon: Zap
  },
  {
    id: "ai-ugc-concepts",
    title: "AI UGC Concepts",
    description: "UGC-style ad concepts with hooks, scripts, scene ideas, and AI video direction so brands can test content without expensive shoots.",
    bullets: [
      "UGC hooks and scripts",
      "Short ad scripts",
      "Scene-by-scene direction",
      "AI avatar/spokesperson concepts"
    ],
    bestFor: "Product brands, SaaS, online stores, and service businesses.",
    icon: Video
  },
  {
    id: "youtube-thumbnails",
    title: "YouTube Thumbnails",
    description: "High-CTR YouTube thumbnail designs that make people click — clean layouts, bold text, and eye-catching visuals.",
    bullets: [
      "Custom thumbnail designs",
      "Face and product cutout styling",
      "Bold text and color treatments",
      "Consistent channel branding"
    ],
    bestFor: "Content creators, YouTubers, educators, and online coaches.",
    icon: Image
  },
  {
    id: "social-media-posts",
    title: "Social Media & Product Posts",
    description: "Product-focused social media creatives and promotional post designs for Instagram, Facebook, and other platforms.",
    bullets: [
      "Product showcase posts",
      "Promotional graphics",
      "Social media carousel designs",
      "Platform-ready sizing"
    ],
    bestFor: "E-commerce stores, local businesses, marketers, and small brands.",
    icon: Smartphone
  }
];
