<template>
    <header :class="{ 'header-scrolled': scrolled }" class="main-header bg-[#ffffff] dark:bg-[#1d1d1d]">
      <nav class="border-gray-200 transition-all duration-500">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="#" class="text-4xl font-semibold whitespace-nowrap bayon-regular h8 logo-bounce">
            <span>C</span><span class="hidden lg:inline">hristopher</span>
            <span class="text-purple-700">B</span><span class="hidden lg:inline text-purple-700">ermudez</span>
          </a>
          <div class="flex items-center space-x-3 md:space-x-3">
            <!-- Language Selector -->
            <LanguageSelector class="nav-item-bounce delay-100" />
  
            <!-- Appointment Button -->
            <button class="nav-item-bounce delay-200 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
              {{ $t('home.navbar.appointment') }}            
            </button>
  
            <!-- Dark Mode Switch -->
            <DarkModeSwitcher />
  
            <!-- Hamburger Toggle Mobile -->
            <button @click="toggleMenu" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
  
          <!-- Nav Links -->
          <div :class="{ hidden: !menuOpen }" id="mega-menu-full" class="w-full lg:flex lg:w-auto lg:order-1">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0">
              <NavLink class="nav-item-bounce delay-300" href="#" :text="$t('home.navbar.software')" />
              <li class="nav-item-bounce delay-400">
                <button id="mega-menu-full-dropdown-button" @click="toggleMegaMenu" class="flex items-center justify-between w-full py-2 px-3 rounded lg:w-auto hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-600 lg:p-0 lg:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-purple-500 lg:dark:hover:bg-transparent dark:border-gray-700">
                  {{ $t('home.navbar.web') }}                    
                  <svg class="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l4 4 4-4" />
                  </svg>
                </button>
              </li>
              <NavLink class="nav-item-bounce delay-500" href="#" :text="$t('home.navbar.marketing')" />
              <NavLink class="nav-item-bounce delay-500" href="#" :text="$t('home.navbar.journal')" />
            </ul>
          </div>
        </div>
  
        <!-- Megamenu -->
        <div v-if="megaMenuOpen" id="mega-menu-full-dropdown" class="mt-1 bg-white shadow-sm bg-gray-50 border-y dark:bg-violet-600 dark:border-purple-500 transition-transform transform">
          <div class="grid max-w-screen-xl px-4 py-5 mx-auto sm:grid-cols-2 md:px-6">
            <ul>
              <DropdownItem href="#" title="E-commerce Solutions" description="Build robust online stores with seamless integrations." />
              <DropdownItem href="#" title="Custom Websites" description="Get a website tailored to your business needs." />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import LanguageSelector from '~/components/ui/LanguageSelector.vue';  // Import the LanguageSelector component
  import NavLink from '~/components/ui/NavLink.vue';
  import DropdownItem from '~/components/ui/DropdownItem.vue';
  import DarkModeSwitcher from '~/components/effects/DarkModeSwitcher.vue';
  
  const scrolled = ref(false);
  const menuOpen = ref(false);
  const megaMenuOpen = ref(false);
  
  const handleScroll = () => {
    scrolled.value = window.scrollY > 50;
  };
  
  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
  };
  
  const toggleMegaMenu = () => {
    megaMenuOpen.value = !megaMenuOpen.value;
  };
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  </script>
  
  <style scoped>
  .main-header {
    transition: background-color 0.3s ease, color 0.3s ease;
    position: sticky;
    top: 0;
    z-index: 50;
  }
  
  .nav-item-bounce {
    transition: color 0.3s ease; /* Ensure text color transition is smooth */
  }
  
  @keyframes bounce-once {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  .logo-bounce {
    animation: bounce-once 1s ease;
    animation-fill-mode: forwards;
  }
  
  .nav-item-bounce {
    animation: bounce-once 1s ease;
    animation-fill-mode: forwards;
  }
  
  .nav-item-bounce.delay-100 {
    animation-delay: 0.1s;
  }
  
  .nav-item-bounce.delay-200 {
    animation-delay: 0.2s;
  }
  
  .nav-item-bounce.delay-300 {
    animation-delay: 0.3s;
  }
  
  .nav-item-bounce.delay-400 {
    animation-delay: 0.4s;
  }
  
  .nav-item-bounce.delay-500 {
    animation-delay: 0.5s;
  }
  </style>
  