<template>
    <div :class="['py-12 md:py-12 lg:py-20 mx-auto xl:max-w-screen-xl', customClass]">
      <slot></slot>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    customClass: {
      type: String,
      default: '',
    },
  });
  </script>
  
  <style scoped>
  /* Additional custom styles if necessary */
  </style>
  