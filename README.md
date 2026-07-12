# ☕ Ruang Kopi — Kedai Kopi Hilman

> **Ngopi santai, rasa rumah.**

Landing page untuk kedai kopi lokal — Ruang Kopi. Dibangun dengan Next.js, Tailwind CSS, dan Framer Motion untuk menghadirkan pengalaman digital yang hangat dan modern.

---

## ✨ Fitur

- 🏠 **Hero Section** — Full-screen hero dengan animasi Framer Motion
- 📖 **Cerita Kami** — Halaman tentang dengan highlight fitur kedai
- 🍵 **Menu Favorit** — Daftar menu minuman & camilan dengan tab kategori
- 📸 **Galeri** — Grid foto suasana kedai
- 📍 **Lokasi & Jam Buka** — Informasi lokasi lengkap dengan peta
- 💬 **CTA WhatsApp** — Tombol order langsung via WhatsApp
- 🧭 **Navbar Responsive** — Navigasi dengan scroll effect dan mobile menu
- 🦶 **Footer** — Informasi kontak dan media sosial

## 🛠️ Tech Stack

| Teknologi | Versi | Kegunaan |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.x | Framework React (App Router) |
| [React](https://react.dev) | 19.x | UI Library |
| [TypeScript](https://www.typescriptlang.org) | 5.x | Type Safety |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Utility-first CSS |
| [Framer Motion](https://www.framer.com/motion) | 12.x | Animasi & transisi |
| [Lucide React](https://lucide.dev) | 1.x | Ikon |

## 🚀 Getting Started

### Prasyarat

- Node.js 18+ 
- npm / yarn / pnpm

### Instalasi

```bash
# Clone repository
git clone https://github.com/kaz-hero123/kedai-kopi-hilman.git
cd kedai-kopi-hilman

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build untuk Produksi

```bash
npm run build
npm run start
```

## 📁 Struktur Proyek

```
kedai-kopi-hilman/
├── public/
│   └── images/          # Aset gambar (hero, menu, galeri, about)
├── src/
│   ├── app/
│   │   ├── globals.css  # Design tokens & brand colors
│   │   ├── layout.tsx   # Root layout (font, metadata)
│   │   └── page.tsx     # Halaman utama
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── MenuSection.tsx
│   │   ├── MenuCard.tsx
│   │   ├── Gallery.tsx
│   │   ├── LocationHours.tsx
│   │   ├── CtaWhatsApp.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── menu-data.ts # Data menu (harga, nama, deskripsi)
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind via postcss.config.mjs
```

## 🎨 Design System

| Token | Warna | Kegunaan |
|---|---|---|
| `brand-espresso` | `#2C1C10` | Teks utama, background gelap |
| `brand-terracotta` | `#C65D3E` | Aksen, CTA, hover |
| `brand-cream` | `#F5ECD7` | Background utama |
| `brand-sage` | `#7A9B6D` | Aksen hijau |
| `brand-cinnamon` | `#D4A574` | Aksen cokelat muda |

**Font:** Plus Jakarta Sans (body) + DM Serif Display (heading)

## 📄 Lisensi

Proyek ini bersifat privat. Hak cipta © 2026 Kedai Kopi Hilman.

---

Dibuat dengan ☕ dan ❤️
