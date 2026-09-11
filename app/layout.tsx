import type { Metadata } from "next";
import { Montserrat, Public_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { contact } from "@/lib/data";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const siteUrl = "https://www.alufab.co.in";
const siteTitle = "Alufab Facade Solutions | Facade Glazing, U-PVC & Aluminium Fabrication";
const siteDescription =
  "Alufab Facade Solutions — Bengaluru-based facade and architectural specialists in curtain walls, structural glazing, ACP cladding, uPVC & aluminium doors/windows, and MS fabrication since 2015.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Alufab Facade Solutions",
  },
  description: siteDescription,
  keywords: [
    "facade contractor Bengaluru",
    "curtain wall Bengaluru",
    "structural glazing",
    "ACP cladding",
    "uPVC windows Bengaluru",
    "aluminium fabrication Bengaluru",
    "MS fabrication",
    "Alufab Facade Solutions",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Alufab Facade Solutions",
    title: siteTitle,
    description: siteDescription,
    locale: "en_IN",
    images: [{ url: "/images/brand/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/brand/logo.png"],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Alufab Facade Solutions",
  url: siteUrl,
  logo: `${siteUrl}/images/brand/logo.png`,
  image: `${siteUrl}/images/brand/logo.png`,
  telephone: contact.phoneHref.replace("tel:", ""),
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "1st Floor, Sy No-04, Aneppa Tower, Akshaya Nagar, Kowdenehalli Village",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560016",
    addressCountry: "IN",
  },
  areaServed: "Bengaluru",
  sameAs: [contact.instagramHref],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:30",
    closes: "18:30",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} ${publicSans.variable}`}>
      <body className="flex min-h-screen flex-col antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
