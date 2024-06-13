<template>
  <section class="my-story-section bg-white dark:bg-[#1d1d1d]">
    <div class="container max-w-7xl mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center">
        <div class="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            style="transform: scale(0.7)"
            src="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/260a4bff-3c8c-4393-ec24-3a2dad8fe700/public"
            alt="Christopher Bermudez"
            class="rounded-lg max-w-full h-auto"
          />
        </div>
        <div class="w-full md:w-1/2 text-center md:text-left">
          <p class="text-purple-500 font-semibold mb-2">{{ $t('home.mystory.journey') }}</p>
          <h2 class="text-6xl font-bold mb-4">{{ $t('home.mystory.storyheader') }}</h2>
          <p class="text-lg font-light">
            {{ $t('home.mystory.storytext') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional JavaScript needed for this section
</script>

<style scoped>
@media (max-width: 768px) {
  .my-story-section .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
