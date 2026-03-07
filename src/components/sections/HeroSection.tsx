"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import ShimmerButton from "@/components/shared/ShimmerButton";
import { bodyText, headingText } from "@/lib/styles";

const WA_URL = "https://wa.me/96566130788?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20Movimento.";

const SLIDES = [
  { src: "/images/gallery/09.jpg", alt: "Movimento studio session" },
  { src: "/images/gallery/08.jpg", alt: "Postural alignment training" },
  { src: "/images/gallery/06.jpg", alt: "Movement session at Movimento studio" },
  { src: "/images/hero-photo.jpg", alt: "Movimento Kuwait studio" },
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
      className="relative min-h-[100dvh]"
      style={{ backgroundColor: "var(--brand-light)" }}
    >
      {/* Ghost watermark — centred logo (mobile only) */}
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

      {/* Full-height grid */}
      <div className="relative w-full min-h-[100dvh] grid lg:grid-cols-2">

        {/* Left panel */}
        <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-16 xl:px-20 pt-24 sm:pt-28 pb-12 sm:pb-16 lg:py-0">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-12" style={{ backgroundColor: "var(--brand-accent)" }} />
            <span
              className="text-xs tracking-[0.3em] uppercase font-semibold"
              style={{ fontFamily: "var(--font-sans)", color: "var(--brand-primary)" }}
            >
              Move Freely
            </span>
          </motion.div>

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
            className="text-base sm:text-lg md:text-xl leading-relaxed mb-10"
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
        <div className="hidden lg:block relative overflow-hidden">
          <AnimatePresence mode="sync">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={SLIDES[current].src}
                alt={SLIDES[current].alt}
                fill
                className="object-cover object-center"
                priority={current === 0}
                sizes="50vw"
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
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
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

    </section>
  );
}
