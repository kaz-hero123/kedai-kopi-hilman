import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import InteractiveCursor from "@/components/InteractiveCursor";
import SplashScreen from "@/components/SplashScreen";
import FloatingWA from "@/components/FloatingWA";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ruang Kopi - Ngopi santai, rasa rumah",
  description: "Kopi lokal pilihan, diseduh dengan cinta di sudut kotamu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${jakarta.variable} ${dmSerif.variable} scroll-smooth`}
    >
      <body className="antialiased min-h-screen bg-brand-cream text-brand-espresso font-sans">
        <SplashScreen />
        <InteractiveCursor />
        {children}
        <FloatingWA />
      </body>
    </html>
  );
}
