"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-grow flex items-center justify-center relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="text-center relative z-10 px-4">
          <h1 className="text-9xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Page Not Found</h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto mb-10">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="premium" size="lg">
                Back to Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
