<template>
  <section class="py-24 relative">
    <svg
      class="absolute top-0 left-0"
      xmlns="http://www.w3.org/2000/svg"
      width="839"
      height="649"
      viewBox="0 0 839 649"
      fill="none"
      style="width: -webkit-fill-available"
    >
      <g filter="url(#filter0_f_14445_72538)">
        <ellipse cx="76" cy="-6.5" rx="233" ry="125.5" fill="#672bd9" />
      </g>
      <defs>
        <filter
          id="filter0_f_14445_72538"
          x="-687"
          y="-662"
          width="1526"
          height="1311"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="265"
            result="effect1_foregroundBlur_14445_72538"
          />
        </filter>
      </defs>
    </svg>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div class="flex-col justify-start items-start gap-4 flex pb-12">
          <span
            class="lg:mx-0 mx-auto px-5 py-3 rounded-xl border border-purple-600 justify-start items-start gap-2.5 inline-flex text-2xl font-normal leading-7"
          >
            {{ $t("pricing.info.badge") }}
          </span>
          <div
            class="self-stretch justify-between items-center lg:flex grid gap-8"
          >
            <h2
              class="grow shrink basis-0 text-5xl font-bold font-manrope leading-normal lg:text-start text-center"
            >
              {{ $t("pricing.info.title") }}
            </h2>
            <p
              class="grow shrink basis-0 text-base font-normal leading-relaxed lg:text-start text-center"
            >
              {{ $t("pricing.info.description") }}
            </p>
          </div>
        </div>

        <div class="w-full p-8 rounded-3xl shadow border border-purple-600">
          <div
            class="w-full md:flex grid md:justify-between justify-center border-b border-purple-700 pt-10 pb-16"
          >
            <ul v-for="(column, index) in chunkedFeatures" :key="index">
              <li
                v-for="featureKey in column"
                :key="featureKey"
                class="flex items-center gap-4 text-base font-medium leading-relaxed pb-5"
              >
                <Icon
                  name="pepicons-print:checkmark-filled"
                  size="2em"
                  class="mx-3 my-3"
                />
                {{ $t(featureKey) }}
              </li>
            </ul>
          </div>
          <div
            class="w-full px-3 sm:justify-between items-center sm:flex grid gap-4 pt-10 justify-center md:mx-0 mx-auto"
          >
            <div class="justify-start items-center gap-1.5 flex">
              <h3 class="text-6xl font-semibold font-manrope leading-normal">
                {{ $t("pricing.info.startingPrice") }}
                <span class="text-lg font-medium">{{
                  $t("pricing.info.perPage")
                }}</span>
              </h3>
            </div>
            <button
              class="px-3 py-3 bg-purple-600 hover:bg-purple-700 transition-all duration-500 ease-in-out rounded-xl shadow justify-center items-center flex"
            >
              <NuxtLink
                :to="localePath(ctaLink)"
                class="px-2 text-white transition-all duration-500 ease-in-out text-base font-semibold"
              >
                {{ $t("pricing.info.contactButton") }}
              </NuxtLink>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center py-12">
      <h2 class="text-3xl font-bold text-center mb-6">
        {{ $t("pricing.plans.retainerTitle") }}
      </h2>
      <p class="text-lg text-center max-w-2xl mb-8 px-12 md:px-0">
        {{ $t("pricing.plans.retainerDescription") }}
      </p>
      <div class="flex items-center space-x-3 mb-6">
        <p>{{ $t("pricing.plans.billing.monthly") }}</p>
        <button
          @click="toggleBilling"
          class="relative w-14 h-7 bg-purple-300 rounded-full p-1 flex items-center transition duration-300"
          :class="{ 'bg-purple-600': isYearly }"
        >
          <span
            class="w-5 h-5 bg-white rounded-full shadow-md transform transition duration-300"
            :class="{ 'translate-x-7': isYearly }"
          ></span>
        </button>
        <p>{{ $t("pricing.plans.billing.yearly") }}</p>
      </div>
      <div
        class="grid md:grid-cols-3 gap-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div
          v-for="tier in ['tier1', 'tier2', 'tier3']"
          :key="tier"
          class="shadow border border-purple-600 p-8 rounded-3xl flex flex-col"
        >
          <h3 class="text-xl font-semibold mb-2">
            {{ $t(`pricing.plans.${tier}.name`) }}
          </h3>
          <p class="mb-4">{{ $t(`pricing.plans.${tier}.description`) }}</p>
          <div class="text-3xl font-bold mb-4">
            {{
              isYearly
                ? $t(`pricing.plans.${tier}.priceYearly`)
                : $t(`pricing.plans.${tier}.priceMonthly`)
            }}
            <span class="text-lg font-medium"
              >/ {{ isYearly ? $t("general.year") : $t("general.month") }}</span
            >
          </div>
          <div class="mb-4">
            <ul class="space-y-2">
              <li
                v-for="(feature, index) in $tm(
                  `pricing.plans.${tier}.features`
                )"
                :key="index"
                class="flex items-left space-x-2"
              >
                <span class="text-purple-500">✔</span>
                <p>{{ feature }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 class="text-2xl font-bold mb-4">
          {{ $t("pricing.plans.additionalServices.title") }}
        </h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            class="shadow border border-purple-600 p-8 rounded-3xl text-center"
          >
            <h4 class="text-xl font-semibold mb-2">
              {{ $t("pricing.plans.additionalServices.pages.title") }}
            </h4>
            <p>
              {{ $t("pricing.plans.additionalServices.pages.description") }}
            </p>
            <p class="text-2xl font-bold mt-2">
              {{ $t("pricing.plans.additionalServices.pages.price") }}
            </p>
          </div>
          <div
            class="shadow border border-purple-600 p-8 rounded-3xl text-center"
          >
            <h4 class="text-xl font-semibold mb-2">
              {{ $t("pricing.plans.additionalServices.articles.title") }}
            </h4>
            <p>
              {{ $t("pricing.plans.additionalServices.articles.description") }}
            </p>
            <p class="text-2xl font-bold mt-2">
              {{ $t("pricing.plans.additionalServices.articles.price") }}
            </p>
          </div>
          <div
            class="shadow border border-purple-600 p-8 rounded-3xl text-center"
          >
            <h4 class="text-xl font-semibold mb-2">
              {{ $t("pricing.plans.additionalServices.custom.title") }}
            </h4>
            <p>
              {{ $t("pricing.plans.additionalServices.custom.description") }}
            </p>
            <button
              class="bg-purple-600 py-2 px-4 rounded-lg hover:bg-purple-700 transition mt-4"
            >
              <NuxtLink :to="localePath('/appointments')" class="text-white">
                {{ $t("pricing.plans.additionalServices.custom.button") }}
              </NuxtLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
const { t, tm } = useI18n();

useHead({
  title: t("pricing.metadata.title"),
  meta: [
    {
      name: "description",
      content: t("pricing.metadata.description"),
    },
    {
      property: "og:title",
      content: t("pricing.metadata.og_title"),
    },
    {
      property: "og:description",
      content: t("pricing.metadata.og_description"),
    },
  ],
});

const isYearly = ref(false);
const toggleBilling = () => {
  isYearly.value = !isYearly.value;
};

const ctaLink = ref("/appointments");

const features = ref([
  "pricing.info.features.fivePage",
  "pricing.info.features.seo",
  "pricing.info.features.onlinePresence",
  "pricing.info.features.blog",
  "pricing.info.features.newsletter",
  "pricing.info.features.contentStrategy",
]);

const chunkedFeatures = computed(() => {
  return features.value.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 2);
    if (!resultArray[chunkIndex]) resultArray[chunkIndex] = [];
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
});
</script>
