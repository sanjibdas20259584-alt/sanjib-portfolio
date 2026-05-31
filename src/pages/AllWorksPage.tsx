import React, { useState, useEffect } from "react";
import { works, WorkItem } from "../data/works";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { MediaRenderer } from "../components/MediaRenderer";
import { trackEvent } from "../lib/analytics";

export const AllWorksPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [isScrolled, setIsScrolled] = useState(false);

  const categories = ["All", "Graphic Design", "Thumbnails", "AI UGC Ads", "Social Media Posts"];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionConfig = [
    {
      category: "AI UGC Ads",
      title: "AI UGC Ads",
      subtitle: "Short-form AI video ad concepts and creator-style product videos."
    },
    {
      category: "Thumbnails",
      title: "Thumbnails",
      subtitle: "High-CTR YouTube thumbnail designs for creators and channels."
    },
    {
      category: "Social Media Posts",
      title: "Social Media Posts",
      subtitle: "Product-focused social media creatives and promotional designs."
    },
    {
      category: "Graphic Design",
      title: "Graphic Design",
      subtitle: "Posters, promotional visuals, and campaign graphics."
    }
  ];

  const activeSections = activeFilter === "All"
    ? sectionConfig
    : sectionConfig.filter((sect) => sect.category === activeFilter);

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
        <div className="flex flex-col items-center text-center space-y-3 md:space-y-4 mb-8 md:mb-12">
          <div className="glass-pill !text-[10px] !px-3 !py-1">PORTFOLIO</div>
          <h1 className="font-serif text-[36px] sm:text-[48px] md:text-[64px] leading-[1.1] sm:leading-[1.05] tracking-tight text-gradient">
            All Works
          </h1>
          <p className="text-muted text-sm sm:text-base md:text-xl font-sans max-w-2xl px-2">
            A mix of client projects, spec concepts, and practice campaigns across AI ads, UGC, thumbnails, and product posts.
          </p>
        </div>

        {/* Category Filters (Sticky Scroll-Reactive Container) */}
        <div 
          className={`flex w-full overflow-x-auto hide-scrollbar justify-start md:justify-center gap-2 mb-8 md:mb-16 pb-2 transition-all duration-300 ease-in-out ${
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
                  eventName: "works_filter_click",
                  elementName: cat,
                  category: "engagement",
                  pagePath: "/works",
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

        {/* Grouped Sections */}
        <div className="space-y-10 md:space-y-16 relative z-10">
          <AnimatePresence mode="popLayout">
            {activeSections.map((sect) => {
              const sectionWorks = works.filter((w) => w.category === sect.category);
              if (sectionWorks.length === 0) return null;

              return (
                <motion.div
                  key={sect.category}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4 md:space-y-8"
                >
                  <div className="border-l-2 border-primary pl-3 md:pl-4 py-0.5 md:py-1">
                    <h2 className="font-serif text-xl sm:text-[28px] md:text-[34px] leading-tight text-white mb-1 md:mb-2">
                      {sect.title}
                    </h2>
                    <p className="text-muted text-xs sm:text-sm md:text-base font-sans max-w-2xl">
                      {sect.subtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 items-start">
                    {sectionWorks.map((work) => (
                      <WorkCard key={work.id} work={work} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const WorkCard: React.FC<{ work: WorkItem }> = ({ work }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-[2rem] overflow-hidden flex flex-col group hover:border-primary/50 transition-all duration-300"
    >
      <MediaRenderer 
        work={work} 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
      />

      {/* Info Container */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Category + Label */}
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="text-[10px] font-cabin tracking-wider text-primary uppercase font-bold">
            {work.category}
          </span>
          {work.label && (
            <span className="text-[9px] font-cabin tracking-wider text-muted/70 uppercase font-bold bg-[rgba(164,132,215,0.1)] border border-[rgba(164,132,215,0.15)] rounded-full px-2 py-0.5">
              {work.label}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-sans text-xl text-foreground font-semibold mb-2 group-hover:text-primary transition-colors">
          {work.title}
        </h3>

        {/* Goal */}
        {work.goal && (
          <p className="text-primary/70 text-xs font-sans mb-2 italic">
            Goal: {work.goal}
          </p>
        )}

        {/* Description */}
        {work.description && (
          <p className="text-muted text-sm leading-relaxed mb-6 font-sans">
            {work.description}
          </p>
        )}

        {/* Optional Link / CTA */}
        <div className="mt-auto pt-2">
          <a
            href={work.link || "https://wa.me/+918100146879"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent({
              eventName: "work_inquiry_click",
              elementName: work.title,
              category: "conversion",
              pagePath: "/works",
              metadata: { workTitle: work.title, category: work.category },
            })}
            className="btn-secondary py-2.5 px-4 rounded-xl text-xs inline-flex items-center gap-1.5 hover:bg-[rgba(164,132,215,0.25)] transition-all font-sans font-medium"
          >
            Inquire Project <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
