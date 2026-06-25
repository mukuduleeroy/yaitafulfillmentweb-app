import Image from "next/image";

const quickActions = [
  {
    label: "Track",
    title: "Track an order",
    detail: "Follow merchant orders, driver handoffs, and customer delivery status.",
  },
  {
    label: "Quote",
    title: "Estimate delivery",
    detail: "Preview delivery cost by zone, batch size, and service level.",
  },
  {
    label: "Pickup",
    title: "Schedule pickup",
    detail: "Book same-day pickup windows and assign jobs to your driver pool.",
  },
];

const advantages = [
  {
    title: "Dedicated drivers",
    detail:
      "Build a dependable delivery squad without buying vehicles, hiring dispatchers, or manually reconciling every route.",
  },
  {
    title: "AI smart routing",
    detail:
      "Batch nearby orders, avoid delays, and rebalance routes as new jobs arrive.",
  },
  {
    title: "Wallet system",
    detail:
      "Manage delivery fees, cash-on-delivery collections, and merchant settlements from one secure wallet.",
  },
  {
    title: "Simple integration",
    detail:
      "Connect your store, retail system, or social selling workflow to fulfillment operations.",
  },
];

const benefits = [
  "Cut delivery costs by up to 30% with batching and route optimization.",
  "Choose drivers, monitor transactions, and keep real-time control of operations.",
  "Give customers faster deliveries with clearer status updates.",
  "Reduce cash handling with wallet-backed reconciliation and settlement records.",
];

const plans = [
  {
    name: "Free Plan",
    price: "Free",
    description: "For merchants starting structured delivery operations.",
    features: [
      "Unlimited orders",
      "Unlimited products",
      "Batch orders",
      "Smart routing",
      "Digital wallet",
      "SMS alerts",
    ],
    cta: "Start free",
  },
  {
    name: "Enterprise Plan",
    price: "Custom",
    description: "For high-volume teams needing dedicated operational support.",
    features: [
      "Unlimited dedicated drivers",
      "Custom integrations",
      "Advanced analytics",
      "Dedicated account manager",
      "SLA reporting",
      "Multi-branch controls",
    ],
    cta: "Contact sales",
  },
];

const faqs = [
  {
    question: "How does the dedicated driver system work?",
    answer:
      "Yaita helps assign reliable drivers to your business so they learn your routes, customer expectations, pickup rhythm, and delivery preferences.",
  },
  {
    question: "Can I manage cash-on-delivery through Yaita?",
    answer:
      "Yes. Cash collected by drivers can be tracked against orders and settled into your merchant wallet for cleaner reconciliation.",
  },
  {
    question: "What types of businesses use Yaita?",
    answer:
      "Yaita is built for e-commerce stores, retail outlets, restaurants, social sellers, and any business that depends on last-mile delivery.",
  },
  {
    question: "How does Yaita pricing work?",
    answer:
      "Yaita supports simple starting plans and custom pricing for larger merchants with higher delivery volume, integrations, or SLA needs.",
  },
];

const posts = [
  {
    title: "Fulfillment-as-a-Service: Could Africa Leapfrog Again?",
    date: "October 6, 2025",
    image: "/assets/yaita-fulfillment-visual.jpeg",
    summary:
      "How shared logistics infrastructure can help merchants move faster without owning the whole delivery stack.",
  },
  {
    title: "Cash-on-Delivery vs Wallet",
    date: "October 5, 2025",
    image: "/assets/yaita-phone-orders.png",
    summary:
      "What works best for Zimbabwean e-commerce teams balancing trust, speed, and reconciliation.",
  },
  {
    title: "What We Have Learned Building Yaita",
    date: "October 4, 2025",
    image: "/assets/yaita-fulfillment-visual.jpeg",
    summary:
      "The real operational lessons behind merchant fulfillment, route density, and customer reliability.",
  },
];

const serviceTiles = [
  "Create a delivery",
  "Find delivery zones",
  "Manage returns",
  "Service alerts",
];

export default function Home() {
  return (
    <>
      <section id="home" className="bg-white">
        <div className="bg-[var(--brand-teal)] px-6 pb-36 pt-16 text-white lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--brand-yellow)]">
              E-commerce fulfillment for Zimbabwe
            </p>
            <h1 className="mx-auto mt-5 max-w-4xl text-5xl font-black leading-[1.03] tracking-normal md:text-7xl">
              Deliver Faster. Get Paid Securely.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
              Yaita provides AI optimised routes, dedicated drivers, and a
              digital wallet for businesses that depend on fast delivery and
              secure payments.
            </p>

            <div className="relative mx-auto mt-10 max-w-4xl pb-10">
              <div className="absolute inset-x-6 bottom-4 h-32 rounded-full bg-[var(--brand-yellow)]/45 blur-3xl" />
              <Image
                src="/assets/laptop-hero.png"
                alt="Yaita merchant dashboard on a laptop"
                width={760}
                height={890}
                priority
                className="relative mx-auto h-auto w-full max-w-[100px] object-contain drop-shadow-2xl md:max-w-[260px] lg:max-w-[600px]"
              />

              <Image
                src="/assets/yaita-phone-orders.png"
                alt="Yaita orders mobile app screen"
                width={4096}
                height={4096}
                priority
                className="absolute -bottom-2 right-4 hidden h-auto w-48 drop-shadow-2xl sm:block md:right-12 md:w-60 lg:right-20 lg:w-72"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto -mt-20 max-w-5xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg bg-white shadow-2xl ring-1 ring-black/10">
            <div className="grid grid-cols-3 border-b border-slate-200">
              {quickActions.map((action, index) => (
                <button
                  key={action.label}
                  className={`min-h-24 px-3 py-5 text-center transition ${
                    index === 0
                      ? "bg-[var(--brand-yellow)] text-[var(--brand-teal-deep)]"
                      : "bg-white text-slate-700 hover:bg-[var(--brand-cream)]"
                  }`}
                >
                  <span className="block text-xs font-black uppercase tracking-[0.18em]">
                    {action.label}
                  </span>
                  <span className="mt-2 block text-base font-black sm:text-lg">
                    {action.title}
                  </span>
                </button>
              ))}
            </div>

            <div className="p-5 sm:p-7">
              <form className="grid gap-3 md:grid-cols-[1fr_auto]">
                <label className="sr-only" htmlFor="tracking">
                  Tracking ID
                </label>
                <input
                  id="tracking"
                  name="tracking"
                  placeholder="Enter a Yaita order or tracking ID"
                  className="min-h-14 rounded-lg border border-slate-300 px-4 text-lg text-slate-950 outline-none transition focus:border-[var(--brand-yellow)] focus:ring-4 focus:ring-[var(--brand-yellow)]/20"
                />
                <button
                  type="button"
                  className="min-h-14 rounded-lg bg-[var(--brand-teal-dark)] px-8 text-base font-black uppercase tracking-[0.12em] text-white transition hover:bg-[var(--brand-teal)]"
                >
                  Track
                </button>
              </form>
              <div className="mt-5 flex flex-col gap-3 text-sm font-bold text-[var(--brand-teal-dark)] sm:flex-row sm:items-center sm:justify-center">
                <a href="#contact" className="hover:text-[var(--brand-teal)]">
                  Advanced order tracking
                </a>
                <span className="hidden text-slate-300 sm:inline">|</span>
                <a href="#pricing" className="hover:text-[var(--brand-teal)]">
                  Delivery rates and plans
                </a>
                <span className="hidden text-slate-300 sm:inline">|</span>
                <a href="#contact" className="hover:text-[var(--brand-teal)]">
                  Schedule a pickup
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {serviceTiles.map((tile) => (
              <a
                key={tile}
                href="#contact"
                className="group rounded-lg border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-[var(--brand-yellow)] hover:shadow-lg"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-cream)] text-xl font-black text-[var(--brand-teal)] transition group-hover:bg-[var(--brand-yellow)] group-hover:text-[var(--brand-teal-deep)]">
                  {tile.charAt(0)}
                </span>
                <span className="mt-4 block font-black text-slate-950">
                  {tile}
                </span>
              </a>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-3xl rounded-lg bg-[var(--brand-cream)] px-5 py-4 text-center text-sm font-semibold text-[var(--brand-teal-deep)]">
            Dedicated drivers, smart routing, wallet settlement, and pickup
            management in one Yaita fulfillment workflow.
          </p>
        </div>
      </section>

      <section id="services" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-teal)]">
              The Yaita advantage
            </p>
            <h2 className="mt-3 text-4xl font-black text-slate-950">
              One logistics layer for deliveries, drivers, and payments.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--brand-teal-dark)] text-lg font-black text-[var(--brand-yellow)]">
                  {item.title.slice(0, 2).toUpperCase()}
                </div>
                <h3 className="text-xl font-black text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-teal)]">
              Benefits of using Yaita
            </p>
            <h2 className="mt-3 text-4xl font-black text-slate-950">
              Built for growth, designed for efficiency.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Give your operations team the same kind of quick-access logistics
              tools global carriers use, shaped around local merchant realities.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-lg border border-slate-200 p-5 shadow-sm"
              >
                <span className="mb-4 block h-1.5 w-14 rounded-full bg-[var(--brand-yellow)]" />
                <p className="font-semibold leading-7 text-slate-800">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-teal)]">
              Pricing plans
            </p>
            <h2 className="mt-3 text-4xl font-black text-slate-950">
              Flexible plans for growing businesses.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-slate-950">
                      {plan.name}
                    </h3>
                    <p className="mt-2 text-slate-600">{plan.description}</p>
                  </div>
                  <p className="text-4xl font-black text-slate-950">
                    {plan.price}
                  </p>
                </div>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-slate-700">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand-yellow)]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 inline-flex rounded-lg bg-[var(--brand-teal-dark)] px-6 py-3 font-bold text-white transition hover:bg-[var(--brand-teal)]"
                >
                  {plan.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faqs" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-teal)]">
              General questions
            </p>
            <h2 className="mt-3 text-4xl font-black text-slate-950">
              Your questions, answered.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              For more questions, contact the Yaita team and we will help you
              map your current delivery workflow.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-lg border border-slate-200 p-5"
              >
                <summary className="cursor-pointer text-lg font-black text-slate-950">
                  {faq.question}
                </summary>
                <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-teal)]">
              Our blog
            </p>
            <h2 className="mt-3 text-4xl font-black text-slate-950">
              Ideas for better fulfillment.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.title}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1536}
                  height={1024}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <p className="text-sm font-bold text-[var(--brand-teal)]">
                    {post.date}
                  </p>
                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    {post.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    {post.summary}
                  </p>
                  <a
                    href="#blog"
                    className="mt-6 inline-flex font-bold text-[var(--brand-teal-dark)] underline decoration-[var(--brand-yellow)] decoration-4 underline-offset-4"
                  >
                    Read more
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <Image
            src="/assets/yaita-fulfillment-visual.jpeg"
            alt="Yaita fulfillment and delivery visual"
            width={1259}
            height={1536}
            className="h-full min-h-[420px] w-full rounded-lg object-cover object-left"
          />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-teal)]">
              About us
            </p>
            <h2 className="mt-3 text-4xl font-black text-slate-950">
              More than just delivery. We are building the future of
              fulfillment.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              At Yaita, logistics should empower businesses, not slow them down.
              We help merchants take control of deliveries, lower costs, and
              scale efficiently with automation that still fits local operations.
            </p>
            <ul className="mt-8 space-y-4 text-slate-700">
              <li>Founded to disrupt inefficient fulfillment models.</li>
              <li>Designed for ambitious businesses that want real control.</li>
              <li>Built to optimize, automate, and empower merchant teams.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[var(--brand-yellow)] py-20 text-[var(--brand-teal-deep)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em]">
              Contact us
            </p>
            <h2 className="mt-3 text-4xl font-black">
              Manage all your orders from your mobile.
            </h2>
            <p className="mt-5 max-w-2xl leading-8">
              Create orders, request delivery, monitor driver progress, and
              manage settlements from a merchant workflow built for speed.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <p className="text-lg font-black">Talk to Yaita</p>
            <p className="mt-4 text-slate-700">Phone: +263 78 154 5517</p>
            <p className="mt-2 text-slate-700">Email: info@yaita.co.zw</p>
            <a
              href="mailto:info@yaita.co.zw"
              className="mt-6 inline-flex rounded-lg bg-[var(--brand-teal-dark)] px-6 py-3 font-bold text-white transition hover:bg-[var(--brand-teal)]"
            >
              Email us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
