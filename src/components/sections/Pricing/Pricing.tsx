import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Pricing() {
  return (
    <section id="pricing" className="bg-[var(--brand-teal-deep)] py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <SectionHeading
          inverse
          eyebrow="Operational Pricing Model"
          title="Pricing Built for Performance."
          description="No expensive software subscriptions. No hidden warehouse fees. You only pay when we successfully deliver."
        />

        <article className="rounded-lg bg-white p-8 text-slate-950 shadow-2xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--brand-teal)]">
            Flat-Rate Fulfillment
          </p>
          <h3 className="mt-4 text-3xl font-black">
            One agreed rate per successfully delivered order.
          </h3>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            This covers the sales call, the warehouse picking, the packaging,
            the delivery, and the cash collection. High-volume sellers qualify
            for customized, volume-based discounts.
          </p>
          <Button href="#contact" className="mt-8">
            Get a Custom Quote
          </Button>
        </article>
      </div>
    </section>
  );
}
