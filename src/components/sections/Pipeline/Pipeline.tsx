import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pipelineSteps } from "@/data/home";

export function Pipeline() {
  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          centered
          eyebrow="The Yaita Pipeline"
          title="The Ultimate E-Commerce Autopilot."
          description="Stop juggling spreadsheets and drivers. Plug into a fulfillment engine built for growth."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {pipelineSteps.map((item) => (
            <Card
              key={item.title}
              className="group p-6 transition duration-200 hover:-translate-y-1 hover:border-[var(--brand-teal)] hover:shadow-lg"
              tabIndex={0}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-cream)] text-sm font-black text-[var(--brand-teal-deep)] transition group-hover:bg-[var(--brand-yellow)]">
                {item.step}
              </span>
              <h3 className="mt-6 text-xl font-black text-slate-950">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600">{item.detail}</p>
              <span className="mt-6 block h-1 w-12 rounded-full bg-[var(--brand-yellow)] transition group-hover:w-20" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
