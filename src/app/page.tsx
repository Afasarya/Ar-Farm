import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Hero from '../components/home/Header';
import Order from '../components/home/Order';
import Faq from '../components/home/Faq';
import Testimonial from '@/components/home/Testimonial';

export default function Home() {
  return (
    <main className="pt-16"> {/* Add padding-top equal to navbar height */}
      <Navbar />
      <Hero />
      <Order />
      <Faq />
      <Testimonial />
      <Footer />
    </main>
  );
}