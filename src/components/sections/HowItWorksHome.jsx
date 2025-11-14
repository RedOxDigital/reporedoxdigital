import React, { useState, useEffect } from 'react'
import { FileText, MessageCircle, TrendingUp, Rocket, ArrowLeft, ArrowRight } from 'lucide-react'
import './HowItWorksHome.css'

const HowItWorksHome = ({ onCtaClick }) => {
  const [currentTab, setCurrentTab] = useState(0)

  const steps = [
    {
      number: 1,
      title: "Apply for Your 3x Growth Discussion",
      shortTitle: "Apply",
      description: "It all begins with a simple, no-obligation application. Tell us a bit about your business, your current digital marketing efforts, and what 'profit machine' looks like for you. This helps us understand your needs and prepare for a focused, valuable conversation.",
      cta: "Apply for Your Free Consultation",
      icon: FileText
    },
    {
      number: 2,
      title: "We Check for Mutual Fit (Free Alignment Chat)",
      shortTitle: "Alignment Chat",
      description: "Once your application is reviewed, we'll schedule a complimentary 30-minute chat. This is a critical discussion to understand your challenges, validate your goals, and determine if your business is the right fit for our profit-driven approach.\n\nIf your business is primarily looking for pretty web design or more likes on social media, we are not the right partner. We work exclusively with businesses demanding measurable ROI and aiming for that $1 Spent = $3+ Back vision.",
      icon: MessageCircle
    },
    {
      number: 3,
      title: "Your Custom 3x Growth Blueprint",
      shortTitle: "Custom Blueprint",
      description: "If we're a mutual fit, our consultants will then dive deep, crafting a bespoke 3x Growth Road Map tailored specifically for your business. This comprehensive plan outlines the precise strategies, channels, and a clear implementation timeline designed to turn your marketing into a verifiable profit engine. It defines exactly how we'll get you to your $1 Spent = $3+ Back target.",
      icon: TrendingUp
    },
    {
      number: 4,
      title: "Launch & Continuous Profit Optimization",
      shortTitle: "Launch & Optimize",
      description: "With your custom roadmap approved, our expert freelancer network gets to work. We meticulously launch your profit-driven campaigns, continuously monitor performance against your 3x ROI goals, and scale only what's proven to generate consistent returns. Your marketing stops being an expense and starts delivering predictable, growing profits.",
      icon: Rocket
    }
  ]

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && currentTab > 0) {
        setCurrentTab(currentTab - 1)
      } else if (e.key === 'ArrowRight' && currentTab < steps.length - 1) {
        setCurrentTab(currentTab + 1)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [currentTab, steps.length])

  const goToTab = (index) => {
    setCurrentTab(index)
  }

  const goToPrevious = () => {
    if (currentTab > 0) {
      setCurrentTab(currentTab - 1)
    }
  }

  const goToNext = () => {
    if (currentTab < steps.length - 1) {
      setCurrentTab(currentTab + 1)
    }
  }

  const progressPercentage = ((currentTab + 1) / steps.length) * 100

  return (
    <section 
      className="how-it-works-home-container" 
      id="how-it-works-home" 
      role="region" 
      aria-label="How Red Ox Digital Works"
    >
      <div className="how-it-works-home-content">
        {/* Section Header */}
        <div className="how-it-works-home-header">
          <h2 className="how-it-works-home-title">How It Works</h2>
          <p className="how-it-works-home-intro">
            Our proven process transforms your digital marketing from a cost center into a profit machine.
          </p>
        </div>

        {/* Tabs Container */}
        <div className="how-it-works-home-tabs-container">
          {/* Tab Navigation */}
          <div className="how-it-works-home-tabs-nav" role="tablist">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <button
                  key={index}
                  className={`how-it-works-home-tab-button ${currentTab === index ? 'active' : ''}`}
                  role="tab"
                  aria-selected={currentTab === index}
                  aria-controls={`panel-${index}`}
                  onClick={() => goToTab(index)}
                >
                  <Icon className="how-it-works-home-tab-icon" aria-hidden="true" />
                  <span className="how-it-works-home-tab-number">Step {step.number}</span>
                  <span className="how-it-works-home-tab-title">{step.shortTitle}</span>
                </button>
              )
            })}
          </div>

          {/* Tab Content */}
          <div className="how-it-works-home-tabs-content">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`how-it-works-home-tab-panel ${currentTab === index ? 'active' : ''}`}
                id={`panel-${index}`}
                role="tabpanel"
                aria-labelledby={`tab-${index}`}
              >
                <div className="how-it-works-home-content-header">
                  <span className="how-it-works-home-content-number">Step {step.number}</span>
                  <h3 className="how-it-works-home-content-title">{step.title}</h3>
                </div>
                <p className="how-it-works-home-content-description">{step.description}</p>
                {step.cta && (
                  <button
                    className="how-it-works-home-content-cta"
                    onClick={onCtaClick}
                    aria-label={step.cta}
                  >
                    <span>{step.cta}</span>
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>
            ))}

            {/* Progress Bar */}
            <div className="how-it-works-home-progress-bar">
              <div 
                className="how-it-works-home-progress-fill"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>

            {/* Navigation Arrows */}
            <div className="how-it-works-home-nav-arrows">
              <button
                className="how-it-works-home-nav-arrow"
                onClick={goToPrevious}
                disabled={currentTab === 0}
                aria-label="Previous step"
              >
                <ArrowLeft size={16} />
                <span>Previous</span>
              </button>
              <button
                className="how-it-works-home-nav-arrow"
                onClick={goToNext}
                disabled={currentTab === steps.length - 1}
                aria-label="Next step"
              >
                <span>Next</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Screen Reader Description */}
      <div className="sr-only">
        <p>Section explaining Red Ox Digital's 4-step process: Apply for Your 3x Growth Discussion, Free Alignment Chat, Custom 3x Growth Blueprint, and Launch with Continuous Profit Optimization.</p>
      </div>
    </section>
  )
}

export default HowItWorksHome

