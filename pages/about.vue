<template>
  <section class="md:py-12 relative">
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto space-y-20">
      <!-- Image + Features Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <NuxtImg
          provider="cloudinary"
          loading="lazy"
          height="300"
          width="500"
          src="https://res.cloudinary.com/dkaakonrp/image/upload/v1743728212/citrus-tower_aerial_view_isq2g4.png"
          alt="Clermont Citrus Tower Aerial View"
          class="rounded-lg my-6 md:my-12 nuxt-img-animation mx-auto"
        />

        <div class="space-y-2">
          <div class="space-y-5">
            <span class="text-[#7c42e0] text-2xl font-medium">
              {{ $t("about.subtitle") }}
            </span>
            <h2 class="text-5xl font-bold font-manrope">
              {{ $t("about.title") }}
            </h2>
            <p class="text-base font-normal">{{ $t("about.description") }}</p>
          </div>

          <div class="grid sm:grid-cols-2 gap-8">
            <div
              v-for="(feature, i) in features"
              :key="i"
              class="group flex-col gap-4"
            >
              <div
                class="p-[13px] bg-purple-600 group-hover:bg-purple-700 transition-all mt-4 rounded-[10px] w-fit"
              >
                <Icon
                  :name="feature.icon"
                  style="color: white"
                  size="2em"
                  class="mx-3 my-3"
                />
              </div>
              <div class="space-y-1.5 my-6">
                <h4 class="text-2xl font-semibold">{{ feature.title }}</h4>
                <p class="text-base font-normal">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Why Choose Us? -->
      <div class="py-16">
        <h2 class="text-3xl font-semibold text-center md:text-left">
          {{ $t("about.whyChooseUs.title") }}
        </h2>
        <p class="mt-4 text-lg">
          {{ $t("about.whyChooseUs.content") }}
        </p>
        <NuxtLink :to="localePath('/services')" class="mt-4 text-blue-600 underline">
          {{ $t("about.whyChooseUs.seeHow") }}</NuxtLink
        >
        <ul class="mt-6 space-y-4 text-lg">
          <li>✔ {{ $t("about.whyChooseUs.points.localExpertise") }}</li>
          <li>✔ {{ $t("about.whyChooseUs.points.seoResults") }}</li>
          <li>✔ {{ $t("about.whyChooseUs.points.fastWebsites") }}</li>
          <li>
            ✔ {{ $t("about.whyChooseUs.points.pricing") }}
            <NuxtLink :to="localePath('/pricing')" class="text-blue-600 underline"
              >{{ $t("about.whyChooseUs.points.SeePricing") }} →</NuxtLink
            >
          </li>
        </ul>
        <!-- Trust Signals -->
        <!-- <div class="mt-8 flex justify-center space-x-4">
          <a href="/case-studies" class="text-blue-600 underline">{{
            $t("about.seeHow")
          }}</a>
        </div> -->
      </div>

      <!-- Stats Section -->
      <div class="text-center space-y-8">
        <h2 class="text-4xl font-bold font-manrope">
          {{ $t("about.stats.title") }}
        </h2>
        <p class="text-base font-normal max-w-2xl mx-auto">
          {{ $t("about.stats.description") }}
        </p>

        <div class="flex flex-wrap justify-center gap-10">
          <div v-for="(stat, i) in stats" :key="i" class="flex-col">
            <h3 class="text-4xl font-bold font-manrope">{{ stat.value }}</h3>
            <h6 class="text-base font-normal">{{ stat.label }}</h6>
          </div>
        </div>
      </div>

      <!-- Process Steps -->
      <div class="space-y-12">
        <div class="text-center space-y-3">
          <h2 class="text-4xl font-bold font-manrope text-white">
            {{ $t("about.process.title") }}
          </h2>
          <p class="text-base font-normal max-w-4xl mx-auto">
            {{ $t("about.process.description") }}
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-8">
          <div
            v-for="(step, i) in processSteps"
            :key="i"
            class="group p-5 border border-purple-600 transition-all rounded-xl space-y-5"
          >
            <div class="flex items-center gap-5">
              <div
                class="rounded-full border border-purple-500 group-hover:border-purple-200 transition-all flex-center"
              >
                <span class="text-2xl font-semibold mx-3 my-3">{{
                  step.stepNumber
                }}</span>
              </div>
              <h3 class="text-2xl font-bold font-manrope">
                {{ step.title }}
              </h3>
            </div>
            <p class="text-base font-normal">{{ step.description }}</p>
          </div>
        </div>
      </div>

      <!-- Testimonials -->
      <div class="space-y-16">
        <h2 class="text-4xl font-bold text-center">
          {{ testimonialsSection.title }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(testimonial, i) in testimonials"
            :key="i"
            class="text-center space-y-5"
          >
            <div class="flex-center gap-2 text-amber-500">
              <Icon
                v-for="n in testimonial.rating"
                :key="n"
                name="tabler:star-filled"
                size="2em"
              />
            </div>
            <p class="text-base font-normal">{{ testimonial.quote }}</p>
            <span class="block text-base font-semibold">{{
              testimonial.author
            }}</span>
          </div>
        </div>
      </div>

      <!-- Meet Christopher Bermudez -->
      <div class="py-16 text-center">
        <h2 class="text-3xl font-semibold">
          {{ $t("about.video.title") }}
        </h2>
        <p class="mt-4 text-lg">
          {{ $t("about.video.subtitle") }}
        </p>
        <NuxtImg
          style="transform: scale(1)"
          provider="cloudinary"
          loading="lazy"
          height="500"
          width="500"
          src="https://res.cloudinary.com/dkaakonrp/image/upload/v1741369614/mxjsxr4ptx8qeqh3ctkw.jpg"
          alt="Christopher Bermudez"
          class="rounded-lg my-8 nuxt-img-animation mt-6 mx-auto rounded-lg shadow-lg w-48 h-48"
        />
        <p class="mt-4 text-lg">
          {{ $t("about.video.description") }}
        </p>
        <p class="mt-2 text-lg">
          {{ $t("about.video.languages") }}
        </p>
        <div class="mt-4 flex justify-center space-x-4">
          <NuxtLink
            target="_blank"
            to="https://www.linkedin.com/in/christopher-bermudez-ortiz/"
            class="text-blue-600 underline"
            >LinkedIn</NuxtLink
          >
          <NuxtLink
            target="_blank"
            to="https://www.youtube.com/@webandseobychris"
            class="text-blue-600 underline"
            >YouTube</NuxtLink
          >
        </div>
      </div>

      <!-- CTA Section -->
      <div
        class="mx-auto flex flex-col lg:flex-row items-center justify-between gap-6"
      >
        <h2 class="text-5xl font-bold font-manrope text-center lg:text-left">
          {{ ctaContent.title }}
        </h2>
        <BaseButton class="mx-auto block md:hidden">
          {{ ctaContent.buttonText }}
        </BaseButton>
        <div class="space-y-8">
          <ul class="grid gap-5">
            <li
              v-for="(bullet, i) in ctaContent.bullets"
              :key="i"
              class="flex items-center gap-3 justify-center lg:justify-start"
            >
              <Icon name="game-icons:check-mark" size="1.5em" />
              {{ bullet }}
            </li>
          </ul>
          <BaseButton class="mx-auto hidden md:inline">
            {{ ctaContent.buttonText }}
          </BaseButton>
        </div>

        <FAQ class="py-24" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FAQ from "@/components/appointments/FAQ.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// All data properly defined
interface ContentSection {
  title: string;
  description?: string;
  subtitle?: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: string;
  rating: number;
}

const testimonialsSection: ContentSection = {
  title: t("about.testimonials.title"),
};

const features: Feature[] = [
  {
    icon: "game-icons:arrow-scope",
    title: t("about.mission.title"),
    description: t("about.mission.description"),
  },
  {
    icon: "game-icons:3d-glasses",
    title: t("about.vision.title"),
    description: t("about.vision.description"),
  },
];

const stats = [
  { value: "20+", label: t("about.stats.label1") },
  { value: "15+", label: t("about.stats.label2") },
];

const processSteps: ProcessStep[] = [
  {
    stepNumber: 1,
    title: t("about.process.steps.step1.title"),
    description: t("about.process.steps.step1.description"),
  },
  {
    stepNumber: 2,
    title: t("about.process.steps.step2.title"),
    description: t("about.process.steps.step2.description"),
  },
  {
    stepNumber: 3,
    title: t("about.process.steps.step3.description"),
    description: t("about.process.steps.step3.description"),
  },
  {
    stepNumber: 4,
    title: t("about.process.steps.step4.description"),
    description: t("about.process.steps.step4.description"),
  },
];

const testimonials: Testimonial[] = [
  {
    quote: t("about.testimonials.eliteEuro.quote"),
    author: "Elite Euro Motors",
    rating: 5,
  },
  {
    quote: t("about.testimonials.beUpTwo.quote"),
    author: "BeUpTwo",
    rating: 5,
  },
];

const ctaContent = {
  title: t("about.cta.title"),
  bullets: [
    t("about.cta.bullets.bullet1"),
    t("about.cta.bullets.bullet2"),
    t("about.cta.bullets.bullet3"),
  ],
  contactTitle: "Contact us now",
  buttonText: t("about.cta.button"),
};
</script>

<style scoped>
/* Animations */
#circle svg {
  animation: rotate 10s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0);
  }
}
</style>
