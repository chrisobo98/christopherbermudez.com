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
                {{ t("localSeo.hero.titlePart1") }}
                <span class="text-purple-600">{{
                  t("localSeo.hero.highlightedTitle")
                }}</span>
                {{ t("localSeo.hero.titlePart2") }}
              </h1>
              <h2 class="text-2xl">{{ t("localSeo.hero.subtitle") }}</h2>
              <p
                class="text-lg font-normal leading-relaxed lg:text-start text-center"
              >
                {{ t("localSeo.hero.description") }}
              </p>
            </div>
            <div
              class="w-full lg:justify-start justify-center items-start gap-8 flex sm:flex-row flex-col"
            >
              <button
                class="sm:w-fit w-full px-5 py-2.5 bg-purple-600 hover:bg-purple-700 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
              >
                <NuxtLink
                  :to="localePath('/appointments')"
                  class="px-2 py-px text-white text-base font-semibold leading-relaxed"
                  >{{ t("localSeo.hero.button") }}</NuxtLink
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
              <div class="text-2xl font-bold">
                {{ t("localSeo.hero.trustSignals.years.value") }}
              </div>
              <div class="text-sm">
                {{ t("localSeo.hero.trustSignals.years.label") }}
              </div>
            </div>
            <div class="border-r pr-4">
              <div class="text-2xl font-bold">
                {{ t("localSeo.hero.trustSignals.clients.value") }}
              </div>
              <div class="text-sm">
                {{ t("localSeo.hero.trustSignals.clients.label") }}
              </div>
            </div>
            <div>
              <div class="text-2xl font-bold">
                {{ t("localSeo.hero.trustSignals.successRate.value") }}
              </div>
              <div class="text-sm">
                {{ t("localSeo.hero.trustSignals.successRate.label") }}
              </div>
            </div>
          </div>
        </div>
        <NuxtImg
          provider="cloudinary"
          width="540"
          height="540"
          src="v1744048124/local-clermont-orlando-web-services_agc8hg.png"
          alt="hero section image"
          class="mx-auto h-auto w-full"
        />
      </div>

      <!-- Key Services Grid -->
      <div class="grid md:grid-cols-3 gap-12 py-28">
        <div v-for="(service, i) in services" :key="i" class="service-card">
          <div class="icon-wrapper">
            <Icon :name="service.icon" class="w-12 h-12 text-purple-600" />
          </div>
          <h2 class="text-2xl font-bold my-6">{{ service.title }}</h2>
          <p class="mb-6">{{ service.description }}</p>
        </div>
      </div>

      <!-- Challenges Section -->
      <div class="border border-purple-500 p-12 rounded-2xl mb-20">
        <h2 class="text-4xl font-bold text-center mb-12">
          {{ t("localSeo.challenges.title") }}
        </h2>

        <p
          class="text-lg text-center mb-8 max-w-3xl mx-auto"
          v-html="t('localSeo.challenges.paragraph1')"
        />
        <p
          class="text-lg text-center mb-16 max-w-3xl mx-auto"
          v-html="t('localSeo.challenges.paragraph2')"
        />

        <!-- Landmarks Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div
            v-for="(landmark, i) in landmarks"
            :key="i"
            class="bg-muted p-6 rounded-2xl shadow-sm"
          >
            <p class="text-lg font-semibold text-purple-600 mb-1">
              {{ landmark.title }}
            </p>
            <p>{{ landmark.description }}</p>
          </div>
        </div>

        <!-- Challenges List -->
        <div class="grid md:grid-cols-2 gap-8">
          <div
            v-for="(challenge, i) in challenges"
            :key="i"
            class="bg-muted p-6 rounded-2xl shadow-sm"
          >
            <h3 class="text-xl font-bold mb-4">{{ challenge.title }}</h3>
            <p class="mb-4">{{ challenge.description }}</p>
            <ul class="list-disc pl-6 space-y-1">
              <li v-for="(detail, di) in challenge.details" :key="di">
                {{ detail }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Testimonials -->
      <div class="grid md:grid-cols-3 gap-8 py-10">
        <div
          v-for="(testimonial, i) in testimonials"
          :key="i"
          class="testimonial-card"
        >
          <blockquote>{{ testimonial.quote }}</blockquote>
          <div class="testimonial-author">
            <span class="font-bold">{{ testimonial.author }}</span>
            <span class="px-3">{{ testimonial.location }}</span>
          </div>
        </div>
      </div>

      <!-- Local SEO Resources -->
      <!-- <div class="mb-20">
        <h2 class="text-3xl font-bold mb-12 text-center">
          Central Florida SEO Resources
        </h2>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="resource-card">
            <div class="resource-image">
              <NuxtImg
                provider="cloudinary"
                src="/orlando-seo-guide.jpg"
                alt="Orlando Local SEO Checklist"
              />
            </div>
            <div class="p-6">
              <h3 class="font-bold mb-3">2024 Orlando SEO Checklist</h3>
              <p>Step-by-step guide to dominate Disney-area searches</p>
              <a href="#" class="text-purple-600 mt-4 inline-block"
                >Download PDF →</a
              >
            </div>
          </div>

          Repeat for other resource cards -->
      <!-- </div>
      </div> -->
      <FaqSection :questions="localSeoFaqs" heading="Local SEO FAQs" />

      <CallToAction />
    </div>
  </section>
</template>

<script setup>
import CallToAction from "../../components/CallToAction.vue";
import FaqSection from "../../components/ui/FaqSection.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

useHead({
  title: t("localSeo.metadata.title"),
  meta: [
    {
      name: "description",
      content: t("localSeo.metadata.description"),
    },
    {
      property: "og:title",
      content: t("localSeo.metadata.og_title"),
    },
    {
      property: "og:description",
      content: t("localSeo.metadata.og_description"),
    },
  ],
});


const localSeoFaqs = [
  {
    question: t("localSeo.faqs.1.question"),
    answer: t("localSeo.faqs.1.answer"),
    details: [
      t("localSeo.faqs.1.details.0"),
      t("localSeo.faqs.1.details.1"),
      t("localSeo.faqs.1.details.2"),
      t("localSeo.faqs.1.details.3"),
    ],
    open: false,
  },
  {
    question: t("localSeo.faqs.2.question"),
    answer: t("localSeo.faqs.2.answer"),
    details: [
      t("localSeo.faqs.2.details.0"),
      t("localSeo.faqs.2.details.1"),
      t("localSeo.faqs.2.details.2"),
      t("localSeo.faqs.2.details.3"),
    ],
    open: false,
  },
  {
    question: t("localSeo.faqs.3.question"),
    answer: t("localSeo.faqs.3.answer"),
    details: [
      t("localSeo.faqs.3.details.0"),
      t("localSeo.faqs.3.details.1"),
      t("localSeo.faqs.3.details.2"),
    ],
    open: false,
  },
  {
    question: t("localSeo.faqs.4.question"),
    answer: t("localSeo.faqs.4.answer"),
    details: [
      t("localSeo.faqs.4.details.0"),
      t("localSeo.faqs.4.details.1"),
      t("localSeo.faqs.4.details.2"),
      t("localSeo.faqs.4.details.3"),
    ],
    open: false,
  },
  {
    question: t("localSeo.faqs.5.question"),
    answer: t("localSeo.faqs.5.answer"),
    details: [
      t("localSeo.faqs.5.details.0"),
      t("localSeo.faqs.5.details.1"),
      t("localSeo.faqs.5.details.2"),
      t("localSeo.faqs.5.details.3"),
    ],
    open: false,
  },
  {
    question: t("localSeo.faqs.6.question"),
    answer: t("localSeo.faqs.6.answer"),
    details: [
      t("localSeo.faqs.6.details.0"),
      t("localSeo.faqs.6.details.1"),
      t("localSeo.faqs.6.details.2"),
      t("localSeo.faqs.6.details.3"),
      t("localSeo.faqs.6.details.4"),
    ],
    open: false,
  },
  {
    question: t("localSeo.faqs.7.question"),
    answer: t("localSeo.faqs.7.answer"),
    details: [
      t("localSeo.faqs.7.details.0"),
      t("localSeo.faqs.7.details.1"),
      t("localSeo.faqs.7.details.2"),
      t("localSeo.faqs.7.details.3"),
    ],
    open: false,
  },
  {
    question: t("localSeo.faqs.8.question"),
    answer: t("localSeo.faqs.8.answer"),
    details: [
      t("localSeo.faqs.8.details.0"),
      t("localSeo.faqs.8.details.1"),
      t("localSeo.faqs.8.details.2"),
      t("localSeo.faqs.8.details.3"),
    ],
    open: false,
  },
  {
    question: t("localSeo.faqs.9.question"),
    answer: t("localSeo.faqs.9.answer"),
    details: [
      t("localSeo.faqs.9.details.0"),
      t("localSeo.faqs.9.details.1"),
      t("localSeo.faqs.9.details.2"),
    ],
    open: false,
  },
];

// Services
const services = [
  {
    icon: "mdi:google-maps",
    title: t("localSeo.services.googleMaps.title"),
    description: t("localSeo.services.googleMaps.description"),
  },
  {
    icon: "mdi:cellphone-text",
    title: t("localSeo.services.hyperlocalContent.title"),
    description: t("localSeo.services.hyperlocalContent.description"),
  },
  {
    icon: "mdi:shield-star",
    title: t("localSeo.services.reviewManagement.title"),
    description: t("localSeo.services.reviewManagement.description"),
  },
];

// Landmarks
const landmarks = [
  {
    title: t("localSeo.landmarks.lakes.title"),
    description: t("localSeo.landmarks.lakes.description"),
  },
  {
    title: t("localSeo.landmarks.corridor.title"),
    description: t("localSeo.landmarks.corridor.description"),
  },
  {
    title: t("localSeo.landmarks.hwy27.title"),
    description: t("localSeo.landmarks.hwy27.description"),
  },
  {
    title: t("localSeo.landmarks.downtown.title"),
    description: t("localSeo.landmarks.downtown.description"),
  },
];

// Challenges
const challenges = [
  {
    title: t("localSeo.challenges.disney.title"),
    description: t("localSeo.challenges.disney.description"),
    details: [
      t("localSeo.challenges.disney.details.0"),
      t("localSeo.challenges.disney.details.1"),
      t("localSeo.challenges.disney.details.2"),
    ],
  },
  {
    title: t("localSeo.challenges.bigBox.title"),
    description: t("localSeo.challenges.bigBox.description"),
    details: [
      t("localSeo.challenges.bigBox.details.0"),
      t("localSeo.challenges.bigBox.details.1"),
      t("localSeo.challenges.bigBox.details.2"),
    ],
  },
];

// Testimonials
const testimonials = [
  {
    quote: t("localSeo.testimonials.eliteEuro.quote"),
    author: t("localSeo.testimonials.eliteEuro.author"),
    location: t("localSeo.testimonials.eliteEuro.location"),
  },
  {
    quote: t("localSeo.testimonials.irisHair.quote"),
    author: t("localSeo.testimonials.irisHair.author"),
    location: t("localSeo.testimonials.irisHair.location"),
  },
  {
    quote: t("localSeo.testimonials.elCerro.quote"),
    author: t("localSeo.testimonials.elCerro.author"),
    location: t("localSeo.testimonials.elCerro.location"),
  },
];
</script>
