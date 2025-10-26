import React from 'react'
import logoSvg from '../../assets/o svg-cropped.svg'

const FooterSection = ({ onCtaClick }) => {
  return (
    <footer className="footer" role="contentinfo" aria-label="Site Footer">
      <style jsx>{`
        .footer {
          background: rgba(35, 39, 47, 0.96) !important;
          backdrop-filter: blur(20px) !important;
          -webkit-backdrop-filter: blur(20px) !important;
          border-top: 1px solid hsl(var(--creative-primary) / 0.1) !important;
          padding: 4rem 0 2rem 0 !important;
          position: relative !important;
          overflow: hidden !important;
        }

        .footer::before {
          content: '' !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          background:
            radial-gradient(circle at 30% 20%, hsl(var(--creative-accent) / 0.04) 0%, transparent 60%),
            radial-gradient(circle at 70% 80%, hsl(var(--creative-accent) / 0.03) 0%, transparent 60%) !important;
          z-index: 1 !important;
          pointer-events: none !important;
        }

        .footer-container {
          max-width: 1200px !important;
          margin: 0 auto !important;
          padding: 0 2rem !important;
          position: relative !important;
          z-index: 2 !important;
        }

        .footer-content {
          display: grid !important;
          grid-template-columns: 1fr 1fr 1fr 1fr !important;
          gap: 3rem !important;
          margin-bottom: 3rem !important;
        }

        .footer-brand {
          display: flex !important;
          flex-direction: column !important;
          gap: 1.5rem !important;
        }

        .footer-logo {
          display: flex !important;
          align-items: center !important;
          gap: 0.75rem !important;
          text-decoration: none !important;
          color: #ef4444 !important;
          font-size: 2rem !important;
          font-weight: 900 !important;
        }

        .footer-logo-icon {
          width: 2.5rem !important;
          height: 2.5rem !important;
        }

        .footer-logo-icon svg {
          width: 100% !important;
          height: 100% !important;
        }

        .footer-description {
          color: #a0aec0 !important;
          font-size: 0.875rem !important;
          line-height: 1.6 !important;
          margin: 0 !important;
          max-width: 280px !important;
        }

        .footer-cta {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 0.875rem 1.75rem !important;
          background: #ef4444 !important;
          color: white !important;
          text-decoration: none !important;
          font-weight: 700 !important;
          font-size: 0.875rem !important;
          text-transform: uppercase !important;
          letter-spacing: 0.025em !important;
          border-radius: 8px !important;
          transition: all 0.3s ease !important;
          width: fit-content !important;
          border: none !important;
          cursor: pointer !important;
        }

        .footer-cta:hover {
          background: #dc2626 !important;
          transform: translateY(-1px) !important;
        }

        .footer-column {
          display: flex !important;
          flex-direction: column !important;
          gap: 1rem !important;
        }

        .footer-column-title {
          color: white !important;
          font-size: 1rem !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.05em !important;
          margin: 0 0 0.5rem 0 !important;
        }

        .footer-link {
          color: #a0aec0 !important;
          text-decoration: none !important;
          font-size: 0.875rem !important;
          line-height: 1.5 !important;
          transition: color 0.3s ease !important;
        }

        .footer-link:hover {
          color: #ef4444 !important;
        }

        .footer-contact-item {
          display: flex !important;
          align-items: flex-start !important;
          gap: 0.75rem !important;
          margin-bottom: 1rem !important;
        }

        .footer-contact-icon {
          width: 1.25rem !important;
          height: 1.25rem !important;
          flex-shrink: 0 !important;
          margin-top: 0.125rem !important;
        }

        .footer-contact-icon svg {
          width: 100% !important;
          height: 100% !important;
          stroke: #ef4444 !important;
          fill: none !important;
          stroke-width: 2 !important;
        }

        .footer-contact-item span {
          color: #a0aec0 !important;
          font-size: 0.875rem !important;
          line-height: 1.5 !important;
        }

        .footer-social {
          display: flex !important;
          gap: 1rem !important;
          margin-top: 1rem !important;
        }

        .footer-social-link {
          width: 2.5rem !important;
          height: 2.5rem !important;
          background: #4a5568 !important;
          border-radius: 50% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          transition: all 0.3s ease !important;
          text-decoration: none !important;
        }

        .footer-social-link:hover {
          background: #ef4444 !important;
          transform: translateY(-2px) !important;
        }

        .footer-social-link svg {
          width: 1.25rem !important;
          height: 1.25rem !important;
          stroke: white !important;
          fill: none !important;
          stroke-width: 2 !important;
        }

        .footer-bottom {
          border-top: 1px solid #4a5568 !important;
          padding-top: 2rem !important;
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
          flex-wrap: wrap !important;
          gap: 1rem !important;
        }

        .footer-copyright {
          color: #a0aec0 !important;
          font-size: 0.875rem !important;
        }

        .footer-legal {
          display: flex !important;
          gap: 2rem !important;
        }

        .footer-legal-link {
          color: #a0aec0 !important;
          text-decoration: none !important;
          font-size: 0.875rem !important;
          transition: color 0.3s ease !important;
        }

        .footer-legal-link:hover {
          color: #ef4444 !important;
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 3rem 0 2rem 0 !important;
          }
          
          .footer-container {
            padding: 0 1rem !important;
          }
          
          .footer-content {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
            text-align: center !important;
          }
          
          .footer-brand {
            align-items: center !important;
          }
          
          .footer-cta {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          
          .footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
          }
          
          .footer-legal {
            justify-content: center !important;
          }
        }
      `}</style>
      
      <div className="footer-container">
        {/* Footer Content */}
        <div className="footer-content">
          {/* Brand Column */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo" aria-label="Red Ox Digital Home">
              <div className="footer-logo-icon" aria-hidden="true">
                <img src={logoSvg} alt="Red Ox Digital Logo" />
              </div>
              ROD
            </a>
            <p className="footer-description">
              Transforming local businesses into automated growth machines through proven sales funnels and marketing automation expertise.
            </p>
            <button className="footer-cta" onClick={onCtaClick}>
              GET STARTED TODAY
            </button>
          </div>

          {/* Services Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">SERVICES</h3>
            <a href="#services" className="footer-link">Our Services</a>
            <a href="#photography-services" className="footer-link">Introductory Offer</a>
            <a href="#how-it-works" className="footer-link">How It Works</a>
            <a href="#faq" className="footer-link">FAQ</a>
            <a href="#contact" className="footer-link">Contact Us</a>
          </div>

          {/* Quick Links Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">QUICK LINKS</h3>
            <a href="#home" className="footer-link">Home</a>
            <a href="#services" className="footer-link">Services Overview</a>
            <a href="#photography-services" className="footer-link">Introductory Offer</a>
            <a href="#how-it-works" className="footer-link">Our Process</a>
            <a href="#faq" className="footer-link">Questions & Answers</a>
          </div>

          {/* Contact Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">CONTACT</h3>
            
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <span>0493 992 661</span>
            </div>

            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <span>info@redoxdigital.com.au</span>
            </div>

            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <span>Serving Local Businesses<br/>Gold Coast Brisbane Sunshine Coast</span>
            </div>

            {/* Social Links */}
            <div className="footer-social">
              <a href="#facebook" className="footer-social-link" aria-label="Follow us on Facebook">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#twitter" className="footer-social-link" aria-label="Follow us on Twitter">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="#linkedin" className="footer-social-link" aria-label="Connect with us on LinkedIn">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#instagram" className="footer-social-link" aria-label="Follow us on Instagram">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2025 Red Ox Digital. All rights reserved.
          </div>
          <div className="footer-legal">
            <a href="#contact" className="footer-legal-link">Contact Us</a>
            <a href="#services" className="footer-legal-link">Services</a>
            <a href="#faq" className="footer-legal-link">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection

