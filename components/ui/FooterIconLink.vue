<template>
    <a :href="href" class="text-gray-800 dark:text-gray-100 hover:text-violet-500 dark:hover:text-white ms-5">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path :d="iconPath" />
      </svg>
      <span class="sr-only">{{ srLabel }}</span>
    </a>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    href: string;
    iconPath: string;
    srLabel: string;
  }>();
  </script>
  