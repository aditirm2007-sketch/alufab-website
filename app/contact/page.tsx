import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { PhoneIcon, MailIcon, PinIcon, InstagramIcon } from "@/components/Icons";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us | Alufab Facade Solutions",
  description: "Get in touch with Alufab Facade Solutions, Bengaluru — call, email, or send us your project details.",
};

const mapQuery = encodeURIComponent(
  "Aneppa Tower, Akshaya Nagar, Kowdenehalli Village, Ramamurthy Nagar Post, Bengaluru 560016"
);

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Let's talk about your facade"
        description="Reach out directly, or send your project details below — we typically respond within one business day."
      />

      <section className="py-20">
        <Container className="grid gap-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-ink">Send an enquiry</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-display text-2xl font-extrabold text-ink">Direct details</h2>
              <div className="mt-6 flex flex-col gap-4 text-sm text-body">
                <a href={contact.phoneHref} className="flex items-center gap-3 hover:text-blueprint">
                  <PhoneIcon className="h-5 w-5 text-blueprint" />
                  +91 {contact.phone}
                </a>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-blueprint">
                  <MailIcon className="h-5 w-5 text-blueprint" />
                  {contact.email}
                </a>
                <a
                  href={contact.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-blueprint"
                >
                  <InstagramIcon className="h-5 w-5 text-blueprint" />
                  {contact.instagram}
                </a>
                <div className="flex items-start gap-3">
                  <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-blueprint" />
                  <span>{contact.addressLines.join(" ")}</span>
                </div>
              </div>
            </div>

            <div className="h-72 w-full overflow-hidden border border-line">
              <iframe
                title="Alufab Facade Solutions location"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
