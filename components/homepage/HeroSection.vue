<template>
  <section class="relative h-screen flex items-center justify-center text-white">
    <div class="absolute transform">
      <!-- <img src="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/def798a9-49fc-4463-61de-d0d8979b6600/public" alt="Overlay Image" class="w-auto h-auto" /> -->
    </div>
    <div class="relative z-10 text-center">
      <h1 class="text-6xl font-bold">Christopher Bermudez</h1>
      <h3 class="text-4xl font-semibold text-purple-600">Software Development</h3>
      <p class="text-2xl font-extralight">Bridging Design and Functionality for Your Business Success</p>
      <BaseButton @click="navigateToDiscover">Discover How</BaseButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue';

const navigateToDiscover = () => {
  // Navigate to the discover section or page
}
</script>

<style scoped>
.transform {
  z-index: -1;
  transform: scale(1.6) translate(80px, 0%);
}
</style>
