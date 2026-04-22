"use client";

import { useInView } from '../hooks/useInView';
import { FaHeart } from 'react-icons/fa';
import Image from 'next/image';

const AboutUs = () => {
    const { ref, isInView } = useInView({ threshold: 0.1 });

    const experienceYears = 28;

    return (
        <section id="about" ref={ref} className={`py-24 bg-[linear-gradient(180deg,#ffffff_0%,#fcf9ff_100%)] transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <div className="relative rounded-[2rem] border border-purple-100 bg-white p-3 shadow-[0_20px_60px_-35px_rgba(124,58,237,0.45)]">
                            <Image
                                src="/images/foto-about.png"
                                alt="Tentang Rumah Penjahit"
                                width={700}
                                height={700}
                                className="rounded-[1.5rem] object-cover"
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                            />
                            <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-purple-200/60 rounded-full -z-10 blur-sm" />
                            <div className="absolute -top-8 -left-8 w-24 h-24 bg-fuchsia-200/70 rounded-full -z-10 blur-sm" />
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <span className="inline-flex rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-sm font-semibold text-purple-700 mb-4">
                            Tentang Kami
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Tentang RBA
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Sudah <span className="font-bold text-purple-600">{experienceYears}</span> tahun lebih kami melayani kebutuhan berbagai klien. Ada yang pesan seragam sekolah atau untuk acara keluarga, ada juga yang butuh busana muslim, kebaya, sampai pakaian harian. Kami berkomitmen untuk memberikan layanan terbaik dengan kualitas jahitan yang rapi dan presisi.
                        </p>

                        <div className="space-y-5">
                            <div className="flex items-start space-x-4">
                                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                    <FaHeart />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Presisi dalam Setiap Detail</h3>
                                    <p className="text-gray-600">Kami percaya bahwa keindahan terletak pada detail. Setiap ukuran dan jahitan dibuat dengan teliti untuk hasil yang sempurna.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                    <FaHeart />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Dibuat dengan Passion</h3>
                                    <p className="text-gray-600">Kami tidak hanya bekerja, kami berkreasi. Passion kami adalah menciptakan pakaian yang tidak hanya pas, tetapi juga meningkatkan kepercayaan diri Anda.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                    <FaHeart />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Kepuasan Adalah Prioritas</h3>
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