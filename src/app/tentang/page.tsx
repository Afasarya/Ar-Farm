import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Hero from '@/components/about/Header';
import About from '@/components/about/Tentang';
import Lokasi from '@/components/about/Lokasi';


export default function Shop() {
  return (
    <main className="pt-16"> {/* Add padding-top equal to navbar height */}
      <Navbar />
      <Hero />
        <About />
        <Lokasi />
      <Footer />
    </main>
  );
}