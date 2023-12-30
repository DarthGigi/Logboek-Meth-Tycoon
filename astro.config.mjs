import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import remarkToc from 'remark-toc';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://logboek-meth-tycoon.vercel.app/",
  integrations: [mdx(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), react()],
  markdown: {
    remarkPlugins: [[remarkToc, { heading: "inhoudsopgave"}]]
  }
});