<!-- NavLink.vue -->
<template>
    <li>
      <a :href="href" class="block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-purple-700 lg:p-0 lg:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-purple-500 lg:dark:hover:bg-transparent dark:border-gray-700">
        {{ text }}
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
    text: {
      type: String,
      required: true
    }
  });
  </script>
  