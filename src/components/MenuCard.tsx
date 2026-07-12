"use client";

import Image from "next/image";
import { MenuItem } from "@/lib/menu-data";

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-brand-espresso/10 group-hover:bg-transparent transition-colors duration-300"></div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start gap-4 mb-2">
          <h3 className="font-serif text-xl font-bold text-brand-espresso leading-tight">
            {item.name}
          </h3>
          <span className="font-bold text-brand-terracotta whitespace-nowrap">
            {item.price}
          </span>
        </div>
        <p className="text-brand-espresso/70 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}
