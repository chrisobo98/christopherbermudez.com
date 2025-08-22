<template>
  <section class="container mx-auto px-4" aria-label="Technical SEO Services">
    <!-- Hero Section -->
    <article class="mx-auto max-w-7xl px-4 py-16">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            {{ t("technicalSeo.hero.titlePart1") }}
            <span class="text-purple-600">{{
              t("technicalSeo.hero.highlightedTitle")
            }}</span>
          </h1>
          <p class="text-xl lg:text-2xl mb-8">
            {{ t("technicalSeo.hero.subtitle") }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink
              :to="localePath('/')"
              class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg transition-colors duration-300 font-semibold text-lg"
            >
              {{ t("technicalSeo.hero.button") }}
            </NuxtLink>
          </div>

          <!-- Trust Metrics -->
          <div
            class="mt-12 grid grid-cols-3 gap-8 border-t border-gray-200 pt-8"
          >
            <div class="text-center">
              <p class="text-3xl font-bold mb-2">
                {{ t("technicalSeo.hero.trustMetrics.pages.value") }}
              </p>
              <p class="">
                {{ t("technicalSeo.hero.trustMetrics.pages.label") }}
              </p>
            </div>
            <div class="text-center">
              <p class="text-3xl font-bold mb-2">
                {{ t("technicalSeo.hero.trustMetrics.fixes.value") }}
              </p>
              <p class="">
                {{ t("technicalSeo.hero.trustMetrics.fixes.label") }}
              </p>
            </div>
            <div class="text-center">
              <p class="text-3xl font-bold mb-2">
                {{ t("technicalSeo.hero.trustMetrics.time.value") }}
              </p>
              <p class="">
                {{ t("technicalSeo.hero.trustMetrics.time.label") }}
              </p>
            </div>
          </div>
        </div>

        <div class="relative">
          <NuxtImg
            provider="cloudinary"
            src="v1744048734/technical-seo-audits_yo3jxi.png"
            width="540"
            height="540"
            :alt="t('technicalSeo.hero.imageAlt')"
            class="rounded-3xl"
            loading="lazy"
          />
        </div>
      </div>
    </article>

    <!-- Core Technical SEO Services -->
    <section class="py-16 lg:py-24" aria-labelledby="services-heading">
      <div class="max-w-7xl mx-auto px-4">
        <h2
          id="services-heading"
          class="text-3xl lg:text-4xl font-bold text-center"
        >
          {{ t("technicalSeo.services.title") }}
        </h2>
        <p class="mb-8 text-center max-w-3xl mx-auto py-6">
          {{ t("technicalSeo.services.description") }}
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <article
            v-for="(service, index) in technicalServices"
            :key="index"
            class="p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div
              :class="`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`"
            >
              <Icon
                :name="service.icon"
                :class="`w-6 h-6 ${service.iconColor}`"
              />
            </div>
            <h3 class="text-xl font-bold mb-3">{{ service.title }}</h3>
            <p class="mb-4">{{ service.description }}</p>
            <ul class="list-disc pl-5 space-y-2 text-sm">
              <li v-for="(feature, fIndex) in service.features" :key="fIndex">
                {{ feature }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- Audit Methodology -->
    <section class="py-16 lg:py-24" aria-labelledby="methodology-heading">
      <div class="max-w-7xl mx-auto px-4">
        <h2
          id="methodology-heading"
          class="text-3xl lg:text-4xl font-bold text-center"
        >
          {{ t("technicalSeo.methodology.title") }}
        </h2>
        <p class="mb-8 text-center max-w-3xl mx-auto py-6">
          {{ t("technicalSeo.methodology.description") }}
        </p>

        <div class="grid md:grid-cols-5 gap-8">
          <div
            v-for="(step, index) in auditMethodology"
            :key="index"
            class="text-center"
          >
            <div
              :class="`w-16 h-16 ${step.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`"
            >
              <span class="text-2xl font-bold text-white">{{ index + 1 }}</span>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <FaqSection
      :questions="technicalSeoFaqs"
      :heading="t('technicalSeo.faqs.heading')"
    />

    <CallToAction class="my-14" />
  </section>
</template>

<script setup>
import CallToAction from "../../components/CallToAction.vue";
import FaqSection from "../../components/ui/FaqSection.vue";

const { t } = useI18n();

const technicalServices = computed(() => [
  {
    title: t("technicalSeo.services.speedBoost.title"),
    icon: "mdi:speedometer",
    bgColor: "bg-red-100",
    iconColor: "text-red-600",
    description: t("technicalSeo.services.speedBoost.description"),
    features: [
      t("technicalSeo.services.speedBoost.features.0"),
      t("technicalSeo.services.speedBoost.features.1"),
      t("technicalSeo.services.speedBoost.features.2"),
      t("technicalSeo.services.speedBoost.features.3"),
    ],
  },
  {
    title: t("technicalSeo.services.searchVisibility.title"),
    icon: "mdi:code-json",
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600",
    description: t("technicalSeo.services.searchVisibility.description"),
    features: [
      t("technicalSeo.services.searchVisibility.features.0"),
      t("technicalSeo.services.searchVisibility.features.1"),
      t("technicalSeo.services.searchVisibility.features.2"),
      t("technicalSeo.services.searchVisibility.features.3"),
    ],
  },
  {
    title: t("technicalSeo.services.richResults.title"),
    icon: "mdi:graph-outline",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    description: t("technicalSeo.services.richResults.description"),
    features: [
      t("technicalSeo.services.richResults.features.0"),
      t("technicalSeo.services.richResults.features.1"),
      t("technicalSeo.services.richResults.features.2"),
      t("technicalSeo.services.richResults.features.3"),
    ],
  },
  {
    title: t("technicalSeo.services.security.title"),
    icon: "mdi:shield-lock",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
    description: t("technicalSeo.services.security.description"),
    features: [
      t("technicalSeo.services.security.features.0"),
      t("technicalSeo.services.security.features.1"),
      t("technicalSeo.services.security.features.2"),
      t("technicalSeo.services.security.features.3"),
    ],
  },
  {
    title: t("technicalSeo.services.globalReach.title"),
    icon: "mdi:earth",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    description: t("technicalSeo.services.globalReach.description"),
    features: [
      t("technicalSeo.services.globalReach.features.0"),
      t("technicalSeo.services.globalReach.features.1"),
      t("technicalSeo.services.globalReach.features.2"),
      t("technicalSeo.services.globalReach.features.3"),
    ],
  },
  {
    title: t("technicalSeo.services.fastSites.title"),
    icon: "mdi:file-document-multiple",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    description: t("technicalSeo.services.fastSites.description"),
    features: [
      t("technicalSeo.services.fastSites.features.0"),
      t("technicalSeo.services.fastSites.features.1"),
      t("technicalSeo.services.fastSites.features.2"),
      t("technicalSeo.services.fastSites.features.3"),
    ],
  },
  {
    title: t("technicalSeo.services.appExperience.title"),
    icon: "mdi:cellphone-link",
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    description: t("technicalSeo.services.appExperience.description"),
    features: [
      t("technicalSeo.services.appExperience.features.0"),
      t("technicalSeo.services.appExperience.features.1"),
      t("technicalSeo.services.appExperience.features.2"),
      t("technicalSeo.services.appExperience.features.3"),
    ],
  },
  {
    title: t("technicalSeo.services.integrations.title"),
    icon: "mdi:api",
    bgColor: "bg-teal-100",
    iconColor: "text-teal-600",
    description: t("technicalSeo.services.integrations.description"),
    features: [
      t("technicalSeo.services.integrations.features.0"),
      t("technicalSeo.services.integrations.features.1"),
      t("technicalSeo.services.integrations.features.2"),
      t("technicalSeo.services.integrations.features.3"),
    ],
  },
]);

// Audit Methodology
const auditMethodology = computed(() => [
  {
    title: t("technicalSeo.methodology.steps.0.title"),
    bgColor: "bg-purple-600",
    description: t("technicalSeo.methodology.steps.0.description"),
  },
  {
    title: t("technicalSeo.methodology.steps.1.title"),
    bgColor: "bg-blue-600",
    description: t("technicalSeo.methodology.steps.1.description"),
  },
  {
    title: t("technicalSeo.methodology.steps.2.title"),
    bgColor: "bg-green-600",
    description: t("technicalSeo.methodology.steps.2.description"),
  },
  {
    title: t("technicalSeo.methodology.steps.3.title"),
    bgColor: "bg-orange-600",
    description: t("technicalSeo.methodology.steps.3.description"),
  },
  {
    title: t("technicalSeo.methodology.steps.4.title"),
    bgColor: "bg-red-600",
    description: t("technicalSeo.methodology.steps.4.description"),
  },
]);

// FAQs
const technicalSeoFaqs = computed(() => [
  {
    question: t("technicalSeo.faqs.1.question"),
    answer: t("technicalSeo.faqs.1.answer"),
    details: [
      t("technicalSeo.faqs.1.details.0"),
      t("technicalSeo.faqs.1.details.1"),
      t("technicalSeo.faqs.1.details.2"),
      t("technicalSeo.faqs.1.details.3"),
    ],
    open: true,
  },
  {
    question: t("technicalSeo.faqs.2.question"),
    answer: t("technicalSeo.faqs.2.answer"),
    details: [
      t("technicalSeo.faqs.2.details.0"),
      t("technicalSeo.faqs.2.details.1"),
      t("technicalSeo.faqs.2.details.2"),
      t("technicalSeo.faqs.2.details.3"),
    ],
    open: false,
  },
  {
    question: t("technicalSeo.faqs.3.question"),
    answer: t("technicalSeo.faqs.3.answer"),
    details: [
      t("technicalSeo.faqs.3.details.0"),
      t("technicalSeo.faqs.3.details.1"),
      t("technicalSeo.faqs.3.details.2"),
      t("technicalSeo.faqs.3.details.3"),
    ],
    open: false,
  },
  {
    question: t("technicalSeo.faqs.4.question"),
    answer: t("technicalSeo.faqs.4.answer"),
    details: [
      t("technicalSeo.faqs.4.details.0"),
      t("technicalSeo.faqs.4.details.1"),
      t("technicalSeo.faqs.4.details.2"),
      t("technicalSeo.faqs.4.details.3"),
    ],
    open: false,
  },
  {
    question: t("technicalSeo.faqs.5.question"),
    answer: t("technicalSeo.faqs.5.answer"),
    details: [
      t("technicalSeo.faqs.5.details.0"),
      t("technicalSeo.faqs.5.details.1"),
      t("technicalSeo.faqs.5.details.2"),
      t("technicalSeo.faqs.5.details.3"),
    ],
    open: false,
  },
  {
    question: t("technicalSeo.faqs.6.question"),
    answer: t("technicalSeo.faqs.6.answer"),
    details: [
      t("technicalSeo.faqs.6.details.0"),
      t("technicalSeo.faqs.6.details.1"),
      t("technicalSeo.faqs.6.details.2"),
      t("technicalSeo.faqs.6.details.3"),
    ],
    open: false,
  },
  {
    question: t("technicalSeo.faqs.7.question"),
    answer: t("technicalSeo.faqs.7.answer"),
    details: [
      t("technicalSeo.faqs.7.details.0"),
      t("technicalSeo.faqs.7.details.1"),
      t("technicalSeo.faqs.7.details.2"),
      t("technicalSeo.faqs.7.details.3"),
    ],
    open: false,
  },
  {
    question: t("technicalSeo.faqs.8.question"),
    answer: t("technicalSeo.faqs.8.answer"),
    details: [
      t("technicalSeo.faqs.8.details.0"),
      t("technicalSeo.faqs.8.details.1"),
      t("technicalSeo.faqs.8.details.2"),
      t("technicalSeo.faqs.8.details.3"),
    ],
    open: false,
  },
  {
    question: t("technicalSeo.faqs.9.question"),
    answer: t("technicalSeo.faqs.9.answer"),
    details: [
      t("technicalSeo.faqs.9.details.0"),
      t("technicalSeo.faqs.9.details.1"),
      t("technicalSeo.faqs.9.details.2"),
      t("technicalSeo.faqs.9.details.3"),
    ],
    open: false,
  },
  {
    question: t("technicalSeo.faqs.10.question"),
    answer: t("technicalSeo.faqs.10.answer"),
    details: [
      t("technicalSeo.faqs.10.details.0"),
      t("technicalSeo.faqs.10.details.1"),
      t("technicalSeo.faqs.10.details.2"),
      t("technicalSeo.faqs.10.details.3"),
    ],
    open: false,
  },
]);

// Move useHead to the bottom after all variables are defined
useHead({
  title: t("technicalSeo.metadata.title"),
  meta: [
    {
      name: "description",
      content: t("technicalSeo.metadata.description"),
    },
    {
      property: "og:title",
      content: t("technicalSeo.metadata.og_title"),
    },
    {
      property: "og:description",
      content: t("technicalSeo.metadata.og_description"),
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": technicalSeoFaqs.value.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer + (faq.details ? ' ' + faq.details.join(' ') : '')
          }
        }))
      })
    }
  ]
});
</script>
