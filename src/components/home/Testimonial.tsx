// Testimonial.tsx
"use client";
import { useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { BsStarFill, BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const testimonials = [
  {
    name: "Ahmad Rizki",
    role: "Peternak Entog",
    image: "/testimonials/person1.jpg",
    rating: 5,
    content: "AR Farm memberikan pelayanan terbaik dan entog berkualitas. Pengiriman cepat dan aman, sangat recommended untuk yang mencari bibit entog berkualitas.",
  },
  {
    name: "Siti Aminah",
    role: "Pengusaha Kuliner",
    image: "/testimonials/person2.jpg",
    rating: 5,
    content: "Saya sudah berlangganan dengan AR Farm selama 2 tahun. Kualitas entog selalu konsisten dan pelayanannya sangat professional.",
  },
  {
    name: "Budi Santoso",
    role: "Distributor Daging",
    image: "/testimonials/person3.jpg",
    rating: 5,
    content: "Tim AR Farm sangat membantu dalam proses pembelian dan pengiriman. Entog yang dikirim selalu sesuai dengan spesifikasi yang dijanjikan.",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      position: 'absolute' as const
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      position: 'relative' as const
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      position: 'absolute' as const
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-jakarta text-gray-900 mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-lg text-gray-600">
            Testimoni dari pelanggan setia AR Farm
          </p>
        </div>

        <div className="relative h-[400px]"> {/* Add fixed height */}
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
            <button
              onClick={() => paginate(-1)}
              className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg
                       hover:bg-white transition-all duration-300"
            >
              <BsChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
            <button
              onClick={() => paginate(1)}
              className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg
                       hover:bg-white transition-all duration-300"
            >
              <BsChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Testimonial Carousel */}
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                position: { duration: 0 } // Add this
              }}
              className="w-full absolute left-0 right-0" // Update className
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 mx-auto max-w-3xl">
                <div className="flex flex-col items-center text-center">
                  {/* Profile Image */}
                  <div className="relative w-20 h-20 mb-6">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>

                  {/* Rating */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <BsStarFill key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-600 text-lg mb-6 italic">
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </p>

                  {/* Author */}
                  <h3 className="font-bold text-xl text-gray-900 font-jakarta">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-green-600 font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-green-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;