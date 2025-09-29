import React, { useEffect, useState } from 'react'
import '../styles/HomePage.css'

const HomePage = () => {
  console.log('HomePage component rendering...')
  
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [activeFaqCategory, setActiveFaqCategory] = useState('all')
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
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
    setIsExpanded(false)
    document.body.style.overflow = ''
    // Reset form if needed
    const form = document.getElementById('bookingForm')
    if (form) {
      form.reset()
    }
    // Show FAB if scrolled
    if (window.scrollY > 200) {
      setShowFab(true)
    }
  }

  // Form validation
  const validateBasicInfo = () => {
    const nameInput = document.getElementById('name')
    const emailInput = document.getElementById('email')
    if (!nameInput || !emailInput) return false
    
    const name = nameInput.value.trim()
    const email = emailInput.value.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    return name.length > 0 && emailRegex.test(email)
  }

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault()
    
    if (!validateBasicInfo()) {
      return
    }
    
    // Get form data
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    
    console.log('Form submitted with data:', data)
    
    // Simulate submission
    setTimeout(() => {
      alert('Thank you! We\'ve received your request and will get back to you within 24 hours.')
      closePanel()
    }, 1000)
  }

  // FAQ category filter
  const handleFaqCategoryFilter = (category) => {
    setActiveFaqCategory(category)
    const faqCards = document.querySelectorAll('.faq-card')
    
    faqCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category')
      
      if (category === 'all' || cardCategory === category) {
        card.style.display = 'flex'
        card.style.animation = 'fadeIn 0.3s ease-in-out'
      } else {
        card.style.display = 'none'
      }
    })
  }

  // Image Loading with Alternative Paths
  const tryAlternativeImagePaths = (img) => {
    const imagePaths = [
      'Hero.png',
      './Hero.png',
      '/Hero.png',
      '../Hero.png',
      '../../Hero.png'
    ]
    
    let currentIndex = 0
    const originalSrc = img.src
    
    const tryNextPath = () => {
      if (currentIndex < imagePaths.length) {
        console.log(`Trying image path ${currentIndex + 1}/${imagePaths.length}: ${imagePaths[currentIndex]}`)
        img.src = imagePaths[currentIndex]
        currentIndex++
      } else {
        console.error('All Hero.png image paths failed. Original src:', originalSrc)
        showImageFallback()
      }
    }
    
    img.onerror = tryNextPath
    img.onload = function() {
      console.log('Image loaded successfully:', img.src)
    }
    
    tryNextPath()
  }
  
  const showImageFallback = () => {
    const img = document.getElementById('hero-background-image')
    
    if (img) {
      img.style.display = 'none'
      console.log('Background image failed to load, hiding it')
    }
  }

  // Additional useEffects to match HTML functionality
  useEffect(() => {
    // Add a small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      // Check if image loads on page load
      const img = document.getElementById('hero-background-image')
      if (img && !img.complete) {
        console.log('Background image not loaded on DOMContentLoaded, checking...')
        if (img.naturalWidth === 0) {
          console.log('Background image failed to load naturally, trying alternatives...')
          tryAlternativeImagePaths(img)
        }
      } else if (img && img.complete) {
        console.log('Background image loaded successfully on DOMContentLoaded:', img.src)
      }
    }, 100)

    // Performance Optimization - Intersection Observer for Animations
    if ('IntersectionObserver' in window) {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running'
          }
        })
      }, observerOptions)

      // Observe animated elements (hero-image no longer animated)
      // No animated elements to observe for hero-image
    }

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

      // Analytics - Track CTA Interactions (with delay to ensure DOM is ready)
      setTimeout(() => {
        const ctaButton = document.querySelector('.cta-button')
        if (ctaButton) {
          ctaButton.addEventListener('click', (e) => {
            console.log('CTA clicked: Get on the Map')
          })
        }

        // Step Card Interaction Analytics
        document.querySelectorAll('.step-card').forEach((card, index) => {
          card.addEventListener('click', () => {
            console.log(`Step ${index + 1} card clicked`)
          })
        })

        // Final CTA Button Analytics
        const finalCtaButton = document.querySelector('.final-cta-button')
        if (finalCtaButton) {
          finalCtaButton.addEventListener('click', (e) => {
            console.log('Final CTA clicked: Start Your Transformation')
          })
        }

        // FAQ Card Click Analytics
        const faqCards = document.querySelectorAll('.faq-card')
        faqCards.forEach((card, index) => {
          card.addEventListener('click', () => {
            const questionEl = card.querySelector('.faq-card-question')
            if (questionEl) {
              const question = questionEl.textContent
              console.log(`FAQ card clicked: ${question}`)
            }
          })
        })

        // FAQ Final CTA Button Analytics
        const faqFinalCtaButton = document.querySelector('.faq-final-cta-button')
        if (faqFinalCtaButton) {
          faqFinalCtaButton.addEventListener('click', (e) => {
            console.log('FAQ Final CTA clicked: Apply for Strategy Session')
          })
        }

        // Photography Services Analytics
        const photographyServiceCta = document.querySelector('.photography-services-section .service-cta')
        if (photographyServiceCta) {
          photographyServiceCta.addEventListener('click', (e) => {
            console.log('Photography Service CTA clicked: Book Photography Service')
          })
        }

        // Photography Feature Card Hover Analytics
        document.querySelectorAll('.photography-services-section .feature-card').forEach((card, index) => {
          card.addEventListener('mouseenter', () => {
            const titleEl = card.querySelector('.feature-title')
            if (titleEl) {
              const title = titleEl.textContent
              console.log(`Photography feature card hovered: ${title}`)
            }
          })
        })

        // Photography Package Feature Click Analytics
        document.querySelectorAll('.photography-services-section .package-feature').forEach((feature, index) => {
          feature.addEventListener('click', () => {
            const spanEl = feature.querySelector('span')
            if (spanEl) {
              const featureText = spanEl.textContent
              console.log(`Photography package feature clicked: ${featureText}`)
            }
          })
        })

        // Footer Analytics
        const footerCtaButton = document.querySelector('.footer-cta')
        if (footerCtaButton) {
          footerCtaButton.addEventListener('click', (e) => {
            console.log('Footer CTA clicked: Get Started Today')
          })
        }

        // Footer Link Analytics
        document.querySelectorAll('.footer-link').forEach((link, index) => {
          link.addEventListener('click', () => {
            const linkText = link.textContent
            console.log(`Footer link clicked: ${linkText}`)
          })
        })

        // Footer Social Link Analytics
        document.querySelectorAll('.footer-social-link').forEach((link, index) => {
          link.addEventListener('click', () => {
            const platform = link.getAttribute('aria-label')
            console.log(`Footer social link clicked: ${platform}`)
          })
        })

        // Footer Legal Link Analytics
        document.querySelectorAll('.footer-legal-link').forEach((link, index) => {
          link.addEventListener('click', () => {
            const linkText = link.textContent
            console.log(`Footer legal link clicked: ${linkText}`)
          })
        })
      }, 500)

      // Add fade-in animation keyframes for FAQ
      const faqStyle = document.createElement('style')
      faqStyle.textContent = `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `
      document.head.appendChild(faqStyle)

      console.log('Photography Service Showcase Component loaded')

    // Cleanup function
    return () => {
      clearTimeout(timer)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [isPanelOpen])

  console.log('HomePage about to return JSX...')
  
  return (
    <>
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Clean Professional Navbar */}
      <nav className={`navbar ${isNavbarScrolled ? 'scrolled' : ''}`} id="navbar" role="navigation" aria-label="Main navigation">
        <div className="navbar-container">
          {/* Logo */}
          <a href="/" className="navbar-logo" aria-label="Red Ox Digital Home">
            <div className="navbar-logo-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="92.97 187 1222.71 404.74">
                <defs>
                  <style>
                    {`.st0 { fill: hsl(var(--creative-accent)); }`}
                  </style>
                </defs>
                <g id="Layer_3">
                  <path className="st0" d="M936.915,578.467V187.451c9.351,0,18.404-.037,27.456.006,54.59.261,109.328-1.901,163.735,1.396,77.447,4.694,138.203,39.631,170.651,112.684,32.043,72.142,18.939,163.536-42.531,221.503-31.496,29.701-69.729,45.986-112.183,52.047-17.193,2.455-34.747,3.086-52.148,3.236-48.408.416-96.821.144-145.232.144h-9.748ZM1039.529,382.82c0,33.858.123,67.716-.122,101.572-.041,5.61,1.456,7.446,7.198,7.348,19.073-.326,38.165.27,57.231-.231,21.834-.573,42.556-5.965,60.805-18.329,36.958-25.038,54.084-70.24,43.885-114.478-11.133-48.286-41.181-76.486-90.858-82.052-23.095-2.588-46.648-.913-69.973-1.744-7.132-.254-8.36,2.403-8.307,8.76.274,33.049.127,66.102.142,99.153Z"/>
                </g>
                <g id="o">
                  <g id="Layer_2">
                    <path className="st0" d="M195.475,454.205v123.876h-102.509V188.692c2.126-.304,4.153-.85,6.179-.846,66.676.138,133.384-.853,200.016.95,40.917,1.107,77.883,15.236,105.626,47.383,24.019,27.832,29.655,61.292,27.383,96.576-1.957,30.391-13.576,56.93-36.248,77.531-12.833,11.661-27.255,21.574-42.16,33.21,29.644,43.915,59.849,88.662,90.584,134.194-2.394.303-4.07.698-5.746.7-34.684.044-69.369.16-104.05-.152-3.073-.028-7.326-2.096-8.998-4.583-25.313-37.634-50.356-75.451-75.241-113.37-2.783-4.242-5.5-6.373-10.853-6.22-14.183.407-28.385.138-43.982.138ZM195.724,372.133c1.205.142,2.484.424,3.761.422,25.792-.042,51.585-.009,77.375-.269,5.581-.056,11.274-.653,16.705-1.909,23.843-5.516,38.976-26.236,37.698-51.1-1.132-22.014-19.093-41.012-43.054-42.417-28.907-1.696-57.94-1.198-86.915-1.818-5.076-.109-5.613,2.622-5.605,6.603.063,29.812.034,59.623.034,90.489Z"/>
                  </g>
                </g>
                <g id="ox">
                  <path className="st0" d="M683.028,187.046c-111.916,0-202.642,90.594-202.642,202.348,0,69.51,33.602,133.136,88.566,167.263l.09-1.055-.09-.045s3.347-215.705,3.347-220.134c33.219,0,66.437-6.644,79.725-8.858,55.364-11.073,88.583-62.008,95.227-81.939,6.644-19.931,4.429,2.215,2.215,28.789-6.644,44.292-46.506,70.866-55.364,75.296-8.858,2.215-2.215,11.073-2.215,11.073,0,0,73.081,108.514,86.368,124.016,15.502,13.287,6.644,24.36,6.644,24.36-6.644,15.502-22.146,33.219-22.146,33.219-11.073,11.073-44.292-8.858-106.3-4.429-33.134,2.367-40.901,41.908-40.901,41.908l-.008-.004c-.235,1.067-.214,1.32-.214,1.321,0,0,.002,0,.002.001,20.559,9.032,43.955,11.566,67.695,11.566,111.916,0,202.642-90.594,202.642-202.348s-90.726-202.348-202.642-202.348Z"/>
                  <g id="Layer_1">
                    <path className="st0" d="M687.696,411.97c-6.743-5.669-12.43-10.45-18.468-15.526,5.432-3.886,11.593-5.32,16.917-1.56,5.763,4.07,3.96,10.301,1.551,17.086Z"/>
                  </g>
                </g>
              </svg>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="navbar-nav">
            <a 
              href="#home" 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => handleSmoothScroll(e, '#home')}
            >
              Home
            </a>
            <a 
              href="#services" 
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
              onClick={(e) => handleSmoothScroll(e, '#services')}
            >
              Services
            </a>
            <a 
              href="#how-it-works" 
              className={`nav-link ${activeSection === 'how-it-works' ? 'active' : ''}`}
              onClick={(e) => handleSmoothScroll(e, '#how-it-works')}
            >
              How It Works
            </a>
            <a 
              href="#photography-services" 
              className={`nav-link ${activeSection === 'photography-services' ? 'active' : ''}`}
              onClick={(e) => handleSmoothScroll(e, '#photography-services')}
            >
              Offer
            </a>
            <a 
              href="#faq" 
              className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`}
              onClick={(e) => handleSmoothScroll(e, '#faq')}
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => handleSmoothScroll(e, '#contact')}
            >
              Contact
            </a>
            <button 
              className="nav-cta"
              onClick={openPanel}
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button" 
            aria-label="Toggle mobile menu" 
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          {/* Mobile Navigation */}
          <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`} id="mobile-nav">
            <a href="#home" className="mobile-nav-link" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a>
            <a href="#services" className="mobile-nav-link" onClick={(e) => handleSmoothScroll(e, '#services')}>Services</a>
            <a href="#how-it-works" className="mobile-nav-link" onClick={(e) => handleSmoothScroll(e, '#how-it-works')}>How It Works</a>
            <a href="#photography-services" className="mobile-nav-link" onClick={(e) => handleSmoothScroll(e, '#photography-services')}>Offer</a>
            <a href="#faq" className="mobile-nav-link" onClick={(e) => handleSmoothScroll(e, '#faq')}>FAQ</a>
            <a href="#contact" className="mobile-nav-link" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a>
            <button className="mobile-nav-link" onClick={openPanel}>Get Quote</button>
          </div>
        </div>
      </nav>

      {/* Hero Container */}
      <section className="hero-container" id="home" role="banner" aria-label="Red Ox Digital Local Business Hero Section">
        {/* Background Elements */}
        <div className="hero-background" aria-hidden="true"></div>
        
        {/* 3D Isometric Image Behind Text */}
        <div className="hero-image" aria-hidden="true">
          <img 
            id="hero-background-image" 
            src="Hero.png" 
            alt="3D isometric city with location pin visualization" 
            loading="eager"
            decoding="async"
            className="background-image"
            onError={(e) => tryAlternativeImagePaths(e.target)}
          />
        </div>

        {/* Main Content */}
        <div className="hero-content" id="main-content">
          <h1 className="hero-headline">
            LOCAL CUSTOMERS,<br />
            MEET YOUR BUSINESS
          </h1>
          
          <p className="hero-subheading">
            Red Ox Digital Connects You
          </p>
          
          <button 
            className="cta-button" 
            role="button"
            aria-label="Get on the map - Contact Red Ox Digital to connect with local customers"
            onClick={openPanel}
          >
            GET ON THE MAP
          </button>
        </div>

        {/* Screen Reader Description */}
        <div className="sr-only">
          <p>Hero section featuring a 3D isometric city visualization with location pin positioned behind the main text, representing Red Ox Digital's local business connection services and emphasizing connecting local customers with businesses through digital marketing solutions.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services" aria-label="Red Ox Digital Services">
        <div className="services-container">
          {/* Services Header */}
          <div className="services-header">
            <h2 className="services-title">
              OUR SERVICES:<br/>
              BOOST YOUR LOCAL PRESENCE
            </h2>
            <p className="services-subtitle">
              Target customers in your third neighborhood with digital strategies tailored for SMBs.
            </p>
            <button className="services-cta-primary" onClick={openPanel}>
              GET STARTED
            </button>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {/* Professional Photography */}
            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                  <circle cx="12" cy="13" r="3"/>
                </svg>
              </div>
              <h3 className="service-title">Professional Photography</h3>
              <p className="service-description">High-quality business photos for Google Business Profile and marketing</p>
            </div>

            {/* Professional Video */}
            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7"/>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                </svg>
              </div>
              <h3 className="service-title">Professional Video</h3>
              <p className="service-description">Engaging video content to showcase your business and services</p>
            </div>

            {/* Google PPC Ads */}
            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-1.414-.586H13l-2.5 2.5"/>
                  <path d="m14 12 5 5"/>
                </svg>
              </div>
              <h3 className="service-title">Google PPC Ads</h3>
              <p className="service-description">Pay-per-click advertising targeting local "near me" searches on Google</p>
            </div>

            {/* Custom Landing Pages */}
            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                  <path d="M7 8h10"/>
                  <path d="M7 12h6"/>
                </svg>
              </div>
              <h3 className="service-title">Custom Landing Pages</h3>
              <p className="service-description">High-converting pages that turn PPC ad traffic into paying customers</p>
            </div>

            {/* Automated Lead Response */}
            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  <path d="M8 10h8"/>
                  <path d="M8 14h4"/>
                </svg>
              </div>
              <h3 className="service-title">Automated Lead Response</h3>
              <p className="service-description">SMS system that contacts new leads within minutes of inquiry</p>
            </div>

            {/* Review Generation */}
            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                </svg>
              </div>
              <h3 className="service-title">Review Generation</h3>
              <p className="service-description">Automated SMS system that asks happy customers for reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* PAS (Problem-Agitation-Solution) Container */}
      <div className="pas-container" style={{
        display: 'block',
        gridTemplateColumns: 'unset',
        gap: 'unset'
      }}>
        <style jsx>{`
          .pas-container {
            background: linear-gradient(180deg,
              transparent 0%,
              hsl(var(--creative-accent) / 0.02) 20%,
              hsl(var(--creative-accent) / 0.04) 40%,
              hsl(var(--creative-accent) / 0.03) 60%,
              hsl(142 76% 36% / 0.02) 80%,
              hsl(142 76% 36% / 0.03) 100%) !important;
            position: relative !important;
            overflow: hidden !important;
            padding: 6rem 2rem 2rem 2rem !important;
            margin: 0 auto !important;
            width: 100% !important;
            max-width: 100vw !important;
          }

          .problem-section,
          .agitation-section,
          .solution-section {
            padding: 0 0 4rem 0 !important;
            background: transparent !important;
            position: relative !important;
            overflow: hidden !important;
          }

          .problem-container,
          .agitation-container,
          .solution-container {
            max-width: 1400px !important;
            margin: 0 auto !important;
            position: relative !important;
            z-index: 2 !important;
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 6rem !important;
            align-items: center !important;
            padding: 0 4rem !important;
            width: 100% !important;
          }

          .problem-icon-overlay,
          .agitation-icon-overlay,
          .solution-icon-overlay {
            position: absolute !important;
            top: 30% !important;
            left: 25% !important;
            transform: translate(-50%, -50%) !important;
            z-index: 10 !important;
            pointer-events: none !important;
          }

          /* Position the green solution SVG over the phone (bottom-right) */
          .solution-icon-overlay {
            top: auto !important;
            left: auto !important;
            right: 16px !important;
            bottom: 16px !important;
            transform: none !important;
          }

          .problem-icon,
          .agitation-icon,
          .solution-icon {
            width: 140px !important;
            height: 140px !important;
            background: linear-gradient(135deg, 
              hsl(var(--creative-accent) / 0.15) 0%, 
              hsl(var(--creative-accent) / 0.05) 100%) !important;
            border: 2px solid hsl(var(--creative-accent) / 0.3) !important;
            border-radius: 20px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            position: relative !important;
            transition: var(--transition-creative) !important;
            box-shadow: 
              0 0 20px hsl(var(--creative-accent) / 0.6),
              0 0 40px hsl(var(--creative-accent) / 0.4),
              0 0 80px hsl(var(--creative-accent) / 0.3),
              0 0 120px hsl(var(--creative-accent) / 0.2),
              inset 0 0 30px hsl(var(--creative-accent) / 0.1) !important;
            animation: icon-glow-pulse 2.5s ease-in-out infinite !important;
          }

          .solution-icon {
            background: linear-gradient(135deg, 
              hsl(142 76% 36% / 0.15) 0%, 
              hsl(142 76% 36% / 0.05) 100%) !important;
            border: 2px solid hsl(142 76% 36% / 0.3) !important;
            box-shadow: 
              0 0 20px hsl(142 76% 36% / 0.6),
              0 0 40px hsl(142 76% 36% / 0.4),
              0 0 80px hsl(142 76% 36% / 0.3),
              0 0 120px hsl(142 76% 36% / 0.2),
              inset 0 0 30px hsl(142 76% 36% / 0.1) !important;
          }

          .problem-icon::before,
          .agitation-icon::before,
          .solution-icon::before {
            content: '' !important;
            position: absolute !important;
            top: -20px !important;
            left: -20px !important;
            right: -20px !important;
            bottom: -20px !important;
            border: 2px solid hsl(var(--creative-accent) / 0.2) !important;
            border-radius: 50% !important;
            animation: outer-ring-pulse 2.5s ease-in-out infinite !important;
          }

          .solution-icon::before {
            border: 2px solid hsl(142 76% 36% / 0.2) !important;
          }

          .problem-icon::after,
          .agitation-icon::after,
          .solution-icon::after {
            content: '' !important;
            position: absolute !important;
            top: -40px !important;
            left: -40px !important;
            right: -40px !important;
            bottom: -40px !important;
            border: 1px solid hsl(var(--creative-accent) / 0.1) !important;
            border-radius: 50% !important;
            animation: outer-ring-pulse 2.5s ease-in-out infinite 0.5s !important;
          }

          .solution-icon::after {
            border: 1px solid hsl(142 76% 36% / 0.1) !important;
          }

          .problem-icon svg,
          .agitation-icon svg,
          .solution-icon svg {
            width: 60px !important;
            height: 60px !important;
            stroke: hsl(var(--creative-accent)) !important;
            stroke-width: 2 !important;
            stroke-linecap: round !important;
            stroke-linejoin: round !important;
            filter: drop-shadow(0 0 10px hsl(var(--creative-accent) / 0.8)) !important;
            z-index: 1 !important;
          }

          .solution-icon svg {
            stroke: hsl(142 76% 36%) !important;
            filter: drop-shadow(0 0 10px hsl(142 76% 36% / 0.8)) !important;
          }

          @keyframes icon-glow-pulse {
            0%, 100% {
              box-shadow: 
                0 0 20px hsl(var(--creative-accent) / 0.6),
                0 0 40px hsl(var(--creative-accent) / 0.4),
                0 0 80px hsl(var(--creative-accent) / 0.3),
                0 0 120px hsl(var(--creative-accent) / 0.2),
                inset 0 0 30px hsl(var(--creative-accent) / 0.1);
              border-color: hsl(var(--creative-accent) / 0.3);
            }
            50% {
              box-shadow: 
                0 0 30px hsl(var(--creative-accent) / 0.8),
                0 0 60px hsl(var(--creative-accent) / 0.6),
                0 0 120px hsl(var(--creative-accent) / 0.4),
                0 0 180px hsl(var(--creative-accent) / 0.3),
                inset 0 0 40px hsl(var(--creative-accent) / 0.15);
              border-color: hsl(var(--creative-accent) / 0.5);
            }
          }

          @keyframes outer-ring-pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.3;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.6;
            }
          }

          .problem-image,
          .agitation-image,
          .solution-image {
            position: relative !important;
            border-radius: 24px !important;
            overflow: hidden !important;
            box-shadow: 
              0 20px 60px rgba(0, 0, 0, 0.2),
              0 8px 24px rgba(0, 0, 0, 0.1) !important;
          }

          .problem-bg-image,
          .agitation-bg-image,
          .solution-bg-image {
            width: 100% !important;
            height: auto !important;
            min-height: 500px !important;
            object-fit: cover !important;
            transition: var(--transition-creative) !important;
          }

          .problem-title,
          .agitation-title,
          .solution-title {
            font-size: clamp(2rem, 4.5vw, 3.2rem) !important;
            font-weight: 800 !important;
            line-height: 1.1 !important;
            margin-bottom: 1.2rem !important;
            letter-spacing: -0.02em !important;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
            text-transform: uppercase !important;
          }

          .problem-title {
            color: hsl(var(--creative-accent)) !important;
          }

          .agitation-title {
            color: hsl(var(--creative-accent)) !important;
          }

          .solution-title {
            color: hsl(142 76% 36%) !important;
          }

          .problem-cta,
          .agitation-cta,
          .solution-cta {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 1rem 2rem !important;
            background: linear-gradient(135deg, 
              hsl(var(--creative-accent)) 0%, 
              hsl(var(--creative-accent) / 0.9) 100%) !important;
            color: hsl(var(--creative-primary)) !important;
            text-decoration: none !important;
            font-weight: 700 !important;
            font-size: 1rem !important;
            letter-spacing: 0.025em !important;
            border-radius: 12px !important;
            transition: var(--transition-creative) !important;
            position: relative !important;
            overflow: hidden !important;
            box-shadow: 
              0 8px 24px hsl(var(--creative-accent) / 0.3),
              0 4px 12px rgba(0, 0, 0, 0.1) !important;
            text-transform: uppercase !important;
            margin-top: 2rem !important;
          }

          .solution-cta {
            background: linear-gradient(135deg, 
              hsl(142 76% 36%) 0%, 
              hsl(142 76% 36% / 0.9) 100%) !important;
            box-shadow: 
              0 8px 24px hsl(142 76% 36% / 0.3),
              0 4px 12px rgba(0, 0, 0, 0.1) !important;
          }

          .problem-cta::before,
          .agitation-cta::before,
          .solution-cta::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: -100% !important;
            width: 100% !important;
            height: 100% !important;
            background: linear-gradient(90deg, 
              transparent, 
              rgba(255, 255, 255, 0.2), 
              transparent) !important;
            transition: left 0.6s ease !important;
          }

          .problem-cta:hover,
          .agitation-cta:hover,
          .solution-cta:hover {
            transform: translateY(-2px) !important;
            box-shadow: 
              0 12px 32px hsl(var(--creative-accent) / 0.4),
              0 6px 16px rgba(0, 0, 0, 0.15) !important;
          }

          .solution-cta:hover {
            box-shadow: 
              0 12px 32px hsl(142 76% 36% / 0.4),
              0 6px 16px rgba(0, 0, 0, 0.15) !important;
          }

          .problem-cta:hover::before,
          .agitation-cta:hover::before,
          .solution-cta:hover::before {
            left: 100% !important;
          }

          .problem-description,
          .agitation-description,
          .solution-description {
            font-size: clamp(1rem, 2.2vw, 1.15rem) !important;
            line-height: 1.6 !important;
            color: hsl(var(--text-secondary)) !important;
            margin-bottom: 2rem !important;
            font-weight: 400 !important;
            max-width: 500px !important;
          }

          @media (max-width: 768px) {
            .pas-container {
              padding: 4rem 0 2rem 0 !important;
              margin: 0 !important;
            }
            
            .problem-section,
            .agitation-section,
            .solution-section {
              padding: 0 0 2rem 0 !important;
            }
            
            .problem-container,
            .agitation-container,
            .solution-container {
              padding: 0 1rem !important;
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
              text-align: center !important;
            }

            /* Ensure Text-Picture order on mobile for all PAS sections */
            .problem-content,
            .agitation-content,
            .solution-content {
              order: 1 !important;
              padding-right: 0 !important;
              padding-left: 0 !important;
            }

            .problem-image,
            .agitation-image,
            .solution-image {
              order: 2 !important;
            }

            /* Ensure consistent spacing on mobile for all PAS sections */
            .problem-title,
            .agitation-title,
            .solution-title {
              font-size: clamp(2rem, 8vw, 3rem) !important;
              margin-bottom: 1.2rem !important;
            }

            .problem-description,
            .agitation-description,
            .solution-description {
              max-width: none !important;
              margin-bottom: 2rem !important;
            }
          }
        `}</style>
        
        {/* Problem Section */}
        <section className="problem-section" aria-label="Business Problem Identification">
          <div className="problem-container">
            {/* Problem Content */}
            <div className="problem-content">
              <h2 className="problem-title">
                STRUGGLING TO<br/>
                STAND OUT?
              </h2>
              <p className="problem-description">
                Your amazing local business is a hidden gem. Customers searching "near me", but competitors are stealing the spotlight. Don't let digital noise make you invisible.
              </p>
              <button className="problem-cta" onClick={openPanel}>
                SEE HOW WE HELP
              </button>
            </div>

            {/* Problem Image */}
            <div className="problem-image">
              <img 
                src="/Images/Tradiebefound.png" 
                alt="Frustrated business owner working on laptop, missing out on local sales opportunities"
                className="problem-bg-image"
                loading="lazy"
                decoding="async"
              />
              
              {/* Single SVG Overlay */}
              <div className="problem-icon-overlay">
                <div className="problem-icon">
                  {/* MapPin Icon - Represents location/visibility issues */}
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agitation Section */}
        <section className="agitation-section" aria-label="Business Agitation and Urgency">
          <div className="agitation-container">
            {/* Agitation Image - First on desktop, second on mobile */}
            <div className="agitation-image">
              <img 
                src="/Images/Business owner losing customers to competitors due to poor online visibility.png" 
                alt="Business owner losing customers to competitors due to poor online visibility"
                className="agitation-bg-image"
                loading="lazy"
                decoding="async"
              />
              
              {/* Single SVG Overlay */}
              <div className="agitation-icon-overlay">
                <div className="agitation-icon">
                  {/* AlertTriangle Icon - Represents urgency and danger */}
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                    <path d="M12 9v4"/>
                    <path d="m12 17 .01 0"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Agitation Content - Second on desktop, first on mobile */}
            <div className="agitation-content">
              <h2 className="agitation-title">
                EVERY DAY YOU WAIT<br/>
                IS MONEY LOST
              </h2>
              <p className="agitation-description">
                While you're reading this, your competitors are capturing YOUR customers. Every "near me" search that doesn't find you is revenue walking out the door. How much longer can you afford to stay invisible?
              </p>
              <button className="agitation-cta" onClick={openPanel}>
                STOP LOSING CUSTOMERS
              </button>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="solution-section" aria-label="Business Solution and Resolution">
          <div className="solution-container">
            {/* Solution Content */}
            <div className="solution-content">
              <h2 className="solution-title">
                WE PUT YOU<br/>
                ON THE MAP
              </h2>
              <p className="solution-description">
                Red Ox Digital transforms invisible businesses into local landmarks. Our proven system gets you found by customers actively searching for your services. No more losing to competitors - it's time to dominate your local market.
              </p>
              <button className="solution-cta" onClick={openPanel}>
                GET STARTED NOW
              </button>
            </div>

            {/* Solution Image */}
            <div className="solution-image">
              <img 
                src="/Images/Successful business owner celebrating increased local visibility and customer growth.png" 
                alt="Successful business owner celebrating increased local visibility and customer growth"
                className="solution-bg-image"
                loading="lazy"
                decoding="async"
              />
              
              {/* Single SVG Overlay */}
              <div className="solution-icon-overlay">
                <div className="solution-icon">
                  {/* CheckCircle Icon - Represents success and completion */}
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22,4 12,14.01 9,11.01"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* End PAS Container */}

      {/* How It Works Section */}
      <section className="how-it-works-section" id="how-it-works" aria-label="How Our Process Works">
        <div className="how-it-works-container">
          <style jsx>{`
            .how-it-works-section {
              padding: 8rem 2rem !important;
              margin: 0 !important;
              background: linear-gradient(180deg,
                hsl(142 76% 36% / 0.03) 0%,
                hsl(142 76% 36% / 0.02) 10%,
                hsl(var(--creative-accent) / 0.03) 30%,
                hsl(var(--creative-accent) / 0.04) 50%,
                hsl(var(--creative-accent) / 0.02) 70%,
                transparent 100%) !important;
              position: relative !important;
              overflow: hidden !important;
            }

            .how-it-works-section::before {
              content: '' !important;
              position: absolute !important;
              top: 0 !important;
              left: 0 !important;
              width: 100% !important;
              height: 100% !important;
              background:
                radial-gradient(circle at 70% 30%, hsl(var(--creative-accent) / 0.06) 0%, transparent 60%),
                radial-gradient(circle at 30% 70%, hsl(var(--creative-accent) / 0.04) 0%, transparent 60%),
                radial-gradient(circle at 50% 10%, hsl(var(--creative-accent) / 0.03) 0%, transparent 70%) !important;
              z-index: 1 !important;
              pointer-events: none !important;
            }

            /* Disable diamond grid overlay to match PAS/FAQ */
            .how-it-works-section::after {
              content: none !important;
            }

            .how-it-works-container {
              max-width: 1200px !important;
              margin: 0 auto !important;
              position: relative !important;
              z-index: 2 !important;
            }

            .how-it-works-header {
              text-align: center !important;
              margin-bottom: 6rem !important;
            }

            .how-it-works-title {
              font-size: clamp(2.5rem, 5vw, 4rem) !important;
              font-weight: 900 !important;
              color: hsl(var(--text-primary)) !important;
              margin-bottom: 2rem !important;
              line-height: 1.1 !important;
              letter-spacing: -0.02em !important;
            }

            .how-it-works-subtitle {
              font-size: clamp(1.1rem, 2.5vw, 1.25rem) !important;
              color: hsl(var(--text-secondary)) !important;
              max-width: 800px !important;
              margin: 0 auto !important;
              line-height: 1.6 !important;
            }

            .steps-grid {
              display: grid !important;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
              gap: 2rem !important;
              margin-bottom: 6rem !important;
            }

            @media (min-width: 1024px) {
              .steps-grid {
                grid-template-columns: repeat(4, 1fr) !important;
                gap: 2rem !important;
              }
            }

            .step-card {
              background: hsl(var(--creative-secondary)) !important;
              border-radius: 20px !important;
              padding: 3rem 2rem !important;
              text-align: center !important;
              position: relative !important;
              transition: var(--transition-creative) !important;
              border: 1px solid hsl(var(--border-color)) !important;
              overflow: hidden !important;
            }

            .step-card::before {
              content: '' !important;
              position: absolute !important;
              top: 0 !important;
              left: 0 !important;
              right: 0 !important;
              bottom: 0 !important;
              background: linear-gradient(135deg, 
                hsl(var(--creative-accent) / 0.05) 0%, 
                transparent 50%) !important;
              pointer-events: none !important;
            }

            .step-card:hover {
              transform: translateY(-8px) !important;
              box-shadow: 
                0 20px 40px hsl(var(--creative-accent) / 0.15),
                0 8px 16px rgba(0, 0, 0, 0.1) !important;
            }

            .step-number {
              position: absolute !important;
              top: 1.5rem !important;
              right: 1.5rem !important;
              width: 3rem !important;
              height: 3rem !important;
              background: hsl(var(--creative-accent)) !important;
              color: hsl(var(--creative-primary)) !important;
              border-radius: 50% !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              font-weight: 900 !important;
              font-size: 1.25rem !important;
              box-shadow: 0 4px 12px hsl(var(--creative-accent) / 0.3) !important;
            }

            .step-icon {
              width: 4rem !important;
              height: 4rem !important;
              margin: 0 auto 2rem auto !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              background: linear-gradient(135deg, 
                hsl(var(--creative-accent) / 0.1) 0%, 
                hsl(var(--creative-accent) / 0.05) 100%) !important;
              border-radius: 16px !important;
              position: relative !important;
            }

            .step-icon svg {
              width: 2rem !important;
              height: 2rem !important;
              stroke: hsl(var(--creative-accent)) !important;
              fill: none !important;
              stroke-width: 2 !important;
            }

            .step-title {
              font-size: 1.25rem !important;
              font-weight: 800 !important;
              color: hsl(var(--text-primary)) !important;
              margin-bottom: 1.5rem !important;
              letter-spacing: 0.025em !important;
            }

            .step-description {
              font-size: 1rem !important;
              line-height: 1.6 !important;
              color: hsl(var(--text-secondary)) !important;
              font-weight: 400 !important;
            }

            .final-cta-section {
              text-align: center !important;
              background: linear-gradient(135deg, 
                hsl(var(--creative-accent) / 0.1) 0%, 
                hsl(var(--creative-accent) / 0.05) 100%) !important;
              border-radius: 24px !important;
              padding: 4rem 2rem !important;
              border: 1px solid hsl(var(--creative-accent) / 0.2) !important;
            }

            .final-cta-title {
              font-size: clamp(1.75rem, 4vw, 2.5rem) !important;
              font-weight: 900 !important;
              color: hsl(var(--text-primary)) !important;
              margin-bottom: 1.5rem !important;
              letter-spacing: -0.01em !important;
            }

            .final-cta-description {
              font-size: 1.1rem !important;
              color: hsl(var(--text-secondary)) !important;
              margin-bottom: 2.5rem !important;
              max-width: 600px !important;
              margin-left: auto !important;
              margin-right: auto !important;
              line-height: 1.6 !important;
            }

            .final-cta-button {
              display: inline-flex !important;
              align-items: center !important;
              justify-content: center !important;
              padding: 1.25rem 3rem !important;
              background: linear-gradient(135deg, 
                hsl(var(--creative-accent)) 0%, 
                hsl(var(--creative-accent) / 0.9) 100%) !important;
              color: hsl(var(--creative-primary)) !important;
              text-decoration: none !important;
              font-weight: 700 !important;
              font-size: 1.1rem !important;
              letter-spacing: 0.025em !important;
              border-radius: 16px !important;
              transition: var(--transition-creative) !important;
              position: relative !important;
              overflow: hidden !important;
              box-shadow: 
                0 8px 24px hsl(var(--creative-accent) / 0.3),
                0 4px 12px rgba(0, 0, 0, 0.1) !important;
              text-transform: uppercase !important;
            }

            .final-cta-button::before {
              content: '' !important;
              position: absolute !important;
              top: 0 !important;
              left: -100% !important;
              width: 100% !important;
              height: 100% !important;
              background: linear-gradient(90deg, 
                transparent, 
                rgba(255, 255, 255, 0.2), 
                transparent) !important;
              transition: left 0.6s ease !important;
            }

            .final-cta-button:hover {
              transform: translateY(-2px) !important;
              box-shadow: 
                0 12px 32px hsl(var(--creative-accent) / 0.4),
                0 6px 16px rgba(0, 0, 0, 0.15) !important;
            }

            .final-cta-button:hover::before {
              left: 100% !important;
            }

            @media (max-width: 768px) {
              .how-it-works-section {
                padding: 6rem 0 !important;
              }
              
              .how-it-works-header {
                margin-bottom: 4rem !important;
              }
              
              .steps-grid {
                grid-template-columns: 1fr !important;
                gap: 2rem !important;
                margin-bottom: 4rem !important;
              }
              
              .step-card {
                padding: 2.5rem 1.5rem !important;
              }
              
              .final-cta-section {
                padding: 3rem 1.5rem !important;
              }
            }
          `}</style>
          {/* Header */}
          <div className="how-it-works-header">
            <h2 className="how-it-works-title">
              FROM INVISIBLE TO UNSTOPPABLE
            </h2>
            <p className="how-it-works-subtitle">
              Our proven 4-step system transforms local businesses into market leaders. Here's exactly how we make it happen.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="steps-grid">
            {/* Step 1: Discovery */}
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </div>
              <h3 className="step-title">DISCOVERY</h3>
              <p className="step-description">
                We audit your services, competitors, and local demand, then design a PPC‑first plan with clear targets, budget, and revenue goals.
              </p>
            </div>

            {/* Step 2: Optimize */}
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="21" x2="4" y2="14"/>
                  <line x1="4" y1="10" x2="4" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="12"/>
                  <line x1="12" y1="8" x2="12" y2="3"/>
                  <line x1="20" y1="21" x2="20" y2="16"/>
                  <line x1="20" y1="12" x2="20" y2="3"/>
                  <line x1="1" y1="14" x2="7" y2="14"/>
                  <line x1="9" y1="8" x2="15" y2="8"/>
                  <line x1="17" y1="16" x2="23" y2="16"/>
                </svg>
              </div>
              <h3 className="step-title">OPTIMIZE</h3>
              <p className="step-description">
                We capture photos and video, build high‑converting landing pages, and optimize Google Business Profile and tracking to maximize lead conversions.
              </p>
            </div>

            {/* Step 3: Launch */}
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
                </svg>
              </div>
              <h3 className="step-title">LAUNCH</h3>
              <p className="step-description">
                We launch targeted PPC across Google Search and Maps, sending clicks to your landing pages with SMS follow‑up on leads.
              </p>
            </div>

            {/* Step 4: Dominate */}
            <div className="step-card">
              <div className="step-number">4</div>
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <polyline points="23,7 13.5,16.5 8.5,11.5 1,19"/>
                  <polyline points="17,7 23,7 23,13"/>
                </svg>
              </div>
              <h3 className="step-title">DOMINATE</h3>
              <p className="step-description">
                We monitor keywords, bids, and creative, optimize weekly, scale winners, and drive reviews so you dominate local search.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="final-cta-section">
            <h3 className="final-cta-title">READY TO GET STARTED?</h3>
            <p className="final-cta-description">
              Join hundreds of local businesses who've transformed their visibility and revenue with our proven system.
            </p>
            <button className="final-cta-button" onClick={openPanel}>
              START YOUR TRANSFORMATION
            </button>
          </div>
        </div>
      </section>

      {/* Business Photography Services Section */}
      <section className="photography-services-section" id="photography-services" aria-label="Business Photography Services">
        <style jsx>{`
          .photography-services-section {
            padding: 8rem 2rem !important;
            background: transparent !important;
            position: relative !important;
            overflow: hidden !important;
          }

          .photography-services-section::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background:
              radial-gradient(circle at 70% 30%, hsl(var(--creative-accent) / 0.06) 0%, transparent 60%),
              radial-gradient(circle at 30% 70%, hsl(var(--creative-accent) / 0.04) 0%, transparent 60%),
              radial-gradient(circle at 50% 10%, hsl(var(--creative-accent) / 0.03) 0%, transparent 70%) !important;
            z-index: 1 !important;
            pointer-events: none !important;
          }

          .photography-services-container {
            max-width: 1200px !important;
            margin: 0 auto !important;
            position: relative !important;
            z-index: 2 !important;
          }

          .service-showcase-component {
            display: flex !important;
            flex-direction: column !important;
            gap: 4rem !important;
          }

          .service-header {
            text-align: center !important;
            margin-bottom: 2rem !important;
          }

          .service-headline {
            font-size: clamp(2.5rem, 5vw, 4rem) !important;
            font-weight: 900 !important;
            color: hsl(var(--text-primary)) !important;
            margin-bottom: 2rem !important;
            line-height: 1.1 !important;
            letter-spacing: -0.02em !important;
          }

          .highlight-text {
            color: hsl(var(--creative-accent)) !important;
          }

          .service-description {
            font-size: clamp(1.1rem, 2.5vw, 1.25rem) !important;
            color: hsl(var(--text-secondary)) !important;
            max-width: 800px !important;
            margin: 0 auto !important;
            line-height: 1.6 !important;
          }

          .content-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 4rem !important;
            align-items: start !important;
          }

          .service-features {
            display: flex !important;
            flex-direction: column !important;
            gap: 2rem !important;
          }

          .feature-card {
            background: hsl(var(--creative-secondary)) !important;
            border-radius: 20px !important;
            padding: 2.5rem !important;
            border: 1px solid hsl(var(--border-color)) !important;
            transition: var(--transition-creative) !important;
            position: relative !important;
            overflow: hidden !important;
          }

          .feature-card::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            background: linear-gradient(135deg, 
              hsl(var(--creative-accent) / 0.05) 0%, 
              transparent 50%) !important;
            pointer-events: none !important;
          }

          .feature-card:hover {
            transform: translateY(-4px) !important;
            box-shadow: 
              0 20px 40px hsl(var(--creative-accent) / 0.15),
              0 8px 16px rgba(0, 0, 0, 0.1) !important;
          }

          .feature-header {
            display: flex !important;
            align-items: center !important;
            gap: 1rem !important;
            margin-bottom: 1.5rem !important;
          }

          .feature-icon {
            width: 3rem !important;
            height: 3rem !important;
            background: linear-gradient(135deg, 
              hsl(var(--creative-accent) / 0.1) 0%, 
              hsl(var(--creative-accent) / 0.05) 100%) !important;
            border-radius: 12px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            flex-shrink: 0 !important;
          }

          .feature-icon svg {
            width: 1.5rem !important;
            height: 1.5rem !important;
            stroke: hsl(var(--creative-accent)) !important;
            fill: none !important;
            stroke-width: 2 !important;
          }

          .feature-title {
            font-size: 1.25rem !important;
            font-weight: 700 !important;
            color: hsl(var(--text-primary)) !important;
            letter-spacing: 0.025em !important;
          }

          .feature-description {
            font-size: 1rem !important;
            line-height: 1.6 !important;
            color: hsl(var(--text-secondary)) !important;
            font-weight: 400 !important;
          }

          .package-section {
            display: flex !important;
            flex-direction: column !important;
            gap: 2rem !important;
          }

          .package-card {
            background: linear-gradient(135deg, 
              hsl(var(--creative-secondary)) 0%, 
              hsl(220 25% 12%) 100%) !important;
            border-radius: 24px !important;
            padding: 3rem 2.5rem !important;
            border: 2px solid hsl(var(--creative-accent) / 0.2) !important;
            text-align: center !important;
            position: relative !important;
            overflow: hidden !important;
          }

          .package-card::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            background: linear-gradient(135deg, 
              hsl(var(--creative-accent) / 0.08) 0%, 
              transparent 50%) !important;
            pointer-events: none !important;
          }

          .package-label {
            font-size: 0.875rem !important;
            font-weight: 600 !important;
            color: hsl(var(--creative-accent)) !important;
            text-transform: uppercase !important;
            letter-spacing: 0.1em !important;
            margin-bottom: 1rem !important;
          }

          .package-price {
            font-size: 4rem !important;
            font-weight: 900 !important;
            color: hsl(var(--text-primary)) !important;
            line-height: 1 !important;
            margin-bottom: 0.5rem !important;
          }

          .package-duration {
            font-size: 1rem !important;
            color: hsl(var(--text-secondary)) !important;
            margin-bottom: 2.5rem !important;
          }

          .package-features {
            display: flex !important;
            flex-direction: column !important;
            gap: 1rem !important;
            margin-bottom: 2.5rem !important;
            text-align: left !important;
          }

          .package-feature {
            display: flex !important;
            align-items: center !important;
            gap: 0.75rem !important;
          }

          .package-feature-icon {
            width: 1.25rem !important;
            height: 1.25rem !important;
            background: hsl(142 76% 36%) !important;
            border-radius: 50% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            flex-shrink: 0 !important;
          }

          .package-feature-icon svg {
            width: 0.75rem !important;
            height: 0.75rem !important;
            stroke: white !important;
            fill: none !important;
            stroke-width: 3 !important;
          }

          .package-feature span {
            font-size: 1rem !important;
            color: hsl(var(--text-primary)) !important;
            font-weight: 400 !important;
          }

          .service-cta {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 0.75rem !important;
            padding: 1.25rem 2.5rem !important;
            background: linear-gradient(135deg, 
              hsl(var(--creative-accent)) 0%, 
              hsl(var(--creative-accent) / 0.9) 100%) !important;
            color: hsl(var(--creative-primary)) !important;
            text-decoration: none !important;
            font-weight: 700 !important;
            font-size: 1rem !important;
            letter-spacing: 0.025em !important;
            border-radius: 16px !important;
            transition: var(--transition-creative) !important;
            position: relative !important;
            overflow: hidden !important;
            box-shadow: 
              0 8px 24px hsl(var(--creative-accent) / 0.3),
              0 4px 12px rgba(0, 0, 0, 0.1) !important;
            text-transform: uppercase !important;
            width: 100% !important;
          }

          .service-cta::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: -100% !important;
            width: 100% !important;
            height: 100% !important;
            background: linear-gradient(90deg, 
              transparent, 
              rgba(255, 255, 255, 0.2), 
              transparent) !important;
            transition: left 0.6s ease !important;
          }

          .service-cta:hover {
            transform: translateY(-2px) !important;
            box-shadow: 
              0 12px 32px hsl(var(--creative-accent) / 0.4),
              0 6px 16px rgba(0, 0, 0, 0.15) !important;
          }

          .service-cta:hover::before {
            left: 100% !important;
          }

          .service-cta svg {
            width: 1.25rem !important;
            height: 1.25rem !important;
            stroke: currentColor !important;
            fill: none !important;
            stroke-width: 2 !important;
          }

          .guarantee-section {
            display: flex !important;
            align-items: flex-start !important;
            gap: 1rem !important;
            background: linear-gradient(135deg, 
              hsl(142 76% 36% / 0.1) 0%, 
              hsl(142 76% 36% / 0.05) 100%) !important;
            border-radius: 16px !important;
            padding: 1.5rem !important;
            border: 1px solid hsl(142 76% 36% / 0.2) !important;
          }

          .guarantee-icon {
            width: 2rem !important;
            height: 2rem !important;
            background: hsl(142 76% 36%) !important;
            border-radius: 8px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            flex-shrink: 0 !important;
          }

          .guarantee-icon svg {
            width: 1.25rem !important;
            height: 1.25rem !important;
            stroke: white !important;
            fill: none !important;
            stroke-width: 2 !important;
          }

          .guarantee-text {
            font-size: 0.875rem !important;
            line-height: 1.5 !important;
            color: hsl(var(--text-secondary)) !important;
          }

          .guarantee-text strong {
            color: hsl(var(--text-primary)) !important;
            font-weight: 600 !important;
          }

          @media (max-width: 768px) {
            .photography-services-section {
              padding: 6rem 1rem !important;
            }
            
            .content-grid {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
            }
            
            .feature-card {
              padding: 2rem !important;
            }
            
            .package-card {
              padding: 2.5rem 2rem !important;
            }
            
            .package-price {
              font-size: 3rem !important;
            }
          }
        `}</style>
        
        <div className="photography-services-container">
          {/* Service Showcase Component */}
          <div className="service-showcase-component">
            {/* Header Section */}
            <div className="service-header">
              <h2 className="service-headline">
                Introductory Photography <span className="highlight-text">Offer</span>
              </h2>

              <p className="service-description">
                Get started with our professional photography service at a special introductory rate. Perfect for businesses ready to enhance their visual presence and attract more local customers.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="content-grid">
              {/* Service Features */}
              <div className="service-features">
                <div className="feature-card">
                  <div className="feature-header">
                    <div className="feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div className="feature-title">On-Site Photography</div>
                  </div>
                  <div className="feature-description">
                    Professional photographer comes to your business location for a convenient 20-minute session that captures your space, team, and services.
                  </div>
                </div>

                <div className="feature-card">
                  <div className="feature-header">
                    <div className="feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                      </svg>
                    </div>
                    <div className="feature-title">Digital Optimization</div>
                  </div>
                  <div className="feature-description">
                    Images are professionally edited and optimized for various platforms including Google Business Profile, website, and social media channels.
                  </div>
                </div>

                <div className="feature-card">
                  <div className="feature-header">
                    <div className="feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                      </svg>
                    </div>
                    <div className="feature-title">Fast Delivery</div>
                  </div>
                  <div className="feature-description">
                    Receive your professionally edited high-resolution images within 24 hours of your photography session, ready for immediate use.
                  </div>
                </div>
              </div>

              {/* Package Section */}
              <div className="package-section">
                <div className="package-card">
                  <div className="package-label">Photography Package</div>
                  <div className="package-price">$199</div>
                  <div className="package-duration">Complete service package</div>

                  <div className="package-features">
                    <div className="package-feature">
                      <div className="package-feature-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20,6 9,17 4,12"/>
                        </svg>
                      </div>
                      <span>20-minute professional photoshoot</span>
                    </div>
                    <div className="package-feature">
                      <div className="package-feature-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20,6 9,17 4,12"/>
                        </svg>
                      </div>
                      <span>Professional editing and retouching</span>
                    </div>
                    <div className="package-feature">
                      <div className="package-feature-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20,6 9,17 4,12"/>
                        </svg>
                      </div>
                      <span>High-resolution digital files</span>
                    </div>
                    <div className="package-feature">
                      <div className="package-feature-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20,6 9,17 4,12"/>
                        </svg>
                      </div>
                      <span>Multiple format optimization</span>
                    </div>
                    <div className="package-feature">
                      <div className="package-feature-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20,6 9,17 4,12"/>
                        </svg>
                      </div>
                      <span>24-hour delivery guarantee</span>
                    </div>
                  </div>

                  <button className="service-cta" onClick={openPanel}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                      <circle cx="12" cy="13" r="3"/>
                    </svg>
                    Book Photography Service
                  </button>
                </div>

                <div className="guarantee-section">
                  <div className="guarantee-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <div className="guarantee-text">
                    <strong>Satisfaction Guaranteed:</strong> We're committed to delivering professional results that exceed your expectations or we'll make it right.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq" aria-label="Frequently Asked Questions">
        <div className="faq-container">
          {/* Header */}
          <div className="faq-header">
            <h2 className="faq-title">
              YOUR QUESTIONS ANSWERED
            </h2>
            <p className="faq-subtitle">
              Everything you need to know about our complete marketing package designed to get local customers and how we help businesses dominate "near me" searches.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="faq-categories">
            <button 
              className={`category-filter ${activeFaqCategory === 'all' ? 'active' : ''}`} 
              onClick={() => handleFaqCategoryFilter('all')}
            >
              ALL QUESTIONS
            </button>
            <button 
              className={`category-filter ${activeFaqCategory === 'services' ? 'active' : ''}`} 
              onClick={() => handleFaqCategoryFilter('services')}
            >
              SERVICES
            </button>
            <button 
              className={`category-filter ${activeFaqCategory === 'pricing' ? 'active' : ''}`} 
              onClick={() => handleFaqCategoryFilter('pricing')}
            >
              PRICING
            </button>
            <button 
              className={`category-filter ${activeFaqCategory === 'results' ? 'active' : ''}`} 
              onClick={() => handleFaqCategoryFilter('results')}
            >
              RESULTS
            </button>
            <button 
              className={`category-filter ${activeFaqCategory === 'process' ? 'active' : ''}`} 
              onClick={() => handleFaqCategoryFilter('process')}
            >
              PROCESS
            </button>
          </div>

          {/* FAQ Cards Grid */}
          <div className="faq-grid">
            {/* FAQ Card 1 */}
            <div className={`faq-card ${activeFaqCategory !== 'all' && activeFaqCategory !== 'results' ? 'hidden' : ''}`} data-category="results">
              <div className="faq-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
              </div>
              <h3 className="faq-card-question">How quickly will I see new leads from your system?</h3>
              <p className="faq-card-answer">
                Most clients start receiving new leads within 2-4 weeks of launching their PPC campaigns. Our automated SMS system responds to leads within minutes, and the custom landing pages are designed for immediate conversion from day one of your campaign launch.
              </p>
            </div>

            {/* FAQ Card 2 */}
            <div className={`faq-card ${activeFaqCategory !== 'all' && activeFaqCategory !== 'services' ? 'hidden' : ''}`} data-category="services">
              <div className="faq-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="faq-card-question">What makes your approach different from other marketing agencies?</h3>
              <p className="faq-card-answer">
                We specialize exclusively in local lead generation with a singular focus on "near me" searches. Unlike general agencies, we're not a jack-of-all-trades. This extreme focus means we're exceptionally good at turning local searches into paying customers for your specific business type.
              </p>
            </div>

            {/* FAQ Card 3 */}
            <div className={`faq-card ${activeFaqCategory !== 'all' && activeFaqCategory !== 'services' ? 'hidden' : ''}`} data-category="services">
              <div className="faq-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3 className="faq-card-question">Do you work with both "come to us" and "we come to you" businesses?</h3>
              <p className="faq-card-answer">
                Absolutely! We work with brick-and-mortar businesses like dentists, med spas, and salons, as well as service area businesses like plumbers, electricians, and landscapers. Our system is designed for any local business that depends on attracting customers from their immediate geographic area.
              </p>
            </div>

            {/* FAQ Card 4 */}
            <div className={`faq-card ${activeFaqCategory !== 'all' && activeFaqCategory !== 'services' ? 'hidden' : ''}`} data-category="services">
              <div className="faq-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <h3 className="faq-card-question">What's included in your complete marketing package?</h3>
              <p className="faq-card-answer">
                Our package includes professional photo and video shoots, Google PPC ads targeting local searches, custom-built landing pages, automated SMS lead response system, and automated review generation system. Everything works together to turn "near me" searches into booked appointments.
              </p>
            </div>

            {/* FAQ Card 5 */}
            <div className={`faq-card ${activeFaqCategory !== 'all' && activeFaqCategory !== 'pricing' ? 'hidden' : ''}`} data-category="pricing">
              <div className="faq-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3 className="faq-card-question">What's the investment for your marketing system?</h3>
              <p className="faq-card-answer">
                Investment varies based on your market competition and business goals. We offer two main options: our complete marketing package for businesses ready to invest in a full solution, or our $199 photoshoot as a low-risk way to experience our quality and get started.
              </p>
            </div>

            {/* FAQ Card 6 */}
            <div className={`faq-card ${activeFaqCategory !== 'all' && activeFaqCategory !== 'process' ? 'hidden' : ''}`} data-category="process">
              <div className="faq-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                  <circle cx="12" cy="13" r="3"/>
                </svg>
              </div>
              <h3 className="faq-card-question">How does your automated SMS system work?</h3>
              <p className="faq-card-answer">
                We have two SMS systems: one texts new leads within minutes of their inquiry to maximize conversion, and another automatically asks happy customers for reviews. Both systems run on autopilot, ensuring you never miss a lead or opportunity to build your reputation.
              </p>
            </div>

            {/* FAQ Card 7 */}
            <div className={`faq-card ${activeFaqCategory !== 'all' && activeFaqCategory !== 'services' ? 'hidden' : ''}`} data-category="services">
              <div className="faq-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="faq-card-question">What if I'm not ready for the full marketing package?</h3>
              <p className="faq-card-answer">
                That's exactly why we offer our $199 photoshoot service! It's a 20-minute, on-site session to update your business photos for Google Business Profile and marketing. It's perfect for business owners who want to experience our quality before committing to the full system.
              </p>
            </div>

            {/* FAQ Card 8 */}
            <div className={`faq-card ${activeFaqCategory !== 'all' && activeFaqCategory !== 'results' ? 'hidden' : ''}`} data-category="results">
              <div className="faq-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h3 className="faq-card-question">What happens if I don't get results?</h3>
              <p className="faq-card-answer">
                Our system is built on proven methods that consistently work for local businesses. We focus only on strategies that turn "near me" searches into paying customers. If you're not seeing increased leads and appointments, we'll work with you to optimize until you do.
              </p>
            </div>

            {/* FAQ Card 9 */}
            <div className={`faq-card ${activeFaqCategory !== 'all' && activeFaqCategory !== 'process' ? 'hidden' : ''}`} data-category="process">
              <div className="faq-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
                </svg>
              </div>
              <h3 className="faq-card-question">How do you measure success for my business?</h3>
              <p className="faq-card-answer">
                We track what matters most: booked appointments and new customers. While we monitor PPC performance, landing page conversions, and lead response times, our ultimate measure of success is filling your appointment book with paying customers from local searches.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="faq-final-cta-section" id="contact">
            <h3 className="faq-final-cta-title">READY TO STOP LOSING CUSTOMERS?</h3>
            <p className="faq-final-cta-description">
              Apply for a strategy session to discuss how our proven system can fill your appointment book with local customers actively searching for your services.
            </p>
            <button className="faq-final-cta-button" onClick={openPanel}>
              APPLY FOR STRATEGY SESSION
            </button>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <button 
        className={`fab ${showFab ? 'show' : ''}`} 
        onClick={openPanel}
        aria-label="Open contact form"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <path d="M8 10h8"/>
          <path d="M8 14h4"/>
        </svg>
      </button>

      {/* Panel Overlay */}
      <div 
        className={`panel-overlay ${isPanelOpen ? 'active' : ''}`} 
        onClick={closePanel}
      ></div>

      {/* Side Panel */}
      <div className={`side-panel ${isPanelOpen ? 'active' : ''}`}>
        {/* Panel Header */}
        <div className="panel-header">
          <button 
            className="close-panel-btn" 
            onClick={closePanel}
            aria-label="Close form"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <h2 className="panel-title">Let's Get Started</h2>
          <p className="panel-subtitle">Tell us about your business and we'll create a custom strategy</p>
          
          {/* Phone Number */}
          <div className="panel-phone">
            <div className="phone-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div className="phone-content">
              <span className="phone-label">Prefer to call?</span>
              <a href="tel:+15551234567" className="phone-number">(555) 123-4567</a>
            </div>
          </div>
        </div>

        {/* Panel Content */}
        <div className="panel-content">
          <form id="bookingForm" className="booking-form" onSubmit={handleFormSubmit}>
            {/* Basic Information */}
            <div className="form-section" id="basicInfo">
              <div className="form-group">
                <label htmlFor="name">Full Name <span className="required">*</span></label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-input" 
                  placeholder="Enter your full name" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address <span className="required">*</span></label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-input" 
                  placeholder="Enter your email address" 
                  required 
                />
              </div>

              <button 
                type="button" 
                className="form-button expand-btn" 
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d={isExpanded ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"}/>
                </svg>
                {isExpanded ? 'Less Details' : 'Add More Details (Optional)'}
              </button>

              {!isExpanded && (
                <button type="submit" className="form-button">
                  Get My Free Quote
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                </button>
              )}
            </div>

            {/* Additional Information */}
            {isExpanded && (
              <div className="form-section expanded">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="form-input" 
                    placeholder="Enter your phone number" 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="business">Business Name</label>
                  <input 
                    type="text" 
                    id="business" 
                    name="business" 
                    className="form-input" 
                    placeholder="Enter your business name" 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="industry">Industry</label>
                  <select id="industry" name="industry" className="form-input">
                    <option value="">Select your industry</option>
                    <option value="restaurant">Restaurant & Food Service</option>
                    <option value="retail">Retail & E-commerce</option>
                    <option value="healthcare">Healthcare & Medical</option>
                    <option value="professional">Professional Services</option>
                    <option value="home-services">Home Services</option>
                    <option value="automotive">Automotive</option>
                    <option value="fitness">Fitness & Wellness</option>
                    <option value="beauty">Beauty & Personal Care</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Monthly Marketing Budget</label>
                  <select id="budget" name="budget" className="form-input">
                    <option value="">Select your budget range</option>
                    <option value="under-500">Under $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="over-5000">Over $5,000</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tell Us About Your Goals</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    className="form-input form-textarea" 
                    placeholder="What are your main business goals? What challenges are you facing? Any specific services you're interested in?"
                  ></textarea>
                </div>

                <button type="submit" className="form-button">
                  Submit Request
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                </button>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer" role="contentinfo" aria-label="Site Footer">
        <style jsx>{`
          .footer {
            background: rgba(35, 39, 47, 0.96) !important;
            backdrop-filter: blur(20px) !important;
            -webkit-backdrop-filter: blur(20px) !important;
            border-top: 1px solid hsl(var(--creative-primary) / 0.1) !important;
            padding: 4rem 0 2rem 0 !important;
            position: relative !important;
            overflow: hidden !important;
          }

          .footer::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background:
              radial-gradient(circle at 30% 20%, hsl(var(--creative-accent) / 0.04) 0%, transparent 60%),
              radial-gradient(circle at 70% 80%, hsl(var(--creative-accent) / 0.03) 0%, transparent 60%) !important;
            z-index: 1 !important;
            pointer-events: none !important;
          }

          .footer-container {
            max-width: 1200px !important;
            margin: 0 auto !important;
            padding: 0 2rem !important;
            position: relative !important;
            z-index: 2 !important;
          }

          .footer-content {
            display: grid !important;
            grid-template-columns: 1fr 1fr 1fr 1fr !important;
            gap: 3rem !important;
            margin-bottom: 3rem !important;
          }

          .footer-brand {
            display: flex !important;
            flex-direction: column !important;
            gap: 1.5rem !important;
          }

          .footer-logo {
            display: flex !important;
            align-items: center !important;
            gap: 0.75rem !important;
            text-decoration: none !important;
            color: #ef4444 !important;
            font-size: 2rem !important;
            font-weight: 900 !important;
          }

          .footer-logo-icon {
            width: 2.5rem !important;
            height: 2.5rem !important;
          }

          .footer-logo-icon svg {
            width: 100% !important;
            height: 100% !important;
          }

          .footer-description {
            color: #a0aec0 !important;
            font-size: 0.875rem !important;
            line-height: 1.6 !important;
            margin: 0 !important;
            max-width: 280px !important;
          }

          .footer-cta {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 0.875rem 1.75rem !important;
            background: #ef4444 !important;
            color: white !important;
            text-decoration: none !important;
            font-weight: 700 !important;
            font-size: 0.875rem !important;
            text-transform: uppercase !important;
            letter-spacing: 0.025em !important;
            border-radius: 8px !important;
            transition: all 0.3s ease !important;
            width: fit-content !important;
          }

          .footer-cta:hover {
            background: #dc2626 !important;
            transform: translateY(-1px) !important;
          }

          .footer-column {
            display: flex !important;
            flex-direction: column !important;
            gap: 1rem !important;
          }

          .footer-column-title {
            color: white !important;
            font-size: 1rem !important;
            font-weight: 700 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.05em !important;
            margin: 0 0 0.5rem 0 !important;
          }

          .footer-link {
            color: #a0aec0 !important;
            text-decoration: none !important;
            font-size: 0.875rem !important;
            line-height: 1.5 !important;
            transition: color 0.3s ease !important;
          }

          .footer-link:hover {
            color: #ef4444 !important;
          }

          .footer-contact-item {
            display: flex !important;
            align-items: flex-start !important;
            gap: 0.75rem !important;
            margin-bottom: 1rem !important;
          }

          .footer-contact-icon {
            width: 1.25rem !important;
            height: 1.25rem !important;
            flex-shrink: 0 !important;
            margin-top: 0.125rem !important;
          }

          .footer-contact-icon svg {
            width: 100% !important;
            height: 100% !important;
            stroke: #ef4444 !important;
            fill: none !important;
            stroke-width: 2 !important;
          }

          .footer-contact-item span {
            color: #a0aec0 !important;
            font-size: 0.875rem !important;
            line-height: 1.5 !important;
          }

          .footer-social {
            display: flex !important;
            gap: 1rem !important;
            margin-top: 1rem !important;
          }

          .footer-social-link {
            width: 2.5rem !important;
            height: 2.5rem !important;
            background: #4a5568 !important;
            border-radius: 50% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transition: all 0.3s ease !important;
            text-decoration: none !important;
          }

          .footer-social-link:hover {
            background: #ef4444 !important;
            transform: translateY(-2px) !important;
          }

          .footer-social-link svg {
            width: 1.25rem !important;
            height: 1.25rem !important;
            stroke: white !important;
            fill: none !important;
            stroke-width: 2 !important;
          }

          .footer-bottom {
            border-top: 1px solid #4a5568 !important;
            padding-top: 2rem !important;
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            flex-wrap: wrap !important;
            gap: 1rem !important;
          }

          .footer-copyright {
            color: #a0aec0 !important;
            font-size: 0.875rem !important;
          }

          .footer-legal {
            display: flex !important;
            gap: 2rem !important;
          }

          .footer-legal-link {
            color: #a0aec0 !important;
            text-decoration: none !important;
            font-size: 0.875rem !important;
            transition: color 0.3s ease !important;
          }

          .footer-legal-link:hover {
            color: #ef4444 !important;
          }

          @media (max-width: 1024px) {
            .footer-content {
              grid-template-columns: 1fr 1fr !important;
              gap: 2rem !important;
            }
          }

          @media (max-width: 768px) {
            .footer {
              padding: 3rem 0 2rem 0 !important;
            }
            
            .footer-container {
              padding: 0 1rem !important;
            }
            
            .footer-content {
              grid-template-columns: 1fr 1fr !important;
              gap: 2rem !important;
              text-align: center !important;
            }
            
            .footer-brand {
              align-items: center !important;
            }
            
            .footer-cta {
              margin-left: auto !important;
              margin-right: auto !important;
            }
            
            .footer-bottom {
              flex-direction: column !important;
              text-align: center !important;
            }
            
            .footer-legal {
              justify-content: center !important;
            }
          }

        `}</style>
        
        <div className="footer-container">
          {/* Footer Content */}
          <div className="footer-content">
            {/* Brand Column */}
            <div className="footer-brand">
              <a href="#home" className="footer-logo" aria-label="Red Ox Digital Home">
                <div className="footer-logo-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="92.97 187 1222.71 404.74">
                    <defs>
                      <style>
                        {`.st0 { fill: #ef4444; }`}
                      </style>
                    </defs>
                    <g id="Layer_3">
                      <path className="st0" d="M936.915,578.467V187.451c9.351,0,18.404-.037,27.456.006,54.59.261,109.328-1.901,163.735,1.396,77.447,4.694,138.203,39.631,170.651,112.684,32.043,72.142,18.939,163.536-42.531,221.503-31.496,29.701-69.729,45.986-112.183,52.047-17.193,2.455-34.747,3.086-52.148,3.236-48.408.416-96.821.144-145.232.144h-9.748ZM1039.529,382.82c0,33.858.123,67.716-.122,101.572-.041,5.61,1.456,7.446,7.198,7.348,19.073-.326,38.165.27,57.231-.231,21.834-.573,42.556-5.965,60.805-18.329,36.958-25.038,54.084-70.24,43.885-114.478-11.133-48.286-41.181-76.486-90.858-82.052-23.095-2.588-46.648-.913-69.973-1.744-7.132-.254-8.36,2.403-8.307,8.76.274,33.049.127,66.102.142,99.153Z"/>
                    </g>
                    <g id="o">
                      <g id="Layer_2">
                        <path className="st0" d="M195.475,454.205v123.876h-102.509V188.692c2.126-.304,4.153-.85,6.179-.846,66.676.138,133.384-.853,200.016.95,40.917,1.107,77.883,15.236,105.626,47.383,24.019,27.832,29.655,61.292,27.383,96.576-1.957,30.391-13.576,56.93-36.248,77.531-12.833,11.661-27.255,21.574-42.16,33.21,29.644,43.915,59.849,88.662,90.584,134.194-2.394.303-4.07.698-5.746.7-34.684.044-69.369.16-104.05-.152-3.073-.028-7.326-2.096-8.998-4.583-25.313-37.634-50.356-75.451-75.241-113.37-2.783-4.242-5.5-6.373-10.853-6.22-14.183.407-28.385.138-43.982.138ZM195.724,372.133c1.205.142,2.484.424,3.761.422,25.792-.042,51.585-.009,77.375-.269,5.581-.056,11.274-.653,16.705-1.909,23.843-5.516,38.976-26.236,37.698-51.1-1.132-22.014-19.093-41.012-43.054-42.417-28.907-1.696-57.94-1.198-86.915-1.818-5.076-.109-5.613,2.622-5.605,6.603.063,29.812.034,59.623.034,90.489Z"/>
                      </g>
                    </g>
                    <g id="ox">
                      <path className="st0" d="M683.028,187.046c-111.916,0-202.642,90.594-202.642,202.348,0,69.51,33.602,133.136,88.566,167.263l.09-1.055-.09-.045s3.347-215.705,3.347-220.134c33.219,0,66.437-6.644,79.725-8.858,55.364-11.073,88.583-62.008,95.227-81.939,6.644-19.931,4.429,2.215,2.215,28.789-6.644,44.292-46.506,70.866-55.364,75.296-8.858,2.215-2.215,11.073-2.215,11.073,0,0,73.081,108.514,86.368,124.016,15.502,13.287,6.644,24.36,6.644,24.36-6.644,15.502-22.146,33.219-22.146,33.219-11.073,11.073-44.292-8.858-106.3-4.429-33.134,2.367-40.901,41.908-40.901,41.908l-.008-.004c-.235,1.067-.214,1.32-.214,1.321,0,0,.002,0,.002.001,20.559,9.032,43.955,11.566,67.695,11.566,111.916,0,202.642-90.594,202.642-202.348s-90.726-202.348-202.642-202.348Z"/>
                      <g id="Layer_1">
                        <path className="st0" d="M687.696,411.97c-6.743-5.669-12.43-10.45-18.468-15.526,5.432-3.886,11.593-5.32,16.917-1.56,5.763,4.07,3.96,10.301,1.551,17.086Z"/>
                      </g>
                    </g>
                  </svg>
                </div>
                ROD
              </a>
              <p className="footer-description">
                Transforming local businesses into market leaders through proven digital marketing strategies and local SEO expertise.
              </p>
              <button className="footer-cta" onClick={openPanel}>
                GET STARTED TODAY
              </button>
            </div>

            {/* Services Column */}
            <div className="footer-column">
              <h3 className="footer-column-title">SERVICES</h3>
              <a href="#services" className="footer-link">Our Services</a>
              <a href="#photography-services" className="footer-link">Offer</a>
              <a href="#how-it-works" className="footer-link">How It Works</a>
              <a href="#faq" className="footer-link">FAQ</a>
              <a href="#contact" className="footer-link">Contact Us</a>
            </div>

            {/* Quick Links Column */}
            <div className="footer-column">
              <h3 className="footer-column-title">QUICK LINKS</h3>
              <a href="#home" className="footer-link">Home</a>
              <a href="#services" className="footer-link">Services Overview</a>
              <a href="#photography-services" className="footer-link">Offer Package</a>
              <a href="#how-it-works" className="footer-link">Our Process</a>
              <a href="#faq" className="footer-link">Questions & Answers</a>
            </div>

            {/* Contact Column */}
            <div className="footer-column">
              <h3 className="footer-column-title">CONTACT</h3>
              
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <span>(555) 123-4567</span>
              </div>

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <span>hello@redoxdigital.com</span>
              </div>

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <span>Serving Local Businesses<br/>Nationwide</span>
              </div>

              {/* Social Links */}
              <div className="footer-social">
                <a href="#facebook" className="footer-social-link" aria-label="Follow us on Facebook">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="#twitter" className="footer-social-link" aria-label="Follow us on Twitter">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                  </svg>
                </a>
                <a href="#linkedin" className="footer-social-link" aria-label="Connect with us on LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href="#instagram" className="footer-social-link" aria-label="Follow us on Instagram">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-copyright">
              © 2025 Red Ox Digital. All rights reserved.
            </div>
            <div className="footer-legal">
              <a href="#contact" className="footer-legal-link">Contact Us</a>
              <a href="#services" className="footer-legal-link">Services</a>
              <a href="#faq" className="footer-legal-link">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default HomePage
