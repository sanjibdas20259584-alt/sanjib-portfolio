import { Instagram, Linkedin, MessageCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[rgba(164,132,215,0.1)] py-10 md:py-16 flex flex-col items-center gap-6 px-6">
      <div className="font-serif text-[32px] text-foreground tracking-tight">Sanjib Das</div>

      <p className="text-muted text-center text-sm md:text-base font-sans max-w-2xl leading-relaxed">
        Sanjib Das Portfolio - Graphic designer and AI ads creator from Kolkata, India. Creating AI UGC ads, product creatives, YouTube thumbnails, and social media designs for brands, creators, and startups.
      </p>

      {/* Crawlable Navigation Links */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-sans text-muted my-2">
        <Link to="/" className="hover:text-primary transition-colors">Sanjib Das Portfolio</Link>
        <Link to="/sanjib-das" className="hover:text-primary transition-colors">About Sanjib Das</Link>
        <Link to="/works" className="hover:text-primary transition-colors">Sanjib Das Works</Link>
        <Link to="/pricing" className="hover:text-primary transition-colors">Sanjib Das Pricing</Link>
        <a href="/#reach-out" className="hover:text-primary transition-colors">Contact Sanjib Das</a>
      </div>

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