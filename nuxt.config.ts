export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/image'],

  image: {
    format: ['webp'],
    domains: ['picsum.photos', 'i.imgur.com'],
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-12-11',
});
