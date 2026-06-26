import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#features", label: "Features" },
  { href: "#integrations", label: "Integrations" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-8">
        <Link href="/" className="flex min-w-fit items-center gap-3">
          <Image
            src="/assets/logo.webp"
            alt="Yaita Fulfillment"
            width={180}
            height={56}
            className="h-11 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-slate-700 transition hover:text-[var(--brand-teal)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://merchant.yaita.co.zw"
            className="hidden rounded-lg border border-slate-300 px-4 py-2 text-sm font-black text-slate-800 transition hover:border-[var(--brand-teal)] hover:text-[var(--brand-teal)] sm:inline-flex"
          >
            Log In
          </a>
          <a
            href="#contact"
            className="inline-flex rounded-lg bg-[var(--brand-yellow)] px-4 py-2 text-sm font-black text-[var(--brand-teal-deep)] transition hover:bg-[var(--brand-teal-dark)] hover:text-white"
          >
            Outsource Your Operations
          </a>
        </div>
      </div>
    </header>
  );
}
