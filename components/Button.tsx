import Link from "next/link";
import { ArrowIcon } from "./Icons";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
};

const base =
  "inline-flex items-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200";

const variants = {
  solid: "bg-ink text-white hover:bg-blueprint",
  outline: "border border-ink text-ink hover:bg-ink hover:text-white",
  ghost: "text-white border border-white/50 hover:bg-white hover:text-ink",
};

export function Button({ href, children, variant = "solid", className = "" }: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <ArrowIcon className="h-4 w-4" />
    </Link>
  );
}
