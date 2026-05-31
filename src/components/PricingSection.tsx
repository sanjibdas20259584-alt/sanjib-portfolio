import { pricing } from "../data";
import { Check, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { trackEvent } from "../lib/analytics";

export const PricingSection = () => {
  return (
    <section id="pricing" className="w-full max-w-7xl mx-auto px-6 md:px-8 pt-[64px] pb-[64px] flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center space-y-6 max-w-3xl mb-16 md:mb-24"
      >
        <div className="glass-pill">PRICING</div>
        
        <h2 className="font-serif text-[44px] md:text-[56px] leading-[1.05] tracking-tight">
          Straightforward <span className="italic text-gradient">pricing</span>
        </h2>
        
        <p className="text-muted text-lg md:text-xl font-sans max-w-2xl">
          Straightforward pricing for AI ad creatives, UGC concepts, and design work.
        </p>
      </motion.div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl">
        {pricing.map((plan, i) => {
          const prefilledMsg = `Hi Sanjib, I'm interested in the ${plan.title} package from your portfolio.

My brand/business name:
Service I need:
Project details:
Deadline:
Budget:
Can we discuss this?`;
          const whatsappUrl = `https://wa.me/918100146879?text=${encodeURIComponent(prefilledMsg)}`;

          return (
            <motion.div 
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-[2rem] p-8 flex flex-col items-center text-center ${
                plan.isPopular 
                  ? 'bg-[#181131] border border-[rgba(164,132,215,0.6)] shadow-[0_0_40px_rgba(123,57,252,0.15)] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] pt-12 md:-mt-8 md:mb-8' 
                  : 'glass-card'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-cabin tracking-widest font-bold uppercase py-2 px-4 rounded-full shadow-[0_0_15px_rgba(123,57,252,0.5)] whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <h3 className="font-sans text-xl font-medium text-muted mb-4">{plan.title}</h3>
              <div className="font-serif text-6xl md:text-[64px] text-foreground mb-4">
                {plan.price}
              </div>

              {/* Best For line */}
              {plan.bestFor && (
                <p className="text-xs text-muted/80 font-sans mb-8 italic">
                  {plan.bestFor}
                </p>
              )}

              <ul className="flex flex-col gap-4 text-left w-full mb-10 flex-grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex flex-row items-center gap-3">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-foreground/90 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={whatsappUrl} 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent({
                    eventName: "get_started_click",
                    elementName: plan.title,
                    category: "conversion",
                    metadata: { packageName: plan.title, serviceCategory: "homepage" },
                  });
                  trackEvent({
                    eventName: "whatsapp_click",
                    elementName: `pricing_${plan.title}`,
                    category: "conversion",
                    metadata: { packageName: plan.title },
                  });
                  trackEvent({
                    eventName: "pricing_package_click",
                    elementName: plan.title,
                    category: "conversion",
                    metadata: { packageName: plan.title, price: plan.price, category: "homepage" },
                  });
                }}
                className={`w-full ${plan.isPopular ? 'btn-primary' : 'btn-secondary'} mt-auto flex items-center justify-center gap-2`}
              >
                <MessageSquare size={18} />
                Get Started
              </a>
            </motion.div>
          );
        })}
      </div>

      {/* View Full Pricing Button */}
      <div className="flex justify-center mt-16 w-full px-6 md:px-0">
        <Link 
          to="/pricing" 
          onClick={() => trackEvent({
            eventName: "view_full_pricing_click",
            elementName: "view_full_pricing",
            category: "navigation",
          })}
          className="btn-primary px-8 py-4 text-base md:text-lg font-semibold tracking-wide shadow-lg relative z-20 w-full sm:w-auto text-center hover:brightness-110"
        >
          View Full Pricing
        </Link>
      </div>
    </section>
  );
};
