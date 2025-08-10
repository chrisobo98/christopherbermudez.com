<template>
  <BaseSection>
    <!-- Header and Subheader -->
    <GSAPStaggeredEffect>
      <p
        class="text-purple-500 dark:text-[#b695ff] text-center md:text-right font-semibold mb-4"
      >
        {{ $t("home.portfolio.subheader") }}
      </p>
      <h2 class="text-center md:text-right text-6xl font-bold mb-8">
        {{ $t("home.portfolio.header") }}
      </h2>
    </GSAPStaggeredEffect>

    <!-- Portfolio items -->
    <div class="space-y-12">
      <PortfolioItem
        :title="$t('home.portfolio.portfolio_elite_header')"
        :description="$t('home.portfolio.portfolio_elite_text')"
        imageSrc="https://res.cloudinary.com/dkaakonrp/image/upload/v1744047733/compressed-image-elite_nfrx60.png"
        url="https://eliteeuromotors.com/"
      />
      <PortfolioItem
        :title="$t('home.portfolio.portfolio_beuptwo_header')"
        :description="$t('home.portfolio.portfolio_beuptwo_text')"
        imageSrc="https://res.cloudinary.com/dkaakonrp/image/upload/v1743101411/Uptwo_Mockup_1_xnh5rq.png"
        url="https://beuptwo.com/"
        reverse
      />
      <PortfolioItem
        title="LOH Brows"
        description="Website for LOH Brows, a beauty salon in Tobyhana, PA specializing in micropigmentation services."
        imageSrc="https://res.cloudinary.com/dkaakonrp/image/upload/v1754795185/Screenshot_2025-08-09_at_11.01.17_PM-min_eufpfb.png"
        url="https://lohbrows.com/"
      />
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import PortfolioItem from "@/components/ui/PortfolioItem.vue";
import GSAPStaggeredEffect from "@/components/effects/GSAPStaggeredReveal.vue";
import BaseSection from "../ui/BaseSection.vue";
</script>

<style scoped>
/* No additional styles needed as Tailwind handles everything */
</style>
