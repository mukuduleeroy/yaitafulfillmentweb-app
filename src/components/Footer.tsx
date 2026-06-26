import Image from "next/image";

const footerGroups = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Privacy Policy", "Terms of Service"],
  },
  {
    title: "Resources",
    links: ["Merchant Login", "API Documentation", "Help Center"],
  },
  {
    title: "Socials",
    links: ["LinkedIn", "Facebook", "Instagram"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--brand-teal-deep)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/assets/Wordmark - Inverted.webp"
                alt="Yaita Fulfillment"
                width={220}
                height={68}
                className="h-12 w-auto"
              />
            </div>
            <p className="mt-5 max-w-md leading-7 text-slate-300">
              Full-stack e-commerce fulfillment for Zimbabwean brands ready to
              scale beyond manual operations.
            </p>
            <div className="mt-6 space-y-2 text-sm text-slate-300">
              <p>Harare, Zimbabwe</p>
              <p>+263 78 154 5517</p>
              <p>support@yaita.co.zw</p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-black text-[var(--brand-yellow)]">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#contact" className="transition hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>Copyright &copy; 2026 Yaita Fulfillment. All rights reserved.</p>
          <div className="flex gap-4">
            {["in", "f", "ig"].map((icon) => (
              <a
                key={icon}
                href="#contact"
                aria-label={icon === "in" ? "LinkedIn" : icon === "f" ? "Facebook" : "Instagram"}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-xs font-black uppercase text-white transition hover:border-[var(--brand-yellow)] hover:text-[var(--brand-yellow)]"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
