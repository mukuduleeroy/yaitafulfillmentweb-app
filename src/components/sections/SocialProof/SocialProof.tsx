import { partners } from "@/data/home";

export function SocialProof() {
  return (
    <section className="overflow-hidden border-y border-slate-200 bg-slate-50 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-black uppercase tracking-[0.2em] text-slate-500">
          Trusted by Zimbabwe&apos;s Fastest-Growing E-Commerce Brands
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex min-h-20 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 text-center text-sm font-black uppercase tracking-[0.08em] text-slate-700"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
