const Partners = () => {
    const partners = [
        'https://down-id.img.susercontent.com/file/id-11134233-7r98w-lmpfz2imysng3c',
        'https://img.freepik.com/vektor-premium/logo-butik-dalam-gaya-minimalis-elegan_278222-3164.jpg',
        'https://marketplace.canva.com/EAFjIxZQqJM/1/0/1600w/canva-putih-hitam-simple-toko-pakaian-logo-Ac8Vt44Xj-Q.jpg',
        'https://id-test-11.slatic.net/shop/771b208c0c3b81bdcb6c1a4bbd52f857.png',
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
                    Telah Dipercaya oleh
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-gray-50 rounded-lg p-4 shadow-sm"
                        >
                            {/* --- PERBARUI CLASSNAME DI SINI --- */}
                            <img
                                src={partner}
                                alt={`Partner ${index + 1}`}
                                className="w-full h-full object-contain opacity-100 md:opacity-60 md:grayscale hover:md:grayscale-0 hover:md:opacity-100 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;