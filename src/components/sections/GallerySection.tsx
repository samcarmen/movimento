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
  { src: "/images/gallery/07.jpg", alt: "Movimento studio" },
  { src: "/images/gallery/08.jpg", alt: "Movimento studio" },
  { src: "/images/gallery/09.jpg", alt: "Movimento studio" },
];

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
              className="relative overflow-hidden rounded-lg min-h-[20rem]"
              style={{ aspectRatio: "1 / 1" }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
