"use client";

import { useInView } from '../hooks/useInView';
import { FaCheck } from 'react-icons/fa';

const PricingTable = () => {
    const { ref, isInView } = useInView({ threshold: 0.1 });

    const plans = [
        {
            name: 'Jahit Satuan',
            price: 'Mulai dari 150K',
            description: 'Sempurna untuk kebutuhan pakaian personal atau acara spesial.',
            features: [
                'Konsultasi Desain',
                '1x Revisi',
                'Bahan Klien Sediakan',
                'Pengerjaan 7-14 Hari',
            ],
            cta: 'Pilih Paket',
            popular: false,
        },
        {
            name: 'Jahit Seragam',
            price: 'Mulai dari 120K/pcs',
            description: 'Solusi terbaik untuk kebutuhan seragam kantor, komunitas, atau keluarga.',
            features: [
                'Konsultasi Desain',
                '2x Revisi',
                'Bisa Bantu Cari Bahan',
                'Pengerjaan 14-21 Hari',
                'Minimal 10 pcs',
            ],
            cta: 'Pilih Paket',
            popular: true,
        },
        {
            name: 'Paket Lengkap',
            price: 'Sesuai Kesepakatan',
            description: 'Untuk proyek besar seperti koleksi butik atau kebutuhan khusus.',
            features: [
                'Konsultasi & Desain Premium',
                'Revisi Tidak Terbatas',
                'Sourcing Bahan Premium',
                'Timeline Disepakati',
                'Prioritas Pengerjaan',
            ],
            cta: 'Konsultasi Dulu',
            popular: false,
        },
    ];

    return (
        <section id="pricing" ref={ref} className={`py-24 bg-purple-50 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
                    Pilih Paket yang Tepat untuk Anda
                </h2>
                <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
                    Kami menawarkan berbagai paket fleksibel yang disesuaikan dengan kebutuhan dan anggaran Anda.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`bg-white p-8 rounded-2xl shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${plan.popular ? 'ring-2 ring-purple-600 scale-105' : ''}`}
                        >
                            {plan.popular && (
                                <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    Paling Populer
                                </span>
                            )}
                            <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-2">{plan.name}</h3>
                            <p className="text-4xl font-bold text-purple-600 mb-4">{plan.price}</p>
                            <p className="text-gray-600 mb-6">{plan.description}</p>
                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#contact"
                                className={`w-full block text-center font-bold py-3 px-6 rounded-full transition-all duration-300 ${plan.popular ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                            >
                                {plan.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingTable;