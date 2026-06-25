import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { spotlights } from "@/data/home";

export function FeatureSpotlights() {
  return (
    <section id="features" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Feature Spotlights"
            title="Operations built around the moments where revenue leaks."
          />
        </div>

        <div className="space-y-8">
          {spotlights.map((item, index) => (
            <Card
              key={item.title}
              className="grid items-center gap-8 p-5 lg:grid-cols-2 lg:p-8"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--brand-teal)]">
                  Deep Dive
                </p>
                <h3 className="mt-3 text-3xl font-black text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {item.detail}
                </p>
              </div>
              <div className="overflow-hidden rounded-lg bg-[var(--brand-cream)]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1200}
                  height={900}
                  className={`h-80 w-full object-contain ${
                    item.image.includes("fulfillment") ? "object-cover" : "p-8"
                  }`}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
