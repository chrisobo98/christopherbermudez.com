import { defineNuxtPlugin } from '#app'

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default defineNuxtPlugin(() => {
  const cookieControl = useCookieControl()

  if (cookieControl.cookiesEnabledIds?.value?.includes("google-analytics")) {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) { window.dataLayer.push(args); }
    gtag('js', new Date());
    gtag('config', 'G-3CC4904P02'); // Replace with your Google Analytics 4 Tracking ID
  }
})
