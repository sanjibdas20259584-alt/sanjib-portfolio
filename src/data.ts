export { works } from "./data/works";
export { services } from "./data/services";
export { pricingPackages } from "./data/pricingPackages";

export const pricing = [
  {
    id: "ai-ad-starter",
    title: "AI Ad Starter",
    price: "₹999",
    features: [
      "1 AI ad creative",
      "1 hook/concept",
      "1 revision",
      "24–48h delivery",
    ],
    bestFor: "Testing one product or offer.",
    isPopular: false,
  },
  {
    id: "ai-ugc-concept-pack",
    title: "AI UGC Concept Pack",
    price: "₹3,999",
    features: [
      "3 UGC-style ad concepts",
      "Hooks + scripts",
      "Scene-by-scene direction",
      "2 revisions",
    ],
    bestFor: "Brands that want content ideas for ads/reels.",
    isPopular: true,
  },
  {
    id: "campaign-creative-pack",
    title: "Campaign Creative Pack",
    price: "₹8,999",
    features: [
      "6 AI UGC/ad creative concepts",
      "Hooks + scripts",
      "Product visual direction",
      "Campaign-ready content ideas",
      "Priority delivery",
    ],
    bestFor: "Brands running monthly content or ad campaigns.",
    isPopular: false,
  }
];

export const contactLinks = [
  { name: "WhatsApp", icon: "MessageCircle", url: "https://wa.me/+918100146879" },
  { name: "Email", icon: "Mail", url: "mailto:designs.sanjib@gmail.com" },
  { name: "Instagram", icon: "Instagram", url: "https://www.instagram.com/designs.sanjib" },
  { name: "LinkedIn", icon: "Linkedin", url: "https://www.linkedin.com/in/designes-sanjib" }
];
