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
                Polk County
                <span class="text-purple-600">SEO & Web Design</span>
                Services
              </h1>
              <h2 class="text-2xl">Expert Local Digital Marketing Solutions</h2>
              <p
                class="text-lg font-normal leading-relaxed lg:text-start text-center"
              >
                Based in Four Corners, strategically positioned to serve Davenport, Haines City, Polk City, Auburndale, and all of Polk County with professional web development and SEO services.
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
          alt="Polk County Davenport SEO and Web Design Services"
          class="mx-auto h-auto w-full"
        />
      </div>

      <!-- Cities We Serve -->
      <div class="py-16">
        <h2 class="text-4xl font-bold text-center mb-12">
          Serving All of Polk County
        </h2>
        <div class="grid md:grid-cols-3 gap-6 text-center">
          <div class="p-6 bg-muted rounded-2xl">
            <Icon name="mdi:map-marker" class="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 class="text-2xl font-bold mb-3">Davenport</h3>
            <p>SEO and web design for vacation rentals, hospitality, and local businesses in Davenport</p>
          </div>
          <div class="p-6 bg-muted rounded-2xl">
            <Icon name="mdi:map-marker" class="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 class="text-2xl font-bold mb-3">Haines City & Polk City</h3>
            <p>Digital marketing solutions for growing communities in central Polk County</p>
          </div>
          <div class="p-6 bg-muted rounded-2xl">
            <Icon name="mdi:map-marker" class="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 class="text-2xl font-bold mb-3">Auburndale & Lake Alfred</h3>
            <p>Web development and local SEO for small businesses in Eastern Polk County</p>
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

      <!-- Why Choose Us for Polk County -->
      <div class="border border-purple-500 p-12 rounded-2xl mb-20">
        <h2 class="text-4xl font-bold text-center mb-12">
          Why Choose Us for Polk County SEO & Web Design?
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
          Helping Polk County Businesses Rank for Local Searches
        </h2>
        <p class="text-lg text-center mb-12 max-w-3xl mx-auto text-white">
          Our SEO strategies help you dominate local search results for keywords like "SEO Davenport," "web design Haines City," "digital marketing Polk County," and more.
        </p>
        <div class="grid md:grid-cols-4 gap-4 text-center">
          <div class="p-4 bg-white dark:bg-purple-800 rounded-lg">
            <p class="font-semibold text-purple-900 dark:text-white">SEO Davenport</p>
          </div>
          <div class="p-4 bg-white dark:bg-purple-800 rounded-lg">
            <p class="font-semibold text-purple-900 dark:text-white">Web Design Davenport</p>
          </div>
          <div class="p-4 bg-white dark:bg-purple-800 rounded-lg">
            <p class="font-semibold text-purple-900 dark:text-white">Haines City SEO</p>
          </div>
          <div class="p-4 bg-white dark:bg-purple-800 rounded-lg">
            <p class="font-semibold text-purple-900 dark:text-white">Polk City Marketing</p>
          </div>
          <div class="p-4 bg-white dark:bg-purple-800 rounded-lg">
            <p class="font-semibold text-purple-900 dark:text-white">Auburndale Web Design</p>
          </div>
          <div class="p-4 bg-white dark:bg-purple-800 rounded-lg">
            <p class="font-semibold text-purple-900 dark:text-white">Polk County SEO</p>
          </div>
          <div class="p-4 bg-white dark:bg-purple-800 rounded-lg">
            <p class="font-semibold text-purple-900 dark:text-white">Lake Alfred Web Developer</p>
          </div>
          <div class="p-4 bg-white dark:bg-purple-800 rounded-lg">
            <p class="font-semibold text-purple-900 dark:text-white">Polk County Marketing</p>
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
    title: "Polk County SEO Services",
    description:
      "Dominate local search results in Davenport, Haines City, and throughout Polk County with proven SEO strategies.",
  },
  {
    icon: "mdi:code-braces",
    title: "Custom Web Development",
    description:
      "Fast, conversion-focused websites perfect for Polk County's tourism, retail, and service businesses.",
  },
  {
    icon: "mdi:chart-line",
    title: "Local Digital Marketing",
    description:
      "Complete digital marketing solutions for Polk County businesses—from social media to Google Ads management.",
  },
];

// Benefits
const benefits = [
  {
    title: "Strategically Located at Four Corners",
    description:
      "Our Four Corners base gives us direct access to Polk County and deep understanding of the area's unique business needs, from vacation rentals to local services.",
  },
  {
    title: "Tourism & Hospitality Expertise",
    description:
      "We understand Polk County's tourism economy—especially in Davenport and Champion's Gate—and know how to market vacation rentals, hotels, and attractions online.",
  },
  {
    title: "Proven Track Record",
    description:
      "9+ years helping Polk County businesses increase online visibility, drive more local traffic, and convert visitors into customers.",
  },
  {
    title: "Affordable Pricing for Local Businesses",
    description:
      "No corporate overhead. We offer competitive pricing perfect for Polk County's small and medium-sized businesses looking to grow online.",
  },
];

useHead({
  title: "Polk County & Davenport SEO, Web Design Services | Christopher Bermudez",
  meta: [
    {
      name: "description",
      content:
        "Expert SEO and web design services for Davenport, Haines City, Polk City, Auburndale, and all of Polk County. Based in Four Corners. Call (352) 978-4435.",
    },
    {
      property: "og:title",
      content: "Polk County & Davenport SEO, Web Design Services",
    },
    {
      property: "og:description",
      content:
        "Professional SEO and web development for Polk County businesses. Serving Davenport, Haines City, and surrounding areas.",
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
            "name": "Davenport",
            "containedIn": {
              "@type": "AdministrativeArea",
              "name": "Polk County, FL"
            }
          },
          {
            "@type": "City",
            "name": "Haines City",
            "containedIn": {
              "@type": "AdministrativeArea",
              "name": "Polk County, FL"
            }
          },
          {
            "@type": "City",
            "name": "Polk City",
            "containedIn": {
              "@type": "AdministrativeArea",
              "name": "Polk County, FL"
            }
          },
          {
            "@type": "City",
            "name": "Auburndale",
            "containedIn": {
              "@type": "AdministrativeArea",
              "name": "Polk County, FL"
            }
          }
        ],
        "description":
          "Professional SEO and web design services for businesses throughout Polk County, Florida, including Davenport and surrounding cities.",
      }),
    },
  ],
});
</script>
