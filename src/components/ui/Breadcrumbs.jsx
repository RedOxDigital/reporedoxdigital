import React from 'react'

const Breadcrumbs = ({ items }) => {
  const defaultItems = [
    { name: 'Home', url: 'https://redoxdigital.com.au/' }
  ]

  const breadcrumbItems = items || defaultItems

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <>
      <nav aria-label="Breadcrumb" className="breadcrumb-nav">
        <style jsx>{`
          .breadcrumb-nav {
            padding: 1rem 2rem;
            background: hsl(var(--creative-secondary));
            border-bottom: 1px solid hsl(var(--border-color));
          }

          .breadcrumb-container {
            max-width: 1400px;
            margin: 0 auto;
          }

          .breadcrumb-list {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.5rem;
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .breadcrumb-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
          }

          .breadcrumb-link {
            color: hsl(var(--text-secondary));
            text-decoration: none;
            transition: color 0.2s ease;
          }

          .breadcrumb-link:hover {
            color: hsl(var(--creative-accent));
          }

          .breadcrumb-current {
            color: hsl(var(--text-primary));
            font-weight: 500;
          }

          .breadcrumb-separator {
            color: hsl(var(--text-secondary));
            opacity: 0.5;
          }

          @media (max-width: 768px) {
            .breadcrumb-nav {
              padding: 0.75rem 1rem;
            }

            .breadcrumb-item {
              font-size: 0.8125rem;
            }
          }
        `}</style>

        <div className="breadcrumb-container">
          <ol className="breadcrumb-list" itemScope itemType="https://schema.org/BreadcrumbList">
            {breadcrumbItems.map((item, index) => (
              <li 
                key={index} 
                className="breadcrumb-item"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {index < breadcrumbItems.length - 1 ? (
                  <>
                    <a 
                      href={item.url} 
                      className="breadcrumb-link"
                      itemProp="item"
                    >
                      <span itemProp="name">{item.name}</span>
                    </a>
                    <span className="breadcrumb-separator" aria-hidden="true">/</span>
                    <meta itemProp="position" content={index + 1} />
                  </>
                ) : (
                  <>
                    <span className="breadcrumb-current" itemProp="name" aria-current="page">
                      {item.name}
                    </span>
                    <meta itemProp="position" content={index + 1} />
                  </>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
      />
    </>
  )
}

export default Breadcrumbs


