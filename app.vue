<template>
  <NuxtLayout />
</template>

<script setup>
import '@/assets/css/main.css'

// Set document head
useHead({
  htmlAttrs: { lang: 'en' },
  titleTemplate: '%s · Christopher Bermudez',
  meta: [
    { name: 'description', content: 'Your go-to expert for web design, SEO, and digital marketing.' }
  ]
})
</script>


<style scoped>
/* Add any global CSS styles here */
</style>
