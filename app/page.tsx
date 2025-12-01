// Kulindağ Landing Page - Updated Deployment
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import Gallery from "@/components/sections/Gallery";
import InfoSection from "@/components/sections/Info";
import ReservationCTA from "@/components/sections/ReservationCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream-light text-charcoal selection:bg-sienna/30">
      <Header />
      <Hero />
      <About />
      <Features />
      <Gallery />
      <InfoSection />
      <ReservationCTA />
      <Footer />
    </main>
  );
}
