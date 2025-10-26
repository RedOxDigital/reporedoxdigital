import React from 'react'

const Services = ({ onCtaClick }) => {
  return (
    <section 
      className="services-section" 
      id="services" 
      aria-label="Red Ox Digital Services"
      style={{
        backgroundImage: 'url(/Images/efc00c6f-e15b-4511-a68a-50afc308c11c.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        position: 'relative'
      }}
    >
      {/* Background overlay to prevent overtaking hero */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        zIndex: 0
      }}></div>
      
      <div className="services-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Services Header */}
        <div className="services-header">
          <h2 className="services-title">
            Your Blueprint for Sustainable Digital Growth
          </h2>
          <p className="services-subtitle">
            You're ready to stop wasting money on marketing that doesn't make sense.<br/><br/>
            We'll create a clear, comprehensive plan for you. We make all your online efforts work together, so that every dollar you spend is working towards your business goals.
          </p>
          <button className="services-cta-primary" onClick={onCtaClick}>
            BUILD MY STRATEGY
          </button>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {/* Your Complete Online Review & Plan */}
          <div className="service-card">
            <div className="service-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <h3 className="service-title">Your Complete Online Review & Plan</h3>
            <p className="service-description">First, we look at everything you're currently doing online. We also look at what your competitors are doing. From this, we build a simple, step-by-step plan that guides all our decisions.</p>
          </div>

          {/* Connecting All Your Marketing Efforts */}
          <div className="service-card">
            <div className="service-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v6m0 6v6"/>
                <path d="m5.64 5.64 4.24 4.24m6.36 6.36 4.24 4.24"/>
                <path d="M1 12h6m6 0h6"/>
                <path d="m5.64 18.36 4.24-4.24m6.36-6.36 4.24-4.24"/>
              </svg>
            </div>
            <h3 className="service-title">Connecting All Your Marketing Efforts</h3>
            <p className="service-description">We make sure your website, social media, and email marketing all work together as one team. This creates a smooth and professional experience for your customers.</p>
          </div>

          {/* Creating Your Message & Building Trust */}
          <div className="service-card">
            <div className="service-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                <path d="M12 7v6"/>
                <path d="M12 17h.01"/>
              </svg>
            </div>
            <h3 className="service-title">Creating Your Message & Building Trust</h3>
            <p className="service-description">We help you find the right words and content (like articles or social media posts) to attract your ideal customers. This shows you're an expert in your field and builds trust in your brand.</p>
          </div>

          {/* Understanding Your Customer's Path */}
          <div className="service-card">
            <div className="service-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10H12V2Z"/>
                <path d="M12 2v10h10"/>
              </svg>
            </div>
            <h3 className="service-title">Understanding Your Customer's Path</h3>
            <p className="service-description">We map out the simple path a person takes from first hearing about you to becoming a happy customer. This helps us know exactly what they need at each step, making them feel valued.</p>
          </div>

          {/* Using Data to Get Better Results */}
          <div className="service-card">
            <div className="service-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="20" x2="12" y2="10"/>
                <line x1="18" y1="20" x2="18" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="16"/>
              </svg>
            </div>
            <h3 className="service-title">Using Data to Get Better Results</h3>
            <p className="service-description">We track your results and turn confusing numbers into simple, actionable insights. We'll show you (in plain English) what's working, what's not, and how we can improve.</p>
          </div>

          {/* Clear Reports & Planning for Growth */}
          <div className="service-card">
            <div className="service-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18"/>
                <path d="m19 9-5 5-4-4-3 3"/>
                <circle cx="19" cy="9" r="2"/>
              </svg>
            </div>
            <h3 className="service-title">Clear Reports & Planning for Growth</h3>
            <p className="service-description">We give you easy-to-understand reports that show your progress. As your business grows, we'll make sure your marketing strategy grows with you, so you're always ready for the next step.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

