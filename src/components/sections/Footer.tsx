export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5 py-10 md:py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-display text-2xl tracking-widest text-neon-green/60 uppercase">JT_</span>
          <p className="font-mono text-[11px] md:text-[12px] tracking-[2px] text-white/10 uppercase">Crafting premium web experiences</p>
        </div>
        
        <span className="font-mono text-[11px] md:text-[12px] tracking-[2px] md:tracking-[3px] text-white/20 uppercase order-3 md:order-2">
          Built by Jitender © {new Date().getFullYear()}
        </span>
        
        <div className="flex gap-8 md:gap-6 order-2 md:order-3">
          {[
            { label: 'GitHub', href: 'https://github.com/jeetsingh-621' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/jeet-singh-aa11a9158' },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              className="font-mono text-[11px] md:text-[12px] tracking-[3px] uppercase text-white/30 hover:text-neon-green transition-all duration-300 border-b border-transparent hover:border-neon-green pb-1"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
