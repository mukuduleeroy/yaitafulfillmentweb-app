import Image from "next/image";

const footerGroups = [
  {
    title: "Services",
    links: ["Dedicated drivers", "Smart routing", "Wallet system", "Returns"],
  },
  {
    title: "Company",
    links: ["About us", "Blog", "Careers", "Contact"],
  },
  {
    title: "Support",
    links: ["FAQs", "Service alerts", "Merchant help", "Driver help"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--brand-teal-deep)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1.4fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-9 items-center justify-center rounded-lg bg-white">
                <Image
                  src="/assets/yaita-favicon.png"
                  alt="Yaita"
                  width={33}
                  height={60}
                  className="h-10 w-auto"
                />
              </span>
              <span className="text-2xl font-black">Yaita</span>
            </div>
            <p className="mt-5 max-w-sm leading-7 text-slate-300">
              AI powered delivery fulfillment, dedicated drivers, and secure
              wallet operations for growing merchants.
            </p>
            <div className="mt-6 text-sm text-slate-300">
              <p>+263 78 154 5517</p>
              <p>info@yaita.co.zw</p>
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
                      <a href="#home" className="transition hover:text-white">
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
          <p>Copyright &copy; 2025 Yaita. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#home" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#home" className="hover:text-white">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
