"use client";
import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device is touch-enabled
    const checkTouch = () => {
      setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower || isTouch) return;

    let mouseX = 0,
      mouseY = 0;
    let followerX = 0,
      followerY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
    };

    const animate = () => {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;
      follower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`;
      requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);

    const onEnter = () => {
      cursor.classList.add("scale-[3]", "bg-neon-pink");
      follower.classList.add("scale-150", "border-neon-pink");
    };
    const onLeave = () => {
      cursor.classList.remove("scale-[3]", "bg-neon-pink");
      follower.classList.remove("scale-150", "border-neon-pink");
    };

    window.addEventListener("mousemove", onMouseMove);
    const links = document.querySelectorAll("a, button, [data-hover]");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <div className="hidden md:block">
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-neon-green rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-neon-green rounded-full pointer-events-none z-[9998] opacity-50 transition-transform duration-300 ease-out"
      />
    </div>
  );
}
