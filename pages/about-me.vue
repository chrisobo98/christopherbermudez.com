<template>
  <div
    class="py-12 bg-gray-50 bg-white dark:bg-[#1d1d1d] text-gray-900 dark:text-white"
  >
    <div class="max-w-7xl mx-auto px-4 w-10/12">
      <GSAPStaggeredEffect>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Profile Section -->
          <BaseDiv
            customClass="text-center md:text-left md:col-span-3 lg:col-span-2"
          >
            <h1 class="text-5xl md:text-6xl font-bold">
              {{ t("resume.profile.name") }}
            </h1>
            <p class="text-lg text-gray-600 dark:text-gray-400">
              {{ t("resume.profile.role") }}
            </p>
            <h2 class="text-4xl font-semibold mb-3 mt-8">
              {{ t("resume.about.title") }}
            </h2>
            <p>{{ t("resume.about.description") }}</p>
          </BaseDiv>

          <!-- Image with gradient moving background -->
          <BaseDiv
            class="animated-div md:col-span-3 lg:col-span-1 mt-4 md:mt-0"
          >
            <img
              style="transform: scale(1)"
              width="100%"
              height="100%"
              loading="lazy"
              src="assets/css/images/mountainman.png"
              alt="Christopher Bermudez"
              class="rounded-lg max-w-full h-auto nuxt-img-animation"
            />
          </BaseDiv>
        </div>

        <!-- Experience Section -->
        <div class="grid grid-cols-1 md:grid-cols-7 gap-0 md:gap-4">
          <BaseDiv customClass="experience-section md:col-span-5 mt-6">
            <h2 class="text-4xl font-bold mb-4">
              {{ t("resume.experience.title") }}
            </h2>
            <ol>
              <TimelineEntry
                v-for="item in experienceItems"
                :key="item.id"
                :date="item.date"
                :title="item.title"
                :image="item.image"
                :description="item.description"
                :link="item.link"
              />
            </ol>
          </BaseDiv>

          <!-- Education -->
          <BaseDiv customClass="mt-6 md:col-span-2">
            <h2 class="text-4xl font-semibold mb-3">
              {{ t("resume.education.title") }}
            </h2>
            <div class="flex">
              <img
                :src="UCFLogo"
                alt="Image"
                class="w-12 h-12 mt-3 mr-2 rounded-lg"
              />
              <p class="py-2">
                <span class="font-semibold">{{
                  t("resume.education.degrees[0].level")
                }}</span>
                -
                {{ t("resume.education.degrees[0].school") }}
              </p>
            </div>
            <div class="flex">
              <img
                :src="ValenciaLogo"
                alt="Image"
                class="w-12 h-12 mt-3 mr-2 rounded-lg"
              />
              <p class="py-2">
                <span class="font-semibold">{{
                  t("resume.education.degrees[1].level")
                }}</span>
                -
                {{ t("resume.education.degrees[1].school") }}
              </p>
            </div>
          </BaseDiv>
        </div>

        <!-- Skills and Languages -->
        <BaseDiv customClass="grid grid-cols-8 gap-8 mt-6">
          <div class="col-span-8 md:col-span-3">
            <h2 class="text-4xl font-semibold mb-3">
              {{ t("resume.skills.title") }}
            </h2>
            <p>TypeScript</p>
            <p>Vue.js</p>
            <p>Node.js</p>
            <p>React</p>
            <p>SQL</p>
            <p>SASS/CSS</p>
            <!-- Add more skills here -->
          </div>
          <div class="col-span-8 md:col-span-3">
            <h2 class="text-4xl font-semibold mb-3">
              {{ t("resume.languages.title") }}
            </h2>
            <p>Español - Fluent</p>
            <p>English - Fluent</p>
            <p>Portuguese - Beginner</p>
            <!-- Add more languages here -->
          </div>
          <div class="col-span-8 md:col-span-2">
            <h2 class="text-4xl font-semibold mb-3">
              {{ t("resume.hobbies.title") }}
            </h2>
            <p>{{t("resume.hobbies.list[0]") }}</p>
            <p>{{t("resume.hobbies.list[1]") }}</p>
            <p>{{t("resume.hobbies.list[2]") }}</p>
            <p>{{t("resume.hobbies.list[3]") }}</p>
            <!-- Add more languages here -->
          </div>
        </BaseDiv>

        <!-- GitHub Profile Section -->
        <BaseDiv class="mt-8">
          <GithubProfile />
        </BaseDiv>

        <!-- This site was built with -->
        <BaseDiv class="mt-8">
            <h2 class="text-4xl font-semibold text-center md:text-left mb-4">{{ $t('resume.built.title') }}</h2>
          <BuiltWithContainer />
        </BaseDiv>
      </GSAPStaggeredEffect>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import TimelineEntry from "@/components/resume/TimelineEntry.vue";
import GSAPStaggeredEffect from "@/components/effects/GSAPStaggeredReveal.vue";
import BaseDiv from "@/components/ui/BaseDiv.vue";
import BuiltWithContainer from "@/components/resume/BuiltWithContainer.vue";
import GithubProfile from "@/components/resume/GithubProfile.vue";

// Assets
import MegaportLogo from "/assets/css/images/megaportlogo.jpeg";
import SweetieBoyLogo from "/assets/css/images/autosdlvrd_logo.jpeg";
import GrowthChannelLogo from "/assets/css/images/growthchannel_logo.jpeg";
import UCFLogo from "/assets/css/images/university_of_central_florida_division_of_continuing_education_logo.jpeg";
import ValenciaLogo from "/assets/css/images/valencia_college_logo.jpeg";

const { t } = useI18n();

const experienceItems = [
  {
    id: 1,
    date: t("resume.experience.positions[0].date"),
    title: t("resume.experience.positions[0].title"),
    image: MegaportLogo,
    description: t("resume.experience.positions[0].description"),
    link: "#",
  },
  {
    id: 2,
    date: t("resume.experience.positions[1].date"),
    title: t("resume.experience.positions[1].title"),
    image: SweetieBoyLogo,
    description: t("resume.experience.positions[1].description"),
    link: "#",
  },
  {
    id: 3,
    date: t("resume.experience.positions[2].date"),
    title: t("resume.experience.positions[2].title"),
    image: GrowthChannelLogo,
    description: t("resume.experience.positions[2].description"),
    link: "#",
  },
];
</script>

<style scoped>
.animated-div {
  background: linear-gradient(200deg, #6327dd, #dd279e, #2773dd);
  background-size: 600% 600%;

  -webkit-animation: AnimationName 21s ease infinite;
  -moz-animation: AnimationName 21s ease infinite;
  animation: AnimationName 21s ease infinite;
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 69% 0%;
  }
  50% {
    background-position: 32% 100%;
  }
  100% {
    background-position: 69% 0%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 69% 0%;
  }
  50% {
    background-position: 32% 100%;
  }
  100% {
    background-position: 69% 0%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 69% 0%;
  }
  50% {
    background-position: 32% 100%;
  }
  100% {
    background-position: 69% 0%;
  }
}
</style>
