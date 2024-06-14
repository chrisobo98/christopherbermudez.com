<template>
    <div>
      <Sidenav />
      <HeroSection id="hero-section" />
      <MyStorySection id="my-story-section" />
      <ServicesSection id="services-section" />
      <PortfolioSection id="portfolio-section" />
      <ContactSection id="contact-section" />
      <ArrowWithText />
    </div>
  </template>
  
  <script setup lang="ts">
  import HeroSection from '../components/homepage/HeroSection.vue'
  import MyStorySection from '../components/homepage/MyStorySection.vue'
  import ServicesSection from '../components/homepage/ServicesSection.vue'
  import PortfolioSection from '../components/homepage/PortfolioSection.vue'
  import ContactSection from '../components/homepage/ContactSection.vue'
  import Sidenav from '../components/effects/Sidenav.vue'
  import ArrowWithText from '../components/effects/ArrowWithText.vue'

  </script>
  
  <style scoped>
  /* Add your CSS styles here */
  </style>
  