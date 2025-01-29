// Order.tsx
"use client";
import { motion } from 'framer-motion';
import { BsSearch, BsChatDots, BsHandThumbsUp, BsShop } from 'react-icons/bs';
import Link from 'next/link';

const OrderSteps = () => {
  const steps = [
    {
      icon: <BsSearch className="w-8 h-8" />,
      title: "Pilih Entog",
      description: "Temukan entog berkualitas yang sesuai dengan kebutuhan Anda dari koleksi AR Farm yang dirawat dengan standar tinggi.",
    },
    {
      icon: <BsChatDots className="w-8 h-8" />,
      title: "Hubungi Kami",
      description: "Diskusikan kebutuhan Anda dengan tim AR Farm melalui WhatsApp atau telepon untuk informasi lebih detail.",
    },
    {
      icon: <BsHandThumbsUp className="w-8 h-8" />,
      title: "Diskusi & Kesepakatan",
      description: "Bahas detail pembelian, harga, metode pengiriman, dan pembayaran untuk memastikan transaksi yang nyaman.",
    },
    {
      icon: <BsShop className="w-8 h-8" />,
      title: "Kunjungi Langsung",
      description: "Anda juga bisa mengunjungi peternakan AR Farm untuk melihat langsung dan melakukan transaksi di tempat.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-jakarta text-gray-900 mb-4">
            Cara Mudah Membeli di AR Farm
          </h2>
          <p className="text-lg text-gray-600">
            Ikuti langkah sederhana berikut untuk mendapatkan entog berkualitas dari AR Farm
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 -right-4 w-8 border-t-2 border-dashed border-green-200" />
              )}
              
              {/* Step Card */}
              <div className="bg-white rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300
                            border border-green-100 hover:border-green-200">
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Step Number */}
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center
                                text-green-600 font-bold text-xl mb-2">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-green-600 p-3 bg-green-50 rounded-xl">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 font-jakarta">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 rounded-full
                     bg-green-600 text-white font-medium
                     transition-all duration-300 hover:bg-green-500
                     hover:shadow-lg hover:shadow-green-500/20"
          >
            <BsChatDots className="mr-2" />
            Hubungi Kami Sekarang
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OrderSteps;