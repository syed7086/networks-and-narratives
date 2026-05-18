import type { Metadata } from "next";
import { EB_Garamond, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Syed | Portfolio",
  description:
    "Portfolio of a networking aspirant and CCNA candidate — systems infrastructure, labs, and technical projects.",
  openGraph: {
    title: "Syed | Networks & Narratives",
    description:
      "Junior networking portfolio — CCNA progress, lab projects, and technical stack.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${ebGaramond.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-surface text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}
