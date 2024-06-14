<template>
  <section class="py-12 bg-white dark:bg-[#1d1d1d]">
    <form @submit.prevent="handleSubmit" class="w-11/12 lg:w-full max-w-7xl mx-auto p-8 rounded-lg">
      <h2 class="text-6xl font-bold mb-8 text-center">
        {{ $t("home.contact.header") }}
      </h2>

      <div v-for="field in fields" :key="field.id" class="mb-5">
        <label :for="field.id" class="block mb-2 font-medium">{{ field.label }}</label>
        <div
          v-if="field.type === 'text' || field.type === 'email' || field.type === 'url'"
          class="relative"
        >
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <component :is="field.icon" class="w-5 h-5" />
          </div>
          <input
            :type="field.type"
            :id="field.id"
            v-model="form[field.id as keyof FormData]"
            :placeholder="field.placeholder"
            class="bg-gray-200 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full pl-10 p-2.5"
            required
          />
        </div>
        <div v-else>
          <textarea
            :id="field.id"
            v-model="form[field.id as keyof FormData]"
            :placeholder="field.placeholder"
            rows="4"
            class="block p-2.5 w-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-lg border border-gray-100 dark:border-gray-600 focus:ring-violet-500 focus:border-violet-500"
            required
          ></textarea>
        </div>
      </div>

      <div class="text-right">
        <BaseButton type="submit" :disabled="loading">
          <template v-if="loading">
            <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
            </svg>
            Loading...
          </template>
          <template v-else>
            Submit
          </template>
        </BaseButton>
      </div>
    </form>
    <Notification v-if="notification.show" :message="notification.message" :type="notification.type" :duration="5000" />
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import emailjs from "emailjs-com";
import { UserIcon, EnvelopeIcon, BuildingOfficeIcon, LinkIcon } from "@heroicons/vue/24/solid";
import BaseButton from "@/components/ui/BaseButton.vue";
import Notification from "@/components/effects/MessageSentNotification.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Define the type for the notification state
interface NotificationData {
  show: boolean;
  message: string;
  type: 'success' | 'error';
}

interface Field {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  icon: any;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  website: string;
  content: string;
  functionality: string;
  "current-state": string;
  experience: string;
  details: string;
}

interface NotificationData {
  show: boolean;
  message: string;
  type: 'success' | 'error';
}

const fields: Field[] = [
  {
    id: "name",
    label: t("home.contact.name_header"),
    type: "text",
    placeholder: t("home.contact.name"),
    icon: UserIcon,
  },
  {
    id: "email",
    label: t("home.contact.email_header"),
    type: "email",
    placeholder: t("home.contact.email"),
    icon: EnvelopeIcon,
  },
  {
    id: "company",
    label: t("home.contact.company_header"),
    type: "text",
    placeholder: t("home.contact.company"),
    icon: BuildingOfficeIcon,
  },
  {
    id: "website",
    label: t("home.contact.website_header"),
    type: "url",
    placeholder: t("home.contact.website"),
    icon: LinkIcon,
  },
  {
    id: "content",
    label: t("home.contact.content_header"),
    type: "textarea",
    placeholder: t("home.contact.content"),
    icon: null,
  },
  {
    id: "functionality",
    label: t("home.contact.functionality_header"),
    type: "textarea",
    placeholder: t("home.contact.functionality"),
    icon: null,
  },
  {
    id: "current-state",
    label: t("home.contact.state_of_site_header"),
    type: "textarea",
    placeholder: t("home.contact.state_of_site"),
    icon: null,
  },
  {
    id: "experience",
    label: t("home.contact.site_experience_header"),
    type: "textarea",
    placeholder: t("home.contact.site_experience"),
    icon: null,
  },
  {
    id: "details",
    label: t("home.contact.other_details_header"),
    type: "textarea",
    placeholder: t("home.contact.other_details"),
    icon: null,
  },
];

const form = ref<FormData>({
  name: "",
  email: "",
  company: "",
  website: "",
  content: "",
  functionality: "",
  "current-state": "",
  experience: "",
  details: "",
});

const loading = ref(false);
const notification = ref<NotificationData>({
  show: false,
  message: '',
  type: 'success'
});

const handleSubmit = () => {
  loading.value = true;
  notification.value.show = false;
  const templateParams = {
    name: form.value.name,
    email: form.value.email,
    company: form.value.company,
    website: form.value.website,
    content: form.value.content,
    functionality: form.value.functionality,
    currentState: form.value["current-state"],
    experience: form.value.experience,
    details: form.value.details,
  };

  emailjs
    .send(
      "service_imdxal6", // Replace with your EmailJS Service ID
      "template_ycrptpl", // Replace with your EmailJS Template ID
      templateParams,
      "URSQb8MOeSJGnLiuH" // Replace with your EmailJS User ID
    )
    .then(
      (response) => {
        loading.value = false;
        notification.value = {
          show: true,
          message: "Message sent successfully.",
          type: "success"
        };
        clearForm();
      },
      (error) => {
        loading.value = false;
        notification.value = {
          show: true,
          message: "Message sending failed.",
          type: "error"
        };
      }
    );
};

const clearForm = () => {
  form.value = {
    name: "",
    email: "",
    company: "",
    website: "",
    content: "",
    functionality: "",
    "current-state": "",
    experience: "",
    details: "",
  };
};
</script>

<style scoped>
/* No additional styles needed as Tailwind handles everything */
</style>
