<template>
  <div class="bg-white dark:bg-[#1d1d1d]">
    <Header />
    <NuxtPage />
    <Footer id="footer-section" />
  </div>
</template>

<script setup lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<style scoped>
/* Add your global CSS styles here */
</style>
