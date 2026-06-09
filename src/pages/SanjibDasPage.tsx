import { useEffect } from "react";

export const SanjibDasPage = () => {
  useEffect(() => {
    document.title = "Sanjib Das | Graphic Designer & AI Ads Creator Kolkata";

    const description =
      "Learn about Sanjib Das, a graphic designer and AI ads creator from Kolkata creating AI UGC ads, product creatives, YouTube thumbnails, and social media designs.";

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.content = description;
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground px-5 sm:px-6 md:px-8 pt-28 pb-20">
      <section className="max-w-5xl mx-auto">
        <p className="font-cabin text-sm uppercase tracking-widest text-primary font-semibold">
          Sanjib Das Portfolio
        </p>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-tight tracking-[-0.03em] mt-5">
          Sanjib Das - Graphic Designer and AI Ads Creator from Kolkata
        </h1>

        <p className="font-sans text-base sm:text-lg md:text-xl text-muted max-w-3xl mt-6 leading-relaxed">
          I’m Sanjib Das, a graphic designer and AI creative maker from Kolkata,
          India. I create AI UGC ads, product creatives, YouTube thumbnails,
          social media posts, and promotional visuals for small brands, creators,
          and startups.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
            <h2 className="font-serif text-2xl md:text-3xl">
              What Sanjib Das creates
            </h2>

            <ul className="font-sans text-muted mt-5 space-y-3 leading-relaxed">
              <li>AI UGC ads for brands</li>
              <li>Product ad creatives</li>
              <li>YouTube thumbnail designs</li>
              <li>Social media post designs</li>
              <li>Promotional visuals for creators and startups</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
            <h2 className="font-serif text-2xl md:text-3xl">
              Keywords this page targets
            </h2>

            <ul className="font-sans text-muted mt-5 space-y-3 leading-relaxed">
              <li>Sanjib Das</li>
              <li>Sanjib Das portfolio</li>
              <li>Sanjib Das graphic designer</li>
              <li>Sanjib Das Kolkata designer</li>
              <li>Sanjib Das AI ads creator</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <a
            href="/#my-works"
            className="btn-hero-primary rounded-2xl text-white font-medium py-4 px-6 flex items-center justify-center text-base text-center"
          >
            View Sanjib Das Works
          </a>

          <a
            href="/#reach-out"
            className="rounded-2xl text-white font-medium py-4 px-6 flex items-center justify-center text-base text-center border border-white/15 bg-white/[0.07] hover:bg-white/[0.1] transition-all"
          >
            Contact Sanjib Das
          </a>
        </div>
      </section>
    </main>
  );
};
