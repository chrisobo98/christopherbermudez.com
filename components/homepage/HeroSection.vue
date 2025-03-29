<template>
  <BaseSection class="grid">
    <div class="z-10">
      <h1
        class="lg:text-7xl text-5xl font-bold text-left md:text-center drop-shadow-xl mb-2"
      >
        {{ $t("home.hero.title") }}
      </h1>

      <!-- Hero Description -->
      <p class="text-xl md:text-2xl text-left md:text-center my-2 h-14">
        {{ $t("home.hero.description") }}
      </p>

      <!-- text for site scanner -->
      <p
        class="text-xl md:text-2xl font-extralight text-left md:text-center mt-12 mb-6 md:my-4"
      >
        Step 1: {{ $t("home.hero.callToAction")
        }}<span class="font-bold text-purple-500">{{
          $t("home.hero.coloredCTA")
        }}</span>
      </p>

      <SiteScanner />

      <!-- Star Icon -->
      <p class="my-4 flex font-light text-center mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          class="mx-2"
        >
          <path
            d="M12.0317 1.47073C12.1936 1.03756 12.8064 1.03756 12.9683 1.47073L15.3465 7.83086C15.4168 8.01878 15.5926 8.1465 15.793 8.15526L22.5768 8.45168C23.0388 8.47187 23.2281 9.0546 22.8662 9.3425L17.5523 13.5697C17.3953 13.6946 17.3281 13.9013 17.3817 14.0946L19.1961 20.6379C19.3197 21.0836 18.824 21.4437 18.4384 21.1885L12.776 17.4409C12.6086 17.3302 12.3914 17.3302 12.224 17.4409L6.56165 21.1885C6.176 21.4437 5.6803 21.0836 5.80387 20.6379L7.61825 14.0946C7.67186 13.9013 7.60472 13.6946 7.4477 13.5697L2.13377 9.3425C1.77185 9.0546 1.96119 8.47187 2.42322 8.45168L9.20696 8.15526C9.4074 8.1465 9.58319 8.01878 9.65346 7.83086L12.0317 1.47073Z"
            fill="#8039f4"
          />
          <path d="M12.5 19.8547V22.582" stroke="#8039f4" />
          <path d="M17.4092 5.67205L19.591 3.49023" stroke="#8039f4" />
          <path d="M7.04541 5.67205L4.86359 3.49023" stroke="#8039f4" />
          <path d="M19.5908 14.9456L21.7726 16.0365" stroke="#8039f4" />
          <path d="M5.40887 14.9456L3.22705 16.0365" stroke="#8039f4" />
        </svg>
        {{ $t("home.hero.answer") }}
      </p>
    </div>

    <BlobEffect class="h-screen" />

  </BaseSection>
</template>

<script setup lang="ts">
import BaseSection from "../ui/BaseSection.vue";
import BlobEffect from "@/components/effects/BlobEffect.vue";
import SiteScanner from "@/components/homepage/SiteScanner.vue";

const sections = [
  "hero-section",
  "my-story-section",
  "services-section",
  "portfolio-section",
  "contact-section",
];
</script>

<style scoped></style>
