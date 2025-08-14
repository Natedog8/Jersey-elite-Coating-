import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import Transform from './components/Transform'
import Testimonials from './components/Testimonials'
import Locations from './components/Locations'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Transform />
      <Testimonials />
      <Locations />
      <Contact />
      <Footer />
    </main>
  )
}
