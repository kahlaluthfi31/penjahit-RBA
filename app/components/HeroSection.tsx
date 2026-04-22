"use client";

import { useInView } from '../hooks/useInView';
import { FaClock } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';

const HeroSection = () => {
    const { ref, isInView } = useInView({ threshold: 0.1 });

    const experienceYears = 28;

    return (
        <section id="hero" ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-24 sm:pt-28">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(196,181,253,0.5),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(233,213,255,0.38),transparent_30%),linear-gradient(180deg,#ffffff_0%,#fbf7ff_100%)]" />
            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-purple-200/35 blur-3xl" />
            <div className="absolute -top-16 -right-20 h-72 w-72 rounded-full bg-fuchsia-200/30 blur-3xl" />

            <div className={`relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <div className="mx-auto max-w-4xl text-center">
                    {/* <span className="inline-flex items-center rounded-full border border-purple-200 bg-white/80 px-4 py-2 text-sm font-medium text-purple-700 shadow-sm">
                        <FaStar className="mr-2 text-amber-400" />
                        Penjahit Profesional untuk Busana Harian & Acara Spesial
                    </span> */}

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900">
                        <span className="block sm:inline whitespace-nowrap">Tampil Percaya Diri Dengan</span>
                        <br className="hidden sm:block" /> {/* Baris baru hanya di layar besar jika ingin dipisah */}
                        <span className="inline-block mr-2 mt-4">Baju Yang</span>
                        <span className="inline-block bg-gradient-to-r from-purple-600 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent pb-2">
                            Anda Inginkan
                        </span>
                    </h1>

                    <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Di <span className="font-semibold text-purple-700">Rumah Busana Annur</span>, setiap detail pakaian dibuat rapi,
                        nyaman, dan sesuai permintaan Anda. Mulai dari seragam, kebaya, hingga busana harian.
                    </p>

                    <div className="mt-8 inline-flex items-center rounded-full border border-purple-200 bg-white px-5 py-2.5 text-sm font-semibold text-purple-700 shadow-lg shadow-purple-100/80">
                        <FaClock className="mr-2" />
                        {experienceYears}+ Tahun Pengalaman Menjahit
                    </div>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 px-2">
                        <a href="#contact" className="w-full sm:w-auto rounded-full bg-gradient-to-r from-purple-500 to-violet-600 px-9 py-4 text-center font-semibold text-white shadow-xl shadow-purple-300/55 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl">
                            Mulai Konsultasi Gratis
                        </a>
                        <a href="#why-choose-us" className="w-full sm:w-auto rounded-full border border-purple-300 bg-white px-9 py-4 text-center font-semibold text-purple-700 transition-all duration-300 hover:bg-purple-50">
                            Lihat Layanan Kami
                        </a>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-sm text-gray-500">
                        {/* Item 1 */}
                        <span className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-scissors" viewBox="0 0 16 16">
                                <path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
                            </svg>
                            Jahitan rapi & presisi
                        </span>

                        {/* Item 2 */}
                        <span className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-right-text" viewBox="0 0 16 16">
                                <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                            </svg>
                            Konsultasi desain gratis
                        </span>

                        {/* Item 3 */}
                        <span className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-history" viewBox="0 0 16 16">
                                <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
                                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
                                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
                            </svg>
                            Pengerjaan tepat waktu
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;