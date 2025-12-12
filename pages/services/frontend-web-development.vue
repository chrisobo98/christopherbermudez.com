<template>
  <section class="container mx-auto px-4" aria-label="Frontend Web Development Services">
    <!-- Hero Section -->
    <article class="mx-auto max-w-7xl px-4 py-16">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {{ $t('home.frontendDev.hero.title') }} <span class="text-purple-600">{{ $t('home.frontendDev.hero.highlight') }}</span>
          </h1>
          <p class="text-xl lg:text-2xl mb-8">
            {{ $t('home.frontendDev.hero.description') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink
              :to="localePath('/appointments')"
              class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg transition-colors duration-300 font-semibold text-lg"
            >
              {{ $t('home.frontendDev.hero.cta') }}
            </NuxtLink>
          </div>

          <!-- Trust Metrics -->
          <div class="mt-12 grid grid-cols-3 gap-8 border-t border-gray-200 pt-8">
            <div class="text-center">
              <p class="text-3xl font-bold mb-2">{{ $t('home.frontendDev.hero.metrics.performance.value') }}</p>
              <p>{{ $t('home.frontendDev.hero.metrics.performance.label') }}</p>
            </div>
            <div class="text-center">
              <p class="text-3xl font-bold mb-2">{{ $t('home.frontendDev.hero.metrics.modern.value') }}</p>
              <p>{{ $t('home.frontendDev.hero.metrics.modern.label') }}</p>
            </div>
            <div class="text-center">
              <p class="text-3xl font-bold mb-2">{{ $t('home.frontendDev.hero.metrics.responsive.value') }}</p>
              <p>{{ $t('home.frontendDev.hero.metrics.responsive.label') }}</p>
            </div>
          </div>
        </div>

        <div class="relative">
          <NuxtImg
            provider="cloudinary"
            src="v1744048461/seo-services-clermont-and-greater-orlando_j7fhei.png"
            alt="Frontend development illustration"
            width="540"
            height="540"
            class="rounded-3xl"
            loading="lazy"
          />
        </div>
      </div>
    </article>

    <!-- Tech Stack Section -->
    <section class="py-16 lg:py-24 bg-muted" aria-labelledby="tech-stack-heading">
      <div class="max-w-7xl mx-auto px-4">
        <h2 id="tech-stack-heading" class="text-3xl lg:text-4xl font-bold text-center mb-12">
          {{ $t('home.frontendDev.techStack.title') }}
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article class="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Icon name="logos:vue" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold mb-3">{{ $t('home.frontendDev.techStack.frontend.vue.name') }}</h3>
            <p>{{ $t('home.frontendDev.techStack.frontend.vue.description') }}</p>
          </article>

          <article class="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Icon name="logos:typescript-icon" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold mb-3">{{ $t('home.frontendDev.techStack.frontend.typescript.name') }}</h3>
            <p>{{ $t('home.frontendDev.techStack.frontend.typescript.description') }}</p>
          </article>

          <article class="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
              <Icon name="logos:tailwindcss-icon" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold mb-3">{{ $t('home.frontendDev.techStack.frontend.tailwind.name') }}</h3>
            <p>{{ $t('home.frontendDev.techStack.frontend.tailwind.description') }}</p>
          </article>

          <article class="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Icon name="simple-icons:supabase" class="w-8 h-8 text-green-600" />
            </div>
            <h3 class="text-xl font-bold mb-3">{{ $t('home.frontendDev.techStack.backend.supabase.name') }}</h3>
            <p>{{ $t('home.frontendDev.techStack.backend.supabase.description') }}</p>
          </article>

          <article class="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Icon name="simple-icons:vite" class="w-8 h-8 text-purple-600" />
            </div>
            <h3 class="text-xl font-bold mb-3">{{ $t('home.frontendDev.techStack.backend.vite.name') }}</h3>
            <p>{{ $t('home.frontendDev.techStack.backend.vite.description') }}</p>
          </article>

          <article class="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Icon name="simple-icons:cloudflare" class="w-8 h-8 text-orange-600" />
            </div>
            <h3 class="text-xl font-bold mb-3">{{ $t('home.frontendDev.techStack.backend.cloudflare.name') }}</h3>
            <p>{{ $t('home.frontendDev.techStack.backend.cloudflare.description') }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- What I Build Section -->
    <section class="py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12">{{ $t('home.frontendDev.whatIBuild.title') }}</h2>

        <div class="grid md:grid-cols-2 gap-12">
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="heroicons:check" class="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">{{ $t('home.frontendDev.whatIBuild.spa.title') }}</h3>
                <p>{{ $t('home.frontendDev.whatIBuild.spa.description') }}</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="heroicons:check" class="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">{{ $t('home.frontendDev.whatIBuild.ssr.title') }}</h3>
                <p>{{ $t('home.frontendDev.whatIBuild.ssr.description') }}</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="heroicons:check" class="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">{{ $t('home.frontendDev.whatIBuild.pwa.title') }}</h3>
                <p>{{ $t('home.frontendDev.whatIBuild.pwa.description') }}</p>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="heroicons:check" class="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">{{ $t('home.frontendDev.whatIBuild.ssg.title') }}</h3>
                <p>{{ $t('home.frontendDev.whatIBuild.ssg.description') }}</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="heroicons:check" class="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">{{ $t('home.frontendDev.whatIBuild.dashboards.title') }}</h3>
                <p>{{ $t('home.frontendDev.whatIBuild.dashboards.description') }}</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="heroicons:check" class="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">{{ $t('home.frontendDev.whatIBuild.ecommerce.title') }}</h3>
                <p>{{ $t('home.frontendDev.whatIBuild.ecommerce.description') }}</p>
              </div>
            </div>
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
  title: "Frontend Web Development | Vue 3, Nuxt, TypeScript | Christopher Bermudez",
  meta: [
    {
      name: "description",
      content:
        "Professional frontend web development services using Vue 3, Nuxt, and TypeScript. Building fast, scalable, and modern web applications.",
    },
    {
      property: "og:title",
      content: "Frontend Web Development Services - Vue 3 & Nuxt",
    },
    {
      property: "og:description",
      content:
        "Expert frontend development with Vue 3, Nuxt, TypeScript, and Tailwind CSS. Creating beautiful, performant web applications.",
    },
  ],
});
</script>
