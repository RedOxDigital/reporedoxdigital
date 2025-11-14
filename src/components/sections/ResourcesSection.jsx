import React from 'react'

const ResourcesSection = () => {
  const resources = [
    {
      title: "The Complete Guide to Local Business SEO in 2024",
      category: "SEO Strategy",
      excerpt: "Learn how to dominate local search results and attract more customers from your area with proven SEO strategies.",
      date: "2024-10-15",
      readTime: "8 min read",
      image: "/Images/blog-seo-guide.webp",
      slug: "complete-guide-local-business-seo-2024"
    },
    {
      title: "How to Create a Marketing Strategy That Actually Works",
      category: "Marketing Strategy",
      excerpt: "Stop wasting money on disconnected marketing efforts. Learn how to build a comprehensive strategy that drives results.",
      date: "2024-10-10",
      readTime: "10 min read",
      image: "/Images/blog-marketing-strategy.webp",
      slug: "create-marketing-strategy-that-works"
    },
    {
      title: "5 Signs Your Marketing Needs a Complete Overhaul",
      category: "Business Growth",
      excerpt: "Are you throwing money at marketing without seeing returns? Here are the warning signs you need to rebuild your strategy.",
      date: "2024-10-05",
      readTime: "6 min read",
      image: "/Images/blog-marketing-overhaul.webp",
      slug: "5-signs-marketing-needs-overhaul"
    }
  ]

  const categories = ["All", "SEO Strategy", "Marketing Strategy", "Business Growth", "Case Studies"]

  return (
    <section className="resources-section" id="resources" aria-label="Marketing Resources and Blog">
      <style jsx>{`
        .resources-section {
          padding: 8rem 2rem;
          background: linear-gradient(180deg,
            hsl(var(--creative-secondary)) 0%,
            hsl(220 25% 10%) 100%);
          position: relative;
        }

        .resources-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .resources-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .resources-label {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: linear-gradient(135deg, 
            hsl(var(--creative-accent) / 0.15) 0%, 
            hsl(var(--creative-accent) / 0.08) 100%);
          border: 1px solid hsl(var(--creative-accent) / 0.3);
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 700;
          color: hsl(var(--creative-accent));
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
        }

        .resources-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          color: hsl(var(--text-primary));
          margin-bottom: 1.5rem;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .resources-subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.25rem);
          color: hsl(var(--text-secondary));
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .category-filters {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 4rem;
        }

        .category-button {
          padding: 0.75rem 1.5rem;
          background: hsl(var(--creative-secondary));
          border: 1px solid hsl(var(--border-color));
          border-radius: 12px;
          color: hsl(var(--text-secondary));
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          transition: var(--transition-creative);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .category-button:hover,
        .category-button.active {
          background: linear-gradient(135deg, 
            hsl(var(--creative-accent)) 0%, 
            hsl(var(--creative-accent) / 0.9) 100%);
          color: hsl(var(--creative-primary));
          border-color: hsl(var(--creative-accent));
          transform: translateY(-2px);
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .resource-card {
          background: hsl(var(--creative-secondary));
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid hsl(var(--border-color));
          transition: var(--transition-creative);
          cursor: pointer;
        }

        .resource-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px hsl(var(--creative-accent) / 0.15);
          border-color: hsl(var(--creative-accent) / 0.3);
        }

        .resource-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          background: linear-gradient(135deg, 
            hsl(var(--creative-accent) / 0.1) 0%, 
            hsl(220 25% 15%) 100%);
        }

        .resource-content {
          padding: 2rem;
        }

        .resource-category {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          color: hsl(var(--creative-accent));
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.75rem;
        }

        .resource-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: hsl(var(--text-primary));
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .resource-excerpt {
          font-size: 0.9375rem;
          color: hsl(var(--text-secondary));
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .resource-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.8125rem;
          color: hsl(var(--text-secondary));
        }

        .cta-section {
          text-align: center;
          background: linear-gradient(135deg, 
            hsl(var(--creative-accent) / 0.1) 0%, 
            hsl(var(--creative-accent) / 0.05) 100%);
          border-radius: 24px;
          padding: 4rem 2rem;
          border: 1px solid hsl(var(--creative-accent) / 0.2);
        }

        .cta-title {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 900;
          color: hsl(var(--text-primary));
          margin-bottom: 1rem;
        }

        .cta-description {
          font-size: 1.1rem;
          color: hsl(var(--text-secondary));
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1.25rem 3rem;
          background: linear-gradient(135deg, 
            hsl(var(--creative-accent)) 0%, 
            hsl(var(--creative-accent) / 0.9) 100%);
          color: hsl(var(--creative-primary));
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          border-radius: 16px;
          transition: var(--transition-creative);
          text-transform: uppercase;
          letter-spacing: 0.025em;
          border: none;
          cursor: pointer;
          box-shadow: 0 8px 24px hsl(var(--creative-accent) / 0.3);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px hsl(var(--creative-accent) / 0.4);
        }

        @media (max-width: 768px) {
          .resources-section {
            padding: 6rem 1rem;
          }

          .resources-grid {
            grid-template-columns: 1fr;
          }

          .category-filters {
            gap: 0.5rem;
          }

          .category-button {
            padding: 0.625rem 1rem;
            font-size: 0.8125rem;
          }

          .cta-section {
            padding: 3rem 1.5rem;
          }
        }
      `}</style>

      <div className="resources-container">
        <div className="resources-header">
          <div className="resources-label">Free Resources</div>
          <h2 className="resources-title">
            Marketing Insights & Strategies
          </h2>
          <p className="resources-subtitle">
            Learn how to build a comprehensive marketing strategy that connects all your efforts and drives sustainable business growth
          </p>
        </div>

        <div className="category-filters">
          {categories.map((category, index) => (
            <button 
              key={index}
              className={`category-button ${index === 0 ? 'active' : ''}`}
              aria-label={`Filter by ${category}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="resources-grid">
          {resources.map((resource, index) => (
            <article key={index} className="resource-card">
              <img 
                src={resource.image} 
                alt={resource.title}
                width="400"
                height="220"
                className="resource-image"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'block'
                  e.target.style.background = 'linear-gradient(135deg, hsl(var(--creative-accent) / 0.1) 0%, hsl(220 25% 15%) 100%)'
                }}
              />
              <div className="resource-content">
                <div className="resource-category">{resource.category}</div>
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-excerpt">{resource.excerpt}</p>
                <div className="resource-meta">
                  <span>{new Date(resource.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span>{resource.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="cta-section">
          <h3 className="cta-title">Ready to Build Your Growth Blueprint?</h3>
          <p className="cta-description">
            Let's create a comprehensive strategy that makes all your marketing efforts work together
          </p>
          <button className="cta-button">
            Get Your Free Strategy Session
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12,5 19,12 12,19"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ResourcesSection



