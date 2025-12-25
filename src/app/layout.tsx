import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { BackgroundEffects } from "@/components/ui/BackgroundEffects";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { CommandMenu } from "@/components/ui/CommandMenu";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexCorp | Enterprise Digital Transformation & Consulting",
  description: "Accelerate your business growth with NexCorp. We reduce operational costs by up to 30% and speed up deployment through premium digital infrastructure consulting.",
  keywords: ["enterprise", "technololgy consulting", "digital transformation", "cost reduction", "software architecture", "scalability"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexcorp.demo",
    siteName: "NexCorp Enterprise",
    title: "NexCorp | Enterprise Digital Transformation",
    description: "Accelerate your business growth. Reduce operational costs by up to 30% with data-driven infrastructure.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NexCorp Enterprise Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexCorp | Enterprise Digital Transformation",
    description: "Accelerate your business growth. Reduce operational costs by up to 30% with data-driven infrastructure.",
    creator: "@nexcorp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NexCorp",
    "url": "https://nexcorp.demo",
    "logo": "https://nexcorp.demo/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "Sales"
    },
    "sameAs": [
      "https://linkedin.com/company/nexcorp",
      "https://twitter.com/nexcorp"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased font-sans bg-background text-foreground selection:bg-primary/20 selection:text-primary`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <CustomCursor />
          <BackgroundEffects />
          <CommandMenu />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
