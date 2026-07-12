"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Apakah Ruang Kopi menyediakan Wi-Fi gratis?",
    answer: "Ya, kami menyediakan Wi-Fi berkecepatan tinggi gratis untuk semua pelanggan. Sangat cocok untuk kamu yang ingin WFC (Work From Cafe) atau sekadar browsing santai."
  },
  {
    question: "Apakah tersedia area parkir untuk mobil?",
    answer: "Tersedia area parkir yang cukup luas di depan kedai yang bisa menampung mobil dan motor dengan aman, dijaga oleh juru parkir kami."
  },
  {
    question: "Bisakah melakukan reservasi tempat untuk acara (meeting/ulang tahun)?",
    answer: "Tentu! Kamu bisa mereservasi tempat dengan menghubungi kami melalui WhatsApp minimal H-2 sebelum acara. Kami juga memiliki paket khusus untuk grup."
  },
  {
    question: "Apakah ada menu non-kopi?",
    answer: "Ada banyak pilihan menu non-kopi! Mulai dari Matcha Latte, Artisan Tea, hingga Cokelat Klasik, serta berbagai camilan dan pastry segar setiap hari."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-cream relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-[var(--text-fluid-h2)] text-brand-espresso font-bold mb-4 tracking-tight drop-shadow-sm"
          >
            Sering Ditanyakan
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-espresso/70 text-[var(--text-fluid-p)]"
          >
            Beberapa hal yang mungkin ingin kamu ketahui sebelum berkunjung.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-cream/50"
            >
              <button
                className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-bold text-brand-espresso text-lg pr-8">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-brand-terracotta" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-brand-espresso/70 leading-relaxed border-t border-brand-cream">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
