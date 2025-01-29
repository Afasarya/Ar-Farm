import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Shop from '@/components/product/Shop';



export default function Tentang() {
  return (
    <main className="pt-16"> {/* Add padding-top equal to navbar height */}
      <Navbar />
        <Shop />
      <Footer />
    </main>
  );
}