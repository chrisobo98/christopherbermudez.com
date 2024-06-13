export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: {
      home: {
        hero: {
          title: "Christopher Bermudez",
          subtitle1: "Web Development",
          subtitle2: "Software Development",
          subtitle3: "Ads & Marketing",
          subtitle4: "SEO Services",
          description:
            "Bridging Design and Functionality for Your Business Success",
          button: "Discover How",
        },
        navbar: {
          appointment: "Set up Appointment",
          software: "Software Development",
          web: "Web Development",
          marketing: "Ads & Marketing",
          journal: "Journal",
        },
        mystory: {
          journey: "A LONG JOURNEY",
          storyheader: "MY STORY",
          storytext:
            "A seasoned front-end software developer with a proven track record in both the corporate sphere and the startup ecosystem. With a passion for crafting user-centric solutions, I ensure that every project not only meets but exceeds expectations.",
        },
        services: {
          subheader: "MY SERVICES",
          header: "PROFESSIONAL SERVICES",
          consultation: "Small Business Consultation",
          consultation_text:
            "Empowering small businesses to establish a robust online footprint.",
          softwaredev: "Website & Software Development",
          softwaredev_text:
            "From concept to creation, crafting websites tailored to your brand’s needs.",
          maintenance_and_support: "Maintenance & Training",
          maintenance_and_support_text:
            "Ensuring sustainability through comprehensive maintenance and hands-on training.",
          seo_marketing_ads: "Advanced SEO, Marketing, & Ads",
          seo_marketing_ads_text:
            "SEO-optimiziation, implementing targeted digital marketing campaigns, and creating impactful advertisements",
        },
        portfolio: {
            subheader: 'PORTFOLIO',
            header: 'Showcase of Excellence',
            portfolio_elite_header: 'Elite Euro Motors',
            portfolio_elite_text: 'Website Design, SEO, Marketing with a big emphasis on Email Marketing, Consulting, and overhaul of online presence.',
            portfolio_4star_header: '4 Star Customs',
            portfolio_4star_text: 'Website design and implementation done for 4StarCustoms, a body shop in Ocoee, Florida.',
            button_text: 'View Site'
        },
        contact: {
            header: 'Contact Us',
            name: 'Your Name',
            name_header: 'Name',
            email: 'name.example.com',
            email_header: 'Email Address',
            company: 'Your Company',
            company_header: 'Company',
            website: 'https://example.com',
            website_header: 'Website URL',
            content: 'What primary content do you need on your website?', type: 'textarea', placeholder: 'Describe the primary content you need...',
            content_header: 'What primary content do you need on your website?',
            functionality: 'Describe the must-have functionality...',
            functionality_header: 'What must-have functionality do you need?',
            state_of_site: 'Describe the current state of your website...',
            state_of_site_header: 'What is the current state of your website?',
            site_experience: 'Describe your experience...',
            site_experience_header: 'What is your experience with managing your own website?',
            other_details: 'Leave additional details or questions...',
            other_details_header: 'Please provide any other details or questions you have about your website',
        },
        footer: {
            resources: 'Resources',
            follow: 'Follow Me',
            legal: 'Legal',
            textarea: '2024, Christopher Bermudez™ Made with ❤️ in Orlando, Florida',
        },
      },
    },
    es: {
      home: {
        hero: {
          title: "Christopher Bermudez",
          subtitle1: "Desarrollo de Sitios Web",
          subtitle2: "Desarrollo de Programas",
          subtitle3: "Publicidad y Mercadeo",
          subtitle4: "Servicios de Posicionamiento en Buscadores",
          description:
            "Uniendo Diseño y Funcionalidad para el Éxito de su Negocio",
          button: "Descubra Cómo",
        },
        navbar: {
          appointment: "Establecer Cita",
          software: "Desarrollo de Programas",
          web: "Desarrollo de Web",
          marketing: "Publicidad y Mercadeo",
          journal: "Diario",
        },
        mystory: {
          journey: "UN VIAJE LARGO",
          storyheader: "MI HISTORIA",
          storytext:
            "Un desarrollador de software front-end experimentado con un historial comprobado tanto en el ámbito corporativo como en el ecosistema de empresas recientemente creadas. Con una pasión por crear soluciones centradas en el usuario, me aseguro de que cada proyecto no solo cumpla, sino que supere las expectativas.",
        },
        services: {
          subheader: "MIS SERVICIOS",
          header: "SERVICIOS PROFESIONALES",
          consultation: "Consultoría para Empresas",
          consultation_text:
            "Empoderando a las pequeñas empresas para establecer una presencia en el internet robusta.",
          softwaredev: "Desarrollo de Sitios Web y Software",
          softwaredev_text:
            "Desde el concepto hasta la creación, diseñando sitios web a medida de las necesidades de tu marca.",
          maintenance_and_support: "Mantenimiento y Capacitación",
          maintenance_and_support_text:
            "Garantizando la sostenibilidad a través de un mantenimiento integral y capacitación práctica.",
          seo_marketing_ads: "SEO Avanzado, Mercadeo y Publicidad",
          seo_marketing_ads_text:
            "Estrategias de optimización en motores de búsqueda, mercadeo digital y publicidad efectiva.",
        },
        portfolio: {
            subheader: "PORTAFOLIO",
            header: "Muestra de Excelencia",
            portfolio_elite_header: "Elite Euro Motors",
            portfolio_elite_text: "Diseño de sitios web, SEO, marketing con gran énfasis en marketing por correo electrónico, consultoría y renovación de la presencia en línea.",
            portfolio_4star_header: "4 Star Customs",
            portfolio_4star_text: "Diseño e implementación de sitios web para 4StarCustoms, un taller de carrocería en Ocoee, Florida.",
            button_text: "Ver Sitio"
        },
        contact: {
            header: 'Contáctanos',
            name: 'Tu Nombre',
            name_header: 'Nombre',
            email: 'nombre.ejemplo.com',
            email_header: 'Dirección de Correo Electrónico',
            company: 'Tu Empresa',
            company_header: 'Empresa',
            website: 'https://ejemplo.com',
            website_header: 'URL del Sitio Web',
            content: '¿Qué contenido principal necesitas en tu sitio web?', 
            type: 'textarea', 
            placeholder: 'Describe el contenido principal que necesitas...',
            content_header: '¿Qué contenido principal necesitas en tu sitio web?',
            functionality: 'Describe la funcionalidad indispensable...',
            functionality_header: '¿Qué funcionalidad indispensable necesitas?',
            state_of_site: 'Describe el estado actual de tu sitio web...',
            state_of_site_header: '¿Cuál es el estado actual de tu sitio web?',
            site_experience: 'Describe tu experiencia...',
            site_experience_header: '¿Cuál es tu experiencia gestionando tu propio sitio web?',
            other_details: 'Deja detalles o preguntas adicionales...',
            other_details_header: 'Por favor, proporciona cualquier otro detalle o pregunta que tengas sobre tu sitio web'
        },
        footer: {
            resources: 'Recursos',
            follow: 'Sígueme',
            legal: 'Legal',
            textarea: '2024, Christopher Bermudez™. Hecho con ❤️ en Orlando, Florida'
          }          
      },
    },
  },
}));
