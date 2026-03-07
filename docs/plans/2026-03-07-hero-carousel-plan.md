# Hero Split Carousel Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the centred single-panel hero with a split hero — text left, image carousel right.

**Architecture:** `HeroSection.tsx` becomes a two-column grid at `lg`. The left column holds existing text content (left-aligned). The right column is a self-contained carousel with `useState` for slide index, `useEffect` for auto-advance, crossfade via Framer Motion `AnimatePresence`, and prev/next/dot controls.

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind CSS v4, Framer Motion, lucide-react

---

### Task 1: Convert layout to split grid and left-align text

**Files:**
- Modify: `src/components/sections/HeroSection.tsx`

**Step 1: Update the section and content wrapper**

Replace the content wrapper div (currently `max-w-5xl mx-auto ... text-center flex flex-col items-center`) with a two-column grid. The left column holds all text; the right column is a placeholder for now.

```tsx
{/* Content wrapper — split grid */}
<div className={`relative w-full h-full lg:grid lg:grid-cols-2 ${noPaddingBottom ? "" : ""}`}>

  {/* Left panel — text */}
  <div className="flex flex-col justify-center max-w-xl px-4 sm:px-6 lg:px-12 xl:px-16 pt-24 sm:pt-28 pb-12 sm:pb-16 lg:py-0 lg:min-h-[100dvh]">
    {/* text content here */}
  </div>

  {/* Right panel — carousel placeholder */}
  <div className="hidden lg:block relative" />

</div>
```

**Step 2: Move all text content into the left panel**

Move eyebrow, h1, tagline, CTA into the left panel div. Remove `text-center`, `items-center`, `justify-center` from the eyebrow — make it left-aligned with a single left accent line (remove the right accent line).

Left panel text content:
```tsx
{/* Eyebrow */}
<motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="flex items-center gap-4 mb-8"
>
  <div className="h-px w-12" style={{ backgroundColor: "var(--brand-accent)" }} />
  <span
    className="text-xs tracking-[0.3em] uppercase font-semibold"
    style={{ fontFamily: "var(--font-sans)", color: "var(--brand-primary)" }}
  >
    Move Freely
  </span>
</motion.div>

{/* Heading */}
<motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4.5rem] leading-[0.95] font-bold tracking-tight mb-8 sm:mb-10"
  style={{ fontFamily: "var(--font-sans)", color: "var(--brand-dark)" }}
>
  Move without pain.
</motion.h1>

{/* Tagline */}
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.6 }}
  className="text-base sm:text-lg md:text-xl leading-relaxed mb-10"
  style={bodyText}
>
  Posture correction and body alignment, Kuwait.
</motion.p>

{/* CTA */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.75 }}
>
  <ShimmerButton
    size="lg"
    className="px-8 py-6 text-base font-medium tracking-wide"
    onClick={() => window.open("https://wa.me/96566130788?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20Movimento.", "_blank")}
  >
    <span className="flex items-center gap-2">
      Schedule a session
      <ArrowRight size={18} />
    </span>
  </ShimmerButton>
</motion.div>
```

**Step 3: Hide logo watermark at lg**

Add `lg:hidden` to the watermark div's className:
```tsx
className="absolute inset-0 pointer-events-none select-none lg:hidden"
```

**Step 4: Verify in browser**

Run: `npm run dev`
Expected: On desktop (≥1024px) — left half has left-aligned text, right half is empty. On mobile — full-width text with watermark, same as before.

**Step 5: Commit**
```bash
git add src/components/sections/HeroSection.tsx
git commit -m "feat: split hero layout with left-aligned text panel"
```

---

### Task 2: Build the image carousel right panel

**Files:**
- Modify: `src/components/sections/HeroSection.tsx`

**Step 1: Add carousel state and data at the top of the component**

Add these imports:
```tsx
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
```

Add slide data and state inside the component:
```tsx
const SLIDES = [
  "/images/gallery/09.jpg",
  "/images/gallery/08.jpg",
  "/images/gallery/06.jpg",
  "/images/hero-photo.jpg",
];

const [current, setCurrent] = useState(0);

const next = useCallback(() => setCurrent((i) => (i + 1) % SLIDES.length), []);
const prev = useCallback(() => setCurrent((i) => (i - 1 + SLIDES.length) % SLIDES.length), []);
```

**Step 2: Add auto-advance effect**

```tsx
useEffect(() => {
  const timer = setInterval(next, 5000);
  return () => clearInterval(timer);
}, [next]);
```

**Step 3: Replace the right panel placeholder with the carousel**

```tsx
{/* Right panel — image carousel */}
<div className="hidden lg:block relative overflow-hidden">
  {/* Slides */}
  <AnimatePresence mode="sync">
    <motion.div
      key={current}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute inset-0"
    >
      <Image
        src={SLIDES[current]}
        alt=""
        fill
        className="object-cover object-center"
        priority={current === 0}
        sizes="50vw"
      />
    </motion.div>
  </AnimatePresence>

  {/* Prev button */}
  <button
    onClick={prev}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full transition-opacity duration-200 hover:opacity-100 opacity-60"
    style={{ backgroundColor: "var(--brand-dark)" }}
    aria-label="Previous image"
  >
    <ChevronLeft size={20} color="white" />
  </button>

  {/* Next button */}
  <button
    onClick={next}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full transition-opacity duration-200 hover:opacity-100 opacity-60"
    style={{ backgroundColor: "var(--brand-dark)" }}
    aria-label="Next image"
  >
    <ChevronRight size={20} color="white" />
  </button>

  {/* Dot indicators */}
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
    {SLIDES.map((_, i) => (
      <button
        key={i}
        onClick={() => setCurrent(i)}
        className="rounded-full transition-all duration-300"
        style={{
          width: i === current ? "24px" : "8px",
          height: "8px",
          backgroundColor: i === current ? "white" : "rgba(255,255,255,0.5)",
        }}
        aria-label={`Go to slide ${i + 1}`}
      />
    ))}
  </div>
</div>
```

**Step 4: Verify in browser**

Run: `npm run dev`
Expected:
- Desktop: right panel shows gallery/09.jpg, auto-advances every 5s with crossfade
- Prev/next arrows visible on hover
- Dots at bottom show current slide, active dot is wider (pill shape)
- Mobile: carousel hidden, text + watermark as before

**Step 5: Commit**
```bash
git add src/components/sections/HeroSection.tsx
git commit -m "feat: add image carousel to hero right panel"
```

---

### Task 3: Polish — reset auto-advance on manual interaction

**Files:**
- Modify: `src/components/sections/HeroSection.tsx`

**Step 1: Update state to track last interaction**

Replace the auto-advance effect with one that resets on manual interaction:

```tsx
const [current, setCurrent] = useState(0);
const [paused, setPaused] = useState(false);

const go = useCallback((index: number) => {
  setCurrent(index);
  setPaused(true);
  setTimeout(() => setPaused(false), 8000);
}, []);

const next = useCallback(() => go((current + 1) % SLIDES.length), [current, go]);
const prev = useCallback(() => go((current - 1 + SLIDES.length) % SLIDES.length), [current, go]);

useEffect(() => {
  if (paused) return;
  const timer = setInterval(() => setCurrent((i) => (i + 1) % SLIDES.length), 5000);
  return () => clearInterval(timer);
}, [paused]);
```

Update dot `onClick` to use `go(i)` instead of `setCurrent(i)`.

**Step 2: Verify in browser**

- Click next arrow → auto-advance pauses for 8s then resumes
- Click a dot → same pause behaviour
- Let it run → auto-advances every 5s

**Step 3: Commit**
```bash
git add src/components/sections/HeroSection.tsx
git commit -m "feat: pause carousel auto-advance after manual interaction"
```
