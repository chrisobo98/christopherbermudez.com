<template>
    <div class="bg-[#232323] p-6 rounded-lg shadow-lg text-center">
      <div class="mb-4">
        <img :src="iconSrc" :alt="altText" class="mx-auto max-w-[164px]" />
      </div>
      <h3 class="text-3xl font-semibold mb-2">{{ title }}</h3>
      <p class="text-gray-400">{{ description }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  
  const props = defineProps<{
    iconSrc: string;
    altText: string;
    title: string;
    description: string;
  }>()
  </script>
  
  <style scoped>
  /* No additional styles needed as Tailwind handles everything */
  </style>
  