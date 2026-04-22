"use client";

import { useInView } from '../hooks/useInView';
import { FaClock } from 'react-icons/fa';

const HeroSection = () => {
    const { ref, isInView } = useInView({ threshold: 0.1 });

    const startYear = 1998;
    const currentYear = new Date().getFullYear();
    const experienceYears = currentYear - startYear;

    return (
        <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-white z-0"></div>

            <div className={`relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight mx-4 sm:mx-10 my-6">
                    Tampil Percaya Diri dengan baju yang <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Anda inginkan.</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto px-3">
                    Mencari jasa jahit berkualitas dengan harga terjangkau? <span className='font-bold text-purple-800'>Rumah Busana Annur</span> siap membantu mewujudkan pakaian impian anda.
                </p>

                <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 sm:px-5 py-2 rounded-full text-sm font-semibold mb-8 shadow-md">
                    <FaClock className="mr-2" />
                    <span className="font-bold text-purple-600">{experienceYears}</span>
                    <span className="ml-1">Tahun Pengalaman Menjahit</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4">
                    <a href="#contact" className="w-full sm:w-auto text-center bg-purple-600 text-white font-semibold py-4 px-10 rounded-full shadow-xl hover:bg-purple-700 transition-all duration-300 transform hover:scale-105">
                        Mulai Konsultasi Gratis
                    </a>
                    <a href="#why-choose-us" className="w-full sm:w-auto text-center border-2 border-purple-600 text-purple-600 font-semibold py-4 px-10 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300">
                        Lihat Layanan Kami
                    </a>
                </div>
            </div>

            <img src="https://png.pngtree.com/thumb_back/fh260/background/20210910/pngtree-sewing-machine-working-and-making-clothes-image_840329.jpg" alt="Elegansi Jahitan" className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none z-0" />
        </section>
    );
};

export default HeroSection;