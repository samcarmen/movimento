# Mobile Responsive Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make every section of the Movimento website fully responsive at 375px (mobile), 640px (tablet), and 1024px+ (desktop).

**Architecture:** Surgical Tailwind responsive-prefix fixes per component. No structural rewrites. Each task is one file. The site uses `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px) breakpoints.

**Tech Stack:** Next.js, Tailwind CSS v4, Framer Motion, TypeScript

---

### Task 1: Hero Section

**Files:**
- Modify: `src/components/sections/HeroSection.tsx`

**Step 1: Fix watermark — hide on mobile, show from sm upward**

Find the ghost watermark div (the one with `right: "-5%"`). Change it so it's hidden on mobile and only visible on `sm` and above, and reduce its size slightly on smaller screens:

```tsx
<div
  className="absolute hidden sm:block pointer-events-none select-none"
  style={{
    right: "-5%",
    top: "50%",
    transform: "translateY(-50%)",
    width: "55%",
    opacity: 0.13,
    mixBlendMode: "multiply",
  }}
  aria-hidden="true"
>
```

**Step 2: Fix hero content padding**

Find the content div with `pt-28`. Change to:
```tsx
className={`relative max-w-7xl mx-auto container-padding w-full pt-20 sm:pt-24 md:pt-28 ${noPaddingBottom ? "pb-0" : "pb-12 sm:pb-16"}`}
```

**Step 3: Fix heading size on mobile**

Find the `<motion.h1>`. Change className to:
```tsx
className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] leading-[0.95] font-bold tracking-tight mb-8 sm:mb-10"
```

**Step 4: Fix tagline max-width on mobile**

Find the tagline `<motion.p>`. Change to:
```tsx
className="text-base sm:text-lg md:text-xl leading-relaxed max-w-xs sm:max-w-sm mb-8"
```

**Step 5: Verify**

Run `npm run dev`, open browser at localhost:3000, resize to 375px width. Check:
- No horizontal scroll
- Watermark hidden on mobile
- Text readable and not clipped

**Step 6: Commit**
```bash
git add src/components/sections/HeroSection.tsx
git commit -m "fix: make hero section mobile responsive"
```

---

### Task 2: Contact Section

**Files:**
- Modify: `src/components/sections/ContactSection.tsx`

**Step 1: Scale down heading**

Find the `<SectionHeading>` with `text-5xl md:text-6xl lg:text-7xl`. Change to:
```tsx
<SectionHeading className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-center">
```

**Step 2: Scale down subtitle**

Find the subtitle `<p>` with `text-xl md:text-2xl`. Change to:
```tsx
className="text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto font-light"
```

**Step 3: Fix "Visit Our Studio" heading**

Find `<h3>` with `text-4xl md:text-5xl`. Change to:
```tsx
className="text-2xl sm:text-3xl md:text-4xl font-normal mb-8"
```

**Step 4: Verify**

Resize to 375px. Check form stacks correctly, heading readable.

**Step 5: Commit**
```bash
git add src/components/sections/ContactSection.tsx
git commit -m "fix: make contact section mobile responsive"
```

---

### Task 3: About Section

**Files:**
- Modify: `src/components/sections/AboutSection.tsx`

**Step 1: Fix story column heading size**

Find `<h3>` with `text-4xl md:text-5xl`. Change to:
```tsx
className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8"
```

**Step 2: Fix eyebrow opacity conflict**

Find the `<motion.p>` eyebrow label. It has both a Framer Motion opacity animation AND an inline `opacity: 0.6`. Remove the inline opacity from the style and add it via className instead:

```tsx
<motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 0.6, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="text-sm tracking-[0.3em] uppercase font-semibold mb-12 sm:mb-16"
  style={{ fontFamily: "var(--font-sans)", color: "var(--brand-dark)" }}
>
```

**Step 3: Fix column gap on mobile**

Find `grid lg:grid-cols-2 gap-20 lg:gap-32`. Change to:
```tsx
className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-32 relative"
```

**Step 4: Verify**

Resize to 375px. Check columns stack, text readable.

**Step 5: Commit**
```bash
git add src/components/sections/AboutSection.tsx
git commit -m "fix: make about section mobile responsive"
```

---

### Task 4: Values Section

**Files:**
- Modify: `src/components/sections/ValuesSection.tsx`

**Step 1: Scale down number watermarks**

Find `className="text-8xl font-bold leading-none"`. Change to:
```tsx
className="text-6xl sm:text-7xl md:text-8xl font-bold leading-none"
```

**Step 2: Fix heading size**

Find `<SectionHeading className="text-5xl md:text-6xl font-bold text-center">`. Change to:
```tsx
<SectionHeading className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
```

**Step 3: Fix grid gap**

Find `grid md:grid-cols-3 gap-16 lg:gap-20`. Change to:
```tsx
className="grid md:grid-cols-3 gap-10 sm:gap-12 lg:gap-20"
```

**Step 4: Fix card heading**

Find `<h4 className="text-3xl mb-4"`. Change to:
```tsx
className="text-2xl sm:text-3xl mb-4"
```

**Step 5: Verify**

Resize to 375px. Check numbers don't clip, grid stacks to single column.

**Step 6: Commit**
```bash
git add src/components/sections/ValuesSection.tsx
git commit -m "fix: make values section mobile responsive"
```

---

### Task 5: Who It's For Section

**Files:**
- Modify: `src/components/sections/WhoItsForSection.tsx`

**Step 1: Fix heading size**

Find `<SectionHeading className="text-5xl md:text-6xl font-normal mb-8">`. Change to:
```tsx
<SectionHeading className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-8">
```

**Step 2: Fix subtitle**

Find `className="text-2xl md:text-3xl max-w-4xl mx-auto font-light"`. Change to:
```tsx
className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto font-light"
```

**Step 3: Fix grid gap**

Find `grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8`. Change to:
```tsx
className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-8"
```

**Step 4: Fix bottom message**

Find `className="text-xl md:text-2xl leading-relaxed"`. Change to:
```tsx
className="text-base sm:text-lg md:text-xl leading-relaxed"
```

**Step 5: Verify**

Resize to 375px and 768px. Check 4 cards go to 1 col on mobile, 2 on tablet.

**Step 6: Commit**
```bash
git add src/components/sections/WhoItsForSection.tsx
git commit -m "fix: make who-its-for section mobile responsive"
```

---

### Task 6: Gallery Section

**Files:**
- Modify: `src/components/sections/GallerySection.tsx`

**Step 1: Fix heading**

Find `<SectionHeading className="text-5xl md:text-6xl font-normal text-center">`. Change to:
```tsx
<SectionHeading className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-center">
```

**Step 2: Fix image min-height on mobile**

Find `className="relative overflow-hidden rounded-lg min-h-[20rem]"`. Change to:
```tsx
className="relative overflow-hidden rounded-lg min-h-[16rem] sm:min-h-[20rem]"
```

**Step 3: Verify**

Resize to 375px. Check single column grid, images load and crop correctly.

**Step 4: Commit**
```bash
git add src/components/sections/GallerySection.tsx
git commit -m "fix: make gallery section mobile responsive"
```

---

### Task 7: Footer

**Files:**
- Modify: `src/components/layout/Footer.tsx`

**Step 1: Fix logo height**

Find `className="h-25 w-auto"` (non-standard Tailwind value). Change to:
```tsx
className="h-16 sm:h-20 w-auto"
```

**Step 2: Fix footer padding**

Find `py-20`. Change to:
```tsx
className="max-w-7xl mx-auto container-padding py-12 sm:py-16 md:py-20"
```

**Step 3: Fix grid gap on mobile**

Find `grid md:grid-cols-3 gap-12 md:gap-16 mb-16`. Change to:
```tsx
className="grid md:grid-cols-3 gap-8 md:gap-16 mb-10 sm:mb-16"
```

**Step 4: Verify**

Resize to 375px. Check logo visible, columns stack correctly, copyright centred.

**Step 5: Commit**
```bash
git add src/components/layout/Footer.tsx
git commit -m "fix: make footer mobile responsive"
```

---

### Task 8: Final Cross-Section Check

**Step 1: Run dev server**
```bash
npm run dev
```

**Step 2: Check at 375px (iPhone SE)**
Scroll through entire page. Verify:
- No horizontal scroll anywhere
- All headings readable
- All CTAs tappable (visually large enough)
- Watermark not overlapping text
- Wave dividers rendering correctly
- Gallery images loading

**Step 3: Check at 768px (tablet)**
- Gallery should be 2 columns
- Who It's For should be 2 columns
- Values should be 3 columns
- About should be 1 column

**Step 4: Check at 1024px+ (desktop)**
- All sections back to their desktop layouts

**Step 5: Final commit**
```bash
git add -A
git commit -m "fix: complete mobile responsive audit"
```
