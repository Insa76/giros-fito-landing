import { motion } from "framer-motion"
import { Music2, Instagram } from "lucide-react"
import { useState, useEffect } from "react"

const items = [
  { id: "inicio", label: "Inicio" },
  { id: "banda", label: "Banda" },
  { id: "media", label: "En vivo" },
  { id: "contacto", label: "Contacto" }
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("inicio")}
        >
          <Music2 className="w-7 h-7 text-primary" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Giros.Fito
          </span>
        </motion.div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {items.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Social */}
        <motion.a
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          href="https://instagram.com/giros.fito"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/80 hover:text-secondary transition-colors"
        >
          <Instagram className="w-6 h-6" />
        </motion.a>
      </div>
    </motion.nav>
  )
}
