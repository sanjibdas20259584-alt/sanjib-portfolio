import React, { useState } from "react";
import { contactLinks } from "../data";
import { MessageCircle, Mail, Instagram, Linkedin, Send, Check, AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import { supabase } from "../lib/supabase";
import { trackEvent } from "../lib/analytics";

const IconMap: Record<string, any> = {
  MessageCircle,
  Mail,
  Instagram,
  Linkedin
};

const serviceOptions = [
  "AI Ad Creative",
  "AI UGC Concept",
  "YouTube Thumbnail",
  "Social Media Post",
  "Brand Identity",
  "Other",
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");

    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        business_name: formData.brand || null,
        service_interest: formData.service || null,
        message: formData.message,
        source_page: window.location.pathname,
      });

      if (error) throw error;

      trackEvent({
        eventName: "form_submit_success",
        elementName: "contact_form",
        category: "conversion",
        metadata: { service: formData.service },
      });

      setStatus("success");
    } catch {
      trackEvent({
        eventName: "form_submit_failed",
        elementName: "contact_form",
        category: "conversion",
      });
      setStatus("error");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setFormData({ name: "", email: "", phone: "", brand: "", service: "", message: "" });
  };

  return (
    <section id="reach-out" className="w-full max-w-7xl mx-auto px-6 md:px-8 pt-[64px] pb-[64px]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto mb-16"
      >
        <div className="glass-pill">GET IN TOUCH</div>
        
        <h2 className="font-serif text-[44px] md:text-[56px] leading-[1.05] tracking-tight">
          Let's work <span className="italic text-gradient">together</span>
        </h2>
        
        <p className="text-muted text-lg md:text-xl font-sans">
          Got a project in mind? Reach out and let's create something that stands out.
        </p>

        <p className="text-muted/80 text-sm font-sans max-w-xl">
          Best way to reach me: WhatsApp or Email. Share your brand link, service needed, deadline, and budget.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="font-cabin text-sm uppercase tracking-wider text-muted font-bold mb-2">
            REACH ME DIRECTLY
          </div>
          
          <div className="flex flex-col gap-4">
            {contactLinks.map((link) => {
              const Icon = IconMap[link.icon];
              const isWhatsApp = link.name === "WhatsApp";
              return (
                <a 
                  key={link.name} 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (isWhatsApp) {
                      trackEvent({
                        eventName: "whatsapp_click",
                        elementName: "contact_sidebar",
                        category: "conversion",
                      });
                    }
                  }}
                  className={`glass-card rounded-2xl p-4 flex items-center gap-4 hover:border-primary hover:bg-[rgba(164,132,215,0.1)] transition-all group ${
                    isWhatsApp ? 'border-primary/40 bg-[rgba(164,132,215,0.06)]' : ''
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isWhatsApp ? 'bg-primary/25 text-primary' : 'bg-primary/15 text-primary group-hover:bg-primary/30'
                  }`}>
                    <Icon size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-lg text-foreground group-hover:text-white transition-colors">{link.name}</span>
                    {isWhatsApp && (
                      <span className="text-xs text-primary/80 font-sans">Fastest response</span>
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-[2rem] p-8 md:p-10 flex flex-col gap-6 min-h-[400px] justify-center"
        >
          {status === "success" ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center shadow-[0_0_20px_rgba(123,57,252,0.3)]">
                <Check size={32} strokeWidth={3} />
              </div>
              <h3 className="font-serif text-3xl text-foreground font-semibold">Sent Successfully!</h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed max-w-sm">
                Thank you for reaching out. I will contact you soon about your project.
              </p>
              <button 
                onClick={resetForm}
                className="btn-secondary py-2.5 px-6 rounded-xl text-sm transition-colors hover:bg-[rgba(164,132,215,0.2)] mt-2"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : status === "error" ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center">
                <AlertCircle size={32} />
              </div>
              <h3 className="font-serif text-2xl text-foreground font-semibold">Something went wrong</h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed max-w-sm">
                Please try again or contact me directly on WhatsApp.
              </p>
              <div className="flex gap-3">
                <button 
                  onClick={resetForm}
                  className="btn-secondary py-2.5 px-6 rounded-xl text-sm"
                >
                  Try Again
                </button>
                <a 
                  href="https://wa.me/918100146879"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-2.5 px-6 rounded-xl text-sm"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>
          ) : (
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-cabin text-sm uppercase tracking-wider text-muted font-bold">NAME</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  placeholder="Your name" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[rgba(30,22,54,0.4)] border border-[rgba(164,132,215,0.2)] rounded-lg px-4 py-3.5 text-foreground placeholder-muted outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-cabin text-sm uppercase tracking-wider text-muted font-bold">EMAIL</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  placeholder="your@email.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[rgba(30,22,54,0.4)] border border-[rgba(164,132,215,0.2)] rounded-lg px-4 py-3.5 text-foreground placeholder-muted outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-cabin text-sm uppercase tracking-wider text-muted font-bold">PHONE / WHATSAPP</label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="+91 XXXXX XXXXX" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[rgba(30,22,54,0.4)] border border-[rgba(164,132,215,0.2)] rounded-lg px-4 py-3.5 text-foreground placeholder-muted outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="brand" className="font-cabin text-sm uppercase tracking-wider text-muted font-bold">BRAND / BUSINESS NAME</label>
                <input 
                  type="text" 
                  id="brand" 
                  placeholder="Your brand or business name" 
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  className="w-full bg-[rgba(30,22,54,0.4)] border border-[rgba(164,132,215,0.2)] rounded-lg px-4 py-3.5 text-foreground placeholder-muted outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="font-cabin text-sm uppercase tracking-wider text-muted font-bold">WHAT DO YOU NEED?</label>
                <select 
                  id="service" 
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[rgba(30,22,54,0.4)] border border-[rgba(164,132,215,0.2)] rounded-lg px-4 py-3.5 text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
                >
                  <option value="" className="bg-[#100820] text-muted">Select a service...</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#100820] text-foreground">{opt}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-cabin text-sm uppercase tracking-wider text-muted font-bold">MESSAGE</label>
                <textarea 
                  id="message" 
                  required
                  placeholder="Tell me about your project, deadline, and budget..." 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[rgba(30,22,54,0.4)] border border-[rgba(164,132,215,0.2)] rounded-lg px-4 py-4 text-foreground placeholder-muted outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={status === "loading"}
                className="btn-primary w-full py-4 rounded-xl text-lg mt-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} className="mr-1" />
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              <p className="text-muted/50 text-xs text-center font-sans mt-1">
                By submitting this form, you agree that I may contact you about your project.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
