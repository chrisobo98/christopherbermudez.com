<template>
  <div class="built-with-container">
    <div
      class="built-with-item"
      v-for="logo in logos"
      :key="logo.alt"
      ref="logoRefs"
    >
      <div class="bubble">
        <Icon :name="logo.icon" class="logo" :aria-label="logo.alt" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

// Using icons instead of SVG files since they don't exist
const logos = [
  { icon: "logos:nuxt-icon", alt: "Nuxt.js" },
  { icon: "logos:typescript-icon", alt: "TypeScript" },
  { icon: "heroicons:lock-closed", alt: "HTTPS" },
  { icon: "logos:google-analytics", alt: "Google Analytics" },
  { icon: "logos:google-fonts", alt: "Google Font API" },
  { icon: "simple-icons:greensock", alt: "GSAP" },
  { icon: "logos:vue", alt: "Vue.js" },
  { icon: "logos:netlify", alt: "Netlify" },
  { icon: "simple-icons:flowbite", alt: "Flowbite" },
  { icon: "logos:tailwindcss-icon", alt: "Tailwind CSS" },
  { icon: "logos:nodejs-icon", alt: "Node.js" },
];

const logoRefs = ref([]);

onMounted(() => {
  logoRefs.value.forEach((logo, index) => {
    gsap.fromTo(
      logo,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: index * 0.2,
        ease: "power3.out",
        onComplete() {
          gsap.to(logo, {
            y: "+=10",
            yoyo: true,
            repeat: -1,
            duration: 2,
            ease: "sine.inOut",
          });
        },
      }
    );
  });

  logoRefs.value.forEach((logo) => {
    gsap
      .to(logo, {
        scale: 1.1,
        duration: 0.3,
        ease: "power1.inOut",
        paused: true,
        repeat: 0,
        yoyo: false,
      })
      .play();
  });
});
</script>

<style scoped>
.built-with-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.built-with-item {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.bubble {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ffffff;
  transition: background-color 0.3s ease;
}

.dark .bubble {
  background-color: #1d1d1d;
}

.logo {
  width: 48px;
  height: 48px;
  transition: transform 0.3s ease;
}

.built-with-item:hover .logo {
  transform: scale(1.2);
}
</style>
