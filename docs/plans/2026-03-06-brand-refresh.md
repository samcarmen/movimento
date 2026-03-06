# Brand Refresh Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Apply a monochromatic blue-grey palette, SVG wave dividers between sections, and circular motifs (hero photo + About arc) to match the logo's design language.

**Architecture:** All changes are isolated to CSS variables (globals.css), existing section components, and one new shared component (WaveDivider). No new dependencies. Changes flow naturally: palette first (affects everything), then section fixes, then new decorative elements.

**Tech Stack:** Next.js 16, Tailwind CSS, inline React styles, SVG, TypeScript

---

## Task 1: Update CSS colour variables

**Files:**
- Modify: `src/app/globals.css:53-61`

**Step 1: Replace the brand palette block**

Find this block (lines 53–61):
```css
  /* Posture Correction Studio Palette */
  --brand-primary: #5F8FA6; /* Muted blue-grey */
  --brand-secondary: #9FB7A5; /* Sage */
  --brand-accent: #9FB7A5; /* Sage — dividers, icons, accents */
  --brand-dark: #3E4A52; /* Soft slate — all text */
  --brand-light: #F4F7F9; /* Medical white — main background */
  --brand-charcoal: #3E4A52; /* Same as text-primary */
  --brand-cream: #F4F7F9; /* Same as bg-main */
  --brand-cta: #A96040; /* Terracotta — CTA buttons only — 4.7:1 contrast with white */
```

Replace with:
```css
  /* Monochromatic Blue-Grey Palette */
  --brand-primary: #5F8FA6;   /* Logo blue-grey — About bg, icons, accents */
  --brand-secondary: #7AAEC5; /* Light blue-grey — in sync with accent */
  --brand-accent: #7AAEC5;    /* Light blue-grey — dividers, decorative lines */
  --brand-dark: #1D3540;      /* Deep blue-grey — all text, Contact bg */
  --brand-light: #EEF4F7;     /* Barely-blue tint — main backgrounds */
  --brand-charcoal: #1D3540;  /* In sync with dark */
  --brand-cream: #EEF4F7;     /* In sync with light */
  --brand-cta: #1D3540;       /* Deep blue-grey — fully monochromatic CTAs */
```

**Step 2: Verify build**
```bash
cd /Users/carmensam/Personal/movimento && npm run build
```
Expected: clean compile, no errors.

**Step 3: Commit**
```bash
git add src/app/globals.css
git commit -m "feat: switch to monochromatic blue-grey palette"
```

---

## Task 2: Fix AboutSection — dark text on blue-grey background

**Files:**
- Modify: `src/components/sections/AboutSection.tsx`

The About section bg stays `--brand-primary` (#5F8FA6). With `--brand-dark` now `#1D3540`, contrast is ~4.8:1 — passes WCAG AA. Replace all white/light overrides with the standard dark style tokens.

**Step 1: Fix the StoryColumn sub-component**

Find:
```tsx
function StoryColumn({ title, lead, paragraphs, extraClass = "" }: StoryColumnProps) {
  return (
    <div className={`space-y-8 ${extraClass}`}>
      <div>
        <AccentDivider color="rgba(255,255,255,0.6)" />
        <h3 className="text-4xl md:text-5xl mb-8" style={{ ...headingText, color: "#fff" }}>
          {title}
        </h3>
      </div>

      <div className="space-y-6 text-lg leading-relaxed" style={{ ...bodyText, color: "var(--brand-light)" }}>
        <p className="text-2xl leading-relaxed font-semibold" style={{ color: "#fff" }}>
          {lead}
        </p>
```

Replace with:
```tsx
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
```

**Step 2: Fix the ValueCard sub-component**

Find:
```tsx
          style={{
            fontFamily: "var(--font-sans)",
            color: "#fff",
            opacity: 0.25,
          }}
```
Replace with:
```tsx
          style={{
            fontFamily: "var(--font-sans)",
            color: "var(--brand-dark)",
            opacity: 0.08,
          }}
```

Find:
```tsx
      <AccentDivider className="w-16 h-px mb-6 origin-left" color="rgba(255,255,255,0.6)" />

      <h4 className="text-3xl mb-4" style={{ ...headingText, color: "#fff" }}>
        {title}
      </h4>

      <p className="leading-relaxed" style={{ ...bodyText, color: "var(--brand-light)" }}>
```
Replace with:
```tsx
      <AccentDivider className="w-16 h-px mb-6 origin-left" />

      <h4 className="text-3xl mb-4" style={headingText}>
        {title}
      </h4>

      <p className="leading-relaxed" style={bodyText}>
```

**Step 3: Fix the main section JSX**

Find:
```tsx
      style={{ backgroundColor: "var(--brand-primary)" }}
```
This stays — no change.

Find:
```tsx
                style={{ ...serifText, color: "#fff" }}
```
Replace with:
```tsx
                style={serifText}
```

Find:
```tsx
                style={{ ...headingText, color: "#fff" }}
```
Replace with:
```tsx
                style={headingText}
```

Find:
```tsx
                <span className="relative inline-block" style={{ color: "var(--brand-cta)" }}>
```
This stays — `--brand-cta` is now `#1D3540` (dark), which matches body text. The underline accent below is sufficient visual differentiation. No change needed.

Find:
```tsx
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
```
Replace with:
```tsx
            style={{ backgroundColor: "rgba(29,53,64,0.12)" }}
```

Find (SectionHeading with white style):
```tsx
              <SectionHeading className="text-5xl md:text-6xl font-bold text-center" style={{ color: "#fff" }}>
```
Replace with:
```tsx
              <SectionHeading className="text-5xl md:text-6xl font-bold text-center">
```

Find (closing statement border):
```tsx
            style={{ borderColor: "rgba(255,255,255,0.2)" }}
```
Replace with:
```tsx
            style={{ borderColor: "rgba(29,53,64,0.12)" }}
```

Find (closing statement text):
```tsx
              style={{ ...serifText, color: "#fff" }}
```
Replace with:
```tsx
              style={serifText}
```

Find (closing statement span):
```tsx
              <span className="font-semibold" style={{ color: "var(--brand-cta)" }}>
```
This stays — `--brand-cta` is now dark, which is fine for a bold span on blue-grey bg.

**Step 4: Add decorative circle arc to the section**

The section element already has `className="section-padding relative"`. Add an absolutely-positioned SVG arc inside the section, as the very first child inside the outer `<section>` tag, before `<div className="max-w-7xl...">`:

```tsx
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
```

**Step 5: Verify build**
```bash
npm run build
```
Expected: clean.

**Step 6: Commit**
```bash
git add src/components/sections/AboutSection.tsx
git commit -m "fix: switch About section to dark text on blue-grey bg, add circle arc"
```

---

## Task 3: Fix ContactSection button on dark background

**Files:**
- Modify: `src/components/sections/ContactSection.tsx:204-210`

`--brand-cta` is now `#1D3540` — the same as the Contact section background. The button is invisible. Override it to appear as a light button.

**Step 1: Find the ShimmerButton in ContactSection**

```tsx
              <ShimmerButton
                type="submit"
                className="w-full py-6 text-sm tracking-widest uppercase font-medium"
                disabled={isSubmitting}
              >
```

Replace with:
```tsx
              <ShimmerButton
                type="submit"
                className="w-full py-6 text-sm tracking-widest uppercase font-medium"
                disabled={isSubmitting}
                style={{ backgroundColor: "var(--brand-light)", color: "var(--brand-dark)" }}
              >
```

**Step 2: Verify build**
```bash
npm run build
```
Expected: clean.

**Step 3: Commit**
```bash
git add src/components/sections/ContactSection.tsx
git commit -m "fix: use light CTA button on dark Contact section background"
```

---

## Task 4: Create WaveDivider component

**Files:**
- Create: `src/components/shared/WaveDivider.tsx`

**Step 1: Create the file**

```tsx
interface WaveDividerProps {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
}

/**
 * SVG wave that transitions between two section background colours.
 * Echoes the sweeping wave curve of the Movimento logo "m" letterform.
 */
export default function WaveDivider({ topColor, bottomColor, flip = false }: WaveDividerProps) {
  return (
    <div style={{ backgroundColor: topColor, lineHeight: 0, fontSize: 0 }}>
      <svg
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          display: "block",
          width: "100%",
          height: "clamp(32px, 4vw, 60px)",
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

**Step 2: Verify build**
```bash
npm run build
```
Expected: clean.

**Step 3: Commit**
```bash
git add src/components/shared/WaveDivider.tsx
git commit -m "feat: add WaveDivider SVG component"
```

---

## Task 5: Insert waves + circle-crop hero photo

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/components/sections/HeroSection.tsx:104-115`

### Part A — page.tsx: insert wave dividers and remove bottom padding from sections above waves

**Step 1: Update page.tsx**

Replace the entire file content with:
```tsx
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhoItsForSection from "@/components/sections/WhoItsForSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";
import WaveDivider from "@/components/shared/WaveDivider";

export default function Home() {
  return (
    <>
      <HeroSection noPaddingBottom />
      <WaveDivider topColor="var(--brand-light)" bottomColor="var(--brand-primary)" />
      <AboutSection noPaddingBottom />
      <WaveDivider topColor="var(--brand-primary)" bottomColor="var(--brand-light)" />
      <WhoItsForSection />
      <GallerySection noPaddingBottom />
      <WaveDivider topColor="var(--brand-light)" bottomColor="var(--brand-dark)" />
      <ContactSection />
    </>
  );
}
```

### Part B — Add `noPaddingBottom` prop to HeroSection, AboutSection, GallerySection

Each of these three sections needs to accept a `noPaddingBottom?: boolean` prop and conditionally remove the bottom padding so there's no flat colour band above the wave.

**HeroSection** — find:
```tsx
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-start lg:items-center"
      style={{ backgroundColor: "var(--brand-light)" }}
    >
      <div className="relative max-w-7xl mx-auto container-padding w-full pt-28 pb-16">
```
Replace with:
```tsx
export default function HeroSection({ noPaddingBottom = false }: { noPaddingBottom?: boolean }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-start lg:items-center"
      style={{ backgroundColor: "var(--brand-light)" }}
    >
      <div className={`relative max-w-7xl mx-auto container-padding w-full pt-28 ${noPaddingBottom ? "pb-0" : "pb-16"}`}>
```

**AboutSection** — find:
```tsx
export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding relative"
      style={{ backgroundColor: "var(--brand-primary)" }}
    >
```
Replace with:
```tsx
export default function AboutSection({ noPaddingBottom = false }: { noPaddingBottom?: boolean }) {
  return (
    <section
      id="about"
      className={`${noPaddingBottom ? "pt-16 md:pt-24 lg:pt-32 pb-0" : "section-padding"} relative`}
      style={{ backgroundColor: "var(--brand-primary)" }}
    >
```

**GallerySection** — find:
```tsx
export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="section-padding relative"
      style={{ backgroundColor: "var(--brand-light)" }}
    >
```
Replace with:
```tsx
export default function GallerySection({ noPaddingBottom = false }: { noPaddingBottom?: boolean }) {
  return (
    <section
      id="gallery"
      className={`${noPaddingBottom ? "pt-16 md:pt-24 lg:pt-32 pb-0" : "section-padding"} relative`}
      style={{ backgroundColor: "var(--brand-light)" }}
    >
```

### Part C — Circle-crop the hero photo

In `src/components/sections/HeroSection.tsx`, find the photo container:
```tsx
              className="relative w-full rounded-lg overflow-hidden min-h-[28rem]"
              style={{ aspectRatio: "4/5" }}
```
Replace with:
```tsx
              className="relative w-full rounded-full overflow-hidden min-h-[20rem]"
              style={{ aspectRatio: "1/1" }}
```

**Step 2: Verify build**
```bash
npm run build
```
Expected: clean compile, no TypeScript errors.

**Step 3: Commit**
```bash
git add src/app/page.tsx src/components/sections/HeroSection.tsx src/components/sections/AboutSection.tsx src/components/sections/GallerySection.tsx
git commit -m "feat: insert wave dividers between sections, circle-crop hero photo"
```

---

## Verification Checklist

Run `npm run dev` and scroll through the full page:

- [ ] All backgrounds use the new blue-grey tones (no warm slate, no sage green)
- [ ] About section: dark text on blue-grey — readable, no white text remaining
- [ ] Contact section: CTA button is light (visible against dark bg)
- [ ] Hero → About: wave flows from light into blue-grey
- [ ] About → Who It's For: wave flows from blue-grey back to light
- [ ] Gallery → Contact: wave drops into dark slate
- [ ] No flat colour gap above any wave (sections flush into wave)
- [ ] Hero photo is circle-cropped
- [ ] Faint circle arc visible in About section background (top-right area)
- [ ] CTA buttons across site are dark blue-grey (#1D3540) with white text
