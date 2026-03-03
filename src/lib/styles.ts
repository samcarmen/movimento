import type { CSSProperties } from "react";

// ---------------------------------------------------------------------------
// Shared inline-style objects
// ---------------------------------------------------------------------------
// CSS custom properties are defined in globals.css. These objects collect the
// inline styles that were previously duplicated across every component so that
// each pattern is declared exactly once.
// ---------------------------------------------------------------------------

/** Body / paragraph copy: Plus Jakarta Sans, regular weight, slate */
export const bodyText: CSSProperties = {
  fontFamily: "var(--font-sans)",
  color: "var(--brand-dark)",
  fontWeight: 400,
};

/** Heading: Plus Jakarta Sans, bold, slate */
export const headingText: CSSProperties = {
  fontFamily: "var(--font-sans)",
  color: "var(--brand-dark)",
  fontWeight: 700,
};

/** Subtle display text: same sans, lighter weight/color */
export const serifText: CSSProperties = {
  fontFamily: "var(--font-sans)",
  color: "var(--brand-dark)",
  fontWeight: 300,
};

/** Label / eyebrow: Plus Jakarta Sans, medium weight, slate */
export const labelText: CSSProperties = {
  fontFamily: "var(--font-sans)",
  color: "var(--brand-dark)",
  fontWeight: 500,
};

/** Primary CTA button: terracotta background, white text */
export const darkButtonStyle: CSSProperties = {
  backgroundColor: "var(--brand-cta)",
  color: "#ffffff",
  fontFamily: "var(--font-sans)",
};

// ---------------------------------------------------------------------------
// Shared data
// ---------------------------------------------------------------------------

export const NAVIGATION_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
] as const;
