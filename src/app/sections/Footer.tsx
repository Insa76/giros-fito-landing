import { motion } from "framer-motion"
import { Music2, Instagram, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/giros.fito" },
    { icon: Mail, href: "mailto:info@girosfito.com" },
  ]

  const links = [
    { label: "Inicio", id: "inicio" },
    { label: "Banda", id: "banda" },
    { label: "Galería", id: "galeria" },
    { label: "Contacto", id: "contacto" },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-background to-card/50 border-t border-border overflow-hidden">

      {/* Glow background */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ x: [0, 100, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">

        <div className="grid md:grid-cols-3 gap-12 mb-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Music2 className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Giros.Fito
              </span>
            </div>

            <p className="text-foreground/70 leading-relaxed">
              Tributo a Fito Páez. Reviviendo los clásicos del rock nacional argentino con pasión y autenticidad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl mb-4">Secciones</h4>

            <div className="space-y-2">
              {links.map((link) => (
                <button
                  key={link.id}
                  className="block text-foreground/70 hover:text-primary transition-colors"
                  onClick={() =>
                    document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xl mb-4">Seguinos</h4>

            <div className="flex gap-4 mb-4">
              {socialLinks.map((social, i) => {
                const Icon = social.icon

                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                )
              })}
            </div>

            <p className="text-sm text-foreground/60">
              Seguinos en Instagram para las últimas novedades.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
          <p className="flex items-center gap-2">
            © {currentYear} Giros.Fito · Hecho con
            <Heart className="w-4 h-4 text-secondary fill-secondary animate-pulse" />
          </p>

          <div className="flex gap-6">
            <button className="hover:text-primary transition-colors">Términos</button>
            <button className="hover:text-primary transition-colors">Privacidad</button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
    </footer>
  )
}
