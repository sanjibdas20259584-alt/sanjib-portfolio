import { Instagram, Linkedin, MessageCircle, Mail } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[rgba(164,132,215,0.1)] py-10 md:py-16 flex flex-col items-center gap-6">
      <div className="font-serif text-[32px] text-foreground tracking-tight">Sanjib Das</div>

      <p className="text-muted text-center text-sm md:text-base font-sans">
        AI Ad Creative Specialist for D2C Brands · Kolkata
      </p>

      <div className="flex items-center gap-4 my-2">
        {[
          { icon: Instagram, url: "https://www.instagram.com/designs.sanjib" },
          { icon: Linkedin, url: "https://www.linkedin.com/in/designes-sanjib" },
          { icon: MessageCircle, url: "https://wa.me/+918100146879" },
          { icon: Mail, url: "mailto:designs.sanjib@gmail.com" },
        ].map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-muted hover:text-white hover:border-primary transition-all hover:bg-[rgba(164,132,215,0.15)]"
          >
            <item.icon size={18} />
          </a>
        ))}
      </div>

      <p className="text-muted/60 text-xs mt-4">
        © {year} Sanjib Das. All rights reserved.
      </p>
    </footer>
  );
};