import React, { useEffect, useState } from 'react'

const HomePageSimple = () => {
  console.log('HomePageSimple component rendering...')
  
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const openPanel = () => {
    setIsPanelOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closePanel = () => {
    setIsPanelOpen(false)
    setIsExpanded(false)
    document.body.style.overflow = ''
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We\'ve received your request.')
    closePanel()
  }

  useEffect(() => {
    console.log('HomePageSimple mounted')
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isPanelOpen) {
        closePanel()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isPanelOpen])

  console.log('HomePageSimple about to return JSX...')

  return (
    <>
      <style jsx>{`
        .hero-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 2rem;
        }
        
        .hero-content h1 {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 1rem;
          color: #ef4444;
        }
        
        .hero-content p {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        
        .cta-button {
          padding: 1rem 2rem;
          background: #ef4444;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .cta-button:hover {
          background: #dc2626;
          transform: translateY(-2px);
        }
        
        .panel-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        
        .panel-overlay.active {
          opacity: 1;
          visibility: visible;
        }
        
        .side-panel {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          max-width: 500px;
          height: 100vh;
          background: #2a2a2a;
          transform: translateX(100%);
          transition: transform 0.3s ease;
          z-index: 1000;
          overflow-y: auto;
          color: white;
        }
        
        .side-panel.active {
          transform: translateX(0);
        }
        
        .panel-header {
          padding: 2rem;
          border-bottom: 1px solid #444;
          position: relative;
        }
        
        .close-panel-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: white;
        }
        
        .panel-title {
          font-size: 1.75rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }
        
        .panel-subtitle {
          opacity: 0.8;
          margin-bottom: 1.5rem;
        }
        
        .panel-phone {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(239, 68, 68, 0.1);
          border-radius: 8px;
          padding: 1rem;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }
        
        .phone-icon {
          width: 2rem;
          height: 2rem;
          background: #ef4444;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .phone-number {
          font-weight: 700;
          color: white;
          text-decoration: none;
        }
        
        .panel-content {
          padding: 2rem;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .required {
          color: #ef4444;
        }
        
        .form-input {
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: white;
          font-size: 1rem;
        }
        
        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        
        .form-input:focus {
          outline: none;
          border-color: #ef4444;
          background: rgba(255, 255, 255, 0.15);
        }
        
        .form-button {
          width: 100%;
          padding: 1rem 2rem;
          background: #ef4444;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        
        .form-button:hover {
          background: #dc2626;
          transform: translateY(-1px);
        }
        
        .expand-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1rem;
        }
        
        .expand-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          color: white;
        }
        
        .form-section.expanded {
          animation: expandIn 0.3s ease-out;
        }
        
        @keyframes expandIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .form-textarea {
          resize: vertical;
          min-height: 120px;
          font-family: inherit;
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-container">
        <div className="hero-content">
          <h1>LOCAL CUSTOMERS,<br />MEET YOUR BUSINESS</h1>
          <p>Red Ox Digital Connects You</p>
          <button className="cta-button" onClick={openPanel}>
            GET ON THE MAP
          </button>
        </div>
      </section>

      {/* Panel Overlay */}
      <div 
        className={`panel-overlay ${isPanelOpen ? 'active' : ''}`} 
        onClick={closePanel}
      />

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
            <div>
              <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>Prefer to call?</div>
              <a href="tel:+61493992661" className="phone-number">0493 992 661</a>
            </div>
          </div>
        </div>

        {/* Panel Content */}
        <div className="panel-content">
          <form onSubmit={handleFormSubmit}>
            {/* Basic Information */}
            <div className="form-section">
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
                  <label htmlFor="message">Tell Us About Your Goals</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    className="form-input form-textarea" 
                    placeholder="What are your main business goals? What challenges are you facing?"
                  />
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
    </>
  )
}

export default HomePageSimple
