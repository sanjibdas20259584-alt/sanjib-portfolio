import { pricing } from "../data";
import { Check, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { trackEvent } from "../lib/analytics";

export const PricingSection = () => {
  return (
    <section id="pricing" className="w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-8 pt-12 md:pt-16 pb-12 md:pb-20 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center space-y-4 md:space-y-6 max-w-3xl mb-10 md:mb-24"
      >
        <div className="glass-pill">PRICING</div>

        <h2 className="font-serif text-[34px] sm:text-[44px] md:text-[56px] leading-[1.1] sm:leading-[1.05] tracking-tight">
          Simple <span className="italic text-gradient">pricing</span>
        </h2>

        <p className="text-muted text-sm sm:text-base md:text-xl font-sans max-w-2xl px-2">
          AI-assisted ad creatives for D2C jewellery, beauty, skincare, and fashion brands.
        </p>

        <p className="text-muted/70 text-xs sm:text-sm font-sans">
          International payment available on request.
        </p>
      </motion.div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl">
        {pricing.map((plan, i) => {
          const prefilledMsg = `Hi Sanjib, I'm interested in the ${plan.title} package.

My brand/business name:
Website/Instagram link:
Product to promote:
Goal: sales / awareness / engagement
Package interested in: ${plan.title}
Deadline:
Budget:
Can we discuss this?`;

          // Split price into main amount and unit (e.g., "₹7,999" and "/month")
          const priceMatch = plan.price.match(/^([^/]+)(\/.*)?$/);
          const mainPrice = priceMatch?.[1] || plan.price;
          const priceUnit = priceMatch?.[2] || '';
          const whatsappUrl = `https://wa.me/918100146879?text=${encodeURIComponent(prefilledMsg)}`;

          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-[2rem] p-6 sm:p-8 flex flex-col items-center text-center ${
                plan.isPopular
                  ? 'bg-[#181131] border border-[rgba(164,132,215,0.6)] shadow-[0_0_40px_rgba(123,57,252,0.15)] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] pt-12 md:-mt-8 md:mb-8'
                  : 'glass-card'
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 text-white text-xs font-cabin tracking-widest font-bold uppercase py-2 px-4 rounded-full shadow-[0_0_15px_rgba(123,57,252,0.5)] whitespace-nowrap ${
                  plan.badgeType === 'popular' ? 'bg-primary' :
                  plan.badgeType === 'monthly' ? 'bg-[#2563eb]' :
                  'bg-[rgba(164,132,215,0.6)]'
                }`}>
                  {plan.badge}
                </div>
              )}

              <h3 className="font-sans text-lg md:text-xl font-medium text-muted mb-3 md:mb-4">{plan.title}</h3>
              <div className="flex flex-wrap items-baseline justify-center gap-x-1 mb-3 md:mb-4 min-w-0">
                <span className="font-serif text-4xl sm:text-5xl md:text-[56px] lg:text-[64px] text-foreground leading-none">{mainPrice}</span>
                {priceUnit && <span className="text-sm sm:text-base md:text-lg lg:text-xl text-muted font-sans shrink-0">{priceUnit}</span>}
              </div>

              {/* Best For line */}
              {plan.bestFor && (
                <p className="text-xs text-muted/80 font-sans mb-6 md:mb-8 italic">
                  {plan.bestFor}
                </p>
              )}

              <ul className="flex flex-col gap-3 md:gap-4 text-left w-full mb-6 md:mb-10 flex-grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex flex-row items-center gap-3">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-foreground/90 font-medium text-sm">{feature}</span>
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
                className={`w-full ${plan.isPopular ? 'btn-primary' : 'btn-secondary'} mt-auto py-3.5 px-4 rounded-xl text-sm font-sans font-semibold flex items-center justify-center gap-2`}
              >
                <MessageSquare size={16} />
                Get Started
              </a>
            </motion.div>
          );
        })}
      </div>

      {/* View Full Pricing Button */}
      <div className="flex justify-center mt-10 md:mt-16 w-full px-5 md:px-0">
        <Link
          to="/pricing"
          onClick={() => trackEvent({
            eventName: "view_full_pricing_click",
            elementName: "view_full_pricing",
            category: "navigation",
          })}
          className="btn-primary px-8 py-3.5 sm:py-4 text-base md:text-lg font-semibold tracking-wide shadow-lg relative z-20 w-full sm:w-auto text-center hover:brightness-110"
        >
          View Full Pricing
        </Link>
      </div>
    </section>
  );
};