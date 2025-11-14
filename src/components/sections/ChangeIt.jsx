import React, { useState } from 'react'

const ChangeIt = ({ onCtaClick }) => {
  const [activeTab, setActiveTab] = useState('profit-first')

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }

  return (
    <section 
      className="change-it-container" 
      id="change-it" 
      role="region" 
      aria-label="How Red Ox Digital Changes All That"
      style={{
        position: 'relative',
        width: '100vw',
        minHeight: 'auto',
        overflow: 'hidden',
        background: '#ffffff',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      }}
    >
      {/* Main Content Wrapper */}
      <div className="change-it-content-wrapper">
        <div className="change-it-content" id="change-it-content">
          {/* Header */}
          <div className="change-it-header">
            <div className="change-it-label">OUR APPROACH</div>
            <h2 className="change-it-headline">How Red Ox Digital Changes All That.</h2>
            <p className="change-it-intro">
              We reject the "doing digital" mindset. We operate on one principle: <strong>your digital marketing must generate profit.</strong>
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="change-it-tab-navigation">
            <button 
              className={`change-it-tab-button ${activeTab === 'profit-first' ? 'active' : ''}`}
              onClick={() => handleTabClick('profit-first')}
              aria-selected={activeTab === 'profit-first'}
              role="tab"
            >
              Profit-First Planning
            </button>
            <button 
              className={`change-it-tab-button ${activeTab === 'bottom-line' ? 'active' : ''}`}
              onClick={() => handleTabClick('bottom-line')}
              aria-selected={activeTab === 'bottom-line'}
              role="tab"
            >
              Bottom-Line Partnership
            </button>
          </div>

          {/* Tab 1: Profit-First Planning */}
          <div 
            className={`change-it-tab-content ${activeTab === 'profit-first' ? 'active' : ''}`}
            role="tabpanel"
            aria-hidden={activeTab !== 'profit-first'}
          >
            <div className="change-it-content-text">
              <h3>Profit-First Planning</h3>
              <p>
                Every strategy we build starts and ends with one goal in mind: <strong>$1 Spent = $3+ Back</strong>. We meticulously design campaigns to deliver this multiplier, focusing only on the channels and tactics that have a clear, measurable path to revenue.
              </p>
              <ul className="change-it-feature-list">
                <li>Deep market research and competitor analysis</li>
                <li>Relentless A/B testing and data analysis</li>
                <li>Identify exact keywords and audiences that convert</li>
                <li>Scale only proven, profitable channels</li>
                <li>Zero vanity metrics—only revenue drivers</li>
              </ul>
              <button className="change-it-learn-more-btn" onClick={onCtaClick}>
                <span>See How It Works</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L6.59 1.41L12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z"/>
                </svg>
              </button>
            </div>
            <div className="change-it-content-visual">
              <div className="change-it-metric-display">
                <div className="change-it-metric-value">$1</div>
                <div className="change-it-metric-label">Spent</div>
                <div className="change-it-metric-arrow">↓</div>
                <div className="change-it-metric-value">$3+</div>
                <div className="change-it-metric-label">Back</div>
              </div>
            </div>
          </div>

          {/* Tab 2: Bottom-Line Partnership */}
          <div 
            className={`change-it-tab-content ${activeTab === 'bottom-line' ? 'active' : ''}`}
            role="tabpanel"
            aria-hidden={activeTab !== 'bottom-line'}
          >
            <div className="change-it-content-text">
              <h3>Bottom-Line Partnership</h3>
              <p>
                Forget vanity metrics. We don't report on clicks; we partner with you on your actual bottom line. Our dashboards showcase verifiable ROI, customer acquisition cost, and lifetime value – the numbers that truly matter to your business's growth.
              </p>
              <ul className="change-it-feature-list">
                <li>Real-time ROI tracking and reporting</li>
                <li>Customer acquisition cost (CAC) optimization</li>
                <li>Lifetime value (LTV) maximization</li>
                <li>Clear profit attribution across all channels</li>
                <li>Monthly profit reviews—not vanity reports</li>
              </ul>
              <button className="change-it-learn-more-btn" onClick={onCtaClick}>
                <span>See Our Dashboards</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L6.59 1.41L12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z"/>
                </svg>
              </button>
            </div>
            <div className="change-it-content-visual">
              <div className="change-it-metric-display">
                <div style={{ fontSize: '1.5rem', color: '#991B1B', marginBottom: '20px' }}>We Track What Matters</div>
                <div className="change-it-metric-value">ROI</div>
                <div className="change-it-metric-label">Not Clicks</div>
                <div style={{ margin: '30px 0', fontSize: '2rem', color: '#DC2626' }}>•••</div>
                <div className="change-it-metric-value">CAC</div>
                <div className="change-it-metric-label">Not Impressions</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Screen Reader Description */}
      <div className="sr-only">
        <p>Section explaining how Red Ox Digital changes digital marketing to focus on profit, with two key approaches: Profit-First Planning and Bottom-Line Partnership.</p>
      </div>
    </section>
  )
}

export default ChangeIt

