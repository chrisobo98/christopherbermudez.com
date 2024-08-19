<template>
  <section class="relative h-screen flex items-center justify-center bg-white dark:bg-[#1d1d1d]">
    <div class="relative z-10 text-center w-10/12 lg:w-full">
      <h1 class="text-6xl font-bold drop-shadow-xl -mt-32">
        <GSAPHeroEffect>
          {{ $t('home.hero.title') }}
        </GSAPHeroEffect>
      </h1>

      <!-- Typing Container and Effect -->
      <h2 class="text-4xl font-semibold text-purple-600 typing-container">
        <TypingEffect
          :texts="[$t('home.hero.subtitle1'), $t('home.hero.subtitle2'), $t('home.hero.subtitle3'), $t('home.hero.subtitle4')]"
          :speed="50" :delay="1500" />
      </h2>

      <!-- Hero Description -->
      <GSAPHeroEffect :delay="1" :duration="2">
        <p class="text-2xl font-extralight">{{ $t('home.hero.description') }}</p>
      </GSAPHeroEffect>

      <!-- Button -->
      <GSAPHeroEffect :delay="1.5" :duration="2">
        <BaseButton @click="scrollToContact">{{ $t('home.hero.button') }}</BaseButton>
      </GSAPHeroEffect>
    </div>

    <BlobEffect />

    <!-- Bounce to next section arrow -->
    <ArrowWithText />
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
~/composables/useScrollNavigation