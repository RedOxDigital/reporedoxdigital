import React, { useState } from 'react'
import FaqSchema from '../seo/FaqSchema'

const Faq = ({ onCtaClick }) => {
  const [activeFaqCategory, setActiveFaqCategory] = useState('all')

  // FAQ category filter
  const handleFaqCategoryFilter = (category) => {
    setActiveFaqCategory(category)
    const faqCards = document.querySelectorAll('.faq-card')
    
    faqCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category')
      
      if (category === 'all' || cardCategory === category) {
        card.style.display = 'flex'
        card.style.animation = 'fadeIn 0.3s ease-in-out'
      } else {
        card.style.display = 'none'
      }
    })
  }

  const faqData = [
    {
      question: "How quickly can I expect to see results with your strategy?",
      answer: "You're ready to stop wasting money on marketing that doesn't make sense. Most clients start seeing clarity within the first few weeks as we build your comprehensive plan. We create a clear, step-by-step strategy that makes all your online efforts work together, so every dollar you spend is working towards your business goals. The real transformation happens as your connected marketing efforts continuously build momentum over time."
    },
    {
      question: "What makes your approach different from just running ads?",
      answer: "We don't just drive traffic. We create your Blueprint for Sustainable Digital Growth. While others focus on boosting posts and running ads, we build a comprehensive plan that connects your website, social media, and email marketing as one team. You're not paying for clicks; you're investing in a clear strategy that creates a smooth and professional experience for your customers."
    },
    {
      question: "What types of businesses do you work with?",
      answer: "We work with local businesses that are tired of leaving money on the table and want marketing that actually makes sense. Whether you're a professional service (dentist, med spa, lawyer), service area business (plumber, electrician, contractor), or any local business looking to stop wasting money on scattered marketing efforts, our strategy is designed to help you understand your customer's path and maximize every opportunity."
    },
    {
      question: "What exactly is included in your Growth Blueprint?",
      answer: "Your complete strategy includes a comprehensive online review and competitive analysis, connecting all your marketing efforts (website, social media, email), creating your message and building trust through content, mapping your customer's journey, using data to get better results, and providing clear reports and planning for growth. Everything works together seamlessly to turn views into leads, leads into sales, and sales into advocates."
    },
    {
      question: "How much does it cost to build my Growth Blueprint?",
      answer: "Investment varies based on your business goals, market competition, and current systems. We offer two pathways: our complete Growth Blueprint for businesses ready to build their comprehensive strategy, or our $199 Photography & Strategy Session as an accessible entry point to experience our quality and start building trust with your audience immediately."
    },
    {
      question: "How does your strategic approach actually work day-to-day?",
      answer: "Once we've built your strategy, your marketing works as a connected team. We track your results and turn confusing numbers into simple, actionable insights. You'll know (in plain English) what's working, what's not, and how we can improve. We give you easy-to-understand reports that show your progress, and as your business grows, we make sure your marketing strategy grows with you."
    },
    {
      question: "I'm not ready for the full strategy yet—what are my options?",
      answer: "Start with our $199 Photography & Strategy Session! This is the first step in our Growth Blueprint. You'll get professional on-site photography (delivered in 24 hours), your 'First Step' consultation on using photos to build trust and convert leads, and a clear picture of how our comprehensive approach can transform your business. It's the perfect low-risk way to experience our quality and start making every view count."
    },
    {
      question: "What if the strategy doesn't deliver results for my business?",
      answer: "Our Blueprint for Sustainable Digital Growth is built on proven strategies that help you find the right words and content to attract your ideal customers. We only work with methods that maximize every dollar you invest. If you're not seeing improvements, we don't just walk away—we analyze, optimize, and adjust until your connected marketing efforts are performing at their peak. Your success is our success."
    },
    {
      question: "How will I know if the strategy is working and making me money?",
      answer: "We track what actually matters to your bottom line: qualified leads, booked appointments, new customers, and positive ROI. You'll have easy-to-understand reports showing exactly what's working. We turn confusing numbers into simple insights, showing you (in plain English) how your views are turning into leads, leads into sales, and sales into advocates. No vanity metrics—just real results you can understand and bank on."
    }
  ]

  return (
    <>
      <section className="faq-section" id="faq" aria-label="Frequently Asked Questions">
        <div className="faq-container">
          {/* Header */}
          <div className="faq-header">
            <h2 className="faq-title">
              YOUR QUESTIONS ANSWERED
            </h2>
            <p className="faq-subtitle">
              Everything you need to know about creating your Blueprint for Sustainable Digital Growth and how we help you turn views into leads, leads into sales, and sales into advocates.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="faq-categories">
            <button 
              className={`category-filter ${activeFaqCategory === 'all' ? 'active' : ''}`} 
              onClick={() => handleFaqCategoryFilter('all')}
            >
              ALL QUESTIONS
            </button>
            <button 
              className={`category-filter ${activeFaqCategory === 'services' ? 'active' : ''}`} 
              onClick={() => handleFaqCategoryFilter('services')}
            >
              SERVICES
            </button>
            <button 
              className={`category-filter ${activeFaqCategory === 'pricing' ? 'active' : ''}`} 
              onClick={() => handleFaqCategoryFilter('pricing')}
            >
              PRICING
            </button>
            <button 
              className={`category-filter ${activeFaqCategory === 'results' ? 'active' : ''}`} 
              onClick={() => handleFaqCategoryFilter('results')}
            >
              RESULTS
            </button>
            <button 
              className={`category-filter ${activeFaqCategory === 'process' ? 'active' : ''}`} 
              onClick={() => handleFaqCategoryFilter('process')}
            >
              PROCESS
            </button>
          </div>

          {/* FAQ Cards Grid */}
          <div className="faq-grid">
            {/* FAQ Card 1 */}
            <div className={`faq-card ${activeFaqCategory !== 'all' && activeFaqCategory !== 'results' ? 'hidden' : ''}`} data-category="results">
              <div className="faq-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
              </div>
              <h3 className="faq-card-question">How quickly can I expect to see results with your strategy?</h3>
              <p className="faq-card-answer">
                You're ready to stop wasting money on marketing that doesn't make sense. Most clients start seeing clarity within the first few weeks as we build your comprehensive plan. We create a clear, step-by-step strategy that makes all your online efforts work together, so every dollar you spend is working towards your business goals. The real transformation happens as your connected marketing efforts continuously build momentum over time.
              </p>
            </div>

            {/* FAQ Card 2 */}
            <div className={`faq-card ${activeFaqCategory !== 'all' && activeFaqCategory !== 'services' ? 'hidden' : ''}`} data-category="services">
              <div className="faq-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="faq-card-question">What makes your approach different from just running ads?</h3>
              <p className="faq-card-answer">
                We don't just drive traffic. We create your Blueprint for Sustainable Digital Growth. While others focus on boosting posts and running ads, we build a comprehensive plan that connects your website, social media, and email marketing as one team. You're not paying for clicks; you're investing in a clear strategy that creates a smooth and professional experience for your customers.
              </p>
            </div>

            {/* FAQ Card 3 */}
            <div className={`faq-card ${activeFaqCategory !== 'all' && activeFaqCategory !== 'services' ? 'hidden' : ''}`} data-category="services">
              <div className="faq-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3 className="faq-card-question">What types of businesses do you work with?</h3>
              <p className="faq-card-answer">
                We work with local businesses that are tired of leaving money on the table and want marketing that actually makes sense. Whether you're a professional service (dentist, med spa, lawyer), service area business (plumber, electrician, contractor), or any local business looking to stop wasting money on scattered marketing efforts, our strategy is designed to help you understand your customer's path and maximize every opportunity.
              </p>
            </div>

            {/* FAQ Card 4 */}
            <div className={`faq-card ${activeFaqCategory !== 'all' && activeFaqCategory !== 'services' ? 'hidden' : ''}`} data-category="services">
              <div className="faq-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <h3 className="faq-card-question">What exactly is included in your Growth Blueprint?</h3>
              <p className="faq-card-answer">
                Your complete strategy includes a comprehensive online review and competitive analysis, connecting all your marketing efforts (website, social media, email), creating your message and building trust through content, mapping your customer's journey, using data to get better results, and providing clear reports and planning for growth. Everything works together seamlessly to turn views into leads, leads into sales, and sales into advocates.
              </p>
            </div>

            {/* FAQ Card 5 */}
            <div className={`faq-card ${activeFaqCategory !== 'all' && activeFaqCategory !== 'pricing' ? 'hidden' : ''}`} data-category="pricing">
              <div className="faq-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3 className="faq-card-question">How much does it cost to build my Growth Blueprint?</h3>
              <p className="faq-card-answer">
                Investment varies based on your business goals, market competition, and current systems. We offer two pathways: our complete Growth Blueprint for businesses ready to build their comprehensive strategy, or our $199 Photography & Strategy Session as an accessible entry point to experience our quality and start building trust with your audience immediately.
              </p>
            </div>

            {/* FAQ Card 6 */}
            <div className={`faq-card ${activeFaqCategory !== 'all' && activeFaqCategory !== 'process' ? 'hidden' : ''}`} data-category="process">
              <div className="faq-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                  <circle cx="12" cy="13" r="3"/>
                </svg>
              </div>
              <h3 className="faq-card-question">How does your strategic approach actually work day-to-day?</h3>
              <p className="faq-card-answer">
                Once we've built your strategy, your marketing works as a connected team. We track your results and turn confusing numbers into simple, actionable insights. You'll know (in plain English) what's working, what's not, and how we can improve. We give you easy-to-understand reports that show your progress, and as your business grows, we make sure your marketing strategy grows with you.
              </p>
            </div>

            {/* FAQ Card 7 */}
            <div className={`faq-card ${activeFaqCategory !== 'all' && activeFaqCategory !== 'services' ? 'hidden' : ''}`} data-category="services">
              <div className="faq-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="faq-card-question">I'm not ready for the full strategy yet—what are my options?</h3>
              <p className="faq-card-answer">
                Start with our $199 Photography & Strategy Session! This is the first step in our Growth Blueprint. You'll get professional on-site photography (delivered in 24 hours), your 'First Step' consultation on using photos to build trust and convert leads, and a clear picture of how our comprehensive approach can transform your business. It's the perfect low-risk way to experience our quality and start making every view count.
              </p>
            </div>

            {/* FAQ Card 8 */}
            <div className={`faq-card ${activeFaqCategory !== 'all' && activeFaqCategory !== 'results' ? 'hidden' : ''}`} data-category="results">
              <div className="faq-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h3 className="faq-card-question">What if the strategy doesn't deliver results for my business?</h3>
              <p className="faq-card-answer">
                Our Blueprint for Sustainable Digital Growth is built on proven strategies that help you find the right words and content to attract your ideal customers. We only work with methods that maximize every dollar you invest. If you're not seeing improvements, we don't just walk away—we analyze, optimize, and adjust until your connected marketing efforts are performing at their peak. Your success is our success.
              </p>
            </div>

            {/* FAQ Card 9 */}
            <div className={`faq-card ${activeFaqCategory !== 'all' && activeFaqCategory !== 'process' ? 'hidden' : ''}`} data-category="process">
              <div className="faq-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
                </svg>
              </div>
              <h3 className="faq-card-question">How will I know if the strategy is working and making me money?</h3>
              <p className="faq-card-answer">
                We track what actually matters to your bottom line: qualified leads, booked appointments, new customers, and positive ROI. You'll have easy-to-understand reports showing exactly what's working. We turn confusing numbers into simple insights, showing you (in plain English) how your views are turning into leads, leads into sales, and sales into advocates. No vanity metrics—just real results you can understand and bank on.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="faq-final-cta-section" id="contact">
            <h3 className="faq-final-cta-title">READY TO BUILD YOUR GROWTH BLUEPRINT?</h3>
            <p className="faq-final-cta-description">
              Let's discuss how our proven strategy can create a clear path that connects all your marketing efforts and turns views into leads, leads into sales, and sales into advocates.
            </p>
            <button className="faq-final-cta-button" onClick={onCtaClick}>
              START YOUR GROWTH STRATEGY
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Schema for SEO */}
      <FaqSchema faqData={faqData} />
    </>
  )
}

export default Faq

