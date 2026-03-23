"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Cursor from "@/components/ui/Cursor";
import Marquee from "@/components/ui/Marquee";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  // Lenis smooth scroll initialization
  useEffect(() => {
    // Determine scroll behavior based on device
    const isMobile = window.innerWidth < 1024;

    // Better Lenis config for premium feel
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: isMobile ? 0.08 : 0.1, // Faster lerp on mobile
      smoothWheel: true,
      wheelMultiplier: 1,
      // @ts-ignore
      touchMultiplier: 1.5, // Better feel for swipe
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Scroll to Top on load to prevent jitter
    window.scrollTo(0, 0);

    return () => {
      lenis.destroy();
    };
  }, []);

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
  );
}
