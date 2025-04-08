<template>
  <div class="mx-auto max-w-md md:max-w-screen-lg xl:max-w-screen-xl">
    <footer id="footer-section" class="md:mx-4">

      <!-- Horizontal Ruler -->
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />

      <!-- Below footer area -->
      <div class="md:flex items-center justify-between">
        <p
          v-html="$t('home.footer.textarea')"
          class="text-sm text-gray-800 sm:text-center dark:text-gray-300"
        />
        <div class="my-8 mx-auto md:mx-0">
          <!-- Social Media Icons -->
          <NuxtLink
            to="https://www.linkedin.com/company/web-design-seo-by-christopher-bermudez"
            aria-label="LinkedIn Socia Media Link"
            target="_blank"
          >
            <Icon
              name="fa6-brands:linkedin"
              size="2em"
              class="mx-3 my-3"
            />
          </NuxtLink>

          <NuxtLink
            to="https://www.instagram.com/clermontwebdesign/"
            aria-label="Instagram Socia Media Link"
            target="_blank"
          >
            <Icon
              name="fa6-brands:instagram"
              size="2em"
              class="mx-3 my-3"
            />
          </NuxtLink>

          <NuxtLink to="https://www.tiktok.com/@webseobychris" aria-label="Tiktok Socia Media Link" target="_blank">
            <Icon
              name="fa6-brands:tiktok"
              size="2em"
              class="mx-3 my-3"
            />
          </NuxtLink>

          <NuxtLink
            to="https://www.facebook.com/people/Christopher-Bermudez-Web-Solutions/61561466145301/"
            aria-label="Facebook Socia Media Link"
            target="_blank"
          >
            <Icon
              name="fa6-brands:facebook"
              size="2em"
              class="mx-3 my-3"
            />
          </NuxtLink>

          <NuxtLink
            to="https://bsky.app/profile/bermudezwebandseo.bsky.social"
            aria-label="Bluesky Socia Media Link"
            target="_blank"
          >
            <Icon
              name="fa6-brands:bluesky"
              size="2em"
              class="mx-3 my-3"
            />
          </NuxtLink>

          <NuxtLink
            to="https://www.youtube.com/@webandseobychris"
            aria-label="Youtube Socia Media Link"
            target="_blank"
          >
            <Icon
              name="fa6-brands:youtube"
              size="2em"
              class="mx-3 my-3"
            />
          </NuxtLink>

          <NuxtLink
            to="https://www.threads.net/@clermontwebdesign"
            aria-label="Threads Socia Media Link"
            target="_blank"
          >
            <Icon
              name="fa6-brands:threads"
              size="2em"
              class="mx-3 my-3"
            />
          </NuxtLink>

          <NuxtLink
            to="https://www.pinterest.com/webandseobychris/"
            aria-label="Pinterest Socia Media Link"
            target="_blank"
          >
            <Icon
              name="fa6-brands:pinterest"
              size="2em"
              class="mx-3 my-3"
            />
          </NuxtLink>
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
