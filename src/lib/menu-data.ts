export type MenuItem = {
  id: string;
  name: string;
  price: string;
  description: string;
  category: "minuman" | "camilan";
  image: string;
  isBestSeller?: boolean;
};

export const menuData: MenuItem[] = [
  {
    id: "m1",
    name: "Es Kopi Susu Gula Aren",
    price: "Rp 22.000",
    description: "Espresso, susu segar, gula aren asli — manis natural",
    category: "minuman",
    image: "/images/menu-1.webp",
    isBestSeller: true,
  },
  {
    id: "m2",
    name: "Matcha Latte",
    price: "Rp 28.000",
    description: "Matcha Jepang premium dengan susu oat pilihan",
    category: "minuman",
    image: "/images/menu-1.webp",
  },
  {
    id: "m3",
    name: "Kopi Hitam Manual Brew",
    price: "Rp 18.000",
    description: "Single origin, V60 pour-over, rasa bersih dan jernih",
    category: "minuman",
    image: "/images/menu-1.webp",
  },
  {
    id: "c1",
    name: "Roti Bakar Cokelat Keju",
    price: "Rp 15.000",
    description: "Roti panggang renyah, cokelat leleh + keju gurih",
    category: "camilan",
    image: "/images/menu-1.webp",
    isBestSeller: true,
  },
  {
    id: "c2",
    name: "Pisang Goreng Keju",
    price: "Rp 12.000",
    description: "Pisang raja goreng crispy, taburan keju cheddar",
    category: "camilan",
    image: "/images/menu-1.webp",
  },
  {
    id: "c3",
    name: "Croissant Butter",
    price: "Rp 25.000",
    description: "Croissant flaky, butter premium, dipanggang fresh",
    category: "camilan",
    image: "/images/menu-1.webp",
  }
];
