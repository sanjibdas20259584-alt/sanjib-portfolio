import React, { useEffect } from "react";
import { SEOConfig, updateSEOTags } from "../lib/seo";

interface SEOProps extends SEOConfig {}

export const SEO: React.FC<SEOProps> = (props) => {
  useEffect(() => {
    updateSEOTags(props);
  }, [props]);

  return null;
};
