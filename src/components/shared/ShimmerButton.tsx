"use client";

import { Button } from "@/components/ui/button";
import { darkButtonStyle } from "@/lib/styles";
import type { ComponentProps } from "react";

type ShimmerButtonProps = ComponentProps<typeof Button>;

/**
 * A dark-branded button with a shimmer hover effect. Wraps the base Button
 * component so the gradient overlay does not need to be duplicated everywhere.
 */
export default function ShimmerButton({
  children,
  className = "",
  style,
  ...props
}: ShimmerButtonProps) {
  return (
    <Button
      className={`relative overflow-hidden group ${className}`}
      style={{ ...darkButtonStyle, ...style }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    </Button>
  );
}
