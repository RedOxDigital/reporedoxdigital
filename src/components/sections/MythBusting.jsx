import React, { useEffect } from 'react'

const MythBusting = ({ onCtaClick }) => {
  useEffect(() => {
    // Parallax effect for myth-busting section (contained within section only)
    const handleParallaxScroll = () => {
      const parallaxImage = document.querySelector('#myth-parallax-image')
      const mythSection = document.querySelector('.myth-busting-section')
      
      if (parallaxImage && mythSection) {
        const sectionRect = mythSection.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // Calculate how much of the section is visible
        if (sectionRect.top < windowHeight && sectionRect.bottom > 0) {
          // Calculate the scroll position relative to when section enters viewport
          const sectionScrollProgress = (windowHeight - sectionRect.top) / (windowHeight + sectionRect.height)
          const parallaxSpeed = 0.5
          const maxScroll = 100 // Maximum pixels to scroll
          
          const translateY = sectionScrollProgress * maxScroll * parallaxSpeed
          parallaxImage.style.transform = `translateY(${translateY}px)`
        }
      }
    }

    window.addEventListener('scroll', handleParallaxScroll)
    
    // Trigger parallax on load
    handleParallaxScroll()

    return () => window.removeEventListener('scroll', handleParallaxScroll)
  }, [])

  return (
    <section className="myth-busting-section" aria-label="Common Marketing Myths Debunked">
      <style jsx>{`
        .myth-busting-section {
          padding: 6rem 2rem !important;
          background: transparent !important;
          position: relative !important;
          overflow: hidden !important;
          min-height: 100vh !important;
        }

        .parallax-background {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          z-index: 0 !important;
          overflow: hidden !important;
        }

        .parallax-background img {
          width: 100% !important;
          height: 120% !important;
          object-fit: cover !important;
          display: block !important;
          transform: translateY(0) !important;
          will-change: transform !important;
          opacity: 1 !important;
        }

        .myth-section {
          max-width: 1200px !important;
          margin: 0 auto !important;
          position: relative !important;
          z-index: 3 !important;
        }

        .myth-header {
          text-align: center !important;
          margin-bottom: 4rem !important;
          background: rgba(35, 39, 47, 0.6) !important;
          backdrop-filter: blur(20px) !important;
          -webkit-backdrop-filter: blur(20px) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 24px !important;
          padding: 3rem 2rem !important;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
        }

        .myth-label {
          display: inline-block !important;
          padding: 0.5rem 1.5rem !important;
          background: linear-gradient(135deg, 
            hsl(var(--creative-accent) / 0.15) 0%, 
            hsl(var(--creative-accent) / 0.08) 100%) !important;
          border: 1px solid hsl(var(--creative-accent) / 0.3) !important;
          border-radius: 50px !important;
          font-size: 0.875rem !important;
          font-weight: 700 !important;
          color: hsl(var(--creative-accent)) !important;
          text-transform: uppercase !important;
          letter-spacing: 0.1em !important;
          margin-bottom: 2rem !important;
        }

        .myth-title {
          font-size: clamp(2.5rem, 5vw, 4rem) !important;
          font-weight: 900 !important;
          line-height: 1.1 !important;
          margin-bottom: 1.5rem !important;
          letter-spacing: -0.02em !important;
          color: hsl(var(--creative-accent)) !important;
          text-transform: uppercase !important;
        }

        .myth-subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.25rem) !important;
          color: hsl(var(--text-secondary)) !important;
          max-width: 700px !important;
          margin: 0 auto !important;
          line-height: 1.6 !important;
        }

        .myth-grid {
          display: grid !important;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)) !important;
          gap: 2rem !important;
          margin-bottom: 3rem !important;
        }

        .myth-card {
          background: rgba(35, 39, 47, 0.5) !important;
          backdrop-filter: blur(16px) !important;
          -webkit-backdrop-filter: blur(16px) !important;
          border-radius: 20px !important;
          padding: 3rem 2rem !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          transition: var(--transition-creative) !important;
          position: relative !important;
          overflow: hidden !important;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
        }

        .myth-card::before {
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

        .myth-card:hover {
          transform: translateY(-8px) !important;
          background: rgba(35, 39, 47, 0.65) !important;
          border-color: rgba(239, 68, 68, 0.3) !important;
          box-shadow: 
            0 20px 40px rgba(239, 68, 68, 0.2),
            0 8px 32px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.15) !important;
        }

        .card-icon {
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

        .card-icon svg {
          width: 2rem !important;
          height: 2rem !important;
          stroke: hsl(var(--creative-accent)) !important;
          fill: none !important;
          stroke-width: 2 !important;
        }

        .card-title {
          font-size: 1.25rem !important;
          font-weight: 800 !important;
          color: hsl(var(--text-primary)) !important;
          margin-bottom: 1rem !important;
          letter-spacing: 0.025em !important;
          text-align: center !important;
        }

        .card-description {
          font-size: 1rem !important;
          line-height: 1.6 !important;
          color: hsl(var(--text-secondary)) !important;
          font-weight: 400 !important;
          text-align: center !important;
        }

        .myth-final-cta {
          background: rgba(35, 39, 47, 0.6) !important;
          backdrop-filter: blur(20px) !important;
          -webkit-backdrop-filter: blur(20px) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 24px !important;
          padding: 4rem 3rem !important;
          text-align: center !important;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
          margin-top: 3rem !important;
        }

        .final-cta-title {
          font-size: clamp(1.5rem, 4vw, 2.5rem) !important;
          font-weight: 900 !important;
          color: hsl(var(--text-primary)) !important;
          margin-bottom: 1.5rem !important;
          letter-spacing: -0.01em !important;
          max-width: 700px !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }

        .final-cta-description {
          font-size: clamp(1rem, 2vw, 1.15rem) !important;
          color: hsl(var(--text-secondary)) !important;
          margin-bottom: 2rem !important;
          max-width: 600px !important;
          line-height: 1.6 !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }

        .myth-cta {
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
          border: none !important;
          cursor: pointer !important;
        }

        .myth-cta::before {
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

        .myth-cta:hover {
          transform: translateY(-2px) !important;
          box-shadow: 
            0 12px 32px hsl(var(--creative-accent) / 0.4),
            0 6px 16px rgba(0, 0, 0, 0.15) !important;
        }

        .myth-cta:hover::before {
          left: 100% !important;
        }

        @media (max-width: 768px) {
          .myth-busting-section {
            padding: 4rem 1rem !important;
          }

          .parallax-background {
            position: absolute !important;
            height: 100% !important;
          }

          .myth-header {
            margin-bottom: 3rem !important;
            padding: 2rem 1.5rem !important;
          }

          .myth-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          .myth-card {
            padding: 2.5rem 1.5rem !important;
          }

          .myth-final-cta {
            padding: 3rem 2rem !important;
          }

          .myth-cta {
            padding: 1rem 2rem !important;
            font-size: 1rem !important;
            width: 100% !important;
          }
        }
      `}</style>

      {/* Parallax Background */}
      <div className="parallax-background">
        <img 
          id="myth-parallax-image"
          src="/Images/SEQlandingpage.webp" 
          alt="SEQ landing page background"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="myth-section">
        {/* Header */}
        <div className="myth-header">
          <div className="myth-label">You've Heard All The Advice</div>
          <h2 className="myth-title">"You need social posts."<br />"You need Google Ads."</h2>
          <p className="myth-subtitle">
            You hear terms like SEO & PPC, but it feels fragmented and hasn't driven any meaningful results.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="myth-grid">
          {/* Card 1 */}
          <div className="myth-card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="9" y1="9" x2="15" y2="9"/>
                <line x1="9" y1="15" x2="15" y2="15"/>
              </svg>
            </div>
            <h3 className="card-title">The Real Problem: It's Fragmented</h3>
            <p className="card-description">
              Your social posts are random. Your Google Ads burn cash. Your website wasn't built to convert. It's a system guaranteed to fail.
            </p>
          </div>

          {/* Card 2 */}
          <div className="myth-card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="15" y1="9" x2="9" y2="15"/>
                <line x1="9" y1="9" x2="15" y2="15"/>
              </svg>
            </div>
            <h3 className="card-title">It's Not All Beating to the Same Drum</h3>
            <p className="card-description">
              You're left in the middle, managing a handful of services that don't talk to each other. It's not a sales machine working 24/7 for you.
            </p>
          </div>

          {/* Card 3 */}
          <div className="myth-card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
              </svg>
            </div>
            <h3 className="card-title">Stop Juggling. Get One Partner.</h3>
            <p className="card-description">
              You don't need more tools or more confusing jargon. You just need one team to step in and manage it all.
            </p>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="myth-final-cta">
          <h3 className="final-cta-title">Dedicated to a Single Objective</h3>
          <p className="final-cta-description">
            Our system changes that. We execute one cohesive plan connecting your ads, social, email, and website, all managed by one team with a single objective: measurable results.
          </p>
          <button className="myth-cta" onClick={onCtaClick}>
            BUILD YOUR UNIFIED SYSTEM
          </button>
        </div>
      </div>
    </section>
  )
}

export default MythBusting

