export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  globalInjection: true,
  messages: {
    en: {
      home: {
        hero: {
          title: "Web Development & SEO Specialist",
          subtitle1: "Web Development",
          subtitle2: "Software Development",
          subtitle3: "Ads & Marketing",
          subtitle4: "SEO Services",
          description:
            "Helping businesses in Central Florida establish an online footprint since 2016.",
          callToAction: "How does your website ",
          coloredCTA: "score?",
          button: "Contact Me",
          websiteUrl: "Website URL",
          firstName: "Name",
          phone: "Phone",
          email: "Email",
          audit: "Free Site Audit",
          answer: "Get the answer in minutes!",
        },
        whyUs: {
          creativeSolutions: "Creative Solutions",
          resultsTitle: "Building Sites That Drive Results 🚀",
          whyUsDescription: "Supercharge your online presence with",
          customWebDevBold: "custom web development",
          advancedSeoBold: "advanced SEO strategies",
          creativeSolutionsSummary:
            "Increase visibility, attract leads, and convert visitors into loyal customers.",
          optimizedDesignsBold: "80% faster load times",
          optimizedDesigns: "with optimized designs",
          leadsBold: "65% more leads",
          leads: "with targeted SEO campaigns",
          conversionsBold: "50% higher conversions",
          conversions: "with user-centric designs",
          mobileBold: "Complete mobile optimization",
          mobile: "for better engagement",
          uptimeBold: "100% uptime guarantee",
          uptime: "for your business",
          learnMoreButton: "Learn More About SEO",
        },
        navbar: {
          appointment: "30 Min Consultation",
          software: "Software Development",
          web: "Web Development",
          marketing: "Ads & Marketing",
          journal: "Journal",
          about: "About",
          pricing: "Pricing",
          downloadresume: "Download Resume",
        },
        mystory: {
          journey: "ABOUT ME",
          storyheader: "MY STORY",
          storytext:
            "A seasoned front-end software developer with a proven track record in both the corporate sphere and the startup ecosystem. With a passion for crafting user-centric solutions, I ensure that every project not only meets but exceeds expectations.",
          storyButton: "Read More",
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
          subheader: "PORTFOLIO",
          header: "Showcase of Excellence",
          portfolio_elite_header: "Elite Euro Motors",
          portfolio_elite_text:
            "Website Design, SEO, Marketing with a big emphasis on Email Marketing, Consulting, and overhaul of online presence.",
          portfolio_beuptwo_header: "BeUpTwo",
          portfolio_beuptwo_text:
            "Website design, SEO, and strategic brand consulting. I transformed its online presence with a sleek, ultra-fast website built without WordPress, leveraging Nuxt for optimal performance. Now, the website mirrors its essence: regal and authoritative, with a black and gold color scheme that enhances its brand identity. With perfect scores on PageSpeed Insights and advanced analytics, the platform is not only visually striking but also powerful and built to last.",
          portfolio_4star_header: "4 Star Customs",
          portfolio_4star_text:
            "Website design and implementation done for 4StarCustoms, a body shop in Ocoee, Florida.",
          button_text: "View Site",
        },
        contact: {
          header: "Contact Me",
          name: "Your Name",
          name_header: "Name",
          email: "name.example.com",
          email_header: "Email Address",
          company: "Your Company",
          company_header: "Company",
          website: "https://example.com",
          website_header: "Website URL",
          content: "What primary content do you need on your website?",
          type: "textarea",
          placeholder: "Describe the primary content you need...",
          content_header: "What primary content do you need on your website?",
          functionality: "Describe the must-have functionality...",
          functionality_header: "What must-have functionality do you need?",
          state_of_site: "Describe the current state of your website...",
          state_of_site_header: "What is the current state of your website?",
          site_experience: "Describe your experience...",
          site_experience_header:
            "What is your experience with managing your own website?",
          other_details: "Leave additional details or questions...",
          other_details_header:
            "Please provide any other details or questions you have about your website",
        },
        footer: {
          resources: "Resources",
          follow: "Follow Me",
          legal: "Legal",
          textarea:
            "2024, Christopher Bermudez™ Made with ❤️ in Orlando, Florida",
        },
      },
      blog: {
        title: "Our latest",
        titleColored: "blogs",
        description:
          'SEO isn’t just about keywords – it’s about using the right strategies to get your site noticed by Google and your audience. In this blog, I break down real tactics that help businesses show up where customers are searching. Whether you want to rank for searches like "plumber near me" or "best bakery in Orlando," you’ll find practical SEO strategies here that drive real results',
      },
      resume: {
        github: {
          title: "My Github",
          viewRepo: "View Repo",
        },
        hobbies: {
          title: "Hobbies",
          list: [
            "Soccer",
            "Tennis",
            "Jogging",
            "Hiking",
            "Playing video games",
          ],
        },
        built: {
          title: "This site was built with",
        },
        profile: {
          name: "Christopher Bermudez",
          role: "Frontend Software Developer",
          location: "Greater Orlando",
        },
        about: {
          title: "About Me",
          description: `
            Clermont, Florida has been home for over 15 years now. I’ve planted deep roots here and have a strong connection to this beautiful state. If Florida ever floods, you’ll probably find me paddling a canoe around town—gotta adapt, right?\n\n
        
            My journey into the world of tech started back in high school. I was the go-to "tech guy," with a room perpetually strewn with graphics cards, motherboards, and all sorts of gadgetry. Building websites became a way to make some extra cash, and it quickly evolved into a passion.
        
            These days, I’m a proud husband and father. When I’m not coding, you’ll find me gaming, hiking or trail running—yes, even in the blazing midday Florida sun (with plenty of sunscreen, of course!).
                          `,
        },
        contactInfo: {
          title: "Contact Info",
          email: "christopherbermudez98(a)gmail.com",
          phone: "+1 (352) - 978 - 4435",
          address: "Greater Orlando area",
        },
        education: {
          title: "Education",
          degrees: [
            {
              level: "Coding Bootcamp, Full-Stack Web Development",
              school: "University of Central Florida",
              years: "2017 - 2018",
            },
            {
              level:
                "Associate of Science - AS, Audiovisual Communications Technologies/Technicians",
              school: "Valencia College",
              years: "Aug 2016 - May 2017",
            },
          ],
        },
        skills: {
          title: "Skills",
          list: ["Adobe Photoshop - 50%", "HTML5 - 70%"],
        },
        languages: {
          title: "Languages",
          list: ["Sinhala - 90%", "English - 60%"],
        },
        experience: {
          title: "Experience",
          positions: [
            {
              date: "September 2021 - March 2024",
              title: "Frontend Software Developer at Megaport",
              description:
                "Developed and maintained user interfaces for a SaaS platform, focusing on creating reusable UI components for cloud service interactions with GCP, AWS, Azure, and hundreds of other cloud service providers.",
            },
            {
              date: "February 2021 - September 2021",
              title:
                "Full Stack Software Developer (Frontend Focused) at Sweetie Boy Delivers",
              description:
                "Designed and engineered a web-based vehicle transportation app with one other backend focused developer using Nuxt.js and Firebase.",
            },
            {
              date: "October 2019 - February 2021",
              title: "Full Stack Developer Intern at Growth Channel",
              description:
                "Developed and maintained an application for marketers to create, manage, and optimize advertising campaigns across a variety of platforms.",
            },
          ],
        },
      },
      appointments: {
        info: {
          contact: "Contact",
          scheduleConsultation: "Schedule a free 30-minute consultation",
          intro: "Let's see how we can generate more revenue for you",
          email: "Email Address",
          phone: "Phone Number",
          faq: "Frequently Asked Questions",
          faqIntro: "These are some common questions about our services.",
        },
        faq: {
          howLongQuestion: "How long will it take to build my website?",
          howLong:
            "Since I’m a one-man team dedicated to building websites, I can have a simple site with about 5-8 pages designed, polished, and ready in about a week. On the very first day you will have a tailored “Coming Soon” page with a newsletter lead capture. This lets you share something tangible with friends, start building anticipation, and gauge interest while I work on the final product.",
          whatDoYouNeedQuestion: "What do you need from me to get started?",
          whatDoYouNeed:
            "We’ll start with a free 30-minute consultation where I’ll learn about your needs and vision. Afterwards, we’ll schedule an in-depth, in-person meeting. During this session, we’ll discuss logos, color palettes, and overall branding, define your project goals and expectations & build a clear vision of your site so we can avoid hiccups later. This is where we collaborate deeply to align your ideas with the final product. We will also discuss if there is content readily available or if copywriting will be neccesary and any images you would like on the site.",
          changesQuestion:
            "Can I make changes to the website after it’s completed?",
          changes:
            "Yeabsolutely. Most of the time, I use Divi, a WordPress theme and page builder that doesn’t require coding skills. I provide training with every website so you can manage updates confidently. For more complex sites involving custom-coded components, I’ll ensure you understand the basics or provide ongoing support if needed. If you ever get stuck or overwhelmed, I’ll be in your corner",
          mobileQuestions: "Will my website work on mobile devices?",
          mobile:
            "100%. I specialize in mobile-first development, meaning your website will be optimized for mobile devices first, with adjustments made for desktop. This approach is efficient and ensures your site works seamlessly on the devices most people use—over 70% of web traffic is mobile.",
          somethingWrongQuestions:
            "What happens if something goes wrong with my website?",
          somethingWrong:
            "I’m on call 24/7 for emergencies. Whether it’s the 4th of July or Christmas, if your website is in danger, I’ll handle it as a personal priority until the issue is resolved. I keep everything updated and avoid obscure or outdated plugins that could introduce vulnerabilities. Any tools or packages I use are carefully vetted to ensure your site remains secure and stable.",
          costQuestion:
            "How much does a website cost, and are there ongoing expenses?",
          cost: "For a basic website (home page, contact page, lead capture, and 2-3 services pages), prices range from $500–$1,500. This includes training, SEO setup, analytics, and essential plugins like mail or scheduling tools. Ongoing expenses include hosting (GoDaddy, BlueHost, etc.) which can range from $15-50 a month. For more complex websites (10+ services pages, custom solutions, or enterprise-level projects), costs range from $5,000–$10,000, depending on scope and features. For specialized needs, like SaaS platforms or government contracts, contact me directly for a custom quote.",
        },
      },
      general: {
        month: "Monthly",
        year: "Year",
      },
      about: {
        title:
          "Expert Web Development & SEO in Clermont & Greater Orlando Area",
        subtitle: "About Web & SEO by Christopher Bermudez",
        description:
          "Helping local businesses in Clermont, Orlando, and Central Florida grow online with custom websites and high-impact SEO strategies.",
        whyChooseUs: {
          title:
            "Why Businesses in Clermont & Orlando Choose Us for SEO & Web Development",
          content:
            "I specialize in web development and SEO for local businesses who might not have the time to handle their online presence. I help restaurants, auto shops, HVAC services, and more rank higher and attract more customers.",
          seeHow: "See how we help businesses like yours →",
          points: {
            localExpertise:
              "Local Expertise: Deep knowledge of the Orlando/Clermont market.",
            seoResults:
              "Proven SEO Results: Websites ranking #1 for competitive keywords.",
            fastWebsites:
              "Fast, Mobile-Optimized Websites that convert visitors into customers.",
            pricing: "Transparent Pricing & Custom Solutions",
            SeePricing: "See Pricing",
          },
        },
        video: {
          title: "Meet Christopher Bermudez",
          subtitle: "Clermont's Web Developer & SEO Expert",
          description: "With years of experience in web development and SEO, I'm passionate about helping small businesses thrive.",
          languages: "Languages Spoken: English, Español, Português"
        },
        testimonials: {
          title: "Partners Who Shared Their Feedback",
          eliteEuro: {
            quote: "We started getting so many online bookings and calls that we had to hire more staff after Christopher updated our site and implemented marketing techniques.",
          },
          beUpTwo: {
            quote: "Working with Christopher has been a game-changer for my brand. From the start, he had an immediate impact on my website traffic and got me visible on Google - I'm already ranking on the top pages!",
          },
        },
        stats: {
          title: "Empowering Each Other to Succeed",
          description:
            "Every project we've undertaken has been a collaborative effort where every person involved has left their mark. Together, we've not only constructed digital solutions but also built enduring connections that define our success story.",

          label1: "Years of Combined Experience",

          label2: "Successful Projects",
        },
        seeHow: "See How We Ranked [Business Name] #1 in Orlando SEO →",
        mission: {
          title: "Our Mission",
          description:
            "To empower local businesses in Orlando and Clermont with the tools and strategies they need to thrive in the digital landscape. We believe that every business, no matter its size, deserves a strong online presence that drives growth and success.",
        },
        vision: {
          title: "Our Vision",
          description:
            "To be the go-to partner for local businesses in Orlando and Clermont, providing innovative web development and SEO solutions that not only meet but exceed our clients' expectations. We envision a future where every local business can harness the power of the internet to reach its full potential.",
        },
        process: {
          title: "Our Process for SEO & Web Development Success",
          description:
            "At the heart of every thriving business is a digital foundation built for search dominance and user conversion. Our proven methodology combines local market insights with technical precision",
          steps: {
            step1: {
              title: "Step 1: Free Local Consultation",
              description:
                "We analyze your position against local competitors, identifying geo-targeted keyword opportunities specific to your market",
            },
            step2: {
              title: "Step 2: Strategic Website Development",
              description:
                "Building mobile-optimized sites with technical SEO foundations and local search pattern alignment",
            },
            step3: {
              title: "Step 3: Targeted SEO Implementation",
              description:
                "Content optimization for local trends and 'near me' searches with business directory integration",
            },
            step4: {
              title: "Step 4: Sustainable Growth Maintenance",
              description:
                "Continuous refinement of user journeys and local search dominance maintenance",
            },
          },
        },
        cta: {
          title: "Why connect with us?",
          bullets: {
            bullet1: "Having problem handling finance?",
            bullet2: "Having revenue problem?",
            bullet3: "In the needs of professional advice?",
          },
          button: "Contact Me",
        },
      },
      // Keep your existing appointments and general translations here

      pricing: {
        info: {
          badge: "Strategic Growth Solutions",
          title:
            "Select a web development and SEO plan that aligns with your business goals",
          description:
            "Our tiered pricing structure offers tailored solutions, ensuring maximum value and performance for businesses of all sizes",
          features: {
            fivePage: "5-page brochure website",
            seo: "On-page SEO optimization",
            onlinePresence: "Full online presence setup",
            blog: "Blog setup (basic blog structure)",
            newsletter: "Email newsletter setup",
            contentStrategy: "Basic content strategy included",
          },
          startingPrice: "$1500",
          perPage: "/ $150 per additional page",
          contactButton: "Contact",
        },
        plans: {
          retainerTitle: "Retainer Services",
          retainerDescription:
            "Explore our flexible pricing options designed for long-term success. Choose a plan that fits your needs and lets your business thrive with expert SEO and web development support.",
          billing: {
            monthly: "Billed Monthly",
            yearly: "Billed Yearly",
          },
          tier1: {
            name: "Tier 1 - Launchpad",
            description:
              "Symbolizing the beginning of growth with minimal but essential support",
            priceMonthly: "$300",
            priceYearly: "$3,600",
            features: [
              "1x Monthly blog post with advanced blog page structure (500 words, SEO-optimized)",
              "Social Media platform setup & automation",
              "Monthly keyword tracking & reporting (up to 25 keywords)",
              "Basic social media engagement (10 posts/month, automated)",
              "Email newsletter management (monthly)",
              "Basic site audit & updates",
              "Basic reporting & analytics",
            ],
          },
          tier2: {
            name: "Tier 2 - Momentum",
            description:
              "For businesses ready to accelerate with more comprehensive support and engagement",
            priceMonthly: "$600",
            priceYearly: "$7,200",
            features: [
              "2x Monthly blog posts (1,000 words each, SEO-optimized)",
              "Social Media platform management (including content creation, posts, and engagement)",
              "Monthly keyword tracking & reporting (up to 50 keywords)",
              "Email newsletter creation and automation (2-4 emails/month)",
              "Full-site audit & optimization (monthly)",
              "Detailed monthly reporting with video updates (analytics, keyword tracking, social media insights)",
            ],
          },
          tier3: {
            name: "Tier 3 - Legacy",
            description:
              "Represents the top-tier level of investment and strategic development for long-term, dominant success",
            priceMonthly: "$1,000",
            priceYearly: "$12,000",
            features: [
              "4x Monthly blog posts (1,500 words each, SEO-optimized)",
              "Monthly Brand Strategy Call – Sessions with our in-house brand expert",
              "Project Management Support",
              "Advanced keyword tracking & SEO strategies (up to 100 keywords)",
              "Paid ad campaign strategy setup & management",
            ],
          },
          additionalServices: {
            title: "Additional Services",
            pages: {
              title: "Additional Pages",
              description: "Want more SEO optimized pages?",
              price: "$150/page",
            },
            articles: {
              title: "Additional Articles",
              description: "Quality content from our U.S. content team",
              price: "$100/article",
            },
            custom: {
              title: "Custom Solutions",
              description:
                "Custom site solutions, integrations, consulting & more",
              button: "Contact Us",
            },
          },
        },
      },
    },
    es: {
      home: {
        hero: {
          title: "Desarrollador De Web y Especialista en SEO",
          subtitle1: "Desarrollo de Sitios Web",
          subtitle2: "Desarrollo de Programas",
          subtitle3: "Publicidad y Mercadeo",
          subtitle4: "Servicios de SEO",
          description:
            "Ayudando a negocios en la Florida Central a establecer su presencia en el web desde 2016.",
          callToAction: "¿Cómo está su sitio web ",
          coloredCTA: "posicionado?",
          button: "Contáctame",
          websiteUrl: "Dirección del sitio web",
          firstName: "Nombre",
          phone: "Teléfono",
          email: "Correo Electrónico",
          audit: "Auditoría Gratis",
          answer: "Obtenga la respuesta en minutos!",
        },
        navbar: {
          appointment: "Establecer Cita",
          software: "Desarrollo de Programas",
          web: "Desarrollo de Web",
          marketing: "Publicidad y Mercadeo",
          journal: "Diario",
          about: "Sobre Mi",
          pricing: "Precios",
          downloadresume: "Descargar Currículum",
        },
        whyUs: {
          creativeSolutions: "Soluciones Creativas",
          resultsTitle: "Creando Sitios que Generan Resultados 🚀",
          whyUsDescription: "Impulsa tu presencia en línea con",
          customWebDevBold: "desarrollo web personalizado",
          advancedSeoBold: "estrategias avanzadas de SEO",
          creativeSolutionsSummary:
            "Aumenta tu visibilidad, atrae prospectos y convierte visitantes en clientes leales.",
          optimizedDesignsBold: "80% tiempos de carga más rápidos",
          optimizedDesigns: "con diseños optimizados",
          leadsBold: "65% más prospectos",
          leads: "con campañas de SEO dirigidas",
          conversionsBold: "50% más conversiones",
          conversions: "con diseños centrados en el usuario",
          mobileBold: "Optimización móvil completa",
          mobile: "para mejor interacción",
          uptimeBold: "100% de garantía de tiempo activo",
          uptime: "para tu negocio",
          learnMoreButton: "Aprende Más Sobre SEO",
        },
        mystory: {
          journey: "SOBRE MI",
          storyheader: "MI HISTORIA",
          storytext:
            "Un desarrollador de software front-end experimentado con un historial comprobado tanto en el ámbito corporativo como en el ecosistema de empresas recientemente creadas. Con una pasión por crear soluciones centradas en el usuario, me aseguro de que cada proyecto no solo cumpla, sino que supere las expectativas.",
          storyButton: "Leer Más",
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
          portfolio_elite_text:
            "Diseño de sitios web, SEO, marketing con gran énfasis en marketing por correo electrónico, consultoría y renovación de la presencia en línea.",
          portfolio_beuptwo_header: "BeUpTwo",
          portfolio_beuptwo_text:
            "Diseño de sitio web, SEO y consultoría estratégica de marca. Transformé su presencia en línea con un sitio web ultrarrápido y elegante, construido sin WordPress, utilizando Nuxt para un rendimiento óptimo. Ahora su web refleja su esencia: autoridad y sofisticación, con una combinación de colores negro y dorado que refuerza su imagen de marca. Con puntuaciones perfectas en PageSpeed Insights y análisis avanzados, su plataforma no solo es visualmente impactante, sino también potente y duradera.",
          portfolio_4star_header: "4 Star Customs",
          portfolio_4star_text:
            "Diseño e implementación de sitios web para 4StarCustoms, un taller de carrocería en Ocoee, Florida.",
          button_text: "Ver Sitio",
        },
        contact: {
          header: "Contáctame",
          name: "Tu Nombre",
          name_header: "Nombre",
          email: "nombre.ejemplo.com",
          email_header: "Dirección de Correo Electrónico",
          company: "Tu Empresa",
          company_header: "Empresa",
          website: "https://ejemplo.com",
          website_header: "URL del Sitio Web",
          content: "¿Qué contenido principal necesitas en tu sitio web?",
          type: "textarea",
          placeholder: "Describe el contenido principal que necesitas...",
          content_header: "¿Qué contenido principal necesitas en tu sitio web?",
          functionality: "Describe la funcionalidad indispensable...",
          functionality_header: "¿Qué funcionalidad indispensable necesitas?",
          state_of_site: "Describe el estado actual de tu sitio web...",
          state_of_site_header: "¿Cuál es el estado actual de tu sitio web?",
          site_experience: "Describe tu experiencia...",
          site_experience_header:
            "¿Cuál es tu experiencia gestionando tu propio sitio web?",
          other_details: "Deja detalles o preguntas adicionales...",
          other_details_header:
            "Por favor, proporciona cualquier otro detalle o pregunta que tengas sobre tu sitio web",
        },
        footer: {
          resources: "Recursos",
          follow: "Sígueme",
          legal: "Legal",
          textarea:
            "2024, Christopher Bermudez™. Hecho con ❤️ en Orlando, Florida",
        },
      },
      blog: {
        title: "Nuestros ultimos",
        titleColored: "blogs",
        description:
          'El SEO no se trata solo de palabras clave, sino de usar las estrategias correctas para que Google y tu audiencia noten tu sitio. En este blog, desgloso tácticas reales que ayudan a los negocios a aparecer donde los clientes están buscando. Ya sea que quieras posicionarte para búsquedas como "plomero cerca de mí" o "mejor panadería en Orlando", aquí encontrarás estrategias de SEO prácticas que generan resultados reales.',
      },
      resume: {
        github: {
          title: "Mi Github",
          viewRepo: "Ver Repo",
        },
        built: {
          title: "Este Sitio fue Construido Con",
        },
        profile: {
          name: "Christopher Bermudez",
          role: "Desarrollador de Software Frontend",
          location: "Greater Orlando",
        },
        about: {
          title: "Sobre Mí",
          description:
            "Clermont, Florida ha sido mi hogar durante más de 15 años. Aquí he echado raíces profundas y tengo una conexión especial con este hermoso estado. Si Florida alguna vez se inunda, probablemente me encuentres remando en una canoa por la ciudad—hay que adaptarse, ¿verdad? Mi viaje al mundo de la tecnología comenzó en la secundaria. Yo era el IT guy al que todos acudían, con un cuarto siempre lleno de tarjetas gráficas, placas base y todo tipo de aparatos. Construir sitios web se convirtió en una forma de ganar algo de dinero extra y rápidamente se transformó en una pasión. Hoy en día, soy un orgulloso esposo y padre. Cuando no estoy programando, me encontrarás jugando videojuegos, corriendo por los parques de Florida, incluso bajo el abrasador sol del mediodía (con mucho protector solar, por supuesto).",
        },
        contactInfo: {
          title: "Información de Contacto",
          email: "christopherbermudez98(a)gmail.com",
          phone: "+1 (352) - 978 - 4435",
          address: "Greater Orlando",
        },
        education: {
          title: "Educación",
          degrees: [
            {
              level: "Bootcamp de Codificación, Desarrollo Web Full-Stack",
              school: "Universidad de Florida Central",
              years: "2017 - 2018",
            },
            {
              level:
                "Asociado en Ciencias - AS, Tecnologías de Comunicaciones Audiovisuales",
              school: "Valencia College",
              years: "Ago 2016 - Mayo 2017",
            },
          ],
        },
        skills: {
          title: "Habilidades",
          list: ["Adobe Photoshop - 50%", "HTML5 - 70%"],
        },
        languages: {
          title: "Idiomas",
          list: ["Cingalés - 90%", "Inglés - 60%"],
        },
        hobbies: {
          title: "Pasatiempos",
          list: [
            "Fútbol",
            "Tenis",
            "Trotar",
            "Excursionismo",
            "Jugar video juegos",
          ],
        },
        experience: {
          title: "Experiencia",
          positions: [
            {
              date: "Septiembre 2021 - Marzo 2024",
              title: "Desarrollador de Software Frontend en Megaport",
              description:
                "Desarrollé y mantuve interfaces de usuario para una plataforma SaaS, centrándome en la creación de componentes de UI reutilizables para interacciones de servicio en la nube con GCP, AWS, Azure y cientos de otros proveedores de servicios en la nube.",
            },
            {
              date: "Febrero 2021 - Septiembre 2021",
              title:
                "Desarrollador de Software Full Stack (Enfocado en Frontend) en Sweetie Boy Delivers",
              description:
                "Diseñé e implementé una aplicación de transporte de vehículos basada en la web con otro desarrollador enfocado en backend usando Nuxt.js y Firebase.",
            },
            {
              date: "Octubre 2019 - Febrero 2021",
              title:
                "Pasante de Desarrollador de Software Full Stack en Growth Channel",
              description:
                "Desarrollé y mantuve una aplicación para que los mercadólogos pudieran crear, gestionar y optimizar campañas publicitarias en una variedad de plataformas.",
            },
          ],
        },
      },
      appointments: {
        info: {
          contact: "Contacto",
          scheduleConsultation: "Programa una consulta gratuita de 30 minutos",
          intro: "Veamos cómo podemos generarle más ingresos",
          email: "Correo Electrónico",
          phone: "Número de Teléfono",
          faq: "Preguntas Frecuentes",
          faqIntro:
            "Estas son algunas preguntas comunes sobre nuestros servicios.",
        },
        faq: {
          howLongQuestion: "¿Cuánto tiempo tomará construir mi sitio web?",
          howLong:
            "Como soy un equipo de una sola persona dedicado a crear sitios web, puedo tener un sitio simple de aproximadamente 5-8 páginas diseñado, pulido y listo en aproximadamente una semana. En el primer día tendrás una página de 'Próximamente' personalizada con una captura de correos para boletines. Esto te permitirá compartir algo tangible con tus amigos, empezar a generar anticipación y medir el interés mientras trabajo en el producto final.",
          whatDoYouNeedQuestion: "¿Qué necesito proporcionar para empezar?",
          whatDoYouNeed:
            "Comenzaremos con una consulta gratuita de 30 minutos donde conoceré tus necesidades y visión. Luego, programaremos una reunión presencial más profunda. Durante esta sesión, discutiremos logotipos, paletas de colores y el branding general, definiremos los objetivos y expectativas de tu proyecto, y construiremos una visión clara de tu sitio para evitar contratiempos más adelante. También hablaremos sobre si tienes contenido disponible o si será necesario redactarlo, así como de las imágenes que deseas incluir en el sitio.",
          changesQuestion:
            "¿Puedo hacer cambios en el sitio web después de que esté terminado?",
          changes:
            "¡Claro que sí! La mayoría de las veces utilizo Divi, un tema y creador de páginas de WordPress que no requiere conocimientos de programación. Proporciono capacitación con cada sitio web para que puedas gestionar actualizaciones con confianza. Para sitios más complejos que requieran componentes personalizados, me aseguraré de que entiendas lo básico o te brindaré soporte continuo si es necesario. Si en algún momento te sientes abrumado, siempre estaré disponible para ayudarte.",
          mobileQuestions: "¿Mi sitio web funcionará en dispositivos móviles?",
          mobile:
            "100%. Me especializo en desarrollo enfocado primero en dispositivos móviles, lo que significa que tu sitio estará optimizado para móviles desde el principio, con ajustes realizados para escritorio. Este enfoque es eficiente y asegura que tu sitio funcione perfectamente en los dispositivos que la mayoría de las personas usan: más del 70% del tráfico web proviene de móviles.",
          somethingWrongQuestions:
            "¿Qué pasa si algo sale mal con mi sitio web?",
          somethingWrong:
            "Estoy disponible 24/7 para emergencias. Ya sea el 4 de julio o Navidad, si tu sitio web está en peligro, lo tomaré como una prioridad personal hasta que el problema esté resuelto. Mantengo todo actualizado y evito usar plugins obsoletos o poco confiables que puedan introducir vulnerabilidades. Las herramientas o paquetes que utilizo están cuidadosamente seleccionados para garantizar que tu sitio sea seguro y estable.",
          costQuestion: "¿Cuánto cuesta un sitio web y hay gastos continuos?",
          cost: "Para un sitio básico (página de inicio, página de contacto, captura de correos y 2-3 páginas de servicios), los precios varían entre $500 y $1,500. Esto incluye capacitación, configuración de SEO, analíticas y plugins esenciales como herramientas de correos o de programación. Para sitios más complejos (más de 10 páginas de servicios, soluciones personalizadas o proyectos empresariales), los costos varían entre $5,000 y $10,000, dependiendo del alcance y las características. Para necesidades especializadas, como plataformas SaaS o contratos gubernamentales, contáctame directamente para una cotización personalizada.",
        },
      },
      general: {
        month: "Mensual",
        year: "Año",
      },
      about: {
        title:
          "Desarrollo Web y SEO Experto en Clermont y el Área Metropolitana de Orlando",
        subtitle: "Sobre Web & SEO por Christopher Bermudez",
        description:
          "Ayudando a negocios locales en Clermont, Orlando y el centro de Florida a crecer en línea con sitios web personalizados y estrategias de SEO de alto impacto.",
        whyChooseUs: {
          title:
            "Por Qué los Negocios en Clermont y Orlando Nos Eligen para SEO y Desarrollo Web",
          content:
            "Me especializo en desarrollo web y SEO para negocios locales que quizás no tienen tiempo para manejar su presencia en línea. Ayudo a restaurantes, talleres de autos, servicios HVAC y más a posicionarse mejor y atraer más clientes.",
          seeHow: "Ver cómo ayudamos a negocios como el tuyo →",
          points: {
            localExpertise:
              "Conocimiento Local: Conocimiento profundo del mercado de Orlando/Clermont.",
            seoResults:
              "Resultados SEO Comprobados: Sitios web en el puesto #1 para palabras clave competitivas.",
            fastWebsites:
              "Sitios Web Rápidos y Optimizados para Móviles que convierten visitantes en clientes.",
            pricing: "Precios Transparentes y Soluciones Personalizadas",
            SeePricing: "Ver Precios",
          },
        },
        video: {
          title: "Conoce a Christopher Bermudez",
          subtitle: "Desarrollador Web y Experto en SEO de Clermont",
          description: "Con años de experiencia en desarrollo web y SEO, me apasiona ayudar a los pequeños negocios a prosperar.",
          languages: "Idiomas: Inglés, Español, Portugués"
        },
        testimonials: {
          title: "Socios que dieron su opinión",
          eliteEuro: {
            quote: "Comenzamos a recibir tantas reservas en línea y llamadas que tuvimos que contratar más personal después de que Christopher actualizó nuestro sitio e implementó técnicas de marketing.",
          },
          beUpTwo: {
            quote: "Trabajar con Christopher ha sido un cambio radical para mi marca. Desde el principio, impactó inmediatamente el tráfico de mi sitio web y me hizo visible en Google. ¡Ya estoy apareciendo en las primeras páginas!",
          },
        },
        stats: {
          title: "Empoderándonos Mutuamente para Triunfar",
          description:
            "Cada proyecto que hemos emprendido ha sido un esfuerzo colaborativo donde cada persona involucrada ha dejado su huella. Juntos, no solo hemos construido soluciones digitales, sino también conexiones duraderas que definen nuestra historia de éxito.",
          label1: "Años de Experiencia Combinada",
          label2: "Proyectos Exitosos",
        },
        seeHow:
          "Descubre Cómo Logramos Posicionar [Nombre del Negocio] en el #1 en SEO en Orlando →",
        process: {
          title: "Nuestro Proceso para Éxito en SEO y Desarrollo Web",
          description:
            "En el corazón de cada negocio exitoso hay una base digital construida para dominio en búsquedas y conversión de usuarios. Nuestra metodología comprobada combina conocimiento del mercado local con precisión técnica",
          steps: {
            step1: {
              title: "Paso 1: Consulta Local Gratuita",
              description:
                "Analizamos tu posición frente a competidores locales, identificando oportunidades de palabras clave específicas para tu mercado",
            },
            step2: {
              title: "Paso 2: Desarrollo Estratégico de Sitio Web",
              description:
                "Construcción de sitios móvil-optimizados con bases técnicas de SEO y alineación a patrones de búsqueda local",
            },
            step3: {
              title: "Paso 3: Implementación de SEO Dirigido",
              description:
                "Optimización de contenido para tendencias locales y búsquedas 'cerca de mí' con integración en directorios comerciales",
            },
            step4: {
              title: "Paso 4: Mantenimiento de Crecimiento Sostenible",
              description:
                "Refinamiento continuo de jornadas de usuario y mantenimiento de dominio en búsquedas locales",
            },
          },
        },

        mission: {
          title: "Nuestra Misión",
          description:
            "Empoderar a las empresas locales en Orlando y Clermont con las herramientas y estrategias que necesitan para prosperar en el panorama digital. Creemos que cada negocio, sin importar su tamaño, merece una fuerte presencia en línea que impulse el crecimiento y el éxito.",
        },
        vision: {
          title: "Nuestra Visión",
          description:
            "Ser el socio preferido de las empresas locales en Orlando y Clermont, ofreciendo soluciones innovadoras de desarrollo web y SEO que no solo cumplan, sino superen las expectativas de nuestros clientes. Imaginamos un futuro en el que cada negocio local pueda aprovechar el poder de internet para alcanzar su máximo potencial.",
        },

        cta: {
          title: "¿Por qué conectarte con nosotros?",
          bullets: {
            bullet1: "¿Tienes problemas de tiempo para manejar tu presencia en línea?",
            bullet2: "¿No estás generando suficientes clientes potenciales en línea?",
            bullet3: "¿Necesitas consultoría en servicios web?",
          },
          button: "Contáctame",
        },
      },

      pricing: {
        info: {
          badge: "Soluciones de Crecimiento Estratégico",
          title:
            "Selecciona un plan de desarrollo web y SEO que se alinee con los objetivos de tu negocio",
          description:
            "Nuestra estructura de precios por niveles ofrece soluciones personalizadas, asegurando el máximo valor y rendimiento para negocios de todos los tamaños",
          features: {
            fivePage: "Sitio web de 5 páginas (brochure)",
            seo: "Optimización SEO en la página",
            onlinePresence: "Configuración completa de presencia en el web",
            blog: "Configuración de blog (estructura básica de blog)",
            newsletter: "Configuración de boletín de correo electrónico",
            contentStrategy: "Estrategia de contenido básica incluida",
          },
          startingPrice: "$1500",
          perPage: "/ $150 por página adicional",
          contactButton: "Contactar",
        },
        plans: {
          retainerTitle: "Servicios de Retención",
          retainerDescription:
            "Explora nuestras opciones de precios flexibles diseñadas para el éxito a largo plazo. Elige un plan que se ajuste a tus necesidades y permita a tu negocio prosperar con el soporte experto de SEO y desarrollo web.",
          billing: {
            monthly: "Facturado Mensualmente",
            yearly: "Facturado Anualmente",
          },
          tier1: {
            name: "Nivel 1 - Lanzamiento",
            description:
              "Simboliza el comienzo del crecimiento con soporte mínimo pero esencial",
            priceMonthly: "$300",
            priceYearly: "$3,600",
            features: [
              "1x Publicación mensual de blog con estructura avanzada de página de blog (500 palabras, optimizado para SEO)",
              "Configuración y automatización de plataformas de redes sociales",
              "Seguimiento y reporte mensual de palabras clave (hasta 25 palabras clave)",
              "Interacción básica en redes sociales (10 publicaciones/mes, automatizadas)",
              "Gestión de boletín de correo electrónico (mensual)",
              "Auditoría básica del sitio y actualizaciones",
              "Informes y análisis básicos",
            ],
          },
          tier2: {
            name: "Nivel 2 - Momentum",
            description:
              "Para negocios listos para acelerar con soporte y compromiso más completo",
            priceMonthly: "$600",
            priceYearly: "$7,200",
            features: [
              "2x Publicaciones mensuales de blog (1,000 palabras cada una, optimizadas para SEO)",
              "Gestión de plataformas de redes sociales (incluye creación de contenido, publicaciones y participación)",
              "Seguimiento y reporte mensual de palabras clave (hasta 50 palabras clave)",
              "Creación y automatización de boletines de correo electrónico (2-4 correos electrónicos/mes)",
              "Auditoría completa del sitio y optimización (mensual)",
              "Informes detallados mensuales con actualizaciones en video (análisis, seguimiento de palabras clave, información de redes sociales)",
            ],
          },
          tier3: {
            name: "Nivel 3 - Legado",
            description:
              "Representa el nivel más alto de inversión y desarrollo estratégico para un éxito dominante a largo plazo",
            priceMonthly: "$1,000",
            priceYearly: "$12,000",
            features: [
              "4x Publicaciones mensuales de blog (1,500 palabras cada una, optimizadas para SEO)",
              "Llamada mensual de Estrategia de Marca – Sesiones con nuestro experto en marca interno",
              "Soporte de Gestión de Proyectos",
              "Seguimiento avanzado de palabras clave y estrategias SEO (hasta 100 palabras clave)",
              "Configuración y gestión de campañas de anuncios pagados",
            ],
          },
          additionalServices: {
            title: "Servicios Adicionales",
            pages: {
              title: "Páginas Adicionales",
              description: "¿Quieres más páginas optimizadas para SEO?",
              price: "$150/página",
            },
            articles: {
              title: "Artículos Adicionales",
              description:
                "Contenido de calidad de nuestro equipo de contenido de EE. UU.",
              price: "$100/artículo",
            },
            custom: {
              title: "Soluciones Personalizadas",
              description:
                "Soluciones personalizadas para el sitio, integraciones, consultoría y más",
              button: "Contáctanos",
            },
          },
        },
      },
    },
  },
}));
