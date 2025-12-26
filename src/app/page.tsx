import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Insights } from "@/components/sections/Insights";
import { Careers } from "@/components/sections/Careers";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <CaseStudies />
      <Insights />
      <Careers />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
