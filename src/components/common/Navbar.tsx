// Navbar.tsx
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  title: string;
  href: string;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { title: "Beranda", href: "/" },
    { title: "Tentang Kami", href: "/tentang" },
    { title: "Product", href: "/product" },
    { title: "Contact", href: "/contact" },

  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-sm shadow-sm' 
        : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="AR Farm Logo"
                width={100}
                height={100}
                className="w-auto h-8"
              />
              <span className="text-base font-bold font-jakarta text-green-700">
                AR Farm
              </span>
            </Link>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 px-8">
            <div className={`
              relative
              border rounded-full px-6 py-2
              transition-all duration-300
              backdrop-blur-md
              shadow-[0_0_15px_rgba(34,197,94,0.1)]
              ${isScrolled 
                ? 'border-green-500/20 bg-white/60' 
                : 'border-green-400/30 bg-white/50'
              }
              hover:border-green-500/40
              hover:bg-white/70
              hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]
              after:absolute
              after:inset-0
              after:rounded-full
              after:bg-gradient-to-r
              after:from-green-500/5
              after:to-green-400/5
              after:-z-10
            `}>
              <div className="flex items-center space-x-8">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="relative group"
                    >
                      <span className={`text-sm font-medium font-jakarta ${
                        isActive ? 'text-green-700' : 'text-gray-700'
                      } transition-colors duration-300 hover:text-green-500`}>
                        {link.title}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full text-sm font-medium font-jakarta 
                bg-green-600 text-white 
                transition-all duration-300 
                hover:bg-green-500 
                hover:shadow-lg hover:shadow-green-500/20 
                hover:scale-105 
                active:scale-95"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-between text-gray-700">
              <motion.span
                className="w-full h-0.5 bg-current transform origin-left"
                animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
              />
              <motion.span
                className="w-full h-0.5 bg-current"
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              />
              <motion.span
                className="w-full h-0.5 bg-current transform origin-left"
                animate={{ rotate: isMobileMenuOpen ? -45 : 0 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-sm font-medium font-jakarta ${
                      pathname === link.href
                        ? 'text-green-700 bg-green-50'
                        : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                    }`}
                  >
                    {link.title}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm font-medium font-jakarta bg-green-600 text-white hover:bg-green-700 text-center mt-2"
                >
                  Hubungi Kami
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;