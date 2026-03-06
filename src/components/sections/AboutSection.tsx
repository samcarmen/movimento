"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import AccentDivider from "@/components/shared/AccentDivider";
import { bodyText, headingText } from "@/lib/styles";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const STORY_COLUMNS = [
  {
    title: "Our Method",
    paragraph:
      "We work with the Canali Postural Method — an internationally recognized approach combining biomechanical principles with precision and respect for the body's natural organization. Through targeted, progressive exercises, we improve the way your body moves in everyday life.",
    extraClass: "",
  },
  {
    title: "Our Approach",
    paragraph:
      "Every person has a unique body, story, and way of moving. Each program begins with careful listening and observation, then is built around your needs, goals, and abilities — respecting your body's timing and supporting gradual, sustainable progress.",
    extraClass: "lg:pt-32",
  },
] as const;

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

interface StoryColumnProps {
  title: string;
  paragraph: string;
  extraClass?: string;
}

function StoryColumn({ title, paragraph, extraClass = "" }: StoryColumnProps) {
  return (
    <div className={`space-y-8 ${extraClass}`}>
      <div>
        <AccentDivider />
        <h3 className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8" style={headingText}>
          {title}
        </h3>
      </div>

      <div className="space-y-6 text-lg leading-relaxed" style={bodyText}>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function AboutSection({ noPaddingBottom = false }: { noPaddingBottom?: boolean }) {
  return (
    <section
      id="about"
      className={`${noPaddingBottom ? "pt-16 md:pt-24 lg:pt-32 pb-0" : "section-padding"} relative`}
      style={{ backgroundColor: "var(--brand-tint)" }}
    >
      {/* Decorative arc — echoes logo circle emblem */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <svg
          className="absolute -top-32 -right-32 w-[600px] h-[600px] opacity-[0.07]"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="300" cy="300" r="280" stroke="var(--brand-dark)" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto container-padding">
        {/* Section label */}
        <AnimatedSection>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm tracking-[0.3em] uppercase font-semibold mb-12 sm:mb-16"
            style={{ fontFamily: "var(--font-sans)", color: "var(--brand-dark)" }}
          >
            About Movimento
          </motion.p>
        </AnimatedSection>

        {/* Two-column story layout */}
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-32 relative">
          <div
            className="hidden lg:block absolute left-1/2 top-0 w-px h-full -translate-x-1/2"
            style={{ backgroundColor: "rgba(29,53,64,0.12)" }}
          />

          {STORY_COLUMNS.map((column, index) => (
            <AnimatedSection key={column.title} delay={index * 0.2}>
              <StoryColumn {...column} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
