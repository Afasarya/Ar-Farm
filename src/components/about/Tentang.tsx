// app/tentang/page.tsx
"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

const AboutContent = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/images/aboutentog.jpg"
                alt="AR Farm View"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl"
            >
              <div className="space-y-2">
                <p className="text-4xl font-bold text-green-600">5+</p>
                <p className="text-sm text-gray-600">Tahun Pengalaman</p>
              </div>
            </motion.div>
            {/* Decorative Elements */}
            <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-green-50 rounded-full blur-3xl" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-jakarta text-gray-900 leading-tight">
                Menghadirkan Inovasi dalam 
                <span className="text-green-600"> Peternakan Entog Modern</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                AR Farm adalah peternakan entog modern yang berkomitmen menghadirkan produk berkualitas tinggi melalui pendekatan peternakan yang inovatif dan berkelanjutan. Dengan pengalaman lebih dari 5 tahun, kami terus mengembangkan metode peternakan yang efisien dan ramah lingkungan.
              </p>
            </div>

            {/* Location Info */}
            <div className="bg-green-50/50 border border-green-100 rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-bold font-jakarta text-gray-900">
                Kunjungi Kami
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <HiOutlineLocationMarker className="w-6 h-6 text-green-600 mt-1" />
                  <p className="text-gray-600">
                    RT.01/RW.02, Dusun I, Keniten, Kedungbanteng, 
                    Banyumas Regency, Central Java 53152
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <HiOutlinePhone className="w-5 h-5 text-green-600" />
                  <p className="text-gray-600">+62 123 4567 890</p>
                </div>
                <div className="flex items-center space-x-3">
                  <HiOutlineMail className="w-5 h-5 text-green-600" />
                  <p className="text-gray-600">info@arfarm.com</p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Peternakan Modern", desc: "Fasilitas modern untuk hasil terbaik" },
                { title: "Kualitas Terjamin", desc: "Standar kualitas tinggi" },
                { title: "Tim Berpengalaman", desc: "Penanganan profesional" },
                { title: "Pengiriman Aman", desc: "Distribusi tepercaya" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-white border border-gray-100 hover:border-green-200 transition-all duration-300"
                >
                  <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;