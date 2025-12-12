<template>
  <section class="container mx-auto px-4">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Hero Section -->
      <div
        class="w-full lg:py-14 py-8 justify-center items-center lg:gap-4 gap-8 grid lg:grid-cols-2 grid-cols-1"
      >
        <div
          class="flex-col justify-start lg:items-start items-center lg:gap-20 gap-10 inline-flex"
        >
          <div
            class="flex-col justify-start lg:items-start items-center lg:gap-12 gap-10 flex"
          >
            <div
              class="flex-col justify-start lg:items-start items-center gap-4 flex"
            >
              <h1
                class="sm:text-6xl text-5xl font-semibold font-manrope sm:leading-snug leading-snug lg:text-start text-center"
              >
                Lake County
                <span class="text-purple-600">SEO & Web Design</span>
                Services
              </h1>
              <h2 class="text-2xl">Expert Local Digital Marketing Solutions</h2>
              <p
                class="text-lg font-normal leading-relaxed lg:text-start text-center"
              >
                Based in Four Corners, strategically positioned to serve Clermont, Groveland, Minneola, Leesburg, and all of Lake County with professional web development and SEO services.
              </p>
            </div>
            <div
              class="w-full lg:justify-start justify-center items-start gap-8 flex sm:flex-row flex-col"
            >
              <button
                class="sm:w-fit w-full px-5 py-2.5 bg-purple-600 hover:bg-purple-700 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
              >
                <NuxtLink
                  to="/appointments"
                  class="px-2 py-px text-white text-base font-semibold leading-relaxed"
                  >Get Your Free SEO Audit</NuxtLink
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M4.58498 4.99988L9.58519 10.0001L4.58203 15.0032M10.4183 4.99988L15.4185 10.0001L10.4154 15.0032"
                    stroke="white"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <!-- Trust Signals -->
          <div class="grid grid-cols-3 gap-4">
            <div class="border-r pr-4">
              <div class="text-2xl font-bold">9+</div>
              <div class="text-sm">Years Experience</div>
            </div>
            <div class="border-r pr-4">
              <div class="text-2xl font-bold">20+</div>
              <div class="text-sm">Local Clients</div>
            </div>
            <div>
              <div class="text-2xl font-bold">100%</div>
              <div class="text-sm">Success Rate</div>
            </div>
          </div>
        </div>
        <NuxtImg
          provider="cloudinary"
          width="540"
          height="540"
          src="v1744048124/local-clermont-orlando-web-services_agc8hg.png"
          alt="Lake County Clermont SEO and Web Design Services"
          class="mx-auto h-auto w-full"
        />
      </div>

      <!-- Cities We Serve -->
      <div class="py-16">
        <h2 class="text-4xl font-bold text-center mb-12">
          Serving All of Lake County
        </h2>
        <div class="grid md:grid-cols-3 gap-6 text-center">
          <div class="p-6 bg-muted rounded-2xl">
            <Icon name="mdi:map-marker" class="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 class="text-2xl font-bold mb-3">Clermont</h3>
            <p>SEO and web design for businesses in Lake County's fastest-growing city</p>
          </div>
          <div class="p-6 bg-muted rounded-2xl">
            <Icon name="mdi:map-marker" class="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 class="text-2xl font-bold mb-3">Groveland & Minneola</h3>
            <p>Digital marketing solutions for rapidly expanding communities along Highway 27</p>
          </div>
          <div class="p-6 bg-muted rounded-2xl">
            <Icon name="mdi:map-marker" class="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 class="text-2xl font-bold mb-3">Leesburg & Mount Dora</h3>
            <p>Web development and local SEO for established Lake County communities</p>
          </div>
        </div>
      </div>

      <!-- Key Services Grid -->
      <div class="grid md:grid-cols-3 gap-12 py-16">
        <div v-for="(service, i) in services" :key="i" class="service-card">
          <div class="icon-wrapper">
            <Icon :name="service.icon" class="w-12 h-12 text-purple-600" />
          </div>
          <h3 class="text-2xl font-bold my-6">{{ service.title }}</h3>
          <p class="mb-6">{{ service.description }}</p>
        </div>
      </div>

      <!-- Why Choose Us for Lake County -->
      <div class="border border-purple-500 p-12 rounded-2xl mb-20">
        <h2 class="text-4xl font-bold text-center mb-12">
          Why Choose Us for Lake County SEO & Web Design?
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          <div
            v-for="(benefit, i) in benefits"
            :key="i"
            class="bg-muted p-6 rounded-2xl shadow-sm"
          >
            <h3 class="text-xl font-bold mb-4">{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </div>
        </div>
      </div>

      <!-- Local SEO Keywords Section -->
      <div class="py-16 bg-purple-600 rounded-2xl px-8 mb-16">
        <h2 class="text-3xl font-bold text-center mb-8 text-white">
          Helping Lake County Businesses Rank for Local Searches
        </h2>
        <p class="text-lg text-center mb-12 max-w-3xl mx-auto text-white">
          Our SEO strategies help you dominate local search results for keywords like "SEO Clermont," "web design Groveland," "digital marketing Lake County," and more.
        </p>
        <div class="grid md:grid-cols-4 gap-4 text-center">
          <div class="p-4 bg-white dark:bg-purple-800 rounded-lg">
            <p class="font-semibold text-purple-900 dark:text-white">SEO Clermont</p>
          </div>
          <div class="p-4 bg-white dark:bg-purple-800 rounded-lg">
            <p class="font-semibold text-purple-900 dark:text-white">Web Design Clermont</p>
          </div>
          <div class="p-4 bg-white dark:bg-purple-800 rounded-lg">
            <p class="font-semibold text-purple-900 dark:text-white">Groveland SEO</p>
          </div>
          <div class="p-4 bg-white dark:bg-purple-800 rounded-lg">
            <p class="font-semibold text-purple-900 dark:text-white">Minneola Marketing</p>
          </div>
          <div class="p-4 bg-white dark:bg-purple-800 rounded-lg">
            <p class="font-semibold text-purple-900 dark:text-white">Leesburg Web Design</p>
          </div>
          <div class="p-4 bg-white dark:bg-purple-800 rounded-lg">
            <p class="font-semibold text-purple-900 dark:text-white">Mount Dora SEO</p>
          </div>
          <div class="p-4 bg-white dark:bg-purple-800 rounded-lg">
            <p class="font-semibold text-purple-900 dark:text-white">Lake County Web Developer</p>
          </div>
          <div class="p-4 bg-white dark:bg-purple-800 rounded-lg">
            <p class="font-semibold text-purple-900 dark:text-white">Lake County Marketing</p>
          </div>
        </div>
      </div>

      <CallToAction />
    </div>
  </section>
</template>

<script setup>
import CallToAction from "../../components/CallToAction.vue";

// Services
const services = [
  {
    icon: "mdi:search-web",
    title: "Lake County SEO Services",
    description:
      "Dominate local search results in Clermont, Groveland, and throughout Lake County with proven SEO strategies.",
  },
  {
    icon: "mdi:code-braces",
    title: "Custom Web Development",
    description:
      "Fast, professional websites built for Lake County businesses—from small local shops to growing enterprises.",
  },
  {
    icon: "mdi:chart-line",
    title: "Local Digital Marketing",
    description:
      "Complete digital marketing solutions for Lake County—Google Ads, social media, and reputation management.",
  },
];

// Benefits
const benefits = [
  {
    title: "Based Right Here in Lake County",
    description:
      "Our Four Corners location is technically in Lake County, making us true locals who understand the community, culture, and business landscape.",
  },
  {
    title: "Deep Local Market Knowledge",
    description:
      "We've watched Clermont and Lake County grow rapidly. We understand the unique challenges of marketing in a fast-growing suburban market between Orlando and The Villages.",
  },
  {
    title: "Proven Track Record",
    description:
      "9+ years helping Lake County businesses—from Clermont to Leesburg—increase visibility, drive local traffic, and grow their customer base.",
  },
  {
    title: "Personal Service, Big Results",
    description:
      "As a local business ourselves, we provide personalized attention and dedication you won't get from big agencies in Orlando or Tampa.",
  },
];

useHead({
  title: "Lake County & Clermont SEO, Web Design Services | Christopher Bermudez",
  meta: [
    {
      name: "description",
      content:
        "Expert SEO and web design services for Clermont, Groveland, Minneola, Leesburg, and all of Lake County. Based in Four Corners. Call (352) 978-4435.",
    },
    {
      property: "og:title",
      content: "Lake County & Clermont SEO, Web Design Services",
    },
    {
      property: "og:description",
      content:
        "Professional SEO and web development for Lake County businesses. Serving Clermont, Groveland, and surrounding areas.",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "SEO and Web Design Services",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Christopher Bermudez Web Services",
          "telephone": "+1-352-978-4435",
          "url": "https://christopherbermudez.com",
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Clermont",
            "containedIn": {
              "@type": "AdministrativeArea",
              "name": "Lake County, FL"
            }
          },
          {
            "@type": "City",
            "name": "Groveland",
            "containedIn": {
              "@type": "AdministrativeArea",
              "name": "Lake County, FL"
            }
          },
          {
            "@type": "City",
            "name": "Minneola",
            "containedIn": {
              "@type": "AdministrativeArea",
              "name": "Lake County, FL"
            }
          },
          {
            "@type": "City",
            "name": "Leesburg",
            "containedIn": {
              "@type": "AdministrativeArea",
              "name": "Lake County, FL"
            }
          },
          {
            "@type": "City",
            "name": "Mount Dora",
            "containedIn": {
              "@type": "AdministrativeArea",
              "name": "Lake County, FL"
            }
          }
        ],
        "description":
          "Professional SEO and web design services for businesses throughout Lake County, Florida, including Clermont and surrounding cities.",
      }),
    },
  ],
});
</script>
