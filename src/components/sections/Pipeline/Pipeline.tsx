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
            <Card key={item.title} className="p-6">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-black text-slate-400">
                  {item.step}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--brand-teal-deep)] text-sm font-black text-[var(--brand-yellow)]">
                  {item.icon}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-black text-slate-950">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600">{item.detail}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
