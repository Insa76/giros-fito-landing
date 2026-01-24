import { motion } from "framer-motion"
import { Play, Calendar } from "lucide-react"

interface HeroSectionProps {
  backgroundImage: string
}

export default function HeroSection({ backgroundImage }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Giros.Fito en vivo"
          className="w-full h-full object-cover"
        />

        {/* overlays usando theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />
      </div>

      {/* Partículas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6
                     bg-gradient-to-r from-primary via-secondary to-accent
                     bg-clip-text text-transparent"
        >
          GIROS.FITO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl text-foreground/90 mb-4"
        >
          Tributo a Fito Páez
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto"
        >
          Reviviendo los clásicos del rock nacional argentino con pasión y autenticidad
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 rounded-full bg-primary text-white flex items-center gap-2 shadow-lg"
          >
            <Calendar className="w-5 h-5" />
            Contrataciones
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document.getElementById("media")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 border border-border rounded-full flex items-center gap-2 hover:bg-card transition"
          >
            <Play className="w-5 h-5" />
            Ver Videos
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
