"use client";

import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image'; // <-- 1. Import komponen Image

const Gallery = () => {
    const { ref, isInView } = useInView({ threshold: 0.1 });
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // 2. Perbaiki daftar gambar
    const images = [
        'https://www.lunss.com/uploads/article/2023/02/3d-flowers-lavender-tulle-tiered-princess-formal-dress.webp',
        // URL yang sudah diperbaiki
        'https://dynamic.zacdn.com/Of8pCRktbcM75ufdgs5ckVcbq8U=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/two-mix-3819-7394743-1.jpg',
        'https://image.made-in-china.com/202f0j00FtabmuUrhSzO/Summer-Cotton-Student-New-School-Uniform-Suit.webp',
        'https://evermos.com/home/wp-content/uploads/2024/11/4d7e041c-9072-4f7d-8ad8-5fbfee965b94.jpeg',
        'https://images.tokopedia.net/img/cache/700/product-1/2020/4/10/7759286/7759286_20b461e9-f17b-4118-acc0-c98899a58805_1100_1100.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmuUu0uKF7X186IgSnVUTA38QHc20voEd0MA&s',
    ];

    const openModal = (index: number) => {
        setCurrentImageIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const goToPrevious = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <>
            <section id="gallery" ref={ref} className={`py-24 bg-gray-100 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
                        Galeri Karya Kami
                    </h2>
                    <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
                        Lihatlah beberapa hasil karya terbaik kami yang telah memuaskan berbagai klien.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {images.map((image, index) => (
                            <div key={index} className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer" onClick={() => openModal(index)}>
                                <Image
                                    src={image}
                                    alt={`Gallery ${index + 1}`}
                                    width={500}
                                    height={500}
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                    unoptimized={true} 
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
                    <div className="relative max-w-4xl w-full">
                        {/* 4. Ganti <img> di modal juga */}
                        <Image
                            src={images[currentImageIndex]}
                            alt={`Gallery ${currentImageIndex + 1}`}
                            width={1200}
                            height={800}
                            className="w-full h-auto rounded-lg"
                        />
                        <button className="absolute top-4 right-4 text-white text-3xl" onClick={closeModal}>
                            <FaTimes />
                        </button>
                        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl" onClick={(e) => { e.stopPropagation(); goToPrevious(); }}>
                            <FaChevronLeft />
                        </button>
                        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl" onClick={(e) => { e.stopPropagation(); goToNext(); }}>
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;