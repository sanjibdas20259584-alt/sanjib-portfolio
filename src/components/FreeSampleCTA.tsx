import { motion } from "motion/react";
import { MessageCircle, Lightbulb } from "lucide-react";
import { trackEvent } from "../lib/analytics";

export const FreeSampleCTA = () => {
  const whatsappUrl = `https://wa.me/918100146879?text=${encodeURIComponent(
    "Hi Sanjib, I want 2 free ad angles for my brand. Here is my website/Instagram/product link:"
  )}`;

  return (
    <section className="w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-8 pt-6 pb-12 md:pt-[32px] md:pb-[64px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-[2rem] p-8 md:p-12 max-w-4xl mx-auto flex flex-col items-center text-center relative overflow-hidden"
      >
        {/* Purple glow accent */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle,_var(--color-purple-glow)_0%,_transparent_70%)] opacity-30 blur-[50px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[radial-gradient(circle,_var(--color-purple-glow)_0%,_transparent_70%)] opacity-20 blur-[40px] pointer-events-none z-0" />

        <div className="relative z-10 space-y-6 max-w-2xl">
          <div className="glass-pill">FREE AD ANGLES</div>

          <div className="w-14 h-14 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto">
            <Lightbulb size={28} />
          </div>

          <h2 className="font-serif text-[32px] md:text-[44px] leading-[1.1] tracking-tight text-foreground">
            Want 2 ad angles for your <span className="italic text-gradient">product</span>?
          </h2>

          <p className="text-muted text-base md:text-lg font-sans">
            Send your brand/product link and I'll suggest 2 quick ad angles you can test. No full finished video — just clear creative direction to help you decide.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent({
              eventName: "whatsapp_click",
              elementName: "free_ad_angles_cta",
              category: "conversion",
            })}
            className="btn-primary py-4 px-8 text-base md:text-lg inline-flex items-center gap-2 shadow-lg hover:brightness-110 mx-auto"
          >
            <MessageCircle size={20} />
            Get 2 Free Ad Angles
          </a>
        </div>
      </motion.div>
    </section>
  );
};