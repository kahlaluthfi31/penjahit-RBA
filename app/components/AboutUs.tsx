"use client";

import { useInView } from '../hooks/useInView';
import { FaRuler, FaHeart, FaAward } from 'react-icons/fa';
import Image from 'next/image';

const AboutUs = () => {
    const { ref, isInView } = useInView({ threshold: 0.1 });

    const startYear = 1998;
    const currentYear = new Date().getFullYear();
    const experienceYears = currentYear - startYear;

    return (
        <section id="about" ref={ref} className={`py-24 bg-white transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Bagian Kiri: Gambar */}
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <Image
                                src="/images/foto-about.webp" // Ganti dengan foto workshop atau kamu sedang bekerja
                                alt="Tentang Rumah Penjahit"
                                width={700}
                                height={700}
                                className="rounded-3xl shadow-3xl object-cover"
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                            />
                            {/* Elemen dekoratif opsional */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full -z-10"></div>
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink-200 rounded-full -z-10"></div>
                        </div>
                    </div>

                    {/* Bagian Kanan: Konten Teks */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            Tentang RBA
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Sudah <span className="font-bold text-purple-600">{experienceYears}</span> tahun lebih kami melayani kebutuhan berbagai klien. Ada yang pesan seragam sekolah atau untuk acara keluarga, ada juga yang butuh busana muslim, kebaya, sampai pakaian harian. Kami berkomitmen untuk memberikan layanan terbaik dengan kualitas jahitan yang rapi dan presisi.
                        </p>

                        {/* Nilai-Nilai Utama */}
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center text-purple-600">
                                    <FaHeart />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-1">Presisi dalam Setiap Detail</h3>
                                    <p className="text-gray-600">Kami percaya bahwa keindahan terletak pada detail. Setiap ukuran dan jahitan dibuat dengan teliti untuk hasil yang sempurna.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center text-purple-600">
                                    <FaHeart />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-1">Dibuat dengan Passion</h3>
                                    <p className="text-gray-600">Kami tidak hanya bekerja, kami berkreasi. Passion kami adalah menciptakan pakaian yang tidak hanya pas, tetapi juga meningkatkan kepercayaan diri Anda.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center text-purple-600">
                                    <FaHeart />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-1">Kepuasan Adalah Prioritas</h3>
                                    <p className="text-gray-600">Kami berkomitmen untuk memberikan pengalaman terbaik, dari konsultasi awal hingga pakaian siap pakai ada di tangan Anda.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;