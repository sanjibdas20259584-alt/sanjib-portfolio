export type WorkCategory = "AI Product Ads" | "AI UGC Ads" | "Product Posts" | "Thumbnails" | "Graphic Design";

export interface WorkItem {
  id: number;
  title: string;
  category: WorkCategory;
  type: "video" | "image";
  url: string;
  videoUrl?: string;
  imageUrl?: string;
  image?: string;
  thumbnailUrl?: string;
  description?: string;
  goal?: string;
  product?: string;
  angle?: string;
  label?: "Demo Concept" | "Client Work";
  link?: string;
  mediaType: "image" | "video";
  aspectRatio: "16:9" | "9:16" | "4:5" | "3:4" | "1:1";
  objectFit: "cover" | "contain";
}

export const works: WorkItem[] = [
  // AI UGC Ads (first - most relevant)
  {
    id: 1,
    title: "AI UGC Video Ad Concept",
    category: "AI UGC Ads",
    type: "video",
    url: "/videos/ai-ugc-ad-1.mp4",
    videoUrl: "/videos/ai-ugc-ad-1.mp4",
    thumbnailUrl: "/images/ai-ugc-ad-1-thumb.jpg",
    mediaType: "video",
    aspectRatio: "9:16",
    objectFit: "contain",
    description: "AI-generated UGC-style video ad concept for a product brand.",
    goal: "Showcase a product in a UGC-style format for social ads.",
    product: "D2C beauty/skincare product",
    angle: "UGC creator-style testimonial",
    label: "Demo Concept"
  },
  {
    id: 2,
    title: "AI UGC Creator-style Ad",
    category: "AI UGC Ads",
    type: "video",
    url: "/videos/ai-ugc-ad-2.mp4",
    videoUrl: "/videos/ai-ugc-ad-2.mp4",
    thumbnailUrl: "/images/ai-ugc-ad-2-thumb.jpg",
    mediaType: "video",
    aspectRatio: "9:16",
    objectFit: "contain",
    description: "AI avatar presenting brand concepts in a creator-style video.",
    goal: "Demonstrate AI spokesperson content for brand storytelling.",
    product: "Fashion/lifestyle product",
    angle: "Creator recommendation",
    label: "Demo Concept"
  },
  // === NEW VIDEO ADS ===
  {
    id: 9,
    title: "Product Ad — Jewellery Glow",
    category: "AI Product Ads",
    type: "video",
    url: "/videos/product-ad-1.mp4",
    videoUrl: "/videos/product-ad-1.mp4",
    thumbnailUrl: "/images/product-ad-1-thumb.jpg",
    mediaType: "video",
    aspectRatio: "9:16",
    objectFit: "contain",
    description: "AI-assisted product ad for a jewellery brand with focus on shine and elegance.",
    goal: "Promote a jewellery piece with a visual-first short ad.",
    product: "Jewellery",
    angle: "Product shine + elegance",
    label: "Demo Concept"
  },
  {
    id: 10,
    title: "Product Ad — Skincare Benefits",
    category: "AI Product Ads",
    type: "video",
    url: "/videos/product-ad-2.mp4",
    videoUrl: "/videos/product-ad-2.mp4",
    thumbnailUrl: "/images/product-ad-2-thumb.jpg",
    mediaType: "video",
    aspectRatio: "9:16",
    objectFit: "contain",
    description: "Product-focused ad highlighting skincare benefits for a D2C beauty brand.",
    goal: "Show product benefit angle for a skincare product to test ad creative.",
    product: "Skincare",
    angle: "Benefit-led product highlight",
    label: "Demo Concept"
  },
  {
    id: 11,
    title: "AI UGC Ad — Fashion Try-on",
    category: "AI UGC Ads",
    type: "video",
    url: "/videos/ugc-3.mp4",
    videoUrl: "/videos/ugc-3.mp4",
    thumbnailUrl: "/images/ugc-3-thumb.jpg",
    mediaType: "video",
    aspectRatio: "9:16",
    objectFit: "contain",
    description: "UGC-style creator ad for a fashion/accessory brand with a personal, relatable tone.",
    goal: "Test UGC-style storytelling for a fashion product.",
    product: "Fashion/Accessory",
    angle: "Creator try-on + testimonial",
    label: "Demo Concept"
  },
  // Product Posts (second)
  {
    id: 6,
    title: "Premium Product Visual Concept",
    category: "Product Posts",
    type: "image",
    url: "https://i.postimg.cc/05SKxVKX/Nike.png",
    mediaType: "image",
    aspectRatio: "4:5",
    objectFit: "contain",
    description: "Premium sneaker product visual for social media.",
    goal: "Make a product feel premium and social-media ready.",
    product: "Jewellery/fashion accessory",
    angle: "Product luxury feel",
    label: "Demo Concept"
  },
  {
    id: 7,
    title: "Skincare Product Ad Concept",
    category: "Product Posts",
    type: "image",
    url: "https://i.postimg.cc/9QLr1Ssz/Himalaya.jpg",
    mediaType: "image",
    aspectRatio: "4:5",
    objectFit: "contain",
    description: "Clean skincare product showcase for social media.",
    goal: "Present a skincare product with a natural, premium aesthetic.",
    product: "Skincare/beauty product",
    angle: "Product benefit highlight",
    label: "Demo Concept"
  },
  {
    id: 14,
    title: "Sneakers New Arrival Promo",
    category: "Product Posts",
    type: "image",
    url: "/works/product-post-3.jpg",
    mediaType: "image",
    aspectRatio: "1:1",
    objectFit: "contain",
    description: "Clean product showcase post for sneakers on a display podium.",
    goal: "Highlight the product design on a modern display podium with clear call-to-action.",
    product: "Nike Sneakers",
    angle: "Limited offer discount",
    label: "Demo Concept"
  },
  // Thumbnails (last - extra work)
  {
    id: 3,
    title: "AI Tool YouTube Thumbnail",
    category: "Thumbnails",
    type: "image",
    url: "https://i.postimg.cc/tRst6dZx/make-money-with-ai.png",
    mediaType: "image",
    aspectRatio: "16:9",
    objectFit: "cover",
    description: "High-CTR YouTube thumbnail for a tech/AI channel.",
    goal: "Drive clicks with bold text and clean visual hierarchy.",
    product: "N/A (YouTube thumbnail)",
    angle: "Click-worthy title treatment",
    label: "Demo Concept"
  },
  {
    id: 4,
    title: "Beauty/Lifestyle Thumbnail",
    category: "Thumbnails",
    type: "image",
    url: "https://i.postimg.cc/k55tm9Ww/best-hairstyles-for-curly-hair.jpg",
    mediaType: "image",
    aspectRatio: "16:9",
    objectFit: "cover",
    description: "Vibrant lifestyle YouTube thumbnail with face-forward layout.",
    goal: "Attract lifestyle/beauty audience with eye-catching color treatment.",
    product: "N/A (YouTube thumbnail)",
    angle: "Lifestyle/beauty appeal",
    label: "Demo Concept"
  },
  {
    id: 5,
    title: "Self-Improvement Thumbnail",
    category: "Thumbnails",
    type: "image",
    url: "https://i.postimg.cc/C13ZkqXf/you-re-wasting-your-20s.jpg",
    mediaType: "image",
    aspectRatio: "16:9",
    objectFit: "cover",
    description: "Minimalist self-improvement YouTube thumbnail design.",
    goal: "Create curiosity with clean typography and emotional contrast.",
    product: "N/A (YouTube thumbnail)",
    angle: "Emotional hook",
    label: "Demo Concept"
  },
  // Graphic Design (last)
  {
    id: 8,
    title: "Food Brand Poster Concept",
    category: "Graphic Design",
    type: "image",
    url: "https://i.postimg.cc/26Zyk5yC/Burger.jpg",
    mediaType: "image",
    aspectRatio: "4:5",
    objectFit: "contain",
    description: "Bold food advertising poster with vibrant colors.",
    goal: "Create an eye-catching promotional poster for a food brand.",
    product: "Food/beverage product",
    angle: "Appetite appeal",
    label: "Demo Concept"
  },
  {
    id: 12,
    title: "Steakhouse Grand Opening Poster",
    category: "Graphic Design",
    type: "image",
    url: "/works/graphic-design-2.jpg",
    mediaType: "image",
    aspectRatio: "3:4",
    objectFit: "contain",
    description: "Elegant grand opening promo poster design for a premium steakhouse restaurant.",
    goal: "Create a mouth-watering visual with a premium luxury feel for a grand opening announcement.",
    product: "Steakhouse / Food Brand",
    angle: "Grand opening discount offer",
    label: "Demo Concept"
  },
  {
    id: 13,
    title: "Gym Promo Social Media Banner",
    category: "Graphic Design",
    type: "image",
    url: "/works/graphic-design-3.jpg",
    mediaType: "image",
    aspectRatio: "1:1",
    objectFit: "contain",
    description: "Bold and high-energy social media promotional creative for a fitness gym launch.",
    goal: "Capture attention of fitness enthusiasts using high contrast typography and motivational visuals.",
    product: "AP's Champion Gym",
    angle: "Membership discount offer",
    label: "Demo Concept"
  }
];