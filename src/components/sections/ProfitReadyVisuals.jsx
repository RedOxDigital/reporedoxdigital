import React from 'react'
import { Camera, TrendingUp } from 'lucide-react'
import './ProfitReadyVisuals.css'

const ProfitReadyVisuals = ({ onCtaClick }) => {
  const deliverables = [
    {
      title: "20-Minute Professional Photoshoot",
      description: "Get stunning, high-quality images tailored specifically for your potential customers – perfect for your website, Google My Business, and social media.",
      icon: Camera
    },
    {
      title: "'Profit-Ready Visuals' Guide",
      description: "We'll provide a step-by-step guide demonstrating exactly how to leverage these assets across your digital channels to directly drive customer engagement, inquiries, and ultimately, turn this visual investment into $600+ in profit for your business.",
      icon: TrendingUp
    }
  ]

  // Bento grid images - using Unsplash images similar to the HTML variant
  const bentoImages = [
    {
      left: [
        "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=400&fit=crop&q=80",
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&h=400&fit=crop&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80"
      ],
      right: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80"
      ]
    }
  ]

  return (
    <section 
      className="profit-ready-container" 
      id="profit-ready-visuals" 
      role="region" 
      aria-label="Brisbane Local Profit Kickstart Offer"
    >
      <div className="content-wrapper">
        {/* Header Section */}
        <div className="header-section">
          <div className="location-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Brisbane Metro Area
          </div>
          <h2 className="main-title">Live in Brisbane & Ready for Proof?</h2>
        </div>

        {/* Offer Card */}
        <div style={{ textAlign: 'center' }}>
          <div className="offer-card">
            <span className="offer-text">Turn a $199 Photoshoot into</span>
            <span className="offer-price">$600+</span>
          </div>
        </div>

        {/* Description */}
        <p className="description">
          This exclusive offer for Brisbane businesses is your low-risk entry point to experience our <strong>digital marketing for profit</strong> approach firsthand. See how we deliver verifiable returns, not just vanity metrics.
        </p>

        {/* Main Content Grid: Deliverables Left, Bento Right */}
        <div className="main-content-grid">
          {/* Left: Deliverables */}
          <div className="deliverables-section">
            <div className="section-label">What's Included</div>
            
            {deliverables.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="deliverable-card">
                  <div className="deliverable-header">
                    <div className="deliverable-icon" aria-hidden="true">
                      <IconComponent size={32} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 className="deliverable-title">{item.title}</h4>
                    </div>
                  </div>
                  <p className="deliverable-description">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Right: Bento Grid Carousel - Dual Column */}
          <div className="bento-carousel">
            {/* Left Column - Scrolls Up */}
            <div className="bento-column up">
              <div className="bento-track">
                <div className="bento-grid">
                  {bentoImages[0].left.map((img, idx) => (
                    <div key={`left-${idx}`} className="bento-item">
                      <img 
                        src={img} 
                        alt={`Professional photography ${idx + 1}`} 
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                {/* Duplicate for seamless loop */}
                <div className="bento-grid">
                  {bentoImages[0].left.map((img, idx) => (
                    <div key={`left-dup-${idx}`} className="bento-item">
                      <img 
                        src={img} 
                        alt={`Professional photography ${idx + 1}`} 
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column - Scrolls Down */}
            <div className="bento-column down">
              <div className="bento-track">
                <div className="bento-grid">
                  {bentoImages[0].right.map((img, idx) => (
                    <div key={`right-${idx}`} className="bento-item">
                      <img 
                        src={img} 
                        alt={`Digital marketing ${idx + 1}`} 
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                {/* Duplicate for seamless loop */}
                <div className="bento-grid">
                  {bentoImages[0].right.map((img, idx) => (
                    <div key={`right-dup-${idx}`} className="bento-item">
                      <img 
                        src={img} 
                        alt={`Digital marketing ${idx + 1}`} 
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <button 
            className="cta-button" 
            onClick={onCtaClick}
            aria-label="Get Your Profit-Ready Visuals for $199"
          >
            Get Your Profit-Ready Visuals for $199!
          </button>
        </div>

        {/* Small Print */}
        <p className="small-print">
          Limited slots available each month. Offer exclusive to businesses operating in the Brisbane metro area.
        </p>
      </div>

      {/* Screen Reader Description */}
      <div className="sr-only">
        <p>Exclusive Brisbane offer: Professional photoshoot for $199 that generates $600+ in profit, including high-quality images and a profit-ready visuals guide for digital marketing success.</p>
      </div>
    </section>
  )
}

export default ProfitReadyVisuals
