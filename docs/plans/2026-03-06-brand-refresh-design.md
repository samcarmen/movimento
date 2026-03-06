# Brand Refresh Design: Monochromatic Palette + Logo Shapes

**Date:** 2026-03-06
**Status:** Approved

## Overview

Three changes bundled together:
1. **Colour palette** — full monochromatic blue-grey family, removing sage and terracotta
2. **Wave dividers** — SVG waves between sections echoing the logo's "m" wave
3. **Circular motifs** — circle-cropped hero photo + decorative arc in About

---

## 1. Colour Palette

Replace all brand CSS variables in `src/app/globals.css`:

| Variable | Old | New | Role |
|----------|-----|-----|------|
| `--brand-dark` | `#3E4A52` | `#1D3540` | All body text, Contact section bg |
| `--brand-light` | `#F4F7F9` | `#EEF4F7` | Hero, WhoItsFor, Gallery backgrounds |
| `--brand-accent` | `#9FB7A5` sage | `#7AAEC5` light blue-grey | Dividers, decorative lines |
| `--brand-secondary` | `#9FB7A5` | `#7AAEC5` | Keep in sync with accent |
| `--brand-charcoal` | `#3E4A52` | `#1D3540` | Keep in sync with dark |
| `--brand-cream` | `#F4F7F9` | `#EEF4F7` | Keep in sync with light |
| `--brand-cta` | `#A96040` terracotta | `#1D3540` | CTA buttons — fully monochromatic |
| `--brand-primary` | `#5F8FA6` | `#5F8FA6` | Unchanged — the logo blue-grey |

---

## 2. About Section — Switch to Dark Text

The About section background stays `--brand-primary` (#5F8FA6). With the new dark `#1D3540`, contrast is ~4.8:1 — passes WCAG AA. Switch all text from white back to dark.

**In `src/components/sections/AboutSection.tsx`:**
- All `color: "#fff"` → `color: "var(--brand-dark)"`
- All `color: "var(--brand-light)"` → remove override, use default `bodyText` / `headingText`
- All `{ ...headingText, color: "#fff" }` → just `headingText`
- All `{ ...serifText, color: "#fff" }` → just `serifText`
- All `{ ...bodyText, color: "var(--brand-light)" }` → just `bodyText`
- AccentDivider `color="rgba(255,255,255,0.6)"` → remove color prop (use default `--brand-accent`)
- SectionHeading `style={{ color: "#fff" }}` → remove style prop
- Column divider `rgba(255,255,255,0.2)` → `rgba(29,53,64,0.15)`
- Closing border `rgba(255,255,255,0.2)` → `rgba(29,53,64,0.15)`
- Number in ValueCard: `color: "#fff", opacity: 0.25` → `color: "var(--brand-dark)", opacity: 0.08`

The "innovative approach" span currently uses `color: "var(--brand-cta)"`. Since `--brand-cta` is now `#1D3540` (same as body text), the span will inherit naturally — the underline accent below is sufficient differentiation.

---

## 3. Contact Section — Button Fix

`--brand-cta` is now `#1D3540` — same as the Contact section background. The button is invisible. Fix: override ShimmerButton in ContactSection to use light colours on the dark background.

**In `src/components/sections/ContactSection.tsx`:**
Add a `style` prop to the ShimmerButton:
```tsx
style={{ backgroundColor: "var(--brand-light)", color: "var(--brand-dark)" }}
```

**In `src/components/shared/ShimmerButton.tsx`:**
Accept and forward an optional `style` prop to the underlying Button so the override works.

---

## 4. Wave Dividers (new component)

**New file:** `src/components/shared/WaveDivider.tsx`

A full-width SVG wave that transitions between two section background colours. Props:
- `topColor: string` — the section above
- `bottomColor: string` — the section below
- `flip?: boolean` — mirrors the wave vertically for variety

The SVG uses a gentle single-period wave in a `viewBox="0 0 1440 60"`, echoing the sweeping curve of the logo "m".

```tsx
"use client";

interface WaveDividerProps {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
}

export default function WaveDivider({ topColor, bottomColor, flip = false }: WaveDividerProps) {
  return (
    <div style={{ backgroundColor: topColor, lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          display: "block",
          width: "100%",
          height: "60px",
          transform: flip ? "scaleY(-1)" : undefined,
        }}
      >
        <path
          d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}
```

**Placement in `src/app/page.tsx`:**

```tsx
<HeroSection />
<WaveDivider topColor="var(--brand-light)" bottomColor="var(--brand-primary)" />
<AboutSection />
<WaveDivider topColor="var(--brand-primary)" bottomColor="var(--brand-light)" />
<WhoItsForSection />
<GallerySection />
<WaveDivider topColor="var(--brand-light)" bottomColor="var(--brand-dark)" />
<ContactSection />
```

Each section retains its own background colour — the wave SVG is placed between them with `lineHeight: 0` on the wrapper to eliminate any sub-pixel gap.

Also remove bottom padding from the sections immediately above each wave (Hero, About, Gallery) — otherwise there's a flat band of colour before the wave starts. Change `section-padding` (`py-16 md:py-24 lg:py-32`) to remove bottom padding: add `pb-0` to those three sections.

---

## 5. Circular Motifs

### Hero photo — circle crop
In `src/components/sections/HeroSection.tsx`, change the photo container:
- `rounded-lg` → `rounded-full`
- `aspectRatio: "4/5"` → `aspectRatio: "1/1"`
- `min-h-[28rem]` → `min-h-[20rem]`

### About section — decorative arc
In `src/components/sections/AboutSection.tsx`, add a decorative SVG circle arc as an absolutely positioned background element inside the section. Sits behind all content, partially cropped by overflow. Very subtle — `opacity: 0.06`, stroke only, no fill.

```tsx
{/* Decorative circle arc — echoes logo emblem */}
<div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
  <svg
    className="absolute -top-32 -right-32 w-[600px] h-[600px]"
    viewBox="0 0 600 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="300"
      cy="300"
      r="280"
      stroke="var(--brand-dark)"
      strokeWidth="1.5"
      opacity="0.12"
    />
  </svg>
</div>
```

---

## Files to Modify / Create

| File | Change |
|------|--------|
| `src/app/globals.css` | Update 6 CSS variables |
| `src/components/sections/AboutSection.tsx` | Switch text to dark, add decorative arc |
| `src/components/sections/ContactSection.tsx` | Override button style for dark bg |
| `src/components/shared/ShimmerButton.tsx` | Accept + forward `style` prop |
| `src/components/shared/WaveDivider.tsx` | New component |
| `src/app/page.tsx` | Insert WaveDividers, import new component |
| `src/components/sections/HeroSection.tsx` | Circle-crop photo |
