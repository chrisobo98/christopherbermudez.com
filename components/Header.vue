<template>
  <header
    :class="{ 'header-scrolled': scrolled }"
    class="main-header bg-[#ffffff] dark:bg-[#1d1d1d]"
  >
    <nav class="border-gray-200 transition-all duration-500">
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4"
      >
        <NuxtImg
          provider="cloudinary"
          src="v1735772391/mobile-logo_dklwzn.png"
          @click="navigateHome"
          alt="Bermudez 'B' Logo"
          width="100"
          height="100"
          loading="lazy"
          class="md:hidden rounded-lg w-2/12 cursor-pointer"
        />
        <NuxtLink
          :to="localePath('/')"
          class="text-4xl font-semibold whitespace-nowrap h8 logo-bounce"
          aria-label="Christopher Bermudez Logo"
        >
          <span class="hidden uppercase md:inline">Christopher</span>
          <span class="hidden uppercase md:inline text-purple-700"
            >Bermudez</span
          >
        </NuxtLink>
        <div class="flex items-center space-x-3 md:space-x-3">
          <!-- Language Selector -->
          <LanguageSelector class="nav-item-bounce delay-100" />

          <!-- Appointment Button Desktop -->
          <NuxtLink
            :to="localePath('/appointments')"
            aria-label="Appointments link"
            class="nav-item-bounce hidden md:inline delay-200 text-white bg-purple-600 dark:bg-black border border-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            {{ $t("home.navbar.appointment") }}
          </NuxtLink>

          <!-- Dark Mode Switch -->
          <DarkModeSwitcher />

          <!-- Hamburger Toggle Mobile -->
          <button
            @click="toggleMenu"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <!-- Nav Links -->
        <div
          :class="{ hidden: !menuOpen }"
          id="mega-menu-full"
          class="w-full lg:flex lg:w-auto lg:order-1"
        >
          <ul
            class="flex flex-col p-4 mt-4 border border-purple-500 rounded-lg lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0"
          >
            <NavLink
              class="nav-item-bounce delay-500"
              :href="localePath('/website-seo-packages')"
              :text="$t('home.navbar.pricing')"
            />
            <NavLink
              class="nav-item-bounce delay-500"
              :href="localePath('/about')"
              :text="$t('home.navbar.about')"
            />
            <NavLink
              class="nav-item-bounce delay-500"
              :href="localePath('/templates')"
              :text="$t('home.navbar.templates')"
            />
            <NavLink
              class="nav-item-bounce delay-500"
              :href="localePath('/blog')"
              :text="$t('home.navbar.blogs')"
            />
            <!-- Services Dropdown -->
            <li
              class="services-dropdown relative group block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-purple-700 lg:p-0 lg:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-purple-500 lg:dark:hover:bg-transparent dark:border-gray-700"
              @mouseenter="handleMouseEnterResponsive"
              @mouseleave="handleMouseLeaveResponsive"
              ref="dropdownRef"
            >
              <button
                @click="handleServicesClick"
                class="nav-item-bounce delay-500"
              >
                {{ $t("home.navbar.services") }}
                <Icon name="heroicons:chevron-down" class="w-4 h-4" />
              </button>
            </li>
            <!-- Desktop Mega Menu -->
            <div
              v-show="showServices"
              @mouseenter="cancelLeaveResponsive"
              @mouseleave="handleMouseLeaveResponsive"
              :class="['services-mega-menu absolute left-10 rounded-3xl right-10 bg-white dark:bg-gray-800 shadow-xl border-t dark:border-gray-700 mt-12 hidden lg:block', { 'show': showServices }]"
            >
              <div class="max-w-screen-xl mx-auto px-8 py-12">
                <h3 class="text-2xl font-bold mb-4">
                  {{ $t("home.navbar.coreService") }}
                </h3>

                <div class="grid grid-cols-2 gap-12">
                  <!-- Left Column -->

                  <div class="grid grid-cols-2">
                    <template v-for="(service, index) in services" :key="index">
                      <NuxtLink
                        :to="localePath(service.path)"
                        aria-label="Our Services"
                        class="p-4 hover:bg-purple-50 dark:hover:bg-gray-700 rounded-xl transition-colors"
                      >
                        <div
                          class="w-12 h-12 bg-purple-100 dark:bg-gray-600 rounded-lg flex items-center justify-center mb-3"
                        >
                          <Icon
                            :name="service.icon"
                            class="w-6 h-6 text-purple-600 dark:text-purple-400"
                          />
                        </div>
                        <h4
                          class="text-xl font-bold text-gray-900 dark:text-white mb-1"
                        >
                          {{ service.title }}
                        </h4>
                        <p class="text-gray-600 dark:text-gray-300 text-base">
                          {{ service.description }}
                        </p>
                      </NuxtLink>
                    </template>
                  </div>

                  <!-- Right Column -->
                  <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    <!-- Featured Section -->
                    <div class="bg-purple-50 dark:bg-gray-700 p-8 rounded-xl">
                      <h3 class="text-2xl font-bold mb-4">
                        {{ $t("home.navbar.featuredPost") }}
                      </h3>
                      <div
                        class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm"
                      >
                        <NuxtImg
                          provider="cloudinary"
                          loading="lazy"
                          src="t_Banner 16:9/v1744075475/on-page-seo_ja7prk.png"
                          class="rounded-lg mb-4 w-full h-48 object-cover"
                          alt="SEO Success Story"
                        />
                        <p
                          class="text-lg font-semibold text-gray-900 dark:text-white mb-2"
                        >
                          Mastering E-Commerce Part 1: The Basics
                        </p>
                        <p class="text-gray-600 dark:text-gray-300 text-base">
                          A great starting point for business owners who do not
                          yet have a website
                        </p>
                        <NuxtLink
                          :to="
                            localePath('/blog/e-commerce-website-development')
                          "
                          aria-label="View blog link"
                          class="text-purple-600 dark:text-purple-400 font-semibold mt-4 inline-block hover:text-purple-700 transition-colors"
                        >
                          View Blog Post →
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mobile Dropdown -->
            <div
              v-show="showServices && menuOpen"
              class="lg:hidden bg-white dark:bg-gray-800 rounded-xl mt-4"
            >
              <div class="px-4 py-4 space-y-4">
                <div class="space-y-2">
                  <h3 class="font-bold text-white text-xl">
                    {{ $t("home.navbar.coreService") }}
                  </h3>
                  <DropdownItemMobile
                    v-for="(service, index) in mobileServices"
                    :key="index"
                    :href="localePath(service.href)"
                    :icon="service.icon"
                    :title="service.title"
                  />
                </div>
              </div>
            </div>
            <!-- Appointment Button Mobile -->
            <li>
              <NuxtLink
                :to="localePath('/appointments')"
                aria-label="Appointments link"
                class="nav-item-bounce mt-4 delay-200 md:hidden text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 text-center block"
              >
                {{ $t("home.navbar.appointment") }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import LanguageSelector from "~/components/ui/LanguageSelector.vue"; // Import the LanguageSelector component
import NavLink from "~/components/ui/NavLink.vue";
import FeaturedDropdownItem from "~/components/ui/FeaturedDropdownItem.vue";
import DropdownItemMobile from "~/components/ui/DropdownItemMobile.vue";
import DarkModeSwitcher from "~/components/effects/DarkModeSwitcher.vue";
import { onClickOutside } from "@vueuse/core";

import { useHoverWithDelay } from "~/composables/useHover";

import { useRouter } from "vue-router";

const { t } = useI18n();

const router = useRouter();

// Close mobile menu on route change
router.beforeEach(() => {
  menuOpen.value = false;
  showServices.value = false;
});

// Also watch route changes for Nuxt navigation
const route = useRoute();
watch(() => route.path, () => {
  menuOpen.value = false;
  showServices.value = false;
});

const { showServices, handleMouseEnter, handleMouseLeave, cancelLeave } =
  useHoverWithDelay(300); // 300ms delay

const dropdownRef = ref(null);

const toggleServices = () => {
  showServices.value = !showServices.value;
};

// Handle click for both mobile and desktop
const handleServicesClick = () => {
  showServices.value = !showServices.value;
};

// Check if screen is desktop size (1024px+)
const isDesktopSize = () => {
  return window.innerWidth >= 1024;
};

// Responsive hover handlers - only work on desktop screen sizes
const handleMouseEnterResponsive = () => {
  if (isDesktopSize()) {
    handleMouseEnter();
  }
};

const handleMouseLeaveResponsive = () => {
  if (isDesktopSize()) {
    handleMouseLeave();
  }
};

const cancelLeaveResponsive = () => {
  if (isDesktopSize()) {
    cancelLeave();
  }
};

onClickOutside(dropdownRef, () => {
  showServices.value = false;
});

const mobileServices = computed(() => [
  {
    title: t("home.navbar.mobileServices.local_seo.title"),
    href: "/services/local-seo-for-clermont-and-orlando-businesses",
    icon: "heroicons:map-pin",
  },
  {
    title: t("home.navbar.mobileServices.conversion_optimization.title"),
    href: "/services/conversion-rate-optimization",
    icon: "heroicons:bolt",
  },
  {
    title: t("home.navbar.mobileServices.web_development.title"),
    href: "/services/high-speed-web-development",
    icon: "heroicons:chart-bar",
  },
  {
    title: t("home.navbar.mobileServices.seo_audits.title"),
    href: "/services/technical-seo-audits-and-fixes",
    icon: "heroicons:magnifying-glass",
  },
]);

const services = computed(() => [
  {
    title: t("home.navbar.localSeo.title"),
    description: t("home.navbar.localSeo.description"),
    path: "/services/local-seo-for-clermont-and-orlando-businesses",
    icon: "heroicons:map-pin",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: t("home.navbar.webDev.title"),
    description: t("home.navbar.webDev.title"),
    path: "/services/high-speed-web-development",
    icon: "heroicons:bolt",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: t("home.navbar.cro.title"),
    description: t("home.navbar.cro.title"),
    path: "/services/conversion-rate-optimization",
    icon: "heroicons:chart-bar",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: t("home.navbar.technicalSeo.title"),
    description: t("home.navbar.technicalSeo.title"),
    path: "/services/technical-seo-audits-and-fixes",
    icon: "heroicons:magnifying-glass",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
  },
]);

const navigateHome = () => {
  router.push(localePath("/"));
};

const scrolled = ref(false);
const menuOpen = ref(false);
const megaMenuOpen = ref(false);

const localePath = useLocalePath();

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
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.group:hover .dropdown {
  pointer-events: all;
}

.dropdown {
  transition: opacity 0.2s, transform 0.2s;
  transform-origin: top center;
}

.dropdown[data-show="true"] {
  opacity: 1;
  transform: translateY(0);
}

.dropdown[data-show="false"] {
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
}
.main-header {
  transition: background-color 0.3s ease, color 0.3s ease;
  position: sticky;
  top: 0;
  z-index: 50;
}

.nav-item-bounce {
  transition: color 0.3s ease;
  /* Ensure text color transition is smooth */
}

@keyframes bounce-once {
  0%,
  100% {
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
/* Mobile-first transitions */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
  max-height: 1000px;
  overflow: hidden;
}

.dropdown-enter-from,
.dropdown-leave-to {
  max-height: 0;
  opacity: 0;
}

/* Desktop hover */
@media (min-width: 1024px) {
  .dropdown-enter-from,
  .dropdown-leave-to {
    max-height: none;
    opacity: 1;
  }
}
</style>
