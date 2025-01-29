import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Contact from '@/components/contact/Contact';



export default function Kontak() {
  return (
    <main className="pt-16"> {/* Add padding-top equal to navbar height */}
      <Navbar />
        <Contact />
      <Footer />
    </main>
  );
}