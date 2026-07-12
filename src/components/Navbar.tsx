"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Coffee, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Tentang", href: "#tentang" },
    { name: "Menu", href: "#menu" },
    { name: "Galeri", href: "#galeri" },
    { name: "Lokasi", href: "#lokasi" },
  ];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const mobileMenuVariants = {
    closed: { x: "100%", transition: { type: "tween" as const, duration: 0.3 } },
    open: { 
      x: 0, 
      transition: { 
        type: "tween" as const, 
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-terracotta z-[100] origin-left"
        style={{ scaleX }}
      />
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-brand-cream/90 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Coffee className={`w-6 h-6 transition-colors ${isScrolled ? "text-brand-terracotta" : "text-white"}`} />
            <span className={`font-serif text-2xl font-bold tracking-wide transition-colors ${isScrolled ? "text-brand-espresso" : "text-white"}`}>
              Ruang Kopi
            </span>
          </Link>


          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`font-medium hover:text-brand-terracotta transition-colors ${
                      isScrolled ? "text-brand-espresso/80" : "text-white/90"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Ruang%20Kopi!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-terracotta text-white px-5 py-2.5 rounded-full font-medium hover:bg-brand-terracotta/90 transition-colors shadow-sm"
            >
              Pesan via WA
            </a>
          </div>


          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className={`w-6 h-6 ${isScrolled ? "text-brand-espresso" : "text-white"}`} />
          </button>
        </div>
      </nav>


      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-brand-espresso/50 z-[60] md:hidden"
            />
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-brand-cream z-[70] p-6 shadow-xl flex flex-col md:hidden"
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-brand-cinnamon/20 rounded-full transition-colors">
                  <X className="w-6 h-6 text-brand-espresso" />
                </button>
              </div>
              <motion.ul className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <motion.li key={link.name} variants={mobileItemVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-serif text-brand-espresso hover:text-brand-terracotta block transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
              <div className="mt-auto">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Ruang%20Kopi!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-terracotta text-white px-6 py-3 rounded-full font-medium w-full flex justify-center hover:bg-brand-terracotta/90 transition-colors shadow-sm"
                >
                  Pesan via WA
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
