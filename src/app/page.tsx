import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhoItsForSection from "@/components/sections/WhoItsForSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";
import WaveDivider from "@/components/shared/WaveDivider";

export default function Home() {
  return (
    <>
      <HeroSection noPaddingBottom />
      <WaveDivider topColor="var(--brand-light)" bottomColor="var(--brand-accent)" />
      <AboutSection noPaddingBottom />
      <WaveDivider topColor="var(--brand-accent)" bottomColor="var(--brand-light)" />
      <WhoItsForSection />
      <GallerySection noPaddingBottom />
      <WaveDivider topColor="var(--brand-light)" bottomColor="var(--brand-dark)" />
      <ContactSection />
    </>
  );
}
