"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Text Reveal Variants
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const titleText = "Ngopi santai,";
  const titleText2 = "rasa rumah.";

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">

      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <Image
          src="/images/hero.webp"
          alt="Close up kopi dengan latte art"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#2C1C10]/95 via-[#2C1C10]/60 to-transparent"></div>

        <div className="absolute inset-0 bg-grain opacity-30 mix-blend-overlay"></div>
      </motion.div>

      <motion.div style={{ opacity }} className="container relative z-10 mx-auto px-6 md:px-12 pt-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-[1px] w-12 bg-brand-terracotta"></div>
          <span className="text-brand-terracotta font-bold tracking-widest uppercase text-sm drop-shadow-md">
            Ruang Kopi
          </span>
          <div className="h-[1px] w-12 bg-brand-terracotta"></div>
        </motion.div>

        <motion.h1
          variants={sentence}
          initial="hidden"
          animate="visible"
          className="font-serif text-[var(--text-fluid-h1)] text-brand-cream font-bold leading-tight mb-6 max-w-4xl tracking-tight drop-shadow-lg"
        >
          {titleText.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          ))}
          <br className="hidden md:block" />
          <span className="text-brand-terracotta">
            {titleText2.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="text-brand-cream/90 text-[var(--text-fluid-p)] max-w-2xl mb-12 drop-shadow-sm font-medium"
        >
          Kopi lokal pilihan, diseduh dengan cinta di sudut kotamu. Tempat singgah sejenak dari hiruk-pikuk hari.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <MagneticButton>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Ruang%20Kopi!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-terracotta text-white px-8 py-4 rounded-full font-bold hover:bg-brand-terracotta/90 transition-all shadow-[0_0_20px_rgba(198,93,62,0.4)] hover:shadow-[0_0_30px_rgba(198,93,62,0.6)] w-full sm:w-auto flex items-center justify-center gap-2 group border border-brand-terracotta"
            >
              <span>Pesan via WhatsApp</span>
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#menu"
              className="px-8 py-4 rounded-full font-bold text-brand-cream border border-brand-cream/40 hover:bg-brand-cream hover:text-brand-espresso transition-all w-full sm:w-auto flex items-center justify-center shadow-lg"
            >
              Lihat Menu
            </a>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
