// contact/page.tsx
"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BsWhatsapp, BsEnvelope, BsGeoAlt, BsClock } from 'react-icons/bs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Nama: ${formData.name}%0AEmail: ${formData.email}%0ATelepon: ${formData.phone}%0APesan: ${formData.message}`;
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-green-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold font-jakarta text-gray-900 mb-6"
            >
              Hubungi <span className="text-green-600">AR Farm</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Kami siap membantu Anda dengan informasi lebih lanjut
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                    placeholder="Masukkan nama lengkap"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                    placeholder="Masukkan email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    No. Telepon
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                    placeholder="Masukkan nomor telepon"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                    placeholder="Tulis pesan Anda"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-xl bg-green-600 text-white font-medium
                           transition-all duration-300 hover:bg-green-500
                           hover:shadow-lg hover:shadow-green-500/20"
                >
                  Kirim Pesan via WhatsApp
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-green-200 transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-50 rounded-xl">
                      <BsGeoAlt className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Lokasi</h3>
                      <p className="text-gray-600">
                        RT.01/RW.02, Dusun I, Keniten, Kedungbanteng, Banyumas
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-green-200 transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-50 rounded-xl">
                      <BsWhatsapp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                      <p className="text-gray-600">+62 123 4567 890</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-green-200 transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-50 rounded-xl">
                      <BsEnvelope className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">info@arfarm.com</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-green-200 transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-50 rounded-xl">
                      <BsClock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Jam Operasional</h3>
                      <p className="text-gray-600">08:00 - 17:00 WIB</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white p-4 rounded-2xl border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;