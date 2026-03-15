import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ValuesSection from "@/components/sections/ValuesSection";
import WhoItsForSection from "@/components/sections/WhoItsForSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";
import WaveDivider from "@/components/shared/WaveDivider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WaveDivider topColor="var(--brand-tint)" bottomColor="var(--brand-band)" />
      <GallerySection />
      <WaveDivider topColor="var(--brand-band)" bottomColor="var(--brand-light)" />
      <ValuesSection />
      <WaveDivider topColor="var(--brand-light)" bottomColor="var(--brand-tint)" />
      <WhoItsForSection />
      <WaveDivider topColor="var(--brand-tint)" bottomColor="var(--brand-dark)" />
      <ContactSection />
    </>
  );
}
