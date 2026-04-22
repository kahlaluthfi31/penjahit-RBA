import './globals.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton'; 
import CookieConsent from './components/CookieConsent'; 

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
      <body className="bg-white text-gray-800 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTopButton />
        <CookieConsent />
      </body>
    </html>
  );
}