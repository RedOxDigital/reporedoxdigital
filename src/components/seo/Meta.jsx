import { Helmet } from 'react-helmet'

export default function Meta({
  title = "Digital Strategy Consulting for Brisbane & Gold Coast Service Businesses | Red Ox Digital",
  description = "Transform your local business with strategic marketing systems: PPC ads, landing pages, automated SMS, and professional photography. Turn 'near me' searches into booked appointments.",
  keywords = "digital strategy consulting, local lead generation, Brisbane marketing, Gold Coast marketing, Sunshine Coast marketing, service business marketing, PPC ads, marketing automation, local SEO, appointment booking systems, SMS automation, landing page design",
  ogImage = "/ROD-logo.svg",
  canonicalUrl = "https://redoxdigital.com.au/",
}) {
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '')
  // Full absolute URL for Open Graph image
  const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `https://redoxdigital.com.au${ogImage}`

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="author" content="Red Ox Digital" />
      <meta name="theme-color" content="#EA2F1D" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/ROD-logo.svg" />

      {/* Local SEO Meta Tags - Brisbane/Gold Coast/Sunshine Coast */}
      <meta name="geo.region" content="AU-QLD" />
      <meta name="geo.placename" content="Brisbane, Gold Coast, Sunshine Coast, Queensland, Australia" />
      <meta name="geo.position" content="-27.4705;153.0260" />
      <meta name="ICBM" content="-27.4705, 153.0260" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="HandheldFriendly" content="true" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Red Ox Digital" />
      <meta property="og:locale" content="en_AU" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />

      {/* Additional Performance and SEO */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      {/* Font Display Strategy */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" 
        rel="stylesheet"
      />

      {/* Additional SEO Meta Tags */}
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="coverage" content="Worldwide" />
      
      {/* Additional Local SEO Keywords */}
      <meta name="geo.locality" content="Brisbane, Gold Coast, Sunshine Coast" />
      <meta name="geo.country" content="AU" />
      
      {/* Business Contact Information */}
      <meta name="contact" content="info@redoxdigital.com.au" />
      <meta name="telephone" content="+61493992661" />
    </Helmet>
  )
}
