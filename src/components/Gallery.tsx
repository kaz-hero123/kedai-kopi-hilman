"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  { id: 1, src: "/images/gallery-1.webp", alt: "Suasana kedai 1", className: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" },
  { id: 2, src: "/images/gallery-1.webp", alt: "Suasana kedai 2", className: "aspect-square" },
  { id: 3, src: "/images/gallery-1.webp", alt: "Suasana kedai 3", className: "aspect-square" },
  { id: 4, src: "/images/gallery-1.webp", alt: "Suasana kedai 4", className: "aspect-square" },
  { id: 5, src: "/images/gallery-1.webp", alt: "Suasana kedai 5", className: "aspect-square" },
];

export default function Gallery() {
  return (
    <section id="galeri" className="py-24 bg-brand-espresso relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-10 mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-serif text-4xl md:text-5xl text-brand-cream font-bold mb-4"
          >
            Suasana Ruang Kopi
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-brand-cream/70 text-lg max-w-2xl mx-auto"
          >
            Tempat ngopi yang terasa seperti rumah sendiri.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[250px]">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-brand-espresso/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
