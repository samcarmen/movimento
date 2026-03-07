"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ShimmerButton from "@/components/shared/ShimmerButton";
import { Button } from "@/components/ui/button";
import { bodyText } from "@/lib/styles";

export default function HeroSection({ noPaddingBottom = false }: { noPaddingBottom?: boolean }) {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center min-h-[100dvh] md:min-h-0"
      style={{ backgroundColor: "var(--brand-light)" }}
    >
      {/* Ghost watermark — SVG logo as CSS background for fixed positioning */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url('/images/LOGO_WEB-03.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "50% auto",
          opacity: 0.1,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className={`relative max-w-7xl mx-auto container-padding w-full pt-20 sm:pt-24 md:pt-28 ${noPaddingBottom ? "pb-0" : "pb-12 sm:pb-16"}`}>

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
          className="text-base sm:text-lg md:text-xl leading-relaxed max-w-xs sm:max-w-sm mb-8"
          style={bodyText}
        >
          Conscious movement for a body that works with you, not against you.
        </motion.p>

        {/* CTAs */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <ShimmerButton
              size="lg"
              className="px-8 py-6 text-base font-medium tracking-wide"
              onClick={() => window.open("https://wa.me/96566130788?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20Movimento.", "_blank")}
            >
              <span className="flex items-center gap-2">
                Schedule a session
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

      </div>

    </section>
  );
}
