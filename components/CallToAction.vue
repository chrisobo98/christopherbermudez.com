<!-- Final CTA -->
<template>
    <div class="bg-purple-600 text-white p-12 rounded-2xl text-center">
      <h2 class="text-3xl font-bold mb-6">
        {{ $t('finalCta.heading') }}
      </h2>
      <p class="text-xl mb-8">
        {{ $t('finalCta.subheading') }}
      </p>
      <NuxtLink :to="localePath('/appointments')" aria-label="Call to action button contact us" class="btn-secondary">
        {{ $t('finalCta.button') }}
      </NuxtLink>
    </div>
  </template>
  