import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div className="relative w-16 h-16 mb-4">
                        <Image
                            src="/images/logo-rba.jpg"
                            alt="Rumah Penjahit An Nur"
                            fill
                            className="object-contain rounded-full"
                        />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">Rumah Busana Annur</h3>
                    <p className="text-gray-400">Wujudkan busana impian Anda dengan kualitas dan harga yang terjangkau.</p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Layanan</h4>
                    <ul className="text-gray-400 space-y-2">
                        <li>Jahit Pakaian Pria</li>
                        <li>Jahit Pakaian Wanita</li>
                        <li>Jahit Seragam</li>
                        <li>Dll</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Kontak</h4>
                    <ul className="text-gray-400 space-y-2">
                        <li>+62 813-1335-9686</li>
                        <li>info@rumahpenjahit.com</li>
                        <li>Perum Rancamaya Blok B4, Sukasenang, Sindangkasih, Ciamis</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaFacebookF /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaInstagram /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaTwitter /></a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Rumah Busana Annur. Hak Cipta Dilindungi.</p>
            </div>
        </footer>
    );
};

export default Footer;