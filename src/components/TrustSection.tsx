import { Clock, Eye, Sparkles, Gift } from "lucide-react";
import { motion } from "motion/react";

const trustCards = [
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Most simple creatives can be delivered within 24–48 hours.",
  },
  {
    icon: Eye,
    title: "Made for Online Attention",
    description: "Every creative is designed for scroll-stopping social feeds, thumbnails, ads, and product pages.",
  },
  {
    icon: Sparkles,
    title: "AI + Design Thinking",
    description: "I combine AI tools with human design judgment — layout, copy, and brand clarity.",
  },
  {
    icon: Gift,
    title: "Free Sample Option",
    description: "Not sure yet? Request a small free sample idea before starting.",
  },
];

export const TrustSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-8 pt-[64px] pb-[64px] flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center space-y-6 max-w-3xl mb-16"
      >
        <div className="glass-pill">WHY ME</div>

        <h2 className="font-serif text-[44px] md:text-[56px] leading-[1.05] tracking-tight">
          Why clients work with <span className="italic text-gradient">me</span>
        </h2>

        <p className="text-muted text-lg md:text-xl font-sans max-w-2xl">
          Fast turnaround, clear communication, and creatives built for real results.
        </p>
      </motion.div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl">
        {trustCards.map((card, i) => {
          const IconComponent = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-[2rem] p-8 flex flex-col items-start text-left transition-all hover:border-primary hover:bg-[rgba(164,132,215,0.05)] duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-5 shrink-0">
                <IconComponent size={24} />
              </div>
              <h3 className="font-sans text-xl text-foreground font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed font-sans">
                {card.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Testimonial placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 glass-card rounded-full px-6 py-3 text-xs text-muted/80 font-sans flex items-center gap-2"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
        Client feedback coming soon — real testimonials will be added as they come in.
      </motion.div>
    </section>
  );
};
