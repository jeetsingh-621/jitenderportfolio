"use client";
import React, { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const experiences = [
  {
    company: "Eminence Technology",
    role: "Frontend Developer",
    period: "Dec 2025 – Mar 2026",
    type: "Product + Service",
    color: "#00ff88",
    projects: [
      "ItsBots AI — https://itsbot.ai/",
      "Eminence Tech — https://eminencetechnology.com/",
    ],
    bullets: [
      "Developed and optimized multiple company and client websites with responsive UI design.",
      "Worked on the company AI product ItsBots using Next.js and improved UI/UX.",
      "Implemented animations and interactive UI components.",
      "Collaborated on multiple client service projects.",
    ],
  },
  {
    company: "Nosh Infotech",
    role: "Frontend Developer",
    period: "Jan 2025 – Sept 2025",
    type: "Service Based",
    color: "#00d4ff",
    projects: [],
    bullets: [
      "Developed responsive UI components using React.js, JavaScript, HTML5, and Tailwind CSS.",
      "Integrated REST APIs and handled state management.",
      "Improved application performance by optimizing assets and structure.",
      "Fixed UI bugs and ensured cross-browser compatibility.",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const scrollLine = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const lineHeight = useTransform(scrollLine, [0, 1], ["0%", "100%"]);
  const headPos = useTransform(scrollLine, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" ref={sectionRef} className="relative py-16 bg-dark-2 overflow-hidden px-4 md:px-8">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-neon-green/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[10px] tracking-[4px] uppercase text-neon-green/60">03. Archive</span>
          <div className="flex-1 h-px bg-neon-green/10" />
        </motion.div>

        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="font-display text-[clamp(2.5rem,8vw,5rem)] text-white leading-[0.9] uppercase text-left"
          >
            CAREER
            <br />
            <span className="text-neon-green text-glow-green">NODES</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Central Vertical Pipeline — Desktop Only */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.05] hidden lg:block -translate-x-1/2 overflow-hidden">
             <motion.div style={{ height: lineHeight }} className="w-full bg-gradient-to-b from-neon-green via-neon-blue to-transparent shadow-[0_0_20px_#00ff8830]" />
          </div>
          
          {/* Scroll Head Indicator — Desktop Only */}
          <motion.div style={{ top: headPos }} className="absolute left-1/2 w-4 h-4 bg-neon-green hidden lg:block -translate-x-1/2 z-30 shadow-[0_0_30px_#00ff88]">
             <div className="absolute inset-0 bg-neon-green animate-ping opacity-20" />
          </motion.div>

          {/* Parallel Grid Structure */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-stretch">
            {/* Eminence (Left Node) */}
            <ExperienceCard exp={experiences[0]} align="left" />

            {/* Nosh (Right Node) */}
            <ExperienceCard exp={experiences[1]} align="right" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, align }: { exp: any; align: 'left' | 'right' }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: align === 'left' ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative group h-full"
    >
      {/* Decorative Backglow */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 blur-3xl rounded-full translate-y-[-20%]`} style={{ backgroundColor: exp.color }} />

      <div className="relative z-10 p-[1px] rounded-sm overflow-hidden bg-white/[0.02] border border-white/5 transition-all duration-500 hover:border-neon-green/30 h-full">
        {/* Animated Border Beam — Always Active Header */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-100%] opacity-100"
          style={{ background: `conic-gradient(from 0deg, transparent 60%, ${exp.color}, transparent 100%)` }}
        />

        <div className="relative z-10 bg-[#080808] group-hover:bg-[#0c0c0c] transition-all duration-700 p-8 md:p-12 h-full flex flex-col">
          {/* Subtle Internal Radial Glow on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 50%, ${exp.color}, transparent)` }} />
          
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-10 relative z-10">
            <div>
              <div className="font-mono text-[9px] tracking-[4px] uppercase mb-4 flex items-center gap-2" style={{ color: exp.color }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: exp.color }} />
                {exp.type}
              </div>
              <h3 className="font-display text-4xl md:text-5xl text-white uppercase leading-none tracking-tighter">
                {exp.company}
              </h3>
              <p className="font-body text-white/40 text-base md:text-xl mt-4 italic font-medium">{exp.role}</p>
            </div>
          </div>

          <div className="font-mono text-[10px] md:text-[11px] text-white/20 uppercase tracking-[2px] mb-8 bg-white/[0.03] w-fit px-4 py-1.5 rounded-sm border border-white/5">
            {exp.period}
          </div>

          <ul className="space-y-6 flex-grow mb-12">
            {exp.bullets.map((b: string, j: number) => (
              <li key={j} className="flex gap-4 text-white/50 group-hover:text-white/80 transition-colors text-sm md:text-base leading-relaxed">
                 <span className="mt-2 w-1.5 h-1.5 flex-shrink-0 opacity-30 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: exp.color }} />
                 {b}
              </li>
            ))}
          </ul>

          {exp.projects.length > 0 && (
            <div className="pt-8 border-t border-white/5 flex flex-wrap gap-4">
               {exp.projects.map((p: string) => (
                 <a key={p} href={p.split(" — ")[1]} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-[9px] tracking-[2px] text-white/30 hover:text-neon-green transition-colors border border-white/5 hover:border-neon-green/30 px-3 py-2 rounded-sm bg-white/[0.01]">
                   {p.split(" — ")[0]} <span className="text-[10px] opacity-40">↗</span>
                 </a>
               ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
