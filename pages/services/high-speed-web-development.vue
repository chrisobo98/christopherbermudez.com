<template>
  <section class="container mx-auto px-4" aria-label="Web Development Services">
    <!-- Hero Section -->
    <article class="mx-auto max-w-7xl px-4 py-16">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            {{ t("webDev.hero.titlePart1") }}
            <span class="text-purple-600">{{
              t("webDev.hero.highlightedTitle")
            }}</span>
            {{ t("webDev.hero.titlePart2") }}
          </h1>
          <p class="text-xl lg:text-2xl mb-8">
            {{ t("webDev.hero.subtitle") }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink
              :to="localePath('/appointments')"
              class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg transition-colors duration-300 font-semibold text-lg"
            >
              {{ t("webDev.hero.button") }}
            </NuxtLink>
          </div>

          <!-- Trust Metrics -->
          <div
            class="mt-12 grid grid-cols-3 gap-8 border-t border-gray-200 pt-8"
          >
            <div class="text-center">
              <p class="text-3xl font-bold mb-2">
                {{ t("webDev.hero.trustMetrics.performance.value") }}
              </p>
              <p class="">
                {{ t("webDev.hero.trustMetrics.performance.label") }}
              </p>
            </div>
            <div class="text-center">
              <p class="text-3xl font-bold mb-2">
                {{ t("webDev.hero.trustMetrics.deployment.value") }}
              </p>
              <p class="">
                {{ t("webDev.hero.trustMetrics.deployment.label") }}
              </p>
            </div>
            <div class="text-center">
              <p class="text-3xl font-bold mb-2">
                {{ t("webDev.hero.trustMetrics.rating.value") }}
              </p>
              <p class="">{{ t("webDev.hero.trustMetrics.rating.label") }}</p>
            </div>
          </div>
        </div>

        <div class="relative">
          <NuxtImg
            provider="cloudinary"
            src="v1744048461/seo-services-clermont-and-greater-orlando_j7fhei.png"
            alt="High-performance website illustration"
            width="540"
            height="540"
            class="rounded-3xl"
            loading="lazy"
          />
        </div>
      </div>
    </article>

    <!-- Full-Cycle Performance Optimization -->
    <section class="py-16 lg:py-24" aria-labelledby="performance-heading">
      <div class="max-w-7xl mx-auto px-4">
        <h2
          id="performance-heading"
          class="text-3xl lg:text-4xl font-bold text-center"
        >
          {{ t("webDev.performanceSection.title") }}
        </h2>
        <p class="mb-8 text-center max-w-3xl mx-auto py-6">
          {{ t("webDev.performanceSection.description") }}
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <article
            v-for="(service, index) in performanceServices"
            :key="index"
            class="p-6 rounded-xl shadow-md dark:shadow-none hover:shadow-lg transition-shadow duration-300"
          >
            <div
              :class="`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`"
            >
              <Icon
                :name="service.icon"
                :class="`w-6 h-6 ${service.iconColor}`"
              />
            </div>
            <h3 class="text-xl font-bold mb-3">
              {{ service.title }}
            </h3>
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

    <!-- Cutting-Edge Development Practices -->
    <section class="py-16 lg:py-24" aria-labelledby="practices-heading">
      <div class="max-w-7xl mx-auto px-4">
        <h2
          id="practices-heading"
          class="text-3xl lg:text-4xl font-bold text-center"
        >
          {{ t("webDev.practicesSection.title") }}
        </h2>
        <p class="mb-8 text-center max-w-3xl mx-auto py-6">
          {{ t("webDev.practicesSection.description") }}
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="(practice, index) in practices"
            :key="index"
            class="p-6 border border-purple-500 rounded-xl hover:border-purple-700 transition-colors"
          >
            <div class="flex items-center gap-4 mb-4">
              <div
                :class="`w-12 h-12 ${practice.bgColor} rounded-lg flex items-center justify-center`"
              >
                <Icon
                  :name="practice.icon"
                  :class="`w-6 h-6 ${practice.iconColor}`"
                />
              </div>
              <h3 class="text-xl font-bold">
                {{ practice.title }}
              </h3>
            </div>
            <ul class="list-none space-y-2">
              <li
                v-for="(feature, fIndex) in practice.features"
                :key="fIndex"
                class="flex items-center gap-2"
              >
                <Icon name="mdi:check-circle" class="w-5 h-5 text-green-500" />
                {{ feature }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- FAQs Section -->
    <FaqSection :questions="webDevFaqs" :heading="t('webDev.faqs.heading')" />

    <!-- Call to Action -->
    <CallToAction />
  </section>
</template>

<script setup>
import CallToAction from "../../components/CallToAction.vue";
import FaqSection from "../../components/ui/FaqSection.vue";

const { t } = useI18n();

useHead({
  title: t("webDev.metadata.title"),
  meta: [
    {
      name: "description",
      content: t("webDev.metadata.description"),
    },
    {
      property: "og:title",
      content: t("webDev.metadata.og_title"),
    },
    {
      property: "og:description",
      content: t("webDev.metadata.og_description"),
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": webDevFaqs.value.map(faq => ({
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


// Performance Services
const performanceServices = computed(() => [
  {
    title: t("webDev.performanceSection.services.rendering.title"),
    icon: "mdi:rocket-launch",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    description: t("webDev.performanceSection.services.rendering.description"),
    features: [
      t("webDev.performanceSection.services.rendering.features.0"),
      t("webDev.performanceSection.services.rendering.features.1"),
      t("webDev.performanceSection.services.rendering.features.2"),
    ],
  },
  {
    title: t("webDev.performanceSection.services.analytics.title"),
    icon: "mdi:chart-box",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    description: t("webDev.performanceSection.services.analytics.description"),
    features: [
      t("webDev.performanceSection.services.analytics.features.0"),
      t("webDev.performanceSection.services.analytics.features.1"),
      t("webDev.performanceSection.services.analytics.features.2"),
    ],
  },
  {
    title: t("webDev.performanceSection.services.media.title"),
    icon: "mdi:package-variant",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    description: t("webDev.performanceSection.services.media.description"),
    features: [
      t("webDev.performanceSection.services.media.features.0"),
      t("webDev.performanceSection.services.media.features.1"),
      t("webDev.performanceSection.services.media.features.2"),
    ],
  },
  {
    title: t("webDev.performanceSection.services.scaling.title"),
    icon: "mdi:earth",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
    description: t("webDev.performanceSection.services.scaling.description"),
    features: [
      t("webDev.performanceSection.services.scaling.features.0"),
      t("webDev.performanceSection.services.scaling.features.1"),
      t("webDev.performanceSection.services.scaling.features.2"),
    ],
  },
  {
    title: t("webDev.performanceSection.services.lazyLoading.title"),
    icon: "mdi:clock-fast",
    bgColor: "bg-teal-100",
    iconColor: "text-teal-600",
    description: t(
      "webDev.performanceSection.services.lazyLoading.description"
    ),
    features: [
      t("webDev.performanceSection.services.lazyLoading.features.0"),
      t("webDev.performanceSection.services.lazyLoading.features.1"),
      t("webDev.performanceSection.services.lazyLoading.features.2"),
    ],
  },
  {
    title: t("webDev.performanceSection.services.caching.title"),
    icon: "octicon:cache-24",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
    description: t("webDev.performanceSection.services.caching.description"),
    features: [
      t("webDev.performanceSection.services.caching.features.0"),
      t("webDev.performanceSection.services.caching.features.1"),
      t("webDev.performanceSection.services.caching.features.2"),
    ],
  },
  {
    title: t("webDev.performanceSection.services.structuredData.title"),
    icon: "mdi:format-list-checks",
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600",
    description: t(
      "webDev.performanceSection.services.structuredData.description"
    ),
    features: [
      t("webDev.performanceSection.services.structuredData.features.0"),
      t("webDev.performanceSection.services.structuredData.features.1"),
      t("webDev.performanceSection.services.structuredData.features.2"),
    ],
  },
  {
    title: t("webDev.performanceSection.services.mobileDesign.title"),
    icon: "tdesign:mobile-shortcut",
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    description: t(
      "webDev.performanceSection.services.mobileDesign.description"
    ),
    features: [
      t("webDev.performanceSection.services.mobileDesign.features.0"),
      t("webDev.performanceSection.services.mobileDesign.features.1"),
      t("webDev.performanceSection.services.mobileDesign.features.2"),
    ],
  },
]);

const webDevFaqs = ref([
  {
    question: t("webDev.faqs.1.question"),
    answer: t("webDev.faqs.1.answer"),
    details: [
      t("webDev.faqs.1.details.0"),
      t("webDev.faqs.1.details.1"),
      t("webDev.faqs.1.details.2"),
      t("webDev.faqs.1.details.3"),
    ],
    open: false,
  },
  {
    question: t("webDev.faqs.2.question"),
    answer: t("webDev.faqs.2.answer"),
    details: [
      t("webDev.faqs.2.details.0"),
      t("webDev.faqs.2.details.1"),
      t("webDev.faqs.2.details.2"),
      t("webDev.faqs.2.details.3"),
    ],
    open: false,
  },
  {
    question: t("webDev.faqs.3.question"),
    answer: t("webDev.faqs.3.answer"),
    details: [
      t("webDev.faqs.3.details.0"),
      t("webDev.faqs.3.details.1"),
      t("webDev.faqs.3.details.2"),
    ],
    open: false,
  },
  {
    question: t("webDev.faqs.4.question"),
    answer: t("webDev.faqs.4.answer"),
    details: [
      t("webDev.faqs.4.details.0"),
      t("webDev.faqs.4.details.1"),
      t("webDev.faqs.4.details.2"),
      t("webDev.faqs.4.details.3"),
    ],
    open: false,
  },
  {
    question: t("webDev.faqs.5.question"),
    answer: t("webDev.faqs.5.answer"),
    details: [
      t("webDev.faqs.5.details.0"),
      t("webDev.faqs.5.details.1"),
      t("webDev.faqs.5.details.2"),
      t("webDev.faqs.5.details.3"),
    ],
    open: false,
  },
  {
    question: t("webDev.faqs.6.question"),
    answer: t("webDev.faqs.6.answer"),
    details: [
      t("webDev.faqs.6.details.0"),
      t("webDev.faqs.6.details.1"),
      t("webDev.faqs.6.details.2"),
      t("webDev.faqs.6.details.3"),
      t("webDev.faqs.6.details.4"),
    ],
    open: false,
  },
]);

// Practices
const practices = computed(() => [
  {
    title: t("webDev.practicesSection.practices.security.title"),
    icon: "mdi:shield-lock",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    features: [
      t("webDev.practicesSection.practices.security.features.0"),
      t("webDev.practicesSection.practices.security.features.1"),
      t("webDev.practicesSection.practices.security.features.2"),
    ],
  },
  {
    title: t("webDev.practicesSection.practices.performance.title"),
    icon: "mdi:lightning-bolt",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
    features: [
      t("webDev.practicesSection.practices.performance.features.0"),
      t("webDev.practicesSection.practices.performance.features.1"),
      t("webDev.practicesSection.practices.performance.features.2"),
    ],
  },
  {
    title: t("webDev.practicesSection.practices.launch.title"),
    icon: "mdi:cloud-upload",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    features: [
      t("webDev.practicesSection.practices.launch.features.0"),
      t("webDev.practicesSection.practices.launch.features.1"),
      t("webDev.practicesSection.practices.launch.features.2"),
    ],
  },
  {
    title: t("webDev.practicesSection.practices.seo.title"),
    icon: "mdi:map-marker-radius",
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    features: [
      t("webDev.practicesSection.practices.seo.features.0"),
      t("webDev.practicesSection.practices.seo.features.1"),
      t("webDev.practicesSection.practices.seo.features.2"),
    ],
  },
  {
    title: t("webDev.practicesSection.practices.analytics.title"),
    icon: "mdi:chart-line",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    features: [
      t("webDev.practicesSection.practices.analytics.features.0"),
      t("webDev.practicesSection.practices.analytics.features.1"),
      t("webDev.practicesSection.practices.analytics.features.2"),
    ],
  },
  {
    title: t("webDev.practicesSection.practices.database.title"),
    icon: "mdi:database-cog",
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600",
    features: [
      t("webDev.practicesSection.practices.database.features.0"),
      t("webDev.practicesSection.practices.database.features.1"),
      t("webDev.practicesSection.practices.database.features.2"),
    ],
  },
]);
</script>
