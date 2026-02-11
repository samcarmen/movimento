"use client";

import { motion } from "framer-motion";

interface AccentDividerProps {
  className?: string;
  animated?: boolean;
  color?: string;
}

export default function AccentDivider({
  className = "w-20 h-px mb-6 origin-left",
  animated = true,
  color = "var(--brand-accent)",
}: AccentDividerProps) {
  if (!animated) {
    return <div className={className} style={{ backgroundColor: color }} />;
  }

  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={className}
      style={{ backgroundColor: color }}
    />
  );
}
