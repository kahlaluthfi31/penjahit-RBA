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
                        Siap Untuk Memesan?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Isi formulir di samping untuk memulai pemesanan Anda. Tim kami akan segera menghubungi Anda melalui WhatsApp untuk konfirmasi dan diskusi lebih lanjut.
                    </p>

                    <div className="space-y-4 mb-8">
                        <div className="flex items-center space-x-4">
                            <FaWhatsapp className="text-green-500 text-2xl" />
                            <span className="text-gray-700">+62 813-1335-9686</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaEnvelope className="text-purple-600 text-2xl" />
                            <span className="text-gray-700">info@rumahpenjahit.com</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaMapMarkerAlt className="text-red-500 text-2xl" />
                            <span className="text-gray-700">Perum Rancamaya Blok B4, Sukasenang, Sindangkasih, Ciamis</span>
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