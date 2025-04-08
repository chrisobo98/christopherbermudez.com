<template>
  <BaseSection
    class="grid items-center gap-8 lg:gap-16 md:grid-cols-2"
  >
    <!-- Images -->
    <div class="flex justify-center">
      <NuxtImg
        provider="cloudinary"
        loading="lazy"
        height="400"
        width="400"
        src="v1744049301/christopher-bermudez-web-services-headshot_oxlgnf.png"
        alt="Christopher Bermudez"
        class="rounded-lg mb-8 nuxt-img-animation"
      />
    </div>

    <!-- Text Content -->
    <div>
      <p
        class="text-purple-500 dark:text-[#b695ff] mt-0 md:mt-20 lg:mt-0 font-semibold uppercase mb-2"
      >
        {{ $t("home.whyUs.creativeSolutions") }}
      </p>
      <h2 class="mb-6 text-6xl font-bold text-gray-900 dark:text-white">
        {{ $t("home.whyUs.resultsTitle") }}
      </h2>
      <p class="text-lg font-light">
        {{ $t("home.whyUs.whyUsDescription") }}
        <span class="font-semibold">{{
          $t("home.whyUs.customWebDevBold")
        }}</span>
        &
        <span class="font-semibold">{{ $t("home.whyUs.advancedSeoBold") }}</span
        >.
        {{ $t("home.whyUs.creativeSolutionsSummary") }}
      </p>

      <!-- Metrics Section -->
      <div class="gap-6 mt-8">
        <ul class="space-y-3">
          <li
            v-for="(item, index) in metrics"
            :key="index"
            class="flex items-center"
          >
            <XSymbol class="mr-4" />
            <span
              ><span class="font-bold">{{ $t(item.bold) }}</span>
              {{ $t(item.text) }}</span
            >
          </li>
        </ul>
      </div>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import XSymbol from "@/components/ui/XSymbol.vue";
import BaseSection from "../ui/BaseSection.vue";

const metrics = [
  {
    bold: "home.whyUs.optimizedDesignsBold",
    text: "home.whyUs.optimizedDesigns",
  },
  { bold: "home.whyUs.leadsBold", text: "home.whyUs.leads" },
  { bold: "home.whyUs.conversionsBold", text: "home.whyUs.conversions" },
  { bold: "home.whyUs.mobileBold", text: "home.whyUs.mobile" },
  { bold: "home.whyUs.uptimeBold", text: "home.whyUs.uptime" },
];
</script>

<style scoped></style>
