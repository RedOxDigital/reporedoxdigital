export default function OfferSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "Photography & Strategy Package",
    "description": "Professional photography session with comprehensive marketing strategy consultation. Get professional on-site photography delivered in 24 hours plus your 'First Step' consultation on using photos to build trust and convert leads.",
    "price": "199",
    "priceCurrency": "AUD",
    "availability": "https://schema.org/InStock",
    "url": "https://redoxdigital.com.au/#photography-services",
    "seller": {
      "@type": "LocalBusiness",
      "name": "Red Ox Digital",
      "url": "https://redoxdigital.com.au",
      "telephone": "+61-493-992-661",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dakabin",
        "addressRegion": "QLD",
        "addressCountry": "AU"
      }
    },
    "itemOffered": {
      "@type": "Service",
      "name": "Photography & Strategy Session",
      "serviceType": "Professional Photography & Marketing Consultation",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Red Ox Digital"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Gold Coast, Brisbane, and Sunshine Coast"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Package Includes",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "20-minute professional photoshoot at your location"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Professional editing and retouching"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "High-resolution digital files, optimized for all platforms"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "First Step consultation on using photos to build trust and convert leads"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "24-hour delivery guarantee"
            }
          }
        ]
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

