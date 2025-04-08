<template>
  <section
    class="container mx-auto px-4"
    aria-label="Conversion Rate Optimization Services"
  >
    <!-- Hero Section -->
    <article class="mx-auto max-w-7xl px-4 py-16">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            {{ t("cro.hero.titlePart1") }}
            <span class="text-purple-600">{{
              t("cro.hero.highlightedTitle")
            }}</span>
            {{ t("cro.hero.titlePart2") }}
          </h1>
          <p class="text-xl lg:text-2xl mb-8">
            {{ t("cro.hero.subtitle") }}
          </p>
          <!-- <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink
              to="/free-audit"
              class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg transition-colors duration-300 font-semibold text-lg"
            >
              {{ t("cro.hero.button") }}
            </NuxtLink>
          </div> -->

          <!-- Trust Metrics -->
          <div
            class="mt-12 grid grid-cols-3 gap-8 border-t border-gray-200 pt-8"
          >
            <div class="text-center">
              <p class="text-3xl font-bold mb-2">
                {{ t("cro.hero.trustMetrics.conversion.value") }}
              </p>
              <p class="">{{ t("cro.hero.trustMetrics.conversion.label") }}</p>
            </div>
            <div class="text-center">
              <p class="text-3xl font-bold mb-2">
                {{ t("cro.hero.trustMetrics.users.value") }}
              </p>
              <p class="">{{ t("cro.hero.trustMetrics.users.label") }}</p>
            </div>
            <div class="text-center">
              <p class="text-3xl font-bold mb-2">
                {{ t("cro.hero.trustMetrics.roi.value") }}
              </p>
              <p class="">{{ t("cro.hero.trustMetrics.roi.label") }}</p>
            </div>
          </div>
        </div>

        <div class="relative">
          <NuxtImg
            provider="cloudinary"
            src="v1744048635/conversion-rate-optimization-clermont-orlando_nvxnfr.png"
            height="540"
            width="540"
            :alt="t('cro.hero.imageAlt')"
            class="rounded-3xl"
            loading="lazy"
          />
        </div>
      </div>
    </article>

    <!-- Core CRO Strategies -->
    <section class="py-16 lg:py-24" aria-labelledby="strategies-heading">
      <div class="max-w-7xl mx-auto px-4">
        <h2
          id="strategies-heading"
          class="text-3xl lg:text-4xl font-bold text-center"
        >
          {{ t("cro.strategies.title") }}
        </h2>
        <p class="mb-8 text-center max-w-3xl mx-auto py-6">
          {{ t("cro.strategies.description") }}
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <article
            v-for="(strategy, index) in croStrategies"
            :key="index"
            class="p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div
              :class="`w-12 h-12 ${strategy.bgColor} rounded-lg flex items-center justify-center mb-4`"
            >
              <Icon
                :name="strategy.icon"
                :class="`w-6 h-6 ${strategy.iconColor}`"
              />
            </div>
            <h3 class="text-xl font-bold mb-3">{{ strategy.title }}</h3>
            <p class="mb-4">{{ strategy.description }}</p>
            <ul class="list-disc pl-5 space-y-2 text-sm">
              <li v-for="(tactic, tIndex) in strategy.tactics" :key="tIndex">
                {{ tactic }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- Case Studies -->
    <section class="py-16 lg:py-24" aria-labelledby="case-studies-heading">
      <div class="max-w-7xl mx-auto px-4">
        <h2
          id="case-studies-heading"
          class="text-3xl lg:text-4xl font-bold text-center"
        >
          {{ t("cro.caseStudies.title") }}
        </h2>
        <p class="mb-8 text-center max-w-3xl mx-auto py-6">
          {{ t("cro.caseStudies.description") }}
        </p>

        <div class="grid grid-cols-1 gap-12">
          <article
            v-for="(study, index) in caseStudies"
            :key="index"
            class="p-8 rounded-2xl shadow-lg dark:shadow-none rounded-4xl border hover:shadow-xl transition-shadow"
          >
            <div class="flex items-center gap-4 mb-6">
              <h3 class="text-xl font-bold">{{ study.client }}</h3>
              <p class="">{{ study.industry }}</p>
            </div>
            <div class="space-y-4">
              <div class="p-4 rounded-lg">
                <p class="text-2xl font-bold text-purple-600">
                  {{ study.result }}
                </p>
                <p class="text-sm">{{ study.metric }}</p>
              </div>
              <p class="italic">"{{ study.quote }}"</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <FaqSection :questions="croFaqs" :heading="t('cro.faqs.heading')" />

    <CallToAction />
  </section>
</template>

<script setup>
import FaqSection from "~/components/ui/FaqSection.vue";
import CallToAction from "~/components/CallToAction.vue";

const { t } = useI18n();

const croStrategies = computed(() => [
  {
    title: t("cro.strategies.behavioral.title"),
    icon: "oui:heatmap",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    description: t("cro.strategies.behavioral.description"),
    tactics: [
      t("cro.strategies.behavioral.tactics.0"),
      t("cro.strategies.behavioral.tactics.1"),
      t("cro.strategies.behavioral.tactics.2"),
      t("cro.strategies.behavioral.tactics.3"),
    ],
  },
  {
    title: t("cro.strategies.testing.title"),
    icon: "mdi:test-tube",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    description: t("cro.strategies.testing.description"),
    tactics: [
      t("cro.strategies.testing.tactics.0"),
      t("cro.strategies.testing.tactics.1"),
      t("cro.strategies.testing.tactics.2"),
      t("cro.strategies.testing.tactics.3"),
    ],
  },
  {
    title: t("cro.strategies.audits.title"),
    icon: "mdi:clipboard-list",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    description: t("cro.strategies.audits.description"),
    tactics: [
      t("cro.strategies.audits.tactics.0"),
      t("cro.strategies.audits.tactics.1"),
      t("cro.strategies.audits.tactics.2"),
      t("cro.strategies.audits.tactics.3"),
    ],
  },
  {
    title: t("cro.strategies.funnel.title"),
    icon: "mdi:flowchart",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
    description: t("cro.strategies.funnel.description"),
    tactics: [
      t("cro.strategies.funnel.tactics.0"),
      t("cro.strategies.funnel.tactics.1"),
      t("cro.strategies.funnel.tactics.2"),
      t("cro.strategies.funnel.tactics.3"),
    ],
  },
  {
    title: t("cro.strategies.personalization.title"),
    icon: "mdi:account-box",
    bgColor: "bg-red-100",
    iconColor: "text-red-600",
    description: t("cro.strategies.personalization.description"),
    tactics: [
      t("cro.strategies.personalization.tactics.0"),
      t("cro.strategies.personalization.tactics.1"),
      t("cro.strategies.personalization.tactics.2"),
      t("cro.strategies.personalization.tactics.3"),
    ],
  },
  {
    title: t("cro.strategies.speed.title"),
    icon: "mdi:rocket-launch",
    bgColor: "bg-teal-100",
    iconColor: "text-teal-600",
    description: t("cro.strategies.speed.description"),
    tactics: [
      t("cro.strategies.speed.tactics.0"),
      t("cro.strategies.speed.tactics.1"),
      t("cro.strategies.speed.tactics.2"),
      t("cro.strategies.speed.tactics.3"),
    ],
  },
  {
    title: t("cro.strategies.seo.title"),
    icon: "mdi:google-analytics",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
    description: t("cro.strategies.seo.description"),
    tactics: [
      t("cro.strategies.seo.tactics.0"),
      t("cro.strategies.seo.tactics.1"),
      t("cro.strategies.seo.tactics.2"),
      t("cro.strategies.seo.tactics.3"),
    ],
  },
  {
    title: t("cro.strategies.mobile.title"),
    icon: "mdi:cellphone",
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    description: t("cro.strategies.mobile.description"),
    tactics: [
      t("cro.strategies.mobile.tactics.0"),
      t("cro.strategies.mobile.tactics.1"),
      t("cro.strategies.mobile.tactics.2"),
      t("cro.strategies.mobile.tactics.3"),
    ],
  },
]);

// Case Studies
const caseStudies = computed(() => [
  {
    client: t("cro.caseStudies.studies.0.client"),
    industry: t("cro.caseStudies.studies.0.industry"),
    result: t("cro.caseStudies.studies.0.result"),
    metric: t("cro.caseStudies.studies.0.metric"),
    quote: t("cro.caseStudies.studies.0.quote"),
  },
]);

const croFaqs = ref([
  {
    question: t("cro.faqs.1.question"),
    answer: t("cro.faqs.1.answer"),
    details: [
      t("cro.faqs.1.details.0"),
      t("cro.faqs.1.details.1"),
      t("cro.faqs.1.details.2"),
    ],
    open: true,
  },
  {
    question: t("cro.faqs.2.question"),
    answer: t("cro.faqs.2.answer"),
    details: [
      t("cro.faqs.2.details.0"),
      t("cro.faqs.2.details.1"),
      t("cro.faqs.2.details.2"),
      t("cro.faqs.2.details.3"),
    ],
    open: false,
  },
  {
    question: t("cro.faqs.3.question"),
    answer: t("cro.faqs.3.answer"),
    details: [t("cro.faqs.3.details.0"), t("cro.faqs.3.details.1")],
    open: false,
  },
  {
    question: t("cro.faqs.4.question"),
    answer: t("cro.faqs.4.answer"),
    details: [
      t("cro.faqs.4.details.0"),
      t("cro.faqs.4.details.1"),
      t("cro.faqs.4.details.2"),
      t("cro.faqs.4.details.3"),
    ],
    open: false,
  },
  {
    question: t("cro.faqs.5.question"),
    answer: t("cro.faqs.5.answer"),
    details: [t("cro.faqs.5.details.0"), t("cro.faqs.5.details.1")],
    open: false,
  },
  {
    question: t("cro.faqs.6.question"),
    answer: t("cro.faqs.6.answer"),
    details: [
      t("cro.faqs.6.details.0"),
      t("cro.faqs.6.details.1"),
      t("cro.faqs.6.details.2"),
      t("cro.faqs.6.details.3"),
      t("cro.faqs.6.details.4"),
      t("cro.faqs.6.details.5"),
    ],
    open: false,
  },
  {
    question: t("cro.faqs.7.question"),
    answer: t("cro.faqs.7.answer"),
    details: [
      t("cro.faqs.7.details.0"),
      t("cro.faqs.7.details.1"),
      t("cro.faqs.7.details.2"),
      t("cro.faqs.7.details.3"),
    ],
    open: false,
  },
  {
    question: t("cro.faqs.8.question"),
    answer: t("cro.faqs.8.answer"),
    details: [t("cro.faqs.8.details.0"), t("cro.faqs.8.details.1")],
    open: false,
  },
  {
    question: t("cro.faqs.9.question"),
    answer: t("cro.faqs.9.answer"),
    details: [
      t("cro.faqs.9.details.0"),
      t("cro.faqs.9.details.1"),
      t("cro.faqs.9.details.2"),
    ],
    open: false,
  },
  {
    question: t("cro.faqs.10.question"),
    answer: t("cro.faqs.10.answer"),
    details: [
      t("cro.faqs.10.details.0"),
      t("cro.faqs.10.details.1"),
      t("cro.faqs.10.details.2"),
      t("cro.faqs.10.details.3"),
      t("cro.faqs.10.details.4"),
      t("cro.faqs.10.details.5"),
      t("cro.faqs.10.details.6"),
      t("cro.faqs.10.details.7"),
      t("cro.faqs.10.details.8"),
      t("cro.faqs.10.details.9"),
    ],
    open: false,
  },
]);

useHead({
  title: t("cro.meta.title"),
  meta: [
    {
      name: "description",
      content: t("cro.meta.description"),
    },
    {
      name: "keywords",
      content: t("cro.meta.keywords"),
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://yourdomain.com/services/conversion-rate-optimization",
    },
  ],
});
</script>
