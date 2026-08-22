"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { MenuIcon, CloseIcon } from "./Icons";
import { nav } from "@/lib/data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <Container className="relative flex h-20 items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 whitespace-nowrap md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-display text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                  active ? "text-blueprint" : "text-ink hover:text-blueprint"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-sm bg-ink px-5 py-2.5 font-display text-[13px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-blueprint md:inline-block"
        >
          Start a Project
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-ink md:hidden"
        >
          {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-line bg-paper md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-sm px-2 py-3 font-display text-sm font-semibold uppercase tracking-wide ${
                  pathname === item.href ? "text-blueprint" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  );
}
