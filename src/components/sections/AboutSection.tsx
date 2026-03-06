"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import AccentDivider from "@/components/shared/AccentDivider";
import SectionHeading from "@/components/shared/SectionHeading";
import { bodyText, headingText, serifText } from "@/lib/styles";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const VALUES = [
  {
    number: "01",
    title: "Italian Tools & Know-How",
    description:
      "All our equipment is designed and manufactured in Italy, selected for its reliability, durability, and coherence with the Canali Postural Method.",
  },
  {
    number: "02",
    title: "Professional Guidance",
    description:
      "Each session is led with competence, care, and clarity. Continuous training, methodical work, and attention define the quality of every session.",
  },
  {
    number: "03",
    title: "Tailored Programs",
    description:
      "A personalized approach means feeling supported, never pushed — so you can rediscover ease, fluidity, and confidence day by day.",
  },
] as const;

const STORY_COLUMNS = [
  {
    title: "Our Method",
    lead: "Movimento works with the Canali Postural Method, an internationally recognized approach to posture and movement education.",
    paragraphs: [
      "Combining biomechanical principles with precision, progression, and respect for the body's natural organization, this method focuses on spinal stability and muscular balance.",
      "Through targeted, progressive exercises, we improve the way your body moves in everyday life — helping you restore ease, fluidity, and confidence.",
    ],
    extraClass: "",
  },
  {
    title: "Our Approach",
    lead: "Every body is different. That's why each program is built around you.",
    paragraphs: [
      "Every person has a unique body, story, and way of moving. At Movimento, each program begins with careful listening and observation.",
      "Exercises and training sessions are designed around your needs, goals, and abilities — respecting your body's timing and supporting gradual, sustainable progress.",
    ],
    extraClass: "lg:pt-32",
  },
] as const;

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

interface StoryColumnProps {
  title: string;
  lead: string;
  paragraphs: readonly string[];
  extraClass?: string;
}

function StoryColumn({ title, lead, paragraphs, extraClass = "" }: StoryColumnProps) {
  return (
    <div className={`space-y-8 ${extraClass}`}>
      <div>
        <AccentDivider />
        <h3 className="text-4xl md:text-5xl mb-8" style={headingText}>
          {title}
        </h3>
      </div>

      <div className="space-y-6 text-lg leading-relaxed" style={bodyText}>
        <p className="text-2xl leading-relaxed font-semibold" style={{ color: "var(--brand-dark)" }}>
          {lead}
        </p>
        {paragraphs.map((text) => (
          <p key={text.slice(0, 40)}>{text}</p>
        ))}
      </div>
    </div>
  );
}

interface ValueCardProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

function ValueCard({ number, title, description, index }: ValueCardProps) {
  const stagger = index * 0.15;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: stagger, duration: 0.6 }}
      className="group"
    >
      <div className="mb-6 overflow-hidden">
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: stagger + 0.2, duration: 0.6 }}
          className="text-8xl font-bold leading-none"
          style={{
            fontFamily: "var(--font-sans)",
            color: "var(--brand-dark)",
            opacity: 0.08,
          }}
        >
          {number}
        </motion.div>
      </div>

      <AccentDivider className="w-16 h-px mb-6 origin-left" />

      <h4 className="text-3xl mb-4" style={headingText}>
        {title}
      </h4>

      <p className="leading-relaxed" style={bodyText}>
        {description}
      </p>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding relative"
      style={{ backgroundColor: "var(--brand-accent)" }}
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
        {/* Hero statement */}
        <AnimatedSection>
          <div className="mb-32 relative">
            <div className="relative z-10 max-w-5xl">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-8"
                style={serifText}
              >
                Move better, not just more.
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-6xl md:text-7xl lg:text-8xl"
                style={headingText}
              >
                Discover our{" "}
                <span className="relative inline-block" style={{ color: "var(--brand-cta)" }}>
                  innovative approach
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="absolute bottom-2 left-0 w-full h-1 origin-left"
                    style={{ backgroundColor: "var(--brand-cta)", opacity: 0.5 }}
                  />
                </span>
                .
              </motion.h2>
            </div>
          </div>
        </AnimatedSection>

        {/* Two-column story layout */}
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 mb-32 relative">
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

        {/* Values grid */}
        <AnimatedSection>
          <div className="mb-20">
            <div className="mb-16">
              <SectionHeading className="text-5xl md:text-6xl font-bold text-center">
                What Sets Us Apart
              </SectionHeading>
            </div>

            <div className="grid md:grid-cols-3 gap-16 lg:gap-20">
              {VALUES.map((value, index) => (
                <ValueCard key={value.number} {...value} index={index} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Closing statement */}
        <AnimatedSection>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-32 text-center max-w-4xl mx-auto py-16 border-t border-b"
            style={{ borderColor: "rgba(29,53,64,0.12)" }}
          >
            <p
              className="text-3xl md:text-4xl lg:text-5xl leading-relaxed"
              style={serifText}
            >
              From method to practice,{" "}
              <span className="font-semibold" style={{ color: "var(--brand-cta)" }}>
                precision in every step
              </span>
              .
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
