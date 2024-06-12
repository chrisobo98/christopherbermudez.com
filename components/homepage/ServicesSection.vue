<template>
  <section class="py-20 bg-[#1d1d1d] text-white">
    <div class="container max-w-7xl mx-auto px-4">
      <p class="text-purple-500 text-center md:text-left font-semibold mb-4">OUR SERVICES</p>
      <h3 class="text-6xl text-center md:text-left font-bold mb-10">PROFESSIONAL SERVICES</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ServiceCard
          iconSrc="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/fa5d35d7-55c0-4dbf-3eba-1090a3515200/public"
          altText="Consultation Icon"
          title="Small Business Consultation"
          description="Empowering small businesses to establish a robust online footprint."
        />
        <ServiceCard
          iconSrc="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/30432376-0d5e-44ac-c4fe-a27f6f56bd00/public"
          altText="Design and Development Icon"
          title="Website Design & Development"
          description="From concept to creation, crafting websites tailored to your brand’s needs."
        />
        <ServiceCard
          iconSrc="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/4cb06081-6a05-4508-3433-9de4e0360900/public"
          altText="Support Icon"
          title="Maintenance & Training"
          description="Ensuring sustainability through comprehensive maintenance and hands-on training."
        />
        <ServiceCard
          iconSrc="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/a1e72b84-138e-4e3b-1f43-41858bda6b00/public"
          altText="SEO Icon"
          title="Advanced SEO & Marketing"
          description="Ensuring sustainability through comprehensive maintenance and hands-on training."
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
