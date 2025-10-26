import React from 'react'

const PhotographyServices = ({ onCtaClick }) => {
  return (
    <section className="photography-services-section" id="photography-services" aria-label="Introductory Photography & Strategy Session">
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
          border: none !important;
          cursor: pointer !important;
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
              Introductory Photography &<br />
              <span className="highlight-text">Strategy Session</span>
            </h2>

            <p className="service-description">
              Capture Attention. Build Trust. Attract Your Ideal Customers.
            </p>

            <p className="service-description">
              Get started with our professional photography service at a special introductory rate. In today's digital world, generic or low-quality photos are costing you sales. This session is the first step in our Growth Blueprint, designed to build immediate trust and make your business the obvious choice for your ideal customers.
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
                  <div className="feature-title">On-Site Professional Photography</div>
                </div>
                <div className="feature-description">
                  Our professional photographer comes to your business for a convenient 20-minute session. We'll capture high-quality, authentic images that showcase you as the expert in your field and build trust in your brand.
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-header">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6-6.3 6.3-3.2-3.2-1.6 1.6a1 1 0 0 0 1.4 1.4l2.3-2.3 2.8 2.8a1 1 0 0 0 1.4-1.4l-7-7a1 1 0 0 0-1.4 0l-2.3 2.3a1 1 0 0 0 0 1.4l1.6 1.6-6.3 6.3-3.2-3.2-1.6 1.6a1 1 0 0 0 1.4 1.4l2.3-2.3 2.8 2.8a1 1 0 0 0 1.4-1.4l-7-7"/>
                    </svg>
                  </div>
                  <div className="feature-title">Your 'First Step' Growth Consultation</div>
                </div>
                <div className="feature-description">
                  Photos are just the start. We'll provide a simple plan on how to use your new images effectively across your website, social media, and Google Business Profile, ensuring all your marketing efforts start to work together.
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
                  <div className="feature-title">Optimized for All Your Marketing Efforts</div>
                </div>
                <div className="feature-description">
                  Your images are professionally edited, optimized for all your connected platforms, and delivered within 24 hours. This isn't just about looking good; it's about having the right assets to stop customers from scrolling past.
                </div>
              </div>
            </div>

            {/* Package Section */}
            <div className="package-section">
              <div className="package-card">
                <div className="package-label">Photography & Strategy Package</div>
                <div className="package-price">$199</div>
                <div className="package-duration">Complete "First Step" Package</div>

                <div className="package-features">
                  <div className="package-feature">
                    <div className="package-feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                    </div>
                    <span>20-minute professional photoshoot at your location</span>
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
                    <span>High-resolution digital files, optimized for all your platforms</span>
                  </div>
                  <div className="package-feature">
                    <div className="package-feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                    </div>
                    <span>Your 'First Step' consultation on using photos to build trust and convert leads</span>
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

                <button className="service-cta" onClick={onCtaClick}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                    <circle cx="12" cy="13" r="3"/>
                  </svg>
                  Book Your Photography Session
                </button>
              </div>

              <div className="guarantee-section">
                <div className="guarantee-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div className="guarantee-text">
                  <strong>Our Commitment:</strong> We are dedicated to providing a clear path to growth. We guarantee this session will give you the professional assets and simple, actionable insights you need to start seeing better results.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhotographyServices

