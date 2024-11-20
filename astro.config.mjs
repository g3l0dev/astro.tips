import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import vue from "@astrojs/vue";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://astro.build",
  integrations: [tailwind(), mdx(), react(), vue(), sitemap()]
});