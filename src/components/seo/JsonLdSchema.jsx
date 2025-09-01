const defaultSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Your Company Name',
  'url': 'https://www.example.com',
  'logo': 'https://www.example.com/logo.png',
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '+1-401-555-1212',
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
