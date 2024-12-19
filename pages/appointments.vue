<template>
  <div class="py-12 bg-white dark:bg-[#1d1d1d]">
    <div class="mx-auto w-5/6">
      <h1 class="text-6xl font-bold text-center mb-12">
        {{ $t("appointments.info.contact") }}
      </h1>

      <!-- Consultation Info -->
      <BaseDiv customClass="text-center md:text-left">
        <ConsultationInfo class="mt-12" />
      </BaseDiv>

      <!-- FAQ Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:mx-20 my-20">
        <FAQ />
        <CalendlyWidget />
      </div>

      <!-- Competitive Advantage Section -->
    </div>
  </div>
</template>

<script setup>
import ConsultationInfo from "@/components/appointments/ConsultationInfo.vue";
import FAQ from "@/components/appointments/FAQ.vue";
import CalendlyWidget from "@/components/appointments/CalendlyWidget.vue";
import BaseDiv from "@/components/ui/BaseDiv.vue";
</script>

<style scoped>
/* Additional styles if needed */
</style>
