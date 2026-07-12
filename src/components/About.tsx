"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Coffee, Users, Heart } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="tentang" className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-50 mix-blend-multiply pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div className="absolute inset-0 bg-brand-cinnamon rounded-tl-[100px] rounded-br-[100px] transform translate-x-4 translate-y-4"></div>
              
              <div className="relative h-full w-full overflow-hidden rounded-tl-[100px] rounded-br-[100px] border-4 border-brand-cream shadow-xl">
                <Image
                  src="/images/about.webp"
                  alt="Barista menyeduh kopi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Spinning Decorative Badge */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-8 -left-8 w-32 h-32 md:w-40 md:h-40 rounded-full bg-brand-cream shadow-xl border border-brand-espresso/10 flex items-center justify-center z-20"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                  <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                  <text className="text-[12.5px] font-bold fill-brand-espresso uppercase tracking-[0.2em]">
                    <textPath href="#circlePath" startOffset="0%">
                      • Ruang Kopi • Local Roastery
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Coffee className="w-8 h-8 text-brand-terracotta" />
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            <motion.h2 
              variants={itemVariants}
              className="font-serif text-[var(--text-fluid-h2)] text-brand-espresso font-bold mb-6 tracking-tight drop-shadow-sm"
            >
              Cerita Kami
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-brand-espresso/80 text-[var(--text-fluid-p)] mb-8 leading-relaxed font-medium"
            >
              Ruang Kopi lahir dari kecintaan sederhana: secangkir kopi yang enak dan obrolan hangat bersama tetangga. Kami percaya bahwa kedai kopi bukan sekadar tempat membeli kafein, tapi sebuah ruang persinggahan. Tempat di mana setiap sapaan terasa personal dan setiap tegukan mengingatkanmu pada kenyamanan rumah.
            </motion.p>

            <div className="flex flex-col gap-6 mt-4">
              <motion.div variants={itemVariants} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-brand-sage/20 flex items-center justify-center shrink-0 group-hover:bg-brand-sage/40 transition-colors">
                  <Coffee className="w-6 h-6 text-brand-sage" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-espresso text-xl mb-1 group-hover:text-brand-terracotta transition-colors">Biji Kopi Lokal</h3>
                  <p className="text-brand-espresso/70">Disangrai dengan cermat dari kebun petani lokal Nusantara.</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-brand-terracotta/20 flex items-center justify-center shrink-0 group-hover:bg-brand-terracotta/40 transition-colors">
                  <Users className="w-6 h-6 text-brand-terracotta" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-espresso text-xl mb-1 group-hover:text-brand-terracotta transition-colors">Barista Ramah</h3>
                  <p className="text-brand-espresso/70">Selalu siap menyapamu dan menyeduh pesanan favoritmu.</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-brand-cinnamon/20 flex items-center justify-center shrink-0 group-hover:bg-brand-cinnamon/40 transition-colors">
                  <Heart className="w-6 h-6 text-brand-cinnamon" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-espresso text-xl mb-1 group-hover:text-brand-terracotta transition-colors">Suasana Rumahan</h3>
                  <p className="text-brand-espresso/70">Sudut nyaman yang mengundangmu untuk berlama-lama.</p>
                </div>
              </motion.div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
