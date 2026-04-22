"use client";

import { useInView } from '../hooks/useInView';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import OrderForm from './OrderForm'; // <-- 1. Import komponen baru

const ContactUs = () => {
    const { ref, isInView } = useInView();
    // Nomor WhatsApp dan pesan sudah tidak perlu lagi di sini, karena sudah di form
    // const whatsappNumber = "6281313359686"; 
    // const message = "Halo, saya tertarik untuk konsultasi jasa jahit.";

    return (
        <section id="contact" ref={ref} className="py-24 bg-gradient-to-r from-purple-100 to-pink-100">
            <div className={`container mx-auto px-6 flex flex-col lg:flex-row items-center transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Siap Untuk Memesan ?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Isi formulir di samping untuk memulai pemesanan Anda. Tim kami akan segera menghubungi Anda melalui WhatsApp untuk konfirmasi dan diskusi lebih lanjut.
                    </p>

                    <div className="grid grid-cols-1 gap-4 mb-8">
                        {/* Card WhatsApp */}
                        <div className="flex items-center space-x-4 bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white">
                            <div className="bg-green-100 p-3 rounded-lg">
                                <FaWhatsapp className="text-green-500 text-xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">WhatsApp</span>
                                <span className="text-gray-700 font-medium">+62 813-1335-9686</span>
                            </div>
                        </div>

                        {/* Card Email */}
                        <div className="flex items-center space-x-4 bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white">
                            <div className="bg-purple-100 p-3 rounded-lg">
                                <FaEnvelope className="text-purple-600 text-xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</span>
                                <span className="text-gray-700 font-medium">info@rumahpenjahit.com</span>
                            </div>
                        </div>

                        {/* Card Alamat */}
                        <div className="flex items-start space-x-4 bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white">
                            <div className="bg-red-100 p-3 rounded-lg shrink-0">
                                <FaMapMarkerAlt className="text-red-500 text-xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Lokasi</span>
                                <span className="text-gray-700 font-medium text-sm leading-relaxed">
                                    Perum Rancamaya Blok B4, Sukasenang, Sindangkasih, Ciamis
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* 2. Hapus tombol WhatsApp lama, karena sudah ada di dalam form */}
                </div>

                {/* 3. Ganti gambar dengan komponen OrderForm */}
                <div className="lg:w-1/2 w-full">
                    <OrderForm />
                </div>
            </div>
        </section>
    );
};

export default ContactUs;