<template>
  <div
    class="bg-[#D4D4D4] dark:bg-[#232323] p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
  >
    <div class="mb-4 w-full flex justify-center">
      <NuxtImg
        provider="cloudflare"
        :src="iconSrc"
        :alt="altText"
        loading="lazy"
        width="100%"
        height="100%"
        style="transform: scale(0.8)"
        class="rounded-lg max-w-full h-auto"
      />
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
