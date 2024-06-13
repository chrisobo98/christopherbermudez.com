<template>
    <div class="relative">
      <button @click="toggleLanguageDropdown" class="dark:text-white flex items-center">
        
        <!-- USA SVG -->
        <svg v-if="currentLocale === 'en'" class="w-5 h-5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3900 3900">
          <path fill="#b22234" d="M0 0h7410v3900H0z"/>
          <path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300"/>
          <path fill="#3c3b6e" d="M0 0h2964v2100H0z"/>
          <g fill="#fff">
            <g id="d">
              <g id="c">
                <g id="e">
                  <g id="b">
                    <path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"/>
                    <use xlink:href="#a" y="420"/>
                    <use xlink:href="#a" y="840"/>
                    <use xlink:href="#a" y="1260"/>
                  </g>
                  <use xlink:href="#a" y="1680"/>
                </g>
                <use xlink:href="#b" x="247" y="210"/>
              </g>
              <use xlink:href="#c" x="494"/>
            </g>
            <use xlink:href="#d" x="988"/>
            <use xlink:href="#c" x="1976"/>
            <use xlink:href="#e" x="2470"/>
          </g>
        </svg>

        <!-- Spain custom svg -->
        <svg v-else-if="currentLocale === 'es'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="w-5 h-5 rounded-full mr-2">
          <circle cx="32" cy="32" r="32" fill="#aa151b" />
          <rect x="0" y="19" width="64" height="27" fill="#f1bf00" />
        </svg>
        {{ currentLocale.toUpperCase() }}
      </button>
      <!-- Language Dropdown -->
      <div v-if="languageDropdownOpen" id="language-dropdown-menu" class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg z-50">
        <ul>
          <li><NuxtLink :to="switchLocalePath('en')" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-400">English (US)</NuxtLink></li>
          <li><NuxtLink :to="switchLocalePath('es')" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-400">Spanish (ES)</NuxtLink></li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  const languageDropdownOpen = ref(false);
  const { locale } = useI18n();
  const currentLocale = ref(locale.value);

  const switchLocalePath = useSwitchLocalePath()
  
  watch(locale, (newLocale) => {
    console.log('Locale changed:', newLocale);
    currentLocale.value = newLocale;
  });
  
  const toggleLanguageDropdown = () => {
    languageDropdownOpen.value = !languageDropdownOpen.value;
    console.log('Dropdown toggled:', languageDropdownOpen.value);
  };
  </script>
  
   
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  