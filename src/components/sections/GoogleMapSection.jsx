import React from 'react'

const GoogleMapSection = () => {
  return (
    <section className="map-section" id="location" aria-label="Our Location">
      <style jsx>{`
        .map-section {
          padding: 4rem 2rem;
          background: hsl(var(--creative-secondary));
          position: relative;
        }

        .map-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .map-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .map-title {
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 400;
          color: hsl(var(--text-primary));
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .map-subtitle {
          font-size: clamp(1.125rem, 2vw, 1.5rem);
          color: hsl(var(--text-secondary));
          max-width: 600px;
          margin: 0 auto;
          font-weight: 400;
          line-height: 1.5;
        }

        .map-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .contact-info {
          background: hsl(220 25% 12%);
          border-radius: 20px;
          padding: 3rem 2rem;
          border: 1px solid hsl(var(--border-color));
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .contact-icon {
          width: 2.5rem;
          height: 2.5rem;
          background: linear-gradient(135deg, 
            hsl(var(--creative-accent) / 0.1) 0%, 
            hsl(var(--creative-accent) / 0.05) 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-icon svg {
          width: 1.25rem;
          height: 1.25rem;
          stroke: hsl(var(--creative-accent));
          fill: none;
          stroke-width: 2;
        }

        .contact-details h3 {
          font-size: 1.25rem;
          font-weight: 500;
          color: hsl(var(--text-primary));
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }

        .contact-details p,
        .contact-details a {
          font-size: 1.125rem;
          color: hsl(var(--text-secondary));
          text-decoration: none;
          line-height: 1.6;
          font-weight: 400;
        }

        .contact-details a:hover {
          color: hsl(var(--creative-accent));
        }

        .map-embed {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid hsl(var(--border-color));
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }

        .map-embed iframe {
          width: 100%;
          height: 500px;
          border: 0;
          display: block;
        }

        .service-area {
          margin-top: 2rem;
          padding: 1.5rem;
          background: linear-gradient(135deg, 
            hsl(var(--creative-accent) / 0.1) 0%, 
            hsl(var(--creative-accent) / 0.05) 100%);
          border-radius: 16px;
          border: 1px solid hsl(var(--creative-accent) / 0.2);
        }

        .service-area h3 {
          font-size: 1.125rem;
          font-weight: 500;
          color: hsl(var(--text-primary));
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }

        .service-area p {
          font-size: 1rem;
          color: hsl(var(--text-secondary));
          line-height: 1.6;
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .map-section {
            padding: 3rem 1rem;
          }

          .map-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-info {
            padding: 2rem 1.5rem;
          }

          .map-embed iframe {
            height: 350px;
          }
        }
      `}</style>

      <div className="map-container">
        <div className="map-header">
          <h2 className="map-title">Visit Us or Get in Touch</h2>
          <p className="map-subtitle">
            Serving Local Businesses across Gold Coast, Brisbane, and Sunshine Coast
          </p>
        </div>

        <div className="map-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Address</h3>
                <p>
                  Dakabin, QLD<br />
                  Australia
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <a href="tel:+61493992661">+61 493 992 661</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:info@redoxdigital.com.au">info@redoxdigital.com.au</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Business Hours</h3>
                <p>
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>

            <div className="service-area">
              <h3>Service Area</h3>
              <p>
                We proudly serve businesses across Gold Coast, Brisbane, and Sunshine Coast.
              </p>
            </div>
          </div>

          <div className="map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d634945.9206992692!2d152.89345841949122!3d-27.296978174032905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b93faeeb57ce147%3A0x502a35af3de8640!2sDakabin%20QLD%204503!5e1!3m2!1sen!2sau!4v1763103609102!5m2!1sen!2sau"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Red Ox Digital Location - Dakabin, QLD"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoogleMapSection

