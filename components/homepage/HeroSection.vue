<template>
  <section class="bg-white lg:h-screen dark:bg-[#1d1d1d]">
    <div
      class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    >
      <div class="mr-auto place-self-center z-10 mt-6 lg:col-span-7">
        <h1 class="lg:text-7xl text-6xl text-center lg:text-left lg:max-w-xl font-bold drop-shadow-xl">
          <GSAPHeroEffect>
            {{ $t("home.hero.title") }}
          </GSAPHeroEffect>
        </h1>

        <!-- Hero Description -->
        <GSAPHeroEffect :delay="1" :duration="2">
          <h2
            class="text-xl md:mt-4 md:text-2xl font-extralight text-center lg:text-left ubuntu-light"
          >
            {{ $t("home.hero.description") }}
          </h2>
        </GSAPHeroEffect>

        <!-- Call to Action -->
        <GSAPHeroEffect :delay="1" :duration="2">
          <p
            class="text-xl md:mt-4 md:text-2xl font-extralight text-center lg:text-left"
          >
            {{ $t("home.hero.callToAction")
            }}<span class="font-bold text-purple-500">{{
              $t("home.hero.coloredCTA")
            }}</span>
          </p>
        </GSAPHeroEffect>

        <div class="z-10 md:hidden w-5/6 mx-auto">
          <NuxtImg provider="cloudinary" class="nuxt-img-animation" alt="Orlando Websites, SEO & Marketing" src="https://res.cloudinary.com/dkaakonrp/image/upload/v1735772392/hero-image_eljdxo.png" />
        </div>

        <!-- Button -->
        <div
          class="md:flex flex-col md:flex-row items-center md:justify-center lg:justify-start md:mt-8"
        >
          <!-- Second Button -->
          <GSAPHeroEffect :delay="1.5" :duration="2">
            <SiteScanner />
          </GSAPHeroEffect>
        </div>
      </div>
      <div
        class="hidden lg:mt-16 z-10 md:w-3/6 lg:w-full mx-auto lg:col-span-5 md:flex"
      >
        <GSAPHeroEffect :delay="1" :duration="2">
          <NuxtImg provider="cloudinary" class="nuxt-img-animation" alt="Orlando Websites, SEO & Marketing" src="https://res.cloudinary.com/dkaakonrp/image/upload/v1735772392/hero-image_eljdxo.png" />
        </GSAPHeroEffect>
      </div>
    </div>

    <BlobEffect />

    <!-- Bounce to next section arrow -->
    <GSAPHeroEffect :delay="2" :duration="2">
      <ArrowWithText class="md:flex md:-mt-4" />
    </GSAPHeroEffect>
  </section>
</template>

<script setup lang="ts">
import GSAPHeroEffect from "@/components/effects/GSAPAnimatedRevealEffect.vue";
import ArrowWithText from "@/components/effects/ArrowWithText.vue";
import BlobEffect from "@/components/effects/BlobEffect.vue";
import SiteScanner from "@/components/homepage/SiteScanner.vue";

import { useScrollNavigation } from "@/composables/useScrollNavigation";

const sections = [
  "hero-section",
  "my-story-section",
  "services-section",
  "portfolio-section",
  "contact-section",
];

const { scrollToSection } = useScrollNavigation(sections);

const scrollToContact = () => {
  scrollToSection("contact-section");
};
</script>

<style scoped>
.typing-container {
  min-width: 300px;
  min-height: 50px;
}
</style>
