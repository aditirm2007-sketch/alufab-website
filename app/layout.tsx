import type { Metadata } from "next";
import { Montserrat, Public_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alufab Facade Solutions | Facade Glazing, U-PVC & Aluminium Fabrication",
  description:
    "Alufab Facade Solutions — Bengaluru-based facade and architectural specialists in curtain walls, structural glazing, ACP cladding, uPVC & aluminium doors/windows, and MS fabrication since 2015.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} ${publicSans.variable}`}>
      <body className="flex min-h-screen flex-col antialiased" suppressHydrationWarning>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
