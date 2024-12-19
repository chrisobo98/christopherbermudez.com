// plugins/gtag.client.ts
import { defineNuxtPlugin } from '#app'
import { useRuntimeConfig, useRouter } from '#imports'

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default defineNuxtPlugin(() => {
  const { gtagId } = useRuntimeConfig().public
  const router = useRouter()

  if (typeof window !== 'undefined' && gtagId) {
    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    gtag('js', new Date())
    gtag('config', gtagId)

    // Load the gtag script
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`
    script.async = true
    document.head.appendChild(script)

    // Track page views on route change
    router.afterEach((to) => {
      gtag('config', gtagId, { page_path: to.fullPath })
    })
  }
})
