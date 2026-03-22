"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-body
          ${
            scrolled 
              ? "bg-[#050505]/80 backdrop-blur-2xl border-b border-white/10 py-3" 
              : "bg-transparent py-4 md:py-6"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo - Bold & Static Focus */}
          <a
            href="#hero"
            className="group font-display text-xl md:text-2xl tracking-[0.2em] text-white relative z-50 focus:outline-none flex items-center gap-2"
          >
            <span className="text-white group-hover:text-neon-green transition-colors duration-500">JITENDER</span>
            <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse shadow-neon-green" />
          </a>

          {/* Magnetic Navigation - Bold & Larger Font */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <MagneticLink key={link.label} href={link.href}>
                <span className="font-mono text-[13px] tracking-[4px] uppercase font-bold text-white/50 group-hover:text-white transition-colors duration-300">
                  {link.label}
                </span>
                {/* Thick Fill Line Indicator */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon-green group-hover:w-full transition-all duration-500" />
              </MagneticLink>
            ))}
            
            {/* Resume Button with Flowing Glow */}
            <motion.a
                href="/Jitender_Resume.pdf"
                download="Jitender_Resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-2.5 font-mono text-[11px] tracking-[2px] uppercase text-dark bg-neon-green hover:bg-white transition-all duration-300 rounded-sm font-bold shadow-md hover:shadow-neon-green/30"
            >
              Resume <span className="text-xs">↗</span>
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-50 flex items-center justify-center p-2 group"
          >
            <div className="flex flex-col gap-2 items-end">
              <span className={`h-[2px] bg-white transition-all duration-500 ${menuOpen ? "w-8 rotate-45 translate-y-[10px]" : "w-8"}`} />
              <span className={`h-[2px] bg-white transition-all duration-500 ${menuOpen ? "w-0 opacity-0" : "w-6"}`} />
              <span className={`h-[2px] bg-white transition-all duration-500 ${menuOpen ? "w-8 -rotate-45 -translate-y-[10px]" : "w-4"}`} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - Bold & Clean */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-dark flex flex-col pt-32 px-10"
          >
            <div className="space-y-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-end gap-6"
                  >
                    <span className="font-display text-7xl text-white group-hover:text-neon-green transition-all duration-300 uppercase leading-none italic">
                      {link.label}
                    </span>
                    <span className="font-mono text-xs text-neon-green/30 tracking-[4px] mb-2 group-hover:text-neon-green transition-colors">0{i + 1}</span>
                  </a>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-auto pb-16 pt-10 border-t border-white/5">
                <p className="font-mono text-[10px] tracking-[4px] text-white/20 uppercase mb-6">Connect Portals</p>
                <div className="flex gap-10">
                   <a href="#" className="font-mono text-sm text-white/40 hover:text-neon-green transition-colors uppercase">GitHub</a>
                   <a href="#" className="font-mono text-sm text-white/40 hover:text-neon-green transition-colors uppercase">LinkedIn</a>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MagneticLink({ children, href }: any) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!linkRef.current) return;
    const { left, top, width, height } = linkRef.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    
    // Magnetic pull distance
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.a
      ref={linkRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative group py-2"
    >
      {children}
    </motion.a>
  );
}
