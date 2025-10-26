import React from 'react'
import logoSvg from '../../assets/o svg-cropped.svg'

const NavigationBar = ({ 
  isScrolled, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen, 
  activeSection, 
  onSmoothScroll,
  onCtaClick 
}) => {
  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className="navbar-logo" aria-label="Red Ox Digital Home">
          <div className="navbar-logo-icon" aria-hidden="true">
            <img src={logoSvg} alt="Red Ox Digital Logo" />
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="navbar-nav">
          <a 
            href="#home" 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(e) => onSmoothScroll(e, '#home')}
          >
            Home
          </a>
          <a 
            href="#services" 
            className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
            onClick={(e) => onSmoothScroll(e, '#services')}
          >
            Services
          </a>
          <a 
            href="#how-it-works" 
            className={`nav-link ${activeSection === 'how-it-works' ? 'active' : ''}`}
            onClick={(e) => onSmoothScroll(e, '#how-it-works')}
          >
            How It Works
          </a>
          <a
            href="#photography-services"
            className={`nav-link ${activeSection === 'photography-services' ? 'active' : ''}`}
            onClick={(e) => onSmoothScroll(e, '#photography-services')}
          >
            Offer
          </a>
          <a 
            href="#faq" 
            className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`}
            onClick={(e) => onSmoothScroll(e, '#faq')}
          >
            FAQ
          </a>
          <a 
            href="#contact" 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={(e) => onSmoothScroll(e, '#contact')}
          >
            Contact
          </a>
          <button 
            className="nav-cta"
            onClick={onCtaClick}
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
          <a href="#home" className="mobile-nav-link" onClick={(e) => onSmoothScroll(e, '#home')}>Home</a>
          <a href="#services" className="mobile-nav-link" onClick={(e) => onSmoothScroll(e, '#services')}>Services</a>
          <a href="#how-it-works" className="mobile-nav-link" onClick={(e) => onSmoothScroll(e, '#how-it-works')}>How It Works</a>
          <a href="#photography-services" className="mobile-nav-link" onClick={(e) => onSmoothScroll(e, '#photography-services')}>Offer</a>
          <a href="#faq" className="mobile-nav-link" onClick={(e) => onSmoothScroll(e, '#faq')}>FAQ</a>
          <a href="#contact" className="mobile-nav-link" onClick={(e) => onSmoothScroll(e, '#contact')}>Contact</a>
          <button className="mobile-nav-link" onClick={onCtaClick}>Get Quote</button>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar

