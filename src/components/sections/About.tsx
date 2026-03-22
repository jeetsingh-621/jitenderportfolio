"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!imgRef.current) return;
    gsap.fromTo(
      imgRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 80%",
        },
      },
    );
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-16  bg-dark-2 overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, #00ff88, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex items-center gap-4 mb-12 md:mb-20"
        >
          <motion.span
            variants={itemVariants}
            className="font-mono text-[9px] md:text-[11px] tracking-[4px] uppercase text-neon-green/70"
          >
            01. About
          </motion.span>
          <motion.div
            variants={itemVariants}
            className="flex-1 h-px bg-neon-green/10"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-2 lg:order-1"
          >
            <motion.h2
              variants={itemVariants}
              className="font-display text-[clamp(2.5rem,8vw,5rem)] leading-[0.9] text-white mb-6 md:mb-8 text-center lg:text-left"
            >
              CRAFTING DIGITAL
              <br />
              <span className="text-neon-green text-glow-green uppercase">
                Experiences
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-white/50 text-base md:text-lg leading-relaxed mb-6 text-center lg:text-left"
            >
              I'm a <span className="text-white">Frontend Developer</span> from
              Bhiwani, Haryana with 1+ year of professional experience building
              modern web applications. I specialize in
              <span className="text-neon-green"> React.js</span>,{" "}
              <span className="text-neon-blue"> Next.js</span>, and creating
              smooth, performant user interfaces.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-white/50 text-base md:text-lg leading-relaxed mb-10 text-center lg:text-left"
            >
              Currently at{" "}
              <span className="text-neon-green font-semibold">
                Eminence Technology
              </span>
              , where I work on multiple client projects turning designs into
              pixel-perfect, production-ready frontends.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-3 md:gap-4"
            >
              {[
                { label: "Location", value: "Haryana, India" },
                { label: "Status", value: "Open to Work" },
                { label: "Focus", value: "Frontend Dev" },
                { label: "Current", value: "Eminence Tech" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-3 md:p-4 border border-white/5 hover:border-neon-green/20 transition-colors bg-white/[0.01]"
                >
                  <div className="font-mono text-[8px] md:text-[10px] tracking-[2px] md:tracking-[3px] uppercase text-white/30 mb-1">
                    {item.label}
                  </div>
                  <div className="font-body text-white/80 text-xs md:text-sm truncate">
                    {item.value}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — visual card */}
          <div
            ref={imgRef}
            className="relative order-1 lg:order-2 max-w-lg mx-auto lg:max-w-none w-full"
          >
            <div className="relative p-1 border border-neon-green/20 hover:border-neon-green/40 transition-colors duration-500 group">
              {/* Corner dots */}
              <span className="absolute -top-1 -left-1 w-2 h-2 bg-neon-green" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-neon-green" />
              <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-neon-pink" />
              <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-neon-pink" />

              <div className="bg-dark-3 p-6 md:p-10 relative overflow-hidden">
                {/* Code block aesthetic */}
                <div className="font-mono text-xs md:text-sm space-y-2 md:space-y-3 overflow-x-auto scrollbar-hide">
                  <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                    <span className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-red-500/60" />
                    <span className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-yellow-500/60" />
                    <span className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-neon-green/60" />
                    <span className="ml-2 md:ml-4 text-white/20 text-[10px] tracking-widest uppercase">
                      developer.js
                    </span>
                  </div>

                  <div className="whitespace-nowrap md:whitespace-normal">
                    <div>
                      <span className="text-neon-pink">const</span>{" "}
                      <span className="text-neon-blue">developer</span>{" "}
                      <span className="text-white/50">=</span> {"{"}
                    </div>
                    <div className="pl-4 md:pl-6">
                      <span className="text-neon-green">name</span>
                      <span className="text-white/50">:</span>{" "}
                      <span className="text-white/80">"Jitender"</span>
                      <span className="text-white/30">,</span>
                    </div>
                    <div className="pl-4 md:pl-6">
                      <span className="text-neon-green">role</span>
                      <span className="text-white/50">:</span>{" "}
                      <span className="text-white/80">"Frontend Dev"</span>
                      <span className="text-white/30">,</span>
                    </div>
                    <div className="pl-4 md:pl-6">
                      <span className="text-neon-green">exp</span>
                      <span className="text-white/50">:</span>{" "}
                      <span className="text-neon-blue/80">"1+ year"</span>
                      <span className="text-white/30">,</span>
                    </div>
                    <div className="pl-4 md:pl-6">
                      <span className="text-neon-green">stack</span>
                      <span className="text-white/50">:</span> [
                    </div>
                    <div className="pl-8 md:pl-12 text-white/50">
                      "React.js"<span className="text-white/30">,</span>{" "}
                      "Next.js"<span className="text-white/30">,</span>
                    </div>
                    <div className="pl-8 md:pl-12 text-white/50">
                      "GSAP"<span className="text-white/30">,</span> "Tailwind"
                    </div>
                    <div className="pl-4 md:pl-6">
                      ]<span className="text-white/30">,</span>
                    </div>
                    <div className="pl-4 md:pl-6">
                      <span className="text-neon-green">status</span>
                      <span className="text-white/50">:</span>{" "}
                      <span className="text-neon-green">"Available"</span>
                    </div>
                    <div>{"}"}</div>
                  </div>
                </div>

                {/* Glowing bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent" />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 md:-bottom-6 -right-2 md:-right-6 px-3 md:px-4 py-1.5 md:py-2 bg-dark-3 border border-neon-blue/30 shadow-neon-blue z-10"
            >
              <span className="font-mono text-[8px] md:text-[10px] tracking-[2px] md:tracking-[3px] uppercase text-neon-blue">
                React Expert
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
