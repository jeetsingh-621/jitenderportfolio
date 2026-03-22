'use client'

const items = ['React.js', '✦', 'Next.js', '✦', 'GSAP', '✦', 'Framer Motion', '✦', 'Tailwind CSS', '✦', 'TypeScript', '✦', 'UI/UX', '✦', 'Lenis', '✦', 'Socket.io', '✦', 'Node.js', '✦']

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className="relative py-4 md:py-10 mt-14 bg-dark-3 border-y border-neon-green/10 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="font-mono text-[9px] md:text-base tracking-[2px] md:tracking-[3px] uppercase mx-4 md:mx-8 text-white/20">
            {item === '✦' ? <span className="text-neon-green/50">{item}</span> : item}
          </span>
        ))}
      </div>
    </div>
  )
}
