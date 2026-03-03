"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ShimmerButton from "@/components/shared/ShimmerButton";
import { Button } from "@/components/ui/button";
import { bodyText } from "@/lib/styles";

const HOURS = [
  { days: "Mon – Sat", time: "10:00 – 22:00", open: true },
  { days: "Sunday", time: "Closed", open: false },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-start lg:items-center"
      style={{ backgroundColor: "var(--brand-light)" }}
    >
      <div className="relative max-w-7xl mx-auto container-padding w-full pt-28 pb-16">
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
              A studio dedicated to conscious movement, helping you restore balance,
              stability, and freedom in your body. Move better. Live better.
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

          {/* ── RIGHT: Blue-grey info panel ────────────────────────────────── */}
          <div className="lg:col-span-5 flex items-center pb-16 lg:pb-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full rounded-lg p-10"
              style={{
                backgroundColor: "var(--brand-primary)",
              }}
            >
              {/* Find Us label */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="tracking-[0.3em] uppercase mb-4 text-xs font-semibold"
                style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.6)" }}
              >
                Find Us
              </motion.p>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mb-6"
              >
                <p
                  className="text-3xl leading-tight font-bold"
                  style={{ fontFamily: "var(--font-sans)", color: "white" }}
                >
                  Al Sawaber<br />Tower 5
                </p>
                <p
                  className="tracking-[0.2em] uppercase mt-2 text-xs font-medium"
                  style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.55)" }}
                >
                  Kuwait City
                </p>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="h-px mb-6"
                style={{ backgroundColor: "rgba(255,255,255,0.2)", transformOrigin: "left" }}
              />

              {/* Studio Hours label */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="tracking-[0.3em] uppercase mb-4 text-xs font-semibold"
                style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.6)" }}
              >
                Studio Hours
              </motion.p>

              {/* Hours rows */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="space-y-3"
              >
                {HOURS.map(({ days, time, open }) => (
                  <div key={days} className="flex justify-between items-baseline gap-4">
                    <span
                      className="text-base font-semibold"
                      style={{
                        fontFamily: "var(--font-sans)",
                        color: open ? "white" : "rgba(255,255,255,0.35)",
                      }}
                    >
                      {days}
                    </span>
                    <span
                      className="text-sm tracking-wide"
                      style={{
                        fontFamily: "var(--font-sans)",
                        color: open ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.3)",
                        fontWeight: 400,
                      }}
                    >
                      {time}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
