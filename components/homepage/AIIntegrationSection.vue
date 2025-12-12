<template>
  <BaseSection>
    <!-- AI Integration Header -->
    <GSAPAnimatedRevealEffect>
      <p
        class="text-purple-500 dark:text-[#b695ff] text-center md:text-left font-semibold mb-4"
      >
        {{ $t("home.aiIntegration.subheader") }}
      </p>
      <h3
        class="text-6xl text-center md:text-left text-black dark:text-white font-bold mb-6"
      >
        {{ $t("home.aiIntegration.header") }}
      </h3>
      <p class="text-xl text-center md:text-left mb-12 max-w-4xl">
        {{ $t("home.aiIntegration.description") }}
      </p>
    </GSAPAnimatedRevealEffect>

    <!-- AI Use Cases Grid -->
    <GSAPStaggeredReveal>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(useCase, index) in aiUseCases"
          :key="index"
          class="p-6 bg-muted rounded-2xl border border-purple-200 dark:border-purple-800 hover:border-purple-500 transition-all"
        >
          <Icon :name="useCase.icon" class="w-12 h-12 text-purple-600 mb-4" />
          <h4 class="text-xl font-bold mb-3">{{ useCase.title }}</h4>
          <p class="text-base">{{ useCase.description }}</p>
        </div>
      </div>
    </GSAPStaggeredReveal>

    <!-- CTA -->
    <div class="text-center mt-16">
      <p class="text-xl mb-6">{{ $t("home.aiIntegration.cta_text") }}</p>
      <NuxtLink
        :to="localePath('/appointments')"
        class="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all duration-300"
      >
        {{ $t("home.aiIntegration.cta_button") }}
      </NuxtLink>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import GSAPAnimatedRevealEffect from "@/components/effects/GSAPAnimatedRevealEffect.vue";
import GSAPStaggeredReveal from "@/components/effects/GSAPStaggeredReveal.vue";
import BaseSection from "../ui/BaseSection.vue";

import { useI18n } from "vue-i18n";

const { t } = useI18n();
const localePath = useLocalePath();

// Define AI use cases
const aiUseCases = [
  {
    icon: "mdi:robot-happy",
    title: t("home.aiIntegration.use_case_1_title"),
    description: t("home.aiIntegration.use_case_1_description"),
  },
  {
    icon: "mdi:chart-timeline-variant",
    title: t("home.aiIntegration.use_case_2_title"),
    description: t("home.aiIntegration.use_case_2_description"),
  },
  {
    icon: "mdi:file-document-edit",
    title: t("home.aiIntegration.use_case_3_title"),
    description: t("home.aiIntegration.use_case_3_description"),
  },
  {
    icon: "mdi:cog-sync",
    title: t("home.aiIntegration.use_case_4_title"),
    description: t("home.aiIntegration.use_case_4_description"),
  },
  {
    icon: "mdi:account-group",
    title: t("home.aiIntegration.use_case_5_title"),
    description: t("home.aiIntegration.use_case_5_description"),
  },
  {
    icon: "mdi:shield-lock",
    title: t("home.aiIntegration.use_case_6_title"),
    description: t("home.aiIntegration.use_case_6_description"),
  },
];
</script>

<style scoped>
/* No additional styles needed as Tailwind handles everything */
</style>
