"use client";

import { motion } from "framer-motion";
import { User, Activity, Armchair, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import { bodyText, headingText } from "@/lib/styles";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface Audience {
  icon: LucideIcon;
  title: string;
  description: string;
}

const AUDIENCES: Audience[] = [
  {
    icon: User,
    title: "Limited Mobility",
    description:
      "For those who experience stiffness, recurring discomfort, or limited mobility and want to restore freedom of movement.",
  },
  {
    icon: Activity,
    title: "Athletes & Active People",
    description:
      "For those who practice sports and want to move better, not just more — improving performance through better movement patterns.",
  },
  {
    icon: Armchair,
    title: "Desk Workers",
    description:
      "For those who spend long hours sitting and deal with lower back pain, neck stiffness, or postural issues.",
  },
  {
    icon: Zap,
    title: "Chronic Tension",
    description:
      "For those who experience frequent muscle tension, recurring inflammation, or want to prevent future issues.",
  },
];

// ---------------------------------------------------------------------------
// Sub-component
// ---------------------------------------------------------------------------

interface AudienceCardProps extends Audience {
  index: number;
}

function AudienceCard({ icon: Icon, title, description, index }: AudienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="group"
    >
      <div
        className="flex items-center justify-center w-16 h-16 mb-6 rounded-full"
        style={{
          backgroundColor: "var(--brand-secondary)",
          color: "var(--brand-primary)",
        }}
      >
        <Icon size={28} strokeWidth={1.5} />
      </div>

      <h3 className="text-2xl md:text-3xl mb-4 font-normal" style={headingText}>
        {title}
      </h3>

      <p className="leading-relaxed" style={bodyText}>
        {description}
      </p>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function WhoItsForSection() {
  return (
    <section
      className="section-padding relative"
      style={{ backgroundColor: "var(--brand-tint)" }}
    >
      <div className="max-w-7xl mx-auto container-padding">
        <AnimatedSection>
          <div className="mb-20 text-center">
            <SectionHeading className="text-5xl md:text-6xl font-normal mb-8">
              Who Is Movimento For?
            </SectionHeading>

            <p
              className="text-2xl md:text-3xl max-w-4xl mx-auto font-light"
              style={{
                fontFamily: "var(--font-sans)",
                color: "var(--brand-dark)",
              }}
            >
              Movimento is for anyone who wants to move with intention and live with less
              limitation
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {AUDIENCES.map((audience, index) => (
            <AudienceCard key={audience.title} {...audience} index={index} />
          ))}
        </div>

        {/* Bottom message */}
        <AnimatedSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-20 text-center max-w-3xl mx-auto"
          >
            <p
              className="text-xl md:text-2xl leading-relaxed"
              style={bodyText}
            >
              A personalized approach means feeling{" "}
              <span
                className="font-medium italic"
                style={{ color: "var(--brand-accent)" }}
              >
                supported, never pushed
              </span>{" "}
              — so you can rediscover ease, fluidity, and confidence day by day.
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
