<template>
    <button class="base-button" @click="handleClick">
      <slot />
    </button>
  </template>
  
  <script setup lang="ts">
  const handleClick = () => {
    // Define what happens when the button is clicked
  }
  </script>
  
  <style scoped>
  .base-button {
    background-color: transparent;
    font-weight: light;
    padding: 1rem 3rem;
    border-radius: 9999px; /* Fully rounded */
    border: 2px solid #8e44ad; /* Purple border */
    margin-top: 1rem;
    transition: background-color 0.3s, box-shadow 0.3s;
    box-shadow: 0 0 10px 4px rgba(128, 90, 213, 0.5);
  }
  
  .base-button:hover {
    background-color: #8e44ad; /* Purple background on hover */
    color: white;
    box-shadow: 0 0 20px 8px rgba(129, 90, 213, 0.455);
  }
  </style>
  