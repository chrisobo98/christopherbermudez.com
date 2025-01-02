<template>
  <section class="py-20 bg-white dark:bg-[#1d1d1d]">
    <div class="container w-11/12 max-w-7xl mx-auto px-4">
      <!-- Services Header and Subheader -->
      <GSAPAnimatedRevealEffect>
        <p class="text-purple-500 dark:text-[#b695ff] text-center md:text-left font-semibold mb-4">
          {{ $t('home.services.subheader') }}
        </p>
        <h3 class="text-6xl text-center md:text-left text-black dark:text-white font-bold mb-10">
          {{ $t('home.services.header') }}
        </h3>
      </GSAPAnimatedRevealEffect>

      <!-- Service Cards -->
      <GSAPStaggeredReveal>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            v-for="(service, index) in services"
            :key="index"
            :iconSrc="service.iconSrc"
            :altText="service.altText"
            :title="service.title"
            :description="service.description"
          />
        </div>
      </GSAPStaggeredReveal>
    </div>
  </section>
</template>

<script setup lang="ts">
import GSAPAnimatedRevealEffect from '@/components/effects/GSAPAnimatedRevealEffect.vue';
import GSAPStaggeredReveal from '@/components/effects/GSAPStaggeredReveal.vue';
import ServiceCard from '@/components/ui/ServiceCard.vue';
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Define the services data dynamically
const services = [
  {
    iconSrc: 'https://res.cloudinary.com/dkaakonrp/image/upload/v1735772391/consulting_ifu3c9.png',
    altText: 'Consultation Service',
    title: t('home.services.consultation'),
    description: t('home.services.consultation_text'),
  },
  {
    iconSrc: 'https://res.cloudinary.com/dkaakonrp/image/upload/v1735772393/web_development_modi19.png',
    altText: 'Web Development Service',
    title: t('home.services.softwaredev'),
    description: t('home.services.softwaredev_text'),
  },
  {
    iconSrc: 'https://res.cloudinary.com/dkaakonrp/image/upload/v1735772391/maintenance_hoimdc.png',
    altText: 'Maintenance and Support Service',
    title: t('home.services.maintenance_and_support'),
    description: t('home.services.maintenance_and_support_text'),
  },
  {
    iconSrc: 'https://res.cloudinary.com/dkaakonrp/image/upload/v1735772391/services_k9b38p.png',
    altText: 'SEO and Marketing Service',
    title: t('home.services.seo_marketing_ads'),
    description: t('home.services.seo_marketing_ads_text'),
  },
];
</script>

<style scoped>
/* No additional styles needed as Tailwind handles everything */
</style>
