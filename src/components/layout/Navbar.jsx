import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className={`navbar-dramatic fixed top-0 w-full z-50 py-4 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="w-full flex flex-col lg:flex-row">
          <div className="flex justify-between lg:flex-row">
            {/* Logo Section */}
            <a href="/" className="flex items-center">
              <div className={`logo-dramatic ${isScrolled ? 'scrolled' : ''}`}>
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className={`ml-2 text-xl font-heading font-bold ${isScrolled ? 'text-gray-800' : 'text-white text-glow'}`}>
                Client Brand
              </span>
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              type="button"
              className={`inline-flex items-center p-2 ml-3 text-sm rounded-lg lg:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              aria-controls="navbar-nav-without-ul" 
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden w-full lg:flex lg:pl-11" id="navbar-nav-without-ul">
            <div className="flex items-center flex-col mt-4 lg:mt-0 md:ml-auto max-lg:gap-5 lg:flex-row">
              <a href="#home" className={`nav-link-dramatic ${isScrolled ? 'scrolled' : ''}`}>Home</a>
              <a href="#about" className={`nav-link-dramatic ${isScrolled ? 'scrolled' : ''}`}>About Us</a>
              <a href="#services" className={`nav-link-dramatic ${isScrolled ? 'scrolled' : ''}`}>Services</a>
              <a href="#contact" className={`nav-link-dramatic ${isScrolled ? 'scrolled' : ''}`}>Contact</a>
              <a href="#quote" className={`nav-cta-dramatic ml-4 ${isScrolled ? 'scrolled' : ''}`}>Get Quote</a>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden`} id="mobile-menu">
          <div className="mobile-menu-dramatic p-4">
            <a href="#home" className="mobile-nav-link-dramatic block">Home</a>
            <a href="#about" className="mobile-nav-link-dramatic block">About Us</a>
            <a href="#services" className="mobile-nav-link-dramatic block">Services</a>
            <a href="#contact" className="mobile-nav-link-dramatic block">Contact</a>
            <a href="#quote" className="mobile-nav-link-dramatic block font-semibold text-blue-600">Get Quote</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
