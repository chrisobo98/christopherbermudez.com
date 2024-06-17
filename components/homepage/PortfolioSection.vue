<template>
  <section class="py-12 bg-white dark:bg-[#1d1d1d]">
    <div class="container w-11/12 lg:w-full max-w-7xl mx-auto px-6 lg:px-8">
      <p class="text-purple-500 dark:text-[#b695ff] text-center md:text-right font-semibold mb-4">{{ $t('home.portfolio.subheader') }}</p>
      <h2 class="text-center md:text-right text-6xl font-bold mb-8">{{ $t('home.portfolio.header') }}</h2>
      <div class="space-y-12">
        <PortfolioItem
          :title="$t('home.portfolio.portfolio_elite_header')"
          :description="$t('home.portfolio.portfolio_elite_text')"
          imageSrc="/3969ce26-aa51-4698-0934-380a625c2900/public"
          url="https://eliteeuromotors.com/"
        />
        <PortfolioItem
          :title="$t('home.portfolio.portfolio_4star_header')"
          :description="$t('home.portfolio.portfolio_4star_text')"
          imageSrc="/ea08472d-7cad-4884-7921-35a6c4722800/public"
          url="https://4starcustoms.com/"
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
