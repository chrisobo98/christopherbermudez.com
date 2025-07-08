<template>
  <main v-if="template" class="py-12 md:py-20 relative text-white">
    <!-- Coming Soon Banner -->
    <div v-if="template.isComingSoon" class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <div class="bg-yellow-400 text-yellow-900 font-bold uppercase tracking-wider text-sm px-6 py-2 rounded-full shadow-lg -rotate-6">
            {{ $t('templates.detail.comingSoon') }}
        </div>
    </div>

    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto space-y-20">
      <!-- Header + Main Details -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Image with floating effect -->
        <div class="relative animate-float">
          <NuxtImg
            provider="cloudinary"
            :src="template.imageUrl"
            :alt="`Detailed view of ${t(template.nameKey)} template`"
            class="rounded-xl shadow-2xl shadow-purple-900/20 w-full"
            width="auto"
            height="auto"
            :class="{'opacity-50 blur-sm': template.isComingSoon}"
          />
        </div>

        <!-- Text Content -->
        <div class="space-y-6">
          <div class="space-y-3">
             <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in template.tags"
                :key="tag"
                class="whitespace-nowrap rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-purple-300"
              >
                {{ tag }}
              </span>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold font-manrope">
              {{ t(template.nameKey) }}
            </h1>
            <p class="text-lg text-gray-300">
              {{ t(template.longDescriptionKey) }}
            </p>
          </div>
          
          <div class="border-t border-gray-800 pt-6 space-y-4">
              <p class="text-3xl font-bold text-white">
                ${{ template.price }}
                <span class="text-base font-normal text-gray-400">{{ $t('templates.detail.oneTime') }}</span>
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                  <NuxtLink :to="template.livePreviewUrl" v-if="!template.isComingSoon" target="_blank" class="w-full text-center px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center gap-2">
                      <Icon name="carbon:launch" size="1.2em" />
                      {{ $t('templates.detail.livePreview') }}
                  </NuxtLink>
                  <NuxtLink to="/contact" class="w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2" :class="template.isComingSoon ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'">
                      <Icon :name="template.isComingSoon ? 'carbon:notification' : 'carbon:shopping-cart'" size="1.2em" />
                      {{ template.isComingSoon ? $t('templates.detail.notifyMe') : $t('templates.detail.purchase') }}
                  </NuxtLink>
              </div>
          </div>
        </div>
      </div>

      <!-- Why Choose This Template Section -->
      <section v-if="t(template.whyChooseKey)" class="py-16 text-center bg-gray-900 rounded-2xl border border-purple-900/50">
          <div class="max-w-3xl mx-auto px-6">
              <Icon name="carbon:idea" class="text-purple-400 mx-auto" size="3em"/>
              <h2 class="text-3xl font-bold font-manrope mt-4">
                  {{ $t('templates.detail.whyChooseTitle') }}
              </h2>
              <p class="mt-3 text-lg text-gray-300">
                  {{ t(template.whyChooseKey) }}
              </p>
          </div>
      </section>

      <!-- Features Section -->
      <section class="py-16 border-t border-gray-800">
        <div class="text-center max-w-2xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold font-manrope">
                {{ $t('templates.detail.featuresTitle') }}
            </h2>
            <p class="mt-3 text-gray-400">
                {{ $t('templates.detail.featuresDescription') }}
            </p>
        </div>
        <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              v-for="(feature, i) in template.features"
              :key="i"
              class="flex flex-col items-center text-center p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-purple-600 hover:-translate-y-1 transition-all"
            >
              <div class="p-4 bg-purple-600/20 text-purple-400 rounded-lg">
                <Icon
                  :name="feature.icon"
                  size="2.5em"
                />
              </div>
              <div class="mt-4">
                <h3 class="text-xl font-semibold">{{ t(feature.titleKey) }}</h3>
                <p class="mt-1 text-sm text-gray-400">{{ t(feature.descriptionKey) }}</p>
              </div>
            </div>
          </div>
      </section>
      
      <!-- Tech Stack Section -->
      <section v-if="template.techStack && template.techStack.length" class="py-16 border-t border-gray-800">
        <div class="text-center max-w-2xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold font-manrope">
                {{ $t('templates.detail.techStackTitle') }}
            </h2>
            <p class="mt-3 text-gray-400">
                {{ $t('templates.detail.techStackDescription') }}
            </p>
        </div>
        <div class="mt-12 flex flex-wrap justify-center gap-3">
          <span v-for="tech in template.techStack" :key="tech" class="bg-gray-800 text-gray-300 text-sm font-medium px-4 py-2 rounded-full border border-gray-700">
              {{ tech }}
          </span>
        </div>
      </section>

    </div>
  </main>
  <div v-else class="flex items-center justify-center h-screen">
      <h1 class="text-2xl font-bold">{{ $t('templates.detail.notFound') }}</h1>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { templates } from '@/data/templates';
import type { Template } from '@/data/templates';

const { t } = useI18n();
const route = useRoute();
const templateId = route.params.id as string;

// Find the template based on the route's 'id' parameter.
const template = computed<Template | undefined>(() => templates.find(p => p.id === templateId));

// Dynamic SEO Metadata
useSeoMeta({
  title: () => template.value ? t(template.value.isComingSoon ? 'templates.detail.meta.comingSoonTitle' : 'templates.detail.meta.title', { templateName: t(template.value.nameKey) }) : 'Template Not Found',
  description: () => template.value ? t(template.value.descriptionKey) : 'The template you are looking for could not be found.',
  ogTitle: () => template.value ? t(template.value.isComingSoon ? 'templates.detail.meta.comingSoonTitle' : 'templates.detail.meta.title', { templateName: t(template.value.nameKey) }) : 'Template Not Found',
  ogDescription: () => template.value ? t(template.value.descriptionKey) : 'The template you are looking for could not be found.',
  ogImage: () => template.value ? `https://res.cloudinary.com/[your-cloud-name]/image/upload/${template.value.imageUrl}` : '', // Make sure to add your full Cloudinary URL
});
</script>

<style scoped>
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>