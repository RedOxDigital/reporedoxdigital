const defaultSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'Red Ox Digital',
  'alternateName': 'Red Ox Digital Marketing',
  'url': 'https://redoxdigital.com.au',
  'logo': 'https://redoxdigital.com.au/ROD-logo.svg',
  'image': 'https://redoxdigital.com.au/ROD-logo.svg',
  'description': 'Local business marketing agency specializing in photography, Google PPC ads, landing pages, and lead generation for Australian businesses.',
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
    'name': 'Local Business Marketing Services',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Professional Photography',
          'description': 'High-quality business photography for Google Business Profile and marketing materials'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Google PPC Advertising',
          'description': 'Targeted Google Ads campaigns for local customer acquisition'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Custom Landing Pages',
          'description': 'Conversion-optimized landing pages for local businesses'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Automated Lead Response',
          'description': 'Instant SMS responses to customer inquiries'
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
      'reviewBody': 'Red Ox Digital transformed our local business visibility. Their photography and PPC campaigns brought us more customers than ever before.'
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
      'reviewBody': 'Professional service and excellent results. The automated systems they set up work flawlessly.'
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
