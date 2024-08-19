<template>
    <div class="py-12 bg-gray-50 bg-white dark:bg-[#1d1d1d] text-gray-900 dark:text-white">
      <div class="max-w-7xl mx-auto w-10/12">
        <h1 class="text-6xl font-bold text-center">Schedule an Interview</h1>
        <hr class="max-w-xs md:max-w-md mx-auto my-8 md:my-4 border border-purple-800"/>
        <CalendlyWidget />
      </div>
    </div>
  </template>
  
  <script setup>
  import CalendlyWidget from '@/components/appointments/CalendlyWidget.vue';
  </script>
  
  <style scoped>
  /* Add additional styles if necessary */
  </style>