"use client";
import { useState, useRef } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiGsap,
  SiFramer,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiVercel,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiGithub,
  SiNetlify,
  SiOpenai,
  SiGoogle,
} from "react-icons/si";
import {
  RiCpuLine,
  RiCloudLine,
  RiCursorLine,
  RiRobot2Line,
  RiMagicLine,
} from "react-icons/ri";

const skillCategories = [
  {
    id: "core",
    title: "Core Stacks",
    icon: <RiCpuLine className="text-4xl" />,
    color: "#00ff88",
    bg: "bg-neon-green/5",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Redux", icon: SiRedux, color: "#764abc" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "JS ES6+", icon: SiJavascript, color: "#f7df1e" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Cloud",
    icon: <RiCloudLine className="text-4xl" />,
    color: "#00d4ff",
    bg: "bg-neon-blue/5",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "Netlify", icon: SiNetlify, color: "#00c7b7" },
    ],
  },
  {
    id: "ui",
    title: "Motion & UI",
    icon: <RiCursorLine className="text-4xl" />,
    color: "#ff0080",
    bg: "bg-neon-pink/5",
    skills: [
      { name: "GSAP", icon: SiGsap, color: "#88ce02" },
      { name: "Framer", icon: SiFramer, color: "#ff0080" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06b6d4" },
      { name: "CSS3", icon: SiCss, color: "#1572b6" },
      { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
    ],
  },
  {
    id: "ai",
    title: "AI Engineering",
    icon: <RiRobot2Line className="text-4xl" />,
    color: "#ffffff",
    bg: "bg-white/5",
    skills: [
      { name: "OpenAI", icon: SiOpenai, color: "#74aa9c" },
      { name: "Gemini", icon: SiGoogle, color: "#4285f4" },
      { name: "Cursor AI", icon: RiMagicLine, color: "#50e3c2" },
      { name: "Agentic AI", icon: RiCpuLine, color: "#00ff88" },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const isMobileSize = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative min-h-[100vh] py-16 bg-[#050505] overflow-hidden flex flex-col justify-center"
    >
      {/* Background Cyber-Matrix Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div
          className="absolute top-0 left-0 w-full h-full bg-grid"
          style={{ backgroundSize: "100px 100px" }}
        />
        <motion.div
          style={{ rotate }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] border-[0.5px] border-neon-green/10 rounded-full font-body"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        {/* Cinematic Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="font-mono text-[10px] tracking-[8px] uppercase text-neon-green/60 mb-6 block">
              Command Center
            </span>
            <h2 className="font-display text-[clamp(3.5rem,15vw,10rem)] text-white leading-[0.8] uppercase tracking-tighter">
              COGNITIVE
              <br />
              <span className="text-neon-green text-glow-green">STACK</span>
            </h2>
          </motion.div>
        </div>

        {/* Interactive Modules Hub */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillCategories.map((category, idx) => (
            <SkillModule
              key={category.id}
              category={category}
              idx={idx}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          ))}
        </div>

        {/* Global Interaction Hint */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="mt-10 md:mt-20 text-center"
        >
          <div className="font-mono text-[16px] tracking-[4px] text-white/70 uppercase flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-white/10" />
            Hover modules to deploy sub-routines
            <span className="w-12 h-px bg-white/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillModule({
  category,
  idx,
  activeCategory,
  setActiveCategory,
}: any) {
  const isMobileSize = useIsMobile();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spotlight effect positioning
  const spotlightX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const spotlightY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Smooth spring effect for tilt
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 150,
    damping: 20,
  });

  // Spotlight background animation value (Always called at top level)
  const spotlightBackground = useTransform(
    [mouseX, mouseY],
    ([x, y]: any) =>
      `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, ${category.color}40 0%, transparent 70%)`,
  );

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (isMobileSize) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // For Tilt
    mouseX.set(x / width - 0.5);
    mouseY.set(y / height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setActiveCategory(null);
  }

  return (
    <div
      className="relative"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setActiveCategory(category.id)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Module Base with 3D Tilt & Spotlight */}
      <motion.div
        style={{ rotateX, rotateY }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.1 }}
        className={`group relative p-12 border border-white/10 bg-white/[0.01] overflow-hidden flex flex-col items-center gap-6 min-h-[300px] justify-center transition-colors duration-500
          ${activeCategory === category.id ? "border-white/20 scale-[1.02]" : ""}
        `}
      >
        {/* Radial Spotlight Follower - Disabled on Mobile for performance */}
        {!isMobileSize && (
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-500"
            style={{
              background: spotlightBackground,
            }}
          />
        )}

        {/* Animated Border Beam */}
        <AnimatePresence>
          {activeCategory === category.id && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent animate-border-flow-x" />
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent animate-border-flow-x-reverse" />
              <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent animate-border-flow-y" />
              <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent animate-border-flow-y-reverse" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Visual Accent Top Bar */}
        <div
          className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-30 transition-all duration-500 ${activeCategory === category.id ? "opacity-100 scale-x-110" : ""}`}
          style={{ color: category.color }}
        />

        {/* Icon Container with Glitch */}
        <div className="relative">
          <motion.div
            animate={activeCategory === category.id ? { y: [0, -5, 0] } : {}}
            className="text-white group-hover:text-neon-green transition-colors duration-500 relative z-10"
            style={{
              color: activeCategory === category.id ? category.color : "",
            }}
          >
            {category.icon}
          </motion.div>
          {activeCategory === category.id && (
            <motion.div
              layoutId="glow"
              className="absolute inset-0 blur-2xl opacity-50"
              style={{ backgroundColor: category.color }}
            />
          )}
        </div>

        <div className="text-center relative z-10">
          <h3 className="font-display text-3xl text-white uppercase tracking-tight mb-2">
            {category.title}
          </h3>
          <span className="font-mono text-[9px] tracking-[2px] text-white/20 uppercase group-hover:text-white/40 transition-colors">
            Initialize Module
          </span>
        </div>

        {/* Animated Scanner */}
        <motion.div
          initial={{ top: "-100%" }}
          animate={{ top: "100%" }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="absolute left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none"
        />
      </motion.div>

      {/* Exploration Overlay - Exploding Skills */}
      <AnimatePresence>
        {activeCategory === category.id && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            className="absolute inset-x-0 -top-20 z-20 flex flex-wrap justify-center gap-4 pointer-events-none"
          >
            {category.skills.map((skill: any, sIdx: number) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: (sIdx - 1) * 30, y: 50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  delay: sIdx * 0.05,
                  type: "spring",
                  stiffness: 200,
                }}
                className="px-6 py-3 bg-dark/80 border border-white/20 backdrop-blur-3xl flex items-center gap-3 shadow-2xl"
              >
                <skill.icon
                  className="text-xl"
                  style={{ color: skill.color }}
                />
                <span className="font-mono text-[10px] text-white uppercase tracking-wider whitespace-nowrap">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes border-flow-x {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes border-flow-y {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .animate-border-flow-x {
          animation: border-flow-x 2s infinite linear;
        }
        .animate-border-flow-x-reverse {
          animation: border-flow-x 2s infinite linear reverse;
        }
        .animate-border-flow-y {
          animation: border-flow-y 2s infinite linear;
        }
        .animate-border-flow-y-reverse {
          animation: border-flow-y 2s infinite linear reverse;
        }
      `}</style>
    </div>
  );
}
