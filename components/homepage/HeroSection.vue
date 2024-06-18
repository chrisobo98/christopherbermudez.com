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
        <BaseButton @click="navigateToDiscover">{{ $t('home.hero.button') }}</BaseButton>
      </GSAPHeroEffect>
    </div>

    <!-- Background Blobs effect -->
    <div class="blobs">
      <div class="blob"></div>
      <div class="blob"></div>
      <div class="blob"></div>
      <div class="blob"></div>
    </div>

    <!-- Bounce to next section arrow -->
    <ArrowWithText />
  </section>
</template>

<script setup lang="ts">
import GSAPHeroEffect from '@/components/effects/GSAPAnimatedRevealEffect.vue';
import TypingEffect from '@/components/effects/TypingEffect.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import ArrowWithText from '@/components/effects/ArrowWithText.vue';

const navigateToDiscover = () => {
  // Navigate to the discover section or page
}
</script>

<style scoped>
.blobs {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  /* Allow interactions through the blobs */
}

.blob {
  position: absolute;
  border-radius: 50%;
  background: rgba(128, 0, 128, 0.6);
  filter: blur(80px);
  animation: moveBlobs 8s infinite alternate;
}

.blob:nth-child(1) {
  width: 200px;
  height: 200px;
  top: 20%;
  left: 30%;
}

.blob:nth-child(2) {
  width: 250px;
  height: 250px;
  top: 50%;
  left: 50%;
}

.blob:nth-child(3) {
  width: 220px;
  height: 220px;
  top: 50%;
  left: 20%;
}

.blob:nth-child(4) {
  width: 180px;
  height: 180px;
  top: 40%;
  left: 70%;
}

@keyframes moveBlobs {
  0% {
    transform: translate(0, 0) scale(1);
  }

  25% {
    transform: translate(50px, -30px) scale(1.2);
  }

  50% {
    transform: translate(-30px, 50px) scale(0.8);
  }

  75% {
    transform: translate(-50px, -50px) scale(1.1);
  }

  100% {
    transform: translate(30px, 30px) scale(0.9);
  }
}

.typing-container {
  min-width: 300px;
  min-height: 50px;
}
</style>
