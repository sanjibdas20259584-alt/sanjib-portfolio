export interface WorkItem {
  id: number;
  title: string;
  category: "AI Ads" | "AI UGC Ads" | "Thumbnails" | "Social Media Posts" | "Graphic Design";
  type: "video" | "image";
  url: string;
  videoUrl?: string;
  imageUrl?: string;
  image?: string;
  thumbnailUrl?: string;
  description?: string;
  goal?: string;
  label?: "Spec Concept" | "Client Work" | "Practice Project";
  link?: string;
  mediaType: "image" | "video";
  aspectRatio: "16:9" | "9:16" | "4:5" | "3:4" | "1:1";
  objectFit: "cover" | "contain";
}

export const works: WorkItem[] = [
  {
    id: 1,
    title: "AI UGC Video Ad",
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
    label: "Spec Concept"
  },
  {
    id: 2,
    title: "AI UGC Creator Content",
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
    label: "Spec Concept"
  },
  {
    id: 3,
    title: "Make Money with AI",
    category: "Thumbnails",
    type: "image",
    url: "https://i.postimg.cc/tRst6dZx/make-money-with-ai.png",
    mediaType: "image",
    aspectRatio: "16:9",
    objectFit: "cover",
    description: "High-CTR YouTube thumbnail for a tech/AI channel.",
    goal: "Drive clicks with bold text and clean visual hierarchy.",
    label: "Spec Concept"
  },
  {
    id: 4,
    title: "Best Hairstyles for Curly Hair",
    category: "Thumbnails",
    type: "image",
    url: "https://i.postimg.cc/k55tm9Ww/best-hairstyles-for-curly-hair.jpg",
    mediaType: "image",
    aspectRatio: "16:9",
    objectFit: "cover",
    description: "Vibrant lifestyle YouTube thumbnail with face-forward layout.",
    goal: "Attract lifestyle/beauty audience with eye-catching color treatment.",
    label: "Spec Concept"
  },
  {
    id: 5,
    title: "You're Wasting Your 20's",
    category: "Thumbnails",
    type: "image",
    url: "https://i.postimg.cc/C13ZkqXf/you-re-wasting-your-20s.jpg",
    mediaType: "image",
    aspectRatio: "16:9",
    objectFit: "cover",
    description: "Minimalist self-improvement YouTube thumbnail design.",
    goal: "Create curiosity with clean typography and emotional contrast.",
    label: "Spec Concept"
  },
  {
    id: 6,
    title: "Nike AirForce",
    category: "Social Media Posts",
    type: "image",
    url: "https://i.postimg.cc/05SKxVKX/Nike.png",
    mediaType: "image",
    aspectRatio: "4:5",
    objectFit: "contain",
    description: "Premium sneaker product post concept for social media.",
    goal: "Make a product feel premium and social-media ready.",
    label: "Spec Concept"
  },
  {
    id: 7,
    title: "Himalaya",
    category: "Social Media Posts",
    type: "image",
    url: "https://i.postimg.cc/9QLr1Ssz/Himalaya.jpg",
    mediaType: "image",
    aspectRatio: "4:5",
    objectFit: "contain",
    description: "Clean skincare product showcase for social media.",
    goal: "Present a skincare product with a natural, premium aesthetic.",
    label: "Spec Concept"
  },
  {
    id: 8,
    title: "Hungry Keya",
    category: "Graphic Design",
    type: "image",
    url: "https://i.postimg.cc/26Zyk5yC/Burger.jpg",
    mediaType: "image",
    aspectRatio: "4:5",
    objectFit: "contain",
    description: "Bold food advertising poster with vibrant colors.",
    goal: "Create an eye-catching promotional poster for a food brand.",
    label: "Spec Concept"
  }
];
