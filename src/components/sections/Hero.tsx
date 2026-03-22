"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { gsap } from "gsap";

const roles = [
  "Frontend Developer",
  "React.js Expert",
  "Next.js Builder",
  "UI Animator",
  "Web Craftsman",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  // Mouse tilt for the portrait
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 100,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 100,
    damping: 30,
  });

  function handleMouseMove(e: React.MouseEvent) {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  }

  // Typing effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < current.length) {
        timeout = setTimeout(
          () => setDisplayText(current.slice(0, displayText.length + 1)),
          80,
        );
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(
          () => setDisplayText(displayText.slice(0, -1)),
          40,
        );
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // GSAP animations
  useEffect(() => {
    if (orb1Ref.current && orb2Ref.current) {
      gsap.to(orb1Ref.current, {
        y: -30,
        x: 20,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(orb2Ref.current, {
        y: 25,
        x: -15,
        duration: 5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1,
      });
    }

    const onMouse = (e: MouseEvent) => {
      if (!gridRef.current) return;
      const xPercent = (e.clientX / window.innerWidth - 0.5) * 20;
      const yPercent = (e.clientY / window.innerHeight - 0.5) * 20;
      gsap.to(gridRef.current, {
        x: xPercent,
        y: yPercent,
        duration: 1,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", onMouse);
    return () => window.removeEventListener("mousemove", onMouse);
  }, []);

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark font-body"
    >
      {/* Animated grid background */}
      <div
        ref={gridRef}
        className="absolute inset-[-10%] bg-grid opacity-100 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,136,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Neon orbs */}
      <div
        ref={orb1Ref}
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,136,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        ref={orb2Ref}
        className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Original Corner brackets - Responsive sizing and placement */}
      <div className="absolute top-24 md:top-24 left-2 md:left-8 w-8 h-8 md:w-12 md:h-12 border-t-2 border-l-2 border-neon-green/30" />
      <div className="absolute top-24 md:top-24 right-2 md:right-8 w-8 h-8 md:w-12 md:h-12 border-t-2 border-r-2 border-neon-green/30" />
      <div className="absolute bottom-8 left-2 md:left-8 w-8 h-8 md:w-12 md:h-12 border-b-2 border-l-2 border-neon-green/30" />
      <div className="absolute bottom-8 right-2 md:right-8 w-8 h-8 md:w-12 md:h-12 border-b-2 border-r-2 border-neon-green/30" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[3px] text-white/30 uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-10 bg-gradient-to-b from-neon-green/60 to-transparent"
        />
      </motion.div>

      {/* Main content grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-40 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Left Side: Professional Content */}
          <div className="order-1 lg:order-1">
            <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-6 md:mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 px-3 py-1 border border-neon-green/20 bg-neon-green/5"
              >
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                <span className="font-mono text-[9px] md:text-[11px] tracking-[2px] text-neon-green/80 uppercase">
                  Available for work
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <span className="w-6 md:w-8 h-px bg-neon-green/30" />
                <span className="font-mono text-[9px] md:text-[11px] tracking-[3px] md:tracking-[4px] uppercase text-white/40">
                  Frontend Developer
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-2 md:mb-4"
            >
              <h1
                className="glitch-text font-display text-[clamp(2.5rem,14vw,9rem)] leading-[0.9] tracking-tight text-white select-none"
                data-text="JITENDER"
              >
                JITENDER
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-3 mb-8 md:mb-10"
            >
              <span className="font-mono text-[clamp(0.9rem,4vw,1.6rem)] text-neon-green text-glow-green">
                {displayText}
                <span className="animate-blink">_</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-white/50 font-body text-base md:text-lg max-w-xl leading-relaxed mb-10 md:mb-12"
            >
              Building <span className="text-neon-blue">responsive</span> &{" "}
              <span className="text-neon-green">high-performance</span> web apps
              with React.js, Next.js & immersive animations. 1+ year turning
              designs into production-ready experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6 mb-16"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3.5 md:py-4 font-mono text-[10px] md:text-[12px] tracking-[3px] uppercase text-dark bg-neon-green hover:bg-transparent hover:text-neon-green border border-neon-green transition-all duration-300 hover:shadow-neon-green overflow-hidden"
              >
                <span className="relative z-10">View Work</span>
                <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3.5 md:py-4 font-mono text-[10px] md:text-[12px] tracking-[3px] uppercase text-white/60 border border-white/10 hover:border-neon-green/50 hover:text-neon-green transition-all duration-300"
              >
                Let's Talk{" "}
                <span className="group-hover:translate-x-1 transition-transform">
                  ↗
                </span>
              </a>
            </motion.div>

            {/* Original Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="grid grid-cols-2 md:flex md:flex-wrap gap-x-8 gap-y-10 py-10 border-t border-white/5"
            >
              {[
                { value: "1+", label: "Years Experience" },
                { value: "10+", label: "Projects Done" },
                { value: "2", label: "Company Work" },
                { value: "∞", label: "Lines of Code" },
              ].map((stat) => (
                <div key={stat.label} className="min-w-[120px]">
                  <div className="font-display text-3xl md:text-4xl text-neon-green text-glow-green">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[8px] md:text-[10px] tracking-[2px] md:tracking-[3px] uppercase text-white/30 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Professional 3D Digital HUD (Moving Thing) */}
          <div className="order-2 lg:order-2 mt-10 flex justify-center lg:justify-end items-center relative py-12 lg:py-0">
            <motion.div
              style={{ rotateX, rotateY }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-full max-w-sm aspect-square group flex items-center justify-center p-4"
            >
              {/* Background Glow */}
              <div className="absolute inset-x-0 inset-y-10 bg-neon-green/20 blur-[120px] group-hover:opacity-40 transition-opacity duration-1000 -z-10" />

              {/* 3D Animated HUD Components */}
              <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
                {/* Outer Rotating Dash Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-full h-full border-2 border-dashed border-neon-green/10 rounded-full"
                />

                {/* Middle Pulsing Ring */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1], rotate: -360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-4/5 h-4/5 border border-white/5 rounded-full flex items-center justify-center"
                >
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-neon-green/20 to-transparent" />
                </motion.div>

                {/* Inner Master HUD */}
                <div className="relative w-[70%] h-[70%] border border-white/5 rounded-full backdrop-blur-3xl bg-white/[0.02] flex items-center justify-center overflow-hidden border-neon-green/10">
                  {/* Glowing Power Core */}
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-24 h-24 bg-neon-green/30 blur-2xl rounded-full"
                  />
                  <div className="absolute w-14 h-14 bg-neon-green/80 rounded-full shadow-[0_0_60px_rgba(0,255,136,0.6)] animate-pulse flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-white/50 rounded-full animate-ping" />
                  </div>

                  {/* Horizontal Scanline */}
                  <motion.div
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green/40 to-transparent opacity-30"
                  />

                  {/* Data Matrix Overlay */}
                  <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-[0.05] pointer-events-none">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="border-[0.5px] border-white/20" />
                    ))}
                  </div>
                </div>

                {/* Floating Tech Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.1, 0.5, 0.1],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      delay: i * 0.7,
                    }}
                    className="absolute w-1 h-1 bg-neon-green rounded-full shadow-[0_0_10px_#00ff88]"
                    style={{
                      top: `${15 + i * 12}%`,
                      left: `${10 + (i % 4) * 25}%`,
                    }}
                  />
                ))}
              </div>

              {/* Info Display Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute -bottom-6 -left-6 bg-dark/80 border border-white/10 px-8 py-5 shadow-2xl backdrop-blur-xl z-20 border-l-neon-green border-l-2"
              >
                <p className="font-mono text-[8px] tracking-[5px] text-neon-green uppercase mb-1 font-bold">
                  System Status
                </p>
                <p className="font-display text-2xl text-white uppercase tracking-tighter">
                  SYST_ACTIVE_v1
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
