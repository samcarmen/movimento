import { bodyText, NAVIGATION_LINKS } from "@/lib/styles";

const INSTAGRAM_URL = "https://www.instagram.com/movimento.kw?igsh=MXgzNnMyeHFvNzc5OQ==";

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function FooterLink({ name, href }: { name: string; href: string }) {
  return (
    <li>
      <a
        href={href}
        className="text-sm transition-opacity duration-300 hover:opacity-60"
        style={bodyText}
      >
        {name}
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
      <div className="max-w-7xl mx-auto container-padding py-5 sm:py-6">
        <div className="flex flex-col items-center gap-4 text-center sm:grid sm:grid-cols-3 sm:items-center sm:text-left">
          <p className="text-xs sm:text-sm" style={bodyText}>
            &copy; {new Date().getFullYear()} Movimento
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {NAVIGATION_LINKS.map((item) => (
              <FooterLink key={item.name} {...item} />
            ))}
          </ul>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300 hover:bg-[var(--brand-dark)] hover:text-[var(--brand-light)] sm:justify-self-end"
            style={{ borderColor: "rgba(29,53,64,0.16)", color: "var(--brand-dark)" }}
            aria-label="Follow us on Instagram"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
