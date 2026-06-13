import { MessageCircle, Zap, Video, Target, Package, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export const AboutSection = () => {
  const skills = [
    { name: "AI Product Ad Creatives", icon: Zap },
    { name: "AI UGC-style Ad Concepts", icon: Video },
    { name: "Hook & Angle Testing", icon: Target },
    { name: "Creative Packs for D2C Brands", icon: Package },
  ];

  return (
    <section id="about-me" className="w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-8 pt-12 md:pt-[64px] pb-6 md:pb-8 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center space-y-6 max-w-3xl"
      >
        <div className="glass-pill">ABOUT ME</div>

        <h2 className="font-serif text-[48px] md:text-[56px] leading-[1.05] tracking-tight">
          The person behind the <span className="italic text-gradient">creatives</span>
        </h2>

        <div className="space-y-5 text-muted text-lg md:text-xl font-sans text-left md:text-center mt-6">
          <p>
            I create AI-assisted ad creatives and UGC-style concepts for D2C brands. My focus is product hooks, ad angles, short-form content, and fast creative testing for jewellery, beauty, skincare, and fashion brands.
          </p>
          <p>
            I use AI tools combined with creative direction to help brands generate multiple ad angles quickly — so they can test what works without expensive shoots or long turnaround times.
          </p>
        </div>

        <div className="flex flex-col w-full sm:flex-row gap-4 justify-center pt-8">
          <a href="#reach-out" className="btn-primary w-full sm:w-auto">
            <MessageCircle size={20} /> Let's Talk
          </a>
          <a href="#my-works" className="btn-secondary w-full sm:w-auto">
            See My Work
          </a>
        </div>
      </motion.div>

      <div className="w-full grid grid-cols-2 gap-3 md:gap-4 mt-12 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card rounded-2xl p-4 flex flex-row items-center text-left gap-3 md:gap-3 hover:border-primary transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0">
              <skill.icon size={20} />
            </div>
            <span className="font-medium text-sm sm:text-base text-foreground m-0">{skill.name}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full max-w-4xl mt-12 glass-card rounded-[2rem] p-6 sm:p-8 md:p-12 flex flex-col items-center gap-4"
      >
        <div className="w-full flex flex-row justify-between items-center divide-x divide-[rgba(164,132,215,0.2)]">
          <div className="flex flex-col items-center justify-center w-full px-1 sm:px-4">
            <span className="font-serif text-3xl sm:text-5xl md:text-6xl text-gradient block mb-1">8+</span>
            <span className="font-cabin text-[10px] sm:text-sm uppercase tracking-wider text-muted text-center leading-tight">Demo Creatives</span>
          </div>
          <div className="flex flex-col items-center justify-center w-full px-1 sm:px-4">
            <span className="font-serif text-3xl sm:text-5xl md:text-6xl text-gradient block mb-1">4</span>
            <span className="font-cabin text-[10px] sm:text-sm uppercase tracking-wider text-muted text-center leading-tight">Creative Formats</span>
          </div>
          <div className="flex flex-col items-center justify-center w-full px-1 sm:px-4">
            <span className="font-serif text-3xl sm:text-5xl md:text-6xl text-gradient block mb-1">48h</span>
            <span className="font-cabin text-[10px] sm:text-sm uppercase tracking-wider text-muted text-center leading-tight">Trial Delivery</span>
          </div>
        </div>
        <span className="text-xs text-muted/60 font-sans italic">
          Portfolio includes demo/spec creatives created to show ad direction, hooks, and product storytelling. Real client case studies will be added as they come in.
        </span>
      </motion.div>
    </section>
  );
};