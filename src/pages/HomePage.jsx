import React, { useEffect, useState, lazy, Suspense } from 'react'
import '../styles/HomePage.css'
import Meta from '../components/seo/Meta'
import JsonLdSchema from '../components/seo/JsonLdSchema'
import HowToSchema from '../components/seo/HowToSchema'
import OfferSchema from '../components/seo/OfferSchema'
import ServiceSchema from '../components/seo/ServiceSchema'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import NavigationBar from '../components/sections/NavigationBar'
import Hero from '../components/sections/Hero'
import WhenDidIt from '../components/sections/WhenDidIt'
import ChangeIt from '../components/sections/ChangeIt'
import ServicesHome from '../components/sections/ServicesHome'
import HowItWorksHome from '../components/sections/HowItWorksHome'
import ProfitReadyVisuals from '../components/sections/ProfitReadyVisuals'

// Lazy load heavy components
const Testimonials = lazy(() => import('../components/sections/Testimonials'))
const Faq = lazy(() => import('../components/sections/Faq'))
const GoogleMapSection = lazy(() => import('../components/sections/GoogleMapSection'))
const ResourcesSection = lazy(() => import('../components/sections/ResourcesSection'))
const SidePanel = lazy(() => import('../components/sections/SidePanel'))
const FloatingActionButton = lazy(() => import('../components/sections/FloatingActionButton'))
const FooterSection = lazy(() => import('../components/sections/FooterSection'))

const HomePage = () => {
  console.log('HomePage component rendering...')
  
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [showFab, setShowFab] = useState(false)

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarScrolled(window.scrollY > 50)
      // Show FAB on scroll
      if (window.scrollY > 200 && !isPanelOpen) {
        setShowFab(true)
      } else {
        setShowFab(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isPanelOpen])

  // Active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id')
        }
      })
      
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll handler
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMobileMenuOpen(false)
  }

  // Panel handlers
  const openPanel = () => {
    setIsPanelOpen(true)
    setShowFab(false)
    document.body.style.overflow = 'hidden'
  }

  const closePanel = () => {
    setIsPanelOpen(false)
    document.body.style.overflow = ''
    // Show FAB if scrolled
    if (window.scrollY > 200) {
      setShowFab(true)
    }
  }

  // Additional useEffects to match HTML functionality
  useEffect(() => {
    // Keyboard navigation for panel
    const handleKeyDown = (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation')
      }
      // Close panel on Escape
      if (e.key === 'Escape' && isPanelOpen) {
        closePanel()
      }
    }

    // Accessibility - Keyboard Navigation Enhancement
    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation')
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleMouseDown)

    // Performance - Preload Critical Resources
    const preloadLink = document.createElement('link')
    preloadLink.rel = 'preload'
    preloadLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
    preloadLink.as = 'style'
    document.head.appendChild(preloadLink)

      // Add fade-in animation keyframes for FAQ
      const faqStyle = document.createElement('style')
      faqStyle.textContent = `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `
      document.head.appendChild(faqStyle)

    console.log('HomePage Component loaded')

    // Cleanup function
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [isPanelOpen])

  console.log('HomePage about to return JSX...')
  
  return (
    <>
      {/* SEO Components */}
      <Meta
        title="Digital Strategy Consulting for Brisbane & Gold Coast Service Businesses | Red Ox Digital"
        description="Transform your local business with strategic marketing systems: PPC ads, landing pages, automated SMS, and professional photography. Turn 'near me' searches into booked appointments."
        keywords="digital strategy consulting, local lead generation, Brisbane marketing, Gold Coast marketing, service business marketing, PPC ads, marketing automation, local SEO, appointment booking systems"
        ogImage="/ROD-logo.svg"
        canonicalUrl="https://redoxdigital.com.au/"
      />

      <JsonLdSchema data={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': 'Red Ox Digital',
        'image': 'https://redoxdigital.com.au/Images/ab2cccf2-7d2e-4bcf-8aba-5d606ce8992f.webp',
        'url': 'https://redoxdigital.com.au',
        'telephone': '+61-493-992-661',
        'email': 'info@redoxdigital.com.au',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Business Address',
          'addressLocality': 'Dakabin',
          'addressRegion': 'QLD',
          'postalCode': '4503',
          'addressCountry': 'AU'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': -27.1986,
          'longitude': 152.9574
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
          'name': 'Gold Coast, Brisbane, and Sunshine Coast'
        },
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Digital Marketing Services',
          'itemListElement': [
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Complete Online Review & Plan',
                'description': 'Comprehensive online review and competitive analysis with step-by-step marketing plan'
              }
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Marketing Integration',
                'description': 'Connect website, social media, and email marketing as one unified team'
              }
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Content & Trust Building',
                'description': 'Create compelling content that attracts ideal customers and builds brand trust'
              }
            }
          ]
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.9',
          'reviewCount': '150'
        }
      }} />

      {/* Additional Schemas */}
      <HowToSchema />
      <OfferSchema />
      <ServiceSchema />

      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Breadcrumb Navigation */}
      <Breadcrumbs items={[
        { name: 'Home', url: 'https://redoxdigital.com.au/' },
        { name: 'Marketing Services', url: 'https://redoxdigital.com.au/#services' }
      ]} />

      {/* Navigation Bar */}
      <NavigationBar
        isScrolled={isNavbarScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        activeSection={activeSection}
        onSmoothScroll={handleSmoothScroll}
        onCtaClick={openPanel}
      />

      {/* Main Content Landmark */}
      <main id="main-content" role="main">
        {/* Hero Section */}
        <Hero onCtaClick={openPanel} />

        {/* When Did It Section */}
        <WhenDidIt onCtaClick={openPanel} />

        {/* Change It Section */}
        <ChangeIt onCtaClick={openPanel} />

        {/* Services Home Section */}
        <ServicesHome onCtaClick={openPanel} />

        {/* How It Works Home Section */}
        <HowItWorksHome onCtaClick={openPanel} />

        {/* Profit Ready Visuals Section */}
        <ProfitReadyVisuals onCtaClick={openPanel} />

      {/* Lazy-loaded sections with Suspense */}
      <Suspense fallback={<div style={{minHeight: '100vh', background: 'hsl(var(--creative-secondary))'}} />}>
        {/* Testimonials Section - Hidden until real testimonials are available */}
        {/* <Testimonials /> */}

        {/* Resources/Blog Section - Hidden until content is ready */}
        {/* <ResourcesSection /> */}

      {/* FAQ Section */}
        <Faq onCtaClick={openPanel} />

        {/* Google Map Section */}
        <GoogleMapSection />
      </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={<div />}>
        <FooterSection onCtaClick={openPanel} />
      </Suspense>

      {/* Floating Action Button */}
      <Suspense fallback={<div />}>
        <FloatingActionButton show={showFab} onClick={openPanel} />
      </Suspense>

      {/* Side Panel */}
      <Suspense fallback={<div />}>
        <SidePanel isOpen={isPanelOpen} onClose={closePanel} />
      </Suspense>
    </>
  )
}

export default HomePage
