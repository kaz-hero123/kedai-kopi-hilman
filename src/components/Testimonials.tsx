"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Dimas Aditya", text: "Es Kopi Susu arennya pas, ngga terlalu manis. Tempatnya pewe banget buat ngerjain skripsi berjam-jam." },
  { name: "Sarah N.", text: "Suka banget sama suasananya! Playlist lagunya asik, wifi stabil, dan baristanya super friendly." },
  { name: "Reza Pahlevi", text: "Nyobain V60 pakai beans lokal mereka, surprisingly clean dan notes-nya dapet banget. Bakal sering mampir sih ini." },
  { name: "Nadia Kusuma", text: "Selalu jadi go-to place kalau mau me-time. Pastry-nya fresh, kopinya enak, dan wifinya lumayan ngebut buat WFC." },
  { name: "Farhan H.", text: "Harganya bener-bener bersahabat di kantong mahasiswa, tapi kualitas kopinya berani diadu sama coffee shop gede." },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-[var(--text-fluid-h2)] text-brand-espresso font-bold mb-4 tracking-tight"
        >
          Kata Mereka
        </motion.h2>
      </div>

      <div className="relative w-full flex overflow-x-hidden group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap gap-6 px-6 group-hover:[animation-play-state:paused]"
        >
          {/* Double the array to make infinite scroll seamless */}
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <div 
              key={i} 
              className="w-[350px] inline-flex flex-col shrink-0 bg-brand-cream/30 p-8 rounded-3xl border border-brand-cinnamon/20 shadow-sm"
            >
              <div className="flex gap-1 mb-4 text-brand-terracotta">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-brand-espresso/80 text-lg mb-6 whitespace-normal italic">
                "{testimonial.text}"
              </p>
              <div className="mt-auto font-bold text-brand-espresso">
                — {testimonial.name}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
