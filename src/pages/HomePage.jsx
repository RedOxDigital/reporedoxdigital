import { BrainCircuit } from 'lucide-react'
import Meta from '../components/seo/Meta'
import JsonLdSchema from '../components/seo/JsonLdSchema'
import FaqSchema from '../components/seo/FaqSchema'
import OptimizedImage from '../components/ui/OptimizedImage'

const homePageFaqs = [
  {
    question: "What is the core focus of this web foundation?",
    answer: "This foundation is architected for dual dominance in traditional search (SEO) and AI-driven answers (GEO), ensuring maximum visibility."
  },
  {
    question: "What technologies are used?",
    answer: "This project uses Vite, React, and Tailwind CSS, with a focus on performance, code quality, and best-in-class SEO practices."
  }
]

export default function HomePage() {
  return (
    <>
      <Meta
        title="Your Business Name - Professional Services"
        description="High-quality professional services for your business needs. This site is built on a production-ready, SEO-first foundation."
        canonicalUrl="https://www.example.com/" // ⚠ EDIT THIS domain
      />
      <JsonLdSchema />
      <FaqSchema faqData={homePageFaqs} />

      <div className="container py-12 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-center gap-4">
            <BrainCircuit className="h-8 w-8 text-secondary-500" />
            <h1>A Clear, Compelling Page Title (H1)</h1>
          </div>
          
          <p className="mt-4 text-lg font-semibold text-primary-800">
            This is a 40-60 word, direct answer to the user's primary intent.
            It summarizes the most critical information on the page, making it
            easily citable for AI generative engines and clear for human users.
          </p>
          
          <div className="mt-8">
            <OptimizedImage
              src="https://placehold.co/800x400/0ea5e9/f0f9ff"
              alt="A descriptive alt text for the main hero image."
              className="mx-auto rounded-lg shadow-lg"
              isLcp={true}
            />
          </div>
        </div>
      </div>
    </>
  )
}
