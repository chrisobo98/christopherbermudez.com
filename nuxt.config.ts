// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    "@nuxt/image",
    "nuxt-gtag",
    "@nuxtjs/seo"
  ],
  gtag: {
    id: "G-3CC4904P02",
  },
  runtimeConfig: {
    public: {
      gtagId: 'G-3CC4904P02', // Replace with your Google Analytics ID
    }
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
      link: [
        // Preconnect to Google Fonts
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        // Preload critical fonts
        { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Bayon&display=swap', as: 'style' },
        { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap', as: 'style' },
        // Link to the fonts' stylesheets
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bayon&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap' }
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
});