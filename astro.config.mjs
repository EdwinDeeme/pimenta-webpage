import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: "https://pimenta.studio",
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind(), react(), keystatic()],
});
