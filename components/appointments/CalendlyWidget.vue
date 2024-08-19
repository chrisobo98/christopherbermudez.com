<template>
    <div class="calendly-inline-widget mt-2 h-screen" :data-url="calendlyUrl"></div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  const calendlyUrl = "https://calendly.com/christopherbermudez/30min";
  
  onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
  });
  </script>
  
  <style scoped>
  .calendly-inline-widget {
    min-width: 320px;
  }
  </style>
  