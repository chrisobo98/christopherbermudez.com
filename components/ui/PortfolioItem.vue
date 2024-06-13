<template>
    <a :href="url" target="_blank" :class="itemClass">
      <img :src="imageSrc" :alt="title" class="w-full lg:w-1/2 rounded-lg shadow-lg">
      <div class="lg:w-1/2 text-center lg:text-left">
        <h3 class="text-4xl font-semibold text-white mb-4">{{ title }}</h3>
        <p class="text-gray-400 font-light mb-4">{{ description }}</p>
        <div class="text-center lg:text-left">
          <BaseButton>{{ $t('home.portfolio.button_text') }}</BaseButton>
        </div>
      </div>
    </a>
  </template>
  
  <script setup lang="ts">
  import { defineProps, computed } from 'vue'
  import BaseButton from '@/components/ui/BaseButton.vue'
  
  const props = defineProps<{
    title: string;
    description: string;
    imageSrc: string;
    url: string;
    reverse?: boolean;
  }>()
  
  const itemClass = computed(() => 
    props.reverse 
      ? 'flex flex-col lg:flex-row-reverse items-center space-y-6 lg:space-y-0 lg:space-x-12'
      : 'flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12'
  )
  </script>
  
  <style scoped>
  /* No additional styles needed as Tailwind handles everything */
  </style>
  