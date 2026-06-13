import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { WhoIHelpSection } from "./components/WhoIHelpSection";
import { ProcessSection } from "./components/ProcessSection";
import { WorksSection } from "./components/WorksSection";
import { PricingSection } from "./components/PricingSection";
import { TrustSection } from "./components/TrustSection";
import { FreeSampleCTA } from "./components/FreeSampleCTA";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { AllWorksPage } from "./pages/AllWorksPage";
import { PricingPage } from "./pages/PricingPage";
import { SanjibDasPage } from "./pages/SanjibDasPage";
import { AdminPage } from "./pages/AdminPage";
import { Routes, Route, useLocation } from "react-router-dom";
import { trackEvent } from "./lib/analytics";

export default function App() {
  const location = useLocation();

  // Hash-based smooth scrolling
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  // Track page views (exclude /admin)
  useEffect(() => {
    if (!location.pathname.startsWith("/admin")) {
      trackEvent({
        eventName: "page_view",
        pagePath: location.pathname,
        category: "navigation",
      });
    }
  }, [location.pathname]);

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans relative">
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutSection />
              <ServicesSection />
              <WhoIHelpSection />
              <ProcessSection />
              <WorksSection />
              <PricingSection />
              <TrustSection />
              <FreeSampleCTA />
              <ContactSection />
            </>
          }
        />
        <Route path="/works" element={<AllWorksPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/sanjib-das" element={<SanjibDasPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </div>
  );
}