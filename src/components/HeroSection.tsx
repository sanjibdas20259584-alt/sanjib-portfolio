import { MessageCircle, Zap, Video, Target, Package, Play } from "lucide-react";
import { motion } from "motion/react";
import { trackEvent } from "../lib/analytics";

export const HeroSection = () => {
  const freeAnglesWhatsApp = `https://wa.me/918100146879?text=${encodeURIComponent(
    "Hi Sanjib, I want 2 free ad angles for my brand. Here is my website/Instagram/product link:"
  )}`;

  return (
    <section className="relative w-full transition-all duration-700 ease-in-out flex flex-col justify-start pt-[64px] sm:pt-[80px] pb-10 md:pb-[48px]">
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260210_031346_d87182fb-b0af-4273-84d1-c6fd17d6bf0f.mp4"
            type="video/mp4"
          />
        </video>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(9,9,15,0.45)",
            zIndex: 1,
          }}
        />

        {/* Purple aurora glow */}
        <div className="absolute top-0 left-0 w-full md:w-1/2 h-full bg-[radial-gradient(ellipse_at_left,_var(--color-purple-glow)_0%,_transparent_70%)] opacity-40 blur-[80px] z-[2]" />
      </div>

      {/* Bottom fade overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "220px",
          background:
            "linear-gradient(to bottom, rgba(9, 9, 15, 0) 0%, rgba(9, 9, 15, 0.6) 50%, rgba(9, 9, 15, 1) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Radial fade overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(9,9,15,0) 40%, rgba(9,9,15,0.4) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-8 mt-0 flex flex-col items-center text-center gap-4 sm:gap-6"
      >
        {/* Availability pill */}
        <div className="flex items-center rounded-full border border-[rgba(164,132,215,0.5)] bg-[rgba(85,80,110,0.4)] backdrop-blur-[16px] p-1 pr-3 sm:p-1.5 sm:pr-4">
          <span className="bg-[#7B39FC] text-white text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mr-2 sm:mr-3">
            Available
          </span>
          <span className="text-[9px] sm:text-[10px] md:text-sm text-white font-medium pr-1">
            Open for Freelance Projects
          </span>
        </div>

        {/* Small label */}
        <div className="font-cabin tracking-widest text-[10px] sm:text-xs md:text-sm text-primary uppercase font-semibold">
          HI, I'M SANJIB DAS
        </div>

        {/* Headline */}
        <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[80px] lg:text-[96px] leading-[1.1] sm:leading-[1.05] tracking-[-0.02em] text-foreground max-w-5xl mx-auto">
          AI-assisted ad creatives for D2C brands that need better{" "}
          <span className="italic text-gradient">content to test</span>.
        </h1>

        {/* Subtext */}
        <p className="font-sans text-sm sm:text-base md:text-xl text-muted max-w-2xl mx-auto font-medium px-2">
          I help jewellery, beauty, skincare, and fashion brands create short product ads, UGC-style concepts, hooks, and scroll-stopping creatives for Instagram/Reels and Meta ads.
        </p>

        {/* Trust line */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-[10px] sm:text-xs md:text-sm text-muted/80 font-cabin tracking-wider uppercase">
          <span>AI Product Ads</span>
          <span className="text-primary">·</span>
          <span>UGC-style Creatives</span>
          <span className="text-primary">·</span>
          <span>Hook Testing</span>
          <span className="text-primary">·</span>
          <span>D2C Brands</span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-3 sm:mt-4 justify-center w-full max-w-[480px] px-2 sm:px-0">
          <a
            href="#my-works"
            className="btn-hero-primary w-full rounded-2xl text-white font-medium py-3 sm:py-4 px-6 flex items-center justify-center text-sm sm:text-base md:text-lg text-center"
            aria-label="View Sanjib Das portfolio works"
          >
            <Play size={18} className="mr-2" />
            View Ad Work
          </a>

          <a
            href={freeAnglesWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent({
                eventName: "whatsapp_click",
                elementName: "hero_free_angles",
                category: "conversion",
              })
            }
            className="w-full rounded-2xl text-white font-medium py-3 sm:py-4 px-6 flex items-center justify-center text-sm sm:text-base md:text-lg text-center transition-all hover:bg-[rgba(255,255,255,0.1)]"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(12px)",
              boxShadow: "none",
            }}
            aria-label="Get 2 free ad angles from Sanjib Das"
          >
            Get 2 Free Ad Angles
          </a>
        </div>

        {/* Section pill nav - visible everywhere */}
        <div className="flex flex-wrap justify-center gap-2 mt-6 sm:mt-[2rem]">
          {[
            { l: "About Sanjib Das", h: "#about-me" },
            { l: "Portfolio Works", h: "#my-works" },
            { l: "Pricing", h: "#pricing" },
            { l: "Reach Out", h: "#reach-out" },
          ].map((t) => (
            <a
              key={t.l}
              href={t.h}
              className="glass-pill !font-sans !normal-case !tracking-normal !px-3 !py-1.5 sm:!px-4 sm:!py-2 md:!px-6 md:!py-3 text-xs sm:text-sm md:text-base hover:bg-[rgba(164,132,215,0.2)] transition-colors"
            >
              {t.l}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};