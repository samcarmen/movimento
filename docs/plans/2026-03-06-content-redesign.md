# Content Redesign: Copy Optimisation + Section Surgery

**Date:** 2026-03-06
**Status:** Approved

## Overview

Two simultaneous changes:
1. **Copy cut (Approach A)** — remove filler, trim every text block to its minimum effective form
2. **Section surgery (Approach B)** — extract the values grid from About into its own slim section

The result: each section has one job. Reading order becomes clear.

---

## New Section Flow

| Section | Background | Job |
|---------|-----------|-----|
| Hero | `--brand-light` | First impression + CTA |
| About | `--brand-accent` | Who we are + our method |
| Values | `--brand-light` | What sets us apart (3 cards) |
| Who It's For | `--brand-light` | The audience |
| Gallery | `--brand-light` | The space |
| Contact | `--brand-dark` | Book a session |

Values and Who It's For share the same light background — no wave between them, just natural vertical spacing.

---

## Copy Changes

### Hero tagline
**Remove:** "A studio dedicated to conscious movement, helping you restore balance, stability, and freedom in your body. Move better. Live better."
**Replace with:** "Conscious movement for a body that works with you, not against you."

### About section — remove entirely
- The large "Move better, not just more." statement
- The "Discover our innovative approach." heading and its underline animation
- The closing statement "From method to practice, precision in every step."

### About section — story columns (trimmed to one paragraph each, no lead)
**Our Method:**
"Movimento works with the Canali Postural Method — a biomechanical approach to spinal stability and muscular balance that improves the way your body moves in everyday life."

**Our Approach:**
"Every program begins with careful listening. Exercises are built around your body, your timing, and your goals — not a generic plan."

The `lead` prop and the second paragraph are removed. Each column becomes title + one paragraph.

### Values section (extracted, no copy changes)
"What Sets Us Apart" heading and the three cards stay word-for-word. Only their location changes.

---

## Files to Modify / Create

| File | Change |
|------|--------|
| `src/components/sections/HeroSection.tsx` | Update tagline copy |
| `src/components/sections/AboutSection.tsx` | Remove hero statement, closing statement, VALUES data, ValueCard component, StoryColumn lead prop; trim to one paragraph per column |
| `src/components/sections/ValuesSection.tsx` | New — extracted VALUES data + ValueCard + grid layout |
| `src/app/page.tsx` | Import and insert ValuesSection between wave and WhoItsForSection |
