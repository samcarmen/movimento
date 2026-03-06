# Mobile Responsive Design

## Goal
Make every section of the Movimento website fully responsive across mobile (320px+), tablet (640px+), and desktop (1024px+).

## Approach
Section-by-section targeted fixes using Tailwind responsive prefixes. No structural rewrites — surgical adjustments only.

## Priority & Fixes Per Section

### 1. Hero (high priority)
- Watermark: hide on mobile (`hidden sm:block`) or reduce to `width: 40%` and push further right so it doesn't overlap text
- Top padding: reduce from `pt-28` to `pt-24` on mobile
- Heading: current `text-[2.2rem]` on mobile is acceptable — keep
- CTA buttons: already `flex-col sm:flex-row` ✓

### 2. Contact (high priority)
- Heading: `text-4xl md:text-5xl lg:text-6xl` — scale down from current `text-5xl md:text-6xl lg:text-7xl`
- Form stacks to single column on mobile already ✓
- Verify address + form stacking order on mobile

### 3. About (medium)
- Two-column grid stacks on mobile ✓
- Vertical divider line already `hidden lg:block` ✓
- Eyebrow label: verify opacity animation doesn't conflict with inline opacity style

### 4. Values (medium)
- Three-column grid stacks on mobile ✓
- Number watermarks (`text-8xl`): reduce to `text-6xl` on mobile to prevent clipping

### 5. Who It's For (medium)
- Grid: `md:grid-cols-2 lg:grid-cols-4` already responsive ✓
- Card spacing: reduce gap on mobile
- Bottom message: check line length on small screens

### 6. Gallery (low — already good)
- `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` ✓
- No changes needed

### 7. Footer (low)
- Logo: verify `h-25` renders correctly (non-standard Tailwind value — use `h-24`)
- Three-column grid stacks on mobile ✓

### 8. Header (low — already good)
- Mobile menu already implemented ✓
- No changes needed

## Success Criteria
- No horizontal scroll on any section at 375px (iPhone SE)
- All text readable without zooming
- CTAs tappable (min 44px touch target)
- Gallery images render correctly on mobile
