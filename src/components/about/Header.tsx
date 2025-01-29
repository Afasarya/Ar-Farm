// app/tentang/page.tsx
"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const AboutHeader = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-about.jpg" // Add your farm image
          alt="AR Farm Background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <nav className="flex items-center space-x-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-white">Tentang Kami</span>
          </nav>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-green-400 bg-green-400/10 backdrop-blur-sm border border-green-400/20">
              Tentang Kami
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-jakarta text-white leading-tight">
              Mengenal Lebih Dekat
              <span className="block text-green-400 mt-2">AR Farm</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              Pelajari perjalanan kami dalam membangun peternakan entog modern dengan standar kualitas terbaik.
            </p>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-1/2 -right-20 w-40 h-40 bg-green-400/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-0 -left-20 w-60 h-60 bg-green-500/10 rounded-full blur-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;