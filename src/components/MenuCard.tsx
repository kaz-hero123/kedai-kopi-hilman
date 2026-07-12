"use client";

import Image from "next/image";
import { MenuItem } from "@/lib/menu-data";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";
import { Star } from "lucide-react";

export default function MenuCard({ item }: { item: MenuItem }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-300 group relative border border-brand-cream/50"
    >
      {item.isBestSeller && (
        <div 
          style={{ transform: "translateZ(30px)" }}
          className="absolute top-4 -right-2 z-20"
        >
          <div className="bg-brand-terracotta text-white text-xs font-bold px-4 py-1.5 rounded-l-full shadow-md flex items-center gap-1">
            <Star className="w-3 h-3 fill-white" />
            <span>Best Seller</span>
          </div>
          {/* Ribbon fold effect */}
          <div className="absolute -bottom-2 right-0 w-2 h-2 bg-[#8c3e27] rounded-bl-sm"></div>
        </div>
      )}

      <div className="relative h-56 w-full overflow-hidden" style={{ transform: "translateZ(20px)" }}>
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 relative bg-white" style={{ transform: "translateZ(40px)" }}>
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="font-serif text-xl font-bold text-brand-espresso leading-tight group-hover:text-brand-terracotta transition-colors">
            {item.name}
          </h3>
          <span className="font-bold text-brand-terracotta whitespace-nowrap bg-brand-cream/50 px-2 py-1 rounded-md text-sm">
            {item.price}
          </span>
        </div>
        <p className="text-brand-espresso/70 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
