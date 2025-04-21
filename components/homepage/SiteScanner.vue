<template>
  <BaseSection>
    <form @submit.prevent="handleSubmit">
      <GSAPStaggeredEffect>
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-4"
          id="so-fieldswrapso1734451725"
        >
          <!-- Website URL Input -->
          <div class="col-span-3 md:col-span-1">
            <label for="domain" class="block mb-2 font-medium">
              {{ $t("home.hero.websiteUrl") }}
            </label>
            <input
              type="text"
              id="domain"
              v-model="form.domain"
              :placeholder="$t('home.hero.websiteUrl')"
              class="bg-gray-200 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
              required
            />
          </div>

          <!-- First Name Input -->
          <div class="col-span-3 md:col-span-1">
            <label for="firstName" class="block mb-2 font-medium">
              {{ $t("home.hero.firstName") }}
            </label>
            <input
              type="text"
              id="firstName"
              v-model="form.firstName"
              :placeholder="$t('home.hero.firstName')"
              class="bg-gray-200 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
              required
            />
          </div>

          <!-- Phone Input -->
          <div class="col-span-3 md:col-span-1">
            <label for="phone" class="block mb-2 font-medium">
              {{ $t("home.hero.phone") }}
            </label>
            <input
              type="text"
              id="phone"
              v-model="form.phone"
              :placeholder="$t('home.hero.phone')"
              class="bg-gray-200 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
              required
            />
          </div>

          <!-- Email Input -->
          <div class="col-span-3 md:col-span-2">
            <label for="email" class="block mb-2 font-medium">
              {{ $t("home.hero.email") }}
            </label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              :placeholder="$t('home.hero.email')"
              class="bg-gray-200 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
              required
            />
          </div>

          <!-- Submit Button -->
          <div class="col-span-3 md:col-span-1 mt-8">
            <BaseButton type="submit" :disabled="loading" class="w-full">
              <template v-if="loading">
                <svg
                  aria-hidden="true"
                  role="status"
                  class="inline w-4 h-4 me-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Loading...
              </template>
              <template v-else> Submit </template>
            </BaseButton>
          </div>
        </div>
      </GSAPStaggeredEffect>
    </form>

    <!-- Successfully sent notification -->
    <Notification
      v-if="notification.show"
      :message="notification.message"
      :type="notification.type"
      :duration="5000"
    />
  </BaseSection>
</template>

<script setup lang="ts">
import { ref } from "vue";
import emailjs from "@emailjs/browser";
import BaseButton from "@/components/ui/BaseButton.vue";
import Notification from "@/components/effects/MessageSentNotification.vue";
import GSAPStaggeredEffect from "@/components/effects/GSAPStaggeredReveal.vue";
import BaseSection from "../ui/BaseSection.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

interface NotificationData {
  show: boolean;
  message: string;
  type: "success" | "error";
}

interface FormData {
  domain: string;
  firstName: string;
  phone: string;
  email: string;
}

const form = ref<FormData>({
  domain: "",
  firstName: "",
  phone: "",
  email: "",
});

const loading = ref(false);
const notification = ref<NotificationData>({
  show: false,
  message: "",
  type: "success",
});

const handleSubmit = () => {
  loading.value = true;
  notification.value.show = false;
  const templateParams = {
    domain: form.value.domain,
    firstName: form.value.firstName,
    phone: form.value.phone,
    email: form.value.email,
  };

  emailjs
    .send(
      "service_lqkg3cd", // Replace with your EmailJS Service ID
      "template_nv86y98", // Replace with your EmailJS Template ID
      templateParams,
      "URSQb8MOeSJGnLiuH" // Replace with your EmailJS User ID
    )
    .then(
      (response) => {
        loading.value = false;
        notification.value = {
          show: true,
          message: "Message sent successfully.",
          type: "success",
        };
        clearForm();
      },
      (error) => {
        loading.value = false;
        notification.value = {
          show: true,
          message: "Message sending failed.",
          type: "error",
        };
      }
    );
};

const clearForm = () => {
  form.value = {
    domain: "",
    firstName: "",
    phone: "",
    email: "",
  };
};
</script>

<style scoped>
/* Add any custom styles you might need */
</style>
