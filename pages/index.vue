<template>
  <div class="w-11/12 mx-auto">
    <HeroSection id="hero-section" class="h-screen"/>
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

useHead({
  title: "Web Design, SEO, & Digital Marketing",
  meta: [
    {
      name: "description",
      content:
        "Discover expert web design, SEO, and digital marketing services with Christopher Bermudez. Helping businesses in Central Florida grow their online presence and achieve measurable results.",
    },
    {
      property: "og:title",
      content: "Web Design, SEO, & Digital Marketing",
    },
    {
      property: "og:description",
      content:
        "Expert web design and SEO services for Florida businesses. Let Christopher Bermudez elevate your online presence.",
    },
  ],
});
</script>

<style scoped>
/* Add your CSS styles here */
</style>
