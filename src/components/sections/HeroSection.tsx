"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/shared/ShimmerButton";
import { bodyText, headingText } from "@/lib/styles";

const SCROLL_INDICATOR_ANIMATION = {
  y: ["-100%", "100%"] as string[],
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "var(--brand-light)" }}
    >
      {/* Decorative diagonal stripe */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{
          background:
            "linear-gradient(135deg, transparent 40%, var(--brand-primary) 40%, var(--brand-primary) 45%, transparent 45%)",
        }}
      />

      {/* Large background "M" */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute -right-20 top-1/2 -translate-y-1/2 text-[35rem] font-bold leading-none select-none"
        style={{ fontFamily: "var(--font-dm-serif)", color: "var(--brand-dark)" }}
      >
        M
      </motion.div>

      <div className="relative max-w-7xl mx-auto container-padding w-full pt-32 pb-20">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-16" style={{ backgroundColor: "var(--brand-accent)" }} />
            <span
              className="text-sm tracking-[0.3em] uppercase font-medium"
              style={{ color: "var(--brand-charcoal)", fontFamily: "var(--font-outfit)" }}
            >
              Move Freely
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-[4rem] md:text-[6rem] lg:text-[8rem] leading-[0.9] font-normal tracking-tight mb-8"
          >
            <span style={{ color: "var(--brand-dark)" }}>Where</span>
            <br />
            <span className="italic" style={{ color: "var(--brand-primary)" }}>
              Quality
            </span>
            <br />
            <span style={{ color: "var(--brand-dark)" }}>Meets</span>
            <br />
            <span
              style={{
                color: "var(--brand-accent)",
                textShadow: "0 4px 20px rgba(201, 165, 106, 0.3)",
              }}
            >
              Movement
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12 pl-2"
          >
            <p className="text-xl md:text-2xl leading-relaxed max-w-2xl" style={bodyText}>
              A studio dedicated to conscious movement, helping you restore balance, stability, and freedom in your body.
              <br />
              <span className="italic" style={{ color: "var(--brand-primary)" }}>
                Move better. Live better.
              </span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 pl-2"
          >
            <ShimmerButton size="lg" className="px-8 py-6 text-base font-medium tracking-wide">
              <span className="flex items-center gap-2">
                Experience Movimento
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </span>
            </ShimmerButton>

            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base font-medium tracking-wide border-2"
              style={{
                borderColor: "var(--brand-dark)",
                color: "var(--brand-dark)",
                fontFamily: "var(--font-outfit)",
              }}
            >
              Our Philosophy
            </Button>
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-24 pt-12 border-t"
          style={{ borderColor: "rgba(0, 0, 0, 0.1)" }}
        >
          <p
            className="text-3xl md:text-4xl italic font-light text-center"
            style={{ fontFamily: "var(--font-cormorant)", color: "var(--brand-charcoal)" }}
          >
            Quality as a standard.{" "}
            <span style={{ color: "var(--brand-accent)" }}>Italian excellence</span> in every step.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div
          className="w-[1px] h-20 relative overflow-hidden"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
        >
          <motion.div
            animate={SCROLL_INDICATOR_ANIMATION}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-full h-1/2"
            style={{ backgroundColor: "var(--brand-accent)" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
