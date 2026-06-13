import { Zap, Video, Target, Package } from "lucide-react";
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
    id: "ai-product-ad-creatives",
    title: "AI Product Ad Creatives",
    description: "Short product-focused ad creatives for jewellery, skincare, beauty, and fashion brands.",
    bullets: [
      "Product close-up concepts",
      "Offer and benefit-led creatives",
      "9:16 ad-ready direction",
      "Instagram/Reels-ready structure"
    ],
    bestFor: "D2C jewellery, skincare, beauty, and fashion brands that need ad visuals.",
    icon: Zap
  },
  {
    id: "ai-ugc-style-ad-concepts",
    title: "AI UGC-style Ad Concepts",
    description: "Human-feeling UGC-style ad concepts using AI-assisted visuals, hooks, and scene direction.",
    bullets: [
      "UGC hooks and scripts",
      "Scene-by-scene direction",
      "AI model/creator-style concepts",
      "Product storytelling"
    ],
    bestFor: "Brands that want creator-style ads without expensive shoots.",
    icon: Video
  },
  {
    id: "hook-angle-testing",
    title: "Hook & Angle Testing",
    description: "Multiple creative angles so brands can test what gets attention.",
    bullets: [
      "Gifting angle",
      "Luxury/value angle",
      "Social proof angle",
      "Problem/solution angle"
    ],
    bestFor: "Brands that want to test multiple ad approaches before committing.",
    icon: Target
  },
  {
    id: "creative-packs-d2c",
    title: "Creative Packs for D2C Brands",
    description: "Monthly creative support for brands that need consistent content testing.",
    bullets: [
      "Ad creative batches",
      "Hook variations",
      "CTA suggestions",
      "Monthly creative direction"
    ],
    bestFor: "D2C brands that need a steady stream of ad creatives to test.",
    icon: Package
  }
];