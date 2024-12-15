<template>
  <section class="bg-white h-screen dark:bg-[#1d1d1d]">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center z-10 lg:col-span-7">
        <h1 class="text-5xl md:text-6xl text-center lg:text-left font-bold drop-shadow-xl">
          <GSAPHeroEffect>
            {{ $t('home.hero.title') }}
          </GSAPHeroEffect>
        </h1>
        <!-- Typing Container and Effect -->
        <h2 class="text-4xl md:text-5xl font-semibold text-center lg:text-left text-purple-600 typing-container">
          <TypingEffect
            :texts="[$t('home.hero.subtitle1'), $t('home.hero.subtitle2'), $t('home.hero.subtitle3'), $t('home.hero.subtitle4')]"
            :speed="50" :delay="1500" />
        </h2>

        <!-- Hero Description -->
        <GSAPHeroEffect :delay="1" :duration="2">
          <p class="text-xl md:text-2xl font-extralight text-center lg:text-left">{{ $t('home.hero.description') }}</p>
        </GSAPHeroEffect>

        <div class="z-10 md:hidden w-4/6 mx-auto">
          <img src="assets/css/images/hero-image.png" />
        </div>

        <!-- Button -->
        <div class="md:flex flex-col md:flex-row items-center md:justify-center lg:justify-start md:mt-4">
          <!-- First Button -->
          <GSAPHeroEffect :delay="1.5" :duration="2">
            <BaseButton class="w-full md:w-auto text-center md:mx-4" @click="scrollToContact">
              {{ $t('home.hero.button') }}
            </BaseButton>
          </GSAPHeroEffect>

          <!-- Second Button -->
          <GSAPHeroEffect :delay="1.5" :duration="2">
            <BaseButton class="w-full md:w-auto text-center md:mx-6 bg-purple-600 text-white" @click="scrollToContact">
              Free Website Audit
            </BaseButton>
          </GSAPHeroEffect>
        </div>

      </div>
      <div class="hidden lg:mt-0 z-10 md:w-1/2 lg:w-full mx-auto lg:col-span-5 md:flex">
        <img src="assets/css/images/hero-image.png" />
      </div>
    </div>

    <BlobEffect />

    <!-- Bounce to next section arrow -->
    <ArrowWithText class="hidden md:flex" />
  </section>
</template>

<script setup lang="ts">
import GSAPHeroEffect from '@/components/effects/GSAPAnimatedRevealEffect.vue';
import TypingEffect from '@/components/effects/TypingEffect.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import ArrowWithText from '@/components/effects/ArrowWithText.vue';
import BlobEffect from "@/components/effects/BlobEffect.vue";

import { useScrollNavigation } from '@/composables/useScrollNavigation';

const sections = [
  'hero-section',
  'my-story-section',
  'services-section',
  'portfolio-section',
  'contact-section',
];

const { scrollToSection } = useScrollNavigation(sections);

const scrollToContact = () => {
  scrollToSection('contact-section');
};
</script>

<style scoped>
.typing-container {
  min-width: 300px;
  min-height: 50px;
}
</style>
