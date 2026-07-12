"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function CtaWhatsApp() {
  return (
    <section className="bg-brand-terracotta py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-espresso/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-[var(--text-fluid-h2)] text-white font-bold mb-6 tracking-tight drop-shadow-md"
        >
          Mau pesan atau reservasi tempat?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto drop-shadow-sm font-medium"
        >
          Langsung chat kami, ya! Kami fast respond dan siap menyiapkan secangkir kopi terbaik untukmu.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative inline-block group"
        >
          {/* Glowing Border Animation */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-brand-cream via-brand-cinnamon to-brand-cream opacity-50 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          
          <a
            href="https://wa.me/6281234567890?text=Halo%20Ruang%20Kopi!"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center gap-3 bg-brand-cream text-brand-espresso px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl hover:-translate-y-1"
          >
            <MessageCircle className="w-6 h-6 text-green-600" />
            <span>Chat via WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
