<template>
    <div :class="['bg-[#e6e7eb] dark:bg-[#232323] px-8 py-8 shadow-xl dark:shadow-[0_20px_90px_-60px_rgb(46,16,101)] rounded-x', customClass]">
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
  