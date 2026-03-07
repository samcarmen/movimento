# Hero Carousel — Design

## Goal
Replace the current centred single-panel hero with a split hero: text on the left, image carousel on the right.

## Layout
- `grid lg:grid-cols-2` on the section content wrapper
- Section keeps `min-h-[100dvh]`
- Below `lg`: image panel hidden, text fills full width with logo watermark (current mobile state preserved)

## Left Panel — Text
- Left-aligned (remove `text-center` and `items-center`)
- Content unchanged: eyebrow with single left accent line, heading, tagline, CTA
- Padding: `pt-20 sm:pt-24 md:pt-28` to clear fixed header

## Right Panel — Image Carousel
- Full height, `overflow-hidden`, `relative`
- Images: `09.jpg → 08.jpg → 06.jpg → hero-photo.jpg` (looping)
- Next.js `<Image fill object-cover>` per slide
- Crossfade transition (opacity, ~600ms) between slides
- Auto-advance every 5 seconds, resets on manual interaction
- Prev/next arrow buttons: semi-transparent dark circles, left/right edges of panel
- Dot indicators: bottom-centre of panel, current slide highlighted

## Logo Watermark
- Hidden at `lg` breakpoint (image panel replaces it visually)
- Still visible on mobile behind the text

## Files to modify
- `src/components/sections/HeroSection.tsx`
