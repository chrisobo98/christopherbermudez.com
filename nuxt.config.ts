// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/image",
    "nuxt-gtag",
    "@nuxtjs/seo",
    "@nuxt/content",
    "@nuxtjs/device",
    "@nuxt/fonts",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-vitalizer",
    "@nuxt/icon",
  ],
  features: {
    inlineStyles: true, // or a function to determine inlining
  },
  vitalizer: {
    disableStylesheets: "entry",
    disablePrefetchLinks: true,
    delayHydration: {
      hydrateOnEvents: [
        "mousemove",
        "scroll",
        "keydown",
        "click",
        "touchstart",
        "wheel",
      ],
      idleCallbackTimeout: 8000,
      postIdleTimeout: 4000,
    },
  },
  gtag: {
    id: "G-3CC4904P02", // Replace with your Google Analytics ID
    enabled: process.env.NODE_ENV === "production", // Disable in development
    config: {
      anonymize_ip: true, // Optional: Enable anonymized IPs for privacy
    },
    loadingStrategy: "defer", // Use defer to avoid blocking rendering
  },
  nitro: {
    prerender: {
      crawlLinks: true, // Automatically finds and prerenders all pages
      routes: ["/", "/blog"], // Ensures homepage is always prerendered
    },
    routeRules: {
      "/_nuxt/**": { cache: { maxAge: 31536000 } }, // Cache static assets for 1 year
      "/static/**": { cache: { maxAge: 31536000 } }, // Cache static files for 1 year
      "/video/**": { cache: { maxAge: 604800 } }, // Cache videos for 1 week
    },
  },
  runtimeConfig: {
    public: {
      gtagId: "G-3CC4904P02", // Dynamic ID if needed
      siteUrl: 'https://christopherbermudez.com',
    },
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'color-theme'
  },

  fonts: {
    defaults: {
      weights: [400, 700], // Default weights for all fonts
      styles: ["normal", "italic"], // Default styles
      subsets: ["latin", "latin-ext"], // Default subsets
    },
    families: [
      {
        name: "Big Shoulders",
        provider: "google",
      },
      {
        name: "Space Grotesk",
        provider: "google",
      },
    ],
    priority: ["google"], // Set Google as the primary provider
  },

  image: {
    provider: "cloudinary",
    cloudinary: {
      baseURL: "https://res.cloudinary.com/dkaakonrp/image/upload/",
    },
  },

  i18n: {
    strategy: "prefix_except_default", // or 'prefix'
    defaultLocale: "en",
    locales: [
      { code: "en", iso: "en-US", name: "English" },
      { code: "es", iso: "es-ES", name: "Spanish" },
    ],
    customRoutes: "config", // ← This enables module-based route configuration
    pages: {
      // Blog
      "blog/index": {
        en: "/blog",
        es: "/articulos", // or '/articulos' if preferred
      },
      "blog/[slug]": {
        en: "/blog/[slug]",
        es: "/articulos/[slug]", // Note: Use square brackets for params
      },

      // Services
      "services/conversion-rate-optimization": {
        en: "/services/conversion-rate-optimization",
        es: "/servicios/optimizacion-de-conversion",
      },
      "services/high-speed-web-development": {
        en: "/services/high-speed-web-development",
        es: "/servicios/desarrollo-web-rapido",
      },
      "services/local-seo-for-clermont-and-orlando-businesses": {
        en: "/services/local-seo-for-clermont-and-orlando-businesses",
        es: "/servicios/seo-local-para-negocios-de-clermont-y-orlando",
      },
      "services/technical-seo-audits-and-fixes": {
        en: "/services/technical-seo-audits-and-fixes",
        es: "/servicios/auditorias-de-seo-tecnico-y-arreglos",
      },

      // Other pages
      about: {
        en: "/about",
        es: "/sobre",
      },
      "website-seo-packages": {
        en: "/website-seo-packages",
        es: "/paquetes-de-seo-para-sitios-web",
      },
      appointments: {
        en: "/appointments",
        es: "/citas",
      },
      index: {
        en: "/",
        es: "/",
      },
      // Browser language detection for SEO
      detectBrowserLanguage: {
        useCookie: "true",
        cookieKey: "i18n_redirected",
        redirectOn: "root", // Only redirect on root path for better SEO
        alwaysRedirect: false, // Respect user's choice after first redirect
        cookieCrossOrigin: false, // Set to true if using in iframes
        fallbackLocale: "en", // Fallback to English if detection fails
      },
    },
  },

  devtools: { enabled: true },
  compatibilityDate: "2025-02-12",
});
