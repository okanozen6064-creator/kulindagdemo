"use client"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ValueProposition from "@/components/value-proposition"
import MenuTeaser from "@/components/menu-teaser"
import Accommodation from "@/components/accommodation"
import ImportantInfo from "@/components/important-info"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <MenuTeaser />
        <Accommodation />
        <ImportantInfo />
      </main>
      <Footer />
    </div>
  )
}
