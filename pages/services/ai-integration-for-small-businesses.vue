<template>
  <section class="container mx-auto px-4" aria-label="AI Integration for Small Businesses">
    <!-- Hero Section -->
    <article class="mx-auto max-w-7xl px-4 py-16">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span class="text-purple-600">{{ $t('aiIntegrationService.hero.title') }}</span> {{ $t('aiIntegrationService.hero.highlight') }}
          </h1>
          <p class="text-xl lg:text-2xl mb-8">
            {{ $t('aiIntegrationService.hero.description') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink
              :to="localePath('/appointments')"
              class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg transition-colors duration-300 font-semibold text-lg"
            >
              {{ $t('aiIntegrationService.hero.cta') }}
            </NuxtLink>
          </div>

          <!-- Trust Metrics -->
          <div class="mt-12 grid grid-cols-3 gap-8 border-t border-gray-200 pt-8">
            <div class="text-center">
              <p class="text-3xl font-bold mb-2">{{ $t('aiIntegrationService.hero.metrics.hours.value') }}</p>
              <p>{{ $t('aiIntegrationService.hero.metrics.hours.label') }}</p>
            </div>
            <div class="text-center">
              <p class="text-3xl font-bold mb-2">{{ $t('aiIntegrationService.hero.metrics.automation.value') }}</p>
              <p>{{ $t('aiIntegrationService.hero.metrics.automation.label') }}</p>
            </div>
            <div class="text-center">
              <p class="text-3xl font-bold mb-2">{{ $t('aiIntegrationService.hero.metrics.smart.value') }}</p>
              <p>{{ $t('aiIntegrationService.hero.metrics.smart.label') }}</p>
            </div>
          </div>
        </div>

        <div class="relative">
          <NuxtImg
            provider="cloudinary"
            src="v1744048461/seo-services-clermont-and-greater-orlando_j7fhei.png"
            alt="AI Integration illustration"
            width="540"
            height="540"
            class="rounded-3xl"
            loading="lazy"
          />
        </div>
      </div>
    </article>

    <!-- Use Cases Section -->
    <section class="py-16 lg:py-24 bg-muted" aria-labelledby="use-cases-heading">
      <div class="max-w-7xl mx-auto px-4">
        <h2 id="use-cases-heading" class="text-3xl lg:text-4xl font-bold text-center mb-12">
          {{ $t('aiIntegrationService.useCases.title') }}
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article class="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md">
            <Icon name="heroicons:chat-bubble-left-right" class="w-12 h-12 text-purple-600 mb-4" />
            <h3 class="text-xl font-bold mb-3">{{ $t('aiIntegrationService.useCases.customerService.title') }}</h3>
            <p>{{ $t('aiIntegrationService.useCases.customerService.description') }}</p>
          </article>

          <article class="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md">
            <Icon name="heroicons:chart-pie" class="w-12 h-12 text-purple-600 mb-4" />
            <h3 class="text-xl font-bold mb-3">{{ $t('aiIntegrationService.useCases.dataAnalytics.title') }}</h3>
            <p>{{ $t('aiIntegrationService.useCases.dataAnalytics.description') }}</p>
          </article>

          <article class="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md">
            <Icon name="heroicons:document-text" class="w-12 h-12 text-purple-600 mb-4" />
            <h3 class="text-xl font-bold mb-3">{{ $t('aiIntegrationService.useCases.contentGeneration.title') }}</h3>
            <p>{{ $t('aiIntegrationService.useCases.contentGeneration.description') }}</p>
          </article>

          <article class="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md">
            <Icon name="heroicons:cog" class="w-12 h-12 text-purple-600 mb-4" />
            <h3 class="text-xl font-bold mb-3">{{ $t('aiIntegrationService.useCases.automation.title') }}</h3>
            <p>{{ $t('aiIntegrationService.useCases.automation.description') }}</p>
          </article>

          <article class="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md">
            <Icon name="heroicons:user-group" class="w-12 h-12 text-purple-600 mb-4" />
            <h3 class="text-xl font-bold mb-3">{{ $t('aiIntegrationService.useCases.hrRecruitment.title') }}</h3>
            <p>{{ $t('aiIntegrationService.useCases.hrRecruitment.description') }}</p>
          </article>

          <article class="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md">
            <Icon name="heroicons:shield-check" class="w-12 h-12 text-purple-600 mb-4" />
            <h3 class="text-xl font-bold mb-3">{{ $t('aiIntegrationService.useCases.security.title') }}</h3>
            <p>{{ $t('aiIntegrationService.useCases.security.description') }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Real Examples Section -->
    <section class="py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12">{{ $t('aiIntegrationService.realExamples.title') }}</h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article class="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all">
            <h3 class="text-xl font-bold mb-3">{{ $t('aiIntegrationService.realExamples.restaurant.title') }}</h3>
            <p>{{ $t('aiIntegrationService.realExamples.restaurant.description') }}</p>
          </article>

          <article class="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all">
            <h3 class="text-xl font-bold mb-3">{{ $t('aiIntegrationService.realExamples.retail.title') }}</h3>
            <p>{{ $t('aiIntegrationService.realExamples.retail.description') }}</p>
          </article>

          <article class="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all">
            <h3 class="text-xl font-bold mb-3">{{ $t('aiIntegrationService.realExamples.legal.title') }}</h3>
            <p>{{ $t('aiIntegrationService.realExamples.legal.description') }}</p>
          </article>

          <article class="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all">
            <h3 class="text-xl font-bold mb-3">{{ $t('aiIntegrationService.realExamples.fitness.title') }}</h3>
            <p>{{ $t('aiIntegrationService.realExamples.fitness.description') }}</p>
          </article>

          <article class="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all">
            <h3 class="text-xl font-bold mb-3">{{ $t('aiIntegrationService.realExamples.realEstate.title') }}</h3>
            <p>{{ $t('aiIntegrationService.realExamples.realEstate.description') }}</p>
          </article>

          <article class="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all">
            <h3 class="text-xl font-bold mb-3">{{ $t('aiIntegrationService.realExamples.ecommerce.title') }}</h3>
            <p>{{ $t('aiIntegrationService.realExamples.ecommerce.description') }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-16 lg:py-24 bg-muted">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12">{{ $t('aiIntegrationService.howItWorks.title') }}</h2>

        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              {{ $t('aiIntegrationService.howItWorks.step1.number') }}
            </div>
            <h3 class="text-xl font-bold mb-3">{{ $t('aiIntegrationService.howItWorks.step1.title') }}</h3>
            <p>{{ $t('aiIntegrationService.howItWorks.step1.description') }}</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              {{ $t('aiIntegrationService.howItWorks.step2.number') }}
            </div>
            <h3 class="text-xl font-bold mb-3">{{ $t('aiIntegrationService.howItWorks.step2.title') }}</h3>
            <p>{{ $t('aiIntegrationService.howItWorks.step2.description') }}</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              {{ $t('aiIntegrationService.howItWorks.step3.number') }}
            </div>
            <h3 class="text-xl font-bold mb-3">{{ $t('aiIntegrationService.howItWorks.step3.title') }}</h3>
            <p>{{ $t('aiIntegrationService.howItWorks.step3.description') }}</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              {{ $t('aiIntegrationService.howItWorks.step4.number') }}
            </div>
            <h3 class="text-xl font-bold mb-3">{{ $t('aiIntegrationService.howItWorks.step4.title') }}</h3>
            <p>{{ $t('aiIntegrationService.howItWorks.step4.description') }}</p>
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
  title: "AI Integration for Small Businesses | Chatbots, Automation, Analytics | Christopher Bermudez",
  meta: [
    {
      name: "description",
      content:
        "AI integration services for small businesses. Implement chatbots, automation, data analytics, and smart features to streamline operations and save time.",
    },
    {
      property: "og:title",
      content: "AI Integration Services - Smart Solutions for Small Businesses",
    },
    {
      property: "og:description",
      content:
        "Automate tasks, improve customer service, and gain data-driven insights with custom AI integrations built for your business.",
    },
  ],
});
</script>
