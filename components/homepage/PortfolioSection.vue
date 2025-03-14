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
        imageSrc="https://res.cloudinary.com/dkaakonrp/image/upload/v1741372673/eliteeuro2_ylc9im.png"
        url="https://eliteeuromotors.com/"
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
