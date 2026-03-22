'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    id: '01',
    title: 'ItsBots AI',
    desc: 'Cutting-edge AI automation platform. I architected the entire frontend using Next.js, focusing on high-performance UI and seamless AI integration.',
    tech: ['Next.js', 'Tailwind', 'GSAP', 'REST APIs'],
    link: 'https://itsbot.ai/',
    color: '#00ff88',
    image: '/itsbot.png',
  },
  {
    id: '02',
    title: 'Eminence Tech',
    desc: 'Transformed the digital presence for a leading tech firm. Implemented complex motion systems and a state-of-the-art design system.',
    tech: ['React.js', 'Framer Motion', 'Tailwind'],
    link: 'https://eminencetechnology.com/',
    color: '#00d4ff',
    image: '/eminence.png',
  },
  {
    id: '03',
    title: 'NFT Market',
    desc: 'A premium Web3 marketplace interface. Focused on accessibility and high-quality aesthetic for the decentralized world.',
    tech: ['React.js', 'Vercel', 'Tailwind CSS'],
    link: 'https://nft-nine-rho.vercel.app/',
    color: '#ff0080',
    image: '/nft.png',
  },
  {
    id: '04',
    title: 'Rokkkr (Hackathon)',
    desc: 'Top-tier real-time collaborative workspace with zero-latency synchronization. Built during an intensive hackathon to solve remote collaboration challenges.',
    tech: ['Socket.io', 'React.js', 'Netlify'],
    link: 'https://rokkkr.netlify.app/',
    color: '#00ff88',
    image: '/project4.png',
  },
  {
    id: '05',
    title: 'Yoga Namaste',
    desc: 'Peaceful and minimalistic landing page for a boutique yoga studio, optimized for lightning-fast mobile performance.',
    tech: ['React.js', 'Vercel', 'Tailwind'],
    link: 'https://yoga-one-lyart.vercel.app/',
    color: '#00d4ff',
    image: '/yoga.png',
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={sectionRef} className="relative py-16 bg-dark-2 overflow-hidden px-4 md:px-8">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header - Synced with Experience Section */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={isInView ? { opacity: 1 } : {}}
           className="flex items-center gap-4 mb-20"
        >
           <span className="font-mono text-[9px] md:text-[11px] tracking-[4px] uppercase text-neon-green/70">
              04. Projects
           </span>
           <div className="flex-1 h-px bg-neon-green/10" />
        </motion.div>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16 md:mb-24">
           <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="font-display text-[clamp(2.5rem,8vw,5rem)] text-white leading-[0.9] uppercase text-left"
           >
              SELECTED
              <br />
              <span className="text-neon-green text-glow-green">WORKS</span>
           </motion.h2>
           <p className="text-white/20 font-mono text-[10px] md:text-[11px] tracking-[2px] uppercase mb-4 max-w-xs text-left md:text-right hidden md:block">
              CURATED COLLECTION OF DIGITAL PRODUCTS & HACKATHON PROJECTS
           </p>
        </div>

        {/* Project Vertical Column */}
        <div className="flex flex-col   md:gap-28 mt-10">
           {projects.map((p, i) => (
             <ProjectCard key={p.id} project={p} index={i} total={projects.length} />
           ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, total }: { project: any, index: number, total: number }) {
  const cardRef = useRef(null)
  const isItemInView = useInView(cardRef, { once: true, margin: "-100px" })

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isItemInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="group relative w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pb-10"
    >
      {/* Visual Side (Browser Frame) - Enhanced Hover Lift & Glow */}
      <motion.div 
        whileHover={{ y: -12 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative w-full lg:w-[58%] aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 group-hover:border-neon-green/30 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] group-hover:shadow-[0_40px_100px_-20px_rgba(0,255,136,0.15)] transition-all duration-500"
      >
        {/* Project Image showcased directly */}
        <div className="w-full h-full overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-700 filter grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110"
          />
        </div>
        
        {/* Hover Link */}
        <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
           <a href={project.link} target="_blank" className="px-10 py-4 bg-neon-green text-dark font-bold font-mono text-xs uppercase tracking-widest hover:bg-white transition-all transform translate-y-4 group-hover:translate-y-0">
              Launch Site ↗
           </a>
        </div>
      </motion.div>

      {/* Info Side - Interactive Text Glow & Alignments */}
      <div className="w-full lg:w-[42%] flex flex-col items-start relative lg:translate-y-0 group-hover:lg:-translate-y-4 transition-transform duration-500">
         {/* Record Label with pulsing line */}
         <div className="flex items-center gap-4 mb-6">
            <motion.div 
              animate={isItemInView ? { width: [40, 60, 40] } : {}}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="h-px bg-neon-green" 
            />
            <span className="font-mono text-[10px] tracking-[6px] text-neon-green uppercase font-bold">
               RECORD_0{index + 1}
            </span>
         </div>
         
         {/* Title with Glow effect on Hover */}
         <h4 className="font-display text-5xl lg:text-7xl text-white uppercase mb-8 leading-[0.85] tracking-tight group-hover:text-glow-green transition-all duration-300">
            {project.title}
         </h4>
         
         <p className="font-body text-white/50 text-base md:text-lg mb-10 leading-relaxed max-w-sm group-hover:text-white/70 transition-colors">
            {project.desc}
         </p>

         {/* Tech Tags */}
         <div className="flex flex-wrap gap-2 mb-12">
            {project.tech.map((t: string) => (
              <span key={t} className="font-mono text-[9px] uppercase tracking-widest text-white/40 border border-white/10 px-4 py-2 rounded-lg bg-white/5 hover:border-neon-green/40 hover:text-neon-green transition-all">
                 {t}
              </span>
            ))}
         </div>

         {/* Status Bar */}
         <div className="w-full flex items-center gap-6 mt-8">
            <div className="flex flex-col">
               <span className="font-mono text-[9px] text-white/20 uppercase tracking-[2px] mb-1">Status</span>
               <span className="font-mono text-[10px] text-neon-green uppercase tracking-[3px] italic font-bold">
                  Live Experience
               </span>
            </div>
            <div className="flex-1 h-px bg-white/10 max-w-[200px]" />
            <div className="font-mono text-xs text-white/10">{index + 1} // {total}</div>
         </div>
         
         {/* Decorative Background Number - Interactive Parallax & Reveal */}
         <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -right-16 -bottom-16 text-[22vw] font-display text-white/[0.01] select-none pointer-events-none z-0 group-hover:text-neon-green/[0.04] group-hover:translate-x-12 group-hover:-translate-y-4 group-hover:scale-110 transition-all duration-700 ease-out italic"
         >
           0{index + 1}
         </motion.div>
      </div>
    </motion.div>
  )
}
