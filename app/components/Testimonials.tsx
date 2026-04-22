"use client";

import { useInView } from '../hooks/useInView';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
    const { ref, isInView } = useInView({ threshold: 0.1 });

    const testimonials = [
        { name: 'Siti Nurhaliza', role: 'Pengusaha Butik', text: 'Hasil jahitannya sangat rapi dan pas di badan. Pelayanannya juga ramah dan sangat membantu!', rating: 5 },
        { name: 'Budi Santoso', role: 'Karyawan Swasta', text: 'Saya pesan seragam kantor, hasilnya di luar ekspektasi. Kualitas jahitan dan bahannya top. Recommended!', rating: 5 },
        { name: 'Andini Wijaya', role: 'Mahasiswa', text: 'Akhirnya nemu jahitan yang bisa bikin baju desain sendiri dengan hasil yang bagus dan harga terjangkau.', rating: 5 },
    ];

    return (
        <section id="testimonials" ref={ref} className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <h2 className={`text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    Apa yang Klien Kami Katakan
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-purple-50 p-8 rounded-2xl shadow-md relative transition-all duration-700 delay-${index * 100} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        >
                            <FaQuoteLeft className="text-purple-300 text-3xl absolute top-4 right-4" />
                            <p className="text-gray-700 italic mb-6 relative z-10">"{item.text}"</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                                    <p className="text-sm text-gray-500">{item.role}</p>
                                </div>
                                <div className="flex text-yellow-400">
                                    {[...Array(item.rating)].map((_, i) => <FaStar key={i} />)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;