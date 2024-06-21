<template>
  <div class="built-with-container">
    <div
      class="built-with-item"
      v-for="logo in logos"
      :key="logo.alt"
      ref="logoRefs"
    >
      <div class="bubble">
        <img :src="logo.src" :alt="logo.alt" class="logo" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

import NuxtLogo from "@/assets/css/svg/nuxtjs.svg";
import TypeScriptLogo from "@/assets/css/svg/typescript_logo.svg";
import HTTPSLogo from "@/assets/css/svg/https.svg";
import GoogleAnalyticsLogo from "@/assets/css/svg/google_analytics.svg";
import GoogleFontAPILogo from "@/assets/css/svg/Google Font API.svg";
import GSAPLogo from "@/assets/css/svg/GSAP.svg";
import VueLogo from "@/assets/css/svg/vue.svg";
import NetlifyLogo from "@/assets/css/svg/Netlify.svg";
import FlowbiteLogo from "@/assets/css/svg/flowbite.svg";
import TailwindCSSLogo from "@/assets/css/svg/tailwindcss.svg";
import NodeJSLogo from "@/assets/css/svg/nodejs.svg";

const logos = [
  { src: NuxtLogo, alt: "Nuxt.js" },
  { src: TypeScriptLogo, alt: "TypeScript" },
  { src: HTTPSLogo, alt: "HTTPS" },
  { src: GoogleAnalyticsLogo, alt: "Google Analytics" },
  { src: GoogleFontAPILogo, alt: "Google Font API" },
  { src: GSAPLogo, alt: "GSAP" },
  { src: VueLogo, alt: "Vue.js" },
  { src: NetlifyLogo, alt: "Netlify" },
  { src: FlowbiteLogo, alt: "Flowbite" },
  { src: TailwindCSSLogo, alt: "Tailwind CSS" },
  { src: NodeJSLogo, alt: "Node.js" },
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
  max-width: 60%;
  max-height: 60%;
  transition: transform 0.3s ease;
}

.built-with-item:hover .logo {
  transform: scale(1.2);
}
</style>
