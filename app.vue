<template>
  <NuxtLayout />
</template>

<script setup>
import '@/assets/css/main.css'

// Set document head
useHead({
  htmlAttrs: { lang: 'en' },
  titleTemplate: '%s · Christopher Bermudez',
  meta: [
    { name: 'description', content: 'Your go-to expert for web design, SEO, and digital marketing.' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "name": "Clermont Web Design & SEO by Christopher Bermudez",
            "image": "https://christopherbermudez.com/logo.png",
            "url": "https://christopherbermudez.com",
            "telephone": "+1-352-978-4435",
            "priceRange": "$300-$12000",
            "description": "Custom web development, SEO, and SaaS solutions helping businesses in Clermont, Four Corners, Lake County, and Orlando build strong online presences since 2016.",
            "areaServed": [
              {
                "@type": "Place",
                "name": "Clermont, FL"
              },
              {
                "@type": "Place",
                "name": "Lake County, FL"
              },
              {
                "@type": "Place",
                "name": "Orlando, FL"
              },
              {
                "@type": "Place",
                "name": "Four Corners, FL"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Clermont",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "3",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": [
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Lismary Ortiz"
                },
                "reviewBody": "Excelente trabajo y super rápido tiene experiencia y conocimiento justo lo que yo necesitaba",
                "datePublished": "2024-05-01"
              },
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Organization",
                  "name": "upTWo Inc."
                },
                "reviewBody": "Working with Christopher has been a game-changer for my brand. From the start, he had an immediate impact on my website...",
                "datePublished": "2024-03-01"
              },
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Zach Lynn"
                },
                "reviewBody": "Can help you with all your small business needs including business cards",
                "datePublished": "2024-03-01"
              }
            ],
            "sameAs": [
              "https://www.pinterest.com/webandseobychris/",
              "https://www.tiktok.com/@webseobychris",
              "https://www.youtube.com/@webandseobychris",
              "https://www.facebook.com/people/Christopher-Bermudez-Web-Solutions/61561466145301/",
              "https://www.instagram.com/clermontwebdesign/",
              "https://www.linkedin.com/in/christopher-bermudez-ortiz/"
            ],
            "founder": {
              "@type": "Person",
              "name": "Christopher Bermudez",
              "url": "https://christopherbermudez.com"
            }
          },
          {
            "@type": "Service",
            "serviceType": "Search Engine Optimization (SEO)",
            "provider": {
              "@id": "https://christopherbermudez.com"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Central Florida (Clermont, Lake County, Orlando, Four Corners)"
            },
            "description": "Advanced SEO services helping businesses improve search rankings, increase online visibility, and generate more leads. Specializing in local and technical SEO.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "1500",
              "priceRange": "$300-$1000",
              "url": "https://christopherbermudez.com/website-seo-packages"
            }
          },
          {
            "@type": "Service",
            "serviceType": "Web Development",
            "provider": {
              "@id": "https://christopherbermudez.com"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Central Florida (Clermont, Lake County, Orlando, Four Corners)"
            },
            "description": "Custom web development services specializing in fast, secure, and scalable websites. Includes responsive design, modern frameworks, and on-page SEO optimization.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "1500",
              "url": "https://christopherbermudez.com/services/high-speed-web-development"
            }
          },
          {
            "@type": "Service",
            "serviceType": "Software Development (Web-Based SaaS Applications)",
            "provider": {
              "@id": "https://christopherbermudez.com"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Central Florida (Clermont, Lake County, Orlando, Four Corners)"
            },
            "description": "Software development specializing in web-based SaaS applications. From concept to deployment, creating scalable and secure cloud-based applications tailored to business needs.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "5000",
              "url": "https://christopherbermudez.com/services/conversion-rate-optimization"
            }
          },
          {
            "@type": "Service",
            "serviceType": "Website Maintenance & Support",
            "provider": {
              "@id": "https://christopherbermudez.com"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Central Florida (Clermont, Lake County, Orlando, Four Corners)"
            },
            "description": "Website maintenance and support services including updates, security monitoring, performance optimization, backups, and hands-on training to keep your site running smoothly.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "300",
              "priceRange": "$300-$1000",
              "url": "https://christopherbermudez.com/website-seo-packages"
            }
          }
        ]
      })
    }
  ]
})
</script>


<style scoped>
/* Add any global CSS styles here */
</style>
