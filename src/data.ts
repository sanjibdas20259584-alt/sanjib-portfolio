export { works } from "./data/works";
export { services } from "./data/services";
export { pricingPackages } from "./data/pricingPackages";

export const pricing = [
  {
    id: "paid-trial-ad",
    title: "Paid Trial Ad",
    price: "₹699",
    features: [
      "1 short 8-12 sec AI-assisted ad creative",
      "1 hook/concept",
      "1 revision",
      "48-hour delivery",
    ],
    badge: "Best First Step",
    badgeType: "secondary",
    bestFor: "Testing quality before a bigger package.",
    isPopular: false,
  },
  {
    id: "starter-creative-test",
    title: "Starter Creative Test",
    price: "₹2,499",
    features: [
      "3 short AI-assisted ad creatives",
      "3 different hooks/angles",
      "Product-focused copy",
      "2 revisions",
      "Delivery in 4-5 days",
    ],
    badge: null,
    badgeType: null,
    bestFor: "Brands testing 2-3 ad angles.",
    isPopular: false,
  },
  {
    id: "growth-creative-pack",
    title: "Growth Creative Pack",
    price: "₹4,999",
    features: [
      "6 short AI-assisted ad creatives",
      "Hook variations",
      "Product benefit angles",
      "UGC-style or product-led direction",
      "2 revisions",
      "Delivery in 7-8 days",
    ],
    badge: "Most Popular",
    badgeType: "popular",
    bestFor: "Brands that need more creative testing.",
    isPopular: true,
  },
  {
    id: "monthly-creative-testing",
    title: "Monthly Creative Testing",
    price: "₹7,999/month",
    features: [
      "10 short ad creatives/month",
      "Hooks + CTA ideas",
      "Product ad angles",
      "Weekly creative direction",
      "Priority delivery",
    ],
    badge: "Monthly",
    badgeType: "monthly",
    bestFor: "D2C brands that need consistent ad creatives.",
    isPopular: false,
  }
];

export const contactLinks = [
  { name: "WhatsApp", icon: "MessageCircle", url: "https://wa.me/+918100146879" },
  { name: "Email", icon: "Mail", url: "mailto:designs.sanjib@gmail.com" },
  { name: "Instagram", icon: "Instagram", url: "https://www.instagram.com/designs.sanjib" },
  { name: "LinkedIn", icon: "Linkedin", url: "https://www.linkedin.com/in/designes-sanjib" }
];