<template>
    <div>
      <h2 class="mb-6 text-xl font-semibold text-violet-500 uppercase">
        {{ title }}
      </h2>
      <ul class="text-gray-800 dark:text-gray-400 font-medium">
        <slot></slot>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    title: string;
  }>();
  </script>