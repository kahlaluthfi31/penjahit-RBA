import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton'; 
import CookieConsent from './components/CookieConsent'; 

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Rumah Busana Annur',
  description: 'Wujudkan busana impian Anda dengan sentuhan tangan ahli dan kualitas terbaik di Rumah Busana Annur.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${poppins.className} bg-white text-gray-800`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTopButton />
        <CookieConsent />
      </body>
    </html>
  );
}