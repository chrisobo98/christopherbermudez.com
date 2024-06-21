<template>
    <ol class="relative border-s border-violet-400 dark:border-violet-600">
      <li class="pb-10 ms-4 flex items-start space-x-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-black dark:border-white dark:bg-gray-600"></div>
        <div class="flex-shrink-0 mt-2">
          <img :src="image" alt="Image" class="w-12 h-12 rounded-lg" />
        </div>
        <div>
          <time class="mb-1 text-sm font-normal leading-none">{{ date }}</time>
          <h3 class="text-2xl font-semibold">{{ title }}</h3>
          <p class="text-base font-normal">{{ description }}</p>
        </div>
      </li>
    </ol>
  </template>
  
  <script setup>
  defineProps({
    date: String,
    title: String,
    description: String,
    image: String,
  });
  </script>
  
  <style scoped>
  /* Add additional styling if required */
  </style>
  