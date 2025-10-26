import React from 'react'

const SidePanel = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Panel Overlay */}
      <div 
        className={`panel-overlay ${isOpen ? 'active' : ''}`} 
        onClick={onClose}
      ></div>

      {/* Side Panel */}
      <div className={`side-panel ${isOpen ? 'active' : ''}`}>
        {/* Panel Header */}
        <div className="panel-header">
          <button 
            className="close-panel-btn" 
            onClick={onClose}
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
              <a href="tel:+61493992661" className="phone-number">0493 992 661</a>
            </div>
          </div>
        </div>

        {/* Panel Content */}
        <div className="panel-content">
          {/* JotForm Iframe */}
          <div className="jotform-container">
            <iframe
              id="JotFormIFrame-252807783245060"
              title="Client Intake Form"
              onload="window.parent.scrollTo(0,0)"
              allowtransparency="true"
              allow="geolocation; microphone; camera; fullscreen; payment"
              src="https://form.jotform.com/252807783245060"
              frameborder="0"
              style={{
                minWidth: '100%',
                maxWidth: '100%',
                height: '600px',
                border: 'none'
              }}
              scrolling="auto"
            />
            <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
            <script dangerouslySetInnerHTML={{
              __html: "window.jotformEmbedHandler(\"iframe[id='JotFormIFrame-252807783245060']\", \"https://form.jotform.com/\")"
            }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default SidePanel

