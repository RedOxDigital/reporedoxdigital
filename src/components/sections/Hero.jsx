import React from 'react'

const Hero = ({ onCtaClick }) => {
  return (
    <section 
      className="hero-container" 
      id="home" 
      role="banner" 
      aria-label="Red Ox Digital ROI Hero Section"
      style={{
        position: 'relative',
        width: '100vw',
        minHeight: '100vh',
        overflow: 'hidden',
        background: '#ffffff',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      }}
    >
      {/* Main Content Wrapper */}
      <div className="hero-content-wrapper">
        <div className="hero-content" id="main-content">
          {/* Headline/Slogan */}
          <h1 className="hero-headline">
            Stop Accepting Clicks. Start Demanding Profit.
          </h1>

          {/* Key Value Proposition with Vertical Red Line */}
          <div className="hero-value-prop">
            <span className="hero-value-text">$1 Spent = $3 BACK</span>
            <span className="hero-value-line"></span>
          </div>

          {/* Descriptive Paragraph */}
          <p className="hero-description">
            We build strategy that actually drives this, then implement it with precision and a fraction of the cost
          </p>

          {/* Two CTA Buttons */}
          <div className="hero-cta-group">
            <button
              className="cta-button cta-primary"
              role="button"
              aria-label="Apply for 3x Marketing for Profit"
              onClick={onCtaClick}
            >
              Apply for 3 x Marketing for Profit
            </button>
            <button
              className="cta-button cta-secondary"
              role="button"
              aria-label="See our $1 = 3+ Back Offer"
              onClick={() => {
                const profitReadySection = document.getElementById('profit-ready-visuals')
                if (profitReadySection) {
                  profitReadySection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              See our $1 = 3+ Back Offer
            </button>
          </div>
        </div>
      </div>

      {/* Screen Reader Description */}
      <div className="sr-only">
        <p>Hero section emphasizing Red Ox Digital's ROI-focused approach with a clear value proposition of $1 spent equals $3 back, featuring call-to-action buttons for custom blueprint and pricing information.</p>
      </div>
    </section>
  )
}

export default Hero

