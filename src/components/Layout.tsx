import React, { type ReactNode, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import ScrollProgress from './ScrollProgress';
import CustomCursor from './CustomCursor';
import Lenis from 'lenis';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        setIsMenuOpen(false);
    };

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Education", href: "#education" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 cursor-none">
            <CustomCursor />
            <ScrollProgress />
            <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-xl font-bold tracking-tighter z-50 relative"
                    >
                        A.
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex gap-6 text-sm font-medium text-neutral-400">
                            {navLinks.map(link => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="hover:text-white transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full" />
                                </a>
                            ))}
                        </div>

                        <a
                            href="/resume.pdf"
                            download
                            className="flex items-center gap-2 px-4 py-2 bg-white text-neutral-950 text-sm font-bold rounded-full hover:bg-neutral-200 transition-colors"
                        >
                            <Download size={16} />
                            <span className="hidden sm:inline">Resume</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden z-50 p-2 text-neutral-400 hover:text-white transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Mobile Navigation Overlay */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="fixed inset-0 bg-neutral-950 z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                            >
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="text-2xl font-bold text-neutral-400 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="flex items-center gap-2 px-6 py-3 bg-white text-neutral-950 text-lg font-bold rounded-full hover:bg-neutral-200 transition-colors mt-4"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Download size={20} />
                                    Resume
                                </a>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
            <main className="max-w-6xl mx-auto px-6 pt-24 pb-20">
                {children}
            </main>
            <footer className="border-t border-neutral-800 py-8 text-center text-neutral-500 text-sm">
                &copy; {new Date().getFullYear()} Alzi. All rights reserved.
            </footer>
        </div>
    );
};

export default Layout;
