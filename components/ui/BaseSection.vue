<template>
    <div :class="['py-12 md:py-20 lg:py-28 mx-auto max-w-sm md:max-w-screen-md xl:max-w-screen-xl', customClass]">
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
  