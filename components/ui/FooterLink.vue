<template>
    <li class="mb-4">
      <a :href="href" class="hover:underline">{{ text }}</a>
    </li>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    href: string;
    text: string;
  }>();
  </script>