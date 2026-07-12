"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingWA() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      // Show after scrolling down 500px
      if (latest > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          href="https://wa.me/6281234567890?text=Halo%20Ruang%20Kopi!"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] hover:bg-green-600 hover:shadow-[0_6px_20px_rgba(34,197,94,0.23)] hover:-translate-y-1 transition-all"
          aria-label="Chat via WhatsApp"
        >
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 0 0 rgba(34, 197, 94, 0.4)", 
                "0 0 0 15px rgba(34, 197, 94, 0)", 
                "0 0 0 0 rgba(34, 197, 94, 0)"
              ] 
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 rounded-full"
          />
          <MessageCircle className="w-8 h-8 relative z-10" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
