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
  { src: "/images/gallery/studio-city-skyline.jpg", alt: "studio city skyline", position: "object-center" },
  { src: "/images/gallery/studio-logo-wall-night.jpg", alt: "studio logo wall night", position: "object-center" },
  { src: "/images/gallery/studio-treatment-area-window-view.jpg", alt: "studio treatment area window view", position: "object-center" },
  { src: "/images/gallery/client-assisted-dowel-press.jpg", alt: "client assisted dowel press", position: "object-center" },
  { src: "/images/gallery/client-wall-bars-knee-lift.jpg", alt: "client wall bars knee lift", position: "object-center" },
  { src: "/images/gallery/therapist-side-lying-leg-lift-03.jpg", alt: "therapist side lying leg lift", position: "object-center" },
];

const INSTAGRAM_HANDLE = "@movimento.kw";
const INSTAGRAM_URL = "https://www.instagram.com/movimento.kw";

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function GallerySection({ noPaddingBottom = false }: { noPaddingBottom?: boolean }) {
  return (
    <section
      id="gallery"
      className={`${noPaddingBottom ? "pt-16 md:pt-24 lg:pt-32 pb-0" : "section-padding"} relative`}
      style={{ backgroundColor: "var(--brand-band)" }}
    >
      <div className="max-w-7xl mx-auto container-padding">
        <AnimatedSection>
          <div className="mb-16">
            <SectionHeading className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-center">
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
              className="relative overflow-hidden rounded-lg min-h-[16rem] sm:min-h-[20rem]"
              style={{ aspectRatio: "1 / 1" }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={`object-cover ${photo.position} transition-transform duration-300 ease-out hover:scale-[1.03]`}
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
