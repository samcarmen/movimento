"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ShimmerButton from "@/components/shared/ShimmerButton";
import { Button } from "@/components/ui/button";
import { bodyText } from "@/lib/styles";

export default function HeroSection({ noPaddingBottom = false }: { noPaddingBottom?: boolean }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-start lg:items-center"
      style={{ backgroundColor: "var(--brand-light)" }}
    >
      {/* Ghost watermark — logo figure, bleeding off left edge */}
      <div
        className="absolute top-1/2 pointer-events-none select-none"
        style={{
          left: "-140px",
          transform: "translateY(-50%)",
          width: "560px",
          opacity: 0.07,
          color: "var(--brand-primary)",
        }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer circle */}
          <circle cx="50" cy="50" r="47" stroke="currentColor" strokeWidth="2.5" />
          {/* Head */}
          <circle cx="50" cy="17" r="5.5" fill="currentColor" />
          {/* Arms — wide sweep from centre out to each side */}
          <path
            d="M 10,46 C 25,41 40,30 50,27 C 60,30 75,41 90,46"
            stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
          />
          {/* Left leg — curves outward and down */}
          <path
            d="M 42,55 C 35,58 27,65 24,76 C 23,82 28,85 34,82"
            stroke="currentColor" strokeWidth="5" strokeLinecap="round"
          />
          {/* Right leg — mirror of left */}
          <path
            d="M 58,55 C 65,58 73,65 76,76 C 77,82 72,85 66,82"
            stroke="currentColor" strokeWidth="5" strokeLinecap="round"
          />
        </svg>
      </div>

      <div className={`relative max-w-7xl mx-auto container-padding w-full pt-28 ${noPaddingBottom ? "pb-0" : "pb-16"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8">

          {/* ── LEFT: Text content ─────────────────────────────────────────── */}
          <div className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-16 py-8 lg:py-0">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4 mb-6"
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[0.9] font-bold tracking-tight mb-8"
              style={{ fontFamily: "var(--font-sans)", color: "var(--brand-dark)" }}
            >
              Where<br />
              Quality<br />
              Meets<br />
              Movement
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl leading-relaxed max-w-lg mb-10"
              style={bodyText}
            >
              Conscious movement for a body that works with you, not against you.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <ShimmerButton
                size="lg"
                className="px-8 py-6 text-base font-medium tracking-wide"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="flex items-center gap-2">
                  Experience Movimento
                  <ArrowRight size={18} />
                </span>
              </ShimmerButton>

              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base font-medium tracking-wide border-2 bg-transparent hover:bg-black/5"
                style={{
                  borderColor: "var(--brand-dark)",
                  color: "var(--brand-dark)",
                  fontFamily: "var(--font-sans)",
                }}
                onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
              >
                Our Philosophy
              </Button>
            </motion.div>
          </div>

          {/* ── RIGHT: Studio photo ─────────────────────────────────────── */}
          <div className="lg:col-span-5 flex items-center pb-16 lg:pb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative w-full rounded-full overflow-hidden min-h-[20rem]"
              style={{ aspectRatio: "1/1" }}
            >
              <Image
                src="/images/hero-photo.jpg"
                alt="Movimento studio"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
