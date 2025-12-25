"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageSquare, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col relative overflow-x-hidden">
            <Navbar />

            {/* Dedicate Page Spacer */}
            <div className="h-20" />

            <section className="flex-grow pt-12 pb-24 relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                        {/* Left Column: Info */}
                        <div className="pt-8">
                            <Reveal>
                                <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                                    Let's Start a <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                        Conversation
                                    </span>
                                </h1>
                            </Reveal>

                            <Reveal delay={0.3}>
                                <p className="text-lg text-muted-foreground mb-12 max-w-lg leading-relaxed">
                                    We're here to help you navigate the future of technology. Reach out to our team of experts for a free consultation.
                                </p>
                            </Reveal>

                            <div className="space-y-8">
                                {[
                                    { icon: Mail, title: "Email Us", content: "hello@nexcorp.business", sub: "Response within 2 hours" },
                                    { icon: Phone, title: "Call Us", content: "+1 (555) 123-4567", sub: "Mon-Fri, 9am - 6pm EST" },
                                    { icon: MapPin, title: "Visit HQ", content: "100 Innovation Drive", sub: "San Francisco, CA 94105" }
                                ].map((item, i) => (
                                    <Reveal key={i} delay={0.4 + (i * 0.1)}>
                                        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-foreground mb-1">{item.title}</h4>
                                                <p className="text-white font-medium">{item.content}</p>
                                                <p className="text-sm text-muted-foreground">{item.sub}</p>
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>

                            {/* FAQ Teaser */}
                            <Reveal delay={0.8} className="mt-12">
                                <div className="glass-card p-6 rounded-xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                                    <div className="flex items-center gap-3 mb-2">
                                        <MessageSquare className="w-5 h-5 text-blue-400" />
                                        <h5 className="font-bold text-white">Looking for Support?</h5>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">Check our documentation or visit the support portal for existing clients.</p>
                                    <a href="#" className="text-sm text-primary hover:underline">Visit Support Center &rarr;</a>
                                </div>
                            </Reveal>
                        </div>

                        {/* Right Column: Interactive Form */}
                        <div className="relative">
                            {/* Decorative background behind form */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-50" />

                            <Reveal delay={0.4} className="w-full">
                                <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 relative bg-background/50 backdrop-blur-2xl">
                                    <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

                                    <form className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-muted-foreground">First Name</label>
                                                <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all hover:border-white/20" placeholder="John" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-muted-foreground">Last Name</label>
                                                <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all hover:border-white/20" placeholder="Doe" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-muted-foreground">Work Email</label>
                                            <input type="email" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all hover:border-white/20" placeholder="john@company.com" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-muted-foreground">Project Interest</label>
                                            <select className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all hover:border-white/20">
                                                <option>Cloud Infrastructure</option>
                                                <option>AI & Machine Learning</option>
                                                <option>Web & Mobile Development</option>
                                                <option>Cybersecurity Audit</option>
                                                <option>Other</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-muted-foreground">Message</label>
                                            <textarea rows={4} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none hover:border-white/20" placeholder="Tell us about your project..." />
                                        </div>

                                        <Button size="lg" className="w-full text-lg h-12 bg-white text-black hover:bg-gray-200 mt-2">
                                            Send Inquiry
                                        </Button>

                                        <p className="text-xs text-center text-muted-foreground mt-4">
                                            By sending this form, you agree to our <a href="#" className="underline hover:text-white">Privacy Policy</a>.
                                        </p>
                                    </form>
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
