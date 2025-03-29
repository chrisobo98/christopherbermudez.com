<template>
  <div
    class="bg-white border dark:border-gray-700 hover:border-purple-500 dark:bg-[#232323] p-6 rounded-lg shadow-lg text-center flex flex-col items-center transition-all duration-1000 border-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt';">
    <div class="mb-4 w-full flex justify-center">
      <NuxtImg provider="cloudinary" :src="iconSrc" :alt="altText" loading="lazy" width="250" height="250" />
    </div>
    <h3 class="text-3xl text-black dark:text-white font-semibold mb-2">
      {{ title }}
    </h3>
    <p class="text-gray-800 dark:text-gray-200">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  iconSrc: string;
  altText: string;
  title: string;
  description: string;
}>();
</script>

<style scoped>
/* No additional styles needed as Tailwind handles everything */
</style>
