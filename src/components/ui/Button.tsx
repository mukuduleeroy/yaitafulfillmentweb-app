import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "dark";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--brand-yellow)] text-[var(--brand-teal-deep)] hover:bg-[var(--brand-teal-dark)] hover:text-white",
  secondary:
    "border border-slate-300 text-slate-900 hover:border-[var(--brand-teal)] hover:text-[var(--brand-teal)]",
  dark:
    "bg-[var(--brand-teal-deep)] text-white hover:bg-white hover:text-[var(--brand-teal-deep)]",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-lg px-6 text-sm font-black uppercase tracking-[0.08em] transition",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
