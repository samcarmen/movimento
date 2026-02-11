import { Instagram } from "lucide-react";
import Image from "next/image";
import { bodyText, headingText, labelText, NAVIGATION_LINKS } from "@/lib/styles";

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function FooterDivider() {
  return (
    <div className="flex items-center gap-6 mb-16">
      <div className="h-px flex-1" style={{ backgroundColor: "var(--brand-accent)" }} />
      <div
        className="text-xl italic"
        style={{ fontFamily: "var(--font-cormorant)", color: "var(--brand-charcoal)" }}
      >
        La Perfezione
      </div>
      <div className="h-px flex-1" style={{ backgroundColor: "var(--brand-accent)" }} />
    </div>
  );
}

function FooterLink({ name, href }: { name: string; href: string }) {
  return (
    <li>
      <a href={href} className="group inline-block relative" style={bodyText}>
        {name}
        <span
          className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
          style={{ backgroundColor: "var(--brand-accent)" }}
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
    <footer
      className="relative border-t"
      style={{ borderColor: "rgba(0, 0, 0, 0.1)", backgroundColor: "var(--brand-cream)" }}
    >
      <div className="max-w-7xl mx-auto container-padding py-20">
        <FooterDivider />

        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.jpg"
                  alt="Movimento Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-3xl font-normal" style={headingText}>
                Movimento
              </h3>
            </div>
            <p className="leading-relaxed text-sm" style={bodyText}>
              Move freely
              <br />
              Where quality meets movement.
            </p>
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
                className="group relative w-12 h-12 flex items-center justify-center border transition-all duration-300"
                style={{ borderColor: "var(--brand-charcoal)", color: "var(--brand-charcoal)" }}
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} className="relative z-10" />
                <div
                  className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-300"
                  style={{ backgroundColor: "var(--brand-accent)" }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ color: "var(--brand-light)" }}
                >
                  <Instagram size={20} />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t text-center" style={{ borderColor: "rgba(0, 0, 0, 0.08)" }}>
          <p className="text-sm" style={bodyText}>
            &copy; {new Date().getFullYear()} Movimento. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative background element */}
      <div
        className="absolute bottom-0 right-0 w-1/3 h-2/3 opacity-5 pointer-events-none"
        style={{
          background:
            "linear-gradient(45deg, transparent 40%, var(--brand-primary) 40%, var(--brand-primary) 45%, transparent 45%)",
        }}
      />
    </footer>
  );
}
