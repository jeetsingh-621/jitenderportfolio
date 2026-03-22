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
      "ItsBots AI Product — https://itsbot.ai/",
      "Eminence Technology Website — https://eminencetechnology.com/",
    ],
    bullets: [
      "Developed and optimized multiple company and client websites with responsive UI design.",
      "Worked on the company AI product ItsBots using Next.js and improved UI/UX.",
      "Implemented animations and interactive UI components.",
      "Updated and improved the company website with the latest frontend version.",
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
      "Improved application performance by optimizing assets and frontend structure.",
      "Fixed UI bugs and ensured cross-browser compatibility.",
      "Collaborated with designers and backend developers to deliver production-ready features.",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-16 bg-dark-2 overflow-hidden px-4 md:px-8"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="flex items-center gap-4 mb-20"
        >
          <span className="font-mono text-[9px] md:text-[11px] tracking-[4px] uppercase text-neon-green/70">
            03. Experience
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
            WHERE I'VE
            <br />
            <span className="text-neon-green text-glow-green">WORKED</span>
          </motion.h2>
          <p className="text-white/20 font-mono text-[10px] md:text-[11px] tracking-[2px] uppercase mb-4 max-w-xs text-left md:text-right hidden md:block">
            Professional journey and technical contributions
          </p>
        </div>

        <div className="relative">
          {/* Main Timeline Line (Static) */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-neon-green/10 hidden lg:block transform lg:-translate-x-1/2" />

          <div className="space-y-24 md:space-y-32">
            {experiences.map((exp, i) => (
              <TimelineItem key={exp.company} exp={exp} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ exp, i }: { exp: any; i: number }) {
  const itemRef = useRef(null);
  const isItemInView = useInView(itemRef, { once: true, margin: "-20%" });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isItemInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative lg:grid lg:grid-cols-2 gap-16 md:gap-24 ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
    >
      {/* Static Timeline dot */}
      <div
        className="hidden lg:block absolute left-1/2 top-10 w-4 h-4 -translate-x-1/2 border-2 border-dark z-20"
        style={{
          borderColor: exp.color,
          backgroundColor: exp.color,
          boxShadow: `0 0 10px ${exp.color}60`,
        }}
      />

      {/* Content card with Border Beam Effect */}
      <div className={`${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
        <div className="relative group p-[1px] overflow-hidden rounded-sm">
          {/* Border Beam Logic — Always Active */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 3, // Slightly faster for continuous motion
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[-100%] opacity-100"
            style={{
              background: `conic-gradient(from 0deg, transparent 60%, ${exp.color}, transparent 100%)`,
            }}
          />

          <div className="relative z-10 p-8 md:p-10 bg-[#0a0a0a] transition-all duration-500">
            {/* Top accent line (fallback/extra detail) */}
            <div
              className="absolute top-0 left-0 right-0 h-px opacity-50 transition-all duration-500 group-hover:opacity-100"
              style={{
                background: `linear-gradient(90deg, ${exp.color}00, ${exp.color}cc, ${exp.color}00)`,
              }}
            />

            <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-8">
              <div>
                <div
                  className="font-mono text-[9px] md:text-[10px] tracking-[4px] uppercase mb-3 flex items-center gap-2"
                  style={{ color: exp.color }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: exp.color }}
                  />
                  {exp.type}
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-white uppercase tracking-tight group-hover:text-glow-white transition-all">
                  {exp.company}
                </h3>
                <div className="font-body text-white/50 text-sm md:text-base mt-2">
                  {exp.role}
                </div>
              </div>
              <div className="font-mono text-[10px] md:text-[12px] text-white/20 whitespace-nowrap bg-white/[0.03] px-3 py-1 border border-white/5 rounded-full">
                {exp.period}
              </div>
            </div>

            <ul className="space-y-4">
              {exp.bullets.map((b: string, j: number) => (
                <li
                  key={j}
                  className="flex items-start gap-4 text-white/40 group-hover:text-white/60 transition-colors text-sm md:text-base leading-relaxed"
                >
                  <span
                    className="mt-2.5 w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: exp.color }}
                  />
                  {b}
                </li>
              ))}
            </ul>

            {exp.projects.length > 0 && (
              <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap gap-4">
                {exp.projects.map((p: string) => (
                  <a
                    key={p}
                    href={p.split(" — ")[1]}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[9px] md:text-[10px] tracking-[2px] uppercase text-neon-blue/40 hover:text-neon-blue transition-all border border-neon-blue/10 hover:border-neon-blue/30 px-3 py-1.5 rounded-sm"
                  >
                    ↗ {p.split(" — ")[0]}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
