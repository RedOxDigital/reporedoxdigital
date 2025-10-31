export default function HowToSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Build Your Digital Growth Blueprint",
    "description": "A proven 4-step process to create a comprehensive digital marketing strategy that connects all your online efforts and drives sustainable business growth.",
    "totalTime": "PT4W",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "AUD",
      "value": "199"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Business Website"
      },
      {
        "@type": "HowToSupply",
        "name": "Social Media Presence"
      },
      {
        "@type": "HowToSupply",
        "name": "Email Marketing Platform"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Marketing Automation Software"
      },
      {
        "@type": "HowToTool",
        "name": "Analytics Platform"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Complete Review & Plan",
        "text": "First, we look at everything you're currently doing online and what your competitors are doing. From this, we build a simple, step-by-step plan that guides all our decisions.",
        "url": "https://redoxdigital.com.au/#how-it-works",
        "image": "https://redoxdigital.com.au/Images/ab2cccf2-7d2e-4bcf-8aba-5d606ce8992f.webp"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Connect, Create & Build Trust",
        "text": "We make your website, social media, and email marketing work together as one team. We help you find the right words and content to attract your ideal customers and build trust in your brand.",
        "url": "https://redoxdigital.com.au/#how-it-works",
        "image": "https://redoxdigital.com.au/Images/ab2cccf2-7d2e-4bcf-8aba-5d606ce8992f.webp"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Implement Your Customer's Path",
        "text": "We map out the simple path a person takes from first hearing about you to becoming a happy customer. We then implement the connected strategy, ensuring we know exactly what they need at each step.",
        "url": "https://redoxdigital.com.au/#how-it-works",
        "image": "https://redoxdigital.com.au/Images/ab2cccf2-7d2e-4bcf-8aba-5d606ce8992f.webp"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Measure, Improve & Grow",
        "text": "We track your results and turn confusing numbers into simple, actionable insights. We show you what's working and what's not, and as your business grows, we make sure your marketing strategy grows with you.",
        "url": "https://redoxdigital.com.au/#how-it-works",
        "image": "https://redoxdigital.com.au/Images/ab2cccf2-7d2e-4bcf-8aba-5d606ce8992f.webp"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}


