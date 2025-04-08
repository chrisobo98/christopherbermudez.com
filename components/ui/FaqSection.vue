<template>
  <section class="py-16 lg:py-24" aria-labelledby="faq-heading">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12">
        {{ heading }}
      </h2>

      <div
        class="flex flex-col mx-auto max-w-screen-lg border-t border-purple-600"
      >
        <div
          v-for="(item, index) in localQuestions"
          :key="index"
          class="border-b border-purple-600"
        >
          <div
            @click="toggleAnswer(index)"
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
          <div v-if="item.open" class="mb-4">
            <p>{{ item.answer }}</p>
            <ul v-if="item.details" class="list-disc pl-5 mt-2 space-y-1">
              <li v-for="(detail, dIndex) in item.details" :key="dIndex">
                {{ detail }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, toRefs } from "vue";

const props = defineProps({
  questions: {
    type: Array,
    required: true,
    default: () => [],
  },
  heading: {
    type: String,
    default: "Frequently Asked Questions",
  },
});

// Create reactive local copy
const { questions } = toRefs(props);
const localQuestions = ref([...questions.value]);

// Update local copy when prop changes
watch(questions, (newVal) => {
  localQuestions.value = [...newVal];
});

const toggleAnswer = (index) => {
  localQuestions.value = localQuestions.value.map((item, i) => ({
    ...item,
    open: i === index ? !item.open : false,
  }));
};
</script>
