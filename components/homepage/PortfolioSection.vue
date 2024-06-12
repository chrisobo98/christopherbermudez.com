<template>
  <section class="py-12">
    <div class="container max-w-7xl mx-auto px-6 lg:px-8">
      <p class="text-purple-500 text-center md:text-right font-semibold mb-4">PORTFOLIO</p>
      <h2 class="text-center md:text-right text-6xl font-bold text-white mb-8">Showcase of Excellence</h2>
      <div class="space-y-12">
        <PortfolioItem
          title="Elite Euro Motors"
          description="Website Design, SEO, Marketing with a big emphasis on Email Marketing, Consulting, and overhaul of online presence."
          imageSrc="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/3969ce26-aa51-4698-0934-380a625c2900/public"
        />
        <PortfolioItem
          title="4 Star Customs"
          description="Website design and implementation done for 4StarCustoms, a body shop in Ocoee, Florida."
          imageSrc="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/ea08472d-7cad-4884-7921-35a6c4722800/public"
          :reverse="true"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PortfolioItem from '@/components/ui/PortfolioItem.vue';
</script>

<style scoped>
/* No additional styles needed as Tailwind handles everything */
</style>
