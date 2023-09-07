import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import tailwindTypography from "@astrojs/tailwind";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://housequest-astro.learncraftcms.com',
  integrations: [tailwind(), tailwindTypography(), svelte(), mdx()]
});