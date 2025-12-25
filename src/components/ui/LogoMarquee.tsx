"use client";

import { cn } from "@/lib/utils";

const logos = [
    { name: "TechCorp", className: "font-bold text-xl" },
    { name: "InnovateLabs", className: "font-semibold text-lg uppercase tracking-widest" },
    { name: "FutureScale", className: "font-bold text-xl italic" },
    { name: "NextGen", className: "font-black text-2xl tracking-tighter" },
    { name: "BlueSky", className: "font-light text-2xl" },
    { name: "Elevate", className: "font-bold text-lg uppercase" },
    { name: "Starlight", className: "font-serif text-xl italic" },
    { name: "Nexus", className: "font-mono text-lg font-bold" },
];

export function LogoMarquee({ className }: { className?: string }) {
    return (
        <div className={cn("w-full overflow-hidden mask-gradient-x select-none pointer-events-none", className)}>
            <div className="flex gap-16 animate-marquee w-max">
                {[...logos, ...logos, ...logos].map((logo, idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-center text-white/20 hover:text-white/40 transition-colors"
                    >
                        <span className={logo.className}>{logo.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Ensure mask-gradient-x and animate-marquee are defined in globals.css or tailwind config. 
// If not, we can use inline styles or add them to the component directly, but sticking to Tailwind utility classes is cleaner if configured.
// Since I can't easily edit tailwind.config right now without risking restart issues, I will add the keyframes to globals.css
