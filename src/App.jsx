import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-primary-50 font-sans text-primary-900">
      <Header />
      <main className="flex-grow">
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}