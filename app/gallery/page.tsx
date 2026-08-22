import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { ClientLogos } from "@/components/ClientLogos";
import { GalleryGrid } from "@/components/GalleryGrid";
import { projectCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery | Alufab Facade Solutions",
  description:
    "Curtain wall, spider glazing, skylights, MS fabrication and recent facade projects delivered by Alufab across Bengaluru.",
};

export default async function GalleryPage(props: PageProps<"/gallery">) {
  const params = await props.searchParams;
  const requested = Array.isArray(params.category) ? params.category[0] : params.category;
  const initialCategory = projectCategories.find((c) => c === requested);

  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="We don't tell you how good we are"
        description="We just demonstrate them. Browse completed work by category, or see everything at once."
      />

      <section className="py-20">
        <Container>
          <GalleryGrid initialCategory={initialCategory} />
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20">
        <Container>
          <p className="eyebrow text-center text-blueprint">Delivered for</p>
          <div className="mt-8">
            <ClientLogos />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="flex flex-wrap items-center justify-between gap-6 border border-line p-10">
          <h2 className="font-display balance max-w-lg text-2xl font-extrabold text-ink md:text-3xl">
            Have a facade project on the drawing board?
          </h2>
          <Button href="/contact" variant="solid">
            Start your project
          </Button>
        </Container>
      </section>
    </>
  );
}
