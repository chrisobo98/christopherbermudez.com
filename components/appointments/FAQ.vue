<template>
  <div>
    <div class="mb-10 md:mb-16 text-center">
      <h2 class="mb-4 text-2xl font-bold md:mb-6 lg:text-3xl">
        {{ $t("appointments.info.faq") }}
      </h2>
      <p class="mx-auto max-w-screen-md md:text-lg">
        {{ $t("appointments.info.faqIntro") }}
      </p>
    </div>

    <div
      class="flex flex-col mx-auto max-w-screen-sm border-t border-purple-600"
    >
      <div
        v-for="item in questions"
        :key="item.id"
        class="border-b border-purple-600"
      >
        <div
          @click="toggleAnswer(item.id)"
          class="flex justify-between cursor-pointer py-4 hover:text-purple-400"
        >
          <span class="font-semibold md:text-lg">{{ item.question }}</span>
          <span
            :class="{ 'rotate-180': item.open }"
            class="transition-transform text-purple-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
        <p v-if="item.open" class="mb-4">{{ item.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";

const { t } = useI18n();

const questions = ref([
  {
    id: 1,
    question: t("appointments.faq.howLongQuestion"),
    answer: t("appointments.faq.howLong"),
    open: true,
  },
  {
    id: 2,
    question: t("appointments.faq.whatDoYouNeedQuestion"),
    answer: t("appointments.faq.whatDoYouNeed"),
    open: false,
  },
  {
    id: 4,
    question: t("appointments.faq.mobileQuestions"),
    answer: t("appointments.faq.mobile"),
    open: false,
  },
  {
    id: 5,
    question: t("appointments.faq.somethingWrongQuestions"),
    answer: t("appointments.faq.somethingWrong"),
    open: false,
  },
]);

function toggleAnswer(id) {
  questions.value.forEach((item) => {
    if (item.id === id) item.open = !item.open;
    else item.open = false;
  });
}
</script>

<style scoped>
/* Scoped styles if necessary */
</style>
