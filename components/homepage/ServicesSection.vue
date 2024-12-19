<template>
  <section class="py-20 bg-white dark:bg-[#1d1d1d]">
    <div class="container w-11/12 max-w-7xl mx-auto px-4">
      <!-- Services Header and subheader -->
      <GSAPAnimatedRevealEffect>
        <p class="text-purple-500 dark:text-[#b695ff] text-center md:text-left font-semibold mb-4">{{
          $t('home.services.subheader') }}</p>
        <h3 class="text-6xl text-center md:text-left text-black dark:text-white font-bold mb-10">{{
          $t('home.services.header') }}</h3>
      </GSAPAnimatedRevealEffect>

      <!-- Service Cards with service-card class for proper stagger -->
      <GSAPStaggeredReveal>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white border hover:border-purple-500 dark:bg-[#232323] p-6 rounded-lg shadow-lg text-center flex flex-col items-center transitiona-all duration-1000 border-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
            <div class="mb-4 w-full flex justify-center">
              <img provider="cloudflare" src="assets/css/images/consulting.png" alt="altText" loading="lazy"
                width="80%" height="100%" class="rounded-lg max-w-full h-auto" />
            </div>
            <div class="my-3">

              <h3 class="text-3xl text-black dark:text-white font-semibold mb-2">
                {{ $t('home.services.consultation') }}
              </h3>
              <p class="text-gray-800 dark:text-gray-200">{{ $t('home.services.consultation_text') }}</p>
            </div>
          </div>

          <div class="bg-white border hover:border-purple-500 dark:bg-[#232323] p-6 rounded-lg shadow-lg text-center flex flex-col items-center transitiona-all duration-1000 border-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
            <div class="mb-4 w-full flex justify-center">
              <img provider="cloudflare" src="assets/css/images/web_development.png" alt="altText" loading="lazy"
              width="80%" height="100%" class="rounded-lg max-w-full h-auto" />
            </div>
            <div class="my-3">

              <h3 class="text-3xl text-black dark:text-white font-semibold mb-2">
                {{ $t('home.services.softwaredev') }}
              </h3>
              <p class="text-gray-800 dark:text-gray-200">{{ $t('home.services.softwaredev_text') }}</p>
            </div>
          </div>

          <div class="bg-white border hover:border-purple-500 dark:bg-[#232323] p-6 rounded-lg shadow-lg text-center flex flex-col items-center transitiona-all duration-1000 border-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
            <div class="mb-4 w-full flex justify-center">
              <img provider="cloudflare" src="assets/css/images/maintenance.png" alt="altText" loading="lazy"
              width="80%" height="100%" class="rounded-lg max-w-full h-auto" />
            </div>
            <div class="my-3">
              <h3 class="text-3xl text-black dark:text-white font-semibold">
                {{ $t('home.services.maintenance_and_support') }}
              </h3>
              <p class="text-gray-800 dark:text-gray-200">{{ $t('home.services.maintenance_and_support_text') }}</p>
            </div>
          </div>
          <div class="bg-white border hover:border-purple-500 dark:bg-[#232323] p-6 rounded-lg shadow-lg text-center flex flex-col items-center transitiona-all duration-1000 border-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
            <div class="mb-4 w-full flex justify-center">
              <img provider="cloudflare" src="assets/css/images/services.png" alt="altText" loading="lazy" width="80%"
                height="80%" class="rounded-lg max-w-full h-auto" />
            </div>
            <div class="my-3">

              <h3 class="text-3xl text-black dark:text-white font-semibold mb-2">
                {{ $t('home.services.seo_marketing_ads') }}
              </h3>
              <p class="text-gray-800 dark:text-gray-200">{{ $t('home.services.seo_marketing_ads_text') }}</p>
            </div>
          </div>
        </div>
      </GSAPStaggeredReveal>
    </div>
  </section>
</template>

<script setup lang="ts">
import ServiceCard from '@/components/ui/ServiceCard.vue';
import GSAPAnimatedRevealEffect from '@/components/effects/GSAPAnimatedRevealEffect.vue';
import GSAPStaggeredReveal from '@/components/effects/GSAPStaggeredReveal.vue';

</script>

<style scoped>
/* No additional styles needed as Tailwind handles everything */
</style>
