<template>
  <div class="w-11/12 mx-auto">
    <HeroSection id="hero-section" />
    <WhyUsSection id="why-us-section" />
    <ServicesSection id="services-section" />
    <PortfolioSection id="portfolio-section" />
    <ContactSection id="contact-section" />
  </div>
</template>

<script setup lang="ts">
import HeroSection from "../components/homepage/HeroSection.vue";
import WhyUsSection from "../components/homepage/WhyUsSection.vue";
import ServicesSection from "../components/homepage/ServicesSection.vue";
import PortfolioSection from "../components/homepage/PortfolioSection.vue";
import ContactSection from "../components/homepage/ContactSection.vue";

const { t } = useI18n();

useHead({
  title: t("home.metadata.title"),
  meta: [
    {
      name: "description",
      content: t("home.metadata.description"),
    },
    {
      property: "og:title",
      content: t("home.metadata.og_title"),
    },
    {
      property: "og:description",
      content: t("home.metadata.og_description"),
    },
  ],
});
</script>

<style scoped>
/* Add your CSS styles here */
</style>
