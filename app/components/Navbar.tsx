"use client";

import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#hero', text: 'Beranda' },
        { href: '#about', text: 'Tentang' },
        { href: '#why-choose-us', text: 'Layanan' },
        { href: '#pricing', text: 'Harga' },
        { href: '#gallery', text: 'Galeri' },
        { href: '#testimonials', text: 'Testimoni' },
        { href: '#faq', text: 'FAQ' },
        { href: '#contact', text: 'Kontak' },
    ];

    return (
        <nav className="fixed inset-x-0 top-0 z-50 px-3 sm:px-6 pt-3">
            <div className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 sm:px-6 py-3 transition-all duration-500 ${isScrolled
                    ? 'border-purple-200/80 bg-white/85 shadow-[0_12px_40px_-18px_rgba(124,58,237,0.55)] backdrop-blur-xl'
                    : 'border-white/40 bg-white/70 backdrop-blur-md'
                }`}>
                <a href="#hero" className="flex items-center gap-3">
                    <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden ring-2 ring-purple-100">
                        <Image
                            src="/images/logo-rba.jpg"
                            alt="Rumah Penjahit An Nur"
                            fill
                            sizes="(max-width: 640px) 44px, 48px"
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="hidden sm:block">
                        <p className="text-sm font-semibold text-purple-700">Rumah Busana Annur</p>
                        <p className="text-xs text-gray-500">Jahit Rapi • Elegan • Nyaman</p>
                    </div>
                </a>

                <div className="hidden lg:flex items-center gap-6 xl:gap-7">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="text-sm xl:text-[15px] font-medium text-gray-700 hover:text-purple-700 transition-colors duration-300">
                            {link.text}
                        </a>
                    ))}
                    <a href="#contact" className="rounded-full bg-gradient-to-r from-purple-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-300/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                        Konsultasi Gratis
                    </a>
                </div>

                <button
                    className="lg:hidden inline-flex items-center justify-center rounded-xl border border-purple-200 bg-white p-2 text-purple-700"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden mx-auto mt-2 max-w-7xl rounded-2xl border border-purple-200/70 bg-white/95 p-4 shadow-lg shadow-purple-100/70 backdrop-blur-xl">
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="rounded-xl px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.text}
                            </a>
                        ))}
                        <a href="#contact" className="mt-1 rounded-xl bg-gradient-to-r from-purple-500 to-violet-600 px-4 py-3 text-center text-white font-semibold" onClick={() => setIsMenuOpen(false)}>
                            Konsultasi Gratis
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;