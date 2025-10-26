import React, { useEffect, useState } from 'react'
import '../styles/HomePage.css'
import Meta from '../components/seo/Meta'
import JsonLdSchema from '../components/seo/JsonLdSchema'
import NavigationBar from '../components/sections/NavigationBar'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import ProblemAgitationSolution from '../components/sections/ProblemAgitationSolution'
import MythBusting from '../components/sections/MythBusting'
import HowItWorks from '../components/sections/HowItWorks'
import PhotographyServices from '../components/sections/PhotographyServices'
import Faq from '../components/sections/Faq'
import SidePanel from '../components/sections/SidePanel'
import FloatingActionButton from '../components/sections/FloatingActionButton'
import FooterSection from '../components/sections/FooterSection'

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
        title="Red Ox Digital - Sales Funnel Automation & Marketing for Local Businesses"
        description="Transform your local business with custom sales funnels, automated lead response systems, and targeted ad campaigns. Turn cold traffic into paying customers on autopilot."
        keywords="sales funnels, marketing automation, lead generation, local business marketing, automated sales systems, funnel optimization, customer acquisition, business growth, sales automation"
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
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Sales Funnel Automation Services',
          'itemListElement': [
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Custom Sales Funnels',
                'description': 'Complete sales funnel builds and optimization for local businesses'
              }
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Marketing Automation',
                'description': 'Automated lead response systems and email/SMS sequences'
              }
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Paid Ads Management',
                'description': 'Targeted Google and Meta ad campaigns for qualified traffic'
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

      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

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

      {/* Services Section */}
        <Services onCtaClick={openPanel} />

        {/* Problem-Agitation-Solution Section */}
        <ProblemAgitationSolution onCtaClick={openPanel} />

      {/* Myth Busting Section */}
        <MythBusting onCtaClick={openPanel} />

      {/* How It Works Section */}
        <HowItWorks onCtaClick={openPanel} />

        {/* Photography Services Section */}
        <PhotographyServices onCtaClick={openPanel} />

      {/* FAQ Section */}
        <Faq onCtaClick={openPanel} />
      </main>

      {/* Footer */}
      <FooterSection onCtaClick={openPanel} />

      {/* Floating Action Button */}
      <FloatingActionButton show={showFab} onClick={openPanel} />

      {/* Side Panel */}
      <SidePanel isOpen={isPanelOpen} onClose={closePanel} />
    </>
  )
}

export default HomePage
