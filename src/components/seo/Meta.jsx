import { Helmet } from 'react-helmet'

export default function Meta({
  title = "Red Ox Digital - Local Business Marketing & Photography Services",
  description = "Transform your local business with professional photography, Google PPC ads, custom landing pages, and automated lead response systems. Get more customers and dominate your local market in Sydney, Australia.",
  keywords = "local business marketing, professional photography, Google PPC ads, landing pages, lead generation, business growth, local SEO, customer acquisition, Sydney business services, Australian business marketing",
  ogImage = "/Hero.png",
  canonicalUrl = "https://redoxdigital.com.au/",
}) {
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '')

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
      <meta name="theme-color" content="#3B82F6" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Local SEO Meta Tags */}
      <meta name="geo.region" content="AU-NSW" />
      <meta name="geo.placename" content="Sydney, New South Wales, Australia" />
      <meta name="geo.position" content="-33.8688;151.2093" />
      <meta name="ICBM" content="-33.8688, 151.2093" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="HandheldFriendly" content="true" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Red Ox Digital" />
      <meta property="og:locale" content="en_AU" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional Performance and SEO */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />

      {/* Additional SEO Meta Tags */}
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="coverage" content="Worldwide" />
    </Helmet>
  )
}
