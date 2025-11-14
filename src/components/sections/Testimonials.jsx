import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Elite Dental Care",
      location: "Sydney, NSW",
      rating: 5,
      image: "/Images/testimonial-1.webp",
      text: "Red Ox Digital built us a comprehensive growth strategy that actually makes sense. We're now converting more leads and our marketing finally works together. We've seen a 300% increase in qualified bookings.",
      service: "Complete Growth Blueprint",
      date: "2024-09"
    },
    {
      name: "Mike Chen",
      business: "Chen Plumbing Services",
      location: "Parramatta, NSW",
      rating: 5,
      image: "/Images/testimonial-2.webp",
      text: "The marketing strategy they created transformed our business. Every part of our online presence now works together. We've tripled our revenue in 6 months and our phone hasn't stopped ringing.",
      service: "Digital Marketing Strategy",
      date: "2024-08"
    },
    {
      name: "Emma Williams",
      business: "Williams Law Firm",
      location: "Sydney CBD",
      rating: 5,
      image: "/Images/testimonial-3.webp",
      text: "Finally, someone who explains marketing in plain English! They mapped out our customer journey and connected all our efforts. Our website, social media, and email now work as one team. Best investment we've made.",
      service: "Customer Journey Optimization",
      date: "2024-10"
    }
  ]

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": testimonials.map((testimonial, index) => ({
      "@type": "Review",
      "position": index + 1,
      "author": {
        "@type": "Person",
        "name": testimonial.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating,
        "bestRating": "5"
      },
      "reviewBody": testimonial.text,
      "datePublished": testimonial.date,
      "itemReviewed": {
        "@type": "Service",
        "name": testimonial.service,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Red Ox Digital"
        }
      }
    }))
  }

  return (
    <>
      <section className="testimonials-section" id="testimonials" aria-label="Customer Testimonials and Reviews">
        <style jsx>{`
          .testimonials-section {
            padding: 8rem 2rem;
            background: linear-gradient(180deg,
              hsl(var(--creative-secondary)) 0%,
              hsl(220 25% 10%) 100%);
            position: relative;
            overflow: hidden;
          }

          .testimonials-container {
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            z-index: 2;
          }

          .testimonials-header {
            text-align: center;
            margin-bottom: 4rem;
          }

          .testimonials-title {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 900;
            color: hsl(var(--text-primary));
            margin-bottom: 1.5rem;
            line-height: 1.1;
            letter-spacing: -0.02em;
          }

          .testimonials-subtitle {
            font-size: clamp(1.1rem, 2.5vw, 1.25rem);
            color: hsl(var(--text-secondary));
            max-width: 700px;
            margin: 0 auto;
            line-height: 1.6;
          }

          .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2rem;
          }

          .testimonial-card {
            background: hsl(var(--creative-secondary));
            border-radius: 24px;
            padding: 3rem 2rem;
            border: 1px solid hsl(var(--border-color));
            transition: var(--transition-creative);
            position: relative;
            overflow: hidden;
          }

          .testimonial-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, 
              hsl(var(--creative-accent) / 0.05) 0%, 
              transparent 50%);
            pointer-events: none;
          }

          .testimonial-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px hsl(var(--creative-accent) / 0.15);
            border-color: hsl(var(--creative-accent) / 0.3);
          }

          .testimonial-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
          }

          .testimonial-avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid hsl(var(--creative-accent));
          }

          .testimonial-info {
            flex: 1;
          }

          .testimonial-name {
            font-size: 1.125rem;
            font-weight: 700;
            color: hsl(var(--text-primary));
            margin-bottom: 0.25rem;
          }

          .testimonial-business {
            font-size: 0.875rem;
            color: hsl(var(--creative-accent));
            font-weight: 500;
          }

          .testimonial-location {
            font-size: 0.75rem;
            color: hsl(var(--text-secondary));
          }

          .testimonial-rating {
            display: flex;
            gap: 0.25rem;
            margin-bottom: 1.5rem;
          }

          .star {
            color: hsl(var(--creative-accent));
            font-size: 1.25rem;
          }

          .testimonial-text {
            font-size: 1rem;
            line-height: 1.6;
            color: hsl(var(--text-secondary));
            margin-bottom: 1.5rem;
            font-style: italic;
          }

          .testimonial-service {
            font-size: 0.875rem;
            color: hsl(var(--creative-accent));
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .testimonial-quote-icon {
            position: absolute;
            top: 2rem;
            right: 2rem;
            opacity: 0.1;
            font-size: 4rem;
            color: hsl(var(--creative-accent));
            font-family: Georgia, serif;
          }

          @media (max-width: 768px) {
            .testimonials-section {
              padding: 6rem 1rem;
            }

            .testimonials-grid {
              grid-template-columns: 1fr;
            }

            .testimonial-card {
              padding: 2.5rem 1.5rem;
            }
          }
        `}</style>

        <div className="testimonials-container">
          <div className="testimonials-header">
            <h2 className="testimonials-title">
              What Our Clients Say
            </h2>
            <p className="testimonials-subtitle">
              Real results from real businesses who trusted us to build their Growth Blueprint and connect all their marketing efforts.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <article key={index} className="testimonial-card" itemScope itemType="https://schema.org/Review">
                <div className="testimonial-quote-icon">"</div>
                
                <div className="testimonial-header">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name} - ${testimonial.business}`}
                    width="60"
                    height="60"
                    className="testimonial-avatar"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  <div className="testimonial-info">
                    <div className="testimonial-name" itemProp="author">{testimonial.name}</div>
                    <div className="testimonial-business">{testimonial.business}</div>
                    <div className="testimonial-location">{testimonial.location}</div>
                  </div>
                </div>

                <div className="testimonial-rating" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content={testimonial.rating} />
                  <meta itemProp="bestRating" content="5" />
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>

                <p className="testimonial-text" itemProp="reviewBody">
                  {testimonial.text}
                </p>

                <div className="testimonial-service">
                  {testimonial.service}
                </div>

                <meta itemProp="datePublished" content={testimonial.date} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
      />
    </>
  )
}

export default Testimonials



