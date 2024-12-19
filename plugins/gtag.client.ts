// plugins/gtag.client.ts
import { defineNuxtPlugin } from '#app'
import { useRuntimeConfig, useHead } from '#imports'

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default defineNuxtPlugin(() => {
  const cookieControl = useCookieControl()
  const { gtagId } = useRuntimeConfig().public

  if (cookieControl.cookiesEnabledIds?.value?.includes('google-analytics')) {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) { window.dataLayer.push(args); }
    gtag('js', new Date());
    gtag('config', gtagId);
        
    useHead({
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${gtagId}`,
          async: true,
        },
      ],
    });
  }
});
