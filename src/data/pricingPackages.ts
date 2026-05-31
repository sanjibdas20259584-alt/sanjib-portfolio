export interface PricingPackage {
  id: string;
  category: "Graphic Design" | "AI Ads" | "AI UGC Ads" | "Brand Identity" | "Bundles";
  subcategory?: "YouTube Thumbnail Design" | "Poster Design" | "Product Post Design";
  title: string;
  price: string;
  description: string;
  features: string[];
  bestFor: string;
  isPopular: boolean;
}

export const pricingPackages: PricingPackage[] = [
  // GRAPHIC DESIGN - YouTube Thumbnail Design
  {
    id: "starter-thumbnail",
    category: "Graphic Design",
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
    category: "Graphic Design",
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
    category: "Graphic Design",
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

  // GRAPHIC DESIGN - Poster Design
  {
    id: "basic-poster",
    category: "Graphic Design",
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
    category: "Graphic Design",
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
    category: "Graphic Design",
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

  // GRAPHIC DESIGN - Product Post Design
  {
    id: "single-product-post",
    category: "Graphic Design",
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
    category: "Graphic Design",
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
    category: "Graphic Design",
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

  // AI ADS
  {
    id: "ai-ad-starter",
    category: "AI Ads",
    title: "AI Ad Starter",
    price: "₹999 per ad creative",
    description: "Introductory AI creative to test automated ad visuals for your brand.",
    features: [
      "1 AI-generated ad visual",
      "1 product or brand-focused concept",
      "Basic ad copy/hook suggestion",
      "1 revision",
      "Delivery in 2-3 days"
    ],
    bestFor: "Small brands testing AI ad creatives",
    isPopular: false
  },
  {
    id: "ai-ad-standard",
    category: "AI Ads",
    title: "AI Ad Standard",
    price: "₹2,499 for 3 ad creatives",
    description: "Multi-angle AI ad variations to optimize your campaign click-through rates.",
    features: [
      "3 AI-generated ad creatives",
      "3 different concepts or angles",
      "Product-focused visual direction",
      "Hook and caption suggestions",
      "2 revisions",
      "Delivery in 4-5 days"
    ],
    bestFor: "Brands testing multiple ad angles",
    isPopular: true
  },
  {
    id: "ai-ad-campaign",
    category: "AI Ads",
    title: "AI Ad Campaign Pack",
    price: "₹5,999 for 8 ad creatives",
    description: "Comprehensive set of AI ad visuals to fuel major scaling campaigns.",
    features: [
      "8 AI-generated ad creatives",
      "Multiple campaign angles",
      "Product visuals",
      "Offer-based creatives",
      "Hook and copy suggestions",
      "2 revisions per creative",
      "Delivery in 7-10 days"
    ],
    bestFor: "Brands running ad campaigns or social promotions",
    isPopular: false
  },

  // AI UGC ADS
  {
    id: "ai-ugc-starter",
    category: "AI UGC Ads",
    title: "AI UGC Starter",
    price: "₹1,499 per video concept",
    description: "UGC video script and concept designed to test visual hooks and formats.",
    features: [
      "1 AI UGC-style video concept",
      "Script structure",
      "Hook",
      "Scene-by-scene prompt",
      "Basic product positioning",
      "1 revision",
      "Delivery in 2-3 days"
    ],
    bestFor: "Brands trying UGC-style ads for the first time",
    isPopular: false
  },
  {
    id: "ai-ugc-standard",
    category: "AI UGC Ads",
    title: "AI UGC Standard",
    price: "₹3,999 for 3 video concepts",
    description: "Optimized UGC concepts with multiple hook variations to lower ad costs.",
    features: [
      "3 AI UGC-style ad concepts",
      "Hook variations",
      "Scene-by-scene video prompts",
      "Product benefit angles",
      "CTA suggestions",
      "2 revisions",
      "Delivery in 5-7 days"
    ],
    bestFor: "Brands testing different UGC ad angles",
    isPopular: true
  },
  {
    id: "ai-ugc-campaign",
    category: "AI UGC Ads",
    title: "AI UGC Campaign Pack",
    price: "₹8,999 for 6 video concepts",
    description: "Full creative storytelling and prompts for scaled UGC ad campaigns.",
    features: [
      "6 AI UGC-style video ad concepts",
      "Multiple hooks",
      "Full scene prompts",
      "Product-focused storytelling",
      "CTA suggestions",
      "Creative direction for each video",
      "2 revisions per concept",
      "Delivery in 8-12 days"
    ],
    bestFor: "Skincare, fashion, e-commerce, coaches, and local brands",
    isPopular: false
  },

  // BRAND IDENTITY
  {
    id: "brand-identity-starter",
    category: "Brand Identity",
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
    category: "Brand Identity",
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
    category: "Brand Identity",
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
  },

  // BUNDLES
  {
    id: "bundle-starter",
    category: "Bundles",
    title: "Social Media Starter Bundle",
    price: "₹4,999",
    description: "Essential content kickstart featuring posts, posters, and ad visuals.",
    features: [
      "5 social media posts",
      "2 promotional posters",
      "1 AI ad creative",
      "Basic caption/hook suggestions",
      "Consistent visual style",
      "Delivery in 7 days"
    ],
    bestFor: "Small businesses starting online marketing",
    isPopular: false
  },
  {
    id: "bundle-growth",
    category: "Bundles",
    title: "Brand Growth Bundle",
    price: "₹9,999",
    description: "Strategic content package combining social posts, posters, and UGC ad hooks.",
    features: [
      "8 social media posts",
      "3 promotional posters",
      "3 AI ad creatives",
      "1 AI UGC video concept",
      "Hook and CTA suggestions",
      "Consistent campaign style",
      "Delivery in 10-12 days"
    ],
    bestFor: "Brands that want stronger online presence",
    isPopular: true
  },
  {
    id: "bundle-campaign",
    category: "Bundles",
    title: "Premium Brand Campaign Bundle",
    price: "₹17,999",
    description: "Full-scale content production bundle for major digital campaigns.",
    features: [
      "12 social media posts",
      "5 promotional posters",
      "6 AI ad creatives",
      "3 AI UGC video concepts",
      "Campaign hooks and CTA ideas",
      "Product-focused creative direction",
      "Consistent visual identity across all creatives",
      "Delivery in 14-18 days"
    ],
    bestFor: "Brands running a full promotional campaign",
    isPopular: false
  },
  {
    id: "bundle-launch",
    category: "Bundles",
    title: "Complete Brand Launch Bundle",
    price: "₹24,999",
    description: "The ultimate brand package: identity system combined with launch creatives.",
    features: [
      "Brand Identity Standard package",
      "10 social media posts",
      "5 promotional posters",
      "5 AI ad creatives",
      "2 AI UGC video concepts",
      "Profile icon",
      "Basic launch campaign direction",
      "Delivery in 18-25 days"
    ],
    bestFor: "New brands launching online",
    isPopular: false
  }
];
