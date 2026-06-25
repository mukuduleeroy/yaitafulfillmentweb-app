type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  inverse?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  inverse = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`text-sm font-black uppercase tracking-[0.2em] ${
          inverse ? "text-[var(--brand-yellow)]" : "text-[var(--brand-teal)]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-4xl font-black md:text-5xl ${
          inverse ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-lg leading-8 ${
            inverse ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
