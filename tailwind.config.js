/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neon-green": "#00ff88",
        "neon-blue": "#00d4ff",
        "neon-pink": "#ff0080",
        dark: "#050505",
        "dark-2": "#0a0a0a",
        "dark-3": "#111111",
        "dark-4": "#1a1a1a",
      },
      fontFamily: {
        mono: ['"Space Mono"', "monospace"],
        display: ['"Bebas Neue"', "cursive"],
        body: ['"DM Sans"', "sans-serif"],
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scanline: {
          "0%": { top: "-2px" },
          "100%": { top: "100vh" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        glitchMove: {
          "0%, 100%": { clipPath: "inset(0 0 100% 0)" },
          "20%": {
            clipPath: "inset(20% 0 60% 0)",
            transform: "translate(-4px)",
          },
          "40%": {
            clipPath: "inset(60% 0 20% 0)",
            transform: "translate(4px)",
          },
          "60%": {
            clipPath: "inset(40% 0 40% 0)",
            transform: "translate(-2px)",
          },
          "80%": { clipPath: "inset(0 0 100% 0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        scanline: "scanline 6s linear infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        glitchMove: "glitchMove 3s infinite",
        marquee: "marquee 20s linear infinite",
      },
      boxShadow: {
        "neon-green":
          "0 0 10px rgba(0,255,136,0.5), 0 0 40px rgba(0,255,136,0.15)",
        "neon-blue":
          "0 0 10px rgba(0,212,255,0.5), 0 0 40px rgba(0,212,255,0.15)",
        "neon-pink":
          "0 0 10px rgba(255,0,128,0.5), 0 0 40px rgba(255,0,128,0.15)",
        "neon-green-sm": "0 0 6px rgba(0,255,136,0.6)",
        card: "0 0 0 1px rgba(0,255,136,0.1), 0 20px 40px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
