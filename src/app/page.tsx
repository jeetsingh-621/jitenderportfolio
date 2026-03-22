'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'
import Cursor from '@/components/ui/Cursor'
import Marquee from '@/components/ui/Marquee'
import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => { lenis.destroy() }
  }, [])

  return (
    <main className="relative bg-dark min-h-screen noise">
      {/* Scanline animation */}
      <div className="scanline-bar" />

      {/* Custom cursor */}
      <Cursor />

      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Marquee />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
