"use client";

import { useInView } from '../hooks/useInView';
import { FaCut, FaGem, FaPalette, FaTag } from 'react-icons/fa';

const WhyChooseUs = () => {
    const { ref, isInView } = useInView({ threshold: 0.1 });

    const benefits = [
        { icon: FaCut, title: 'Ketelitian Tinggi', desc: 'Setiap jahitan adalah karya seni. Presisi dan kerapian adalah prioritas utama kami.' },
        { icon: FaGem, title: 'Kualitas Premium', desc: 'Kami hanya menggunakan bahan-bahan terbaik untuk menjamin ketahanan dan kenyamanan.' },
        { icon: FaPalette, title: 'Desain Personal', desc: 'Wujudkan desain unik Anda atau konsultasikan gaya terkini dengan tim ahli kami.' },
        { icon: FaTag, title: 'Harga Transparan', desc: 'Dapatkan kualitas premium dengan harga yang adil dan transparan, tanpa biaya tersembunyi.' },
    ];

    return (
        <section id="why-choose-us" ref={ref} className="py-24 bg-purple-50">
            <div className="container mx-auto px-6">
                <h2 className={`text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 transition-all duration-1000 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    Mengapa Memilih Rumah Busana Annur ?
                </h2>
                <p className={`text-center text-gray-600 mb-16 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    Kami berkomitmen untuk memberikan lebih dari sekadar pakaian, melainkan pengalaman dan kepercayaan diri.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-white p-8 rounded-2xl shadow-lg text-center transition-all duration-700 delay-${index * 100} transform hover:-translate-y-2 hover:shadow-2xl ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        >
                            <div className="text-5xl text-purple-600 mb-4 flex justify-center">
                                <item.icon />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;