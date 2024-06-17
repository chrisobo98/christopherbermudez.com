<template>
  <section class="py-20 bg-white dark:bg-[#1d1d1d]">
    <div class="container w-11/12 max-w-7xl mx-auto px-4">
      <p class="text-purple-500 dark:text-[#b695ff] text-center md:text-left font-semibold mb-4">{{ $t('home.services.subheader') }}</p>
      <h3 class="text-6xl text-center md:text-left text-black dark:text-white font-bold mb-10">{{ $t('home.services.header') }}</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ServiceCard
          iconSrc="/fa5d35d7-55c0-4dbf-3eba-1090a3515200/public"
          altText="Consultation Icon"
          :title="$t('home.services.consultation')"
          :description="$t('home.services.consultation_text')"
        />
        <ServiceCard
          iconSrc="/30432376-0d5e-44ac-c4fe-a27f6f56bd00/public"
          altText="Design and Development Icon"
          :title="$t('home.services.softwaredev')"
          :description="$t('home.services.softwaredev_text')"
        />
        <ServiceCard
          iconSrc="/4cb06081-6a05-4508-3433-9de4e0360900/public"
          altText="Support Icon"
          :title="$t('home.services.maintenance_and_support')"
          :description="$t('home.services.maintenance_and_support_text')"
        />
        <ServiceCard
          iconSrc="/a1e72b84-138e-4e3b-1f43-41858bda6b00/public"
          altText="SEO Icon"
          :title="$t('home.services.seo_marketing_ads')"
          :description="$t('home.services.seo_marketing_ads_text')"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ServiceCard from '@/components/ui/ServiceCard.vue';
</script>

<style scoped>
/* No additional styles needed as Tailwind handles everything */
</style>
