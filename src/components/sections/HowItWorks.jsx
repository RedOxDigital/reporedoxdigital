import React from 'react'

const HowItWorks = ({ onCtaClick }) => {
  return (
    <section className="how-it-works-section" id="how-it-works" aria-label="How Our Process Works">
      <div className="how-it-works-container">
        <style jsx>{`
          .how-it-works-section {
            padding: 8rem 2rem !important;
            margin: 0 !important;
            background: linear-gradient(180deg,
              hsl(142 76% 36% / 0.03) 0%,
              hsl(142 76% 36% / 0.02) 10%,
              hsl(var(--creative-accent) / 0.03) 30%,
              hsl(var(--creative-accent) / 0.04) 50%,
              hsl(var(--creative-accent) / 0.02) 70%,
              transparent 100%) !important;
            position: relative !important;
            overflow: hidden !important;
          }

          .how-it-works-section::before {
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

          /* Disable diamond grid overlay to match PAS/FAQ */
          .how-it-works-section::after {
            content: none !important;
          }

          .how-it-works-container {
            max-width: 1200px !important;
            margin: 0 auto !important;
            position: relative !important;
            z-index: 2 !important;
          }

          .how-it-works-header {
            text-align: center !important;
            margin-bottom: 6rem !important;
          }

          .how-it-works-title {
            font-size: clamp(2.5rem, 5vw, 4rem) !important;
            font-weight: 900 !important;
            color: hsl(var(--text-primary)) !important;
            margin-bottom: 2rem !important;
            line-height: 1.1 !important;
            letter-spacing: -0.02em !important;
          }

          .how-it-works-subtitle {
            font-size: clamp(1.1rem, 2.5vw, 1.25rem) !important;
            color: hsl(var(--text-secondary)) !important;
            max-width: 800px !important;
            margin: 0 auto !important;
            line-height: 1.6 !important;
          }

          .steps-grid {
            display: grid !important;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
            gap: 2rem !important;
            margin-bottom: 6rem !important;
          }

          @media (min-width: 1024px) {
            .steps-grid {
              grid-template-columns: repeat(4, 1fr) !important;
              gap: 2rem !important;
            }
          }

          .step-card {
            background: hsl(var(--creative-secondary)) !important;
            border-radius: 20px !important;
            padding: 3rem 2rem !important;
            text-align: center !important;
            position: relative !important;
            transition: var(--transition-creative) !important;
            border: 1px solid hsl(var(--border-color)) !important;
            overflow: hidden !important;
          }

          .step-card::before {
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

          .step-card:hover {
            transform: translateY(-8px) !important;
            box-shadow: 
              0 20px 40px hsl(var(--creative-accent) / 0.15),
              0 8px 16px rgba(0, 0, 0, 0.1) !important;
          }

          .step-number {
            position: absolute !important;
            top: 1.5rem !important;
            right: 1.5rem !important;
            width: 3rem !important;
            height: 3rem !important;
            background: hsl(var(--creative-accent)) !important;
            color: hsl(var(--creative-primary)) !important;
            border-radius: 50% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            font-weight: 900 !important;
            font-size: 1.25rem !important;
            box-shadow: 0 4px 12px hsl(var(--creative-accent) / 0.3) !important;
          }

          .step-icon {
            width: 4rem !important;
            height: 4rem !important;
            margin: 0 auto 2rem auto !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            background: linear-gradient(135deg, 
              hsl(var(--creative-accent) / 0.1) 0%, 
              hsl(var(--creative-accent) / 0.05) 100%) !important;
            border-radius: 16px !important;
            position: relative !important;
          }

          .step-icon svg {
            width: 2rem !important;
            height: 2rem !important;
            stroke: hsl(var(--creative-accent)) !important;
            fill: none !important;
            stroke-width: 2 !important;
          }

          .step-title {
            font-size: 1.25rem !important;
            font-weight: 800 !important;
            color: hsl(var(--text-primary)) !important;
            margin-bottom: 1.5rem !important;
            letter-spacing: 0.025em !important;
          }

          .step-description {
            font-size: 1rem !important;
            line-height: 1.6 !important;
            color: hsl(var(--text-secondary)) !important;
            font-weight: 400 !important;
          }

          .final-cta-section {
            text-align: center !important;
            background: linear-gradient(135deg, 
              hsl(var(--creative-accent) / 0.1) 0%, 
              hsl(var(--creative-accent) / 0.05) 100%) !important;
            border-radius: 24px !important;
            padding: 4rem 2rem !important;
            border: 1px solid hsl(var(--creative-accent) / 0.2) !important;
          }

          .final-cta-title {
            font-size: clamp(1.75rem, 4vw, 2.5rem) !important;
            font-weight: 900 !important;
            color: hsl(var(--text-primary)) !important;
            margin-bottom: 1.5rem !important;
            letter-spacing: -0.01em !important;
          }

          .final-cta-description {
            font-size: 1.1rem !important;
            color: hsl(var(--text-secondary)) !important;
            margin-bottom: 2.5rem !important;
            max-width: 600px !important;
            margin-left: auto !important;
            margin-right: auto !important;
            line-height: 1.6 !important;
          }

          .final-cta-button {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 1.25rem 3rem !important;
            background: linear-gradient(135deg, 
              hsl(var(--creative-accent)) 0%, 
              hsl(var(--creative-accent) / 0.9) 100%) !important;
            color: hsl(var(--creative-primary)) !important;
            text-decoration: none !important;
            font-weight: 700 !important;
            font-size: 1.1rem !important;
            letter-spacing: 0.025em !important;
            border-radius: 16px !important;
            transition: var(--transition-creative) !important;
            position: relative !important;
            overflow: hidden !important;
            box-shadow: 
              0 8px 24px hsl(var(--creative-accent) / 0.3),
              0 4px 12px rgba(0, 0, 0, 0.1) !important;
            text-transform: uppercase !important;
            border: none !important;
            cursor: pointer !important;
          }

          .final-cta-button::before {
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

          .final-cta-button:hover {
            transform: translateY(-2px) !important;
            box-shadow: 
              0 12px 32px hsl(var(--creative-accent) / 0.4),
              0 6px 16px rgba(0, 0, 0, 0.15) !important;
          }

          .final-cta-button:hover::before {
            left: 100% !important;
          }

          @media (max-width: 768px) {
            .how-it-works-section {
              padding: 6rem 0 !important;
            }
            
            .how-it-works-header {
              margin-bottom: 4rem !important;
            }
            
            .steps-grid {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
              margin-bottom: 4rem !important;
            }
            
            .step-card {
              padding: 2.5rem 1.5rem !important;
            }
            
            .final-cta-section {
              padding: 3rem 1.5rem !important;
            }
          }
        `}</style>
        {/* Header */}
        <div className="how-it-works-header">
          <h2 className="how-it-works-title">
            From a Disconnected Strategy to a<br/>
            <span className="highlight">Growth Blueprint</span>
          </h2>
          <p className="how-it-works-subtitle">
            You're ready to stop the guesswork and have a clear plan. Our proven 4-step process connects all the pieces so your marketing works together to find new customers and build lasting trust. Here's exactly how we build your plan.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="steps-grid">
          {/* Step 1: The Complete Review & Plan */}
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </div>
            <h3 className="step-title">The Complete Review & Plan</h3>
            <p className="step-description">
              First, we look at everything you're currently doing online and what your competitors are doing. From this, we build a simple, step-by-step plan that guides all our decisions.
            </p>
          </div>

          {/* Step 2: Connect, Create & Build Trust */}
          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="21" x2="4" y2="14"/>
                <line x1="4" y1="10" x2="4" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12" y2="3"/>
                <line x1="20" y1="21" x2="20" y2="16"/>
                <line x1="20" y1="12" x2="20" y2="3"/>
                <line x1="1" y1="14" x2="7" y2="14"/>
                <line x1="9" y1="8" x2="15" y2="8"/>
                <line x1="17" y1="16" x2="23" y2="16"/>
              </svg>
            </div>
            <h3 className="step-title">Connect, Create & Build Trust</h3>
            <p className="step-description">
              We make your website, social media, and email marketing work together as one team. We help you find the right words and content (like articles or posts) to attract your ideal customers and build trust in your brand.
            </p>
          </div>

          {/* Step 3: Implement Your Customer's Path */}
          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
              </svg>
            </div>
            <h3 className="step-title">Implement Your Customer's Path</h3>
            <p className="step-description">
              We map out the simple path a person takes from first hearing about you to becoming a happy customer. We then implement the connected strategy, ensuring we know exactly what they need at each step.
            </p>
          </div>

          {/* Step 4: Measure, Improve & Grow */}
          <div className="step-card">
            <div className="step-number">4</div>
            <div className="step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
              </svg>
            </div>
            <h3 className="step-title">Measure, Improve & Grow</h3>
            <p className="step-description">
              We track your results and turn confusing numbers into simple, actionable insights. We show you (in plain English) what's working and what's not, and as your business grows, we make sure your marketing strategy grows with you.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="final-cta-section">
          <h3 className="final-cta-title">READY TO GET STARTED?</h3>
          <p className="final-cta-description">
            Join hundreds of local businesses who have automated their sales and revenue with our proven system.
          </p>
          <button className="final-cta-button" onClick={onCtaClick}>
            START YOUR TRANSFORMATION
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

