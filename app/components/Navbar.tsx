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
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
                <a href="#hero" className="flex-shrink-0">
                    {/* 1. UBAH KONTAINER MENJADI PERSEGI */}
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                        <Image
                            src="/images/logo-rba.jpg"
                            alt="Rumah Penjahit An Nur"
                            fill
                            sizes="(max-width: 640px) 48px, 64px"
                            className="object-contain rounded-full"
                            priority
                        />
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="text-gray-700 hover:text-purple-600 transition-colors duration-300 text-sm xl:text-base">
                            {link.text}
                        </a>
                    ))}
                    <a href="#contact" className="bg-purple-600 text-white px-4 py-2 xl:px-6 rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 text-sm xl:text-base">
                        Konsultasi
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="lg:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="flex flex-col p-6 space-y-4">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="text-gray-700 hover:text-purple-600 text-lg" onClick={() => setIsMenuOpen(false)}>
                            {link.text}
                        </a>
                    ))}
                    <a href="#contact" className="bg-purple-600 text-white px-6 py-2 rounded-full text-center text-lg">
                        Konsultasi
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;