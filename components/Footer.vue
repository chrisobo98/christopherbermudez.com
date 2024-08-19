<template>
  <footer id="footer-section" class="bg-white dark:bg-[#1d1d1d] pt-4 lg:pt-32 pb-2 lg:pb-8">
    <div class="mx-auto w-10/12 lg:w-full max-w-screen-xl p-4 py-6 lg:py-8">

      <GSAPStaggeredEffect>
        <!-- Upper footer area -->
        <div class="md:flex md:justify-between">

          <!-- Name Container -->
          <div class="mb-6 md:mb-0 mr-6">
            <a href="#" class="text-4xl block lg:flex font-semibold whitespace-nowrap bayon-regular h8">
              <p>@Christopher</p>
              <p class="text-purple-700">Bermudez</p>
            </a>
          </div>

          <!-- Footer Links Section -->
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <FooterSection :title="$t('home.footer.resources')">
              <FooterLink href="https://nuxt.com/" text="Nuxt" />
              <FooterLink href="https://tailwindcss.com/" text="Tailwind CSS" />
            </FooterSection>
            <FooterSection :title="$t('home.footer.follow')">
              <FooterLink href="https://github.com/chrisobo98" text="Github" />
              <FooterLink href="https://www.linkedin.com/in/christopher-bermudez-ortiz/" text="LinkedIn" />
            </FooterSection>
            <!-- <FooterSection :title="$t('home.footer.legal')">
              <FooterLink href="#" text="Privacy Policy" />
              <FooterLink href="#" text="Terms &amp; Conditions" />
            </FooterSection> -->
          </div>
        </div>

        <!-- Horizontal Ruler -->
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <!-- Below footer area -->
        <div class="sm:flex sm:items-center sm:justify-between">
          <span v-html="$t('home.footer.textarea')" class="text-sm text-gray-800 sm:text-center dark:text-gray-400" />
          <div class="flex mt-4 sm:justify-center sm:mt-0">
            <!-- <FooterIconLink href="#"
              iconPath="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"
              srLabel="Discord community" />
            <FooterIconLink href="#"
              iconPath="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
              srLabel="GitHub account" /> -->
          </div>
        </div>
      </GSAPStaggeredEffect>

    </div>
  </footer>
</template>

<script setup lang="ts">
import FooterSection from '~/components/ui/FooterSection.vue';
import FooterLink from '~/components/ui/FooterLink.vue';
import FooterIconLink from '~/components/ui/FooterIconLink.vue';
import GSAPStaggeredEffect from '@/components/effects/GSAPStaggeredReveal.vue';
</script>

<style scoped>
/* Add your CSS styles here */
</style>
