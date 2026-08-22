import Image from "next/image";
import { Container } from "./Container";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="relative flex h-[200px] items-end overflow-hidden bg-ink md:h-[230px]">
      <Image
        src="/images/brand/banner-strip.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-ink/60" />
      <Container className="relative pb-7">
        <span className="eyebrow text-white/60">{eyebrow}</span>
        <h1 className="font-display mt-2 max-w-2xl text-3xl font-extrabold text-white balance md:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-2 max-w-xl text-sm text-white/70 md:text-base">{description}</p>
        ) : null}
      </Container>
    </div>
  );
}
