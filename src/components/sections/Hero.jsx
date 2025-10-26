import React, { useEffect } from 'react'
import logoSvg from '../../assets/o svg-cropped.svg'

const Hero = ({ onCtaClick }) => {
  // Image Loading with Alternative Paths
  const tryAlternativeImagePaths = (img) => {
    const imagePaths = [
      '/Images/ab2cccf2-7d2e-4bcf-8aba-5d606ce8992f.webp',
      './Images/ab2cccf2-7d2e-4bcf-8aba-5d606ce8992f.webp',
      'Images/ab2cccf2-7d2e-4bcf-8aba-5d606ce8992f.webp',
      '../Images/ab2cccf2-7d2e-4bcf-8aba-5d606ce8992f.webp',
      '../../Images/ab2cccf2-7d2e-4bcf-8aba-5d606ce8992f.webp'
    ]
    
    let currentIndex = 0
    const originalSrc = img.src
    
    const tryNextPath = () => {
      if (currentIndex < imagePaths.length) {
        console.log(`Trying image path ${currentIndex + 1}/${imagePaths.length}: ${imagePaths[currentIndex]}`)
        img.src = imagePaths[currentIndex]
        currentIndex++
      } else {
        console.error('All ab2cccf2-7d2e-4bcf-8aba-5d606ce8992f.webp image paths failed. Original src:', originalSrc)
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

  useEffect(() => {
    // Add a small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      // Check if image loads on page load
      const img = document.getElementById('hero-background-image')
      if (img && !img.complete) {
        console.log('Background image not loaded on DOMContentLoaded, checking...')
        if (img.naturalWidth === 0) {
          console.log('Funnel hero image failed to load naturally, trying alternatives...')
          tryAlternativeImagePaths(img)
        }
      } else if (img && img.complete) {
        console.log('Funnel hero image loaded successfully on DOMContentLoaded:', img.src)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section 
      className="hero-container" 
      id="home" 
      role="banner" 
      aria-label="Red Ox Digital Local Business Hero Section"
      style={{
        position: 'relative',
        width: '100vw',
        minHeight: '100vh',
        overflow: 'hidden',
        isolation: 'isolate',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      }}
    >
      {/* Background Elements */}
      <div 
        className="hero-background" 
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0
        }}
      ></div>
      
      {/* 3D Isometric Image Behind Text */}
      <div 
        className="hero-image" 
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 1
        }}
      >
        <img 
          id="hero-background-image" 
          src="/Images/ab2cccf2-7d2e-4bcf-8aba-5d606ce8992f.webp" 
          alt="Sales funnel visualization showing customer journey from awareness to conversion" 
          width="1920"
          height="1080"
          loading="eager"
          decoding="async"
          fetchpriority="high"
          className="background-image"
          onError={(e) => tryAlternativeImagePaths(e.target)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block'
          }}
        />
      </div>

      {/* Main Content Wrapper - Matches navbar container */}
      <div className="hero-content-wrapper">
        <div className="hero-content" id="main-content">
          <h1 className="hero-eyebrow">
            Digital Strategy Consulting for Brisbane & Gold Coast Service Businesses
          </h1>

          <h2 className="hero-headline">
            Views to Leads. Leads to Sales. <span className="highlight">Sales to Advocates.</span>
          </h2>

          <p className="hero-subheading">
            We handle the strategy to make it happen.
          </p>

          <button
            className="cta-button"
            role="button"
            aria-label="Start Growing - Contact Red Ox Digital to grow your business"
            onClick={onCtaClick}
          >
            Start Growing
          </button>
        </div>
      </div>

      {/* Screen Reader Description */}
      <div className="sr-only">
        <p>Hero section featuring a sales funnel visualization showing customer journey from awareness to conversion, representing Red Ox Digital's sales optimization services and emphasizing maximizing leads and conversions through strategic marketing solutions.</p>
      </div>
    </section>
  )
}

export default Hero

