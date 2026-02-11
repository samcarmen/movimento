import type { CSSProperties } from "react";

// ---------------------------------------------------------------------------
// Shared inline-style objects
// ---------------------------------------------------------------------------
// CSS custom properties are defined in globals.css. These objects collect the
// inline styles that were previously duplicated across every component so that
// each pattern is declared exactly once.
// ---------------------------------------------------------------------------

/** Body / paragraph copy: Outfit, light weight, charcoal */
export const bodyText: CSSProperties = {
  fontFamily: "var(--font-outfit)",
  color: "var(--brand-charcoal)",
  fontWeight: 300,
};

/** Heading: DM Serif, dark */
export const headingText: CSSProperties = {
  fontFamily: "var(--font-dm-serif)",
  color: "var(--brand-dark)",
};

/** Serif display: Cormorant, dark */
export const serifText: CSSProperties = {
  fontFamily: "var(--font-cormorant)",
  color: "var(--brand-dark)",
};

/** Label / eyebrow: Outfit, medium weight, dark */
export const labelText: CSSProperties = {
  fontFamily: "var(--font-outfit)",
  color: "var(--brand-dark)",
  fontWeight: 500,
};

/** Primary dark button: dark background, light text, Outfit font */
export const darkButtonStyle: CSSProperties = {
  backgroundColor: "var(--brand-dark)",
  color: "var(--brand-light)",
  fontFamily: "var(--font-outfit)",
};

// ---------------------------------------------------------------------------
// Shared data
// ---------------------------------------------------------------------------

export const NAVIGATION_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
] as const;
