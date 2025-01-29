// Header.tsx
"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          {/* Text Content */}
          <div className="space-y-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-green-700 bg-green-50 border border-green-100">
                AR Farm - Peternakan Entog Modern
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-jakarta text-gray-900 leading-[1.2]">
                Modern Farming for{" "}
                <span className="text-green-600">Better Future</span>
              </h1>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 max-w-xl font-jakarta leading-relaxed"
            >
              Menghadirkan inovasi dalam peternakan entog dengan pendekatan modern dan berkelanjutan untuk kualitas terbaik.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-6 pt-4"
            >
              <Link 
                href="/product"
                className="px-8 py-3.5 rounded-full bg-green-600 text-white font-medium
                  transition-all duration-300 hover:bg-green-500 
                  hover:shadow-lg hover:shadow-green-500/20 hover:scale-105
                  active:scale-95"
              >
                Lihat Produk
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-3.5 rounded-full border-2 border-green-600 text-green-600
                  transition-all duration-300 hover:bg-green-50
                  hover:shadow-lg hover:shadow-green-500/10"
              >
                Hubungi Kami
              </Link>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className="relative h-[450px] lg:h-[600px] w-full"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-50 rounded-full blur-3xl opacity-60" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-50 rounded-full blur-3xl opacity-60" />
            
            <Image
              src="/images/hero.jpg"
              alt="AR Farm Hero"
              fill
              className="object-cover rounded-3xl shadow-2xl"
              priority
            />
            
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl"
            >
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-bold text-green-600">500+</p>
                  <p className="text-sm font-medium text-gray-600 mt-1">Ternak Entog</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-green-600">50+</p>
                  <p className="text-sm font-medium text-gray-600 mt-1">Pelanggan</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;