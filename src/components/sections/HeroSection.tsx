"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import ShimmerButton from "@/components/shared/ShimmerButton";
import { bodyText, headingText } from "@/lib/styles";

const WA_URL = "https://wa.me/96566130788?text=Hi!%20I%27d%20like%20to%20schedule%20a%20class%20at%20Movimento.";

const SLIDES = [
  { src: "/images/gallery/client-wall-bars-knee-lift.jpg", alt: "client wall bars knee lift", position: "object-center" },
  { src: "/images/gallery/therapist-side-lying-leg-lift-02.jpg", alt: "therapist side lying leg lift", position: "object-center" },
  { src: "/images/gallery/client-back-extension-table.jpg", alt: "client back extension table", position: "object-center" },
  { src: "/images/gallery/studio-treatment-area-window-view.jpg", alt: "studio treatment area window view", position: "object-center" },
  { src: "/images/gallery/studio-wall-bars-window-view.jpg", alt: "studio wall bars window view", position: "object-center" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((index: number) => {
    setCurrent(index);
    setPaused(true);
    setTimeout(() => setPaused(false), 8000);
  }, []);

  const next = useCallback(() => go((current + 1) % SLIDES.length), [current, go]);
  const prev = useCallback(() => go((current - 1 + SLIDES.length) % SLIDES.length), [current, go]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setCurrent((i) => (i + 1) % SLIDES.length), 5000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      id="hero"
      className="relative lg:min-h-[100dvh]"
      style={{ backgroundColor: "var(--brand-light)" }}
    >
      {/* Ghost watermark — commented out, awkward on mobile
      <div
        className="lg:hidden absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url('/images/LOGO_WEB-03.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "70% auto",
          opacity: 0.15,
          mixBlendMode: "multiply",
        }}
        aria-hidden="true"
      />
      */}

      {/* Full-height grid */}
      <div className="relative w-full lg:min-h-[100dvh] grid lg:grid-cols-2">

        {/* Left panel */}
        <div className="order-2 lg:order-1 flex flex-col justify-start lg:justify-center px-4 sm:px-6 lg:px-16 xl:px-20 pt-10 pb-20 sm:pb-24 lg:py-0">

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] leading-[0.95] font-bold tracking-tight mb-8 sm:mb-10"
            style={headingText}
          >
            Move without pain.
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl leading-relaxed mb-10 text-pretty"
            style={bodyText}
          >
            Posture correction and body alignment, Kuwait.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            <ShimmerButton
              size="lg"
              className="px-8 py-6 text-base font-medium tracking-wide"
              onClick={() => window.open(WA_URL, "_blank", "noopener,noreferrer")}
            >
              <span className="flex items-center gap-2">
                Schedule a session
                <ArrowRight size={18} />
              </span>
            </ShimmerButton>
          </motion.div>

        </div>

        {/* Right panel — image carousel */}
        <div className="order-1 lg:order-2 mt-20 sm:mt-24 lg:mt-0 overflow-hidden aspect-[4/3] lg:aspect-auto relative lg:h-auto">
          <AnimatePresence mode="sync">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 lg:top-20"
            >
              <Image
                src={SLIDES[current].src}
                alt={SLIDES[current].alt}
                fill
                className={`object-cover ${SLIDES[current].position}`}
                priority={current === 0}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Prev button */}
          <button
            type="button"
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full opacity-60 hover:opacity-100 transition-opacity duration-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            style={{ backgroundColor: "var(--brand-dark)" }}
            aria-label="Previous image"
          >
            <ChevronLeft size={20} color="white" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full opacity-60 hover:opacity-100 transition-opacity duration-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            style={{ backgroundColor: "var(--brand-dark)" }}
            aria-label="Next image"
          >
            <ChevronRight size={20} color="white" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 lg:bottom-16 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "24px" : "8px",
                  height: "8px",
                  backgroundColor: i === current ? "white" : "rgba(255,255,255,0.5)",
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Wave bottom — clips carousel image and transitions to About section */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
        style={{ lineHeight: 0, marginBottom: "-2px" }}
      >
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
          style={{ display: "block", width: "100%", height: "clamp(32px, 4vw, 60px)" }}
        >
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--brand-tint)" />
        </svg>
      </div>

    </section>
  );
}
