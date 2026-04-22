// app/page.tsx

import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Partners from './components/Partners';
import PricingTable from './components/PricingTable';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rumah Penjahit An Nur",
    "image": "https://www.rumahpenjahitannur.com/images/logo-rba.jpg", // Ganti URL
    "telephone": "+62 813-1335-9686",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Perum Rancamaya Blok B4, Sukasenang, Sindangkasih, Ciamis",
      "addressLocality": "Ciamis",
      "addressRegion": "Jawa Barat",
      "postalCode": "46271", // Tambahkan kode pos jika ada
      "addressCountry": "ID"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.instagram.com/rumahpenjahitannur", // Ganti dengan link sosmed kamu
      "https://www.facebook.com/rumahpenjahitannur"
    ]
  };
  return (
    <>
      <HeroSection />
      <AboutUs />
      <WhyChooseUs />
      <PricingTable />
      <Gallery />
      <Testimonials />
      <FAQ />
      <ContactUs />
      <Partners />
    </>
  );
}