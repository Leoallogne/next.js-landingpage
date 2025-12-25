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
  title: "NexCorp | Premium Corporate Solutions",
  description: "Leading the future of enterprise technology with innovative solutions. We help businesses scale and succeed in the digital age.",
  keywords: ["corporate", "enterprise", "technology", "consulting", "premium", "software"],
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
