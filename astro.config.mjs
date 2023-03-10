import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import tailwindTypography from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://housequest-astro.learncraftcms.com',
  integrations: [tailwind(), tailwindTypography()]
});