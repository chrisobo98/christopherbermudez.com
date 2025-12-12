import { templates } from "./data/templates";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  globalInjection: true,
  messages: {
    en: {
      home: {
        hero: {
          title: "Frontend Developer & Custom Business Solutions",
          subtitle1: "Web Development",
          subtitle2: "Custom Business Solutions",
          subtitle3: "SaaS Development",
          subtitle4: "AI Integration",
          description:
            "Building custom web solutions that replace expensive third-party tools and streamline business operations since 2016.",
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
          creativeSolutions: "Custom Solutions",
          resultsTitle: "Building Tools That Streamline Your Business 🚀",
          whyUsDescription: "Transform your operations with",
          customWebDevBold: "custom web applications",
          advancedSeoBold: "business automation solutions",
          creativeSolutionsSummary:
            "Replace expensive third-party tools, automate workflows, and save thousands on subscriptions.",
          optimizedDesignsBold: "Save $500+/month",
          optimizedDesigns: "by replacing multiple SaaS tools",
          leadsBold: "Custom CRMs & dashboards",
          leads: "built specifically for your workflow",
          conversionsBold: "Digital signatures & PDFs",
          conversions: "integrated intake forms",
          mobileBold: "Stripe payment integration",
          mobile: "and customer management",
          uptimeBold: "Modern tech stack",
          uptime: "Vue 3, Nuxt, TypeScript, Supabase",
          learnMoreButton: "See My Work",
        },
        navbar: {
          appointment: "30 Min Consultation",
          software: "Software Development",
          web: "Web Development",
          templates: "Templates",
          marketing: "Ads & Marketing",
          blogs: "Blogs",
          journal: "Journal",
          about: "About",
          pricing: "Pricing",
          services: "Services",
          downloadresume: "Download Resume",
          coreService: "Core Services",
          frontendDev: {
            title: "Frontend Web Development",
            description: "Vue 3, Nuxt, TypeScript Solutions",
          },
          customSolutions: {
            title: "Custom Business Solutions",
            description: "CRMs, Intake Forms, Dashboards",
          },
          saasDev: {
            title: "SaaS Development",
            description: "Scalable Web Applications",
          },
          aiIntegration: {
            title: "AI Integration",
            description: "Chatbots, Automation, Analytics",
          },

          mobileServices: {
            frontend_dev: {
              title: "Frontend Development",
              path: "/services/frontend-web-development",
            },
            custom_solutions: {
              title: "Custom Solutions",
              path: "/services/custom-business-solutions",
            },
            saas_dev: {
              title: "SaaS Development",
              path: "/services/saas-development",
            },
            ai_integration: {
              title: "AI Integration",
              path: "/services/ai-integration-for-small-businesses",
            },
          },
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
          header: "WHAT I DO BEST",
          consultation: "Frontend Web Development",
          consultation_text:
            "Building fast, modern websites and web applications using Vue 3, Nuxt, TypeScript, and the latest technologies.",
          softwaredev: "Custom Business Solutions",
          softwaredev_text:
            "Custom CRMs, intake forms with digital signatures, payment integrations, and dashboards that replace costly third-party tools.",
          maintenance_and_support: "SaaS Development",
          maintenance_and_support_text:
            "Building scalable software-as-a-service applications with real-time features, user management, and cloud infrastructure.",
          seo_marketing_ads: "AI Integration for Small Businesses",
          seo_marketing_ads_text:
            "Implementing AI chatbots, automation, data analysis, and intelligent features to streamline your business operations.",
        },
        aiIntegration: {
          subheader: "AI INTEGRATION",
          header: "How AI Can Transform Your Small Business",
          description:
            "As a tech-savvy developer, I help small businesses leverage AI to automate tasks, improve customer service, and make data-driven decisions. Here are some ways AI can help your business:",
          use_case_1_title: "Customer Service Automation",
          use_case_1_description:
            "AI chatbots handle FAQs, provide after-hours support, and route complex queries to humans, improving response times and customer satisfaction.",
          use_case_2_title: "Data & Analytics",
          use_case_2_description:
            "Analyze sales trends, customer behavior, and financial data with AI-powered insights to make informed business decisions.",
          use_case_3_title: "Marketing & Content Generation",
          use_case_3_description:
            "Generate blog posts, social media updates, ad copy, product descriptions, and even create images to streamline your marketing efforts.",
          use_case_4_title: "Operations Automation",
          use_case_4_description:
            "Automate data entry, manage inventory, forecast demand, schedule appointments, and record meeting minutes to save time and reduce errors.",
          use_case_5_title: "HR & Recruitment",
          use_case_5_description:
            "Draft job descriptions, analyze resumes, automate onboarding workflows, and create training materials to streamline human resources.",
          use_case_6_title: "Cybersecurity & Monitoring",
          use_case_6_description:
            "Monitor for unusual activity, detect potential threats, and protect your business against data breaches with AI-powered security.",
          cta_text:
            "Ready to explore how AI can work for your business? Let's discuss your needs.",
          cta_button: "Schedule a Consultation",
        },
        projects: {
          subheader: "FEATURED PROJECTS",
          header: "Personal Projects & Experiments",
          description:
            "Beyond client work, I build passion projects that push the boundaries of web development and explore new technologies.",
          historicus_title: "Historicus - Interactive History Platform",
          historicus_description:
            "A lesson-based history education platform with interactive timelines, quizzes, and progress tracking. Built with Vue 3, Nuxt, TypeScript, and Supabase to create an engaging learning experience.",
          exoplanet_title: "Exoplanet Discovery Hub",
          exoplanet_description:
            "A 3D space exploration tool with interactive star maps, habitable-zone analysis, and NASA data integration. Features a custom-built 3D rendering engine running at 60 FPS without Three.js.",
          view_project: "View Project",
        },
        frontendDev: {
          hero: {
            title: "Modern",
            highlight: "Frontend Development",
            subtitle: " with Vue & Nuxt",
            description: "Building fast, scalable, and beautiful web applications using Vue 3, Nuxt, and TypeScript",
            button: "Schedule Consultation",
            trustMetrics: {
              experience: { value: "9+", label: "Years Experience" },
              tech: { value: "Vue 3", label: "Latest Tech" },
              typescript: { value: "TypeScript", label: "Type Safety" },
            },
          },
          techStack: {
            title: "My Tech Stack",
            vue: {
              title: "Vue 3 & Composition API",
              description: "Building reactive, component-based UIs with the latest Vue 3 features and Composition API.",
            },
            nuxt: {
              title: "Nuxt 3",
              description: "Server-side rendering, static site generation, and powerful routing for optimal performance.",
            },
            typescript: {
              title: "TypeScript",
              description: "Type-safe code with better IDE support, fewer bugs, and improved developer experience.",
            },
            tailwind: {
              title: "Tailwind CSS",
              description: "Utility-first CSS framework for rapidly building custom, responsive designs.",
            },
            supabase: {
              title: "Supabase",
              description: "PostgreSQL database, authentication, real-time subscriptions, and storage - all in one.",
            },
            vite: {
              title: "Vite",
              description: "Lightning-fast build tool with instant hot module replacement for rapid development.",
            },
          },
          whatIBuild: {
            title: "What I Build",
            spa: {
              title: "Single Page Applications (SPAs)",
              description: "Fast, fluid user experiences with client-side routing and dynamic content loading.",
            },
            ssr: {
              title: "Server-Side Rendered Apps (SSR)",
              description: "SEO-optimized applications with faster initial page loads and better performance.",
            },
            pwa: {
              title: "Progressive Web Apps (PWAs)",
              description: "App-like experiences that work offline and can be installed on any device.",
            },
            ssg: {
              title: "Static Site Generation (SSG)",
              description: "Lightning-fast websites pre-rendered at build time for maximum performance.",
            },
            dashboard: {
              title: "Dashboard & Admin Panels",
              description: "Data visualization, real-time updates, and complex state management made simple.",
            },
            ecommerce: {
              title: "E-Commerce Platforms",
              description: "Shopping carts, product catalogs, payment integration, and order management.",
            },
          },
        },
        customSolutions: {
          hero: {
            title: "Custom Business Solutions",
            highlight: " That Replace Expensive SaaS Tools",
            description: "Stop paying hundreds per month for generic tools. Get custom CRMs, intake forms, dashboards, and payment systems built specifically for your business.",
            button: "Get a Custom Quote",
            trustMetrics: {
              savings: { value: "$500+", label: "Saved Per Month" },
              custom: { value: "100%", label: "Custom Built" },
              fees: { value: "No", label: "Monthly Fees" },
            },
          },
          realExamples: {
            title: "What I've Built for Real Businesses",
            autoShop: {
              title: "Custom CRM for Auto Shop",
              description: "Built a complete customer relationship management system with:",
              features: {
                vinLookup: "Customer intake forms with VIN lookup",
                signatures: "Digital signatures and PDF generation",
                vehicleHistory: "Vehicle history tracking per customer",
                printable: "Printable service records",
              },
            },
            salon: {
              title: "Course Platform for Salon",
              description: "Created a complete course management and booking system with:",
              features: {
                stripe: "Stripe integration for course deposits",
                intakeForms: "Digital intake forms with signatures",
                dashboard: "Dashboard to view and manage all forms",
                customerHistory: "Customer history and return visit tracking",
              },
            },
          },
          solutions: {
            title: "Custom Solutions I Build",
            intakeForms: {
              title: "Intake Forms & Signatures",
              description: "Digital forms with e-signatures, PDF generation, and automated email delivery. Perfect for service-based businesses.",
            },
            crm: {
              title: "Custom CRM Systems",
              description: "Track customers, manage interactions, store documents, and maintain history - all tailored to your workflow.",
            },
            dashboards: {
              title: "Business Dashboards",
              description: "Real-time metrics, data visualization, and insights - see everything important in one place.",
            },
            payment: {
              title: "Payment Integration",
              description: "Stripe payments, deposit collection, invoicing, and payment tracking built right into your system.",
            },
            booking: {
              title: "Booking & Scheduling",
              description: "Custom booking systems with availability management, confirmations, and reminders.",
            },
            documents: {
              title: "Document Management",
              description: "Upload, organize, and retrieve documents with search, tagging, and version control.",
            },
          },
          whyCustom: {
            title: "Why Custom > Generic SaaS",
            oneTime: {
              title: "One-Time Cost",
              main: "Pay once, own forever. No monthly subscriptions eating into your profits.",
              sub: "Most SaaS tools cost $50-200/month. That's $600-2,400/year for features you might not even need.",
            },
            workflow: {
              title: "Built for YOUR Workflow",
              main: "Every field, button, and feature designed around how you actually work.",
              sub: "No more forcing your process into someone else's template. No unused features cluttering your interface.",
            },
            data: {
              title: "Own Your Data",
              main: "Your customer data lives in your database. Export anytime, no lock-in.",
              sub: "With SaaS, your data is hostage. Stop paying, lose everything.",
            },
            features: {
              title: "No Feature Limitations",
              main: "Need something? We add it. No \"upgrade to enterprise\" paywalls.",
              sub: "SaaS companies nickel-and-dime you for every feature. Custom means you decide what you need.",
            },
          },
        },
        saasDev: {
          hero: {
            title: "Build Scalable",
            highlight: " SaaS Applications",
            subtitle: " That Grow With You",
            description: "From MVP to enterprise-scale SaaS platforms. Real-time features, user management, subscription billing, and cloud infrastructure.",
            button: "Discuss Your SaaS Idea",
            trustMetrics: {
              realtime: { value: "Real-Time", label: "Data Updates" },
              scalable: { value: "Scalable", label: "Architecture" },
              secure: { value: "Secure", label: "By Default" },
            },
          },
          features: {
            title: "Everything Your SaaS Needs",
            userAuth: {
              title: "User Management & Auth",
              description: "Sign up, login, password reset, email verification, social auth, and role-based permissions.",
            },
            billing: {
              title: "Subscription Billing",
              description: "Stripe integration with multiple plans, trial periods, invoicing, and automatic renewals.",
            },
            realtime: {
              title: "Real-Time Updates",
              description: "WebSockets and subscriptions for live data updates without page refreshes.",
            },
            analytics: {
              title: "Analytics Dashboard",
              description: "Track key metrics, user activity, revenue, and business insights in real-time.",
            },
            api: {
              title: "API Development",
              description: "RESTful APIs with authentication, rate limiting, and comprehensive documentation.",
            },
            notifications: {
              title: "Email & Notifications",
              description: "Transactional emails, in-app notifications, and automated communication workflows.",
            },
            security: {
              title: "Security & Compliance",
              description: "Data encryption, secure authentication, GDPR compliance, and regular security audits.",
            },
            admin: {
              title: "Admin Controls",
              description: "Manage users, view analytics, configure settings, and moderate content from one place.",
            },
            multiTenant: {
              title: "Multi-Tenant Architecture",
              description: "Support multiple organizations/workspaces with data isolation and custom domains.",
            },
          },
          techStack: {
            title: "Built With Modern Tech",
            frontend: {
              title: "Frontend",
              vue: { name: "Vue 3 & Nuxt", description: "Reactive UI with SSR/SSG" },
              typescript: { name: "TypeScript", description: "Type-safe development" },
              tailwind: { name: "Tailwind CSS", description: "Beautiful, responsive UI" },
            },
            backend: {
              title: "Backend & Infrastructure",
              supabase: { name: "Supabase", description: "Database, Auth, Real-time" },
              stripe: { name: "Stripe, Square, PayPal", description: "Payment processing" },
              hosting: { name: "Cloudflare/Netlify", description: "CDN & hosting" },
            },
          },
          process: {
            title: "How We Build Your SaaS",
            discovery: {
              title: "Discovery & Planning",
              description: "Define features, user flows, and technical requirements. Create wireframes and architecture.",
            },
            mvp: {
              title: "MVP Development",
              description: "Build core features first. Get to market fast with a functional product you can test.",
            },
            iterate: {
              title: "Iterate & Scale",
              description: "Add features based on feedback. Optimize performance. Scale infrastructure as you grow.",
            },
            launch: {
              title: "Launch & Support",
              description: "Deploy to production. Monitor performance. Provide ongoing maintenance and updates.",
            },
          },
        },
        aiIntegrationService: {
          hero: {
            title: "AI Integration",
            highlight: " for Small Businesses",
            description: "Automate tasks, improve customer service, and make data-driven decisions with AI - without the enterprise price tag.",
            button: "Explore AI Solutions",
            trustMetrics: {
              automation: { value: "24/7", label: "Automation" },
              practical: { value: "Practical", label: "Solutions" },
              affordable: { value: "Affordable", label: "Implementation" },
            },
          },
          useCases: {
            title: "How AI Can Transform Your Business",
            customerService: {
              title: "Customer Service Automation",
              description: "AI chatbots handle FAQs, provide after-hours support, and route complex queries to humans. Improve response times and customer satisfaction without hiring more staff.",
            },
            dataAnalytics: {
              title: "Data & Analytics",
              description: "Analyze sales trends, customer behavior, and financial data with AI-powered insights. Make informed business decisions based on patterns you couldn't see before.",
            },
            marketing: {
              title: "Marketing & Content Generation",
              description: "Generate blog posts, social media updates, ad copy, and product descriptions. Create images and videos to streamline your marketing efforts.",
            },
            operations: {
              title: "Operations Automation",
              description: "Automate data entry, manage inventory, forecast demand, schedule appointments, and record meeting minutes. Save time and reduce human errors.",
            },
            hr: {
              title: "HR & Recruitment",
              description: "Draft job descriptions, analyze resumes, automate onboarding workflows, and create training materials. Streamline your hiring process.",
            },
            security: {
              title: "Cybersecurity & Monitoring",
              description: "Monitor for unusual activity, detect potential threats, and protect your business against data breaches with AI-powered security monitoring.",
            },
          },
          realExamples: {
            title: "Real AI Solutions for Small Businesses",
            restaurant: {
              title: "Restaurant: Smart Ordering Assistant",
              description: "AI chatbot on your website that takes orders, answers menu questions, and handles special requests 24/7.",
              benefits: {
                workload: "Reduces phone staff workload",
                afterHours: "Captures after-hours orders",
              },
            },
            retail: {
              title: "Retail: Inventory Forecasting",
              description: "AI analyzes sales patterns to predict what products you'll need and when, reducing overstock and stockouts.",
              benefits: {
                optimize: "Optimize inventory levels",
                reduce: "Reduce waste and costs",
              },
            },
            service: {
              title: "Service Business: Appointment Scheduler",
              description: "AI assistant that handles booking, rescheduling, and sends reminders via text or email automatically.",
              benefits: {
                phoneTag: "Eliminates phone tag",
                noShows: "Reduces no-shows",
              },
            },
            ecommerce: {
              title: "E-Commerce: Product Recommendations",
              description: "AI suggests products based on browsing history and purchase patterns, increasing average order value.",
              benefits: {
                personalized: "Personalized shopping experience",
                boost: "Boost sales automatically",
              },
            },
            professional: {
              title: "Professional Services: Document Processing",
              description: "AI extracts data from forms, contracts, and invoices - no more manual data entry.",
              benefits: {
                saveTime: "Save hours per week",
                eliminate: "Eliminate data entry errors",
              },
            },
            agency: {
              title: "Marketing Agency: Content Creation",
              description: "AI generates first drafts of blog posts, social posts, and email campaigns based on your brand voice.",
              benefits: {
                faster: "Faster content production",
                consistent: "Maintain consistent voice",
              },
            },
          },
          howItWorks: {
            title: "How I Integrate AI Into Your Business",
            identify: {
              title: "Identify Opportunities",
              description: "We discuss your workflows and find tasks that AI can automate or improve.",
            },
            choose: {
              title: "Choose the Right AI",
              description: "Select AI tools and models that fit your specific use case and budget.",
            },
            integrate: {
              title: "Integrate & Test",
              description: "Build the AI features into your existing systems and test with real data.",
            },
            optimize: {
              title: "Train & Optimize",
              description: "Fine-tune the AI based on your feedback and monitor performance over time.",
            },
          },
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
          portfolio_lohbrows_header: "LOH Brows",
          portfolio_lohbrows_text:
            "Website for LOH Brows, a beauty salon in Tobyhana, PA specializing in micropigmentation services.",
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
        blog: {
          title: "Latest Insights & Tips",
          subtitle: "Stay ahead with the latest web development, SEO strategies, and digital marketing insights.",
          readMore: "Read More",
          viewAll: "View All Articles",
        },
        footer: {
          resources: "Resources",
          follow: "Follow Me",
          legal: "Legal",
          textarea:
            "2025, Christopher Bermudez™ Made with ❤️ in Clermont, Florida",
          proudlyServing: "Proudly serving Clermont, Orlando & Central Florida since 2016",
        },
        metadata: {
          title: "Web Design, SEO & Digital Marketing",
          description:
            "Discover expert web design, SEO, and digital marketing services with Christopher Bermudez. Helping businesses in Central Florida grow their online presence and achieve measurable results.",
          og_title: "Web Design, SEO & Digital Marketing",
          og_description:
            "Expert web design and SEO services for Florida businesses. Let Christopher Bermudez elevate your online presence.",
        },
      },
      blog: {
        title: "Our Latest",
        titleColored: "Blog Posts",
        description:
          'SEO isn’t just about keywords – it’s about using the right strategies to get your site noticed by Google and your audience. In this blog, I break down real tactics that help businesses show up where customers are searching. Whether you want to rank for searches like "plumber near me" or "best bakery in Orlando," you’ll find practical SEO strategies here that drive real results',
        metadata: {
          title: "Latest Articles | Web Design & SEO Blog",
          description:
            "Explore actionable SEO strategies, web design tips, and e-commerce insights in our latest blog posts. Learn how to improve your website's performance and rank higher on search engines.",
          og_title: "Web Design & SEO Blog | Latest Articles",
          og_description:
            "Discover the latest articles on SEO, web development, and more. Learn practical strategies to boost your online visibility and drive more traffic.",
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
        metadata: {
          title: "Schedule a Consultation | Web Design & SEO",
          description:
            "Book an appointment with Christopher Bermudez to discuss your web design and SEO needs. Let’s create a strategy tailored to your business goals.",
          og_title: "Book a Web Design & SEO Appointment",
          og_description:
            "Schedule a consultation to explore how Christopher Bermudez can help your business thrive online.",
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
          description:
            "With years of experience in web development and SEO, I'm passionate about helping small businesses thrive.",
          languages: "Languages Spoken: English, Español, Português",
        },
        testimonials: {
          title: "Partners Who Shared Their Feedback",
          eliteEuro: {
            quote:
              "We started getting so many online bookings and calls that we had to hire more staff after Christopher updated our site and implemented marketing techniques.",
          },
          beUpTwo: {
            quote:
              "Working with Christopher has been a game-changer for my brand. From the start, he had an immediate impact on my website traffic and got me visible on Google - I'm already ranking on the top pages!",
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
        metadata: {
          title: "About Web & SEO by Christopher Bermudez",
          description:
            "Expert Web Development & SEO in Clermont & Greater Orlando Area. Helping local businesses in Clermont, Orlando, and Central Florida grow online with custom websites and high-impact SEO strategies.",
          og_title: "Expert Web Development & SEO by Christopher Bermudez",
          og_description:
            "Discover how Christopher Bermudez helps local businesses in Clermont and Orlando thrive online with tailored web development and SEO strategies.",
        },
      },
      localSeo: {
        hero: {
          titlePart1: "Local SEO Dominance for",
          highlightedTitle: "Clermont & Orlando",
          titlePart2: "Businesses",
          subtitle:
            "Own Google's First Page for 'Near Me' Searches - Get Found by Ready-to-Buy Local Customers",
          description:
            "As Central Florida's leading local SEO agency, we specialize in helping Clermont and Orlando businesses dominate maps and 'near me' searches. Our hyper-local strategies are tailored to Florida's unique tourism market and hyper-competitive landscape.",
          button: "Free Consultation",
          trustSignals: {
            years: {
              value: "10+",
              label: "Years Local SEO Experience",
            },
            clients: {
              value: "15+",
              label: "Central Florida Clients",
            },
            successRate: {
              value: "90%",
              label: "First Page Success Rate on retainer plans",
            },
          },
        },
        services: {
          googleMaps: {
            title: "Google Maps Domination",
            description:
              "Secure Top 3 positions for 'HVAC Clermont' and 'Orlando restaurant' searches with our proven local pack strategy.",
          },
          hyperlocalContent: {
            title: "Hyperlocal Content Strategy",
            description:
              "Content that answers 'best Orlando...' and 'near Disney...' queries - optimized for Central Florida voice search.",
          },
          reviewManagement: {
            title: "Review Management System",
            description:
              "Automate review generation and respond professionally - crucial for 'plumber Clermont' search rankings.",
          },
        },
        challenges: {
          title: "Solving Central Florida's Local Search Challenges",
          paragraph1:
            "If your business isn’t showing up when people search <span class='italic'>“near me”</span>, you’re missing out on daily customers. We help local businesses across <strong>Clermont, Minneola, Four Corners, Davenport, Groveland, Mascotte, Winter Garden, Ocoee, Horizon West, Kissimmee</strong>, and <strong>Poinciana</strong> dominate Google’s local pack — including West and South Orlando suburbs and rural areas.",
          paragraph2:
            "From <span class='font-medium'>“HVAC Clermont”</span> to <span class='font-medium'>“breakfast near Cagan Crossings”</span>, we optimize your presence based on how locals and tourists actually search.",

          disney: {
            title: "Not Showing Up for 'Near Disney' Searches",
            description:
              "Tourists search differently — we optimize for vacationer keywords and seasonal trends.",
            details: [
              "Event-based schema markup",
              "Hotel/attraction partnerships",
              "Tourist-focused content clusters",
            ],
          },

          bigBox: {
            title: "Losing to Big Box Stores in Orlando",
            description:
              "Our hyperlocal strategy targets neighborhood-specific and intent-based searches:",
            details: [
              "Lake Nona medical practices",
              "Dr. Phillips restaurants",
              "Winter Garden contractors",
            ],
          },
        },
        landmarks: {
          lakes: {
            title: "Clermont Chain of Lakes",
            description:
              "Capture traffic for outdoor tours, rentals, and events on Google Maps.",
          },
          corridor: {
            title: "192 Tourism Corridor",
            description:
              "Rank for high-volume vacationer keywords near Disney and resorts.",
          },
          hwy27: {
            title: "Hwy 27 Wellness & Services",
            description:
              "Outrank national chains by showing up for local patient and client searches.",
          },
          downtown: {
            title: "Downtown Clermont & Citrus Tower",
            description:
              "Drive traffic to local events, shops, and entertainment experiences.",
          },
        },
        testimonials: {
          eliteEuro: {
            quote:
              "Our 'european auto repair' search visibility tripled in 60 days. Now more than half of our bookings come through Google!",
            author: "Elite Euro Motors",
            location: "Ocoee, FL",
          },
          irisHair: {
            quote:
              "Foot traffic is through the roof, I have had to hire more staff to keep up with demand!",
            author: "Iris Hair & Nail Studio",
            location: "Clermont, FL",
          },
          elCerro: {
            quote:
              "First page rankings 'latin food restaurant' and keywords optimized to find specific plates near-by. They are now the go-to place for latin food in Clermont.",
            author: "El Cerro Restaurant",
            location: "Clermont, FL",
          },
        },
        faqs: {
          1: {
            question:
              "How long does local SEO take to work for Clermont businesses?",
            answer:
              "Most Clermont businesses see initial Google Map Pack visibility within 4–8 weeks, with full local ranking improvements in 3–6 months. Key factors impacting timeline:",
            details: [
              "Current Google Business Profile optimization status",
              "Local citation consistency across Orlando-area directories",
              "Velocity of quality reviews mentioning 'Clermont' locations",
              "Competition for terms like 'HVAC Clermont FL'",
            ],
          },
          2: {
            question:
              "Why isn't my Orlando business showing up for 'near me' searches?",
            answer:
              "Common issues preventing 'near me' visibility in Central Florida:",
            details: [
              "Incomplete Google Business Profile service areas",
              "Missing schema markup for local service areas",
              "Inconsistent NAP (Name, Address, Phone) across web",
              "Low review density for hyperlocal keywords",
            ],
          },
          3: {
            question:
              "How do I rank higher than big Orlando competitors in local search?",
            answer:
              "Our Clermont-focused strategies help outrank Orlando chains:",
            details: [
              "Neighborhood-specific content (e.g. 'Waterfront District restaurants')",
              "Local backlinks from Orlando Sentinel, Clermont Beacon",
              "Geo-modified keywords: 'plumber near Minneola FL'",
              "Optimizing for 'Clermont' + service + 'open now' searches",
            ],
          },
          4: {
            question: "What's the most important factor for Orlando local SEO?",
            answer:
              "Based on 2024 Google algorithm updates, the top 3 factors are:",
            details: [
              "1. Google Business Profile optimization (especially posts/Q&A)",
              "2. Review velocity with location-specific keywords",
              "3. Localized content clusters (service pages + neighborhood guides)",
            ],
          },
          5: {
            question:
              "Should my Clermont business use separate pages for each service area?",
            answer: "Yes - we create location-specific pages targeting:",
            details: [
              "Cities: 'Windermere roof repair' | 'Winter Garden HVAC'",
              "Landmarks: 'Auto shop near Lakeridge Winery'",
              "Neighborhoods: 'Four Corners appliance repair'",
              "Tourist zones: 'AC repair near Disney World'",
            ],
          },
          6: {
            question:
              "How do negative reviews impact Orlando local SEO rankings?",
            answer:
              "Negative reviews (especially unanswered ones) hurt rankings for:",
            details: [
              "Local service queries: 'emergency plumber Clermont'",
              "Map Pack visibility in 10-mile radius",
              "Click-through rates from search results",
              "Recovery typically takes 45–60 days with our ORM system",
            ],
          },
          7: {
            question:
              "What local citations matter most for Central Florida businesses?",
            answer:
              "Priority directories for Clermont/Orlando NAP consistency:",
            details: [
              "Orlando Chamber of Commerce",
              "Clermont Local Connect",
              "Visit Orlando partner listings",
              "Florida Home Service Pro (for contractors)",
              "Disney Area Business Network",
            ],
          },
          8: {
            question:
              "How to optimize for voice search like 'best HVAC near Disney World'?",
            answer: "Voice search optimization tactics we implement:",
            details: [
              "Natural language FAQ schema markup",
              "Content targeting 'who/what/where' questions",
              "Optimizing for 'near [landmark]' phrases",
              "Claiming 'Open 24/7' attributes in GBP",
            ],
          },
          9: {
            question: "Why do my Orlando rankings drop during tourist season?",
            answer: "Seasonal flux is common - we combat it with:",
            details: [
              "Pre-season content updates (Spring Break, holidays)",
              "Dynamic service pages: 'Orlando vacation rental cleaning'",
              "Hotel/concierge partnership content",
              "Event-specific schema markup (Epcot festivals, runDisney)",
            ],
          },
          10: {
            question: "How important are Google Posts for Clermont local SEO?",
            answer: "Posts impact 3 key areas for Central Florida businesses:",
            details: [
              "1. Map Pack visibility rotations",
              "2. 'Open Now' trigger appearances",
              "3. Localized call tracking (Posts get 28% more clicks)",
            ],
          },
        },
        metadata: {
          title:
            "Local SEO for Clermont & Orlando – Dominate Google 'Near Me' Searches",
          description:
            "Get found by high-intent local customers in Clermont and Orlando. We help Florida businesses rank on the first page of Google Maps and local search results.",
          og_title:
            "Clermont & Orlando Local SEO Experts – Top Rankings for 'Near Me' Searches",
          og_description:
            "With over 10 years of local SEO experience, we help Central Florida businesses secure top rankings for competitive local searches like 'HVAC Clermont' and 'restaurants near Disney'.",
        },
      },
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
            "Explore our flexible pricing options designed for long-term success. Choose a plan that fits your needs and lets your business thrive with expert SEO and web development support. Month-to-month. No long-term contracts. No cancellation fees.",
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
        metadata: {
          title: "Strategic Growth Solutions | Web & SEO Plans",
          description:
            "Choose a web development and SEO plan that aligns with your business goals. Explore our tiered pricing and long-term retainer options for maximum growth.",
          og_title: "Strategic Growth Solutions for Your Business",
          og_description:
            "Discover tailored web development and SEO packages designed to help your business grow — no contracts, just results.",
        },
      },
      webDev: {
        hero: {
          titlePart1: "Enterprise-Grade Web Development for",
          highlightedTitle: "Lightning-Fast Performance",
          titlePart2: "",
          subtitle:
            "Zero-Compromise Solutions Delivering 95%+ Lighthouse Scores and Sub-Second Load Times",
          button: "Start Development Now →",
          trustMetrics: {
            performance: {
              value: "98%",
              label: "Performance Score",
            },
            deployment: {
              value: "72h",
              label: "Rapid Deployment",
            },
            rating: {
              value: "4.9/5",
              label: "Client Rating",
            },
          },
        },
        performanceSection: {
          title: "Full-Cycle Performance Optimization",
          description:
            "In today’s competitive digital landscape, performance is everything. From loading speeds to search engine rankings, every element of your website needs to be optimized for success. Our full-cycle performance strategies ensure that your website is not only fast but also search engine-friendly and user-centered. Whether it’s leveraging cutting-edge caching, implementing structured data, or optimizing mobile experiences, we help you deliver an exceptional online presence that resonates with both search engines and customers.",

          services: {
            rendering: {
              title: "Performance-Centric Rendering",
              description:
                "Rendering strategies that prioritize speed and user flow",
              features: [
                "Optimized component hydration",
                "Efficient route caching",
                "Edge-ready delivery setup",
              ],
            },
            analytics: {
              title: "Insight-Driven Analytics",
              description:
                "Built-in analytics for clear visibility and smart decisions",
              features: [
                "User behavior tracking",
                "Core performance metric logging",
                "Custom engagement dashboards",
              ],
            },
            media: {
              title: "Media & Asset Efficiency",
              description: "Every image, font, and asset served clean and fast",
              features: [
                "Modern image formats with adaptive delivery",
                "Automatic compression pipelines",
                "Inline critical resources",
              ],
            },
            scaling: {
              title: "Global Speed Scaling",
              description: "Geographic-aware setup to serve fast from anywhere",
              features: [
                "Edge caching logic",
                "Traffic surge protection",
                "Localized delivery optimization",
              ],
            },
            lazyLoading: {
              title: "Lazy Loading for Speed",
              description:
                "Efficient resource loading to boost page speed without sacrificing UX",
              features: [
                "Asynchronous image and script loading",
                "Deferred non-essential content",
                "Minimized render-blocking resources",
              ],
            },
            caching: {
              title: "SEO-Optimized Caching",
              description:
                "Smarter caching strategies for better SEO ranking and faster access",
              features: [
                "Persistent browser caching",
                "Stale-while-revalidate strategies",
                "SEO-boosting cache-control headers",
              ],
            },
            structuredData: {
              title: "Structured Data Implementation",
              description:
                "Enhanced visibility with schema markup and rich snippets",
              features: [
                "Event schema for tourism content",
                "Business local markup for Google Maps",
                "FAQ and review markup for higher engagement",
              ],
            },
            mobileDesign: {
              title: "Mobile-First Design",
              description:
                "Tailored for mobile traffic with speed and usability in mind",
              features: [
                "Responsive design for any screen size",
                "Touch-optimized interactions",
                "AMP-ready for ultra-fast mobile loads",
              ],
            },
          },
        },
        practicesSection: {
          title: "Cutting-Edge Development Practices",
          description:
            "We build with precision — clean code, lightning speed, and powerful integrations. Whether you're a storefront in Four Corners or a growing service in Winter Garden, our websites aren't just fast — they're built to last, scale, and rank. Every feature is intentional, every decision data-backed.",

          practices: {
            security: {
              title: "Security & Protection",
              features: [
                "Modern web security best practices",
                "Auto-patching and security updates",
                "Built-in form & data protection",
              ],
            },
            performance: {
              title: "Performance-First Builds",
              features: [
                "Lightning-fast page load speeds",
                "Compressed assets and responsive images",
                "Zero code repetition for clean structure",
              ],
            },
            launch: {
              title: "Streamlined Launch Process",
              features: [
                "Instant global deployment",
                "Automatic rollbacks for stability",
                "Continuous updates without downtime",
              ],
            },
            seo: {
              title: "Local SEO Schema",
              features: [
                "Structured data for local visibility",
                "Review and service area markup",
                "Search-friendly metadata across pages",
              ],
            },
            analytics: {
              title: "Data-Backed Decisions",
              features: [
                "Live traffic and engagement tracking",
                "Conversion analytics and goal-setting",
                "Event-based visitor behavior monitoring",
              ],
            },
            database: {
              title: "Scalable Data Solutions",
              features: [
                "Cloud-based, low-latency databases",
                "Real-time updates and syncing",
                "Flexible data storage and backups",
              ],
            },
          },
        },
        faqs: {
          heading: "Web Development FAQs",
          1: {
            question: "How do you achieve sub-second load times?",
            answer: "Our performance stack combines:",
            details: [
              "Edge network caching (Cloudflare/Netlify)",
              "Brotli compression for assets",
              "Critical CSS inlining",
              "DNS prefetch optimization",
            ],
          },
          2: {
            question: "What about ongoing maintenance?",
            answer: "Included in all enterprise plans:",
            details: [
              "Weekly dependency updates",
              "24/7 security monitoring",
              "Monthly performance audits",
              "Emergency patch response <4h",
            ],
          },
          3: {
            question: "Do you handle GDPR compliance?",
            answer: "Full compliance built-in:",
            details: [
              "Auto cookie consent management",
              "Data encryption at rest/transit",
              "Right-to-be-forgotten workflows",
              "EU data residency options",
            ],
          },
          4: {
            question: "Can you migrate existing sites?",
            answer: "Zero-downtime migrations include:",
            details: [
              "Database transformation",
              "URL structure preservation",
              "301 redirect mapping",
              "DNS configuration auditing",
            ],
          },
          5: {
            question: "How scalable are your solutions?",
            answer: "Architected for enterprise growth:",
            details: [
              "Auto-scaling cloud infrastructure",
              "Database sharding support",
              "Global CDN configuration",
              "Load-tested to 50k RPM",
            ],
          },
          6: {
            question: "What security measures are included?",
            answer: "Enterprise-grade protection:",
            details: [
              "OWASP Top 10 mitigation",
              "Daily vulnerability scanning",
              "Web application firewall",
              "DDoS protection <5Tbps",
            ],
          },
        },
        metadata: {
          title:
            "Enterprise Web Development – Blazing Fast, SEO-Optimized Websites",
          description:
            "We build high-performance websites that score 95%+ on Lighthouse and load in under a second. From caching to schema markup, every line of code is optimized for speed and SEO.",
          og_title:
            "Web Development That Scales – Lightning Fast, SEO-Driven, Built for Central Florida",
          og_description:
            "Accelerate your growth with web development focused on performance, SEO, and scalability. We create enterprise-level sites that look great, load fast, and drive real results.",
        },
      },
      cro: {
        hero: {
          titlePart1: "Conversion Rate Optimization for",
          highlightedTitle: "Sustainable Revenue Growth",
          titlePart2: "",
          subtitle:
            "Data-Driven Strategies That Increase Conversions 200-400% While Improving User Experience",
          button: "Get Free CRO Audit →",
          imageAlt: "Conversion rate optimization process visualization",
          trustMetrics: {
            conversion: {
              value: "42%",
              label: "Avg. Conversion Lift",
            },
            users: {
              value: "1.2M+",
              label: "Users Analyzed",
            },
            roi: {
              value: "93%",
              label: "ROI Positive",
            },
          },
        },

        strategies: {
          title: "Proven Conversion Optimization Framework",
          description:
            "Great websites don't just attract visitors—they turn them into loyal customers. Our framework combines behavioral science with Central Florida's unique market trends to systematically eliminate conversion roadblocks. By studying how real users interact with your site (where they click, where they hesitate, where they abandon), we rebuild your digital experience to guide visitors seamlessly from 'browse' to 'buy.'",

          behavioral: {
            title: "Behavioral Analytics",
            description:
              "Analyze user interactions to uncover conversion opportunities",
            tactics: [
              "Heatmaps to track user engagement",
              "Click tracking for high-interest areas",
              "Scroll-depth analysis to optimize page layouts",
              "Behavioral segmentation to target different customer groups",
            ],
          },
          testing: {
            title: "A/B Testing",
            description: "Data-driven decision-making through live testing",
            tactics: [
              "Test headlines, CTAs, and images",
              "Monitor changes in real-time for impact",
              "Optimize based on statistical significance",
              "Quick implementation of winning variants",
            ],
          },
          audits: {
            title: "Website Audits & Analysis",
            description:
              "Comprehensive site reviews to identify improvement areas",
            tactics: [
              "Extensive performance audits after every update",
              "SEO analysis for technical and on-page issues",
              "UX/UI reviews for better user engagement",
              "Conversion funnel diagnostics",
            ],
          },
          funnel: {
            title: "Conversion Funnel Optimization",
            description:
              "Refine user flows to maximize conversions at each stage",
            tactics: [
              "Map out and optimize conversion paths",
              "Reduce friction at critical touchpoints",
              "Identify and fix drop-off points",
              "A/B test various funnel variations",
            ],
          },
          personalization: {
            title: "Personalized Content Strategies",
            description: "Deliver targeted experiences for each customer",
            tactics: [
              "Segment visitors based on behavior and demographics",
              "Personalize calls to action based on user profile",
              "Create dynamic content that adapts to users' preferences",
              "Automate content changes based on user interaction history",
            ],
          },
          speed: {
            title: "Speed Optimization",
            description:
              "Ensure ultra-fast load times for a seamless user experience",
            tactics: [
              "Image optimization for faster rendering",
              "Lazy loading techniques for non-essential content",
              "Efficient caching strategies to reduce load times",
              "Minify and compress JavaScript and CSS for faster page loads",
            ],
          },
          seo: {
            title: "SEO Performance Enhancements",
            description:
              "Maximize organic traffic and on-page SEO for conversions",
            tactics: [
              "Keyword research and optimization for high-converting terms",
              "On-page SEO improvements for better ranking",
              "Content optimization for higher engagement",
              "Structured data and schema for rich search results",
            ],
          },
          mobile: {
            title: "Mobile Optimization",
            description:
              "Ensure your website is fully optimized for mobile users",
            tactics: [
              "Responsive design for seamless mobile experiences",
              "Mobile-first testing for performance benchmarks",
              "Touch-friendly navigation for easier browsing",
              "Optimized mobile page loading speeds",
            ],
          },
        },

        caseStudies: {
          title: "Real-World CRO Results",
          description:
            "I helped a local fashion retailer boost revenue by 120% in 6 months by focusing on key CRO strategies. I improved their product pages and checkout process to make the shopping experience smoother. We also ran targeted social media campaigns to engage customers and used urgency tactics like countdown timers to push sales. Plus, I set up upselling at checkout, which increased the average order value. These changes, combined with data-driven adjustments, led to a huge increase in online sales.",

          studies: [
            {
              client: "Ecommerce Retailer",
              industry:
                "Fashion & Apparel in Orlando, Focusing on Online Sales with one brick and mortar store",
              result: "120% Revenue Increase",
              metric: "in 6 months",
              quote:
                "Their CRO strategy tripled our average order value while reducing acquisition costs",
            },
          ],
        },

        faqs: {
          heading: "CRO FAQs",
          1: {
            question: "How long until we see results?",
            answer: "Typical timeline for measurable improvements:",
            details: [
              "4-8 weeks for initial lift",
              "12-16 weeks for full optimization",
              "Continuous incremental gains",
            ],
          },
          2: {
            question: "What kind of businesses can benefit from CRO?",
            answer: "CRO is beneficial for any online business, including:",
            details: [
              "Ecommerce stores looking to boost sales",
              "Service-based businesses wanting more leads",
              "Businesses with high traffic but low conversions",
              "Companies aiming to optimize marketing budgets",
            ],
          },
          3: {
            question: "Do I need to redesign my website for CRO?",
            answer:
              "Not necessarily. CRO is about optimizing what you already have, but sometimes minor design tweaks are part of the strategy.",
            details: [
              "Small adjustments to layout, CTAs, and copy can have a huge impact",
              "Focus on improving user experience, not a complete overhaul",
            ],
          },
          4: {
            question: "How do you measure CRO success?",
            answer: "We measure success based on your specific goals, such as:",
            details: [
              "Conversion rate increases",
              "Improved average order value",
              "Higher customer retention",
              "Reduced cart abandonment rates",
            ],
          },
          5: {
            question: "Is CRO a one-time service or ongoing?",
            answer:
              "CRO is an ongoing process. Once we optimize your site, we'll keep refining it based on data and market shifts.",
            details: [
              "Continuous A/B testing and analysis",
              "Adjustments based on seasonality, trends, and traffic changes",
            ],
          },
          6: {
            question: "What types of CRO tactics do you use?",
            answer: "We use a mix of proven and creative tactics, such as:",
            details: [
              "A/B testing for layout and copy",
              "Optimizing the checkout flow to reduce friction",
              "Personalized product recommendations",
              "Urgency-driven tactics (e.g., countdown timers)",
              "Exit-intent pop-ups to reduce cart abandonment",
              "Email marketing campaigns targeting abandoned carts or promotions",
            ],
          },
          7: {
            question: "How does email factor into CRO?",
            answer:
              "Email is an essential tool for increasing conversions, particularly in re-engaging visitors who haven't completed their purchase.",
            details: [
              "Automated email sequences for abandoned carts",
              "Email retargeting for users who visited specific products",
              "Post-purchase follow-up emails to encourage repeat customers",
              "Personalized product recommendations based on browsing behavior",
            ],
          },
          8: {
            question: "How much does CRO cost?",
            answer:
              "CRO pricing varies based on your website's needs, goals, and current performance.",
            details: [
              "We tailor strategies to fit your budget and timeline",
              "Expect an initial audit fee, followed by performance-based pricing options",
            ],
          },
          9: {
            question: "How do you get started with CRO?",
            answer:
              "We start by auditing your website to identify problem areas, then create a customized strategy with measurable goals.",
            details: [
              "We'll review your analytics, user behavior, and current conversion paths",
              "After identifying key pain points, we'll implement a plan of action",
              "Email strategy is integrated as part of the overall optimization plan",
            ],
          },
          10: {
            question:
              "What type of social media optimizations can be done to increase conversions?",
            answer:
              "Optimizing your social media for conversions involves several strategies:",
            details: [
              "Targeted Ads: Use advanced targeting options on platforms like Facebook, Instagram, and LinkedIn to drive more qualified traffic",
              "Retargeting: Bring back visitors who didn't convert the first time with retargeting ads",
              "Social Proof: Showcase user-generated content, testimonials, and positive reviews to build trust",
              "Shoppable Posts: Make it easy for customers to purchase directly from social media",
              "Engagement & CTAs: Boost interactions with clear calls-to-action",
              "Influencer Marketing: Tap into new audiences by partnering with influencers",
              "A/B Testing: Test different content to see what resonates most",
              "Live Selling: Use live-streaming features to engage with customers in real-time",
              "Incentivize Sharing: Offer discounts for users who share your content",
              "Analytics: Track metrics like CTR and conversion rate to refine strategy",
            ],
          },
        },

        meta: {
          title:
            "Conversion Rate Optimization Services | Data-Driven Growth Strategies",
          description:
            "Increase conversions 200-400% with our scientific CRO framework. Full-spectrum optimization from analytics audits to multivariate testing.",
          keywords:
            "conversion rate optimization, CRO services, website conversion optimization, increase online sales, A/B testing services",
        },
      },
      technicalSeo: {
        hero: {
          titlePart1: "Technical SEO Audits That",
          highlightedTitle: "Fix Core Web Vital Issues",
          titlePart2: "",
          subtitle:
            "Comprehensive Crawl Health Analysis + Priority Fixes to Eliminate Google Penalties and Boost Rankings",
          button: "Request Free Site Audit →",
          imageAlt: "Website crawl health analysis dashboard",
          trustMetrics: {
            pages: {
              value: "2.1M+",
              label: "Pages Analyzed",
            },
            fixes: {
              value: "94%",
              label: "Crawl Issues Fixed",
            },
            time: {
              value: "48h",
              label: "Avg. Fix Time",
            },
          },
        },
        services: {
          title: "Enterprise-Grade Technical SEO Solutions",
          description:
            "Behind every high-performing website is technical SEO that works like invisible wiring - flawless and essential. Our enterprise solutions tackle the hidden infrastructure powering your online success. We optimize the 32 technical elements Google prioritizes, ensuring your site loads faster than competitors, appears for critical local searches, and converts visitors like clockwork. From bulletproof security to app-like mobile experiences, we build websites that search engines reward and customers remember.",
          speedBoost: {
            title: "Speed Boost Package",
            description: "Make your website load faster than competitors",
            features: [
              "Optimize images for quick loading",
              "Fix layout shifts during page load",
              "Mobile-friendly speed tweaks",
              "Smart caching for return visitors",
            ],
          },
          searchVisibility: {
            title: "Search Visibility Fixes",
            description: "Get found on Google even with complex sites",
            features: [
              "Ensure search engines see all content",
              "Fix missing text/images in search",
              "Optimize dynamic content",
              "Improve mobile search presence",
            ],
          },
          richResults: {
            title: "Rich Search Results",
            description: "Make your listings stand out in Google",
            features: [
              "Add FAQ previews in search",
              "Show business info in maps",
              "Highlight events/specials",
              "Display articles prominently",
            ],
          },
          security: {
            title: "Security Protection",
            description: "Keep your site and customers safe",
            features: [
              "Automatic security updates",
              "Malware/virus protection",
              "Privacy law compliance",
              "Secure customer data",
            ],
          },
          globalReach: {
            title: "Global Reach Setup",
            description: "Attract international customers",
            features: [
              "Multi-language support",
              "Local currency display",
              "Country-specific content",
              "Global search optimization",
            ],
          },
          fastSites: {
            title: "Lightning-Fast Sites",
            description: "Instant-loading pages that keep visitors engaged",
            features: [
              "Smart content delivery",
              "Automatic performance tweaks",
              "Mobile-first optimization",
              "Reduced bounce rates",
            ],
          },
          appExperience: {
            title: "App-Like Experience",
            description: "Give customers app convenience on your website",
            features: [
              "Offline access to content",
              "Push notifications",
              "Home screen installation",
              "Smooth mobile experience",
            ],
          },
          integrations: {
            title: "Third-Party Integrations",
            description: "Connect tools without slowing your site",
            features: [
              "Fast checkout systems",
              "Quick contact forms",
              "Social media integration",
              "Inventory sync solutions",
            ],
          },
        },
        methodology: {
          title: "5-Step Technical SEO Audit Process",
          description:
            "Our proven audit system uncovers hidden technical barriers hurting your Google rankings and customer experience. By analyzing 53+ critical factors - from mobile friendliness to security loopholes - we pinpoint exactly why competitors outrank you. You'll get clear fixes for slow page speeds, confusing site navigation, and mobile display glitches that drive visitors away. Unlike generic reports, we focus on actionable solutions tailored to Central Florida's competitive market, ensuring your site meets Google's latest standards while keeping local customers engaged.",

          steps: [
            {
              title: "Full Website Health Scan",
              description:
                "We check every page like Google does - find hidden errors slowing you down",
            },
            {
              title: "Speed Boost Plan",
              description:
                "Fix slow-loading pages (especially on mobile) keeping visitors waiting",
            },
            {
              title: "Google Visibility Check",
              description:
                "Make sure Google shows your right pages for local searches",
            },
            {
              title: "Security & Mobile Check",
              description:
                "Protect customer data + fix phone/tablet display issues",
            },
            {
              title: "Ongoing Improvement Plan",
              description:
                "Monthly check-ins to keep traffic growing and technical issues away",
            },
          ],
        },
        faqs: {
          heading: "Technical SEO FAQs",
          1: {
            question:
              "How quickly will technical SEO fixes improve our rankings?",
            answer:
              "Priority fixes show impact in 48-72 hours for critical issues like:",
            details: [
              "Core Web Vitals optimizations (LCP, CLS, FID)",
              "Index bloat emergencies with 1M+ pages",
              "Critical crawl budget leaks",
              "Broken hreflang implementations",
            ],
          },
          2: {
            question: "Can your audit handle JavaScript-heavy SPAs?",
            answer: "We specialize in modern JavaScript SEO challenges:",
            details: [
              "Client-side rendering analysis",
              "Shadow DOM inspection",
              "Dynamic import optimization",
              "Crawlable hash fragment handling",
              "83% of SPAs see indexation recovery within 14 days",
            ],
          },
          3: {
            question: "What's included in enterprise crawl budget analysis?",
            answer: "For sites with 1M+ pages, we track:",
            details: [
              "Googlebot crawl frequency patterns",
              "Orphaned page identification",
              "URL parameter crawl traps",
              "Pagination sequencing issues",
              "37% avg. crawl efficiency improvement",
            ],
          },
          4: {
            question: "How do you fix indexation bloat?",
            answer: "24/7 emergency protocol for index floods:",
            details: [
              "Parameter flood blocking",
              "Canonical chain repairs",
              "Robots.txt surgical disallow",
              "Noindex cascade implementation",
              "Recent case: 1.2M → 200K valid pages in 14 days",
            ],
          },
          5: {
            question: "Do you resolve international hreflang conflicts?",
            answer: "Full hreflang validation including:",
            details: [
              "Language-region code validation",
              "X-default handling",
              "HTTP header conflicts",
              "Sitemap consistency checks",
              "212% int'l traffic boost case study",
            ],
          },
          6: {
            question: "What's your JavaScript SEO process?",
            answer: "Comprehensive JS rendering analysis:",
            details: [
              "Lazy-loaded content mapping",
              "Dynamic import optimization",
              "Crawl budget leakage points",
              "Shadow DOM inspection",
              "81% JS pages recovered in index",
            ],
          },
          7: {
            question: "How do you monitor Core Web Vitals?",
            answer: "Real-time CWV tracking with:",
            details: [
              "LCP element prioritization",
              "CLS shift root analysis",
              "FID third-party script auditing",
              "RUM data integration",
              "93% clients meet CWV targets",
            ],
          },
          8: {
            question: "Can you handle URL parameter conflicts?",
            answer: "Enterprise parameter handling solutions:",
            details: [
              "Dynamic parameter rules",
              "Session ID isolation",
              "Tracking parameter stripping",
              "Pagination sequence consolidation",
              "2.8M page audit completed in 24h",
            ],
          },
          9: {
            question: "What's included in ongoing monitoring?",
            answer: "Enterprise-grade surveillance:",
            details: [
              "Daily crawl anomaly alerts",
              "Indexation delta reports",
              "CWV trend analysis",
              "JS error tracking",
              "Slack/MS Teams integration",
            ],
          },
          10: {
            question: "How urgent are orphan page fixes?",
            answer: "Critical priority due to:",
            details: [
              "Crawl budget waste (avg. 22% savings)",
              "Indexation conflicts",
              "Internal link equity loss",
              "Conversion path breaks",
              "48h emergency response available",
            ],
          },
        },
        metadata: {
          title:
            "Technical SEO Audits & Fixes – Speed, Security, and Core Web Vitals",
          description:
            "Fix slow load times, crawl errors, and Core Web Vitals issues. Our technical SEO audits prioritize Google performance, security, and real ranking results.",
          og_title:
            "Fix Core Web Vitals & Boost Rankings – Technical SEO Audits That Deliver",
          og_description:
            "Enterprise-grade technical SEO audits that uncover hidden site issues and deliver priority fixes for better Google rankings. Fast load times, rich results, and flawless security.",
        },
      },
      finalCta: {
        heading: "Ready to dominate Clermont's search results?",
        subheading:
          "Get your custom local SEO plan – proven with over 15 Central Florida businesses",
        button: "Start My Local SEO Dominance →",
      },
      templates: {
        card: {
          viewDetails: "View Details",
        },
        index: {
          subtitle: "Our Collection",
          title: "Revolutionary Website Templates",
          description:
            "Browse our collection of high-performance, SEO-optimized, and beautifully designed Nuxt templates. Built for speed and success.",
          meta: {
            title: "Website Templates | Your Company Name",
            description:
              "Discover premium Nuxt.js templates designed for performance, SEO, and user experience. Perfect for businesses, portfolios, and SaaS.",
          },
        },
        detail: {
          oneTime: "one-time payment",
          livePreview: "Live Preview",
          purchase: "Purchase Template",
          featuresTitle: "What's Included?",
          featuresDescription:
            "Every template comes packed with essential features to get you started right away.",
          whyChooseTitle: "The Philosophy Behind It",
          techStackTitle: "Developer-First Tech Stack",
          techStackDescription:
            "Built with a modern, maintainable, and powerful set of tools that developers love.",
          notFound: "Oops! Template not found.",
          comingSoon: "Coming Soon",
          notifyMe: "Notify Me When Available",
          meta: {
            title: "{templateName} Template | Your Company Name",
            comingSoonTitle: "Coming Soon: {templateName} | Your Company Name",
          },
        },
        data: {
          // --- QuickBite Data ---
          quickbite: {
            name: "QuickBite Restaurant Template",
            description:
              "A white-label menu website for restaurants, cafés, or takeout businesses. Built for performance and scale.",
            longDescription:
              "QuickBite is a developer-first template made for freelancers and agencies. It integrates a full menu system, a pickup email form, and a blog - all set up for real-world performance, SEO, and scale.",
            whyChoose:
              "It's built the way a developer would actually build a real project, not like those over-engineered template libraries. The goal is to cut production time in half. It's DRY, readable, and made for real-world customization.",
            features: {
              menu: {
                title: "Full Menu System",
                description:
                  "Easily manage categories and items for a dynamic and engaging restaurant menu.",
              },
              pickup: {
                title: "Pickup/Cart Logic",
                description:
                  "Integrated cart state management with Pinia for a seamless pickup order process.",
              },
              blog: {
                title: "Integrated Blog",
                description:
                  "Powered by Nuxt/Content for easy, CMS-style blog and article management.",
              },
              performance: {
                title: "Performance Optimized",
                description:
                  "Built for top-tier Core Web Vitals, image optimization, and fast loading.",
              },
            },
          },
          // --- Realtor Data ---
          realtor: {
            name: "Realtor-Edge Template",
            description:
              "The ultimate template for realtors, agencies, and property sellers. Coming soon.",
            longDescription:
              "Showcase properties like never before. Realtor-Edge will provide a complete solution for real estate professionals, including agent profiles, beautiful property listings with detailed info pages, and advanced search functionality.",
            whyChoose:
              "Designed to convert visitors into leads, this template will focus on high-quality imagery, intuitive navigation, and providing all the critical information buyers need at their fingertips.",
            features: {
              profiles: {
                title: "Agent Profiles",
                description:
                  "Dedicated pages for realtors to build trust and showcase their expertise.",
              },
              listings: {
                title: "Dynamic Listings",
                description:
                  "A powerful and filterable system to display all available properties beautifully.",
              },
              search: {
                title: "Advanced Search",
                description:
                  "Allow users to find the perfect home by filtering by price, size, location, and more.",
              },
              maps: {
                title: "Map Integration",
                description:
                  "Visualize property locations and nearby amenities with integrated maps.",
              },
            },
          },
          // --- Existing Data ---
          nexus: {
            name: "Nexus Corporate",
            description:
              "A sleek and modern template for SaaS companies, startups, and corporate businesses.",
            longDescription:
              "Nexus Corporate is the ultimate solution for businesses looking to establish a strong online presence. It features a clean design, fast loading times, and all the sections a modern company needs.",
            whyChoose:
              "This template prioritizes clarity and professionalism, allowing your business's value proposition to shine through without unnecessary clutter. It's a rock-solid foundation for any corporate site.",
            features: {
              /* ... as before ... */
            },
          },
          portfolio: {
            name: "Creative Portfolio",
            description:
              "A minimalist and elegant template to showcase your creative work and projects.",
            longDescription:
              "Designed for artists, designers, and developers, this portfolio template focuses on your work. It includes beautiful galleries, smooth animations, and a contact form.",
            whyChoose:
              "In a creative field, your work should do the talking. This template gets out of the way, providing a clean, elegant canvas to make your projects the hero.",
            features: {
              /* ... as before ... */
            },
          },
        },
      },
    },
    es: {
      home: {
        hero: {
          title: "Desarrollador Frontend y Soluciones Empresariales Personalizadas",
          subtitle1: "Desarrollo Web",
          subtitle2: "Soluciones Empresariales Personalizadas",
          subtitle3: "Desarrollo de SaaS",
          subtitle4: "Integración de IA",
          description:
            "Construyendo soluciones web personalizadas que reemplazan herramientas costosas de terceros y optimizan las operaciones comerciales desde 2016.",
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
          templates: "Plantillas",
          web: "Desarrollo de Web",
          marketing: "Publicidad y Mercadeo",
          journal: "Diario",
          about: "Sobre Mi",
          pricing: "Precios",
          blogs: "Articulos",
          downloadresume: "Descargar Currículum",
          services: "Servicios",
          coreService: "Servicios Centrales",
          frontendDev: {
            title: "Desarrollo Web Frontend",
            description: "Soluciones Vue 3, Nuxt, TypeScript",
          },
          customSolutions: {
            title: "Soluciones Empresariales Personalizadas",
            description: "CRMs, Formularios, Paneles",
          },
          saasDev: {
            title: "Desarrollo de SaaS",
            description: "Aplicaciones Web Escalables",
          },
          aiIntegration: {
            title: "Integración de IA",
            description: "Chatbots, Automatización, Análisis",
          },
          mobileServices: {
            frontend_dev: {
              title: "Desarrollo Frontend",
              path: "/servicios/desarrollo-web-frontend",
            },
            custom_solutions: {
              title: "Soluciones Personalizadas",
              path: "/servicios/soluciones-empresariales-personalizadas",
            },
            saas_dev: {
              title: "Desarrollo de SaaS",
              path: "/servicios/desarrollo-saas",
            },
            ai_integration: {
              title: "Integración de IA",
              path: "/servicios/integracion-ia-empresas",
            },
          },
        },
        whyUs: {
          creativeSolutions: "Soluciones Personalizadas",
          resultsTitle: "Construyendo Herramientas que Optimizan Tu Negocio 🚀",
          whyUsDescription: "Transforma tus operaciones con",
          customWebDevBold: "aplicaciones web personalizadas",
          advancedSeoBold: "soluciones de automatización empresarial",
          creativeSolutionsSummary:
            "Reemplaza herramientas costosas de terceros, automatiza flujos de trabajo y ahorra miles en suscripciones.",
          optimizedDesignsBold: "Ahorra $500+/mes",
          optimizedDesigns: "reemplazando múltiples herramientas SaaS",
          leadsBold: "CRMs y paneles personalizados",
          leads: "construidos específicamente para tu flujo de trabajo",
          conversionsBold: "Firmas digitales y PDFs",
          conversions: "formularios de admisión integrados",
          mobileBold: "Integración de pagos Stripe",
          mobile: "y gestión de clientes",
          uptimeBold: "Stack tecnológico moderno",
          uptime: "Vue 3, Nuxt, TypeScript, Supabase",
          learnMoreButton: "Ver Mi Trabajo",
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
          header: "LO QUE HAGO MEJOR",
          consultation: "Desarrollo Web Frontend",
          consultation_text:
            "Construyendo sitios web y aplicaciones modernas y rápidas usando Vue 3, Nuxt, TypeScript y las últimas tecnologías.",
          softwaredev: "Soluciones Empresariales Personalizadas",
          softwaredev_text:
            "CRMs personalizados, formularios con firmas digitales, integraciones de pago y paneles que reemplazan herramientas costosas de terceros.",
          maintenance_and_support: "Desarrollo de SaaS",
          maintenance_and_support_text:
            "Construyendo aplicaciones de software como servicio escalables con funciones en tiempo real, gestión de usuarios e infraestructura en la nube.",
          seo_marketing_ads: "Integración de IA para Pequeñas Empresas",
          seo_marketing_ads_text:
            "Implementando chatbots de IA, automatización, análisis de datos y funciones inteligentes para optimizar sus operaciones comerciales.",
        },
        aiIntegration: {
          subheader: "INTEGRACIÓN DE IA",
          header: "Cómo la IA Puede Transformar Tu Pequeña Empresa",
          description:
            "Como desarrollador experto en tecnología, ayudo a las pequeñas empresas a aprovechar la IA para automatizar tareas, mejorar el servicio al cliente y tomar decisiones basadas en datos. Aquí hay algunas formas en que la IA puede ayudar a su negocio:",
          use_case_1_title: "Automatización del Servicio al Cliente",
          use_case_1_description:
            "Los chatbots de IA manejan preguntas frecuentes, brindan soporte fuera del horario laboral y dirigen consultas complejas a humanos, mejorando los tiempos de respuesta y la satisfacción del cliente.",
          use_case_2_title: "Datos y Análisis",
          use_case_2_description:
            "Analiza tendencias de ventas, comportamiento del cliente y datos financieros con información impulsada por IA para tomar decisiones comerciales informadas.",
          use_case_3_title: "Generación de Marketing y Contenido",
          use_case_3_description:
            "Genera publicaciones de blog, actualizaciones de redes sociales, textos publicitarios, descripciones de productos e incluso crea imágenes para optimizar tus esfuerzos de marketing.",
          use_case_4_title: "Automatización de Operaciones",
          use_case_4_description:
            "Automatiza la entrada de datos, gestiona el inventario, pronostica la demanda, programa citas y registra actas de reuniones para ahorrar tiempo y reducir errores.",
          use_case_5_title: "Recursos Humanos y Reclutamiento",
          use_case_5_description:
            "Redacta descripciones de puestos, analiza currículums, automatiza flujos de trabajo de incorporación y crea materiales de capacitación para optimizar los recursos humanos.",
          use_case_6_title: "Ciberseguridad y Monitoreo",
          use_case_6_description:
            "Monitorea actividades inusuales, detecta amenazas potenciales y protege tu negocio contra violaciones de datos con seguridad impulsada por IA.",
          cta_text:
            "¿Listo para explorar cómo la IA puede funcionar para tu negocio? Discutamos tus necesidades.",
          cta_button: "Programar una Consulta",
        },
        projects: {
          subheader: "PROYECTOS DESTACADOS",
          header: "Proyectos Personales y Experimentos",
          description:
            "Más allá del trabajo con clientes, construyo proyectos apasionantes que empujan los límites del desarrollo web y exploran nuevas tecnologías.",
          historicus_title: "Historicus - Plataforma Interactiva de Historia",
          historicus_description:
            "Una plataforma educativa de historia basada en lecciones con cronogramas interactivos, cuestionarios y seguimiento de progreso. Construida con Vue 3, Nuxt, TypeScript y Supabase para crear una experiencia de aprendizaje atractiva.",
          exoplanet_title: "Centro de Descubrimiento de Exoplanetas",
          exoplanet_description:
            "Una herramienta de exploración espacial 3D con mapas estelares interactivos, análisis de zonas habitables e integración de datos de la NASA. Cuenta con un motor de renderizado 3D personalizado que funciona a 60 FPS sin Three.js.",
          view_project: "Ver Proyecto",
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
          portfolio_lohbrows_header: "LOH Brows",
          portfolio_lohbrows_text:
            "Sitio web para LOH Brows, un salón de belleza en Tobyhana, PA especializado en servicios de micropigmentación.",
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
        blog: {
          title: "Últimas Perspectivas y Consejos",
          subtitle: "Mantente al día con las últimas estrategias de desarrollo web, SEO y marketing digital.",
          readMore: "Leer Más",
          viewAll: "Ver Todos los Artículos",
        },
        footer: {
          resources: "Recursos",
          follow: "Sígueme",
          legal: "Legal",
          textarea:
            "2025, Christopher Bermudez™. Hecho con ❤️ en Clermont, Florida",
          proudlyServing: "Orgullosamente sirviendo a Clermont, Orlando y el centro de Florida desde 2016",
        },
        metadata: {
          title: "Diseño de Web, SEO y Mercadeo Digital",
          description:
            "Descubre servicios expertos en diseño web, SEO y mercadeo digital con Christopher Bermudez. Ayudando a negocios en Florida Central a crecer su presencia online y obtener resultados medibles.",
          og_title: "Diseño Web, SEO y Mercadeo Digital",
          og_description:
            "Servicios expertos en diseño web y SEO para negocios en Central Florida. Christopher Bermudez puede elevar tu presencia en el web.",
        },
      },
      frontendDev: {
        hero: {
          title: "Construye Sitios Web Modernos y Rápidos con",
          highlight: "Vue 3 & Nuxt",
          description: "Sitios web y aplicaciones de alto rendimiento, optimizados para SEO y totalmente responsive. Experiencia de usuario perfecta con tecnologías modernas de frontend.",
          cta: "Discute Tu Proyecto",
          metrics: {
            performance: { value: "Rápido", label: "Rendimiento Superior" },
            modern: { value: "Moderno", label: "Stack Tecnológico" },
            responsive: { value: "100%", label: "Responsive" },
          },
        },
        techStack: {
          title: "Construido con Tecnología Moderna",
          frontend: {
            title: "Frontend",
            vue: { name: "Vue 3 & Nuxt", description: "UI reactiva con SSR/SSG" },
            typescript: { name: "TypeScript", description: "Desarrollo con seguridad de tipos" },
            tailwind: { name: "Tailwind CSS", description: "UI hermosa y responsive" },
          },
          backend: {
            title: "Backend e Infraestructura",
            supabase: { name: "Supabase", description: "Base de datos, autenticación, tiempo real" },
            vite: { name: "Vite", description: "Compilaciones ultrarrápidas" },
            cloudflare: { name: "Cloudflare", description: "CDN y alojamiento" },
          },
        },
        whatIBuild: {
          title: "Lo Que Construyo",
          spa: {
            title: "Aplicaciones de Página Única (SPAs)",
            description: "Interfaces rápidas e interactivas con Vue 3. Actualizaciones instantáneas de página sin recargas.",
          },
          ssr: {
            title: "Sitios Renderizados por Servidor (SSR)",
            description: "Nuxt para SSR que mejora el SEO, tiempos de carga más rápidos e indexación perfecta de motores de búsqueda.",
          },
          pwa: {
            title: "Aplicaciones Web Progresivas (PWAs)",
            description: "Instalables, funciona sin conexión y se sienten como aplicaciones nativas. El mejor de ambos mundos.",
          },
          ssg: {
            title: "Sitios Estáticos Generados (SSG)",
            description: "Sitios ultrarrápidos con contenido pregenerado. Perfecto para blogs, portafolios y páginas de marketing.",
          },
          dashboards: {
            title: "Dashboards y Paneles de Admin",
            description: "Paneles personalizados con visualización de datos en tiempo real, tablas y gráficos interactivos.",
          },
          ecommerce: {
            title: "Frontends de E-commerce",
            description: "Tiendas online rápidas con listados de productos, carritos de compra e integración de pagos.",
          },
        },
        whyChoose: {
          title: "Por Qué Elegir Vue 3 & Nuxt",
          performance: {
            title: "Rendimiento Superior",
            description: "Compilaciones optimizadas, división de código y carga diferida para tiempos de carga ultrarrápidos.",
          },
          seo: {
            title: "Amigable con SEO",
            description: "SSR y SSG aseguran que tu sitio sea totalmente indexado por motores de búsqueda.",
          },
          scalable: {
            title: "Escalable",
            description: "Arquitectura modular que crece con tu negocio. Añade características sin reescribir.",
          },
          modern: {
            title: "Stack Moderno",
            description: "Herramientas de vanguardia, desarrollo TypeScript y las mejores prácticas incluidas.",
          },
        },
        process: {
          title: "Cómo Construyo Tu Sitio",
          step1: {
            number: "1",
            title: "Descubrimiento y Planificación",
            description: "Discutir requisitos, objetivos del usuario y stack tecnológico. Crear wireframes y arquitectura.",
          },
          step2: {
            number: "2",
            title: "Diseño y Prototipo",
            description: "Diseñar componentes UI, establecer guías de estilo y crear prototipos interactivos.",
          },
          step3: {
            number: "3",
            title: "Desarrollo",
            description: "Construir componentes, integrar APIs, configurar SSR/SSG y optimizar el rendimiento.",
          },
          step4: {
            number: "4",
            title: "Pruebas y Lanzamiento",
            description: "Pruebas de navegador cruzado, optimización SEO, configurar alojamiento y hacer el despliegue.",
          },
        },
      },
      customSolutions: {
        hero: {
          title: "Soluciones Empresariales Personalizadas",
          highlight: "Que Reemplazan Herramientas SaaS Costosas",
          description: "Deja de pagar cientos al mes por herramientas genéricas. Obtén CRMs personalizados, formularios de admisión, dashboards y sistemas de pago construidos específicamente para tu negocio.",
          cta: "Obtén una Cotización Personalizada",
          metrics: {
            savings: { value: "$500+", label: "Ahorrados Por Mes" },
            custom: { value: "100%", label: "Construido a Medida" },
            fees: { value: "No", label: "Tarifas Mensuales" },
          },
        },
        realExamples: {
          title: "Lo Que He Construido para Negocios Reales",
          autoShop: {
            title: "CRM Personalizado para Taller Mecánico",
            description: "Construí un sistema completo de gestión de relaciones con clientes con:",
            features: {
              intake: "Formularios de admisión de clientes con búsqueda de VIN",
              signatures: "Firmas digitales y generación de PDF",
              history: "Seguimiento del historial de vehículos por cliente",
              records: "Registros de servicio imprimibles",
            },
          },
          salon: {
            title: "Plataforma de Cursos para Salón",
            description: "Creé un sistema completo de gestión de cursos y reservas con:",
            features: {
              stripe: "Integración de Stripe para depósitos de cursos",
              forms: "Formularios de admisión digital con firmas",
              dashboard: "Dashboard para ver y gestionar todos los formularios",
              tracking: "Historial de clientes y seguimiento de visitas de retorno",
            },
          },
        },
        solutions: {
          title: "Soluciones Personalizadas Que Construyo",
          intakeForms: {
            title: "Formularios de Admisión y Firmas",
            description: "Formularios digitales con firmas electrónicas, generación de PDF y entrega automática por correo. Perfecto para negocios basados en servicios.",
          },
          crm: {
            title: "Sistemas CRM Personalizados",
            description: "Rastrea clientes, gestiona interacciones, almacena documentos y mantiene historial - todo adaptado a tu flujo de trabajo.",
          },
          dashboards: {
            title: "Dashboards Empresariales",
            description: "Métricas en tiempo real, visualización de datos e insights - ve todo lo importante en un solo lugar.",
          },
          payments: {
            title: "Integración de Pagos",
            description: "Pagos de Stripe, recolección de depósitos, facturación y seguimiento de pagos integrados directamente en tu sistema.",
          },
          booking: {
            title: "Reservas y Programación",
            description: "Sistemas de reserva personalizados con gestión de disponibilidad, confirmaciones y recordatorios.",
          },
          documents: {
            title: "Gestión de Documentos",
            description: "Sube, organiza y recupera documentos con búsqueda, etiquetado y control de versiones.",
          },
        },
        whyCustom: {
          title: "Por Qué Personalizado > SaaS Genérico",
          oneTime: {
            title: "Costo Único",
            description: "Paga una vez, posee para siempre. Sin suscripciones mensuales que consuman tus ganancias.",
            detail: "La mayoría de las herramientas SaaS cuestan $50-200/mes. Eso es $600-2,400/año por características que quizás ni necesites.",
          },
          workflow: {
            title: "Construido para TU Flujo de Trabajo",
            description: "Cada campo, botón y característica diseñada alrededor de cómo realmente trabajas.",
            detail: "No más forzar tu proceso en la plantilla de otra persona. Sin características no utilizadas saturando tu interfaz.",
          },
          data: {
            title: "Posee Tus Datos",
            description: "Los datos de tus clientes viven en tu base de datos. Exporta en cualquier momento, sin bloqueo.",
            detail: "Con SaaS, tus datos son rehenes. Deja de pagar, pierde todo.",
          },
          features: {
            title: "Sin Limitaciones de Características",
            description: "¿Necesitas algo? Lo agregamos. Sin muros de pago de 'actualizar a empresarial'.",
            detail: "Las empresas SaaS te cobran por cada característica. Personalizado significa que tú decides lo que necesitas.",
          },
        },
      },
      saasDev: {
        hero: {
          title: "Construye Aplicaciones",
          highlight: "SaaS Escalables",
          subtitle: "Que Crecen Contigo",
          description: "De MVP a plataformas SaaS de nivel empresarial. Características en tiempo real, gestión de usuarios, facturación por suscripción e infraestructura en la nube.",
          cta: "Discute Tu Idea SaaS",
          metrics: {
            realtime: { value: "Tiempo Real", label: "Actualizaciones de Datos" },
            scalable: { value: "Escalable", label: "Arquitectura" },
            secure: { value: "Seguro", label: "Por Defecto" },
          },
        },
        features: {
          title: "Todo Lo Que Tu SaaS Necesita",
          userManagement: {
            title: "Gestión de Usuarios y Autenticación",
            description: "Registro, inicio de sesión, restablecimiento de contraseña, verificación de correo, autenticación social y permisos basados en roles.",
          },
          billing: {
            title: "Facturación por Suscripción",
            description: "Integración de Stripe con múltiples planes, períodos de prueba, facturación y renovaciones automáticas.",
          },
          realtime: {
            title: "Actualizaciones en Tiempo Real",
            description: "WebSockets y suscripciones para actualizaciones de datos en vivo sin recargas de página.",
          },
          analytics: {
            title: "Dashboard de Análisis",
            description: "Rastrea métricas clave, actividad de usuarios, ingresos e insights empresariales en tiempo real.",
          },
          api: {
            title: "Desarrollo de API",
            description: "APIs RESTful con autenticación, limitación de tasa y documentación completa.",
          },
          notifications: {
            title: "Correos y Notificaciones",
            description: "Correos transaccionales, notificaciones en la aplicación y flujos de comunicación automatizados.",
          },
          security: {
            title: "Seguridad y Cumplimiento",
            description: "Cifrado de datos, autenticación segura, cumplimiento GDPR y auditorías de seguridad regulares.",
          },
          admin: {
            title: "Controles de Administración",
            description: "Gestiona usuarios, ve análisis, configura ajustes y modera contenido desde un solo lugar.",
          },
          multiTenant: {
            title: "Arquitectura Multi-Inquilino",
            description: "Soporta múltiples organizaciones/espacios de trabajo con aislamiento de datos y dominios personalizados.",
          },
        },
        techStack: {
          title: "Construido con Tecnología Moderna",
          frontend: {
            title: "Frontend",
            vue: { name: "Vue 3 & Nuxt", description: "UI reactiva con SSR/SSG" },
            typescript: { name: "TypeScript", description: "Desarrollo con seguridad de tipos" },
            tailwind: { name: "Tailwind CSS", description: "UI hermosa y responsive" },
          },
          backend: {
            title: "Backend e Infraestructura",
            supabase: { name: "Supabase", description: "Base de datos, autenticación, tiempo real" },
            stripe: { name: "Stripe, Square, PayPal", description: "Procesamiento de pagos" },
            cloudflare: { name: "Cloudflare/Netlify", description: "CDN y alojamiento" },
          },
        },
        process: {
          title: "Cómo Construimos Tu SaaS",
          step1: {
            number: "1",
            title: "Descubrimiento y Planificación",
            description: "Definir características, flujos de usuario y requisitos técnicos. Crear wireframes y arquitectura.",
          },
          step2: {
            number: "2",
            title: "Desarrollo de MVP",
            description: "Construir primero las características centrales. Llegar al mercado rápido con un producto funcional que puedas probar.",
          },
          step3: {
            number: "3",
            title: "Iterar y Escalar",
            description: "Agregar características basadas en retroalimentación. Optimizar rendimiento. Escalar infraestructura a medida que creces.",
          },
          step4: {
            number: "4",
            title: "Lanzamiento y Soporte",
            description: "Desplegar a producción. Monitorear rendimiento. Proporcionar mantenimiento y actualizaciones continuas.",
          },
        },
      },
      aiIntegrationService: {
        hero: {
          title: "Integración de IA",
          highlight: "para Pequeñas Empresas",
          description: "Automatiza tareas, mejora el servicio al cliente y obtén insights basados en datos con integraciones de IA personalizadas construidas específicamente para tu negocio.",
          cta: "Explorar Soluciones de IA",
          metrics: {
            hours: { value: "10+", label: "Horas Ahorradas/Semana" },
            automation: { value: "24/7", label: "Automatización" },
            smart: { value: "Más Inteligente", label: "Decisiones" },
          },
        },
        useCases: {
          title: "Cómo la IA Puede Ayudar a Tu Negocio",
          customerService: {
            title: "Automatización del Servicio al Cliente",
            description: "Chatbots de IA que manejan preguntas frecuentes, brindan soporte fuera del horario y enrutan consultas complejas a humanos.",
          },
          dataAnalytics: {
            title: "Análisis de Datos e Insights",
            description: "Analiza tendencias de ventas, comportamiento del cliente y datos financieros con información impulsada por IA.",
          },
          contentGeneration: {
            title: "Generación de Contenido",
            description: "Genera publicaciones de blog, actualizaciones de redes sociales, textos publicitarios y descripciones de productos.",
          },
          automation: {
            title: "Automatización de Operaciones",
            description: "Automatiza entrada de datos, gestión de inventario, pronóstico de demanda y programación de citas.",
          },
          hrRecruitment: {
            title: "Recursos Humanos y Reclutamiento",
            description: "Redacta descripciones de puestos, analiza currículums, automatiza flujos de incorporación y crea materiales de capacitación.",
          },
          security: {
            title: "Ciberseguridad y Monitoreo",
            description: "Monitorea actividades inusuales, detecta amenazas potenciales y protege contra violaciones de datos.",
          },
        },
        realExamples: {
          title: "Ejemplos de IA en Acción",
          restaurant: {
            title: "Chatbot de Reservas para Restaurante",
            description: "Chatbot de IA que maneja reservas, responde preguntas del menú y envía confirmaciones, reduciendo llamadas telefónicas en un 70%.",
          },
          retail: {
            title: "Análisis de Inventario para Tienda Minorista",
            description: "Herramienta de IA que analiza datos de ventas, predice demanda y recomienda niveles de inventario óptimos, reduciendo exceso de stock en un 30%.",
          },
          legal: {
            title: "Automatización de Documentos para Firma Legal",
            description: "Sistema de IA que redacta contratos estándar, completa plantillas y extrae información clave de documentos, ahorrando 15+ horas/semana.",
          },
          fitness: {
            title: "Entrenador Personal de IA para Gimnasio",
            description: "Chatbot que crea planes de entrenamiento personalizados, rastrea progreso y envía recordatorios de entrenamiento, aumentando retención de miembros en un 25%.",
          },
          realEstate: {
            title: "Generador de Listados para Inmobiliaria",
            description: "IA que escribe descripciones de propiedades atractivas, genera publicaciones de redes sociales y crea tours virtuales a partir de fotos.",
          },
          ecommerce: {
            title: "Soporte al Cliente para E-commerce",
            description: "Chatbot de IA que responde preguntas de productos, rastrea pedidos y procesa devoluciones, manejando 80% de consultas de clientes automáticamente.",
          },
        },
        howItWorks: {
          title: "Cómo Integro IA en Tu Negocio",
          step1: {
            number: "1",
            title: "Consulta de Descubrimiento",
            description: "Entender tus procesos empresariales, puntos de dolor y objetivos. Identificar las mejores oportunidades de IA.",
          },
          step2: {
            number: "2",
            title: "Solución Personalizada de IA",
            description: "Diseñar e integrar herramientas de IA adaptadas a tus necesidades. Chatbots, automatización, análisis o generación de contenido.",
          },
          step3: {
            number: "3",
            title: "Pruebas y Refinamiento",
            description: "Probar la solución de IA con datos del mundo real. Refinar respuestas, mejorar precisión y optimizar rendimiento.",
          },
          step4: {
            number: "4",
            title: "Lanzamiento y Soporte",
            description: "Desplegar tu solución de IA. Proporcionar capacitación, monitoreo continuo y actualizaciones a medida que tu negocio evoluciona.",
          },
        },
      },
      blog: {
        title: "Nuestros Ultimos",
        titleColored: "Articulos",
        description:
          'El SEO no se trata solo de palabras clave, sino de usar las estrategias correctas para que Google y tu audiencia noten tu sitio. En este blog, desgloso tácticas reales que ayudan a los negocios a aparecer donde los clientes están buscando. Ya sea que quieras posicionarte para búsquedas como "plomero cerca de mí" o "mejor panadería en Orlando", aquí encontrarás estrategias de SEO prácticas que generan resultados reales.',
        metadata: {
          title: "Últimos Artículos | Blog de Diseño Web & SEO",
          description:
            "Explora estrategias prácticas de SEO, consejos de diseño web e ideas sobre comercio electrónico en nuestros últimos artículos del blog. Aprende cómo mejorar el rendimiento de tu sitio web y posicionarte mejor en los motores de búsqueda.",
          og_title: "Blog de Diseño Web & SEO | Últimos Artículos",
          og_description:
            "Descubre los últimos artículos sobre SEO, desarrollo web y más. Aprende estrategias prácticas para mejorar tu visibilidad en línea y aumentar tu tráfico.",
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
        metadata: {
          title: "Agenda una Consulta | Diseño Web y SEO",
          description:
            "Programa una cita con Christopher Bermudez para hablar sobre tus necesidades de diseño web y SEO. Creamos una estrategia personalizada para alcanzar tus objetivos comerciales.",
          og_title: "Agenda una Cita para Diseño Web y SEO",
          og_description:
            "Explora cómo Christopher Bermudez puede ayudarte a hacer crecer tu negocio en línea con una consulta personalizada.",
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
          description:
            "Con años de experiencia en desarrollo web y SEO, me apasiona ayudar a los pequeños negocios a prosperar.",
          languages: "Idiomas: Inglés, Español, Portugués",
        },
        testimonials: {
          title: "Socios que dieron su opinión",
          eliteEuro: {
            quote:
              "Comenzamos a recibir tantas reservas en línea y llamadas que tuvimos que contratar más personal después de que Christopher actualizó nuestro sitio e implementó técnicas de marketing.",
          },
          beUpTwo: {
            quote:
              "Trabajar con Christopher ha sido un cambio radical para mi marca. Desde el principio, impactó inmediatamente el tráfico de mi sitio web y me hizo visible en Google. ¡Ya estoy apareciendo en las primeras páginas!",
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
            bullet1:
              "¿Tienes problemas de tiempo para manejar tu presencia en línea?",
            bullet2:
              "¿No estás generando suficientes clientes potenciales en línea?",
            bullet3: "¿Necesitas consultoría en servicios web?",
          },
          button: "Contáctame",
        },
        metadata: {
          title: "Acerca de Web & SEO por Christopher Bermudez",
          description:
            "Desarrollo web y SEO experto en Clermont y el área metropolitana de Orlando. Ayudando a negocios locales en Clermont, Orlando y Centro de Florida a crecer en línea con sitios web personalizados y estrategias SEO de alto impacto.",
          og_title: "Desarrollo Web y SEO Experto por Christopher Bermudez",
          og_description:
            "Descubre cómo Christopher Bermudez ayuda a negocios locales en Clermont y Orlando a prosperar en línea con estrategias personalizadas de desarrollo web y SEO.",
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
            "Explora nuestras opciones de precios flexibles diseñadas para el éxito a largo plazo. Elige un plan que se ajuste a tus necesidades y permita a tu negocio prosperar con el soporte experto de SEO y desarrollo web. Mes a mes. Sin contratos a largo plazo. Sin cargos por cancelación.",
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
        metadata: {
          title: "Soluciones Estratégicas de Crecimiento | Planes Web y SEO",
          description:
            "Elige un plan de desarrollo web y SEO que se alinee con tus objetivos comerciales. Explora nuestra estructura de precios escalonada y opciones de retención a largo plazo para un crecimiento máximo.",
          og_title: "Soluciones Estratégicas de Crecimiento para tu Negocio",
          og_description:
            "Descubre paquetes personalizados de desarrollo web y SEO diseñados para hacer crecer tu negocio — sin contratos, solo resultados.",
        },
      },
      localSeo: {
        hero: {
          titlePart1: "Dominio de SEO Local para",
          highlightedTitle: "Clermont y Orlando",
          titlePart2: "Negocios",
          subtitle:
            "Aparece en la primera página de Google para búsquedas de 'cerca de mí' – Sé encontrado por clientes locales listos para comprar",
          description:
            "Como la agencia líder en SEO local de Florida Central, ayudamos a negocios en Clermont y Orlando a dominar los mapas y búsquedas de 'cerca de mí'. Nuestras estrategias hiperlocales están diseñadas específicamente para el mercado turístico y competitivo de Florida.",
          button: "Consulta Gratis",
          trustSignals: {
            years: {
              value: "10+",
              label: "Años de experiencia en SEO local",
            },
            clients: {
              value: "15+",
              label: "Clientes en Florida Central",
            },
            successRate: {
              value: "90%",
              label: "Éxito en primera página con planes mensuales",
            },
          },
        },
        services: {
          googleMaps: {
            title: "Dominio en Google Maps",
            description:
              "Consigue estar en el Top 3 para búsquedas como 'HVAC Clermont' y 'restaurantes en Orlando' con nuestra estrategia probada para el mapa local.",
          },
          hyperlocalContent: {
            title: "Estrategia de Contenido Hiperlocal",
            description:
              "Creamos contenido que responde a búsquedas como 'mejores en Orlando...' y 'cerca de Disney...' – optimizado para búsquedas por voz aquí en la Florida Central.",
          },
          reviewManagement: {
            title: "Sistema de Manejo de Reseñas",
            description:
              "Automatiza la generación de reseñas y responde con profesionalismo – clave para subir en búsquedas como 'plomero Clermont'.",
          },
        },
        challenges: {
          title: "Resolvemos los Retos del SEO Local en Florida Central",
          paragraph1:
            "Si tu negocio no aparece cuando alguien busca <span class='italic'>“cerca de mí”</span>, estás perdiendo clientes todos los días. Ayudamos a negocios en <strong>Clermont, Minneola, Four Corners, Davenport, Groveland, Mascotte, Winter Garden, Ocoee, Horizon West, Kissimmee</strong> y <strong>Poinciana</strong> a sobresalir en el paquete local de Google — incluyendo suburbios al oeste y sur de Orlando y áreas más rurales.",
          paragraph2:
            "Desde <span class='font-medium'>“HVAC Clermont”</span> hasta <span class='font-medium'>“desayuno cerca de Cagan Crossings”</span>, optimizamos tu presencia según cómo la gente y los turistas realmente buscan.",

          disney: {
            title: "¿No Apareces en Búsquedas de 'Cerca de Disney'?",
            description:
              "Los turistas buscan de forma distinta – optimizamos con palabras clave que ellos usan y según las temporadas.",
            details: [
              "Schema markup para eventos",
              "Alianzas con hoteles y atracciones",
              "Contenido enfocado en turistas",
            ],
          },

          bigBox: {
            title: "¿Pierdes Contra las Grandes Tiendas en Orlando?",
            description:
              "Nuestra estrategia hiperlocal apunta a búsquedas por barrio y con intención clara:",
            details: [
              "Clínicas en Lake Nona",
              "Restaurantes en Dr. Phillips",
              "Contratistas en Winter Garden",
            ],
          },
        },
        landmarks: {
          lakes: {
            title: "Cadena de Lagos de Clermont",
            description:
              "Aprovecha el tráfico en Google Maps para tours, alquileres y eventos al aire libre.",
          },
          corridor: {
            title: "Corredor Turístico 192",
            description:
              "Posiciónate para palabras clave que usan los vacacionistas cerca de Disney y los resorts.",
          },
          hwy27: {
            title: "Bienestar y Servicios en la Hwy 27",
            description:
              "Supera a las cadenas nacionales apareciendo en búsquedas locales de pacientes y clientes.",
          },
          downtown: {
            title: "Centro de Clermont y Citrus Tower",
            description:
              "Lleva más tráfico a eventos locales, tiendas, y experiencias culturales o de entretenimiento.",
          },
        },
        testimonials: {
          eliteEuro: {
            quote:
              "Nuestra visibilidad para 'reparación de autos europeos' se triplicó en solo 60 días. ¡Ahora más de la mitad de nuestras citas vienen por Google!",
            author: "Elite Euro Motors",
            location: "Ocoee, FL",
          },
          irisHair: {
            quote:
              "¡El flujo de clientes ha sido brutal! Tuve que contratar más gente para aguantar el empuje.",
            author: "Iris Hair & Nail Studio",
            location: "Clermont, FL",
          },
          elCerro: {
            quote:
              "El Cerro se encuentra en la primera página para 'comida latina cerca de mi', optimizado para que encuentren platos específicos cerca. Ahora son el spot favorito en Clermont de comida Dominicana/Puerto Rico.",
            author: "El Cerro Restaurant",
            location: "Clermont, FL",
          },
        },
        faqs: {
          1: {
            question:
              "¿Cuánto tarda el SEO local en funcionar para negocios en Clermont?",
            answer:
              "La mayoría de los negocios en Clermont ven visibilidad inicial en el Map Pack de Google entre 4–8 semanas, con mejoras completas en el posicionamiento local en 3–6 meses. Factores clave que afectan el tiempo:",
            details: [
              "Estado actual de optimización del perfil de Google Business",
              "Consistencia de citaciones locales en directorios del área de Orlando",
              "Velocidad de reseñas de calidad que mencionan ubicaciones en 'Clermont'",
              "Competencia por términos como 'HVAC Clermont FL'",
            ],
          },
          2: {
            question:
              "¿Por qué mi negocio en Orlando no aparece en búsquedas de 'cerca de mí'?",
            answer:
              "Problemas comunes que evitan visibilidad en búsquedas de 'cerca de mí' en Florida Central:",
            details: [
              "Áreas de servicio incompletas en el perfil de Google Business",
              "Falta de marcado schema para áreas de servicio locales",
              "NAP (Nombre, Dirección, Teléfono) inconsistente en la web",
              "Pocas reseñas con palabras clave hiperlocales",
            ],
          },
          3: {
            question:
              "¿Cómo puedo superar a grandes competidores de Orlando en búsquedas locales?",
            answer:
              "Nuestras estrategias enfocadas en Clermont ayudan a superar a cadenas grandes de Orlando:",
            details: [
              "Contenido específico por vecindario (ej. 'restaurantes en Waterfront District')",
              "Enlaces locales desde Orlando Sentinel, Clermont Beacon",
              "Palabras clave con geo-modificación: 'plomero cerca de Minneola FL'",
              "Optimización para búsquedas de 'Clermont' + servicio + 'abierto ahora'",
            ],
          },
          4: {
            question:
              "¿Cuál es el factor más importante para el SEO local en Orlando?",
            answer:
              "Basado en las actualizaciones del algoritmo de Google en 2024, los 3 factores principales son:",
            details: [
              "1. Optimización del perfil de Google Business (especialmente publicaciones y preguntas/respuestas)",
              "2. Velocidad de reseñas con palabras clave específicas de ubicación",
              "3. Clústeres de contenido local (páginas de servicio + guías por vecindario)",
            ],
          },
          5: {
            question:
              "¿Debe mi negocio en Clermont tener páginas separadas para cada área de servicio?",
            answer:
              "Sí - creamos páginas específicas para cada ubicación dirigidas a:",
            details: [
              "Ciudades: 'reparación de techos en Windermere' | 'HVAC en Winter Garden'",
              "Lugares icónicos: 'taller cerca de Lakeridge Winery'",
              "Vecindarios: 'reparación de electrodomésticos en Four Corners'",
              "Zonas turísticas: 'reparación de AC cerca de Disney World'",
            ],
          },
          6: {
            question:
              "¿Cómo afectan las reseñas negativas el SEO local en Orlando?",
            answer:
              "Las reseñas negativas (especialmente si no se responden) afectan el posicionamiento en:",
            details: [
              "Consultas de servicios locales: 'plomero de emergencia Clermont'",
              "Visibilidad en el Map Pack en un radio de 10 millas",
              "Tasas de clics desde los resultados de búsqueda",
              "La recuperación toma típicamente 45–60 días con nuestro sistema de gestión de reputación",
            ],
          },
          7: {
            question:
              "¿Cuáles son las citaciones locales más importantes para negocios en Florida Central?",
            answer:
              "Directorios prioritarios para consistencia NAP en Clermont/Orlando:",
            details: [
              "Cámara de Comercio de Orlando",
              "Clermont Local Connect",
              "Listados de socios en Visit Orlando",
              "Florida Home Service Pro (para contratistas)",
              "Disney Area Business Network",
            ],
          },
          8: {
            question:
              "¿Cómo optimizar para búsquedas por voz como 'mejor HVAC cerca de Disney World'?",
            answer:
              "Tácticas de optimización para búsquedas por voz que implementamos:",
            details: [
              "Marcado schema para preguntas frecuentes en lenguaje natural",
              "Contenido que responde preguntas de 'quién/qué/dónde'",
              "Optimización para frases como 'cerca de [punto de referencia]'",
              "Atributos de 'Abierto 24/7' en el perfil de Google Business",
            ],
          },
          9: {
            question:
              "¿Por qué bajan mis posiciones en Orlando durante la temporada turística?",
            answer:
              "Las fluctuaciones estacionales son comunes - las combatimos con:",
            details: [
              "Actualizaciones de contenido antes de temporada (Spring Break, feriados)",
              "Páginas dinámicas de servicios: 'limpieza de alquileres vacacionales en Orlando'",
              "Contenido en colaboración con hoteles y conserjes",
              "Marcado schema específico para eventos (festivales en Epcot, runDisney)",
            ],
          },
          10: {
            question:
              "¿Qué tan importantes son las publicaciones de Google para el SEO local en Clermont?",
            answer:
              "Las publicaciones impactan 3 áreas clave para negocios en Florida Central:",
            details: [
              "1. Rotaciones de visibilidad en el Map Pack",
              "2. Apariciones con el disparador de 'Abierto ahora'",
              "3. Seguimiento de llamadas localizado (las publicaciones reciben 28% más clics)",
            ],
          },
        },
        metadata: {
          title:
            "SEO Local para Clermont y Orlando – Domina las búsquedas de Google 'Cerca de mí'",
          description:
            "Haz que tus clientes locales te encuentren en Clermont y Orlando. Ayudamos a negocios en Florida a posicionarse en la primera página de Google Maps y búsquedas locales.",
          og_title:
            "Expertos en SEO Local de Clermont y Orlando – Primeros puestos en búsquedas 'Cerca de mí'",
          og_description:
            "Con más de 10 años de experiencia en SEO local, ayudamos a empresas de Florida Central a posicionarse en búsquedas locales clave como 'HVAC Clermont' y 'restaurantes cerca de Disney'.",
        },
      },
      webDev: {
        hero: {
          titlePart1: "Desarrollo Web de Nivel Empresarial para",
          highlightedTitle: "Rendimiento Relámpago",
          titlePart2: "",
          subtitle:
            "Soluciones sin compromiso con puntajes Lighthouse de 95%+ y tiempos de carga por debajo de un segundo",
          button: "Comenzar Desarrollo Ahora →",
          trustMetrics: {
            performance: {
              value: "98%",
              label: "Puntaje de Rendimiento",
            },
            deployment: {
              value: "72h",
              label: "Despliegue Rápido",
            },
            rating: {
              value: "4.9/5",
              label: "Calificación de Clientes",
            },
          },
        },
        performanceSection: {
          title: "Optimización de Rendimiento de Ciclo Completo",
          description:
            "En el competitivo panorama digital actual, el rendimiento lo es todo. Desde la velocidad de carga hasta el posicionamiento en buscadores, cada elemento de tu sitio debe estar optimizado para el éxito. Nuestras estrategias de rendimiento de ciclo completo aseguran que tu web no solo sea rápida, sino también amigable con buscadores y centrada en el usuario. Ya sea aprovechando la caché avanzada, implementando datos estructurados o optimizando para móviles, te ayudamos a ofrecer una presencia en línea excepcional que conecte con buscadores y clientes.",

          services: {
            rendering: {
              title: "Renderizado Centrado en Rendimiento",
              description:
                "Estrategias de renderizado que priorizan la velocidad y el flujo del usuario",
              features: [
                "Hidratación de componentes optimizada",
                "Caché de rutas eficiente",
                "Entrega lista para el edge",
              ],
            },
            analytics: {
              title: "Analítica Impulsada por Datos",
              description:
                "Analítica integrada para visibilidad clara y decisiones inteligentes",
              features: [
                "Seguimiento de comportamiento de usuarios",
                "Registro de métricas clave de rendimiento",
                "Paneles personalizados de interacción",
              ],
            },
            media: {
              title: "Eficiencia de Medios y Recursos",
              description:
                "Cada imagen, fuente y recurso servido limpio y rápido",
              features: [
                "Formatos de imagen modernos con entrega adaptativa",
                "Pipelines automáticos de compresión",
                "Recursos críticos en línea",
              ],
            },
            scaling: {
              title: "Escalado Global de Velocidad",
              description:
                "Configuración con reconocimiento geográfico para servir rápido desde cualquier lugar",
              features: [
                "Lógica de caché en el edge",
                "Protección ante picos de tráfico",
                "Optimización de entrega localizada",
              ],
            },
            lazyLoading: {
              title: "Carga Diferida para Mayor Velocidad",
              description:
                "Carga eficiente de recursos para mejorar la velocidad sin sacrificar la experiencia",
              features: [
                "Carga asíncrona de imágenes y scripts",
                "Contenido no esencial diferido",
                "Recursos de bloqueo minimizados",
              ],
            },
            caching: {
              title: "Caché Optimizado para SEO",
              description:
                "Estrategias de caché más inteligentes para mejor posicionamiento y acceso rápido",
              features: [
                "Caché persistente del navegador",
                "Estrategias stale-while-revalidate",
                "Encabezados de caché que mejoran SEO",
              ],
            },
            structuredData: {
              title: "Implementación de Datos Estructurados",
              description:
                "Mayor visibilidad con schema markup y rich snippets",
              features: [
                "Schema de eventos para contenido turístico",
                "Marcado local de negocio para Google Maps",
                "Marcado de FAQ y reseñas para mayor interacción",
              ],
            },
            mobileDesign: {
              title: "Diseño Móvil Primero",
              description:
                "Adaptado para tráfico móvil con enfoque en velocidad y usabilidad",
              features: [
                "Diseño responsivo para cualquier tamaño de pantalla",
                "Interacciones optimizadas para toque",
                "Preparado para AMP para cargas ultra rápidas",
              ],
            },
          },
        },
        practicesSection: {
          title: "Prácticas de Desarrollo de Última Generación",
          description:
            "Construimos con precisión: código limpio, velocidad extrema e integraciones potentes. Ya seas una tienda en Four Corners o un servicio en expansión en Winter Garden, nuestros sitios no solo son rápidos: están diseñados para durar, escalar y posicionarse. Cada función es intencional, cada decisión basada en datos.",

          practices: {
            security: {
              title: "Seguridad y Protección",
              features: [
                "Mejores prácticas modernas de seguridad web",
                "Actualizaciones de seguridad automáticas",
                "Protección de formularios y datos integrada",
              ],
            },
            performance: {
              title: "Construcciones Prioritarias en Rendimiento",
              features: [
                "Velocidades de carga ultra rápidas",
                "Recursos comprimidos e imágenes responsivas",
                "Estructura limpia sin código repetido",
              ],
            },
            launch: {
              title: "Proceso de Lanzamiento Eficiente",
              features: [
                "Despliegue global instantáneo",
                "Reversiones automáticas para estabilidad",
                "Actualizaciones continuas sin interrupciones",
              ],
            },
            seo: {
              title: "Schema SEO Local",
              features: [
                "Datos estructurados para visibilidad local",
                "Marcado de reseñas y áreas de servicio",
                "Metadatos amigables para buscadores en todas las páginas",
              ],
            },
            analytics: {
              title: "Decisiones Basadas en Datos",
              features: [
                "Seguimiento de tráfico e interacción en tiempo real",
                "Análisis de conversiones y establecimiento de objetivos",
                "Monitoreo de comportamiento basado en eventos",
              ],
            },
            database: {
              title: "Soluciones de Datos Escalables",
              features: [
                "Bases de datos en la nube con baja latencia",
                "Actualizaciones y sincronización en tiempo real",
                "Almacenamiento de datos flexible y respaldos",
              ],
            },
          },
        },
        faqs: {
          heading: "Preguntas Frecuentes sobre Desarrollo Web",
          1: {
            question: "¿Cómo logran tiempos de carga por debajo de un segundo?",
            answer: "Nuestra pila de rendimiento combina:",
            details: [
              "Caché en red edge (Cloudflare/Netlify)",
              "Compresión Brotli para recursos",
              "CSS crítico en línea",
              "Optimización de prefetch DNS",
            ],
          },
          2: {
            question: "¿Qué pasa con el mantenimiento continuo?",
            answer: "Incluido en todos los planes empresariales:",
            details: [
              "Actualizaciones semanales de dependencias",
              "Monitoreo de seguridad 24/7",
              "Auditorías mensuales de rendimiento",
              "Respuesta de parches de emergencia en menos de 4h",
            ],
          },
          3: {
            question: "¿Cumplen con GDPR?",
            answer: "Cumplimiento completo incorporado:",
            details: [
              "Gestión automática de consentimiento de cookies",
              "Encriptación de datos en reposo y en tránsito",
              "Flujos de trabajo de derecho al olvido",
              "Opciones de residencia de datos en la UE",
            ],
          },
          4: {
            question: "¿Pueden migrar sitios existentes?",
            answer: "Migraciones sin tiempo fuera incluyen:",
            details: [
              "Transformación de base de datos",
              "Preservación de estructura de URLs",
              "Mapeo de redirecciones 301",
              "Auditoría de configuración DNS",
            ],
          },
          5: {
            question: "¿Qué tan escalables son sus soluciones?",
            answer: "Arquitectura pensada para crecimiento empresarial:",
            details: [
              "Infraestructura en la nube con auto-escalado",
              "Soporte para partición de base de datos",
              "Configuración de CDN global",
              "Pruebas de carga hasta 50k RPM",
            ],
          },
          6: {
            question: "¿Qué medidas de seguridad incluyen?",
            answer: "Protección de nivel empresarial:",
            details: [
              "Mitigación OWASP Top 10",
              "Escaneo diario de vulnerabilidades",
              "Cortafuegos de aplicaciones web",
              "Protección DDoS hasta 5Tbps",
            ],
          },
        },
        metadata: {
          title:
            "Desarrollo Web Empresarial – Sitios Ultra Rápidos y Optimizados para SEO",
          description:
            "Creamos sitios web de alto rendimiento con más del 95% en Lighthouse y tiempos de carga menores a un segundo. Cada línea de código está diseñada para velocidad y posicionamiento en buscadores.",
          og_title:
            "Desarrollo Web a Escala – Rápido, SEO-Optimizado y Preparado para Crecer",
          og_description:
            "Impulsa tu negocio con un sitio web rápido, adaptable y enfocado en resultados. Nuestras soluciones están diseñadas para escalar y posicionarse en el mercado de Florida Central.",
        },
      },
      cro: {
        hero: {
          titlePart1: "Optimización de la Tasa de Conversión para",
          highlightedTitle: "Crecimiento Sostenible de Ingresos",
          titlePart2: "",
          subtitle:
            "Estrategias Basadas en Datos Que Aumentan las Conversiones 200-400% Mientras Mejoran la Experiencia del Usuario",
          button: "Obtén una Auditoría de CRO Gratis →",
          imageAlt:
            "Visualización del proceso de optimización de la tasa de conversión",
          trustMetrics: {
            conversion: {
              value: "42%",
              label: "Incremento Promedio en Conversiones",
            },
            users: {
              value: "1.2M+",
              label: "Usuarios Analizados",
            },
            roi: {
              value: "93%",
              label: "ROI Positivo",
            },
          },
        },

        strategies: {
          title: "Marco Comprobado de Optimización de Conversiones",
          description:
            "Los grandes sitios web no solo atraen visitantes, sino que los convierten en clientes leales. Nuestro marco combina la ciencia del comportamiento con las tendencias únicas del mercado de Florida Central para eliminar sistemáticamente los obstáculos de conversión. Al estudiar cómo los usuarios reales interactúan con tu sitio (donde hacen clic, donde dudan, donde abandonan), reconstruimos tu experiencia digital para guiar a los visitantes sin problemas desde el 'navegar' hasta el 'comprar'.",

          behavioral: {
            title: "Análisis de Comportamiento",
            description:
              "Analiza las interacciones de los usuarios para descubrir oportunidades de conversión",
            tactics: [
              "Mapas de calor para rastrear el compromiso de los usuarios",
              "Rastreo de clics en áreas de alto interés",
              "Análisis de profundidad de desplazamiento para optimizar los diseños de páginas",
              "Segmentación comportamental para dirigir a diferentes grupos de clientes",
            ],
          },
          testing: {
            title: "Pruebas A/B",
            description:
              "Toma decisiones basadas en datos mediante pruebas en vivo",
            tactics: [
              "Prueba de títulos, llamadas a la acción (CTAs) e imágenes",
              "Monitorea cambios en tiempo real para evaluar el impacto",
              "Optimización basada en significancia estadística",
              "Implementación rápida de variantes ganadoras",
            ],
          },
          audits: {
            title: "Auditorías y Análisis de Sitios Web",
            description:
              "Revisiones exhaustivas del sitio para identificar áreas de mejora",
            tactics: [
              "Auditorías de rendimiento extensivas después de cada actualización",
              "Análisis SEO para problemas técnicos y en página",
              "Revisión de UX/UI para mejorar el compromiso del usuario",
              "Diagnósticos del embudo de conversión",
            ],
          },
          funnel: {
            title: "Optimización del Embudo de Conversión",
            description:
              "Refina los flujos de usuarios para maximizar las conversiones en cada etapa",
            tactics: [
              "Mapea y optimiza los caminos de conversión",
              "Reduce la fricción en los puntos de contacto críticos",
              "Identifica y arregla los puntos de abandono",
              "Prueba A/B de varias variaciones del embudo",
            ],
          },
          personalization: {
            title: "Estrategias de Contenido Personalizado",
            description: "Ofrece experiencias dirigidas a cada cliente",
            tactics: [
              "Segmenta a los visitantes según su comportamiento y demografía",
              "Personaliza las llamadas a la acción según el perfil del usuario",
              "Crea contenido dinámico que se adapta a las preferencias de los usuarios",
              "Automatiza cambios de contenido basados en el historial de interacciones del usuario",
            ],
          },
          speed: {
            title: "Optimización de Velocidad",
            description:
              "Asegura tiempos de carga ultra rápidos para una experiencia de usuario sin interrupciones",
            tactics: [
              "Optimización de imágenes para una carga más rápida",
              "Técnicas de carga diferida para contenido no esencial",
              "Estrategias de caché eficientes para reducir tiempos de carga",
              "Minificación y compresión de JavaScript y CSS para cargar las páginas más rápido",
            ],
          },
          seo: {
            title: "Mejoras en el Rendimiento SEO",
            description:
              "Maximiza el tráfico orgánico y la optimización SEO en la página para conversiones",
            tactics: [
              "Investigación de palabras clave y optimización para términos de alta conversión",
              "Mejoras SEO en la página para un mejor posicionamiento",
              "Optimización de contenido para mayor interacción",
              "Datos estructurados y esquemas para resultados de búsqueda enriquecidos",
            ],
          },
          mobile: {
            title: "Optimización Móvil",
            description:
              "Asegura que tu sitio web esté completamente optimizado para usuarios móviles",
            tactics: [
              "Diseño responsivo para experiencias móviles sin interrupciones",
              "Pruebas móviles primero para establecer referencias de rendimiento",
              "Navegación amigable con el tacto para una navegación más fácil",
              "Optimización de la velocidad de carga de páginas móviles",
            ],
          },
        },

        caseStudies: {
          title: "Resultados Reales de CRO",
          description:
            "Ayudé a un minorista de moda local a aumentar sus ingresos un 120% en 6 meses enfocándome en estrategias clave de CRO. Mejoré sus páginas de productos y el proceso de pago para hacer la experiencia de compra más fluida. También ejecutamos campañas dirigidas en redes sociales para involucrar a los clientes y usamos tácticas de urgencia como temporizadores de cuenta regresiva para impulsar las ventas. Además, implementé ventas adicionales en el proceso de pago, lo que aumentó el valor promedio de la orden. Estos cambios, combinados con ajustes basados en datos, llevaron a un gran aumento en las ventas en línea.",

          studies: [
            {
              client: "Retailer de Ecommerce",
              industry:
                "Moda y Vestimenta en Orlando, centrado en ventas en línea con una tienda física",
              result: "120% Aumento en Ingresos",
              metric: "en 6 meses",
              quote:
                "Su estrategia de CRO triplicó nuestro valor promedio de pedido mientras reducía los costos de adquisición",
            },
          ],
        },

        faqs: {
          heading:
            "Optimización de la Tasa de Conversión - Preguntas Frecuentes",
          1: {
            question: "¿Cuánto tiempo hasta que veamos resultados?",
            answer: "Cronograma típico para mejoras medibles:",
            details: [
              "4-8 semanas para un aumento inicial",
              "12-16 semanas para una optimización completa",
              "Ganancias incrementales continuas",
            ],
          },
          2: {
            question: "¿Qué tipo de negocios pueden beneficiarse del CRO?",
            answer:
              "CRO es beneficioso para cualquier negocio en línea, incluyendo:",
            details: [
              "Tiendas de ecommerce que buscan aumentar ventas",
              "Negocios basados en servicios que desean más clientes potenciales",
              "Negocios con alto tráfico pero bajas conversiones",
              "Empresas que buscan optimizar sus presupuestos de marketing",
            ],
          },
          3: {
            question: "¿Necesito rediseñar mi sitio web para CRO?",
            answer:
              "No necesariamente. CRO se trata de optimizar lo que ya tienes, pero a veces pequeños ajustes de diseño son parte de la estrategia.",
            details: [
              "Pequeños ajustes en el diseño, CTAs y copy pueden tener un gran impacto",
              "Enfoque en mejorar la experiencia del usuario, no en una reconstrucción completa",
            ],
          },
          4: {
            question: "¿Cómo miden el éxito del CRO?",
            answer:
              "Medimos el éxito basado en tus objetivos específicos, tales como:",
            details: [
              "Incrementos en la tasa de conversión",
              "Mejor valor promedio de pedido",
              "Mayor retención de clientes",
              "Menores tasas de abandono de carrito",
            ],
          },
          5: {
            question: "¿El CRO es un servicio único o continuo?",
            answer:
              "CRO es un proceso continuo. Una vez que optimizamos tu sitio, seguiremos refinándolo basándonos en datos y cambios del mercado.",
            details: [
              "Pruebas A/B y análisis continuos",
              "Ajustes basados en estacionalidad, tendencias y cambios de tráfico",
            ],
          },
          6: {
            question: "¿Qué tipo de tácticas de CRO usan?",
            answer:
              "Utilizamos una mezcla de tácticas comprobadas y creativas, como:",
            details: [
              "Pruebas A/B de diseño y copy",
              "Optimización del flujo de pago para reducir fricción",
              "Recomendaciones personalizadas de productos",
              "Tácticas de urgencia (ej. temporizadores de cuenta regresiva)",
              "Pop-ups de salida para reducir el abandono de carrito",
              "Campañas de email marketing dirigidas a carritos abandonados o promociones",
            ],
          },
          7: {
            question: "¿Cómo entra el email marketing en el CRO?",
            answer:
              "El email es una herramienta esencial para aumentar conversiones, especialmente para reenganchar a los visitantes que no han completado su compra.",
            details: [
              "Secuencias automatizadas de emails para carritos abandonados",
              "Retargeting por email para usuarios que visitaron productos específicos",
              "Emails de seguimiento post-compra para fomentar compras repetidas",
              "Recomendaciones de productos personalizadas basadas en el comportamiento de navegación",
            ],
          },
          8: {
            question: "¿Cuánto cuesta el CRO?",
            answer:
              "El precio de CRO varía según las necesidades, objetivos y rendimiento actual de tu sitio web.",
            details: [
              "Adaptamos las estrategias a tu presupuesto y cronograma",
              "Esperamos un costo inicial de auditoría, seguido de opciones de precios basadas en rendimiento",
            ],
          },
          9: {
            question: "¿Cómo empiezan con el CRO?",
            answer:
              "Comenzamos auditando tu sitio web para identificar áreas problemáticas, luego creamos una estrategia personalizada con objetivos medibles.",
            details: [
              "Revisaremos tu análisis, comportamiento de usuarios y caminos de conversión actuales",
              "Después de identificar puntos de dolor clave, implementaremos un plan de acción",
              "La estrategia de email se integra como parte del plan general de optimización",
            ],
          },
          10: {
            question:
              "¿Qué tipo de optimizaciones en redes sociales pueden aumentar las conversiones?",
            answer:
              "Optimizar tus redes sociales para conversiones involucra varias estrategias:",
            details: [
              "Anuncios dirigidos: Usa opciones avanzadas de segmentación en plataformas como Facebook, Instagram y LinkedIn para atraer tráfico más calificado",
              "Retargeting: Vuelve a atraer visitantes que no convirtieron la primera vez con anuncios de retargeting",
              "Prueba social: Muestra contenido generado por usuarios, testimonios y reseñas positivas para generar confianza",
              "Publicaciones comprables: Facilita que los clientes compren directamente desde las redes sociales",
              "Interacción & CTAs: Mejora la interacción con llamados a la acción claros",
              "Marketing de influencers: Aprovecha nuevas audiencias mediante asociaciones con influencers",
              "Pruebas A/B: Prueba diferentes contenidos para ver cuál tiene más resonancia",
              "Venta en vivo: Usa características de transmisión en vivo para interactuar con los clientes en tiempo real",
              "Incentiva el compartir: Ofrece descuentos a usuarios que compartan tu contenido",
              "Análisis: Rastrear métricas como CTR y tasa de conversión para afinar la estrategia",
            ],
          },
        },

        meta: {
          title:
            "Servicios de Optimización de la Tasa de Conversión | Estrategias de Crecimiento Basadas en Datos",
          description:
            "Aumenta las conversiones 200-400% con nuestro marco científico de CRO. Optimización integral, desde auditorías de análisis hasta pruebas multivariantes.",
          keywords:
            "optimización de tasa de conversión, servicios de CRO, optimización de conversión en sitio web, aumentar ventas en línea, servicios de pruebas A/B",
        },
      },
      technicalSeo: {
        hero: {
          titlePart1: "Auditorías técnicas de SEO que",
          highlightedTitle: "corrigen problemas de Core Web Vitals",
          titlePart2: "",
          subtitle:
            "Análisis completo de la salud del rastreo + correcciones prioritarias para eliminar penalizaciones de Google y mejorar posicionamientos",
          button: "Solicitar Auditoría Gratis →",
          imageAlt: "Tablero de análisis de salud de rastreo web",
          trustMetrics: {
            pages: {
              value: "2.1M+",
              label: "Páginas analizadas",
            },
            fixes: {
              value: "94%",
              label: "Problemas de rastreo corregidos",
            },
            time: {
              value: "48h",
              label: "Tiempo promedio de corrección",
            },
          },
        },

        services: {
          title: "Soluciones Técnicas de SEO Empresarial",
          description:
            "Detrás de cada sitio web de alto rendimiento hay un SEO técnico que funciona como cableado invisible - impecable y esencial. Nuestras soluciones empresariales abordan la infraestructura oculta que impulsa tu éxito en línea. Optimizamos los 32 elementos técnicos que Google prioriza, garantizando que tu sitio cargue más rápido que la competencia, aparezca en búsquedas locales críticas y convierta visitantes como relojería. Desde seguridad a prueba de balas hasta experiencias móviles tipo app, construimos sitios que los motores de búsqueda premian y los clientes recuerdan.",
          speedBoost: {
            title: "Paquete de Aceleración",
            description:
              "Haz que tu sitio cargue más rápido que la competencia",
            features: [
              "Optimización de imágenes para carga rápida",
              "Corrección de cambios de diseño durante la carga",
              "Ajustes móviles para velocidad",
              "Caché inteligente para visitantes recurrentes",
            ],
          },
          searchVisibility: {
            title: "Correcciones de Visibilidad",
            description: "Aparece en Google incluso con sitios complejos",
            features: [
              "Aseguramos indexación completa de contenido",
              "Corregimos texto/imágenes faltantes en búsquedas",
              "Optimización de contenido dinámico",
              "Mejor presencia móvil en búsquedas",
            ],
          },
          richResults: {
            title: "Resultados Enriquecidos",
            description: "Destaca tus listados en Google",
            features: [
              "Previsualizaciones de FAQ en búsquedas",
              "Información comercial en Google Maps",
              "Destacamos eventos/especiales",
              "Artículos prominentes en resultados",
            ],
          },
          security: {
            title: "Protección de Seguridad",
            description: "Mantén seguro tu sitio y clientes",
            features: [
              "Actualizaciones automáticas de seguridad",
              "Protección contra malware/virus",
              "Cumplimiento de leyes de privacidad",
              "Protección de datos de clientes",
            ],
          },
          globalReach: {
            title: "Configuración Global",
            description: "Atrae clientes internacionales",
            features: [
              "Soporte multilingüe",
              "Mostrar moneda local",
              "Contenido específico por país",
              "Optimización global para búsquedas",
            ],
          },
          fastSites: {
            title: "Sitios Ultra Rápidos",
            description: "Páginas que cargan al instante",
            features: [
              "Entrega inteligente de contenido",
              "Ajustes automáticos de rendimiento",
              "Optimización móvil first",
              "Reducción de tasas de rebote",
            ],
          },
          appExperience: {
            title: "Experiencia tipo App",
            description: "Funcionalidades móviles avanzadas",
            features: [
              "Acceso offline a contenido",
              "Notificaciones push",
              "Instalación en pantalla principal",
              "Experiencia móvil fluida",
            ],
          },
          integrations: {
            title: "Integraciones Externas",
            description: "Conexión sin afectar velocidad",
            features: [
              "Sistemas de pago rápidos",
              "Formularios de contacto optimizados",
              "Integración con redes sociales",
              "Sincronización de inventario",
            ],
          },
        },

        methodology: {
          title: "Proceso de Auditoría en 5 Pasos",
          description:
            "Nuestro sistema comprobado revela barreras técnicas ocultas que afectan tu posicionamiento y experiencia de usuario. Analizando 53+ factores críticos - desde mobile friendliness hasta vulnerabilidades de seguridad - identificamos exactamente por qué te supera la competencia. Obtendrás soluciones claras para velocidad lenta, navegación confusa y errores móviles que alejan a los visitantes. A diferencia de informes genéricos, nos enfocamos en soluciones prácticas adaptadas al mercado competitivo de Florida Central.",

          steps: [
            {
              title: "Escaneo Completo de Salud",
              description:
                "Revisamos cada página como Google - encontramos errores ocultos",
            },
            {
              title: "Plan de Aceleración",
              description:
                "Corregimos páginas lentas (especialmente en móviles)",
            },
            {
              title: "Verificación de Visibilidad",
              description:
                "Aseguramos que Google muestre tus páginas correctas",
            },
            {
              title: "Chequeo Seguridad/Móvil",
              description:
                "Protección de datos + corrección de errores móviles",
            },
            {
              title: "Plan de Mejora Continua",
              description: "Revisiones mensuales para crecimiento sostenido",
            },
          ],
        },

        faqs: {
          heading: "Preguntas Frecuentes de SEO Técnico",
          1: {
            question:
              "¿Qué tan rápido mejorarán las correcciones técnicas de SEO nuestro posicionamiento?",
            answer:
              "Las correcciones prioritarias muestran impacto en 48-72 horas para problemas críticos como:",
            details: [
              "Optimización de Core Web Vitals (LCP, CLS, FID)",
              "Emergencias de indexación excesiva con 1M+ páginas",
              "Fugas críticas de presupuesto de rastreo",
              "Implementaciones rotas de hreflang",
            ],
          },
          2: {
            question: "¿Manejan SPAs pesados en JavaScript?",
            answer: "Especialistas en retos modernos de JavaScript SEO:",
            details: [
              "Análisis de renderizado del lado del cliente",
              "Inspección de Shadow DOM",
              "Optimización de imports dinámicos",
              "Manejo de fragmentos hash rastreables",
              "83% de SPAs recuperan indexación en 14 días",
            ],
          },
          3: {
            question:
              "¿Qué incluye el análisis de presupuesto de rastreo empresarial?",
            answer: "Para sitios con 1M+ páginas, monitoreamos:",
            details: [
              "Patrones de frecuencia de rastreo de Googlebot",
              "Identificación de páginas huérfanas",
              "Trampas de parámetros URL",
              "Problemas de secuencia de paginación",
              "37% mejora promedio en eficiencia de rastreo",
            ],
          },
          4: {
            question: "¿Cómo corrigen la indexación excesiva?",
            answer: "Protocolo de emergencia 24/7 para inundaciones de índice:",
            details: [
              "Bloqueo de parámetros problemáticos",
              "Reparación de cadenas canónicas",
              "Desautorizaciones quirúrgicas en robots.txt",
              "Implementación en cascada de noindex",
              "Caso reciente: 1.2M → 200K páginas válidas en 14 días",
            ],
          },
          5: {
            question: "¿Resuelven conflictos internacionales de hreflang?",
            answer: "Validación completa de hreflang incluyendo:",
            details: [
              "Validación de códigos idioma-región",
              "Manejo de X-default",
              "Conflictos en headers HTTP",
              "Verificación de consistencia en sitemaps",
              "Caso de estudio: 212% aumento en tráfico internacional",
            ],
          },
          6: {
            question: "¿Cuál es su proceso de SEO para JavaScript?",
            answer: "Análisis integral de renderizado JS:",
            details: [
              "Mapeo de contenido lazy-loaded",
              "Optimización de imports dinámicos",
              "Puntos de fuga de presupuesto de rastreo",
              "Inspección de Shadow DOM",
              "81% de páginas JS recuperadas en índice",
            ],
          },
          7: {
            question: "¿Cómo monitorean Core Web Vitals?",
            answer: "Seguimiento en tiempo real con:",
            details: [
              "Priorización de elementos LCP",
              "Análisis de raíz de cambios CLS",
              "Auditoría de scripts third-party para FID",
              "Integración de datos RUM",
              "93% de clientes cumplen metas CWV",
            ],
          },
          8: {
            question: "¿Manejan conflictos de parámetros URL?",
            answer: "Soluciones empresariales para parámetros:",
            details: [
              "Reglas dinámicas para parámetros",
              "Aislamiento de session IDs",
              "Eliminación de parámetros de tracking",
              "Consolidación de secuencias de paginación",
              "Auditoría de 2.8M páginas en 24h",
            ],
          },
          9: {
            question: "¿Qué incluye el monitoreo continuo?",
            answer: "Vigilancia nivel empresarial:",
            details: [
              "Alertas diarias de anomalías de rastreo",
              "Reportes delta de indexación",
              "Análisis de tendencias CWV",
              "Seguimiento de errores JS",
              "Integración con Slack/MS Teams",
            ],
          },
          10: {
            question:
              "¿Qué tan urgentes son las correcciones de páginas huérfanas?",
            answer: "Prioridad crítica debido a:",
            details: [
              "Pérdida de presupuesto de rastreo (22% ahorro promedio)",
              "Conflictos de indexación",
              "Pérdida de equity de enlaces internos",
              "Rotura de flujos de conversión",
              "Respuesta de emergencia en 48h disponible",
            ],
          },
        },

        metadata: {
          title:
            "Auditorías y Soluciones de SEO Técnico – Velocidad, Seguridad y Core Web Vitals",
          description:
            "Corrige tiempos de carga lentos, errores de rastreo y problemas de Core Web Vitals. Nuestras auditorías técnicas priorizan el rendimiento, la seguridad y el posicionamiento en Google.",
          og_title:
            "Corrige Core Web Vitals y Mejora tu Posicionamiento – Auditorías Técnicas SEO Efectivas",
          og_description:
            "Auditorías de SEO técnico de nivel empresarial que detectan problemas ocultos del sitio y ofrecen soluciones prioritarias para mejorar en Google. Sitios rápidos, seguros y listos para escalar.",
        },
      },
      finalCta: {
        heading: "¿Listo para dominar los resultados de búsqueda en Clermont?",
        subheading:
          "Obtén tu plan personalizado de SEO local - comprobado con más de 15 negocios en Florida Central",
        button: "Comenzar mi Dominio en SEO Local →",
      },
      templates: {
        card: {
          viewDetails: "Ver Detalles",
        },
        index: {
          subtitle: "Nuestra Colección",
          title: "Plantillas Web Revolucionarias",
          description:
            "Explora nuestra colección de plantillas Nuxt de alto rendimiento, optimizadas para SEO y con un diseño increíble. Creadas para la velocidad y el éxito.",
          meta: {
            title: "Plantillas de Sitios Web | Tu Nombre de Empresa",
            description:
              "Descubre plantillas premium de Nuxt.js diseñadas para el rendimiento, SEO y experiencia de usuario. Perfectas para negocios, portafolios y SaaS.",
          },
        },
        detail: {
          oneTime: "pago único",
          livePreview: "Vista Previa",
          purchase: "Comprar Plantilla",
          featuresTitle: "¿Qué está incluido?",
          featuresDescription:
            "Cada plantilla viene con características esenciales para que puedas empezar de inmediato.",
          whyChooseTitle: "La Filosofía Detrás",
          techStackTitle: "Tecnologías Utilizadas",
          techStackDescription:
            "Construido con un conjunto de herramientas modernas, mantenibles y potentes que los desarrolladores adoran.",
          notFound: "¡Ups! Plantilla no encontrada.",
          comingSoon: "Próximamente",
          notifyMe: "Notificarme Cuando Esté Disponible",
          meta: {
            title: "Plantilla {templateName} | Tu Nombre de Empresa",
            comingSoonTitle:
              "Próximamente: {templateName} | Tu Nombre de Empresa",
          },
        },
        data: {
          // --- QuickBite Data ---
          quickbite: {
            name: "Plantilla de Restaurante QuickBite",
            description:
              "Un sitio web de menú de marca blanca para restaurantes, cafés o negocios de comida para llevar. Hecho para el rendimiento y la escala.",
            longDescription:
              "QuickBite es una plantilla pensada para desarrolladores, freelancers y agencias. Integra un sistema de menú completo, un formulario para pedidos de recogida y un blog, todo configurado para el rendimiento, SEO y escalabilidad del mundo real.",
            whyChoose:
              "Está construida como un desarrollador construiría un proyecto real, no como esas librerías de plantillas sobre-diseñadas. El objetivo es reducir el tiempo de producción a la mitad. Es DRY, legible y hecha para la personalización real.",
            features: {
              menu: {
                title: "Sistema de Menú Completo",
                description:
                  "Gestiona fácilmente categorías y productos para un menú de restaurante dinámico y atractivo.",
              },
              pickup: {
                title: "Lógica de Recogida/Carrito",
                description:
                  "Gestión de estado del carrito integrada con Pinia para un proceso de pedido de recogida fluido.",
              },
              blog: {
                title: "Blog Integrado",
                description:
                  "Potenciado por Nuxt/Content para una gestión de blogs y artículos sencilla, al estilo CMS.",
              },
              performance: {
                title: "Rendimiento Optimizado",
                description:
                  "Construido para Core Web Vitals de primer nivel, optimización de imágenes y carga rápida.",
              },
            },
          },
          // --- Realtor Data ---
          realtor: {
            name: "Plantilla Realtor-Edge",
            description:
              "La plantilla definitiva para agentes inmobiliarios, agencias y vendedores de propiedades. Próximamente.",
            longDescription:
              "Muestra propiedades como nunca antes. Realtor-Edge proporcionará una solución completa para profesionales de bienes raíces, incluyendo perfiles de agentes, hermosos listados de propiedades con páginas de información detallada y búsqueda avanzada.",
            whyChoose:
              "Diseñada para convertir visitantes en clientes potenciales, esta plantilla se centrará en imágenes de alta calidad, navegación intuitiva y en proporcionar toda la información crítica que los compradores necesitan al alcance de la mano.",
            features: {
              profiles: {
                title: "Perfiles de Agente",
                description:
                  "Páginas dedicadas para que los agentes generen confianza y muestren su experiencia.",
              },
              listings: {
                title: "Listados Dinámicos",
                description:
                  "Un sistema potente y filtrable para mostrar todas las propiedades disponibles de forma atractiva.",
              },
              search: {
                title: "Búsqueda Avanzada",
                description:
                  "Permite a los usuarios encontrar la casa perfecta filtrando por precio, tamaño, ubicación y más.",
              },
              maps: {
                title: "Integración de Mapas",
                description:
                  "Visualiza la ubicación de las propiedades y los servicios cercanos con mapas integrados.",
              },
            },
          },
          // --- Existing Data ---
          nexus: {
            name: "Nexus Corporativo",
            description:
              "Una plantilla elegante y moderna para empresas SaaS, startups y negocios corporativos.",
            longDescription:
              "Nexus Corporativo es la solución definitiva para empresas que buscan establecer una fuerte presencia en línea. Presenta un diseño limpio, tiempos de carga rápidos y todas las secciones que una empresa moderna necesita.",
            whyChoose:
              "Esta plantilla prioriza la claridad y el profesionalismo, permitiendo que la propuesta de valor de su negocio brille sin desorden innecesario. Es una base sólida como una roca para cualquier sitio corporativo.",
            features: {
              /* ... as before ... */
            },
          },
          portfolio: {
            name: "Portafolio Creativo",
            description:
              "Una plantilla minimalista y elegante para mostrar tu trabajo y proyectos creativos.",
            longDescription:
              "Diseñada para artistas, diseñadores y desarrolladores, esta plantilla de portafolio se centra en tu trabajo. Incluye hermosas galerías, animaciones suaves y un formulario de contacto.",
            whyChoose:
              "En un campo creativo, tu trabajo debe hablar por sí mismo. Esta plantilla se quita de en medio, proporcionando un lienzo limpio y elegante para hacer que tus proyectos sean los protagonistas.",
            features: {
              /* ... as before ... */
            },
          },
        },
      },
    },
  },
}));
