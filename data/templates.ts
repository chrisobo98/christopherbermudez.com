// data/templates.ts

// Define the structure of a template for type safety
export interface Template {
  id: string;
  nameKey: string;
  descriptionKey: string;
  longDescriptionKey: string;
  whyChooseKey: string; // NEW: For the philosophy/value prop
  imageUrl: string;
  price: number;
  tags: string[];
  livePreviewUrl: string;
  features: {
    icon: string;
    titleKey: string;
    descriptionKey: string;
  }[];
  techStack?: string[]; // NEW & OPTIONAL: For showcasing the tech stack
  isComingSoon?: boolean; // NEW & OPTIONAL: For the "Coming Soon" state
}

// Your list of templates for sale
export const templates: Template[] = [
  // --- NEW: QUICKBITE TEMPLATE ---
  {
    id: 'quick-bite',
    nameKey: 'templates.data.quickbite.name',
    descriptionKey: 'templates.data.quickbite.description',
    longDescriptionKey: 'templates.data.quickbite.longDescription',
    whyChooseKey: 'templates.data.quickbite.whyChoose',
    imageUrl: 'v1751978159/quickbitecompressed_mvkqnu.jpg', // TODO: Replace with a real QuickBite screenshot
    price: 99,
    tags: ['Restaurant', 'Food', 'Nuxt', 'Takeout'],
    livePreviewUrl: 'https://quickbiteorlando.netlify.app/',
    features: [
      { icon: 'carbon:restaurant', titleKey: 'templates.data.quickbite.features.menu.title', descriptionKey: 'templates.data.quickbite.features.menu.description' },
      { icon: 'carbon:shopping-cart', titleKey: 'templates.data.quickbite.features.pickup.title', descriptionKey: 'templates.data.quickbite.features.pickup.description' },
      { icon: 'carbon:blog', titleKey: 'templates.data.quickbite.features.blog.title', descriptionKey: 'templates.data.quickbite.features.blog.description' },
      { icon: 'carbon:flash', titleKey: 'templates.data.quickbite.features.performance.title', descriptionKey: 'templates.data.quickbite.features.performance.description' },
    ],
    techStack: [
      'Nuxt 3', 'TypeScript', 'Tailwind CSS', 'Pinia', '@nuxt/content', '@nuxt/image', '@nuxtjs/i18n', '@nuxtjs/seo', '@nuxtjs/device', '@nuxt/fonts', 'nuxt-vitalizer', 'nuxt-gtag', '@nuxt/icon'
    ]
  },
  // --- NEW: COMING SOON REALTOR TEMPLATE ---
  {
    id: 'realtor-edge',
    nameKey: 'templates.data.realtor.name',
    descriptionKey: 'templates.data.realtor.description',
    longDescriptionKey: 'templates.data.realtor.longDescription',
    whyChooseKey: 'templates.data.realtor.whyChoose',
    imageUrl: 'v1752017416/comingsoon_seeyg4.png', // TODO: Replace with a real Realtor template placeholder image
    price: 149,
    tags: ['Realtor', 'Real Estate', 'Coming Soon'],
    livePreviewUrl: '#',
    isComingSoon: true,
    features: [
        { icon: 'carbon:user-avatar', titleKey: 'templates.data.realtor.features.profiles.title', descriptionKey: 'templates.data.realtor.features.profiles.description' },
        { icon: 'carbon:home', titleKey: 'templates.data.realtor.features.listings.title', descriptionKey: 'templates.data.realtor.features.listings.description' },
        { icon: 'carbon:search-locate', titleKey: 'templates.data.realtor.features.search.title', descriptionKey: 'templates.data.realtor.features.search.description' },
        { icon: 'carbon:map', titleKey: 'templates.data.realtor.features.maps.title', descriptionKey: 'templates.data.realtor.features.maps.description' },
    ]
  },
  // --- Your existing templates ---
//   {
//     id: 'nexus-corporate',
//     nameKey: 'templates.data.nexus.name',
//     descriptionKey: 'templates.data.nexus.description',
//     longDescriptionKey: 'templates.data.nexus.longDescription',
//     whyChooseKey: 'templates.data.nexus.whyChoose',
//     imageUrl: 'v1744048968/about-christopher-bermudez-central-florida-leading-freelancer_cluuum.png',
//     price: 49,
//     tags: ['Corporate', 'SaaS', 'Modern'],
//     livePreviewUrl: 'https://example.com/nexus-preview',
//     features: [
//       { icon: 'carbon:flash', titleKey: 'templates.data.nexus.features.fast.title', descriptionKey: 'templates.data.nexus.features.fast.description' },
//       { icon: 'carbon:mobile', titleKey: 'templates.data.nexus.features.responsive.title', descriptionKey: 'templates.data.nexus.features.responsive.description' },
//       { icon: 'carbon:pen-fountain', titleKey: 'templates.data.nexus.features.cms.title', descriptionKey: 'templates.data.nexus.features.cms.description' },
//       { icon: 'carbon:search', titleKey: 'templates.data.nexus.features.seo.title', descriptionKey: 'templates.data.nexus.features.seo.description' },
//     ]
//   },
//   {
//     id: 'creative-portfolio',
//     nameKey: 'templates.data.portfolio.name',
//     descriptionKey: 'templates.data.portfolio.description',
//     longDescriptionKey: 'templates.data.portfolio.longDescription',
//     whyChooseKey: 'templates.data.portfolio.whyChoose',
//     imageUrl: 'v1744049301/christopher-bermudez-web-services-headshot_oxlgnf.png',
//     price: 29,
//     tags: ['Portfolio', 'Creative', 'Minimalist'],
//     livePreviewUrl: 'https://example.com/portfolio-preview',
//     features: [
//         { icon: 'carbon:image-search', titleKey: 'templates.data.portfolio.features.gallery.title', descriptionKey: 'templates.data.portfolio.features.gallery.description' },
//         { icon: 'carbon:magic-wand', titleKey: 'templates.data.portfolio.features.animations.title', descriptionKey: 'templates.data.portfolio.features.animations.description' },
//         { icon: 'carbon:blog', titleKey: 'templates.data.portfolio.features.blog.title', descriptionKey: 'templates.data.portfolio.features.blog.description' },
//         { icon: 'carbon:email', titleKey: 'templates.data.portfolio.features.contact.title', descriptionKey: 'templates.data.portfolio.features.contact.description' },
//     ]
//   },
];