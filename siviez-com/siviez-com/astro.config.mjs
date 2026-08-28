import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://siviez.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
