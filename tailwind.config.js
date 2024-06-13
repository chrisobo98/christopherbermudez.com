/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  darkMode: 'class', // or 'media' for automatic based on user preference
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

