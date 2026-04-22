"use client";

import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const OrderForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        service: '',
        description: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const whatsappNumber = "6281313359686";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!formData.name || !formData.whatsapp || !formData.service) {
            alert('Mohon lengkapi Nama, Nomor WhatsApp, dan Jenis Layanan.');
            setIsSubmitting(false);
            return;
        }

        const message = `
Halo, permisi Rumah Busana Annur, saya ingin melakukan pemesanan.

*Nama Lengkap :* ${formData.name}
*Email :* ${formData.email}
*Nomor WhatsApp :* ${formData.whatsapp}
*Jenis Layanan :* ${formData.service}
*Deskripsi Pesanan :*
 ${formData.description}
    `.trim();

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        setFormData({ name: '', email: '', whatsapp: '', service: '', description: '' });
        setIsSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-2xl space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Formulir Pemesanan</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                        suppressHydrationWarning={true} // <-- TAMBAHKAN INI
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        suppressHydrationWarning={true} // <-- TAMBAHKAN INI
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">Nomor WhatsApp *</label>
                    <input
                        type="tel"
                        id="whatsapp"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Contoh : 0812-3456-7890"
                        required
                        suppressHydrationWarning={true} // <-- TAMBAHKAN INI
                    />
                </div>
                <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Jenis Layanan *</label>
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                        suppressHydrationWarning={true} // <-- TAMBAHKAN INI
                    >
                        <option value="">-- Pilih Layanan --</option>
                        <option value="Jahit Pakaian Pria">Jahit Pakaian Pria</option>
                        <option value="Jahit Pakaian Wanita">Jahit Pakaian Wanita</option>
                        <option value="Jahit Seragam">Jahit Seragam</option>
                        <option value="Jahit Kebaya">Jahit Kebaya</option>
                        <option value="Lainnya">Lainnya</option>
                    </select>
                </div>
            </div>

            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Deskripsi Pesanan</label>
                <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Jelaskan desain, ukuran, bahan, atau detail lain yang Anda inginkan..."
                    suppressHydrationWarning={true} // <-- TAMBAHKAN INI
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                suppressHydrationWarning={true} // <-- TAMBAHKAN INI
            >
                {isSubmitting ? 'Mengirim...' : <><FaWhatsapp className="mr-2" /> Kirim via WhatsApp</>}
            </button>
        </form>
    );
};

export default OrderForm;