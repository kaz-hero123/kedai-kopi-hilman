"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Andi S.", text: "Kopi susu gula arennya juara! Suasananya juga enak banget buat nongkrong lama-lama." },
  { name: "Rina M.", text: "Tempat favorit buat nugas akhir pekan. Wi-Fi kencang dan baristanya ramah banget." },
  { name: "Budi T.", text: "V60 manual brew-nya sangat pas, beans lokalnya berkualitas. Definitely will come back!" },
  { name: "Siti F.", text: "Croissant butter dipadukan dengan latte adalah kombo terbaik di sore hari. Nyaman banget tempatnya." },
  { name: "Fajar K.", text: "Harganya ramah di kantong mahasiswa tapi rasanya nggak kalah sama kedai kopi besar." },
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
