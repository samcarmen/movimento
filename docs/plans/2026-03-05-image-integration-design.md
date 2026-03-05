# Image Integration Design

**Date:** 2026-03-05
**Status:** Approved

## Overview

Add real photography to the Movimento website in two places:
1. Replace the hero right-column card with a studio photo
2. Add a new Gallery section with a static photo grid

Phase 2 (future): swap the static gallery for a live Instagram feed once account access is available.

---

## Hero Photo Panel

**Location:** `src/components/sections/HeroSection.tsx`

The hero's right column currently renders a blue-grey card with bullet-point content. Replace it with a studio/equipment photo using Next.js `<Image>` with `object-fit: cover`, inside the same rounded container at the same dimensions. The card's bullet content is removed (covered adequately by the About section).

**Asset required:** one strong horizontal or square photo of the studio or equipment.
**Path:** `public/images/hero-photo.jpg`

---

## Gallery Section

**New file:** `src/components/sections/GallerySection.tsx`
**Position:** between WhoItsForSection and ContactSection in `src/app/page.tsx`

### Layout
- Background: `--brand-light` (#F4F7F9) — maintains the light → blue-grey → light → dark banding arc
- Section heading: "Our Studio" using the shared `SectionHeading` component
- Responsive grid: 3 columns desktop / 2 tablet / 1 mobile
- Each cell: square-cropped photo, subtle hover scale (1.03, 0.3s ease)
- Below grid: small text line — "Follow us on Instagram @[handle]" linking to the profile

### Data
Photos are declared as a simple array in the component:

```ts
const GALLERY_PHOTOS = [
  { src: "/images/gallery/01.jpg", alt: "Studio space" },
  // ...
];
```

Files live in `public/images/gallery/`. To add/remove/reorder photos, edit the array and drop files in the folder.

### Future upgrade path
When Instagram account access is available, replace the static array with a fetch to the Instagram Graph API (or a third-party service like Behold.so). The grid layout and component shell stay the same — only the data source changes.

---

## Assets Checklist

- [ ] Hero photo → `public/images/hero-photo.jpg` (landscape or square, min 800px wide)
- [ ] Gallery photos (6–9 images) → `public/images/gallery/01.jpg` … `09.jpg`
- [ ] Instagram handle (for the "Follow us" link)

---

## Files to Modify / Create

| File | Change |
|------|--------|
| `src/components/sections/HeroSection.tsx` | Replace right-column card with `<Image>` |
| `src/components/sections/GallerySection.tsx` | New component |
| `src/app/page.tsx` | Insert `<GallerySection />` between WhoItsFor and Contact |
| `public/images/hero-photo.jpg` | New asset |
| `public/images/gallery/*.jpg` | New assets (6–9 photos) |
