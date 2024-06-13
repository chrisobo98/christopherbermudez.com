<template>
  <form @submit.prevent="handleSubmit" class="max-w-7xl mx-auto p-8 rounded-lg">
    <h2 class="text-6xl font-bold text-white mb-8 text-center">{{ $t('home.contact.header') }}</h2>

    <div v-for="field in fields" :key="field.id" class="mb-5">
      <label :for="field.id" class="block mb-2 font-medium text-gray-300">{{ field.label }}</label>
      <div v-if="field.type === 'text' || field.type === 'email' || field.type === 'url'" class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <component :is="field.icon" class="w-5 h-5 text-gray-500" />
        </div>
        <input
          :type="field.type"
          :id="field.id"
          v-model="form[field.id as keyof FormData]"
          :placeholder="field.placeholder"
          class="bg-gray-700 border border-gray-600 text-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full pl-10 p-2.5"
          required
        />
      </div>
      <div v-else>
        <textarea
          :id="field.id"
          v-model="form[field.id as keyof FormData]"
          :placeholder="field.placeholder"
          rows="4"
          class="block p-2.5 w-full text-gray-300 bg-gray-700 rounded-lg border border-gray-600 focus:ring-violet-500 focus:border-violet-500"
          required
        ></textarea>
      </div>
    </div>

    <div class="text-right">
      <BaseButton type="submit">Submit</BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UserIcon, EnvelopeIcon, BuildingOfficeIcon, LinkIcon } from '@heroicons/vue/24/solid'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

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
  'current-state': string;
  experience: string;
  details: string;
}

const fields: Field[] = [
  { id: 'name', label: t('home.contact.name_header'), type: 'text', placeholder: t('home.contact.name'), icon: UserIcon },
  { id: 'email', label:  t('home.contact.email_header'), type: 'email', placeholder: t('home.contact.email'), icon: EnvelopeIcon },
  { id: 'company', label:  t('home.contact.company_header'), type: 'text', placeholder: t('home.contact.company'), icon: BuildingOfficeIcon },
  { id: 'website', label:  t('home.contact.website_header'), type: 'url', placeholder: t('home.contact.website'), icon: LinkIcon },
  { id: 'content', label:  t('home.contact.content_header'), type: 'textarea', placeholder: t('home.contact.content'), icon: null },
  { id: 'functionality', label:  t('home.contact.functionality_header'), type: 'textarea', placeholder: t('home.contact.functionality'), icon: null },
  { id: 'current-state', label:  t('home.contact.state_of_site_header'), type: 'textarea', placeholder: t('home.contact.state_of_site'), icon: null },
  { id: 'experience', label:  t('home.contact.site_experience_header'), type: 'textarea', placeholder: t('home.contact.site_experience'), icon: null },
  { id: 'details', label:  t('home.contact.other_details_header'), type: 'textarea', placeholder: t('home.contact.other_details'), icon: null }
]

const form = ref<FormData>({
  name: '',
  email: '',
  company: '',
  website: '',
  content: '',
  functionality: '',
  'current-state': '',
  experience: '',
  details: ''
})

const handleSubmit = () => {
  console.log(form.value)
  // Handle form submission
}
</script>

<style scoped>
/* No additional styles needed as Tailwind handles everything */
</style>
