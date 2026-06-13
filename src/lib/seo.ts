export interface SEOConfig {
  title: string;
  description: string;
  canonical: string;
  ogType?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
}

export function updateSEOTags(config: SEOConfig) {
  // 1. Document Title
  document.title = config.title;

  // Helper to set or update a meta tag
  const setMetaTag = (attrName: string, attrVal: string, content: string) => {
    let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attrName, attrVal);
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  };

  // Helper to set or update a link tag
  const setLinkTag = (relVal: string, hrefVal: string) => {
    let element = document.querySelector(`link[rel="${relVal}"]`);
    if (!element) {
      element = document.createElement("link");
      element.setAttribute("rel", relVal);
      document.head.appendChild(element);
    }
    element.setAttribute("href", hrefVal);
  };

  // 2. Meta description
  setMetaTag("name", "description", config.description);

  // 3. Canonical Link
  setLinkTag("canonical", config.canonical);

  // 4. Open Graph Meta Tags
  setMetaTag("property", "og:title", config.ogTitle || config.title);
  setMetaTag("property", "og:description", config.ogDescription || config.description);
  setMetaTag("property", "og:url", config.canonical);
  setMetaTag("property", "og:type", config.ogType || "website");
  setMetaTag("property", "og:image", config.ogImage || "https://sanjibdas.vercel.app/sanjib-logo.png");
  setMetaTag("property", "og:image:alt", "Sanjib Das Portfolio logo");
  setMetaTag("property", "og:site_name", "Sanjib Das Portfolio");
  setMetaTag("property", "og:locale", "en_IN");

  // 5. Twitter Card Meta Tags
  setMetaTag("name", "twitter:card", config.twitterCard || "summary_large_image");
  setMetaTag("name", "twitter:title", config.twitterTitle || config.ogTitle || config.title);
  setMetaTag("name", "twitter:description", config.twitterDescription || config.ogDescription || config.description);
  setMetaTag("name", "twitter:image", config.twitterImage || config.ogImage || "https://sanjibdas.vercel.app/sanjib-logo.png");

  // 6. JSON-LD Structured Data
  if (config.jsonLd) {
    let script = document.getElementById("json-ld-seo") as HTMLScriptElement;
    if (!script) {
      script = document.createElement("script");
      script.id = "json-ld-seo";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(config.jsonLd, null, 2);
  } else {
    const script = document.getElementById("json-ld-seo");
    if (script) {
      script.remove();
    }
  }
}
