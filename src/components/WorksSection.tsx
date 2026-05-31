import { useRef, useState } from "react";
import { works } from "../data";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { Play } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { MediaRenderer } from "./MediaRenderer";
import { trackEvent } from "../lib/analytics";

interface CardProps {
  work: typeof works[0];
  index: number;
  total: number;
  targetScale: number;
  progress: MotionValue<number>;
}

const Card: React.FC<CardProps> = ({ 
  work, 
  index, 
  total,
  targetScale,
  progress 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const handleCardClick = () => {
    if (work.type === 'video' && !isVideoPlaying) {
      setIsVideoPlaying(true);
      trackEvent({
        eventName: "video_play",
        elementName: work.title,
        category: "engagement",
        metadata: { workTitle: work.title, videoUrl: work.videoUrl },
      });
    }
  };

  const stopVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVideoPlaying(false);
  };
  
  // As progress goes from 0 to 1, if this card's index is passed, it shrinks
  const range = [index * (1 / total), 1];
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div 
      ref={containerRef}
      className="flex justify-center sticky mb-0"
      style={{ top: `${80 + index * 8}px` }}
    >
      <motion.div 
        onClick={handleCardClick}
        style={{ 
          scale,
        }}
        className={`relative w-full max-w-md h-[60vh] min-h-[450px] md:h-[600px] glass-card rounded-[2rem] overflow-hidden shadow-2xl flex flex-col will-change-transform transform-origin-top ${isVideoPlaying ? 'video-playing' : ''} ${work.type === 'video' ? 'cursor-pointer' : ''}`}
      >
        {/* Category Pill / Close Button */}
        <div className={`absolute top-4 right-4 z-[20] flex gap-2 transition-opacity duration-300`}>
          {isVideoPlaying ? (
            <button 
              onClick={stopVideo}
              className="bg-red-500/90 hover:bg-red-500 backdrop-blur-md rounded-full px-4 py-1.5 text-xs font-cabin tracking-wider font-bold uppercase text-white shadow-lg pointer-events-auto"
            >
              Close Video
            </button>
          ) : (
            <>
              {work.type === 'video' && (
                <div className="bg-primary hover:bg-primary-hover transition-colors rounded-full w-8 h-8 flex items-center justify-center text-white shadow-[0_0_15px_rgba(123,57,252,0.5)]">
                  <Play size={14} className="ml-0.5" />
                </div>
              )}
              <div className="bg-primary/90 backdrop-blur-md rounded-full px-4 py-1.5 text-xs font-cabin tracking-wider font-bold uppercase text-white shadow-lg">
                {work.category}
              </div>
            </>
          )}
        </div>

        {/* Label Badge (Spec Concept / Client Work) */}
        {work.label && !isVideoPlaying && (
          <div className="absolute top-4 left-4 z-[20] bg-[rgba(30,22,54,0.8)] backdrop-blur-md rounded-full px-3 py-1 text-[10px] font-cabin tracking-wider font-bold uppercase text-muted/90 border border-[rgba(164,132,215,0.25)]">
            {work.label}
          </div>
        )}

        {/* Media */}
        <div className="absolute inset-0 w-full h-full">
          <MediaRenderer 
            work={work} 
            isPlaying={isVideoPlaying}
            className="w-full h-full rounded-[2rem]"
          />
          {/* Subtle gradient overlay to make text pop */}
          <div className={`absolute inset-0 bg-gradient-to-t from-[#0A0613] via-black/20 to-transparent transition-opacity duration-300 ${isVideoPlaying ? 'opacity-0 pointer-events-none' : 'opacity-80 pointer-events-none'}`} style={{ zIndex: 6 }} />
        </div>

        {/* Intercept Clicks when NOT playing */}
        {work.type === 'video' && !isVideoPlaying && (
          <div className="absolute inset-0 z-[15]" />
        )}

        {/* Text */}
        <div className={`absolute bottom-6 left-6 right-6 z-[10] transition-opacity duration-300 ${isVideoPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="text-primary font-cabin font-bold text-sm mb-2 opacity-90">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </div>
          <h3 className="font-sans font-medium text-2xl text-white leading-tight">
            {work.title}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

const MobileCard: React.FC<{ work: typeof works[0]; index: number; total: number }> = ({ work, index, total }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleCardClick = () => {
    if (work.type === 'video' && !isVideoPlaying) {
      setIsVideoPlaying(true);
      trackEvent({
        eventName: "video_play",
        elementName: work.title,
        category: "engagement",
        metadata: { workTitle: work.title, videoUrl: work.videoUrl },
      });
    }
  };

  const stopVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVideoPlaying(false);
  };

  return (
    <div 
      onClick={handleCardClick}
      className={`relative w-[80vw] sm:w-[320px] h-[380px] shrink-0 snap-start glass-card rounded-[2rem] overflow-hidden flex flex-col cursor-pointer transition-all hover:border-primary/50 duration-300 ${isVideoPlaying ? 'video-playing' : ''}`}
    >
      {/* Category Pill / Close Button */}
      <div className="absolute top-4 right-4 z-[20] flex gap-2">
        {isVideoPlaying ? (
          <button 
            onClick={stopVideo}
            className="bg-red-500/90 hover:bg-red-500 backdrop-blur-md rounded-full px-3 py-1 text-[10px] font-cabin tracking-wider font-bold uppercase text-white shadow-lg pointer-events-auto"
          >
            Close Video
          </button>
        ) : (
          <>
            {work.type === 'video' && (
              <div className="bg-primary hover:bg-primary-hover transition-colors rounded-full w-7 h-7 flex items-center justify-center text-white shadow-[0_0_15px_rgba(123,57,252,0.5)]">
                <Play size={12} className="ml-0.5" />
              </div>
            )}
            <div className="bg-primary/90 backdrop-blur-md rounded-full px-3 py-1 text-[10px] font-cabin tracking-wider font-bold uppercase text-white shadow-lg">
              {work.category}
            </div>
          </>
        )}
      </div>

      {/* Label Badge */}
      {work.label && !isVideoPlaying && (
        <div className="absolute top-4 left-4 z-[20] bg-[rgba(30,22,54,0.8)] backdrop-blur-md rounded-full px-2.5 py-1 text-[9px] font-cabin tracking-wider font-bold uppercase text-muted/90 border border-[rgba(164,132,215,0.25)]">
          {work.label}
        </div>
      )}

      {/* Media */}
      <div className="absolute inset-0 w-full h-full">
        <MediaRenderer 
          work={work} 
          isPlaying={isVideoPlaying}
          className="w-full h-full rounded-[2rem]"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-[#0A0613] via-black/10 to-transparent transition-opacity duration-300 ${isVideoPlaying ? 'opacity-0 pointer-events-none' : 'opacity-85 pointer-events-none'}`} style={{ zIndex: 6 }} />
      </div>

      {/* Text */}
      <div className={`absolute bottom-5 left-5 right-5 z-[10] transition-opacity duration-300 ${isVideoPlaying ? 'opacity-0' : 'opacity-100'}`}>
        <div className="text-primary font-cabin font-bold text-xs mb-1.5 opacity-90">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>
        <h3 className="font-sans font-medium text-lg text-white leading-tight">
          {work.title}
        </h3>
      </div>
    </div>
  );
};

export const WorksSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const categories = ["ALL", "AI UGC Ads", "Thumbnails", "Social Media Posts", "Graphic Design"];
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredWorks = activeFilter === "ALL" 
    ? works 
    : works.filter(w => w.category === activeFilter);

  // Limit homepage to first 6 works
  const displayedWorks = filteredWorks.slice(0, 6);

  return (
    <section id="my-works" className="w-full relative mt-[32px] md:mt-[64px] pb-12 md:pb-[64px]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 mb-2">
          <div className="glass-pill">MY WORKS</div>
          
          <h2 className="font-serif text-[34px] sm:text-[44px] md:text-[56px] leading-[1.1] sm:leading-[1.05] tracking-tight">
            Selected <span className="italic text-gradient">work</span>
          </h2>
          
          <p className="text-muted text-sm sm:text-base md:text-xl font-sans max-w-2xl">
            A mix of client projects, spec concepts, and practice campaigns.
          </p>

          {/* Filter Pills */}
          <div 
            className="flex w-full overflow-x-auto hide-scrollbar justify-start md:justify-center gap-2.5 py-3 px-4"
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 50,
              background: 'rgba(9, 9, 15, 0.85)',
              backdropFilter: 'blur(12px)',
              marginLeft: '-20px',
              marginRight: '-20px',
              width: 'calc(100% + 40px)'
            }}
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
        </div>
      </div>

      {/* Desktop Cards Stack Container */}
      <div 
        ref={containerRef}
        className="hidden md:block w-full relative px-6 md:px-8"
      >
        {displayedWorks.map((work, i) => {
          const targetScale = 1 - ( (displayedWorks.length - 1 - i) * 0.01 );
          return (
            <Card 
              key={work.id} 
              index={i} 
              work={work} 
              total={displayedWorks.length}
              targetScale={targetScale}
              progress={scrollYProgress} 
            />
          );
        })}
      </div>

      {/* Mobile/Tablet Horizontal Carousel */}
      <div className="md:hidden block w-full px-5">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 py-4 hide-scrollbar scroll-smooth">
          {displayedWorks.map((work, i) => (
            <MobileCard 
              key={work.id}
              work={work}
              index={i}
              total={displayedWorks.length}
            />
          ))}
        </div>
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-8 md:mt-16 relative z-30 w-full px-5 md:px-0">
        <Link 
          to="/works" 
          onClick={() => trackEvent({
            eventName: "view_more_click",
            elementName: "view_more_works",
            category: "navigation",
          })}
          className="btn-primary px-8 py-3.5 sm:py-4 text-base md:text-lg font-semibold tracking-wide shadow-lg w-full sm:w-auto text-center hover:brightness-110"
        >
          View More
        </Link>
      </div>
    </section>
  );
};
