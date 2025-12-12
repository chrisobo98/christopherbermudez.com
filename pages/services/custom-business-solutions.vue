<template>
  <section class="container mx-auto px-4" aria-label="Custom Business Solutions">
    <!-- Hero Section -->
    <article class="mx-auto max-w-7xl px-4 py-16">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span class="text-purple-600">{{ $t('customSolutions.hero.title') }}</span> {{ $t('customSolutions.hero.highlight') }}
          </h1>
          <p class="text-xl lg:text-2xl mb-8">
            {{ $t('customSolutions.hero.description') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink
              :to="localePath('/appointments')"
              class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg transition-colors duration-300 font-semibold text-lg"
            >
              {{ $t('customSolutions.hero.cta') }}
            </NuxtLink>
          </div>

          <!-- Trust Metrics -->
          <div class="mt-12 grid grid-cols-3 gap-8 border-t border-gray-200 pt-8">
            <div class="text-center">
              <p class="text-3xl font-bold mb-2">{{ $t('customSolutions.hero.metrics.savings.value') }}</p>
              <p>{{ $t('customSolutions.hero.metrics.savings.label') }}</p>
            </div>
            <div class="text-center">
              <p class="text-3xl font-bold mb-2">{{ $t('customSolutions.hero.metrics.custom.value') }}</p>
              <p>{{ $t('customSolutions.hero.metrics.custom.label') }}</p>
            </div>
            <div class="text-center">
              <p class="text-3xl font-bold mb-2">{{ $t('customSolutions.hero.metrics.fees.value') }}</p>
              <p>{{ $t('customSolutions.hero.metrics.fees.label') }}</p>
            </div>
          </div>
        </div>

        <div class="relative">
          <NuxtImg
            provider="cloudinary"
            src="v1744048461/seo-services-clermont-and-greater-orlando_j7fhei.png"
            alt="Custom business solutions illustration"
            width="540"
            height="540"
            class="rounded-3xl"
            loading="lazy"
          />
        </div>
      </div>
    </article>

    <!-- What I Build Section -->
    <section class="py-16 lg:py-24 bg-muted" aria-labelledby="solutions-heading">
      <div class="max-w-7xl mx-auto px-4">
        <h2 id="solutions-heading" class="text-3xl lg:text-4xl font-bold text-center mb-12">
          {{ $t('customSolutions.realExamples.title') }}
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          <article class="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-md">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Icon name="heroicons:document-text" class="w-6 h-6 text-purple-600" />
            </div>
            <h3 class="text-2xl font-bold mb-4">{{ $t('customSolutions.realExamples.autoShop.title') }}</h3>
            <p class="mb-4">{{ $t('customSolutions.realExamples.autoShop.description') }}</p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>{{ $t('customSolutions.realExamples.autoShop.features.intake') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>{{ $t('customSolutions.realExamples.autoShop.features.signatures') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>{{ $t('customSolutions.realExamples.autoShop.features.history') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>{{ $t('customSolutions.realExamples.autoShop.features.records') }}</span>
              </li>
            </ul>
          </article>

          <article class="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-md">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Icon name="heroicons:credit-card" class="w-6 h-6 text-blue-600" />
            </div>
            <h3 class="text-2xl font-bold mb-4">{{ $t('customSolutions.realExamples.salon.title') }}</h3>
            <p class="mb-4">{{ $t('customSolutions.realExamples.salon.description') }}</p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>{{ $t('customSolutions.realExamples.salon.features.stripe') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>{{ $t('customSolutions.realExamples.salon.features.forms') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>{{ $t('customSolutions.realExamples.salon.features.dashboard') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>{{ $t('customSolutions.realExamples.salon.features.tracking') }}</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- Services I Offer -->
    <section class="py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12">{{ $t('customSolutions.solutions.title') }}</h2>

        <div class="grid md:grid-cols-3 gap-8">
          <article class="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all">
            <Icon name="heroicons:clipboard-document-list" class="w-12 h-12 text-purple-600 mb-4" />
            <h3 class="text-xl font-bold mb-3">{{ $t('customSolutions.solutions.intakeForms.title') }}</h3>
            <p>{{ $t('customSolutions.solutions.intakeForms.description') }}</p>
          </article>

          <article class="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all">
            <Icon name="heroicons:users" class="w-12 h-12 text-purple-600 mb-4" />
            <h3 class="text-xl font-bold mb-3">{{ $t('customSolutions.solutions.crm.title') }}</h3>
            <p>{{ $t('customSolutions.solutions.crm.description') }}</p>
          </article>

          <article class="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all">
            <Icon name="heroicons:chart-bar" class="w-12 h-12 text-purple-600 mb-4" />
            <h3 class="text-xl font-bold mb-3">{{ $t('customSolutions.solutions.dashboards.title') }}</h3>
            <p>{{ $t('customSolutions.solutions.dashboards.description') }}</p>
          </article>

          <article class="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all">
            <Icon name="heroicons:credit-card" class="w-12 h-12 text-purple-600 mb-4" />
            <h3 class="text-xl font-bold mb-3">{{ $t('customSolutions.solutions.payments.title') }}</h3>
            <p>{{ $t('customSolutions.solutions.payments.description') }}</p>
          </article>

          <article class="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all">
            <Icon name="heroicons:calendar" class="w-12 h-12 text-purple-600 mb-4" />
            <h3 class="text-xl font-bold mb-3">{{ $t('customSolutions.solutions.booking.title') }}</h3>
            <p>{{ $t('customSolutions.solutions.booking.description') }}</p>
          </article>

          <article class="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all">
            <Icon name="heroicons:document-duplicate" class="w-12 h-12 text-purple-600 mb-4" />
            <h3 class="text-xl font-bold mb-3">{{ $t('customSolutions.solutions.documents.title') }}</h3>
            <p>{{ $t('customSolutions.solutions.documents.description') }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Why Custom > SaaS -->
    <section class="py-16 lg:py-24 bg-purple-600">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl lg:text-4xl font-bold text-center text-white mb-12">
          {{ $t('customSolutions.whyCustom.title') }}
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white dark:bg-gray-800 p-8 rounded-xl">
            <h3 class="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">{{ $t('customSolutions.whyCustom.oneTime.title') }}</h3>
            <p class="text-lg mb-4">{{ $t('customSolutions.whyCustom.oneTime.description') }}</p>
            <p class="text-gray-600 dark:text-gray-400">{{ $t('customSolutions.whyCustom.oneTime.detail') }}</p>
          </div>

          <div class="bg-white dark:bg-gray-800 p-8 rounded-xl">
            <h3 class="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">{{ $t('customSolutions.whyCustom.workflow.title') }}</h3>
            <p class="text-lg mb-4">{{ $t('customSolutions.whyCustom.workflow.description') }}</p>
            <p class="text-gray-600 dark:text-gray-400">{{ $t('customSolutions.whyCustom.workflow.detail') }}</p>
          </div>

          <div class="bg-white dark:bg-gray-800 p-8 rounded-xl">
            <h3 class="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">{{ $t('customSolutions.whyCustom.data.title') }}</h3>
            <p class="text-lg mb-4">{{ $t('customSolutions.whyCustom.data.description') }}</p>
            <p class="text-gray-600 dark:text-gray-400">{{ $t('customSolutions.whyCustom.data.detail') }}</p>
          </div>

          <div class="bg-white dark:bg-gray-800 p-8 rounded-xl">
            <h3 class="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">{{ $t('customSolutions.whyCustom.features.title') }}</h3>
            <p class="text-lg mb-4">{{ $t('customSolutions.whyCustom.features.description') }}</p>
            <p class="text-gray-600 dark:text-gray-400">{{ $t('customSolutions.whyCustom.features.detail') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CallToAction />
  </section>
</template>

<script setup lang="ts">
import CallToAction from "../../components/CallToAction.vue";

const { t } = useI18n();
const localePath = useLocalePath();

useHead({
  title: "Custom Business Solutions | CRMs, Dashboards, Intake Forms | Christopher Bermudez",
  meta: [
    {
      name: "description",
      content:
        "Replace expensive SaaS tools with custom business solutions. CRMs, intake forms, dashboards, and payment systems built for your exact workflow.",
    },
    {
      property: "og:title",
      content: "Custom Business Solutions - Replace Expensive SaaS Tools",
    },
    {
      property: "og:description",
      content:
        "Stop paying monthly fees for generic tools. Get custom CRMs, dashboards, and business systems built specifically for your needs.",
    },
  ],
});
</script>
