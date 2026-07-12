"use client";

import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

export default function LocationHours() {
  return (
    <section id="lokasi" className="py-24 bg-brand-cream relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-serif text-4xl md:text-5xl text-brand-espresso font-bold mb-10"
            >
              Kapan & Di Mana
            </motion.h2>

            <div className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2 }}
                className="flex gap-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-cinnamon/20 flex items-center justify-center shrink-0">
                  <Clock className="w-7 h-7 text-brand-terracotta" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-espresso text-xl mb-3">Jam Buka</h3>
                  <div className="grid grid-cols-[100px_1fr] gap-2 text-brand-espresso/80">
                    <span className="font-medium">Senin - Jumat</span>
                    <span>08.00 - 22.00</span>
                    <span className="font-medium">Sabtu - Minggu</span>
                    <span>09.00 - 23.00</span>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.3 }}
                className="flex gap-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-sage/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-7 h-7 text-brand-sage" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-espresso text-xl mb-3">Alamat</h3>
                  <p className="text-brand-espresso/80 leading-relaxed mb-3 max-w-sm">
                    Jl. Cempaka No. 12, Jagakarsa,<br />Jakarta Selatan 12620
                  </p>
                  <a 
                    href="https://maps.google.com"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block text-brand-terracotta font-medium hover:underline underline-offset-4"
                  >
                    Buka di Google Maps &rarr;
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-lg border-4 border-white"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.01423405788!2d106.7493649!3d-6.3006411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed27170a4805%3A0x6b29d115be53da72!2sJagakarsa%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Ruang Kopi"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
