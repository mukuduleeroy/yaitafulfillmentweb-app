import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section id="contact" className="bg-[var(--brand-yellow)] py-20">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="text-4xl font-black leading-tight text-[var(--brand-teal-deep)] md:text-5xl">
          Ready to step out of the warehouse and back into the CEO seat?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-8 text-[var(--brand-teal-deep)]/80">
          Let Yaita handle the heavy lifting.
        </p>
        <Button
          href="mailto:support@yaita.co.zw"
          variant="dark"
          className="mt-8 px-7"
        >
          Outsource Your Operations Today
        </Button>
      </div>
    </section>
  );
}
