import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import Features from "@/components/features"
import EventHighlights from "@/components/event-highlights"
import Registration from "@/components/registration"
import Sponsors from "@/components/sponsors"
import FAQ from "@/components/faq"
import AboutUs from "@/components/about-us"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f1729] relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <Features />
        <EventHighlights />
        <Registration />
        <Sponsors />
        <FAQ />
        <AboutUs />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

