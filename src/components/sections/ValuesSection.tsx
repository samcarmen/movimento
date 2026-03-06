"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import AccentDivider from "@/components/shared/AccentDivider";
import { bodyText, headingText } from "@/lib/styles";

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

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

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
          className="text-6xl sm:text-7xl md:text-8xl font-bold leading-none"
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

      <h4 className="text-2xl sm:text-3xl mb-4" style={headingText}>
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

export default function ValuesSection() {
  return (
    <section
      id="values"
      className="section-padding relative"
      style={{ backgroundColor: "var(--brand-light)" }}
    >
      <div className="max-w-7xl mx-auto container-padding">
        <AnimatedSection>
          <div className="mb-16">
            <SectionHeading className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
              What Sets Us Apart
            </SectionHeading>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 md:gap-16 lg:gap-20">
            {VALUES.map((value, index) => (
              <ValueCard key={value.number} {...value} index={index} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
