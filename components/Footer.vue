<template>
  <div class="mx-auto max-w-md md:max-w-screen-lg xl:max-w-screen-xl px-4">
    <footer id="footer-section" class="md:mx-4">
      <!-- Main Footer Content -->
      <div class="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-2 sm:px-0">

        <!-- Company Info -->
        <div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Christopher Bermudez</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Frontend developer building custom web solutions, CRMs, and business automation tools for companies in Central Florida.
          </p>
          <div class="text-sm text-gray-600 dark:text-gray-400 space-y-3">
            <p class="flex items-center">
              <Icon name="fa6-solid:location-dot" class="mr-2 flex-shrink-0" />
              <span>Four Corners, FL</span>
            </p>
            <p class="flex items-center">
              <Icon name="fa6-solid:phone" class="mr-2 flex-shrink-0" />
              <a href="tel:+13529784435" class="hover:text-blue-600 dark:hover:text-blue-400">
                (352) 978-4435
              </a>
            </p>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Services</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink
                to="/services/frontend-web-development"
                class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Frontend Web Development
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/services/custom-business-solutions"
                class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Custom Business Solutions
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/services/saas-development"
                class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                SaaS Development
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/services/ai-integration-for-small-businesses"
                class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                AI Integration
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink
                to="/"
                class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/about"
                class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/blog"
                class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Blog
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/templates"
                class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Templates
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/appointments"
                class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Book Consultation
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Service Areas & Social -->
        <div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Service Areas</h3>
          <ul class="space-y-2 text-sm mb-6">
            <li>
              <NuxtLink
                to="/locations/lake-county-seo-web-design"
                class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Lake County
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/locations/orange-county-seo-web-design"
                class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Orange County
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/locations/polk-county-seo-web-design"
                class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Polk County
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/locations/osceola-county-seo-web-design"
                class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Osceola County
              </NuxtLink>
            </li>
          </ul>

          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Follow Me</h3>
          <div class="flex flex-wrap gap-3">
            <NuxtLink
              to="https://www.linkedin.com/company/web-design-seo-by-christopher-bermudez"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Icon name="fa6-brands:linkedin" size="1.5em" />
            </NuxtLink>

            <NuxtLink
              to="https://www.instagram.com/clermontwebdesign/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
            >
              <Icon name="fa6-brands:instagram" size="1.5em" />
            </NuxtLink>

            <NuxtLink
              to="https://www.tiktok.com/@webseobychris"
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Icon name="fa6-brands:tiktok" size="1.5em" />
            </NuxtLink>

            <NuxtLink
              to="https://www.facebook.com/people/Christopher-Bermudez-Web-Solutions/61561466145301/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
            >
              <Icon name="fa6-brands:facebook" size="1.5em" />
            </NuxtLink>

            <NuxtLink
              to="https://www.youtube.com/@webandseobychris"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            >
              <Icon name="fa6-brands:youtube" size="1.5em" />
            </NuxtLink>

            <NuxtLink
              to="https://www.threads.net/@clermontwebdesign"
              aria-label="Threads"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Icon name="fa6-brands:threads" size="1.5em" />
            </NuxtLink>

            <NuxtLink
              to="https://www.pinterest.com/webandseobychris/"
              aria-label="Pinterest"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 dark:text-gray-400 hover:text-red-700 dark:hover:text-red-500 transition-colors"
            >
              <Icon name="fa6-brands:pinterest" size="1.5em" />
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Horizontal Ruler -->
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700" />

      <!-- Bottom Footer -->
      <div class="pb-8 px-2 sm:px-0">
        <div class="text-center">
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span v-html="$t('home.footer.textarea')"></span> • {{ $t('home.footer.proudlyServing') }}
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import BaseSection from "~/components/ui/BaseSection.vue";
</script>

<style scoped>
/* Add your CSS styles here */
</style>
