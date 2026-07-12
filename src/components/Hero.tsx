"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.webp"
          alt="Close up kopi dengan latte art"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#2C1C10]/90 via-[#2C1C10]/50 to-transparent"></div>

        <div className="absolute inset-0 bg-grain opacity-30 mix-blend-overlay"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 pt-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-[1px] w-12 bg-brand-terracotta"></div>
          <span className="text-brand-terracotta font-medium tracking-widest uppercase text-sm">
            Ruang Kopi
          </span>
          <div className="h-[1px] w-12 bg-brand-terracotta"></div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-brand-cream font-bold leading-tight mb-6 max-w-4xl"
        >
          Ngopi santai, <br className="hidden md:block" />
          <span className="text-brand-terracotta">rasa rumah.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-brand-cream/80 text-lg md:text-xl max-w-2xl mb-10"
        >
          Kopi lokal pilihan, diseduh dengan cinta di sudut kotamu. Tempat singgah sejenak dari hiruk-pikuk hari.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="https://wa.me/6281234567890?text=Halo%20Ruang%20Kopi!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-terracotta text-white px-8 py-4 rounded-full font-medium hover:bg-brand-terracotta/90 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto flex items-center justify-center gap-2 group"
          >
            <span>Pesan via WhatsApp</span>
          </a>
          <a
            href="#menu"
            className="px-8 py-4 rounded-full font-medium text-brand-cream border border-brand-cream/30 hover:bg-brand-cream/10 transition-all w-full sm:w-auto flex items-center justify-center"
          >
            Lihat Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
}
