<template>
  <div
    class="mx-auto grid grid-cols-1 md:grid-cols-2 md:px-16 lg:px-36 mb-16 text-center md:text-left"
  >
    <div class="flex flex-col justify-center items-center md:items-start md:mr-12">
      <h2 class="text-4xl font-semibold leading-10 mb-5">
        {{ $t("appointments.info.scheduleConsultation") }}
      </h2>
      <p class="text-lg font-normal leading-7 mb-7">
        {{ $t("appointments.info.intro") }}
      </p>
    </div>
    <div class="md:border-l-2 text-center border-purple-600 md:px-8 md:py-6">
      <div class="mb-8">
        <h6 class="text-sm font-medium leading-5 pb-3">
          {{ $t("appointments.info.email") }}       
        </h6>
        <h3 class="text-xl md:text-2xl font-semibold leading-8">
          hello@christopherbermudez.com
        </h3>
      </div>
      <div>
        <h6 class="text-sm font-medium leading-5 pb-3">
          {{ $t("appointments.info.phone") }}
        </h6>
        <h3 class="text-xl md:text-2xl font-semibold leading-8">(352) 978-4435</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
/* Logic if needed */
</script>

<style scoped>
/* Add any custom spacing or responsive styles here */
</style>
