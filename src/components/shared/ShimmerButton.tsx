"use client";

import { Button } from "@/components/ui/button";
import { darkButtonStyle } from "@/lib/styles";
import type { ComponentProps } from "react";

type ShimmerButtonProps = ComponentProps<typeof Button>;

/**
 * CTA button in terracotta brand color with simple hover transition.
 */
export default function ShimmerButton({
  children,
  className = "",
  style,
  ...props
}: ShimmerButtonProps) {
  return (
    <Button
      className={`transition-all duration-200 hover:opacity-90 rounded-md ${className}`}
      style={{ ...darkButtonStyle, ...style }}
      {...props}
    >
      {children}
    </Button>
  );
}
