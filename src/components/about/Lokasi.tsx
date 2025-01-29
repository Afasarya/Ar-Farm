// Lokasi.tsx
"use client";
import { motion } from 'framer-motion';
import { HiOutlineLocationMarker, HiOutlineClock, HiOutlinePhone } from 'react-icons/hi';

const Location = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold font-jakarta text-gray-900 mb-4"
          >
            Lokasi AR Farm
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Kunjungi peternakan kami untuk melihat langsung proses dan fasilitas modern AR Farm
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Map Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="relative">
              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 backdrop-blur-sm bg-white/30 z-10" />
              
              {/* Map iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.5754942716988!2d109.2751234!3d-7.3935833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655e8f4f7ef8d9%3A0x7f4b1f7e4b7e4b7e!2sAR%20Farm!5e0!3m2!1sen!2sid!4v1629788999999!5m2!1sen!2sid"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative z-20"
              />
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Location Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-50 rounded-xl">
                    <HiOutlineLocationMarker className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Alamat</h3>
                    <p className="text-gray-600 leading-relaxed">
                      RT.01/RW.02, Dusun I, Keniten,<br />
                      Kedungbanteng, Banyumas Regency,<br />
                      Central Java 53152
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-50 rounded-xl">
                    <HiOutlineClock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Jam Operasional</h3>
                    <p className="text-gray-600">
                      Senin - Minggu<br />
                      08:00 - 17:00 WIB
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-50 rounded-xl">
                    <HiOutlinePhone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Kontak</h3>
                    <p className="text-gray-600">
                      +62 123 4567 890<br />
                      info@arfarm.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <h3 className="font-bold text-xl text-gray-900 mb-4">
                Ingin Mengunjungi Kami?
              </h3>
              <p className="text-gray-600 mb-6">
                Silakan hubungi kami terlebih dahulu untuk membuat janji kunjungan.
              </p>
              <a
                href="tel:+6212345678890"
                className="inline-flex items-center px-6 py-3 rounded-full
                         bg-green-600 text-white font-medium
                         transition-all duration-300 hover:bg-green-500
                         hover:shadow-lg hover:shadow-green-500/20"
              >
                <HiOutlinePhone className="w-5 h-5 mr-2" />
                Hubungi Kami
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;