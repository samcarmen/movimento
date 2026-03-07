"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { headingText } from "@/lib/styles";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * A heading flanked by animated accent lines. Used in About ("What Sets Us
 * Apart"), Contact ("Get In Touch"), and Footer ("La Perfezione").
 */
export default function SectionHeading({
  children,
  className = "text-5xl md:text-6xl font-normal text-center",
  style,
}: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4 sm:gap-6">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="hidden sm:block h-px flex-1 min-w-0 origin-left"
        style={{ backgroundColor: "var(--brand-accent)" }}
      />
      <h2 className={className} style={{ ...headingText, ...style }}>
        {children}
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="hidden sm:block h-px flex-1 min-w-0 origin-right"
        style={{ backgroundColor: "var(--brand-accent)" }}
      />
    </div>
  );
}
