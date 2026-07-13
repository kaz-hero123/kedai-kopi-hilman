"use client";

import Link from "next/link";
import { Coffee, Send } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-espresso pt-20 pb-10 text-brand-cream border-t border-brand-cinnamon/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Coffee className="w-8 h-8 text-brand-terracotta" />
              <span className="font-serif text-3xl font-bold tracking-wide">
                Ruang Kopi
              </span>
            </Link>
            <p className="text-brand-cream/70 leading-relaxed max-w-sm mb-6">
              Kopi enak dengan harga bersahabat. Buka setiap hari untuk menemani waktu santaimu.
            </p>
            <form className="relative max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Langganan promo via email" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-5 pr-12 text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand-terracotta/50 transition-colors"
              />
              <button 
                type="submit" 
                className="absolute right-1 top-1 bottom-1 bg-brand-terracotta text-white rounded-full w-10 flex items-center justify-center hover:bg-brand-terracotta/90 transition-colors"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
          
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-serif text-xl font-bold mb-6 text-white">Navigasi</h4>
            <ul className="space-y-4">
              <li><Link href="#tentang" className="text-brand-cream/70 hover:text-brand-terracotta transition-colors">Tentang Kami</Link></li>
              <li><Link href="#menu" className="text-brand-cream/70 hover:text-brand-terracotta transition-colors">Menu Favorit</Link></li>
              <li><Link href="#galeri" className="text-brand-cream/70 hover:text-brand-terracotta transition-colors">Suasana Kedai</Link></li>
              <li><Link href="#lokasi" className="text-brand-cream/70 hover:text-brand-terracotta transition-colors">Lokasi & Jam Buka</Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="font-serif text-xl font-bold mb-6 text-white">Kontak</h4>
            <ul className="space-y-4">
              <li className="text-brand-cream/70">
                <span className="block text-white mb-1">WhatsApp</span>
                <a href="https://wa.me/6281122334455" target="_blank" rel="noopener noreferrer" className="hover:text-brand-terracotta transition-colors">
                  0811-2233-4455
                </a>
              </li>
              <li className="text-brand-cream/70">
                <span className="block text-white mb-1">Email</span>
                <a href="mailto:hello@ruangkopi.id" className="hover:text-brand-terracotta transition-colors">
                  hello@ruangkopi.id
                </a>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="font-serif text-xl font-bold mb-6 text-white">Ikuti Kami</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-brand-cream/10 flex items-center justify-center hover:bg-brand-terracotta hover:text-white transition-all text-brand-cream hover:-translate-y-1 shadow-lg"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-brand-cream/10 flex items-center justify-center hover:brand-terracotta hover:bg-brand-terracotta hover:text-white transition-all text-brand-cream hover:-translate-y-1 shadow-lg"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-brand-cream/50 text-sm">
          <p>&copy; {currentYear} Ruang Kopi. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
