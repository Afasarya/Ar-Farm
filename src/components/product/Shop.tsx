// shop/page.tsx
"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { BsWhatsapp, BsX } from 'react-icons/bs';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  details: {
    age: string;
    weight: string;
    category: string;
  };
}

const products: Product[] = [
  {
    id: 1,
    name: "Entog Dewasa Premium",
    description: "Entog dewasa berkualitas tinggi dengan bobot ideal, cocok untuk ternak atau konsumsi",
    price: "Rp 150.000",
    image: "/images/product-1.jpg",
    details: {
      age: "8-12 bulan",
      weight: "2-3 kg",
      category: "Entog Dewasa",
    }
  },
  {
    id: 2,
    name: "Entog Anakan",
    description: "Entog anakan sehat dan aktif, hasil breeding berkualitas",
    price: "Rp 75.000",
    image: "/images/product-1.jpg",
    details: {
      age: "1-2 bulan",
      weight: "0.5-1 kg",
      category: "Entog Anakan",
    }
  },
  {
    id: 3,
    name: "Entog Bibit Unggul",
    description: "Bibit entog unggul dengan genetik berkualitas tinggi",
    price: "Rp 200.000",
    image: "/images/product-1.jpg",
    details: {
      age: "4-6 bulan",
      weight: "1.5-2 kg",
      category: "Entog Bibit",
    }
  },
];

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleWhatsApp = (product: Product) => {
    const message = `Halo, saya tertarik dengan ${product.name} di AR Farm. Mohon informasi lebih lanjut.`;
    const url = `https://wa.me/6212345678?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-green-50 to-white overflow-hidden">
        {/* Optional: Add subtle pattern or texture */}
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold font-jakarta text-gray-900 mb-6 relative"
            >
              Produk <span className="text-green-600">AR Farm</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 relative"
            >
              Pilih entog berkualitas terbaik untuk kebutuhan Anda
            </motion.p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white"> {/* Change to white background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Optional: Add subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 via-white to-white pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100
                          hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm
                                rounded-full text-green-600 font-bold shadow-lg">
                    {product.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600
                               transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Quick Info */}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="text-sm">
                      <span className="text-gray-500">Usia:</span>
                      <p className="font-medium text-gray-900">{product.details.age}</p>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">Berat:</span>
                      <p className="font-medium text-gray-900">{product.details.weight}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="text-green-600 font-medium hover:text-green-700
                               transition-colors duration-300"
                    >
                      Lihat Detail
                    </button>
                    <button
                      onClick={() => handleWhatsApp(product)}
                      className="inline-flex items-center px-4 py-2 rounded-full
                               bg-green-600 text-white text-sm font-medium
                               transition-all duration-300 hover:bg-green-500
                               hover:shadow-lg hover:shadow-green-500/20"
                    >
                      <BsWhatsapp className="w-4 h-4 mr-2" />
                      Beli
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-72">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/80 
                           backdrop-blur-sm hover:bg-white transition-colors"
                >
                  <BsX className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-gray-600">
                    {selectedProduct.description}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-green-50 rounded-xl text-center">
                    <p className="text-sm text-gray-600 mb-1">Usia</p>
                    <p className="font-bold text-gray-900">
                      {selectedProduct.details.age}
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl text-center">
                    <p className="text-sm text-gray-600 mb-1">Berat</p>
                    <p className="font-bold text-gray-900">
                      {selectedProduct.details.weight}
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl text-center">
                    <p className="text-sm text-gray-600 mb-1">Kategori</p>
                    <p className="font-bold text-gray-900">
                      {selectedProduct.details.category}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <span className="text-2xl font-bold text-green-600">
                    {selectedProduct.price}
                  </span>
                  <button
                    onClick={() => handleWhatsApp(selectedProduct)}
                    className="inline-flex items-center px-6 py-3 rounded-full
                             bg-green-600 text-white font-medium
                             transition-all duration-300 hover:bg-green-500
                             hover:shadow-lg hover:shadow-green-500/20"
                  >
                    <BsWhatsapp className="w-5 h-5 mr-2" />
                    Beli Sekarang
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Shop;