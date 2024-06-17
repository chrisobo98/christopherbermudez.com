// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    "@nuxt/image",
    '@dargmuesli/nuxt-cookie-control',
  ],
  runtimeConfig: {
    public: {
      gtagId: 'G-3CC4904P02', // Replace with your Google Analytics ID
    }
  },
  image: {
    provider: 'cloudflare',
    cloudflare: {
      baseURL: process.env.CLOUDFLARE_IMAGES_URL
    }
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
  cookieControl: {
    barPosition: 'bottom-full',
    closeModalOnClickOutside: true,
    colors: {
      barBackground: '#000',
      barButtonBackground: '#fff',
      barButtonColor: '#000',
      barButtonHoverBackground: '#333',
      barButtonHoverColor: '#fff',
      barTextColor: '#fff',
      modalBackground: '#fff',
      modalButtonBackground: '#000',
      modalButtonColor: '#fff',
      modalButtonHoverBackground: '#333',
      modalButtonHoverColor: '#fff',
      modalOverlay: '#000',
      modalOverlayOpacity: 0.8,
      modalTextColor: '#000',
    },
    cookies: {
      necessary: [
        {
          description: {
            en: 'This cookie is essential for the website to function properly.',
            es: 'Esta cookie es esencial para que el sitio web funcione correctamente.'
          },
          id: 'necessary',
          name: {
            en: 'Necessary',
            es: 'Necesaria'
          },
        },
      ],
      optional: [
        {
          description: {
            en: 'This cookie is used for Google Analytics.',
            es: 'Esta cookie se utiliza para Google Analytics.'
          },
          id: 'google-analytics',
          name: {
            en: 'Google Analytics',
            es: 'Google Analytics'
          },
          links: {
            'https://policies.google.com/privacy': 'Privacy Policy',
          },
        },
      ],
    },
    isAcceptNecessaryButtonEnabled: true,
    isControlButtonEnabled: true,
    locales: ['en', 'es'],
    localeTexts: {
      en: {
        accept: 'Accept',
        acceptAll: 'Accept All',
        bannerDescription: 'We use cookies to ensure you get the best experience on our website.',
        bannerTitle: 'Cookies Information',
        close: 'Close',
        cookiesFunctional: 'Functional Cookies',
        cookiesNecessary: 'Necessary Cookies',
        cookiesOptional: 'Optional Cookies',
        iframeBlocked: 'Iframes are blocked',
        decline: 'Decline',
        declineAll: 'Decline All',
        here: 'here',
        manageCookies: 'Manage Cookies',
        save: 'Remember',
        settingsUnsaved: 'You have unsaved settings',
      },
      es: {
        accept: 'Aceptar',
        acceptAll: 'Aceptar Todas',
        bannerDescription: 'Usamos cookies para asegurarnos de que obtenga la mejor experiencia en nuestro sitio web.',
        bannerTitle: 'Información de Cookies',
        close: 'Cerrar',
        cookiesFunctional: 'Cookies Funcionales',
        cookiesNecessary: 'Cookies Necesarias',
        cookiesOptional: 'Cookies Opcionales',
        iframeBlocked: 'Iframes están bloqueados',
        decline: 'Rechazar',
        declineAll: 'Rechazar Todas',
        here: 'aquí',
        manageCookies: 'Gestionar Cookies',
        save: 'Guardar',
        settingsUnsaved: 'Tienes configuraciones sin guardar',
      }
    }
  }
});
