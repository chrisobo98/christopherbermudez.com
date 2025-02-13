// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', "@nuxt/image", "nuxt-gtag", "@nuxtjs/seo", '@nuxtjs/google-fonts', '@nuxt/content'],
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
      gitInfo: {
        name: 'christopherbermudez.com',
        owner: 'chrisobo98',
        url: 'https://github.com/chrisobo98/christopherbermudez.com'
      }
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

  runtimeConfig: {
    public: {
      gtagId: 'G-3CC4904P02', // Dynamic ID if needed
    },
  },

  googleFonts: {
    families: {
      Bayon: true, // Load the Bayon font
      Ubuntu: [300, 400, 500, 700], // Load the specified weights for Ubuntu font
    },
    display: 'swap', // Use font-display: swap for better font loading behavior
    preconnect: true, // Preconnect to Google Fonts for faster resource loading
  },

  image: {
    provider: 'cloudflare',
    cloudflare: {
      baseURL: process.env.CLOUDFLARE_IMAGES_URL
    },
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dkaakonrp/image/fetch/',
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

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      titleTemplate: '%s · Christopher Bermudez',
      meta: [
        { name: 'description', content: 'Your go-to expert for web design, SEO, and digital marketing in Florida.' },
      ],
      script: [
        {
          innerHTML: `
            (function() {
              const savedTheme = localStorage.getItem('color-theme');
              if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            })();
          `,
          type: 'text/javascript',
          // Safely inject inline script
          'data-script-type': 'init-theme',
        }
      ]
    }
  },

  compatibilityDate: '2025-02-12',
});