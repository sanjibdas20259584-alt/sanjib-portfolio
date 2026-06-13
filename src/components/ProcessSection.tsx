import { Send, Lightbulb, CreditCard, Rocket, Eye, Repeat } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    icon: Send,
    title: "Send your product link",
    description: "Share your brand, product, or Instagram link via WhatsApp."
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "I suggest the angle/hook",
    description: "I review your product and suggest 1-2 ad angles or hooks to test."
  },
  {
    number: "03",
    icon: CreditCard,
    title: "You confirm the paid trial",
    description: "If you like the direction, you pay ₹699 to start the trial."
  },
  {
    number: "04",
    icon: Rocket,
    title: "I create the ad creative",
    description: "I create an 8-12 second AI-assisted product or UGC-style ad."
  },
  {
    number: "05",
    icon: Eye,
    title: "You review and decide",
    description: "You get 1 revision and can then decide if you want a bigger package."
  }
];

export const ProcessSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-8 pt-12 md:pt-[64px] pb-12 md:pb-[64px] flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center space-y-6 max-w-3xl mb-16"
      >
        <div className="glass-pill">HOW IT WORKS</div>

        <h2 className="font-serif text-[44px] md:text-[56px] leading-[1.05] tracking-tight">
          How the paid trial <span className="italic text-gradient">works</span>
        </h2>

        <p className="text-muted text-lg md:text-xl font-sans max-w-2xl">
          A simple 5-step process to get your first ad creative and test the quality before a bigger commitment.
        </p>
      </motion.div>

      <div className="w-full max-w-4xl mx-auto">
        {steps.map((step, i) => {
          const IconComponent = step.icon;
          const isLast = i === steps.length - 1;
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 md:gap-6 relative"
            >
              {/* Connector line */}
              {!isLast && (
                <div className="absolute left-[23px] md:left-[29px] top-14 bottom-0 w-px bg-[rgba(164,132,215,0.2)]" />
              )}

              {/* Number circle */}
              <div className="w-12 h-12 md:w-[60px] md:h-[60px] rounded-full bg-[#181131] border border-[rgba(164,132,215,0.4)] flex items-center justify-center shrink-0 z-10">
                <IconComponent size={22} className="text-primary" />
              </div>

              {/* Content */}
              <div className="flex flex-col pb-8 md:pb-10">
                <span className="font-cabin text-[10px] md:text-xs uppercase tracking-wider text-primary font-bold mb-1">
                  Step {step.number}
                </span>
                <h3 className="font-sans text-lg md:text-xl text-foreground font-semibold mb-1">
                  {step.title}
                </h3>
                <p className="text-muted text-sm md:text-base font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8"
      >
        <a
          href="https://wa.me/918100146879?text=Hi%20Sanjib%2C%20I%20want%202%20free%20ad%20angles%20for%20my%20brand.%20Here%20is%20my%20website%2FInstagram%2Fproduct%20link%3A"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary py-3.5 px-8 text-base font-semibold inline-flex items-center gap-2"
        >
          Start with 2 Free Angles
        </a>
      </motion.div>
    </section>
  );
};