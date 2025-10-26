export default function ServiceSchema() {
  const services = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Digital Marketing Strategy",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Red Ox Digital",
        "url": "https://redoxdigital.com.au"
      },
      "name": "Complete Online Review & Plan",
      "description": "Comprehensive online review and competitive analysis. We build a simple, step-by-step plan that guides all marketing decisions and connects all your online efforts.",
      "areaServed": {
        "@type": "Place",
        "name": "Gold Coast, Brisbane, and Sunshine Coast"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Marketing Integration",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Red Ox Digital",
        "url": "https://redoxdigital.com.au"
      },
      "name": "Connecting All Your Marketing Efforts",
      "description": "We make sure your website, social media, and email marketing all work together as one team. This creates a smooth and professional experience for your customers.",
      "areaServed": {
        "@type": "Place",
        "name": "Sydney Metropolitan Area"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Content Marketing & Brand Building",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Red Ox Digital",
        "url": "https://redoxdigital.com.au"
      },
      "name": "Creating Your Message & Building Trust",
      "description": "We help you find the right words and content to attract your ideal customers. This shows you're an expert in your field and builds trust in your brand.",
      "areaServed": {
        "@type": "Place",
        "name": "Sydney Metropolitan Area"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Customer Journey Mapping",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Red Ox Digital",
        "url": "https://redoxdigital.com.au"
      },
      "name": "Understanding Your Customer's Path",
      "description": "We map out the path a person takes from first hearing about you to becoming a happy customer. This helps us know exactly what they need at each step.",
      "areaServed": {
        "@type": "Place",
        "name": "Sydney Metropolitan Area"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Marketing Analytics & Optimization",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Red Ox Digital",
        "url": "https://redoxdigital.com.au"
      },
      "name": "Using Data to Get Better Results",
      "description": "We track your results and turn confusing numbers into simple, actionable insights. We show you what's working, what's not, and how we can improve.",
      "areaServed": {
        "@type": "Place",
        "name": "Sydney Metropolitan Area"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Marketing Reporting & Strategic Planning",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Red Ox Digital",
        "url": "https://redoxdigital.com.au"
      },
      "name": "Clear Reports & Planning for Growth",
      "description": "We give you easy-to-understand reports that show your progress. As your business grows, we make sure your marketing strategy grows with you.",
      "areaServed": {
        "@type": "Place",
        "name": "Sydney Metropolitan Area"
      }
    }
  ]

  return (
    <>
      {services.map((service, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(service, null, 2) }}
        />
      ))}
    </>
  )
}

