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
                Orlando & Orange County
                <span class="text-purple-600">SEO & Web Design</span>
                Services
              </h1>
              <h2 class="text-2xl">Expert Local Digital Marketing Solutions</h2>
              <p
                class="text-lg font-normal leading-relaxed lg:text-start text-center"
              >
                Based in Four Corners, strategically positioned to serve Orlando, Winter Garden, Windermere, Ocoee, Apopka, and all of Orange County with professional web development and SEO services.
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
          alt="Orange County Orlando SEO and Web Design Services"
          class="mx-auto h-auto w-full"
        />
      </div>

      <!-- Cities We Serve -->
      <div class="py-16">
        <h2 class="text-4xl font-bold text-center mb-12">
          Serving All of Orange County
        </h2>
        <div class="grid md:grid-cols-3 gap-6 text-center">
          <div class="p-6 bg-muted rounded-2xl">
            <Icon name="mdi:map-marker" class="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 class="text-2xl font-bold mb-3">Orlando</h3>
            <p>SEO services for downtown Orlando businesses, tourist districts, and local companies</p>
          </div>
          <div class="p-6 bg-muted rounded-2xl">
            <Icon name="mdi:map-marker" class="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 class="text-2xl font-bold mb-3">Winter Garden & Windermere</h3>
            <p>Web design and local SEO for premium residential and commercial areas</p>
          </div>
          <div class="p-6 bg-muted rounded-2xl">
            <Icon name="mdi:map-marker" class="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 class="text-2xl font-bold mb-3">Ocoee & Apopka</h3>
            <p>Digital marketing solutions for growing businesses in North Orange County</p>
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

      <!-- Why Choose Us for Orange County -->
      <div class="border border-purple-500 p-12 rounded-2xl mb-20">
        <h2 class="text-4xl font-bold text-center mb-12">
          Why Choose Us for Orange County SEO & Web Design?
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
          Helping Orange County Businesses Rank for Local Searches
        </h2>
        <p class="text-lg text-center mb-12 max-w-3xl mx-auto text-white">
          Our SEO strategies help you dominate local search results for keywords like "web designer near me," "SEO services Orlando," "website development Winter Garden," and more.
        </p>
        <div class="grid md:grid-cols-4 gap-4 text-center">
          <div class="p-4 bg-white dark:bg-purple-800 rounded-lg">
            <p class="font-semibold text-purple-900 dark:text-white">SEO Orlando</p>
          </div>
          <div class="p-4 bg-white dark:bg-purple-800 rounded-lg">
            <p class="font-semibold text-purple-900 dark:text-white">Web Design Orlando</p>
          </div>
          <div class="p-4 bg-white dark:bg-purple-800 rounded-lg">
            <p class="font-semibold text-purple-900 dark:text-white">Orlando Marketing</p>
          </div>
          <div class="p-4 bg-white dark:bg-purple-800 rounded-lg">
            <p class="font-semibold text-purple-900 dark:text-white">Winter Garden SEO</p>
          </div>
          <div class="p-4 bg-white dark:bg-purple-800 rounded-lg">
            <p class="font-semibold text-purple-900 dark:text-white">Windermere Web Design</p>
          </div>
          <div class="p-4 bg-white dark:bg-purple-800 rounded-lg">
            <p class="font-semibold text-purple-900 dark:text-white">Ocoee SEO Services</p>
          </div>
          <div class="p-4 bg-white dark:bg-purple-800 rounded-lg">
            <p class="font-semibold text-purple-900 dark:text-white">Apopka Web Developer</p>
          </div>
          <div class="p-4 bg-white dark:bg-purple-800 rounded-lg">
            <p class="font-semibold text-purple-900 dark:text-white">Orange County SEO</p>
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
    title: "Orlando SEO Services",
    description:
      "Dominate local search results in Orlando and Orange County with data-driven SEO strategies that bring real results.",
  },
  {
    icon: "mdi:code-braces",
    title: "Custom Web Development",
    description:
      "Fast, modern websites built with the latest technologies. Perfect for Orlando businesses looking to stand out online.",
  },
  {
    icon: "mdi:chart-line",
    title: "Local Digital Marketing",
    description:
      "Complete digital marketing solutions tailored for Orange County businesses, from social media to PPC advertising.",
  },
];

// Benefits
const benefits = [
  {
    title: "Strategically Located in Four Corners",
    description:
      "Our Four Corners location puts us at the crossroads of Orange, Lake, Polk, and Osceola counties, giving us unique insight into Central Florida's diverse markets.",
  },
  {
    title: "Deep Knowledge of Orlando Market",
    description:
      "We understand Orlando's unique business landscape—from tourism-driven downtown to residential communities like Winter Garden and Windermere.",
  },
  {
    title: "Proven Track Record",
    description:
      "9+ years helping Orange County businesses increase their online visibility, drive more traffic, and generate quality leads through SEO and web design.",
  },
  {
    title: "Transparent Pricing & Communication",
    description:
      "No hidden fees or confusing contracts. We believe in clear communication and delivering measurable results you can track.",
  },
];

useHead({
  title: "Orange County & Orlando SEO, Web Design Services | Christopher Bermudez",
  meta: [
    {
      name: "description",
      content:
        "Expert SEO and web design services for Orlando, Winter Garden, Windermere, Ocoee, Apopka, and all of Orange County. Based in Four Corners. Call (352) 978-4435.",
    },
    {
      property: "og:title",
      content: "Orange County & Orlando SEO, Web Design Services",
    },
    {
      property: "og:description",
      content:
        "Professional SEO and web development for Orange County businesses. Serving Orlando, Winter Garden, Windermere, and surrounding areas.",
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
            "name": "Orlando",
            "containedIn": {
              "@type": "AdministrativeArea",
              "name": "Orange County, FL"
            }
          },
          {
            "@type": "City",
            "name": "Winter Garden",
            "containedIn": {
              "@type": "AdministrativeArea",
              "name": "Orange County, FL"
            }
          },
          {
            "@type": "City",
            "name": "Windermere",
            "containedIn": {
              "@type": "AdministrativeArea",
              "name": "Orange County, FL"
            }
          },
          {
            "@type": "City",
            "name": "Ocoee",
            "containedIn": {
              "@type": "AdministrativeArea",
              "name": "Orange County, FL"
            }
          },
          {
            "@type": "City",
            "name": "Apopka",
            "containedIn": {
              "@type": "AdministrativeArea",
              "name": "Orange County, FL"
            }
          }
        ],
        "description":
          "Professional SEO and web design services for businesses throughout Orange County, Florida, including Orlando and surrounding cities.",
      }),
    },
  ],
});
</script>
