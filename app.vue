<template>
  <NuxtLayout />
</template>

<script setup lang="ts">
// Set document head
useHead({
  htmlAttrs: { lang: 'en' },
  titleTemplate: '%s · Christopher Bermudez',
  meta: [
    { name: 'description', content: 'Your go-to expert for web design, SEO, and digital marketing in Florida.' }
  ]
})

// Theme initialization (only on the client side)
onMounted(() => {
  const savedTheme = localStorage.getItem('color-theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>


<style scoped>
/* Add any global CSS styles here */
</style>
