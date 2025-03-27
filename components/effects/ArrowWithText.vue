<template>
  <div class="mb-20">
    <div class="arrow-container" @click="scrollToNextSection">
      <svg class="rotating-circle" width="100" height="100" viewBox="0 0 100 100">
        <path id="curve" fill="transparent" d="M50,50 m-35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
        <text width="500" class="curved-text">
          <textPath href="#curve" startOffset="0%">
            scroll down scroll down scroll down scroll do
          </textPath>
        </text>
      </svg>
      <div class="arrow">
        <svg class="w-6 h-6 text-violet-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
        </svg>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
  import { useScrollNavigation } from '@/composables/useScrollNavigation';
  
  const sections = [
    'hero-section',
    'why-us-section',
    'my-story-section',
    'services-section',
    'portfolio-section',
    'contact-section',
  ];
  
  const { scrollToNextSection } = useScrollNavigation(sections);
  </script>

  <style scoped>
  .arrow-container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    cursor: pointer;
  }
  
  .rotating-circle {
    animation: rotateCircle 20s linear infinite;
  }
  
  .curved-text {
    font-size: 10px;
    fill: #8b5cf6;
  }
  
  .arrow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: bounce 10s infinite;
    animation-delay: 5s;
  }
  
  @keyframes rotateCircle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  @keyframes bounce {
    0%, 80%, 100% {
      transform: translate(-50%, -50%);
    }
    50% {
      transform: translate(-50%, -30%);
    }
  }
  </style>
