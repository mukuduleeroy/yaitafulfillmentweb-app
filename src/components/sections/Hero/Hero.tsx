import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto grid min-h-[calc(100vh-74px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--brand-teal)]">
            Zimbabwe&apos;s e-commerce operations layer
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[1.02] text-slate-950 md:text-7xl">
            You Run the Ads. We Handle the Rest.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Zimbabwe&apos;s only full-stack e-commerce fulfillment partner. From
            closing your inbound leads to warehousing, picking, packing, and
            same-day delivery. Scale your brand without touching a single box.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact">Start Scaling Today</Button>
            <Button href="#how-it-works" variant="secondary">
              See How It Works
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-lg bg-[var(--brand-yellow)]/20" />
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-2xl">
            <Image
              src="/assets/yaita-fulfillment-visual.jpeg"
              alt="Yaita warehouse with product displays and fulfillment agents"
              width={1259}
              height={1536}
              priority
              className="h-[420px] w-full object-cover object-left md:h-[620px]"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[var(--brand-teal-deep)]/90 p-5 text-white backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand-yellow)]">
                Live fulfillment floor
              </p>
              <p className="mt-2 text-xl font-black">
                Leads, stock, deliveries, and merchant settlements under one
                roof.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
