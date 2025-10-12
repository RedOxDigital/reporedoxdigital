const defaultSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'Red Ox Digital',
  'alternateName': 'Red Ox Digital Marketing',
  'url': 'https://redoxdigital.com.au',
  'logo': 'https://redoxdigital.com.au/ROD-logo.svg',
  'image': 'https://redoxdigital.com.au/Images/Funnelhero.webp',
  'description': 'Sales funnel automation agency specializing in custom funnel builds, marketing automation, email & SMS sequences, and conversion optimization for local businesses. We build automated sales machines that turn cold traffic into paying customers.',
  'telephone': '+61-493-992-661',
  'email': 'info@redoxdigital.com.au',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Business Address',
    'addressLocality': 'Sydney',
    'addressRegion': 'NSW',
    'postalCode': '2000',
    'addressCountry': 'AU'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': -33.8688,
    'longitude': 151.2093
  },
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    'opens': '09:00',
    'closes': '17:00'
  },
  'priceRange': '$$',
  'serviceArea': {
    '@type': 'Place',
    'name': 'Sydney Metropolitan Area'
  },
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '+61-493-992-661',
    'contactType': 'customer service',
    'availableLanguage': 'English'
  },
  'sameAs': [
    'https://www.facebook.com/redoxdigital',
    'https://www.instagram.com/redoxdigital',
    'https://www.linkedin.com/company/redoxdigital'
  ],
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Sales Funnel Automation Services',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Custom Sales Funnels',
          'description': 'Complete sales funnel builds and optimization for local businesses. Transform cold traffic into paying customers with proven conversion strategies.'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Marketing Automation',
          'description': 'Automated lead response systems with email and SMS sequences that nurture prospects and book appointments on autopilot.'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'High-Converting Landing Pages',
          'description': 'Professional landing pages designed to maximize lead capture and conversion rates for your automated sales machine.'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Paid Ads Management',
          'description': 'Targeted Google and Meta ad campaigns that drive qualified traffic to your sales funnel for maximum ROI.'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Sales & Booking Automation',
          'description': 'Automated systems that qualify leads and fill your calendar with appointments without manual intervention.'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Analytics & Reporting',
          'description': 'Real-time performance tracking and optimization to ensure your automated sales machine delivers consistent results.'
        }
      }
    ]
  },
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '4.9',
    'reviewCount': '150'
  },
  'review': [
    {
      '@type': 'Review',
      'author': {
        '@type': 'Person',
        'name': 'Sarah Johnson'
      },
      'reviewRating': {
        '@type': 'Rating',
        'ratingValue': '5',
        'bestRating': '5'
      },
      'reviewBody': 'Red Ox Digital built us an automated sales machine that runs 24/7. We\'re now converting more leads and booking more appointments than ever before, all on autopilot.'
    },
    {
      '@type': 'Review',
      'author': {
        '@type': 'Person',
        'name': 'Mike Chen'
      },
      'reviewRating': {
        '@type': 'Rating',
        'ratingValue': '5',
        'bestRating': '5'
      },
      'reviewBody': 'The sales funnel system they created transformed our business. Every view turns into a lead, and every lead gets instant follow-up. We\'ve tripled our revenue in 6 months.'
    }
  ]
}

export default function JsonLdSchema({ data }) {
  const schema = { ...defaultSchema, ...data }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}
