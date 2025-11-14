import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, Search, MapPin, Monitor, FileText, Camera, Video, ShieldCheck } from 'lucide-react'
import './ServicesHome.css'

const ServicesHome = ({ onCtaClick }) => {
  const [activeService1, setActiveService1] = useState(0)
  const [activeService2, setActiveService2] = useState(0)
  const [currentVisibleSection, setCurrentVisibleSection] = useState('group-1')
  
  const timersRef = useRef({})
  const section1Ref = useRef(null)
  const section2Ref = useRef(null)

  const servicesGroup1 = [
    {
      title: "Performance Advertising",
      description: "Deep market research and A/B testing to identify keywords and audiences that convert, maximizing your $1 spent = $3+ back goal.",
      icon: Target,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
      title: "SEO (Search Engine Optimization)",
      description: "Capture high-intent organic traffic with technical optimization and content strategy that ensures visibility when customers are searching.",
      icon: Search,
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600&fit=crop"
    },
    {
      title: "Local SEO",
      description: "Dominate your local market and become the first choice for customers in your area, driving foot traffic and local conversions.",
      icon: MapPin,
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop"
    },
    {
      title: "Web Design",
      description: "High-converting, user-friendly websites engineered for performance. Every element guides visitors towards conversion.",
      icon: Monitor,
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop"
    }
  ]

  const servicesGroup2 = [
    {
      title: "Landing Pages",
      description: "Hyper-focused landing pages with persuasive copy and clear CTAs, designed to convert paid traffic into leads and sales.",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop"
    },
    {
      title: "Photography",
      description: "Professional photography that captures your brand's essence and resonates with your audience, enhancing trust and engagement.",
      icon: Camera,
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop"
    },
    {
      title: "Videography",
      description: "Compelling video content from short-form ads to brand stories that connect with your audience and drive action.",
      icon: Video,
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=600&fit=crop"
    },
    {
      title: "Reputation Management",
      description: "Actively monitor, protect, and enhance your brand's image across all platforms, building trust essential for growth.",
      icon: ShieldCheck,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    }
  ]

  const stopAllAutoAdvance = () => {
    Object.keys(timersRef.current).forEach(key => {
      clearTimeout(timersRef.current[key])
      delete timersRef.current[key]
    })
  }

  const nextService = (groupId) => {
    if (groupId === 'group-1') {
      setActiveService1((prev) => (prev + 1) % servicesGroup1.length)
    } else if (groupId === 'group-2') {
      setActiveService2((prev) => (prev + 1) % servicesGroup2.length)
    }
  }

  const startAutoAdvance = (groupId) => {
    stopAllAutoAdvance()
    
    if (currentVisibleSection === groupId) {
      timersRef.current[groupId] = setTimeout(() => {
        nextService(groupId)
      }, 5000)
    }
  }

  const toggleService = (index, groupId) => {
    console.log('toggleService called:', index, groupId)
    
    if (groupId === 'group-1') {
      setActiveService1(index)
    } else if (groupId === 'group-2') {
      setActiveService2(index)
    }
    
    // Restart auto-advance for this group if it's visible
    if (currentVisibleSection === groupId) {
      startAutoAdvance(groupId)
    }
  }

  // Set up Intersection Observer
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.5
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section-id')
          stopAllAutoAdvance()
          setCurrentVisibleSection(sectionId)
        }
      })
    }, options)

    if (section1Ref.current) observer.observe(section1Ref.current)
    if (section2Ref.current) observer.observe(section2Ref.current)

    // Initially start with the first visible section
    setCurrentVisibleSection('group-1')

    return () => {
      if (section1Ref.current) observer.unobserve(section1Ref.current)
      if (section2Ref.current) observer.unobserve(section2Ref.current)
      stopAllAutoAdvance()
    }
  }, [])

  // Auto-advance effect - only depends on currentVisibleSection and active indices
  useEffect(() => {
    if (currentVisibleSection) {
      startAutoAdvance(currentVisibleSection)
    }
    
    return () => {
      stopAllAutoAdvance()
    }
  }, [currentVisibleSection, activeService1, activeService2])

  const renderServiceGroup = (services, activeIndex, groupId, imageLeft = false) => {
    return (
      <div 
        className="services-section" 
        ref={groupId === 'group-1' ? section1Ref : section2Ref} 
        data-section-id={groupId}
      >
        <div className={`services-grid ${imageLeft ? 'image-left' : ''}`} id={groupId}>
          <div className="services-list">
            {services.map((service, index) => {
              const IconComponent = service.icon
              const isActive = activeIndex === index
              
              return (
                <div key={index} className={`service-item ${isActive ? 'active' : ''}`}>
                  <button
                    className="service-header"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleService(index, groupId)
                    }}
                    onMouseDown={(e) => e.stopPropagation()}
                    aria-expanded={isActive}
                    aria-controls={`service-description-${groupId}-${index}`}
                    type="button"
                    style={{ pointerEvents: 'auto', zIndex: 10 }}
                  >
                    <motion.div 
                      className="service-icon"
                      animate={{
                        scale: isActive ? 1.05 : 1,
                        backgroundColor: isActive ? '#DC2626' : '#FEE2E2',
                        color: isActive ? 'white' : '#DC2626'
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ pointerEvents: 'none' }}
                    >
                      <IconComponent />
                    </motion.div>
                    <div className="service-title-wrapper" style={{ pointerEvents: 'none' }}>
                      <motion.h3 
                        className="service-title"
                        animate={{
                          color: isActive ? '#DC2626' : '#202124',
                          fontWeight: isActive ? 500 : 500
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {service.title}
                      </motion.h3>
                    </div>
                  </button>
                  <motion.div
                    id={`service-description-${groupId}-${index}`}
                    className="service-description"
                    initial={false}
                    animate={isActive ? { 
                      height: 'auto', 
                      opacity: 1,
                      paddingTop: 0,
                      paddingBottom: '24px',
                      backgroundColor: '#ffffff'
                    } : { 
                      height: 0, 
                      opacity: 0,
                      paddingTop: 0,
                      paddingBottom: 0,
                      backgroundColor: '#ffffff'
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    aria-hidden={!isActive}
                    style={{ overflow: 'hidden', backgroundColor: '#ffffff' }}
                  >
                    <p>{service.description}</p>
                  </motion.div>
                </div>
              )
            })}
          </div>

          <div className="image-area">
            <div className="image-box">
              <AnimatePresence mode="wait">
                {services.map((service, index) => {
                  if (activeIndex !== index) return null
                  
                  return (
                    <motion.div
                      key={index}
                      className="service-image active"
                      style={{ 
                        backgroundImage: `url('${service.image}')`
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      role="img"
                      aria-label={service.title}
                    />
                  )
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section 
      className="services-home-container" 
      id="services-home" 
      role="region" 
      aria-label="Red Ox Digital Services"
    >
      <div className="container">
        {/* Header Section */}
        <div className="header-section">
          <div className="label">OUR SERVICES</div>
          <h1 className="main-title">Your Business Shouldn't Accept One-Size-Fits-All</h1>
          <p className="intro-text">
            We reject cookie-cutter solutions. Our process begins with a deep dive into your specific market, your customers, and <strong>your ambition to grow</strong>.
          </p>
          <h2 className="section-title">Our Profit-Driving Services</h2>
        </div>

        {/* First 4 Services - Image on Right */}
        {renderServiceGroup(servicesGroup1, activeService1, 'group-1', false)}

        {/* Divider */}
        <div className="divider">⬇</div>

        {/* Next 4 Services - Image on Left */}
        {renderServiceGroup(servicesGroup2, activeService2, 'group-2', true)}
      </div>
    </section>
  )
}

export default ServicesHome
