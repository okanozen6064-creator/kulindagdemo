"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const navLinks = [
    { name: "Anasayfa", href: "#hero" },
    { name: "Konaklama", href: "#accommodation" },
    { name: "Menü", href: "#menu" },
    { name: "Galeri", href: "#gallery" },
    { name: "Ulaşım", href: "#transport" },
    { name: "İletişim", href: "#contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
                scrolled
                    ? "bg-cream-light/90 backdrop-blur-md shadow-sm py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-forest/20 group-hover:border-forest transition-colors">
                        <Image
                            src="/logo.jpg"
                            alt="Kulindağ Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className={clsx("font-serif text-2xl font-bold tracking-tight", scrolled ? "text-forest" : "text-forest")}>
                        Kulindağ
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-charcoal hover:text-sienna transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[1px] after:bg-sienna after:transition-all hover:after:w-full"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#reservation"
                        className="px-6 py-2.5 bg-forest text-cream rounded-full text-sm font-medium hover:bg-forest-light transition-all transform hover:scale-105 shadow-lg shadow-forest/20"
                    >
                        Rezervasyon Yap
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-forest"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-cream-light border-t border-forest/10 shadow-xl md:hidden p-4 flex flex-col gap-4"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-serif text-forest hover:text-sienna py-2 border-b border-forest/5 last:border-0"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#reservation"
                            className="w-full text-center py-3 bg-forest text-cream rounded-xl font-medium mt-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Rezervasyon Yap
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
