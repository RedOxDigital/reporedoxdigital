import HomePage from './pages/HomePage'
import TestHomePage from './pages/TestHomePage'
import HomePageSimple from './pages/HomePageSimple'
import TextUsWidget from './components/ui/TextUsWidget'

export default function App() {
  // Test original HomePage with external CSS
  return (
    <>
      <HomePage />
      <TextUsWidget />
    </>
  )
}