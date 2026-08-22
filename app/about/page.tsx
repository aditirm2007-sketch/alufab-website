import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { CheckIcon } from "@/components/Icons";
import { services, coreStrengths, workshop, leadership } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | Alufab Facade Solutions",
  description:
    "Bengaluru-based facade specialists since 2015 — our story, capability, workforce and in-house manufacturing setup.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A decade of precision facade engineering"
        description="Design, manufacture and installation of high-quality external and internal facade systems, out of Bengaluru."
      />

      {/* Our story */}
      <section className="py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="eyebrow text-blueprint">Our story</span>
            <h2 className="font-display balance mt-3 text-3xl font-extrabold text-ink md:text-4xl">
              Established 2015. Built on trust ever since.
            </h2>
          </div>
          <div className="flex flex-col gap-5 text-sm leading-relaxed text-body md:text-base">
            <p>
              Alufab Facade Solutions, based in Bengaluru, Karnataka, is a leading provider of
              comprehensive façade and architectural solutions. Established in 2015, we specialise in
              the design, manufacture, and installation of high-quality external and internal façade
              systems and architectural works.
            </p>
            <p>
              Our primary objective is to deliver innovative, durable, and aesthetically appealing
              façade solutions that meet the evolving needs of architects, builders, corporates, and
              project owners — with a strong commitment to quality, precision, and customer satisfaction
              on every project we undertake.
            </p>
            <p>
              With the continued support and confidence of our valued clients, we have successfully
              established a state-of-the-art manufacturing facility that lets us deliver projects
              efficiently while maintaining the highest standards of quality.
            </p>
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="bg-surface py-24">
        <Container className="max-w-3xl">
          <div className="mt-6 grid gap-8 md:grid-cols-[280px_1fr]">
            <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden bg-paper">
              <Image
                src={leadership.photo}
                alt={leadership.name}
                fill
                sizes="280px"
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="font-display balance text-2xl font-extrabold text-ink md:text-3xl">
                {leadership.name}
              </h2>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.08em] text-blueprint">
                {leadership.title}, {leadership.company}
              </p>

              <div className="mt-6 flex flex-col gap-5 text-sm leading-relaxed text-body md:text-base">
                {leadership.brief.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <h3 className="font-display mt-10 text-base font-bold text-ink">Vision</h3>
          <p className="mt-3 text-sm leading-relaxed text-body md:text-base">{leadership.vision}</p>

          <h3 className="font-display mt-10 text-base font-bold text-ink">Leadership Philosophy</h3>
          <blockquote className="font-display balance mt-3 border-l-2 border-blueprint pl-5 text-lg font-semibold italic text-ink">
            &ldquo;{leadership.philosophy}&rdquo;
          </blockquote>

          <h3 className="font-display mt-10 text-base font-bold text-ink">Core Expertise</h3>
          <div className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {leadership.expertise.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-blueprint" />
                <span className="text-sm text-body">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm leading-relaxed text-body md:text-base">
            {leadership.education}. {leadership.experience}. {leadership.workedInGulf}.
          </p>
        </Container>
      </section>

      {/* Industry experience */}
      <section className="bg-surface py-24">
        <Container className="max-w-3xl text-center">
          <span className="eyebrow text-blueprint">Industry experience</span>
          <h2 className="font-display balance mt-3 text-2xl font-extrabold text-ink md:text-3xl">
            Serving the façade fabrication industry since 2014
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-body md:text-base">
            Over a decade of expertise delivering innovative, high-quality façade and architectural
            solutions. Our long-standing presence in the industry reflects a commitment to excellence
            that has built lasting relationships with architects, builders, developers, and corporate
            clients across diverse sectors.
          </p>
        </Container>
      </section>

      {/* What we deliver */}
      <section className="py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="eyebrow text-blueprint">What we deliver</span>
            <h2 className="font-display balance mt-3 text-3xl font-extrabold text-ink md:text-4xl">
              Turnkey, start to finish
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-body">
              We manage every stage of the project with precision and professionalism, ensuring
              seamless execution, superior craftsmanship, and compliance with the highest quality and
              safety standards.
            </p>
          </div>
          <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-blueprint" />
                <span className="text-sm text-body">{service}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* People, planning & partners */}
      <section className="bg-ink py-24 text-white">
        <Container>
          <span className="eyebrow text-white/60">People, planning &amp; partners</span>
          <h2 className="font-display balance mt-3 max-w-xl text-3xl font-extrabold md:text-4xl">
            The team, the schedule, and the vendors behind the work
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="font-display text-lg font-bold">Skilled workforce</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Experienced site supervisors, along with skilled, semi-skilled, and support personnel
                committed to quality workmanship at every stage of the project.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold">Schedule &amp; oversight</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Every project runs on a well-defined execution schedule. Our Directors monitor progress
                through regular site visits, enabling quick decisions and smooth coordination.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold">Vendor network</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Long-term relationships with trusted suppliers of glass, aluminium, hardware and
                sealants ensure a reliable supply chain and consistent product quality.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core strengths */}
      <section className="py-24">
        <Container>
          <span className="eyebrow text-blueprint">Core strengths</span>
          <h2 className="font-display balance mt-3 max-w-xl text-3xl font-extrabold text-ink md:text-4xl">
            What guides our work culture
          </h2>
          <div className="mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {coreStrengths.map((strength) => (
              <div key={strength} className="flex items-start gap-3 border-b border-line pb-5">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-blueprint" />
                <span className="text-sm text-body md:text-base">{strength}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Inside the workshop */}
      <section className="bg-surface py-24">
        <Container>
          <span className="eyebrow text-blueprint">Inside the workshop</span>
          <h2 className="font-display balance mt-3 max-w-xl text-3xl font-extrabold text-ink md:text-4xl">
            Our U-PVC &amp; aluminium manufacturing setup
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workshop.map((item) => (
              <div key={item.title} className="group relative h-56 overflow-hidden bg-paper">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-ink/85 px-3 py-2">
                  <p className="text-xs font-medium text-white">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container className="flex flex-wrap items-center justify-between gap-6 border border-line p-10">
          <h2 className="font-display balance max-w-lg text-2xl font-extrabold text-ink md:text-3xl">
            See the work, or talk to us directly.
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button href="/gallery" variant="outline">
              See the work
            </Button>
            <Button href="/contact" variant="solid">
              Talk to us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
