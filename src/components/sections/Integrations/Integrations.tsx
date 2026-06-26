import Image from "next/image";
import { integrations } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Integrations() {
  return (
    <section id="integrations" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <SectionHeading
          eyebrow="Integrations & Partners"
          title="Plays Nicely With Your Tech Stack."
          description="Connect Yaita to the tools you already use to generate sales. No complex coding required."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {integrations.map((integration) => (
            <article
              key={integration.name}
              className="rounded-lg border border-slate-200 bg-slate-50 p-6"
            >
              <div className="mb-6 flex min-h-16 items-center gap-3">
                {integration.logos.map((logo) => (
                  <span
                    key={logo.name}
                    className="flex h-14 min-w-14 items-center justify-center rounded-lg border border-slate-200 bg-white px-3"
                  >
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      width={logo.width}
                      height={logo.height}
                      unoptimized={logo.src.endsWith(".svg")}
                      className="max-h-9 w-auto max-w-24 object-contain"
                    />
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-black text-slate-950">
                {integration.name}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {integration.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
