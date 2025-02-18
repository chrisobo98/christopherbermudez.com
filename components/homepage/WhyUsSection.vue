<template>
    <section class="bg-white md:h-screen dark:bg-[#1d1d1d]">
        <div class="grid items-center gap-8 py-12 px-6 mx-auto max-w-screen-xl lg:gap-16 md:grid-cols-2 lg:px-8">
            <!-- Images -->
            <div class="flex justify-center mt-24 lg:mt-12">
                <NuxtImg provider="cloudinary" loading="lazy" class="w-full nuxt-img-animation max-w-xs md:max-w-md dark:hidden" 
                     src="https://res.cloudinary.com/dkaakonrp/image/upload/v1735772394/why-us-image_fiq4dr.png" 
                     alt="Professional Web Development Dashboard" />
                <NuxtImg provider="cloudinary" loading="lazy" class="w-full nuxt-img-animation max-w-xs md:max-w-md hidden dark:block" 
                     src="https://res.cloudinary.com/dkaakonrp/image/upload/v1735772394/why-us-image_fiq4dr.png" 
                     alt="Professional Web Development Dashboard" />
            </div>

            <!-- Text Content -->
            <div>
                <p class="text-purple-500 dark:text-[#b695ff] mt-0 md:mt-20 lg:mt-0 font-semibold uppercase mb-2">
                    {{ $t('home.whyUs.creativeSolutions') }}
                </p>
                <h2 class="mb-6 text-6xl font-bold text-gray-900 dark:text-white">
                    {{ $t('home.whyUs.resultsTitle') }}
                </h2>
                <p class="text-lg font-light">
                    {{ $t('home.whyUs.whyUsDescription') }}
                    <span class="font-semibold">{{ $t('home.whyUs.customWebDevBold') }}</span>
                    & <span class="font-semibold">{{ $t('home.whyUs.advancedSeoBold') }}</span>.
                    {{ $t('home.whyUs.creativeSolutionsSummary') }}
                </p>

                <!-- Metrics Section -->
                <div class="gap-6 mt-8">
                    <ul class="space-y-3">
                        <li v-for="(item, index) in metrics" :key="index" class="flex items-center">
                            <XSymbol class="mr-4" />
                            <span><span class="font-bold">{{ $t(item.bold) }}</span> {{ $t(item.text) }}</span>
                        </li>
                    </ul>
                </div>

                <!-- Call to Action -->
                <!-- Uncomment if needed -->
                <!-- <div class="mt-6">
                    <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white rounded-lg text-sm transition dark:border-purple-500 dark:text-purple-400 dark:hover:bg-purple-600">
                        {{ $t('home.whyUs.learnMoreButton') }}
                    </a>
                </div> -->
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import XSymbol from '@/components/ui/XSymbol.vue';

const metrics = [
    { bold: 'home.whyUs.optimizedDesignsBold', text: 'home.whyUs.optimizedDesigns' },
    { bold: 'home.whyUs.leadsBold', text: 'home.whyUs.leads' },
    { bold: 'home.whyUs.conversionsBold', text: 'home.whyUs.conversions' },
    { bold: 'home.whyUs.mobileBold', text: 'home.whyUs.mobile' },
    { bold: 'home.whyUs.uptimeBold', text: 'home.whyUs.uptime' }
];
</script>

<style scoped></style>