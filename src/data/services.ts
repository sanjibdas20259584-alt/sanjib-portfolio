import { Zap, Video, Target, Package, Play, Sparkles } from "lucide-react";
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
    id: "ai-ugc-ads",
    title: "AI UGC Ads",
    description: "High-converting AI UGC ads and creator-style ad concepts designed for small brands and creators.",
    bullets: [
      "Hook and script writing",
      "AI spokesperson voiceovers",
      "Scene-by-scene storyboard direction",
      "Engagement-optimized text overlays"
    ],
    bestFor: "D2C skincare, beauty, fashion, and accessory brands looking for creator-style ads.",
    icon: Video
  },
  {
    id: "ai-product-ad-creatives",
    title: "AI Product Ad Creatives",
    description: "Short product-focused ad creatives tailored to showcase jewellery, beauty, skincare, and fashion products.",
    bullets: [
      "Product close-up concepts",
      "Benefit-led product visuals",
      "Instagram Reels-ready aspect ratios",
      "Meta Ads optimized structure"
    ],
    bestFor: "D2C brands seeking attention-grabbing product ad creatives for social campaigns.",
    icon: Zap
  },
  {
    id: "youtube-thumbnail-design",
    title: "YouTube Thumbnail Design",
    description: "Click-worthy, high-CTR YouTube thumbnail designs that help creators and brands maximize views.",
    bullets: [
      "Bold, readable typography treatment",
      "High-contrast face or product cutouts",
      "Visual hierarchy optimization",
      "A/B test thumbnail variations"
    ],
    bestFor: "YouTubers, content creators, and brands looking to boost video CTR.",
    icon: Target
  },
  {
    id: "product-post-design",
    title: "Product Post Design",
    description: "Stunning feed designs and promotional social media posts for e-commerce and retail brands.",
    bullets: [
      "Podium display product visuals",
      "Discount and limited offer templates",
      "Clean product benefit callouts",
      "Consistent brand layout guidelines"
    ],
    bestFor: "E-commerce stores and jewellery, skincare, or fashion brands selling online.",
    icon: Package
  },
  {
    id: "social-media-creatives",
    title: "Social Media Creatives",
    description: "Engaging visual graphics and promotional designs for Instagram, Facebook, and LinkedIn feeds.",
    bullets: [
      "Campaign launch poster designs",
      "Customer review and social proof posts",
      "Educational carousel templates",
      "Limited-time discount announcements"
    ],
    bestFor: "Startups and small brands aiming to maintain active social channels.",
    icon: Play
  },
  {
    id: "d2c-brand-creatives",
    title: "D2C Brand Creatives",
    description: "Complete visual design kits to establish a premium and consistent presence for direct-to-consumer businesses.",
    bullets: [
      "Logo system and emblem concepts",
      "Cohesive brand color palettes",
      "Typography styling rules",
      "Social media profile and banner assets"
    ],
    bestFor: "New D2C brands establishing a professional, cohesive identity.",
    icon: Sparkles
  }
];