export interface PricingPackage {
  id: string;
  category: "Core AI Ad Creatives" | "Additional Design Services";
  subcategory?: "YouTube Thumbnail Design" | "Poster Design" | "Product Post Design" | "Brand Identity" | "YouTube Thumbnail Design" | "Poster Design" | "Product Post Design";
  title: string;
  price: string;
  description: string;
  features: string[];
  bestFor: string;
  isPopular: boolean;
  badge?: string | null;
  badgeType?: "popular" | "secondary" | "monthly" | null;
}

export const pricingPackages: PricingPackage[] = [
  // CORE AI AD CREATIVES
  {
    id: "paid-trial-ad",
    category: "Core AI Ad Creatives",
    title: "Paid Trial Ad",
    price: "₹699",
    description: "A single AI-assisted product or UGC-style ad creative to test quality before a bigger commitment.",
    features: [
      "1 short 8-12 sec AI-assisted ad creative",
      "1 hook/concept",
      "1 revision",
      "48-hour delivery",
    ],
    bestFor: "First-time brands that want to test quality before a bigger creative pack.",
    isPopular: false,
    badge: "Best First Step",
    badgeType: "secondary"
  },
  {
    id: "starter-creative-test",
    category: "Core AI Ad Creatives",
    title: "Starter Creative Test",
    price: "₹2,499",
    description: "Three AI-assisted ad creatives with different hooks and angles for brands starting to test ad creative direction.",
    features: [
      "3 short AI-assisted ad creatives",
      "3 different hooks/angles",
      "Product-focused copy",
      "2 revisions",
      "Delivery in 4-5 days",
    ],
    bestFor: "Brands testing 2-3 ad angles before scaling.",
    isPopular: false,
  },
  {
    id: "growth-creative-pack",
    category: "Core AI Ad Creatives",
    title: "Growth Creative Pack",
    price: "₹4,999",
    description: "Six AI-assisted ad creatives with hook variations and product benefit angles for brands that need more creative testing.",
    features: [
      "6 short AI-assisted ad creatives",
      "Hook variations",
      "Product benefit angles",
      "UGC-style or product-led direction",
      "2 revisions",
      "Delivery in 7-8 days",
    ],
    bestFor: "Brands that need more creative testing volume.",
    isPopular: true,
    badge: "Most Popular",
    badgeType: "popular"
  },
  {
    id: "monthly-creative-testing",
    category: "Core AI Ad Creatives",
    title: "Monthly Creative Testing",
    price: "₹7,999/month",
    description: "Consistent monthly creative support for D2C brands that need a steady stream of ad creatives to test and optimize.",
    features: [
      "10 short ad creatives/month",
      "Hooks + CTA ideas",
      "Product ad angles",
      "Weekly creative direction",
      "Priority delivery",
    ],
    bestFor: "D2C brands that need consistent ad creatives every month.",
    isPopular: false,
    badge: "Monthly",
    badgeType: "monthly"
  },

  // ADDITIONAL DESIGN SERVICES - YouTube Thumbnail Design
  {
    id: "starter-thumbnail",
    category: "Additional Design Services",
    subcategory: "YouTube Thumbnail Design",
    title: "Starter Thumbnail",
    price: "₹399 per thumbnail",
    description: "Clean, eye-catching thumbnail to kickstart your content creation journey.",
    features: [
      "1 custom YouTube thumbnail",
      "Basic text styling",
      "Simple background cleanup",
      "1 revision",
      "Delivery in 24-48 hours"
    ],
    bestFor: "New YouTubers and small creators",
    isPopular: false
  },
  {
    id: "standard-thumbnail",
    category: "Additional Design Services",
    subcategory: "YouTube Thumbnail Design",
    title: "Standard Thumbnail",
    price: "₹699 per thumbnail",
    description: "High-CTR, professional thumbnail designed to maximize clicks and views.",
    features: [
      "1 premium custom thumbnail",
      "Strong composition and click-focused layout",
      "Face cutout or product cutout",
      "Advanced text styling",
      "2 revisions",
      "Delivery in 24-48 hours"
    ],
    bestFor: "Creators who want better CTR and professional visuals",
    isPopular: true
  },
  {
    id: "thumbnail-pack",
    category: "Additional Design Services",
    subcategory: "YouTube Thumbnail Design",
    title: "Thumbnail Pack",
    price: "₹2,499 for 5 thumbnails",
    description: "Bulk high-performance thumbnails to keep your channel looking consistent and polished.",
    features: [
      "5 custom thumbnails",
      "Consistent visual style",
      "Click-focused design",
      "2 revisions per thumbnail",
      "Delivery in 4-6 days"
    ],
    bestFor: "YouTubers posting regularly",
    isPopular: false
  },

  // ADDITIONAL DESIGN SERVICES - Poster Design
  {
    id: "basic-poster",
    category: "Additional Design Services",
    subcategory: "Poster Design",
    title: "Basic Poster",
    price: "₹499 per poster",
    description: "Simple, layout-focused poster ideal for announcements and text-heavy promos.",
    features: [
      "1 clean poster design",
      "Basic layout",
      "Text and image placement",
      "1 revision",
      "Delivery in 24-48 hours"
    ],
    bestFor: "Small announcements, offers, and simple promotions",
    isPopular: false
  },
  {
    id: "premium-poster",
    category: "Additional Design Services",
    subcategory: "Poster Design",
    title: "Premium Poster",
    price: "₹999 per poster",
    description: "Premium graphic layout designed to generate excitement for launches and campaigns.",
    features: [
      "1 high-quality promotional poster",
      "Premium visual layout",
      "Better typography and hierarchy",
      "Product or brand-focused design",
      "2 revisions",
      "Delivery in 2-3 days"
    ],
    bestFor: "Brands, shops, launches, and campaigns",
    isPopular: true
  },
  {
    id: "poster-pack",
    category: "Additional Design Services",
    subcategory: "Poster Design",
    title: "Poster Pack",
    price: "₹3,999 for 5 posters",
    description: "Consistent brand promotional posters to power your marketing campaigns.",
    features: [
      "5 promotional posters",
      "Consistent brand style",
      "Offer posts, launch posts, and campaign creatives",
      "2 revisions per poster",
      "Delivery in 5-7 days"
    ],
    bestFor: "Businesses running regular campaigns",
    isPopular: false
  },

  // ADDITIONAL DESIGN SERVICES - Product Post Design
  {
    id: "single-product-post",
    category: "Additional Design Services",
    subcategory: "Product Post Design",
    title: "Single Product Post",
    price: "₹499 per post",
    description: "Standard social media post focusing on product showcase and highlights.",
    features: [
      "1 product-focused social media post",
      "Clean product layout",
      "Basic offer or feature highlight",
      "1 revision",
      "Delivery in 24-48 hours"
    ],
    bestFor: "Small product businesses",
    isPopular: false
  },
  {
    id: "premium-product-post",
    category: "Additional Design Services",
    subcategory: "Product Post Design",
    title: "Premium Product Post",
    price: "₹899 per post",
    description: "High-impact social media post detailing benefits for e-commerce and local brands.",
    features: [
      "1 premium product creative",
      "Strong visual hierarchy",
      "Product benefits highlighted",
      "Clean brand-focused layout",
      "2 revisions",
      "Delivery in 2-3 days"
    ],
    bestFor: "E-commerce, skincare, fashion, and local brands",
    isPopular: false
  },
  {
    id: "product-post-pack",
    category: "Additional Design Services",
    subcategory: "Product Post Design",
    title: "Product Post Pack",
    price: "₹3,499 for 5 posts",
    description: "Consistent social post creative pack to keep your brand active and engaging.",
    features: [
      "5 product posts",
      "Consistent visual style",
      "Offer, feature, benefit, and launch creatives",
      "2 revisions per post",
      "Delivery in 5-7 days"
    ],
    bestFor: "Brands that need regular content",
    isPopular: true
  },

  // ADDITIONAL DESIGN SERVICES - Brand Identity
  {
    id: "brand-identity-starter",
    category: "Additional Design Services",
    subcategory: "Brand Identity",
    title: "Brand Identity Starter",
    price: "₹2,999",
    description: "Essential logo and brand rules to establish a professional start.",
    features: [
      "1 custom logo concept",
      "Basic color palette",
      "Font pairing suggestion",
      "Simple brand mood direction",
      "2 revisions",
      "Delivery in 5-7 days"
    ],
    bestFor: "New small businesses and personal brands",
    isPopular: false
  },
  {
    id: "brand-identity-standard",
    category: "Additional Design Services",
    subcategory: "Brand Identity",
    title: "Brand Identity Standard",
    price: "₹6,999",
    description: "Complete branding package with logo system, guide, and profile assets.",
    features: [
      "2 logo concepts",
      "Final logo design",
      "Harmonious color palette",
      "Typeface selection and pairing",
      "Basic brand style guide",
      "Social media profile icon",
      "3 revisions",
      "Delivery in 7-10 days"
    ],
    bestFor: "Brands that want a professional and consistent identity",
    isPopular: true
  },
  {
    id: "brand-identity-premium",
    category: "Additional Design Services",
    subcategory: "Brand Identity",
    title: "Brand Identity Premium",
    price: "₹12,999",
    description: "Full-scale corporate identity, style guide rules, and versatile logo lockups.",
    features: [
      "3 logo concepts",
      "Final logo system",
      "Primary and secondary logo",
      "Color palette",
      "Typeface selection and pairing",
      "Comprehensive brand design guide",
      "Social media profile icon",
      "Basic brand usage rules",
      "4 revisions",
      "Delivery in 10-14 days"
    ],
    bestFor: "Businesses that want a polished and complete brand identity",
    isPopular: false
  }
];