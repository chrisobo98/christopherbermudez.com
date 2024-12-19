<template>
    <section class="bg-white md:h-screen dark:bg-[#1d1d1d]">
        <div
            class="grid items-center gap-8 py-12 px-6 mx-auto max-w-screen-xl lg:gap-16 md:grid-cols-2 lg:px-8">
            <!-- Responsive Images -->
            <div class="flex justify-center mt-24 lg:mt-12">
                <img class="w-full nuxt-img-animation max-w-xs md:max-w-md dark:hidden"
                    src="assets/css/images/why-us-image.png" alt="Professional Web Development Dashboard" />
                <img class="w-full nuxt-img-animation max-w-xs md:max-w-md hidden dark:block"
                    src="assets/css/images/why-us-image.png" alt="Professional Web Development Dashboard" />
            </div>

            <!-- Text Content -->
            <div>
                <!-- Subtitle -->
                <p class="text-purple-500 dark:text-[#b695ff] font-semibold uppercase mb-2">{{
                    $t('home.whyUs.creativeSolutions') }}</p>
                <h2 class="mb-6 text-6xl font-bold text-gray-900 dark:text-white">
                    {{ $t('home.whyUs.resultsTitle') }}
                </h2>
                <p class="text-lg font-light">
                    {{ $t('home.whyUs.whyUsDescription') }}
                    <span class="font-semibold"> {{ $t('home.whyUs.customWebDevBold') }}
                    </span>
                    & <span class="font-semibold"> {{ $t('home.whyUs.advancedSeoBold') }}</span>. {{
                    $t('home.whyUs.creativeSolutionsSummary') }}
                </p>

                <!-- Metrics Section -->
                <div class="grid grid-cols-2 gap-6 mt-8">
                    <!-- Column 1 -->
                    <ul class="space-y-3">
                        <li class="flex items-center">
                            <XSymbol class="mr-4" />
                            <span><span class="font-bold">{{ $t('home.whyUs.optimizedDesignsBold') }}</span> {{
                    $t('home.whyUs.optimizedDesigns') }}</span>
                        </li>
                        <li class="flex items-center">
                            <XSymbol class="mr-4" />

                            <span><span class="font-bold">{{ $t('home.whyUs.leadsBold') }}</span> {{
                    $t('home.whyUs.leads') }}</span>
                        </li>
                        <li class="flex items-center">
                            <XSymbol class="mr-4" />

                            <span><span class="font-bold">{{ $t('home.whyUs.conversionsBold') }}</span> {{
                    $t('home.whyUs.conversions') }}</span>
                        </li>
                    </ul>

                    <!-- Column 2 -->
                    <ul class="space-y-3">
                        <li class="flex items-center">
                            <XSymbol class="mr-4" />

                            <span><span class="font-semibold">{{ $t('home.whyUs.mobileBold') }}</span> {{
                                $t('home.whyUs.mobile') }}</span>
                        </li>
                        <li class="flex items-center">
                            <XSymbol class="mr-4" />

                            <span><span class="font-semibold">{{ $t('home.whyUs.uptimeBold') }}</span> {{
                                $t('home.whyUs.uptime') }}</span>
                        </li>
                    </ul>
                </div>

                <!-- Call to Action -->
                <!-- <div class="flex flex-col sm:flex-row sm:space-x-4 mt-6">
                    <a href="#"
                        class="inline-flex items-center justify-center px-5 py-3 text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm transition dark:border-purple-500 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-600 dark:focus:ring-purple-800">
                        {{ $t('home.whyUs.learnMoreButton') }}
                    </a>
                </div> -->
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import XSymbol from "@/components/ui/XSymbol.vue";

</script>

<style scoped></style>