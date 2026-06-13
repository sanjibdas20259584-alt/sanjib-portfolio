import { useEffect } from "react";
import { Zap, Video, Target, Package, MessageCircle } from "lucide-react";

export const SanjibDasPage = () => {
  useEffect(() => {
    document.title = "Sanjib Das | AI Ad Creative Specialist for D2C Brands";
    document.querySelector('meta[name="description"]')?.setAttribute("content",
      "Sanjib Das creates AI-assisted product ads and UGC-style ad creatives for D2C jewellery, beauty, skincare, and fashion brands."
    );
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground px-5 sm:px-6 md:px-8 pt-28 pb-20">
      <section className="max-w-5xl mx-auto">
        <p className="font-cabin text-sm uppercase tracking-widest text-primary font-semibold">
          Sanjib Das Portfolio
        </p>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-tight tracking-[-0.03em] mt-5">
          Sanjib Das — AI Ad Creative Specialist from Kolkata
        </h1>

        <p className="font-sans text-base sm:text-lg md:text-xl text-muted max-w-3xl mt-6 leading-relaxed">
          I'm Sanjib Das, an AI ad creative specialist from Kolkata. I create short AI-assisted product ads, UGC-style concepts, hooks, and creative angles for D2C jewellery, beauty, skincare, and fashion brands.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
            <h2 className="font-serif text-2xl md:text-3xl">
              What I create
            </h2>

            <ul className="font-sans text-muted mt-5 space-y-3 leading-relaxed">
              <li>Short AI-assisted product ad creatives</li>
              <li>UGC-style ad concepts with hooks and scripts</li>
              <li>Product benefit and angle variations</li>
              <li>Creative direction for Instagram/Reels and Meta ads</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
            <h2 className="font-serif text-2xl md:text-3xl">
              Who I help
            </h2>

            <ul className="font-sans text-muted mt-5 space-y-3 leading-relaxed">
              <li>D2C jewellery brands</li>
              <li>Skincare and beauty brands</li>
              <li>Fashion and accessory brands</li>
              <li>Small-to-mid brands already selling online</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
          <h2 className="font-serif text-2xl md:text-3xl mb-6">
            Main services
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Zap, title: "AI Product Ad Creatives", desc: "Short 8-12 sec product-focused ads for testing" },
              { icon: Video, title: "AI UGC-style Ad Concepts", desc: "Creator-style ads with hooks and scene direction" },
              { icon: Target, title: "Hook & Angle Testing", desc: "Multiple angles to test what gets attention" },
              { icon: Package, title: "Creative Packs", desc: "Monthly support for consistent ad testing" },
            ].map((service) => (
              <div key={service.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
                  <service.icon size={20} />
                </div>
                <div>
                  <h3 className="font-sans text-foreground font-semibold">{service.title}</h3>
                  <p className="text-muted text-sm mt-1">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <a
            href="/#my-works"
            className="btn-hero-primary rounded-2xl text-white font-medium py-4 px-6 flex items-center justify-center text-base text-center"
          >
            View Ad Work
          </a>

          <a
            href="/#reach-out"
            className="rounded-2xl text-white font-medium py-4 px-6 flex items-center justify-center text-base text-center border border-white/15 bg-white/[0.07] hover:bg-white/[0.1] transition-all"
          >
            <MessageCircle size={18} className="mr-2" />
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
};