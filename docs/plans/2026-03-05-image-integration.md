# Image Integration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a studio photo to the hero right panel and a new static Gallery section between WhoItsFor and Contact.

**Architecture:** Hero right column swaps its blue-grey info card for a `next/image` photo. A new `GallerySection` component renders a responsive photo grid from a static array, with a placeholder Instagram link below. No new dependencies needed — `next/image` is built in.

**Tech Stack:** Next.js 16, `next/image`, Tailwind CSS, Framer Motion, TypeScript

---

## Before You Start

You need real image files before the components will render correctly. Add these files:

- **Hero photo:** `public/images/hero-photo.jpg` — one strong photo of the studio or equipment (landscape or square, min 800px wide)
- **Gallery photos:** `public/images/gallery/01.jpg` through `09.jpg` — 6–9 photos (square crops work best)

If you don't have images yet, you can temporarily use any JPG files renamed to these paths to verify layout, then swap in real photos later.

---

## Task 1: Add hero photo assets directory

**Files:**
- Create: `public/images/gallery/` (directory)

**Step 1: Create the gallery directory**

```bash
mkdir -p public/images/gallery
```

**Step 2: Verify your hero photo is in place**

Check that `public/images/hero-photo.jpg` exists. If not, add it now before continuing.

**Step 3: Commit**

```bash
git add public/images/
git commit -m "assets: add images directory for hero and gallery photos"
```

---

## Task 2: Replace hero right panel with photo

**Files:**
- Modify: `src/components/sections/HeroSection.tsx:1-8` (add Image import)
- Modify: `src/components/sections/HeroSection.tsx:103-198` (replace card with image)

**Step 1: Add the `next/image` import at the top of the file**

Replace the existing imports block:

```tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ShimmerButton from "@/components/shared/ShimmerButton";
import { Button } from "@/components/ui/button";
import { bodyText } from "@/lib/styles";
```

**Step 2: Replace the right panel (lines 103–198)**

Replace the entire right column block — from the comment `{/* ── RIGHT: Blue-grey info panel */}` to its closing `</div>` — with:

```tsx
          {/* ── RIGHT: Studio photo ─────────────────────────────────────── */}
          <div className="lg:col-span-5 flex items-center pb-16 lg:pb-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative w-full rounded-lg overflow-hidden"
              style={{ aspectRatio: "4/5" }}
            >
              <Image
                src="/images/hero-photo.jpg"
                alt="Movimento studio"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
```

**Step 3: Run the dev server and verify**

```bash
npm run dev
```

Open `http://localhost:3000`. The right column should show your studio photo in a rounded container at roughly 4:5 aspect ratio. On mobile it stacks below the text.

**Step 4: Commit**

```bash
git add src/components/sections/HeroSection.tsx
git commit -m "feat: replace hero info card with studio photo"
```

---

## Task 3: Create GallerySection component

**Files:**
- Create: `src/components/sections/GallerySection.tsx`

**Step 1: Create the file with this content**

```tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import { bodyText } from "@/lib/styles";

// ---------------------------------------------------------------------------
// Data — add/remove/reorder photos here. Files live in public/images/gallery/
// ---------------------------------------------------------------------------

const GALLERY_PHOTOS = [
  { src: "/images/gallery/01.jpg", alt: "Movimento studio" },
  { src: "/images/gallery/02.jpg", alt: "Movimento studio" },
  { src: "/images/gallery/03.jpg", alt: "Movimento studio" },
  { src: "/images/gallery/04.jpg", alt: "Movimento studio" },
  { src: "/images/gallery/05.jpg", alt: "Movimento studio" },
  { src: "/images/gallery/06.jpg", alt: "Movimento studio" },
];

// Replace with real Instagram handle when available
const INSTAGRAM_HANDLE = "@movimento.kw";
const INSTAGRAM_URL = "https://www.instagram.com/movimento.kw";

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="section-padding relative"
      style={{ backgroundColor: "var(--brand-light)" }}
    >
      <div className="max-w-7xl mx-auto container-padding">
        <AnimatedSection>
          <div className="mb-16">
            <SectionHeading className="text-5xl md:text-6xl font-normal text-center">
              Our Studio
            </SectionHeading>
          </div>
        </AnimatedSection>

        {/* Photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_PHOTOS.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative overflow-hidden rounded-lg"
              style={{ aspectRatio: "1 / 1" }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 ease-out hover:scale-[1.03]"
              />
            </motion.div>
          ))}
        </div>

        {/* Instagram link */}
        <AnimatedSection>
          <div className="mt-12 text-center">
            <p
              className="text-sm tracking-widest uppercase"
              style={{ ...bodyText, color: "var(--brand-primary)" }}
            >
              Follow us on Instagram{" "}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity"
                style={{ color: "var(--brand-cta)" }}
              >
                {INSTAGRAM_HANDLE}
              </a>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
```

**Step 2: Update the Instagram handle and URL constants** at the top of the file once you have the correct handle. Replace `movimento.kw` with the real handle in both `INSTAGRAM_HANDLE` and `INSTAGRAM_URL`.

**Step 3: Commit**

```bash
git add src/components/sections/GallerySection.tsx
git commit -m "feat: add GallerySection component with static photo grid"
```

---

## Task 4: Insert GallerySection into the page

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Update page.tsx**

```tsx
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhoItsForSection from "@/components/sections/WhoItsForSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhoItsForSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
```

**Step 2: Run the dev server and verify the full page**

```bash
npm run dev
```

Scroll through the page and check:
- Hero: photo appears in right column, rounded corners, no stretching
- Gallery: 3-column grid on desktop, 2 on tablet, 1 on mobile; photos are square-cropped
- Gallery: hover causes a subtle scale on each photo
- Gallery: Instagram link appears below the grid
- Section banding: Gallery bg is `--brand-light` (same as Hero and WhoItsFor) — the dark Contact section still anchors the bottom

**Step 3: Run production build to confirm no errors**

```bash
npm run build
```

Expected: clean build with no TypeScript errors.

**Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: insert GallerySection between WhoItsFor and Contact"
```

---

## Future: Upgrading to Live Instagram Feed

When Instagram account access is available:

1. Connect the account to [Behold.so](https://behold.so) (or the Instagram Graph API directly)
2. Replace the `GALLERY_PHOTOS` static array in `GallerySection.tsx` with a `fetch()` call to the feed API
3. The grid layout, styling, and Instagram link stay unchanged — only the data source changes
