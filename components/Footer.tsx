import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { PhoneIcon, MailIcon, PinIcon, InstagramIcon } from "./Icons";
import { nav, contact } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1.3fr]">
        <div className="flex flex-col gap-4">
          <Logo inverted tagline />
          <p className="max-w-xs text-sm leading-relaxed text-white/65">
            Shaping spaces. Elevating futures. Facade glazing, U-PVC &amp; aluminium fabrication and
            MS fabrication out of Bengaluru since 2015.
          </p>
          <a
            href={contact.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            <InstagramIcon className="h-5 w-5" />
            {contact.instagram}
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <span className="eyebrow text-white/50">Quick links</span>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-white/75 hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="eyebrow text-white/50">Get in touch</span>
          <a href={contact.phoneHref} className="flex items-center gap-2 text-sm text-white/75 hover:text-white">
            <PhoneIcon className="h-4 w-4 shrink-0" />
            {contact.contactName}: +91 {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-sm text-white/75 hover:text-white">
            <MailIcon className="h-4 w-4 shrink-0" />
            {contact.email}
          </a>
          <div className="flex items-start gap-2 text-sm text-white/75">
            <PinIcon className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{contact.addressLines.join(" ")}</span>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-white/45 sm:flex-row">
          <span>Alufab Facade Solutions — Facade Glazing | U-PVC &amp; Aluminium Fabrication | MS Fabrication</span>
          <span>&copy; {new Date().getFullYear()} Alufab Facade Solutions. All rights reserved.</span>
        </Container>
      </div>
    </footer>
  );
}
