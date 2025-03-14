<template>
  <BaseSection class="flex flex-col md:flex-row items-center">
    <!-- My Story Text Section -->
    <div class="w-full md:w-1/2 text-center md:text-right">
      <GSAPStaggeredEffect>
        <!-- Subtitle -->
        <p class="text-purple-500 dark:text-[#b695ff] font-semibold mb-2">
          {{ $t("home.mystory.journey") }}
        </p>
        <!-- Title -->
        <h2 class="text-6xl font-bold mb-4">
          {{ $t("home.mystory.storyheader") }}
        </h2>

        <div class="md:hidden w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <NuxtImg
            style="transform: scale(1)"
            provider="cloudinary"
            width="100%"
            height="100%"
            loading="lazy"
            src="https://res.cloudinary.com/dkaakonrp/image/upload/v1741369614/mxjsxr4ptx8qeqh3ctkw.jpg"
            alt="Christopher Bermudez"
            class="rounded-lg max-w-full h-auto mb-8 nuxt-img-animation"
          />
        </div>
        <!-- Text -->
        <p class="text-lg font-light">
          {{ $t("home.mystory.storytext") }}
        </p>
      </GSAPStaggeredEffect>
      <BaseButton class="mt-6 w-full md:w-1/3" @click="navigateToResume">{{
        $t("home.mystory.storyButton")
      }}</BaseButton>
    </div>

    <!-- My Story Personal Image -->
    <div
      class="hidden md:block w-full md:w-1/2 mt-8 md:mt-0 flex justify-center ml-12"
    >
      <NuxtImg
        style="transform: scale(1)"
        provider="cloudinary"
        width="100%"
        height="100%"
        loading="lazy"
        src="https://res.cloudinary.com/dkaakonrp/image/upload/v1741369614/mxjsxr4ptx8qeqh3ctkw.jpg"
        alt="Christopher Bermudez"
        class="rounded-lg max-w-full h-auto mb-8 nuxt-img-animation"
      />
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import GSAPStaggeredEffect from "@/components/effects/GSAPStaggeredReveal.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseSection from "../ui/BaseSection.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const localePath = useLocalePath();

const navigateToResume = () => {
  router.push(localePath("/about"));
};
</script>

<style scoped>
@media (max-width: 768px) {
  .my-story-section .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
