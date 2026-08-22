import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ClientLogos } from "@/components/ClientLogos";
import { iconMap, ArrowIcon } from "@/components/Icons";
import { products, process, strengths, stats, projects } from "@/lib/data";

const featuredProjects = projects.filter((p) => p.featured);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[520px] w-full overflow-hidden sm:h-[580px] lg:h-[640px]">
        <Image
          src="/images/brand/hero-building-v2.jpg"
          alt="Glass curtain wall facade against a soft sky, with a light architectural skyline motif"
          fill
          priority
          className="object-cover object-right-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/75 to-transparent sm:from-paper sm:via-paper/60 sm:to-transparent" />
        <Container className="absolute inset-0 flex items-center">
          <div className="max-w-md md:max-w-xl">
            <span className="eyebrow inline-flex items-center gap-3 text-blueprint">
              <span className="h-px w-6 bg-blueprint" />
              Welcome to Alufab
            </span>
            <h1 className="font-display balance mt-4 text-4xl font-extrabold leading-[1.1] text-ink md:text-5xl">
              <span className="whitespace-nowrap">
                Building <span className="text-blueprint">Facades.</span>
              </span>
              <br />
              <span className="whitespace-nowrap">
                Building <span className="text-blueprint">Trust.</span>
              </span>
            </h1>
            <p className="mt-5 max-w-sm text-base text-body md:text-lg">
              We deliver high-performance facade solutions that blend aesthetics, durability and
              innovation.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/about" variant="solid">
                Our Services
              </Button>
              <Button href="/gallery" variant="outline">
                View Projects
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Stat bar */}
      <section className="border-b border-line bg-surface">
        <Container className="grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="font-display text-3xl font-extrabold text-ink md:text-4xl">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-steel">{s.label}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* What we do */}
      <section className="py-24">
        <Container>
          <div className="max-w-xl">
            <span className="eyebrow text-blueprint">What we do</span>
            <h2 className="font-display balance mt-3 text-3xl font-extrabold text-ink md:text-4xl">
              A complete range of façade &amp; architectural systems
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/gallery?category=${encodeURIComponent(p.category)}`}
                className="group flex flex-col border border-line bg-paper shadow-sm transition-shadow duration-300 hover:shadow-[0_18px_40px_-20px_rgba(14,29,77,0.35)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/5" />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-7">
                  <h3 className="font-display text-base font-bold text-ink">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-body">{p.description}</p>
                  <span className="mt-2 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-wide text-blueprint opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more <ArrowIcon className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-ink py-24 text-white">
        <Container>
          <div className="max-w-xl">
            <span className="eyebrow text-white/60">Our process</span>
            <h2 className="font-display balance mt-3 text-3xl font-extrabold md:text-4xl">
              From first sketch to final handover
            </h2>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step, i) => (
              <div key={step.step} className="relative">
                <p className="font-display text-4xl font-extrabold text-white/25">{step.step}</p>
                <h3 className="font-display mt-3 text-base font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-white/65">{step.description}</p>
                {i < process.length - 1 ? (
                  <ArrowIcon className="absolute -right-7 top-1 hidden h-5 w-5 text-white/25 lg:block" />
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured projects */}
      <section className="py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="eyebrow text-blueprint">Featured work</span>
              <h2 className="font-display balance mt-3 text-3xl font-extrabold text-ink md:text-4xl">
                Recent projects across Bengaluru
              </h2>
            </div>
            <Link
              href="/gallery"
              className="font-display flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-blueprint hover:text-ink"
            >
              View full portfolio <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2 md:h-[600px]">
            {featuredProjects.map((project, i) => (
              <Link
                key={project.title}
                href={`/gallery?category=${encodeURIComponent("Recent Projects")}`}
                className={`group relative block aspect-[4/5] overflow-hidden border border-line md:aspect-auto md:h-full ${
                  i === 0 ? "col-span-2 md:row-span-2" : i === 1 ? "md:col-span-2" : ""
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-transparent transition-opacity duration-300 group-hover:from-ink/90" />
                <span className="absolute left-4 top-4 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-white/80">
                  Featured
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className={`font-semibold leading-snug text-white ${i === 0 ? "text-base md:text-lg" : "text-sm"}`}>
                    {project.title}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View project <ArrowIcon className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Trusted by */}
      <section className="border-y border-line bg-surface py-20">
        <Container>
          <p className="eyebrow text-center text-blueprint">Trusted by</p>
          <h2 className="font-display balance mt-3 text-center text-2xl font-extrabold text-ink md:text-3xl">
            Architects, builders and developers who build with us
          </h2>
          <div className="mt-10">
            <ClientLogos />
          </div>
        </Container>
      </section>

      {/* Why Alufab */}
      <section className="py-24">
        <Container>
          <div className="max-w-xl">
            <span className="eyebrow text-blueprint">Why Alufab</span>
            <h2 className="font-display balance mt-3 text-3xl font-extrabold text-ink md:text-4xl">
              Precision, strength and elegance — in every joint
            </h2>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {strengths.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <div key={s.title}>
                  <span className="flex h-14 w-14 items-center justify-center border border-line text-blueprint">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display mt-4 text-base font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-body">{s.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA band */}
      <section className="bg-blueprint py-16 text-white">
        <Container className="flex flex-wrap items-center justify-between gap-6">
          <h2 className="font-display balance max-w-lg text-2xl font-extrabold md:text-3xl">
            Have a project in mind? Let&rsquo;s talk.
          </h2>
          <Button href="/contact" variant="ghost" className="border-white text-white hover:bg-white hover:text-blueprint">
            Get in Touch
          </Button>
        </Container>
      </section>
    </>
  );
}
