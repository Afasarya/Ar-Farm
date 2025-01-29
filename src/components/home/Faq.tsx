// FAQ.tsx
"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';

const FAQ = () => {
  const faqs = [
    {
      question: "Apakah AR Farm menyediakan layanan pengiriman?",
      answer: "Ya, AR Farm menyediakan layanan pengiriman ke berbagai wilayah. Biaya pengiriman akan disesuaikan dengan lokasi dan jumlah pembelian.",
    },
    {
      question: "Bagaimana cara memastikan kualitas entog AR Farm?",
      answer: "Setiap entog di AR Farm dirawat dengan standar kesehatan tinggi, diberi pakan berkualitas, dan melalui pemeriksaan rutin untuk memastikan kualitas terbaik.",
    },
    {
      question: "Apakah bisa melihat langsung entog sebelum membeli?",
      answer: "Tentu! Anda dapat mengunjungi peternakan AR Farm untuk melihat langsung kondisi entog dan fasilitas peternakan kami.",
    },
    {
      question: "Berapa usia minimal entog yang bisa dibeli?",
      answer: "Kami menyediakan entog dengan berbagai usia, mulai dari DOD (Day Old Duck) hingga entog dewasa siap potong.",
    },
    {
      question: "Apakah AR Farm menyediakan garansi?",
      answer: "Ya, kami memberikan garansi kualitas untuk setiap pembelian entog. Syarat dan ketentuan berlaku.",
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-jakarta text-gray-900 mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-gray-600">
            Temukan jawaban untuk pertanyaan umum seputar AR Farm
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{ backgroundColor: activeIndex === index ? 'rgb(240, 253, 244)' : 'white' }}
              className={`border rounded-2xl overflow-hidden transition-all duration-300
                ${activeIndex === index ? 'border-green-200' : 'border-gray-200'}
                hover:border-green-200`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="flex items-center justify-between w-full p-6 text-left"
              >
                <span className="text-lg font-medium font-jakarta text-gray-900">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoIosArrowDown className={`w-6 h-6 ${
                    activeIndex === index ? 'text-green-600' : 'text-gray-400'
                  }`} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">
            Masih punya pertanyaan lain?
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;