"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Contact() {
    return (
        <section id="contact" className="py-24 relative bg-background">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 pointer-events-none" />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    <div>
                        <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">Get in Touch</h2>
                        <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                            Ready to transform your business?
                        </h3>
                        <p className="text-lg text-muted-foreground mb-10 max-w-md">
                            Contact us today to schedule a consultation with our senior strategy team. We're ready to solve your most complex challenges.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-foreground mb-1">Email Us</h4>
                                    <p className="text-muted-foreground">hello@nexcorp.business</p>
                                    <p className="text-muted-foreground">support@nexcorp.business</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-foreground mb-1">Call Us</h4>
                                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                                    <p className="text-muted-foreground">Mon-Fri, 9am-6pm EST</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-foreground mb-1">Visit Us</h4>
                                    <p className="text-muted-foreground">100 Innovation Drive</p>
                                    <p className="text-muted-foreground">San Francisco, CA 94105</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 md:p-10 rounded-3xl border border-white/10"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                                    <input id="name" type="text" className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                                    <input id="email" type="email" className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="john@company.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium text-foreground">Company</label>
                                <input id="company" type="text" className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Company Name Ltd." />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                                <textarea id="message" rows={5} className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Tell us about your project..." />
                            </div>

                            <Button size="lg" className="w-full text-lg h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 border-0 shadow-lg shadow-blue-900/20">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
