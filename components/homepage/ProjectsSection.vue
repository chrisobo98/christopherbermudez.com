<template>
  <BaseSection>
    <!-- Projects Header -->
    <GSAPAnimatedRevealEffect>
      <p
        class="text-purple-500 dark:text-[#b695ff] text-center md:text-left font-semibold mb-4"
      >
        {{ $t("home.projects.subheader") }}
      </p>
      <h3
        class="text-6xl text-center md:text-left text-black dark:text-white font-bold mb-6"
      >
        {{ $t("home.projects.header") }}
      </h3>
      <p class="text-xl text-center md:text-left mb-12 max-w-4xl">
        {{ $t("home.projects.description") }}
      </p>
    </GSAPAnimatedRevealEffect>

    <!-- Projects Grid -->
    <GSAPStaggeredReveal>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div
          v-for="project in projects"
          :key="project.id"
          class="group bg-muted rounded-2xl overflow-hidden border border-purple-200 dark:border-purple-800 hover:border-purple-500 transition-all hover:shadow-xl"
        >
          <div class="relative overflow-hidden h-80">
            <NuxtImg
              provider="cloudinary"
              :src="project.image"
              :alt="project.alt"
              class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div class="p-8">
            <h4 class="text-2xl font-bold mb-3">{{ $t(project.titleKey) }}</h4>
            <p class="text-base mb-4">
              {{ $t(project.descriptionKey) }}
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium"
              >
                {{ tech }}
              </span>
            </div>
            <a
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 font-semibold"
            >
              {{ $t("home.projects.view_project") }}
              <Icon name="mdi:arrow-right" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </GSAPStaggeredReveal>
  </BaseSection>
</template>

<script setup lang="ts">
import GSAPAnimatedRevealEffect from "@/components/effects/GSAPAnimatedRevealEffect.vue";
import GSAPStaggeredReveal from "@/components/effects/GSAPStaggeredReveal.vue";
import BaseSection from "../ui/BaseSection.vue";

import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Projects data
const projects = [
  {
    id: "historicus",
    image: "v1765505960/Modern_Minimalist_Website_Launch_Promotion_Instagram_Post_5_hidram.png",
    alt: "Historicus App - Interactive History Education Platform",
    titleKey: "home.projects.historicus_title",
    descriptionKey: "home.projects.historicus_description",
    tech: ["Vue 3", "Nuxt", "TypeScript", "Pinia", "Supabase", "Tailwind CSS"],
    url: "https://historicus.app"
  },
  {
    id: "exoplanet",
    image: "v1765505969/Modern_Minimalist_Website_Launch_Promotion_Instagram_Post_4_t7corc.png",
    alt: "Exoplanet Discovery Hub - Real-Time Space Exploration",
    titleKey: "home.projects.exoplanet_title",
    descriptionKey: "home.projects.exoplanet_description",
    tech: ["Vue 3", "Nuxt", "TypeScript", "Canvas API", "NASA Data", "3D Rendering"],
    url: "https://exoplanethub.netlify.app"
  }
];
</script>

<style scoped>
/* No additional styles needed as Tailwind handles everything */
</style>
