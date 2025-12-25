import Link from "next/link";
import { Twitter, Linkedin, Facebook, Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">
                                N
                            </div>
                            <span className="font-heading font-bold text-xl tracking-tight text-foreground">
                                Nex<span className="text-primary">Corp</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Empowering enterprises with cutting-edge technology solutions. We build the future of digital business.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-heading font-semibold text-foreground mb-6">Solutions</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">Enterprise AI</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Cloud Infrastructure</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Cybersecurity</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Data Analytics</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-semibold text-foreground mb-6">Company</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Press Kit</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-semibold text-foreground mb-6">Legal</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} NexCorp Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-foreground">Support</Link>
                        <Link href="#" className="hover:text-foreground">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
