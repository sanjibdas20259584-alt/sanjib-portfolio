import React, { useState, useEffect } from "react";
import { pricingPackages, PricingPackage } from "../data/pricingPackages";
import { motion } from "motion/react";
import { Check, ArrowLeft, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { trackEvent } from "../lib/analytics";

export const PricingPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [isScrolled, setIsScrolled] = useState(false);

  const categories = ["All", "AI Ads", "AI UGC Ads", "Graphic Design", "Brand Identity", "Bundles"];

  // Scroll to top on page mount and track scrolling
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showGraphicDesign = activeFilter === "All" || activeFilter === "Graphic Design";
  const showAIAds = activeFilter === "All" || activeFilter === "AI Ads";
  const showAIUGCAds = activeFilter === "All" || activeFilter === "AI UGC Ads";
  const showBrandIdentity = activeFilter === "All" || activeFilter === "Brand Identity";
  const showBundles = activeFilter === "All" || activeFilter === "Bundles";

  return (
    <div className="w-full min-h-screen bg-background pt-[80px] md:pt-[100px] pb-12 md:pb-16 relative">
      {/* Background aurora glow */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-[500px] bg-[radial-gradient(ellipse_at_top_right,_var(--color-purple-glow)_0%,_transparent_70%)] opacity-30 blur-[80px] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 relative z-10">
        {/* Back Link */}
        <div className="mb-6 md:mb-8">
          <Link 
            to="/#my-works" 
            className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors font-sans text-xs sm:text-sm"
          >
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>
        </div>

        {/* Title and Subtitle */}
        <div className="flex flex-col items-center text-center space-y-3 md:space-y-4 mb-4 md:mb-6">
          <div className="glass-pill !text-[10px] !px-3 !py-1">PRICING PLANS</div>
          <h1 className="font-serif text-[36px] sm:text-[48px] md:text-[64px] leading-[1.1] sm:leading-[1.05] tracking-tight text-gradient">
            Pricing
          </h1>
          <p className="text-muted text-sm sm:text-base md:text-xl font-sans max-w-2xl px-2">
            Simple, flexible pricing for design, AI ads, UGC-style creatives, and brand identity work.
          </p>
        </div>

        {/* Small Notice Note */}
        <div className="flex flex-col items-center gap-2 md:gap-3 mb-8 md:mb-12">
          <div className="glass-card px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl sm:rounded-full text-[11px] sm:text-xs text-muted/90 font-sans max-w-2xl text-center border-[rgba(164,132,215,0.15)] flex items-center gap-2 shadow-[0_0_15px_rgba(123,57,252,0.02)]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0" />
            <span>
              Final pricing may vary based on project complexity, revisions, delivery time, and the number of creatives required.
            </span>
          </div>
          <span className="text-[10px] sm:text-xs text-muted/60 font-sans italic">
            Click Get Started to discuss your project directly on WhatsApp.
          </span>
        </div>

        {/* Category Filters (Sticky Scroll-Reactive Container) */}
        <div 
          className={`flex w-full overflow-x-auto hide-scrollbar justify-start md:justify-center gap-2 mb-8 md:mb-12 pb-2 transition-all duration-300 ease-in-out ${
            isScrolled 
              ? 'sticky top-3 z-50 bg-[rgba(30,22,54,0.85)] backdrop-blur-[24px] border border-[rgba(164,132,215,0.45)] shadow-[0_8px_32px_rgba(0,0,0,0.4)] py-2 px-3 rounded-full max-w-[calc(100vw-2rem)] md:max-w-max mx-auto' 
              : 'sticky top-4 md:top-[75px] z-40 bg-[rgba(9, 9, 15, 0.8)] backdrop-blur-[12px] border border-[rgba(164,132,215,0.1)] py-2 px-3 rounded-full w-full'
          }`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                trackEvent({
                  eventName: "pricing_filter_click",
                  elementName: cat,
                  category: "engagement",
                  pagePath: "/pricing",
                  metadata: { selectedFilter: cat },
                });
              }}
              className={`shrink-0 rounded-full px-4 py-2 text-[10px] md:text-xs font-cabin tracking-widest font-bold uppercase transition-all ${
                activeFilter === cat 
                  ? 'bg-primary text-white shadow-[0_0_15px_rgba(123,57,252,0.4)] border border-primary' 
                  : 'glass-card text-muted hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Structured Sections */}
        <div className="space-y-12 md:space-y-24 mt-10 md:mt-16 max-w-6xl mx-auto relative z-10">
          
          {/* 1. AI ADS SECTION */}
          {showAIAds && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="space-y-8 text-left"
            >
              <div className="border-b border-[rgba(164,132,215,0.15)] pb-5">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-2">
                  AI Ads
                </h2>
                <p className="text-muted text-sm sm:text-base font-sans">
                  AI-generated ad creatives, product visuals, and campaign concepts built for modern brands.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {pricingPackages
                  .filter((p) => p.category === "AI Ads")
                  .map((pkg) => (
                    <PricingCard key={pkg.id} pkg={pkg} />
                  ))}
              </div>
            </motion.div>
          )}

          {/* 2. AI UGC ADS SECTION */}
          {showAIUGCAds && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="space-y-8 text-left"
            >
              <div className="border-b border-[rgba(164,132,215,0.15)] pb-5">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-2">
                  AI UGC Ads
                </h2>
                <p className="text-muted text-sm sm:text-base font-sans">
                  UGC-style AI video concepts, hooks, scripts, and scene-by-scene prompts for ad campaigns.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {pricingPackages
                  .filter((p) => p.category === "AI UGC Ads")
                  .map((pkg) => (
                    <PricingCard key={pkg.id} pkg={pkg} />
                  ))}
              </div>
            </motion.div>
          )}

          {/* 3. GRAPHIC DESIGN SECTION */}
          {showGraphicDesign && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="border-b border-[rgba(164,132,215,0.15)] pb-5 text-left">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-2">
                  Graphic Design
                </h2>
                <p className="text-muted text-sm sm:text-base font-sans">
                  High-quality visual design services for creators, brands, and businesses.
                </p>
              </div>

              {/* Subsection: YouTube Thumbnail Design */}
              <div className="space-y-6 text-left">
                <h3 className="font-sans text-xl md:text-2xl text-primary font-medium tracking-wide border-l-2 border-primary pl-3">
                  YouTube Thumbnail Design
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {pricingPackages
                    .filter((p) => p.category === "Graphic Design" && p.subcategory === "YouTube Thumbnail Design")
                    .map((pkg) => (
                      <PricingCard key={pkg.id} pkg={pkg} />
                    ))}
                </div>
              </div>

              {/* Subsection: Poster Design */}
              <div className="space-y-6 text-left">
                <h3 className="font-sans text-xl md:text-2xl text-primary font-medium tracking-wide border-l-2 border-primary pl-3">
                  Poster Design
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {pricingPackages
                    .filter((p) => p.category === "Graphic Design" && p.subcategory === "Poster Design")
                    .map((pkg) => (
                      <PricingCard key={pkg.id} pkg={pkg} />
                    ))}
                </div>
              </div>

              {/* Subsection: Product Post Design */}
              <div className="space-y-6 text-left">
                <h3 className="font-sans text-xl md:text-2xl text-primary font-medium tracking-wide border-l-2 border-primary pl-3">
                  Product Post Design
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {pricingPackages
                    .filter((p) => p.category === "Graphic Design" && p.subcategory === "Product Post Design")
                    .map((pkg) => (
                      <PricingCard key={pkg.id} pkg={pkg} />
                    ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* 4. BRAND IDENTITY SECTION */}
          {showBrandIdentity && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="space-y-8 text-left"
            >
              <div className="border-b border-[rgba(164,132,215,0.15)] pb-5">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-2">
                  Brand Identity
                </h2>
                <p className="text-muted text-sm sm:text-base font-sans">
                  Logo systems, color palettes, typeface selection, and brand design guides for a polished identity.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {pricingPackages
                  .filter((p) => p.category === "Brand Identity")
                  .map((pkg) => (
                    <PricingCard key={pkg.id} pkg={pkg} />
                  ))}
              </div>
            </motion.div>
          )}

          {/* 5. BUNDLES SECTION */}
          {showBundles && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="space-y-8 text-left"
            >
              <div className="border-b border-[rgba(164,132,215,0.15)] pb-5">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-2">
                  Bundles
                </h2>
                <p className="text-muted text-sm sm:text-base font-sans">
                  Combined packages for brands that need multiple creatives, ads, and design assets together.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {pricingPackages
                  .filter((p) => p.category === "Bundles")
                  .map((pkg) => (
                    <PricingCard key={pkg.id} pkg={pkg} />
                  ))}
              </div>
            </motion.div>
          )}

        </div>

        {/* Custom Package CTA at the bottom */}
        <motion.div 
          layout
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 glass-card rounded-[2rem] p-8 md:p-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-left relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle,_var(--color-purple-glow)_0%,_transparent_70%)] opacity-30 blur-[50px] pointer-events-none z-0" />
          <div className="space-y-4 max-w-xl relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold">Need a custom package?</h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed font-sans">
              If your project does not fit into these packages, I can create a custom plan based on your brand, content needs, and budget.
            </p>
          </div>
          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <Link 
              to="/#reach-out" 
              className="btn-primary py-3 px-8 text-base text-center w-full md:w-auto block shadow-lg hover:brightness-110"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const PricingCard: React.FC<{ pkg: PricingPackage }> = ({ pkg }) => {
  // Construct pre-filled WhatsApp message URL
  const prefilledMsg = `Hi Sanjib, I’m interested in the ${pkg.title} package from your portfolio.

My brand/business name:
Service I need:
Project details:
Deadline:
Budget:
Can we discuss this?`;
  const whatsappUrl = `https://wa.me/918100146879?text=${encodeURIComponent(prefilledMsg)}`;

  // Parse price into components to format currency neatly
  const priceParts = pkg.price.split(' ');
  const mainPrice = priceParts[0]; // e.g. "₹699" or "₹2,499"
  const priceUnit = priceParts.slice(1).join(' '); // e.g. "per thumbnail" or "for 5 thumbnails"

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`relative rounded-[1.5rem] md:rounded-[2rem] p-5 sm:p-6 md:p-8 flex flex-col items-start text-left transition-all duration-300 h-auto md:h-full ${
        pkg.isPopular 
          ? 'bg-[#181131] border border-[rgba(164,132,215,0.6)] shadow-[0_0_40px_rgba(123,57,252,0.15)] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] pt-12 hover:border-primary hover:bg-[#1f163d]' 
          : 'glass-card hover:border-primary/50 hover:bg-[rgba(164,132,215,0.05)]'
      }`}
    >
      {/* Most Popular Badge */}
      {pkg.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] md:text-xs font-cabin tracking-widest font-bold uppercase py-2 px-4 rounded-full shadow-[0_0_15px_rgba(123,57,252,0.5)] whitespace-nowrap z-20">
          Most Popular
        </div>
      )}

      {/* Category Tag */}
      <span className="text-[9px] sm:text-[10px] font-cabin tracking-wider text-primary uppercase font-bold mb-1.5 md:mb-2">
        {pkg.subcategory ? pkg.subcategory : pkg.category}
      </span>

      {/* Package Title */}
      <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground mb-2 md:mb-3 font-semibold">
        {pkg.title}
      </h3>

      {/* Price */}
      <div className="flex items-baseline gap-1.5 mb-3 md:mb-4 shrink-0">
        <span className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground font-bold">{mainPrice}</span>
        {priceUnit && (
          <span className="text-muted text-[10px] sm:text-xs md:text-sm font-sans">{priceUnit}</span>
        )}
      </div>

      {/* Description */}
      <p className="text-muted text-xs sm:text-sm leading-relaxed mb-4 md:mb-6 font-sans shrink-0">
        {pkg.description}
      </p>

      {/* Features List */}
      <ul className="space-y-2 md:space-y-3 mb-5 md:mb-6 w-full flex-grow">
        {pkg.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2.5 md:gap-3 text-xs sm:text-sm">
            <div className="shrink-0 w-4.5 h-4.5 md:w-5 md:h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-0.5">
              <Check size={9} strokeWidth={3} />
            </div>
            <span className="text-foreground/90 font-medium">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Best For Box */}
      <div className="w-full mt-auto pt-3 md:pt-4 border-t border-[rgba(164,132,215,0.15)] mb-5 md:mb-6 shrink-0">
        <span className="text-[10px] sm:text-xs font-cabin tracking-wider text-primary uppercase font-bold block mb-1">
          Best For
        </span>
        <p className="text-[10px] sm:text-xs md:text-sm text-muted/90 font-sans leading-relaxed">
          {pkg.bestFor}
        </p>
      </div>

      {/* Get Started CTA */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          trackEvent({
            eventName: "pricing_package_click",
            elementName: pkg.title,
            category: "conversion",
            pagePath: "/pricing",
            metadata: { packageName: pkg.title, price: pkg.price, category: pkg.category },
          });
          trackEvent({
            eventName: "get_started_click",
            elementName: pkg.title,
            category: "conversion",
            pagePath: "/pricing",
            metadata: { packageName: pkg.title, serviceCategory: pkg.category },
          });
          trackEvent({
            eventName: "whatsapp_click",
            elementName: `pricing_${pkg.title}`,
            category: "conversion",
            pagePath: "/pricing",
            metadata: { packageName: pkg.title },
          });
        }}
        className={`w-full py-3.5 px-4 rounded-xl text-sm font-sans font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 ${
          pkg.isPopular ? 'btn-primary' : 'btn-secondary'
        }`}
      >
        <MessageSquare size={16} /> Get Started
      </a>
    </motion.div>
  );
};
