import React from 'react'

const ProblemAgitationSolution = ({ onCtaClick }) => {
  return (
    <div 
      className="pas-container" 
      style={{
        display: 'block',
        gridTemplateColumns: 'unset',
        gap: 'unset',
        position: 'relative',
        backgroundImage: 'url(/Images/8e6b7521-7448-4358-9d52-d5baa5b6c7d8.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        isolation: 'isolate'
      }}
    >
      {/* Background overlay for readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        zIndex: 0
      }}></div>

      <style jsx>{`
        .pas-container {
          position: relative !important;
          overflow: hidden !important;
          padding: 6rem 2rem 2rem 2rem !important;
          margin: 0 auto !important;
          width: 100% !important;
          max-width: 100vw !important;
        }

        .problem-section,
        .agitation-section,
        .solution-section {
          padding: 0 0 4rem 0 !important;
          background: transparent !important;
          position: relative !important;
          overflow: hidden !important;
          z-index: 1 !important;
        }

        .problem-container,
        .agitation-container,
        .solution-container {
          max-width: 1400px !important;
          margin: 0 auto !important;
          position: relative !important;
          z-index: 2 !important;
          display: grid !important;
          grid-template-columns: 1fr 1fr !important;
          gap: 6rem !important;
          align-items: center !important;
          padding: 0 4rem !important;
          width: 100% !important;
        }

        .problem-icon-overlay,
        .agitation-icon-overlay,
        .solution-icon-overlay {
          position: absolute !important;
          top: 30% !important;
          left: 25% !important;
          transform: translate(-50%, -50%) !important;
          z-index: 10 !important;
          pointer-events: none !important;
        }

        /* Position the green solution SVG over the phone (bottom-right) */
        .solution-icon-overlay {
          top: auto !important;
          left: auto !important;
          right: 16px !important;
          bottom: 16px !important;
          transform: none !important;
        }

        .problem-icon,
        .agitation-icon,
        .solution-icon {
          width: 140px !important;
          height: 140px !important;
          background: linear-gradient(135deg, 
            hsl(var(--creative-accent) / 0.15) 0%, 
            hsl(var(--creative-accent) / 0.05) 100%) !important;
          border: 2px solid hsl(var(--creative-accent) / 0.3) !important;
          border-radius: 20px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          position: relative !important;
          transition: var(--transition-creative) !important;
          box-shadow: 
            0 0 20px hsl(var(--creative-accent) / 0.6),
            0 0 40px hsl(var(--creative-accent) / 0.4),
            0 0 80px hsl(var(--creative-accent) / 0.3),
            0 0 120px hsl(var(--creative-accent) / 0.2),
            inset 0 0 30px hsl(var(--creative-accent) / 0.1) !important;
          animation: icon-glow-pulse 2.5s ease-in-out infinite !important;
        }

        .solution-icon {
          background: linear-gradient(135deg, 
            hsl(142 76% 36% / 0.15) 0%, 
            hsl(142 76% 36% / 0.05) 100%) !important;
          border: 2px solid hsl(142 76% 36% / 0.3) !important;
          box-shadow: 
            0 0 20px hsl(142 76% 36% / 0.6),
            0 0 40px hsl(142 76% 36% / 0.4),
            0 0 80px hsl(142 76% 36% / 0.3),
            0 0 120px hsl(142 76% 36% / 0.2),
            inset 0 0 30px hsl(142 76% 36% / 0.1) !important;
        }

        .problem-icon::before,
        .agitation-icon::before,
        .solution-icon::before {
          content: '' !important;
          position: absolute !important;
          top: -20px !important;
          left: -20px !important;
          right: -20px !important;
          bottom: -20px !important;
          border: 2px solid hsl(var(--creative-accent) / 0.2) !important;
          border-radius: 50% !important;
          animation: outer-ring-pulse 2.5s ease-in-out infinite !important;
        }

        .solution-icon::before {
          border: 2px solid hsl(142 76% 36% / 0.2) !important;
        }

        .problem-icon::after,
        .agitation-icon::after,
        .solution-icon::after {
          content: '' !important;
          position: absolute !important;
          top: -40px !important;
          left: -40px !important;
          right: -40px !important;
          bottom: -40px !important;
          border: 1px solid hsl(var(--creative-accent) / 0.1) !important;
          border-radius: 50% !important;
          animation: outer-ring-pulse 2.5s ease-in-out infinite 0.5s !important;
        }

        .solution-icon::after {
          border: 1px solid hsl(142 76% 36% / 0.1) !important;
        }

        .problem-icon svg,
        .agitation-icon svg,
        .solution-icon svg {
          width: 60px !important;
          height: 60px !important;
          stroke: hsl(var(--creative-accent)) !important;
          stroke-width: 2 !important;
          stroke-linecap: round !important;
          stroke-linejoin: round !important;
          filter: drop-shadow(0 0 10px hsl(var(--creative-accent) / 0.8)) !important;
          z-index: 1 !important;
        }

        .solution-icon svg {
          stroke: hsl(142 76% 36%) !important;
          filter: drop-shadow(0 0 10px hsl(142 76% 36% / 0.8)) !important;
        }

        @keyframes icon-glow-pulse {
          0%, 100% {
            box-shadow: 
              0 0 20px hsl(var(--creative-accent) / 0.6),
              0 0 40px hsl(var(--creative-accent) / 0.4),
              0 0 80px hsl(var(--creative-accent) / 0.3),
              0 0 120px hsl(var(--creative-accent) / 0.2),
              inset 0 0 30px hsl(var(--creative-accent) / 0.1);
            border-color: hsl(var(--creative-accent) / 0.3);
          }
          50% {
            box-shadow: 
              0 0 30px hsl(var(--creative-accent) / 0.8),
              0 0 60px hsl(var(--creative-accent) / 0.6),
              0 0 120px hsl(var(--creative-accent) / 0.4),
              0 0 180px hsl(var(--creative-accent) / 0.3),
              inset 0 0 40px hsl(var(--creative-accent) / 0.15);
            border-color: hsl(var(--creative-accent) / 0.5);
          }
        }

        @keyframes outer-ring-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.6;
          }
        }

        .problem-image,
        .agitation-image,
        .solution-image {
          position: relative !important;
          border-radius: 24px !important;
          overflow: hidden !important;
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.2),
            0 8px 24px rgba(0, 0, 0, 0.1) !important;
        }

        .problem-bg-image,
        .agitation-bg-image,
        .solution-bg-image {
          width: 100% !important;
          height: auto !important;
          min-height: 500px !important;
          object-fit: cover !important;
          transition: var(--transition-creative) !important;
        }

        .problem-title,
        .agitation-title,
        .solution-title {
          font-size: clamp(2rem, 4.5vw, 3.2rem) !important;
          font-weight: 800 !important;
          line-height: 1.1 !important;
          margin-bottom: 1.2rem !important;
          letter-spacing: -0.02em !important;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
          text-transform: uppercase !important;
        }

        .problem-title {
          color: hsl(var(--creative-accent)) !important;
        }

        .agitation-title {
          color: hsl(var(--creative-accent)) !important;
        }

        .solution-title {
          color: hsl(142 76% 36%) !important;
        }

        .problem-cta,
        .agitation-cta,
        .solution-cta {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 1rem 2rem !important;
          background: linear-gradient(135deg, 
            hsl(var(--creative-accent)) 0%, 
            hsl(var(--creative-accent) / 0.9) 100%) !important;
          color: hsl(var(--creative-primary)) !important;
          text-decoration: none !important;
          font-weight: 700 !important;
          font-size: 1rem !important;
          letter-spacing: 0.025em !important;
          border-radius: 12px !important;
          transition: var(--transition-creative) !important;
          position: relative !important;
          overflow: hidden !important;
          box-shadow: 
            0 8px 24px hsl(var(--creative-accent) / 0.3),
            0 4px 12px rgba(0, 0, 0, 0.1) !important;
          text-transform: uppercase !important;
          margin-top: 2rem !important;
          border: none !important;
          cursor: pointer !important;
        }

        .solution-cta {
          background: linear-gradient(135deg, 
            hsl(142 76% 36%) 0%, 
            hsl(142 76% 36% / 0.9) 100%) !important;
          box-shadow: 
            0 8px 24px hsl(142 76% 36% / 0.3),
            0 4px 12px rgba(0, 0, 0, 0.1) !important;
        }

        .problem-cta::before,
        .agitation-cta::before,
        .solution-cta::before {
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

        .problem-cta:hover,
        .agitation-cta:hover,
        .solution-cta:hover {
          transform: translateY(-2px) !important;
          box-shadow: 
            0 12px 32px hsl(var(--creative-accent) / 0.4),
            0 6px 16px rgba(0, 0, 0, 0.15) !important;
        }

        .solution-cta:hover {
          box-shadow: 
            0 12px 32px hsl(142 76% 36% / 0.4),
            0 6px 16px rgba(0, 0, 0, 0.15) !important;
        }

        .problem-cta:hover::before,
        .agitation-cta:hover::before,
        .solution-cta:hover::before {
          left: 100% !important;
        }

        .problem-description,
        .agitation-description,
        .solution-description {
          font-size: clamp(1rem, 2.2vw, 1.15rem) !important;
          line-height: 1.6 !important;
          color: hsl(var(--text-secondary)) !important;
          margin-bottom: 2rem !important;
          font-weight: 400 !important;
          max-width: 500px !important;
        }

        @media (max-width: 768px) {
          .pas-container {
            padding: 4rem 0 2rem 0 !important;
            margin: 0 !important;
          }
          
          .problem-section,
          .agitation-section,
          .solution-section {
            padding: 0 0 2rem 0 !important;
          }
          
          .problem-container,
          .agitation-container,
          .solution-container {
            padding: 0 1rem !important;
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            text-align: center !important;
          }

          /* Ensure Text-Picture order on mobile for all PAS sections */
          .problem-content,
          .agitation-content,
          .solution-content {
            order: 1 !important;
            padding-right: 0 !important;
            padding-left: 0 !important;
          }

          .problem-image,
          .agitation-image,
          .solution-image {
            order: 2 !important;
          }

          /* Ensure consistent spacing on mobile for all PAS sections */
          .problem-title,
          .agitation-title,
          .solution-title {
            font-size: clamp(2rem, 8vw, 3rem) !important;
            margin-bottom: 1.2rem !important;
          }

          .problem-description,
          .agitation-description,
          .solution-description {
            max-width: none !important;
            margin-bottom: 2rem !important;
          }
        }
      `}</style>
      
      {/* Problem Section */}
      <section className="problem-section" aria-label="Business Problem Identification">
        <div className="problem-container">
          {/* Problem Content */}
          <div className="problem-content">
            <h2 className="problem-title">
              STRUGGLING TO MAKE YOUR MARKETING WORK?
            </h2>
            <p className="problem-description">
              You have a website. You've tried boosting posts on social media. You've even put money into Google Ads. But nothing seems to connect, and you're not getting the results you hoped for.<br/><br/>
              You got into business to do what you love, not to be a full-time digital marketer. It feels like you're stuck on a hamster wheel, spending time and money without a clear return.
            </p>
          </div>

          {/* Problem Image */}
          <div className="problem-image">
            <img 
              src="/Images/Tradiebefound.png" 
              alt="Frustrated business owner working on laptop, missing out on local sales opportunities"
              width="800"
              height="600"
              className="problem-bg-image"
              loading="lazy"
              decoding="async"
            />
            
            {/* Single SVG Overlay */}
            <div className="problem-icon-overlay">
              <div className="problem-icon">
                {/* MapPin Icon - Represents location/visibility issues */}
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agitation Section */}
      <section className="agitation-section" aria-label="Business Agitation and Urgency">
        <div className="agitation-container">
          {/* Agitation Image - First on desktop, second on mobile */}
          <div className="agitation-image">
            <img 
              src="/Images/Gemini_Generated_Image_jx75ymjx75ymjx75.webp" 
              alt="Business owner losing customers to competitors due to poor online visibility"
              width="800"
              height="600"
              className="agitation-bg-image"
              loading="lazy"
              decoding="async"
            />
            
            {/* Single SVG Overlay */}
            <div className="agitation-icon-overlay">
              <div className="agitation-icon">
                {/* AlertTriangle Icon - Represents urgency and danger */}
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                  <path d="M12 9v4"/>
                  <path d="m12 17 .01 0"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Agitation Content - Second on desktop, first on mobile */}
          <div className="agitation-content">
            <h2 className="agitation-title">
              THE REAL COST OF A DISCONNECTED STRATEGY
            </h2>
            <p className="agitation-description">
              You know potential customers are slipping through the cracks. You're trying a bit of everything, but without a clear plan, your efforts are disconnected.<br/><br/>
              You know there must be a simpler, smarter way. This "scatter-gun" approach isn't just frustrating; it's actively costing you time and lost sales.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section" aria-label="Business Solution and Resolution">
        <div className="solution-container">
          {/* Solution Content */}
          <div className="solution-content">
            <h2 className="solution-title">
              WE BUILD YOUR<br/>
              <span className="highlight">GROWTH BLUEPRINT</span>
            </h2>
            <p className="solution-description">
              It's time to have a clear plan that works for you. We'll help you connect all the pieces, so your marketing works together to find new customers and build lasting trust.<br/><br/>
              We design a comprehensive, long-term strategy that gives your business a clear and predictable path to growth. Stop the guesswork and start seeing the real returns you deserve.
            </p>
            <button className="solution-cta" onClick={onCtaClick}>
              GET STARTED NOW
            </button>
          </div>

          {/* Solution Image */}
          <div className="solution-image">
            <img 
              src="/Images/Successful business owner celebrating increased local visibility and customer growth.png" 
              alt="Successful business owner celebrating increased local visibility and customer growth"
              width="800"
              height="600"
              className="solution-bg-image"
              loading="lazy"
              decoding="async"
            />
            
            {/* Single SVG Overlay */}
            <div className="solution-icon-overlay">
              <div className="solution-icon">
                {/* CheckCircle Icon - Represents success and completion */}
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22,4 12,14.01 9,11.01"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProblemAgitationSolution

