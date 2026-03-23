'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={sectionRef} className="relative py-16 bg-dark-2 overflow-hidden px-4 md:px-8">
      {/* Big background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-display text-[25vw] md:text-[20vw] text-white/[0.02] select-none uppercase tracking-tighter">CONTACT</span>
      </div>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full pointer-events-none opacity-50 md:opacity-100"
        style={{ background: 'radial-gradient(circle, rgba(0,255,136,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto text-center relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="flex items-center justify-center gap-4 mb-12 md:mb-16"
        >
          <div className="w-8 md:w-16 h-px bg-neon-green/10" />
          <span className="font-mono text-[11px] md:text-[12px] tracking-[4px] uppercase text-neon-green/70">05. Contact</span>
          <div className="w-8 md:w-16 h-px bg-neon-green/10" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.5rem,10vw,7rem)] text-white leading-[0.9] mb-6 mb:mb-8"
        >
          LET'S BUILD
          <br />
          <span className="text-neon-green text-glow-green uppercase">Something</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="text-white/40 font-body text-base md:text-lg max-w-xl mx-auto mb-10 md:mb-14 leading-relaxed"
        >
          Open to new opportunities, freelance projects, and collaborations.
          Let's create something exceptional together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 md:gap-6 mb-16 md:mb-24"
        >
          <a
            href="mailto:jeetsinghjeet68@gmail.com"
            className="group relative inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 font-mono text-[11px] md:text-[12px] tracking-[3px] uppercase text-dark bg-neon-green hover:bg-transparent hover:text-neon-green border border-neon-green transition-all duration-300 hover:shadow-neon-green active:scale-95"
          >
            Say Hello →
          </a>
          <a
            href="https://linkedin.com/in/jeet-singh-aa11a9158"
            target="_blank"
            className="inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 font-mono text-[11px] md:text-[12px] tracking-[3px] uppercase text-white/50 border border-white/10 hover:border-neon-blue/50 hover:text-neon-blue transition-all duration-300 active:scale-95"
          >
            LinkedIn ↗
          </a>
        </motion.div>

        {/* Contact details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-6 border-t border-white/5 pt-12 md:pt-14"
        >
          {[
            { label: 'Email', value: 'jeetsinghjeet68@gmail.com', href: 'mailto:jeetsinghjeet68@gmail.com' },
            { label: 'Phone', value: '+91 8607016905', href: 'tel:+918607016905' },
            { label: 'GitHub', value: 'jeetsingh-621', href: 'https://github.com/jeetsingh-621' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              className="group block"
            >
              <div className="font-mono text-[10px] md:text-[12px] tracking-[3px] uppercase text-white/20 mb-2">{item.label}</div>
              <div className="font-body text-white/60 group-hover:text-neon-green transition-colors text-sm md:text-base break-words md:break-normal truncate-xs">{item.value}</div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
