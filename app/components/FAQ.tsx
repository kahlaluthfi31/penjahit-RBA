"use client";

import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
    const { ref, isInView } = useInView({ threshold: 0.1 });
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: 'Berapa lama waktu pengerjaan untuk satu setelan pakaian?',
            answer: 'Untuk jahit satuan, waktu pengerjaan standar kami adalah 7-14 hari kerja, tergantung pada kompleksitas desain dan antrian. Kami akan memberikan estimasi yang lebih pasti saat konsultasi.',
        },
        {
            question: 'Apakah saya bisa menggunakan bahan sendiri?',
            answer: 'Tentu saja. Anda bisa menggunakan bahan sendiri. Kami akan membantu Anda mengecek kualitas dan kesesuaian bahan dengan desain yang diinginkan.',
        },
        {
            question: 'Bagaimana sistem pembayarannya?',
            answer: 'Kami menggunakan sistem DP (Down Payment) sebesar 50% dari total harga untuk memulai proyek. Pelunasan dilakukan setelah pakaian jadi dan sebelum pengiriman atau pengambilan.',
        },
        {
            question: 'Apakah ada garansi untuk hasil jahitan?',
            answer: 'Kami memberikan garansi untuk hasil jahitan yang tidak rapi atau ada kesalahan dari pihak kami. Anda bisa melakukan revisi sesuai dengan kesepakatan awal.',
        },
        {
            question: 'Bagaimana jika saya tidak memiliki desain yang jelas?',
            answer: 'Tidak masalah! Tim kami siap membantu Anda dalam membuat desain dari nol atau memberikan referensi sesuai dengan tren dan keinginan Anda.',
        },
    ];

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" ref={ref} className={`py-24 bg-white transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
                    Pertanyaan yang Sering Diajukan
                </h2>
                <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
                    Temukan jawaban untuk pertanyaan umum tentang layanan kami. Jika tidak menemukan yang Anda cari, jangan ragu untuk menghubungi kami.
                </p>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                            <button
                                suppressHydrationWarning
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-300"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={activeIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <span className="font-semibold text-gray-800">{faq.question}</span>
                                <span className="text-purple-600">
                                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                </span>
                            </button>
                            <div
                                id={`faq-answer-${index}`}
                                className={`px-6 overflow-hidden transition-all duration-500 ${activeIndex === index ? 'py-4 max-h-96' : 'max-h-0'}`}
                            >
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;