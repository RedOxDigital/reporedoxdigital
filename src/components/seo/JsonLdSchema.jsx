const defaultSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Client Business',
  'url': 'https://www.clientwebsite.com',
  'logo': 'https://www.clientwebsite.com/logo.png',
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '+1-555-123-4567',
    'contactType': 'customer service',
  },
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
