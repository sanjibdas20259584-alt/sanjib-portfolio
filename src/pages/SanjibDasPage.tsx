import { Zap, Video, Target, Package, MessageCircle, Info, HelpCircle } from "lucide-react";
import { SEO } from "../components/SEO";

export const SanjibDasPage = () => {
  return (
    <main className="min-h-screen bg-background text-foreground px-5 sm:px-6 md:px-8 pt-28 pb-20 relative">
      {/* Dynamic SEO Tag & Schema Integration */}
      <SEO
        title="Sanjib Das | Graphic Designer & AI Ads Creator Kolkata"
        description="Learn about Sanjib Das, a graphic designer and AI ads creator from Kolkata creating AI UGC ads, product creatives, YouTube thumbnails, and social media designs."
        canonical="https://sanjibdas.vercel.app/sanjib-das"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfilePage",
              "@id": "https://sanjibdas.vercel.app/sanjib-das#webpage",
              "url": "https://sanjibdas.vercel.app/sanjib-das",
              "name": "Sanjib Das | Graphic Designer & AI Ads Creator Kolkata",
              "description": "Learn about Sanjib Das, a graphic designer and AI ads creator from Kolkata creating AI UGC ads, product creatives, YouTube thumbnails, and social media designs.",
              "breadcrumb": {
                "@id": "https://sanjibdas.vercel.app/sanjib-das#breadcrumb"
              },
              "mainEntity": {
                "@id": "https://sanjibdas.vercel.app/#person"
              }
            },
            {
              "@type": "Person",
              "@id": "https://sanjibdas.vercel.app/#person",
              "name": "Sanjib Das",
              "url": "https://sanjibdas.vercel.app/",
              "jobTitle": "Graphic Designer and AI Ads Creator",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kolkata",
                "addressRegion": "West Bengal",
                "addressCountry": "India"
              }
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://sanjibdas.vercel.app/sanjib-das#breadcrumb",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://sanjibdas.vercel.app/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Sanjib Das",
                  "item": "https://sanjibdas.vercel.app/sanjib-das"
                }
              ]
            },
            {
              "@type": "FAQPage",
              "@id": "https://sanjibdas.vercel.app/sanjib-das#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Who is Sanjib Das?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sanjib Das is a professional freelance graphic designer and AI ads creator based in Kolkata, India. He specializes in visual designs and high-performing ad creatives."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What does Sanjib Das create?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sanjib Das creates AI-assisted product ads, creator-style AI UGC ads, high-CTR YouTube thumbnails, social media posts, custom poster designs, and brand identity materials."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where is Sanjib Das based?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sanjib Das is based in Kolkata, West Bengal, India, and works with clients globally."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Sanjib Das create AI UGC ads?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Sanjib Das creates high-converting AI UGC (User Generated Content) style video ad concepts, including hooks, scripts, and visual direction for social media campaigns."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Sanjib Das design YouTube thumbnails?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Sanjib Das designs custom high-CTR YouTube thumbnails to help video creators and brands maximize clicks and views."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I contact Sanjib Das?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can reach out to Sanjib Das via WhatsApp or email through the contact section on his portfolio homepage."
                  }
                }
              ]
            }
          ]
        }}
      />

      {/* Aurora glow */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-[500px] bg-[radial-gradient(ellipse_at_top_right,_var(--color-purple-glow)_0%,_transparent_70%)] opacity-30 blur-[80px] z-0 pointer-events-none" />

      <section className="max-w-4xl mx-auto relative z-10 space-y-12">
        {/* Intro */}
        <div className="space-y-4">
          <p className="font-cabin text-sm uppercase tracking-widest text-primary font-semibold">
            ABOUT THE CREATOR
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight tracking-[-0.02em]">
            Sanjib Das - Graphic Designer and AI Ads Creator from Kolkata
          </h1>

          <p className="font-sans text-lg sm:text-xl text-muted leading-relaxed">
            I’m Sanjib Das, a freelance graphic designer and AI ads creator based in Kolkata, India. I specialize in crafting high-impact AI UGC ads, product creatives, YouTube thumbnails, and social media post designs that help startups, creators, and D2C brands scale their advertising efforts.
          </p>
        </div>

        {/* 1. About Sanjib Das */}
        <div className="glass-card rounded-[2rem] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-primary">
            <Info size={20} />
            <h2 className="font-serif text-2xl md:text-3xl font-semibold m-0">About Sanjib Das</h2>
          </div>
          <p className="text-muted leading-relaxed font-sans">
            With over a decade of design philosophy applied to modern digital frameworks, I help businesses turn static concepts into scroll-stopping social ad creatives. Combining classical graphic design principles with cutting-edge artificial intelligence, I optimize D2C visual storytelling for conversion, speed, and affordability.
          </p>
        </div>

        {/* Grid for What I Create & Who I Help */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* 2. What Sanjib Das creates */}
          <div className="glass-card rounded-[2rem] p-6 sm:p-8 space-y-4">
            <h2 className="font-serif text-2xl font-semibold">What Sanjib Das creates</h2>
            <ul className="list-disc list-inside space-y-2 text-muted font-sans text-sm sm:text-base">
              <li>High-converting AI UGC ad concepts</li>
              <li>Engaging AI product ad creatives</li>
              <li>High-CTR custom YouTube thumbnails</li>
              <li>Social media posts and banner designs</li>
              <li>Promotional flyers and posters</li>
              <li>Brand identity systems and starter logos</li>
            </ul>
          </div>

          {/* 3. Who Sanjib Das helps */}
          <div className="glass-card rounded-[2rem] p-6 sm:p-8 space-y-4">
            <h2 className="font-serif text-2xl font-semibold">Who Sanjib Das helps</h2>
            <ul className="list-disc list-inside space-y-2 text-muted font-sans text-sm sm:text-base">
              <li>D2C beauty and skincare brands</li>
              <li>E-commerce jewellery and fashion shops</li>
              <li>Digital content creators and YouTubers</li>
              <li>Startups testing creative angles</li>
              <li>Local businesses seeking poster promos</li>
            </ul>
          </div>
        </div>

        {/* 4. Services by Sanjib Das */}
        <div className="glass-card rounded-[2rem] p-6 sm:p-8 space-y-6">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold">Services by Sanjib Das</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Zap, title: "AI Product Ad Creatives", desc: "Short, visual-first ads built to highlight products and benefits." },
              { icon: Video, title: "AI UGC-style Ads", desc: "Creator-style concepts with engaging hooks, scripts, and overlays." },
              { icon: Target, title: "YouTube Thumbnail Design", desc: "High-clickrate thumbnail compositions to maximize views." },
              { icon: Package, title: "Social Media Post Design", desc: "Clean feed layout designs, offer posts, and promotional graphics." },
            ].map((srv) => (
              <div key={srv.title} className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <srv.icon size={18} />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-foreground text-sm sm:text-base">{srv.title}</h3>
                  <p className="text-muted text-xs sm:text-sm mt-1 leading-relaxed">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Sanjib Das portfolio focus */}
        <div className="glass-card rounded-[2rem] p-6 sm:p-8 space-y-4">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold">Sanjib Das portfolio focus</h2>
          <p className="text-muted leading-relaxed font-sans text-sm sm:text-base">
            Every creative concept in this portfolio is crafted with the primary goal of driving clicks, engagement, and sales. I focus heavily on the first 3 seconds (the hook) of video ads and high-contrast styling for graphic layouts, ensuring they stand out in crowded social media feeds on platforms like Meta, Instagram, and YouTube.
          </p>
        </div>

        {/* 6. FAQ Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-primary">
            <HelpCircle size={20} />
            <h2 className="font-serif text-2xl md:text-3xl font-semibold m-0">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Who is Sanjib Das?", a: "Sanjib Das is a freelance graphic designer and AI ads creator based in Kolkata, India. He builds ad concepts, thumbnails, and visual graphics for digital brands." },
              { q: "What does Sanjib Das create?", a: "He designs AI UGC style ad concepts, AI product creatives, YouTube thumbnails, Instagram social posts, launch posters, and core branding assets." },
              { q: "Where is Sanjib Das based?", a: "Sanjib Das operates from Kolkata, West Bengal, India, servicing local and international brands online." },
              { q: "Does Sanjib Das create AI UGC ads?", a: "Yes, he specializes in generating AI UGC (user-generated style) ad video concepts with dynamic voiceovers, hooks, and benefit-led storyboards." },
              { q: "Does Sanjib Das design YouTube thumbnails?", a: "Yes, he offers custom YouTube thumbnail designs in packages with bold typography and face/product cutouts to optimize click-through rates." },
              { q: "How can I contact Sanjib Das?", a: "You can open an inquiry directly via email or get in touch through WhatsApp link shortcuts located on the homepage." },
            ].map((faq, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-5 space-y-2">
                <h3 className="font-sans font-semibold text-foreground text-sm sm:text-base">{faq.q}</h3>
                <p className="text-muted text-xs sm:text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <a
            href="/#my-works"
            className="btn-hero-primary rounded-2xl text-white font-medium py-4 px-6 flex items-center justify-center text-base text-center w-full sm:w-auto"
          >
            View Ad Work
          </a>
          <a
            href="/#reach-out"
            className="rounded-2xl text-white font-medium py-4 px-6 flex items-center justify-center text-base text-center border border-white/15 bg-white/[0.07] hover:bg-white/[0.1] transition-all w-full sm:w-auto"
          >
            <MessageCircle size={18} className="mr-2" />
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
};