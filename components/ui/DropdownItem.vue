<template>
    <li>
      <a :href="href" class="block p-3 cursor-pointer rounded-lg hover:bg-violet-400 dark:hover:bg-gray-700">
        <div class="font-semibold text-black dark:text-gray-100">{{ title }}</div>
        <span class="text-sm text-gray-800 dark:text-gray-300">{{ description }}</span>
      </a>
    </li>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  const props = defineProps({
    href: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  });
  </script>
  