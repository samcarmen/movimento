import Image from "next/image";
import { Instagram } from "lucide-react";
import { bodyText, labelText, NAVIGATION_LINKS } from "@/lib/styles";
import WaveDivider from "@/components/shared/WaveDivider";

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function FooterLink({ name, href }: { name: string; href: string }) {
  return (
    <li>
      <a href={href} className="group inline-block relative" style={bodyText}>
        {name}
        <span
          className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
          style={{ backgroundColor: "var(--brand-primary)" }}
        />
      </a>
    </li>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--brand-light)" }}>
      <WaveDivider topColor="var(--brand-dark)" bottomColor="var(--brand-light)" />
      <div className="max-w-7xl mx-auto container-padding py-12 sm:py-16 md:py-20">

        <div className="grid md:grid-cols-3 gap-8 md:gap-16 mb-10 sm:mb-16">
          {/* Brand */}
          <div className="flex items-start">
            <Image
              src="/images/logo.svg"
              alt="Movimento"
              width={160}
              height={48}
              className="h-16 sm:h-20 w-auto"
            />
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm tracking-widest uppercase font-medium mb-6" style={labelText}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAVIGATION_LINKS.map((item) => (
                <FooterLink key={item.name} {...item} />
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm tracking-widest uppercase font-medium mb-6" style={labelText}>
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/movimento.kw?igsh=MXgzNnMyeHFvNzc5OQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center border transition-all duration-300 rounded"
                style={{ borderColor: "var(--brand-dark)", color: "var(--brand-dark)" }}
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} className="relative z-10 group-hover:text-white transition-colors duration-300" />
                <div
                  className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-300 rounded"
                  style={{ backgroundColor: "var(--brand-primary)" }}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-sm" style={bodyText}>
            &copy; {new Date().getFullYear()} Movimento. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
