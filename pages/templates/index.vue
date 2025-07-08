<template>
  <main class="py-12 md:py-20">
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto space-y-16">
      <!-- Hero Section -->
      <div class="text-center max-w-3xl mx-auto">
        <span class="text-[#7c42e0] text-lg font-semibold tracking-wider uppercase">
          {{ $t('templates.index.subtitle') }}
        </span>
        <h1 class="text-4xl md:text-6xl font-bold font-manrope mt-2">
          {{ $t('templates.index.title') }}
        </h1>
        <p class="mt-4 text-lg text-gray-300">
          {{ $t('templates.index.description') }}
        </p>
      </div>

      <!-- Template Grid -->
      <section aria-labelledby="templates-heading">
        <h2 id="templates-heading" class="sr-only">
          Available Templates
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <TemplateCard
            v-for="template in templates"
            :key="template.id"
            :template="template"
          />
        </div>
      </section>

       <!-- Add a CTA or other sections from your example page if you want -->
      <CallToAction />
    </div>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { templates } from '@/data/templates'; // Our single source of truth
import TemplateCard from '@/components/ui/TemplateCard.vue';
import CallToAction from '@/components/CallToAction.vue'; // Assuming you have this component

const { t } = useI18n();

// SEO Metadata
useSeoMeta({
  title: t('templates.index.meta.title'),
  description: t('templates.index.meta.description'),
  ogTitle: t('templates.index.meta.title'),
  ogDescription: t('templates.index.meta.description'),
  // Add other meta tags like og:image if you have a general image for this page
});
</script>