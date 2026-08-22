import Image from "next/image";

export function Logo({ inverted = false, tagline = false }: { inverted?: boolean; tagline?: boolean }) {
  const img = (
    <Image
      src="/images/brand/logo.png"
      alt="Alufab Facade Solutions"
      width={847}
      height={652}
      priority
      className={tagline ? "h-20 w-auto" : "h-14 w-auto"}
    />
  );

  if (inverted) {
    return <span className="inline-block w-fit rounded-sm bg-white p-2">{img}</span>;
  }

  return img;
}
