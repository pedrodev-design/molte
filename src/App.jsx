import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import Stats from './components/Stats'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import About from './components/About'
import Testimonial from './components/Testimonial'
import Cta from './components/Cta'
import Footer from './components/Footer'
import WhatsappFab from './components/WhatsappFab'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Services />
        <Portfolio />
        <Process />
        <About />
        <Testimonial />
        <Cta />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  )
}
