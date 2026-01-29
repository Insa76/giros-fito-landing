import HeroSection from "@/app/sections/HeroSection"
import AboutSection from "@/app/sections/AboutSection"
import GallerySection from "@/app/sections/GallerySection"
//import MediaSection from "@/app/sections/MediaSection"
import ContactSection from "@/app/sections/ContactSection"
import Footer from "@/app/sections/Footer"
import Navigation from "@/app/components/layout/Navigation"

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
]

export default function Landing() {
const heroImage = "/fitos.png"
const bandImage = "/band.jpeg"

  return (
    <main className="font-sans">
      <Navigation />
      <HeroSection backgroundImage={heroImage} />
      <AboutSection bandImage={bandImage} /> 
      <GallerySection images={images} />
      
      <ContactSection />
      <Footer />
    </main>
  )
}
