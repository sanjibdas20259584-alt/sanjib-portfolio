import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLocation, Link } from "react-router-dom";
import { trackEvent } from "../lib/analytics";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: isHome ? "#" : "/", isHash: !isHome },
    { label: "About Sanjib Das", href: "/sanjib-das", isHash: false },
    { label: "Services", href: isHome ? "#services" : "/#services", isHash: true },
    { label: "My Works", href: isHome ? "#my-works" : "/#my-works", isHash: true },
    { label: "Pricing", href: "/pricing", isHash: false },
    { label: "Reach Out", href: isHome ? "#reach-out" : "/#reach-out", isHash: true },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 md:top-6 md:right-8 z-[101] p-2.5 rounded-[10px] glass-card text-foreground hover:bg-[rgba(85,80,110,0.6)] transition-all"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-sm z-[99]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{ transformOrigin: 'top right' }}
              className="fixed top-[75px] right-4 md:top-[90px] md:right-8 w-[220px] bg-[rgba(30,22,54,0.65)] backdrop-blur-[24px] border border-[rgba(164,132,215,0.4)] shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-[1.25rem] p-2 z-[100] flex flex-col"
            >
              <div className="flex flex-col">
                {menuItems.map((item) => (
                  item.isHash ? (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => {
                        setIsOpen(false);
                        trackEvent({
                          eventName: "nav_click",
                          elementName: item.label,
                          category: "navigation",
                          metadata: { targetPath: item.href },
                        });
                      }}
                      className="font-cabin text-[16px] text-white py-3 px-4 rounded-xl transition-all hover:bg-[rgba(164,132,215,0.2)] block w-full text-center tracking-wider"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => {
                        setIsOpen(false);
                        trackEvent({
                          eventName: "nav_click",
                          elementName: item.label,
                          category: "navigation",
                          metadata: { targetPath: item.href },
                        });
                      }}
                      className="font-cabin text-[16px] text-white py-3 px-4 rounded-xl transition-all hover:bg-[rgba(164,132,215,0.2)] block w-full text-center tracking-wider"
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
