// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    "@nuxt/image",
    "nuxt-gtag",
    "@nuxtjs/seo",
    '@nuxt/content',
    '@nuxtjs/device',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    'nuxt-vitalizer',
    '@nuxt/icon',
  ],
  vitalizer: {
    disableStylesheets: 'entry',
    disablePrefetchLinks: true,
    delayHydration: {
      hydrateOnEvents: ['mousemove', 'scroll', 'keydown', 'click', 'touchstart', 'wheel'],
      idleCallbackTimeout: 8000,
      postIdleTimeout: 4000
    }
  },
  gtag: {
    id: 'G-3CC4904P02', // Replace with your Google Analytics ID
    enabled: process.env.NODE_ENV === 'production', // Disable in development
    config: {
      anonymize_ip: true, // Optional: Enable anonymized IPs for privacy
    },
    loadingStrategy: 'defer', // Use defer to avoid blocking rendering
  },
  nitro: {
    prerender: {
      crawlLinks: true, // Automatically finds and prerenders all pages
      routes: ['/', '/blog'], // Ensures homepage is always prerendered
    },
    routeRules: {
      "/_nuxt/**": { cache: { maxAge: 31536000 } }, // Cache static assets for 1 year
      "/static/**": { cache: { maxAge: 31536000 } }, // Cache static files for 1 year
      "/video/**": { cache: { maxAge: 604800 } }, // Cache videos for 1 week
    },
  },
  runtimeConfig: {
    public: {
      gtagId: 'G-3CC4904P02', // Dynamic ID if needed
    },
  },
  fonts: {
    defaults: {
      weights: [400, 700], // Default weights for all fonts
      styles: ['normal', 'italic'], // Default styles
      subsets: ['latin', 'latin-ext'], // Default subsets
    },
    families: [
      {
        name: 'Rubik Mono One',
        provider: 'google',
      },
      {
        name: 'Ubuntu',
        provider: 'google',
        weights: [300, 400, 500, 700],
        styles: ['normal', 'italic'],
      },
    ],
    priority: ['google'], // Set Google as the primary provider
  },

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dkaakonrp/image/upload/',
    },
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'es', iso: 'es-ES', name: 'Spanish' }
    ],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts'
  },

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-02-12',
});