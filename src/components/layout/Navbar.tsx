"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Solutions", href: "#solutions" },
    { name: "About", href: "#about" },
    { name: "Case Studies", href: "#case-studies" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [mobileMenuOpen]);

    const isActive = (path: string) => pathname === path || pathname === path + "/";

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
                    scrolled || mobileMenuOpen
                        ? "bg-background/80 backdrop-blur-md border-white/10 py-3"
                        : "bg-transparent py-5"
                )}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group z-50 relative">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">
                            N
                        </div>
                        <span className="font-heading font-bold text-xl tracking-tight text-foreground">
                            Nex<span className="text-primary">Corp</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors relative",
                                        pathname === "/" && link.href.startsWith("#") ? "text-muted-foreground hover:text-primary" : // Hash links on home
                                            isActive(link.href) ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
                                    )}
                                >
                                    {link.name}
                                    {(isActive(link.href) && !link.href.startsWith("#")) && (
                                        <motion.span layoutId="navbar-active" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                                    )}
                                </Link>
                            ))}
                        </div>
                        {/* Desktop CTA */}
                        <div className="hidden md:block">
                            <Link href="/contact">
                                <Button variant="premium" className="rounded-full px-6 shadow-blue-500/20">
                                    Get Proposal
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-foreground p-2 z-50 relative"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Sidebar / Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[300px] bg-background border-l border-white/10 z-50 md:hidden flex flex-col shadow-2xl"
                        >
                            <div className="p-6 pt-24 flex flex-col gap-2 h-full">
                                <div className="flex flex-col gap-1 mb-8">
                                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Menu</h3>
                                </div>

                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={cn(
                                            "text-lg font-medium py-3 border-b border-white/5 transition-colors flex items-center justify-between group",
                                            isActive(link.href) ? "text-primary" : "text-foreground hover:text-primary"
                                        )}
                                    >
                                        {link.name}
                                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                                    </Link>
                                ))}

                                <div className="mt-auto pb-8">
                                    <div className="glass-card p-4 rounded-xl mb-4 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10">
                                        <h4 className="font-bold text-white mb-1">Ready to start?</h4>
                                        <p className="text-xs text-muted-foreground mb-3">Get a free consultation for your next big project.</p>
                                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                                            <Button variant="premium" className="w-full">
                                                Get in Touch
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
