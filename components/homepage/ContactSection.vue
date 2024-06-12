<template>
  <form @submit.prevent="handleSubmit" class="max-w-7xl mx-auto p-8 rounded-lg">
    <h2 class="text-6xl font-bold text-white mb-8 text-center">Get a Free Estimate</h2>

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
  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your Name', icon: UserIcon },
  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'name@example.com', icon: EnvelopeIcon },
  { id: 'company', label: 'Company', type: 'text', placeholder: 'Your Company', icon: BuildingOfficeIcon },
  { id: 'website', label: 'Website URL', type: 'url', placeholder: 'https://example.com', icon: LinkIcon },
  { id: 'content', label: 'What primary content do you need on your website?', type: 'textarea', placeholder: 'Describe the primary content you need...', icon: null },
  { id: 'functionality', label: 'What must-have functionality do you need?', type: 'textarea', placeholder: 'Describe the must-have functionality...', icon: null },
  { id: 'current-state', label: 'What is the current state of your website?', type: 'textarea', placeholder: 'Describe the current state of your website...', icon: null },
  { id: 'experience', label: 'What is your experience with managing your own website?', type: 'textarea', placeholder: 'Describe your experience...', icon: null },
  { id: 'details', label: 'Please provide any other details or questions you have about your website', type: 'textarea', placeholder: 'Leave additional details or questions...', icon: null }
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
