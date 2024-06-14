<template>
    <div
      v-if="show"
      :class="[
        'fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800',
      ]"
      role="alert"
    >
      <svg
        class="w-5 h-5 text-violet-600 dark:text-violet-500 rotate-45"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 20"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
        />
      </svg>
      <div class="ps-4 text-sm font-normal">{{ message }}</div>
      <button
        type="button"
        @click="closeNotification"
        class="bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        aria-label="Close"
      >
        <span class="sr-only">Close</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  
  const props = defineProps<{
    message: string;
    duration: number;
  }>();
  
  const show = ref(true);
  
  const closeNotification = () => {
    show.value = false;
  };
  
  onMounted(() => {
    setTimeout(() => {
      show.value = false;
    }, props.duration);
  });
  </script>
  
  <style scoped>
  .fixed {
    position: fixed;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    transition: opacity 0.5s ease;
  }
  button {
    border: none;
  }
  </style>
  