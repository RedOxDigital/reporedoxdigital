import React, { useState } from 'react'
import './WhenDidIt.css'

const WhenDidIt = ({ onCtaClick }) => {
  const [flippedIndex, setFlippedIndex] = useState(null)

  const tiles = [
    {
      number: 1,
      badge: "Problem #1",
      title: "The Rise of \"Vanity Metrics\"",
      preview: "As platforms like social media grew, metrics became easier to report but harder to convert into actual revenue...",
      description: "As platforms like social media grew, metrics like \"likes,\" \"shares,\" \"impressions,\" and \"clicks\" became easy to report. While these can indicate engagement, they often don't directly correlate with revenue. Agencies and internal teams started optimizing for these easier-to-achieve numbers rather than the harder-to-track ROI.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      alt: "Vanity Metrics"
    },
    {
      number: 2,
      badge: "Problem #2",
      title: "Increased Complexity & Overwhelm",
      preview: "The sheer volume of channels and tactics makes it overwhelming for businesses to maintain focus...",
      description: "Digital marketing isn't just one thing anymore. It's SEO, SEM, social media, content marketing, email marketing, display ads, video, analytics, conversion rate optimization... the sheer volume of channels and tactics makes it overwhelming. Many businesses simply try to \"do a bit of everything\" without a cohesive, profit-driven strategy.",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80",
      alt: "Complexity"
    },
    {
      number: 3,
      badge: "Problem #3",
      title: "The \"Keeping Up With The Joneses\" Effect",
      preview: "Reactive marketing leads to presence without purpose, activity without profit...",
      description: "Competitors are online, so businesses feel they have to be online. This leads to reactive, rather than proactive, marketing where the goal is simply presence, not necessarily profit.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
      alt: "Competition"
    },
    {
      number: 4,
      badge: "Problem #4",
      title: "Lack of Clear Attribution & Tracking",
      preview: "Without robust analytics, proving ROI becomes nearly impossible for smaller businesses...",
      description: "Especially for smaller businesses, truly understanding the journey from ad click to customer purchase can be difficult. Without robust analytics, it's hard to prove ROI, so focus shifts to more visible (even if less valuable) metrics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      alt: "Attribution"
    },
    {
      number: 5,
      badge: "Problem #5",
      title: "Agency Model Incentives",
      preview: "When agencies profit from spend rather than results, misaligned incentives become inevitable...",
      description: "Some agencies are incentivized by ad spend (taking a percentage) rather than actual client profit. This can lead to recommendations for larger budgets or broader campaigns that generate more clicks, even if the conversion rate is poor.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
      alt: "Agency"
    },
    {
      number: 6,
      badge: "Problem #6",
      title: "\"Best Practices\" vs. Bespoke Strategy",
      preview: "Generic templates can't address your business's unique profit levers and competitive advantages...",
      description: "The proliferation of generic \"digital marketing best practices\" often leads to cookie-cutter campaigns that aren't optimized for a specific business's unique profit levers.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
      alt: "Strategy"
    }
  ]

  const toggleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index)
  }

  return (
    <section 
      className="when-did-it-container" 
      id="when-did-it" 
      role="region" 
      aria-label="When Did Digital Marketing Stop Being a Profit Machine"
    >
      <div className="when-did-it-content-wrapper">
        <h2 className="when-did-it-headline">
          Digital marketing can be a waste of <span className="when-did-it-highlight">time</span> and <span className="when-did-it-highlight">money</span>!
        </h2>

        <div className="when-did-it-tiles-grid">
          {tiles.map((tile, index) => (
            <div 
              key={index}
              className={`when-did-it-tile ${flippedIndex === index ? 'flipped' : ''}`}
              onClick={() => toggleFlip(index)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggleFlip(index)
                }
              }}
              aria-label={`${tile.title} - Click to read more`}
            >
              <div className="when-did-it-tile-inner">
                {/* Front of Tile */}
                <div className="when-did-it-tile-front">
                  <div className="when-did-it-tile-front-image">
                    <img src={tile.image} alt={tile.alt} loading="lazy" />
                    <div className="when-did-it-tile-front-badge">{tile.badge}</div>
                  </div>
                  <div className="when-did-it-tile-front-content">
                    <div className="when-did-it-tile-front-number">{tile.number}</div>
                    <h3 className="when-did-it-tile-front-title">{tile.title}</h3>
                    <p className="when-did-it-tile-front-preview">{tile.preview}</p>
                    <div className="when-did-it-tile-front-cta">
                      <span>Read More</span>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Back of Tile */}
                <div className="when-did-it-tile-back">
                  <div className="when-did-it-tile-back-number">{tile.number.toString().padStart(2, '0')}</div>
                  <h3 className="when-did-it-tile-back-title">{tile.title}</h3>
                  <p className="when-did-it-tile-back-description">{tile.description}</p>
                  <div className="when-did-it-tile-back-close">
                    <span>← Back</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Screen Reader Description */}
      <div className="sr-only">
        <p>Section explaining when digital marketing became something businesses just throw money and time at, with six key problems presented in interactive flip cards.</p>
      </div>
    </section>
  )
}

export default WhenDidIt
