"use client";

import { motion, Variants } from "framer-motion";
import { menuData } from "@/lib/menu-data";
import MenuCard from "./MenuCard";

export default function MenuSection() {
  const minuman = menuData.filter((item) => item.category === "minuman");
  const camilan = menuData.filter((item) => item.category === "camilan");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="menu" className="py-24 bg-[#FAF6F0] relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-serif text-4xl md:text-5xl text-brand-espresso font-bold mb-4"
          >
            Menu Favorit Kami
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-brand-espresso/70 text-lg max-w-2xl mx-auto"
          >
            Yang paling sering dipesan dan selalu dirindukan.
          </motion.p>
        </div>
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-4 mb-8"
          >
            <h3 className="font-serif text-2xl font-bold text-brand-espresso">Minuman</h3>
            <div className="h-[1px] flex-1 bg-brand-cinnamon/30"></div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {minuman.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <MenuCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-4 mb-8"
          >
            <h3 className="font-serif text-2xl font-bold text-brand-espresso">Camilan</h3>
            <div className="h-[1px] flex-1 bg-brand-cinnamon/30"></div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {camilan.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <MenuCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/6281122334455?text=Halo%20min,%20saya%20mau%20pesan%20menu..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-brand-terracotta text-white px-8 py-4 rounded-full font-medium hover:bg-brand-terracotta/90 transition-all shadow-lg hover:shadow-xl group"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
