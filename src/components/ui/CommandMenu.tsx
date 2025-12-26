"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { Search, FileText, Phone, Zap, Laptop, ArrowRight } from "lucide-react";

export function CommandMenu() {
    const router = useRouter();
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false);
        command();
    }, []);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[99999] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-[20vh] px-4">
            <div
                className="w-full max-w-lg bg-background border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <Command label="Global Command Menu" className="w-full">
                    <div className="flex items-center border-b border-white/10 px-4">
                        <Search className="w-5 h-5 text-muted-foreground mr-2" />
                        <Command.Input
                            autoFocus
                            placeholder="Type a command or search..."
                            className="flex h-14 w-full rounded-md bg-transparent py-3 text-lg outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
                        />
                    </div>

                    <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
                        <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                            No results found.
                        </Command.Empty>

                        <Command.Group heading="Navigation" className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                            <Command.Item
                                onSelect={() => runCommand(() => router.push("/"))}
                                className="flex items-center px-2 py-2 rounded-lg cursor-pointer text-sm text-foreground aria-selected:bg-primary/20 aria-selected:text-primary transition-colors"
                            >
                                <Zap className="mr-2 h-4 w-4" />
                                <span>Home</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => router.push("/#insights"))}
                                className="flex items-center px-2 py-2 rounded-lg cursor-pointer text-sm text-foreground aria-selected:bg-primary/20 aria-selected:text-primary transition-colors"
                            >
                                <FileText className="mr-2 h-4 w-4" />
                                <span>Insights</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => router.push("/#careers"))}
                                className="flex items-center px-2 py-2 rounded-lg cursor-pointer text-sm text-foreground aria-selected:bg-primary/20 aria-selected:text-primary transition-colors"
                            >
                                <ArrowRight className="mr-2 h-4 w-4" />
                                <span>Careers</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => router.push("/contact"))}
                                className="flex items-center px-2 py-2 rounded-lg cursor-pointer text-sm text-foreground aria-selected:bg-primary/20 aria-selected:text-primary transition-colors"
                            >
                                <Phone className="mr-2 h-4 w-4" />
                                <span>Contact Us</span>
                            </Command.Item>
                        </Command.Group>


                        <Command.Group heading="Services" className="px-2 py-1.5 text-xs font-medium text-muted-foreground mt-2">
                            <Command.Item
                                onSelect={() => runCommand(() => router.push("/#services"))}
                                className="flex items-center px-2 py-2 rounded-lg cursor-pointer text-sm text-foreground aria-selected:bg-primary/20 aria-selected:text-primary transition-colors"
                            >
                                <Laptop className="mr-2 h-4 w-4" />
                                <span>Digital Transformation</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => router.push("/#case-studies"))}
                                className="flex items-center px-2 py-2 rounded-lg cursor-pointer text-sm text-foreground aria-selected:bg-primary/20 aria-selected:text-primary transition-colors"
                            >
                                <FileText className="mr-2 h-4 w-4" />
                                <span>Case Studies</span>
                            </Command.Item>
                        </Command.Group>

                        <div className="mt-4 px-4 py-2 border-t border-white/5 flex items-center justify-between text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-white/10 bg-muted/20 px-1.5 font-mono text-[10px] font-medium opacity-100">
                                    ESC
                                </kbd>
                                to close
                            </span>
                            <span className="opacity-50">NexCorp Enterprise OS v1.0</span>
                        </div>
                    </Command.List>
                </Command>

                {/* Backdrop click to close */}
                <div className="fixed inset-0 -z-10" onClick={() => setOpen(false)} />
            </div>
        </div>
    );
}
