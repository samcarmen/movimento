"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ShimmerButton from "@/components/shared/ShimmerButton";
import { NAVIGATION_LINKS } from "@/lib/styles";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function scrollToSection(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  onComplete?: () => void,
) {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    onComplete?.();
  }
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

interface NavLinkProps {
  name: string;
  href: string;
}

function DesktopNavLink({ name, href }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={(e) => scrollToSection(e, href)}
      className="relative text-sm tracking-wider uppercase font-medium group transition-colors duration-300"
      style={{
        fontFamily: "var(--font-sans)",
        color: "var(--brand-dark)",
      }}
    >
      {name}
      <span
        className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300 origin-left"
        style={{ backgroundColor: "var(--brand-primary)" }}
      />
    </a>
  );
}

interface MobileNavLinkProps {
  name: string;
  href: string;
  index: number;
  onNavigate?: () => void;
}

function MobileNavLink({ name, href, index, onNavigate }: MobileNavLinkProps) {
  return (
    <motion.a
      href={href}
      onClick={(e) => scrollToSection(e, href, onNavigate)}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      className="block py-3 text-lg font-medium tracking-wide"
      style={{ fontFamily: "var(--font-sans)", color: "var(--brand-dark)" }}
    >
      {name}
    </motion.a>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      style={{ borderBottom: scrolled ? "1px solid rgba(0, 0, 0, 0.05)" : "none" }}
    >
      <nav className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="relative group outline-none focus:outline-none" style={{ WebkitTapHighlightColor: "transparent" }}>
            <Image
              src="/images/logo_transparent.png"
              alt="Movimento"
              width={160}
              height={48}
              className="h-25 w-auto outline-none border-none"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-12">
            {NAVIGATION_LINKS.map((item) => (
              <DesktopNavLink key={item.name} {...item} />
            ))}

            <ShimmerButton
              size="sm"
              className="px-6 py-5 text-xs tracking-widest uppercase font-medium"
              onClick={() => window.open("https://wa.me/393668719960?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20Movimento%20and%20join%20the%20studio.", "_blank")}
            >
              Join Now
            </ShimmerButton>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            style={{ color: "var(--brand-dark)" }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-b-lg"
            >
              <div className="py-6 space-y-4 px-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <MobileNavLink
                    key={item.name}
                    {...item}
                    index={index}
                    onNavigate={closeMobileMenu}
                  />
                ))}

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: NAVIGATION_LINKS.length * 0.1 }}
                >
                  <ShimmerButton
                    className="w-full mt-4 py-6 text-sm tracking-widest uppercase"
                    onClick={() => {
                      closeMobileMenu();
                      window.open("https://wa.me/393668719960?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20Movimento%20and%20join%20the%20studio.", "_blank");
                    }}
                  >
                    Join Now
                  </ShimmerButton>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
