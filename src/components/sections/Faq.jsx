import React, { useState } from 'react'
import { 
  Layers, 
  DollarSign, 
  TrendingUp, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  Settings
} from 'lucide-react'
import FaqSchema from '../seo/FaqSchema'

const Faq = ({ onCtaClick }) => {
  const [openIndex, setOpenIndex] = useState(null)
  const [activeFaqCategory, setActiveFaqCategory] = useState('all')

  // Toggle accordion
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // FAQ category filter
  const handleFaqCategoryFilter = (category) => {
    setActiveFaqCategory(category)
    setOpenIndex(null) // Close all accordions when switching categories
  }

  // Get icon for category
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'services':
        return Layers
      case 'pricing':
        return DollarSign
      case 'results':
        return TrendingUp
      case 'process':
        return Settings
      default:
        return HelpCircle
    }
  }

  const faqData = [
    {
      question: "What makes Red Ox Digital different from other marketing agencies?",
      answer: "We reject the 'doing digital' mindset. We operate on one principle: your digital marketing must generate profit. Our goal is simple: $1 Spent = $3+ Back. We're not an agency that reports on clicks and impressions. We're your Architect and Project Manager who designs profit-first strategies and manages vetted freelancers to execute them at a fraction of traditional agency costs. You get strategic expertise without the agency markup.",
      category: "services"
    },
    {
      question: "How does your $1 Spent = $3+ Back model actually work?",
      answer: "Every strategy we build starts and ends with one goal: verifiable ROI. Through relentless A/B testing, data analysis, and continuous optimization, we identify the exact channels and tactics that convert. We then scale only what's proven to generate consistent returns. We meticulously design campaigns to deliver this 3x multiplier, focusing only on activities with a clear, measurable path to revenue—not vanity metrics.",
      category: "results"
    },
    {
      question: "What's included in your Custom 3x Growth Blueprint?",
      answer: "Your Blueprint is a bespoke profit roadmap tailored specifically to your business. It includes: a deep dive into your market and competitors, identification of high-intent channels that convert (Performance Advertising, SEO, Local SEO), conversion-optimized web design and landing pages, professional photography and videography, and a clear implementation timeline. This comprehensive plan outlines the precise strategies designed to turn your marketing into a verifiable profit engine.",
      category: "services"
    },
    {
      question: "How does your 4-step process work from start to finish?",
      answer: "Step 1: Apply for Your 3x Growth Discussion—tell us about your business goals. Step 2: Free Alignment Chat—we validate if you're the right fit for our profit-driven approach. Step 3: Custom 3x Growth Blueprint—we craft your bespoke roadmap outlining exactly how we'll achieve your $1 Spent = $3+ Back target. Step 4: Launch & Continuous Profit Optimization—our expert network implements your campaigns, monitors performance, and scales what works.",
      category: "process"
    },
    {
      question: "Why shouldn't I just hire freelancers myself?",
      answer: "Because you'll end up managing chaos instead of running your business. Freelancers are specialists in execution, not strategy. Who coordinates them? Who ensures they're all working toward YOUR profit goals? That's where we come in. We design the unified strategy, hire and manage vetted specialists, guarantee quality, and ensure every piece works together. You pay your strategist for strategy, not repetitive execution tasks—and you maintain full visibility with the option to take over management when ready.",
      category: "services"
    },
    {
      question: "Can you work with my existing team (web developer, social media assistant)?",
      answer: "Absolutely! We act as your Architect and Project Manager. If you have a trusted web developer or a junior staff member handling social media, we'll provide them with detailed, data-driven briefs and strategic direction. This turns their time into a highly valuable asset by giving them a clear, professionally designed plan to execute. They handle the posting; we handle the profit-driving strategy. You save time and money while guaranteeing their work contributes to measurable growth.",
      category: "services"
    },
    {
      question: "How do you keep costs low while delivering premium strategy?",
      answer: "Simple: we separate high-value strategy from routine execution. You pay us a management fee for expert strategy and oversight—the thinking and planning that drives profit. For execution tasks (posting, scheduling, web integration), we manage vetted, lower-cost specialist freelancers (~$35/hr) who you pay directly. This ensures maximum transparency and cost efficiency. You get agency-level strategy at a fraction of the cost.",
      category: "pricing"
    },
    {
      question: "How will I know the strategy is actually making me money?",
      answer: "We track what matters to your bottom line: qualified leads, booked appointments, new customers, and positive ROI. Forget vanity metrics like \"likes\" or \"impressions.\" Our dashboards showcase verifiable ROI, customer acquisition cost, and lifetime value. You'll get easy-to-understand reports (in plain English) showing exactly how your views turn into leads, leads into sales, and sales into advocates. Real results you can bank on.",
      category: "results"
    },
    {
      question: "I'm not ready for the full strategy yet—what are my options?",
      answer: "Start with our $199 Profit-Ready Visuals package! This Brisbane-exclusive offer is your low-risk entry point to experience our digital marketing for profit approach firsthand. You'll get a 20-minute professional photoshoot (delivered in 24 hours), plus a step-by-step 'Profit-Ready Visuals' Guide showing exactly how to turn this investment into $600+ in profit. It's proof our approach works before you commit to the full Blueprint.",
      category: "services"
    },
    {
      question: "What if I'm primarily looking for website design or social media management?",
      answer: "We're probably not the right fit. If you want a pretty website with no strategy behind it, or more \"likes\" on social media without measurable ROI, we won't be a good match. We work exclusively with businesses demanding measurable profit from their marketing—businesses aiming for that $1 Spent = $3+ Back vision. If profit is your priority, not just presence, let's talk.",
      category: "services"
    }
  ]

  return (
    <>
      <section 
        className="faq-section" 
        id="faq" 
        role="region"
        aria-label="Frequently Asked Questions"
      >
        <div className="faq-container">
          {/* Header */}
          <div className="faq-header">
            <h2 className="faq-title">
              YOUR QUESTIONS ANSWERED
            </h2>
            <p className="faq-subtitle">
              Everything you need to know about our profit-first approach, the $1 Spent = $3+ Back model, and how we transform your digital marketing from a cost center into a verifiable profit machine.
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

          {/* FAQ Accordion Grid */}
          <div className="faq-grid">
            {faqData
              .filter(faq => activeFaqCategory === 'all' || faq.category === activeFaqCategory)
              .map((faq, index) => (
                <div 
                  key={index}
                  className="faq-accordion-card"
                  data-category={faq.category}
                >
                  <button
                    className="faq-accordion-header"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-content-${index}`}
                  >
                    <div className="faq-question-wrapper">
                      <div className="faq-card-icon">
                        {React.createElement(getCategoryIcon(faq.category), { 
                          size: 20,
                          strokeWidth: 2
                        })}
                      </div>
                      <h3 className="faq-card-question">{faq.question}</h3>
                    </div>
                    <span className="faq-toggle-icon">
                      {openIndex === index ? (
                        <ChevronUp size={24} strokeWidth={2} />
                      ) : (
                        <ChevronDown size={24} strokeWidth={2} />
                      )}
                    </span>
                  </button>
                  <div
                    id={`faq-content-${index}`}
                    className="faq-accordion-content"
                    aria-hidden={openIndex !== index}
                    style={{
                      maxHeight: openIndex === index ? '1000px' : '0',
                      opacity: openIndex === index ? '1' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.4s ease-in-out, opacity 0.4s ease-in-out'
                    }}
                  >
                    <p className="faq-card-answer">{faq.answer}</p>
                  </div>
                </div>
              ))
            }
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

