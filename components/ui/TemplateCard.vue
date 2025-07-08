<template>
  <NuxtLink
    :to="template.isComingSoon ? '#' : localePath(`/templates/${template.id}`)"
    class="group relative flex flex-col overflow-hidden rounded-xl border border-gray-800 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
    :class="{'cursor-not-allowed': template.isComingSoon}"
    :aria-label="template.isComingSoon ? `${t(template.nameKey)} (Coming Soon)` : `View details for ${t(template.nameKey)}`"
  >
    <!-- Floating animation element (no changes here) -->
    <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 transition-transform duration-500 ease-out group-hover:scale-x-100 scale-x-0"></span>

    <!-- Image Container (no changes here) -->
    <div class="relative overflow-hidden aspect-video bg-gray-900">
      <NuxtImg
        provider="cloudinary"
        :src="template.imageUrl"
        :alt="`Preview of ${t(template.nameKey)} template`"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        :class="{'opacity-40 blur-sm': template.isComingSoon}"
        loading="lazy"
      />
      <div 
        class="absolute inset-0 bg-black/25 transition-opacity duration-300 flex items-center justify-center"
        :class="{'opacity-100': template.isComingSoon, 'opacity-0 group-hover:opacity-100': !template.isComingSoon}"
      >
        <div v-if="!template.isComingSoon" class="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm">
          <Icon name="carbon:view" size="1.2em" />
          <span>{{ $t('templates.card.viewDetails') }}</span>
        </div>
        <div v-if="template.isComingSoon" class="rounded-full bg-yellow-400/80 px-4 py-2 text-sm font-bold text-yellow-900 backdrop-blur-sm">
          <span>{{ $t('templates.detail.comingSoon') }}</span>
        </div>
      </div>
    </div>

    <!-- Content -->
    <!-- THE FIX IS HERE: Make the content area a growing flex column -->
    <div class="relative flex flex-grow flex-col bg-gray-900 p-6">
      <div class="flex items-start justify-between">
        <h3 class="text-xl font-bold font-manrope text-white">
          {{ t(template.nameKey) }}
        </h3>
        <span class="rounded-full bg-purple-600 px-3 py-1.5 text-xs font-semibold text-white">
          ${{ template.price }}
        </span>
      </div>

      <!-- THE FIX IS HERE: Make the description grow to push tags down -->
      <p class="mt-2 text-sm text-gray-400 flex-grow">
        {{ t(template.descriptionKey) }}
      </p>

      <div class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="tag in template.tags"
          :key="tag"
          class="whitespace-nowrap rounded-full bg-gray-800 px-2.5 py-1 text-xs text-gray-300"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Template } from '@/data/templates';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

interface Props {
  template: Template;
}

defineProps<Props>();

const localePath = useLocalePath();
</script>