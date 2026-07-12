import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuSection from "@/components/MenuSection";
import Gallery from "@/components/Gallery";
import LocationHours from "@/components/LocationHours";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Gallery />
      <LocationHours />
      <CtaWhatsApp />
      <Footer />
    </main>
  );
}
