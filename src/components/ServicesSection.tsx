import { services } from "../data";
import { motion } from "motion/react";
import { Check } from "lucide-react";

export const ServicesSection = () => {
  return (
    <section id="services" className="w-full max-w-7xl mx-auto px-6 md:px-8 pt-[64px] pb-[64px] flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center space-y-6 max-w-3xl mb-16 md:mb-20"
      >
        <div className="glass-pill">SERVICES</div>

        <h2 className="font-serif text-[44px] md:text-[56px] leading-[1.05] tracking-tight">
          What I <span className="italic text-gradient">offer</span>
        </h2>

        <p className="text-muted text-lg md:text-xl font-sans max-w-2xl">
          AI-assisted ad creatives and UGC-style concepts for D2C jewellery, beauty, skincare, and fashion brands.
        </p>
      </motion.div>

      <div className="w-full grid grid-cols-2 max-[380px]:grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 max-w-5xl">
        {services.map((service, i) => {
          const IconComponent = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-[1.5rem] md:rounded-[2rem] p-4 sm:p-6 md:p-8 flex flex-col items-start text-left transition-all hover:border-primary hover:bg-[rgba(164,132,215,0.05)] duration-300 h-full"
            >
              {/* Icon */}
              <div className="w-9 h-9 md:w-12 md:h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-4 md:mb-6 shrink-0">
                <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground mb-0 md:mb-3 font-semibold leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted text-sm sm:text-base leading-relaxed mb-6 font-sans hidden md:block">
                {service.description}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3 mb-6 w-full flex-grow hidden md:block">
                {service.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-foreground/90 font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="w-full h-px bg-[rgba(164,132,215,0.15)] my-5 shrink-0 hidden md:block" />

              {/* Best For */}
              <div className="w-full shrink-0 hidden md:block">
                <span className="text-xs font-cabin tracking-wider text-primary uppercase font-bold block mb-1">
                  Best For
                </span>
                <p className="text-xs sm:text-sm text-muted/95 font-sans leading-relaxed">
                  {service.bestFor}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};