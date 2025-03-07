<template>
  <section class="bg-white lg:h-screen dark:bg-[#1d1d1d]">
    <div
      class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    >
      <div class="mr-auto place-self-center z-10 mt-6 lg:col-span-7">
        <h1
          class="lg:text-7xl text-6xl text-center lg:text-left lg:max-w-xl font-bold drop-shadow-xl"
        >
          <GSAPHeroEffect>
            {{ $t("home.hero.title") }}
          </GSAPHeroEffect>
        </h1>

        <!-- Hero Description -->
        <GSAPHeroEffect :delay="1" :duration="2">
          <h2
            class="text-xl md:mt-4 md:text-3xl font-extralight text-center lg:text-left ubuntu-light"
          >
            {{ $t("home.hero.description") }}
          </h2>
        </GSAPHeroEffect>

        <!-- Call to Action -->
        <GSAPHeroEffect :delay="1" :duration="2">
          <!-- text for site scanner -->
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
          <NuxtImg
            provider="cloudinary"
            loading="eager"
            format="webp"
            class="nuxt-img-animation"
            alt="Orlando Websites, SEO & Marketing"
            src="https://res.cloudinary.com/dkaakonrp/image/upload/v1735772392/hero-image_eljdxo.png"
          />
        </div>

        <GSAPHeroEffect :delay="1.5" :duration="2">
          <!-- Button -->
          <div
            class="md:flex flex-col md:flex-row items-center md:justify-center lg:justify-start md:mt-8"
          >
            <!-- Second Button -->
            <!-- Need subscription -->
            <SiteScanner />
          </div>
          <p class="my-4 flex font-light">
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
        </GSAPHeroEffect>
      </div>

      <div
        class="hidden lg:mt-16 z-10 md:w-3/6 lg:w-full mx-auto lg:col-span-5 md:flex"
      >
        <GSAPHeroEffect :delay="1" :duration="2">
          <NuxtImg
            provider="cloudinary"
            loading="eager"
            class="nuxt-img-animation"
            alt="Orlando Websites, SEO & Marketing"
            src="https://res.cloudinary.com/dkaakonrp/image/upload/v1735772392/hero-image_eljdxo.png"
          />
        </GSAPHeroEffect>
      </div>
    </div>

    <BlobEffect />

    <!-- Bounce to next section arrow -->
    <ArrowWithText class="md:flex md:-mt-4" />
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
