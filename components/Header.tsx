import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "#services", label: "Services" },
  { href: "#benefits", label: "Benefits" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faqs", label: "FAQs" },
  { href: "#blog", label: "Blog" },
  { href: "#about", label: "About" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--brand-teal)]/15 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/yaita-favicon.png"
            alt="Yaita"
            width={33}
            height={60}
            className="h-11 w-auto"
          />
          <span className="text-2xl font-black text-slate-950">Yaita</span>
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
            className="hidden text-sm font-bold text-slate-700 transition hover:text-[var(--brand-teal)] sm:inline-flex"
          >
            Sign in
          </a>
          <a
            href="https://merchant.yaita.co.zw"
            className="inline-flex rounded-lg bg-[var(--brand-yellow)] px-4 py-2 text-sm font-black text-[var(--brand-teal-deep)] transition hover:bg-[var(--brand-teal-dark)] hover:text-white"
          >
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
}
