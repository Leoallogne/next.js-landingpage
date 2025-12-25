"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { caseStudies } from "@/lib/case-studies";
import { Reveal } from "@/components/ui/Reveal";

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const study = caseStudies.find((s) => s.slug === resolvedParams.slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-end pb-20 overflow-hidden">
        {/* Abstract Background based on study color */}
        <div className={`absolute inset-0 ${study.image} opacity-20`} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link href="/#case-studies" className="inline-flex items-center gap-2 text-muted-foreground hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <Reveal>
            <span className="block text-primary font-bold tracking-wide uppercase text-sm mb-4">{study.category}</span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight max-w-4xl">
              {study.title}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              {study.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Sidebar Data */}
            <div className="lg:col-span-4 space-y-8">
              <Reveal delay={0.3}>
                <div className="glass-card p-8 rounded-2xl border border-white/10 sticky top-24">
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <h4 className="text-sm font-bold text-muted-foreground uppercase mb-2">Client</h4>
                      <p className="text-xl font-medium text-white">{study.client}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-muted-foreground uppercase mb-2">Year</h4>
                      <div className="flex items-center gap-2 text-xl font-medium text-white">
                        <Calendar className="w-5 h-5 text-primary" />
                        {study.year}
                      </div>
                    </div>
                    <div className="pt-6 border-t border-white/10">
                      <h4 className="text-sm font-bold text-muted-foreground uppercase mb-4">Key Results</h4>
                      <ul className="space-y-3">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-3 text-white">
                            <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 space-y-16">
              <Reveal delay={0.3}>
                <div className="prose prose-invert prose-lg max-w-none">
                  <h3 className="text-3xl font-bold text-white mb-6">The Challenge</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {study.challenge}
                  </p>

                  <div className="my-12 h-64 md:h-96 w-full rounded-2xl bg-gradient-to-r from-gray-800 to-gray-900 border border-white/5 flex items-center justify-center text-muted-foreground">
                    {/* Placeholder for project screenshot/diagram */}
                    [Project Visual Placeholder]
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-6">Our Solution</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {study.solution}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                    {study.content}
                  </p>
                </div>
              </Reveal>

              {/* Next Project CTA */}
              <Reveal delay={0.5}>
                <div className="mt-20 border-t border-white/10 pt-10">
                  <Button variant="outline" className="group">
                    Next Case Study <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
