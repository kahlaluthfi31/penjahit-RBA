"use client";

import { useState, useEffect } from 'react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasConsented = localStorage.getItem('cookieConsent');
        if (!hasConsented) {
            // Tambahkan sedikit delay agar tidak muncul langsung saat halaman load
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
        // Di sini kamu bisa menginisialisasi script analytics (misal Google Analytics)
        // window.gtag('consent', 'update', { 'ad_storage': 'granted', 'analytics_storage': 'granted' });
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 w-full p-4 z-50 flex justify-center">
            <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full p-6 md:p-8 transform transition-all duration-500 ease-out opacity-100 translate-y-0">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div className="mb-4 md:mb-0 md:mr-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">Kami Menggunakan Cookie 🍪</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Website kami menggunakan cookie untuk memberikan pengalaman yang aman dan personal, menganalisis lalu lintas, dan mempersonalisasi konten. Dengan melanjutkan penggunaan situs ini, Anda menyetujui penggunaan cookie kami sesuai dengan <a href="/privacy-policy" className="text-purple-600 underline hover:text-purple-800">Kebijakan Privasi</a> kami.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <button
                            onClick={handleAccept}
                            className="px-6 py-3 text-sm font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300"
                        >
                            Mengerti & Terima
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;