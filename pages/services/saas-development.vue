<template>
  <section class="container mx-auto px-4" aria-label="SaaS Development Services">
    <!-- Hero Section -->
    <article class="mx-auto max-w-7xl px-4 py-16">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {{ $t('saasDev.hero.title') }} <span class="text-purple-600">{{ $t('saasDev.hero.highlight') }}</span> {{ $t('saasDev.hero.subtitle') }}
          </h1>
          <p class="text-xl lg:text-2xl mb-8">
            {{ $t('saasDev.hero.description') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink
              :to="localePath('/appointments')"
              class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg transition-colors duration-300 font-semibold text-lg"
            >
              {{ $t('saasDev.hero.cta') }}
            </NuxtLink>
          </div>

          <!-- Trust Metrics -->
          <div class="mt-12 grid grid-cols-3 gap-8 border-t border-gray-200 pt-8">
            <div class="text-center">
              <p class="text-3xl font-bold mb-2">{{ $t('saasDev.hero.metrics.realtime.value') }}</p>
              <p>{{ $t('saasDev.hero.metrics.realtime.label') }}</p>
            </div>
            <div class="text-center">
              <p class="text-3xl font-bold mb-2">{{ $t('saasDev.hero.metrics.scalable.value') }}</p>
              <p>{{ $t('saasDev.hero.metrics.scalable.label') }}</p>
            </div>
            <div class="text-center">
              <p class="text-3xl font-bold mb-2">{{ $t('saasDev.hero.metrics.secure.value') }}</p>
              <p>{{ $t('saasDev.hero.metrics.secure.label') }}</p>
            </div>
          </div>
        </div>

        <div class="relative">
          <NuxtImg
            provider="cloudinary"
            src="v1744048461/seo-services-clermont-and-greater-orlando_j7fhei.png"
            alt="SaaS development illustration"
            width="540"
            height="540"
            class="rounded-3xl"
            loading="lazy"
          />
        </div>
      </div>
    </article>

    <!-- SaaS Features Section -->
    <section class="py-16 lg:py-24 bg-muted" aria-labelledby="features-heading">
      <div class="max-w-7xl mx-auto px-4">
        <h2 id="features-heading" class="text-3xl lg:text-4xl font-bold text-center mb-12">
          {{ $t('saasDev.features.title') }}
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article class="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md">
            <Icon name="heroicons:user-group" class="w-12 h-12 text-purple-600 mb-4" />
            <h3 class="text-xl font-bold mb-3">{{ $t('saasDev.features.userManagement.title') }}</h3>
            <p>{{ $t('saasDev.features.userManagement.description') }}</p>
          </article>

          <article class="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md">
            <Icon name="heroicons:credit-card" class="w-12 h-12 text-purple-600 mb-4" />
            <h3 class="text-xl font-bold mb-3">{{ $t('saasDev.features.billing.title') }}</h3>
            <p>{{ $t('saasDev.features.billing.description') }}</p>
          </article>

          <article class="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md">
            <Icon name="heroicons:bolt" class="w-12 h-12 text-purple-600 mb-4" />
            <h3 class="text-xl font-bold mb-3">{{ $t('saasDev.features.realtime.title') }}</h3>
            <p>{{ $t('saasDev.features.realtime.description') }}</p>
          </article>

          <article class="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md">
            <Icon name="heroicons:chart-bar" class="w-12 h-12 text-purple-600 mb-4" />
            <h3 class="text-xl font-bold mb-3">{{ $t('saasDev.features.analytics.title') }}</h3>
            <p>{{ $t('saasDev.features.analytics.description') }}</p>
          </article>

          <article class="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md">
            <Icon name="heroicons:server" class="w-12 h-12 text-purple-600 mb-4" />
            <h3 class="text-xl font-bold mb-3">{{ $t('saasDev.features.api.title') }}</h3>
            <p>{{ $t('saasDev.features.api.description') }}</p>
          </article>

          <article class="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md">
            <Icon name="heroicons:envelope" class="w-12 h-12 text-purple-600 mb-4" />
            <h3 class="text-xl font-bold mb-3">{{ $t('saasDev.features.notifications.title') }}</h3>
            <p>{{ $t('saasDev.features.notifications.description') }}</p>
          </article>

          <article class="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md">
            <Icon name="heroicons:shield-check" class="w-12 h-12 text-purple-600 mb-4" />
            <h3 class="text-xl font-bold mb-3">{{ $t('saasDev.features.security.title') }}</h3>
            <p>{{ $t('saasDev.features.security.description') }}</p>
          </article>

          <article class="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md">
            <Icon name="heroicons:adjustments-horizontal" class="w-12 h-12 text-purple-600 mb-4" />
            <h3 class="text-xl font-bold mb-3">{{ $t('saasDev.features.admin.title') }}</h3>
            <p>{{ $t('saasDev.features.admin.description') }}</p>
          </article>

          <article class="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md">
            <Icon name="heroicons:globe-alt" class="w-12 h-12 text-purple-600 mb-4" />
            <h3 class="text-xl font-bold mb-3">{{ $t('saasDev.features.multiTenant.title') }}</h3>
            <p>{{ $t('saasDev.features.multiTenant.description') }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="py-16 lg:py-24">
      <div class="max-w-5xl mx-auto px-4">
        <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12">{{ $t('saasDev.techStack.title') }}</h2>

        <div class="flex flex-col md:flex-row gap-12 justify-center items-center">
          <div class="w-auto mx-auto md:mx-0">
            <h3 class="text-2xl font-bold mb-6 text-center">{{ $t('saasDev.techStack.frontend.title') }}</h3>
            <div class="space-y-4">
              <div class="flex items-center gap-4 justify-center md:justify-start">
                <Icon name="logos:vue" class="w-10 h-10 flex-shrink-0" />
                <div class="text-center md:text-left">
                  <p class="font-bold">{{ $t('saasDev.techStack.frontend.vue.name') }}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('saasDev.techStack.frontend.vue.description') }}</p>
                </div>
              </div>
              <div class="flex items-center gap-4 justify-center md:justify-start">
                <Icon name="logos:typescript-icon" class="w-10 h-10 flex-shrink-0" />
                <div class="text-center md:text-left">
                  <p class="font-bold">{{ $t('saasDev.techStack.frontend.typescript.name') }}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('saasDev.techStack.frontend.typescript.description') }}</p>
                </div>
              </div>
              <div class="flex items-center gap-4 justify-center md:justify-start">
                <Icon name="logos:tailwindcss-icon" class="w-10 h-10 flex-shrink-0" />
                <div class="text-center md:text-left">
                  <p class="font-bold">{{ $t('saasDev.techStack.frontend.tailwind.name') }}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('saasDev.techStack.frontend.tailwind.description') }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="w-auto mx-auto md:mx-0">
            <h3 class="text-2xl font-bold mb-6 text-center">{{ $t('saasDev.techStack.backend.title') }}</h3>
            <div class="space-y-4">
              <div class="flex items-center gap-4 justify-center md:justify-start">
                <Icon name="simple-icons:supabase" class="w-10 h-10 text-green-600 flex-shrink-0" />
                <div class="text-center md:text-left">
                  <p class="font-bold">{{ $t('saasDev.techStack.backend.supabase.name') }}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('saasDev.techStack.backend.supabase.description') }}</p>
                </div>
              </div>
              <div class="flex items-center gap-4 justify-center md:justify-start">
                <Icon name="simple-icons:stripe" class="w-10 h-10 text-purple-600 flex-shrink-0" />
                <div class="text-center md:text-left">
                  <p class="font-bold">{{ $t('saasDev.techStack.backend.stripe.name') }}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('saasDev.techStack.backend.stripe.description') }}</p>
                </div>
              </div>
              <div class="flex items-center gap-4 justify-center md:justify-start">
                <Icon name="simple-icons:cloudflare" class="w-10 h-10 text-orange-600 flex-shrink-0" />
                <div class="text-center md:text-left">
                  <p class="font-bold">{{ $t('saasDev.techStack.backend.cloudflare.name') }}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('saasDev.techStack.backend.cloudflare.description') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="py-16 lg:py-24 bg-muted">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12">{{ $t('saasDev.process.title') }}</h2>

        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              {{ $t('saasDev.process.step1.number') }}
            </div>
            <h3 class="text-xl font-bold mb-3">{{ $t('saasDev.process.step1.title') }}</h3>
            <p>{{ $t('saasDev.process.step1.description') }}</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              {{ $t('saasDev.process.step2.number') }}
            </div>
            <h3 class="text-xl font-bold mb-3">{{ $t('saasDev.process.step2.title') }}</h3>
            <p>{{ $t('saasDev.process.step2.description') }}</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              {{ $t('saasDev.process.step3.number') }}
            </div>
            <h3 class="text-xl font-bold mb-3">{{ $t('saasDev.process.step3.title') }}</h3>
            <p>{{ $t('saasDev.process.step3.description') }}</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              {{ $t('saasDev.process.step4.number') }}
            </div>
            <h3 class="text-xl font-bold mb-3">{{ $t('saasDev.process.step4.title') }}</h3>
            <p>{{ $t('saasDev.process.step4.description') }}</p>
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
  title: "SaaS Development | Build Scalable Web Applications | Christopher Bermudez",
  meta: [
    {
      name: "description",
      content:
        "Professional SaaS development services. Build scalable web applications with user management, subscriptions, real-time features, and cloud infrastructure.",
    },
    {
      property: "og:title",
      content: "SaaS Development Services - Scalable Web Applications",
    },
    {
      property: "og:description",
      content:
        "From MVP to enterprise SaaS. Real-time features, subscription billing, user management, and scalable cloud infrastructure.",
    },
  ],
});
</script>
