import React, { type ReactNode, useEffect } from 'react';
import Lenis from 'lenis';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const lenisRef = React.useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        if (lenisRef.current) {
            lenisRef.current.scrollTo(href);
        }
    };

    const navLinks = [
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <div className="min-h-screen bg-canvas text-ink font-sans selection:bg-marker selection:text-primary-foreground transition-colors duration-300">
            {/* Pill Navigation */}
            <header className="pointer-events-none fixed inset-x-0 top-6 z-50 flex justify-center px-4">
                <nav
                    aria-label="Primary"
                    className="nav-blur pointer-events-auto flex items-center gap-1 rounded-full border border-border/60 px-2 py-2 shadow-[0_8px_30px_-12px_rgb(0_0_0_/0.18)]"
                >
                    <a
                        href="#"
                        onClick={(e) => handleNavClick(e, 'top')}
                        className="group flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium text-ink transition hover:bg-accent"
                    >
                        <span className="text-ink-soft">/Alzi</span>
                        <span className="text-ink-soft/60">›</span>
                        <span>Portfolio</span>
                    </a>
                    <span className="mx-1 hidden h-5 w-px bg-border sm:block" />
                    <div className="hidden items-center gap-0.5 sm:flex">
                        {navLinks.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={(e) => handleNavClick(e, l.href)}
                                className="rounded-full px-3 py-1.5 text-sm font-medium text-ink-soft transition hover:bg-accent hover:text-ink"
                            >
                                {l.name}
                            </a>
                        ))}
                    </div>
                    
                    <div className="mx-1 sm:mx-2 flex items-center">
                        <ThemeToggle />
                    </div>

                    <a
                        href="/resume.pdf"
                        download
                        className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                    >
                        Resume
                    </a>
                </nav>
            </header>

            <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
                {children}
            </main>

            <footer className="mx-auto max-w-6xl border-t border-border px-6 py-12">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-marker" />
                        <p className="text-sm font-medium text-ink-soft">
                            Built with code & AI · 2025
                        </p>
                    </div>
                    <p className="text-sm text-ink-soft">
                        &copy; {new Date().getFullYear()} Alzi. Inspired by Akhil Krishnan.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
