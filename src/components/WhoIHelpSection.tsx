import { Gem, Droplet, Sparkles, Shirt } from "lucide-react";
import { motion } from "motion/react";

const targetBrands = [
  {
    icon: Gem,
    title: "Jewellery Brands",
    angles: "Gifting, styling, luxury, product shine"
  },
  {
    icon: Droplet,
    title: "Skincare Brands",
    angles: "Problem/solution, benefit, routine, trust"
  },
  {
    icon: Sparkles,
    title: "Beauty Brands",
    angles: "Transformation, use-case, creator-style content"
  },
  {
    icon: Shirt,
    title: "Fashion/Accessories",
    angles: "Styling, outfit match, occasion-based creatives"
  }
];

export const WhoIHelpSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-8 pt-12 md:pt-[64px] pb-12 md:pb-[64px] flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center space-y-6 max-w-3xl mb-16"
      >
        <div className="glass-pill">WHO I HELP</div>

        <h2 className="font-serif text-[44px] md:text-[56px] leading-[1.05] tracking-tight">
          D2C brands I <span className="italic text-gradient">work with</span>
        </h2>

        <p className="text-muted text-lg md:text-xl font-sans max-w-2xl">
          I focus on brands that sell jewellery, beauty, skincare, and fashion products online and need ad creatives to test and grow.
        </p>
      </motion.div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl">
        {targetBrands.map((brand, i) => {
          const IconComponent = brand.icon;
          return (
            <motion.div
              key={brand.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-[2rem] p-6 sm:p-8 flex flex-col items-start text-left transition-all hover:border-primary hover:bg-[rgba(164,132,215,0.05)] duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-5 shrink-0">
                <IconComponent size={24} />
              </div>
              <h3 className="font-sans text-xl text-foreground font-semibold mb-2">
                {brand.title}
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed font-sans">
                <span className="text-primary font-medium">Ad angles: </span>
                {brand.angles}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};