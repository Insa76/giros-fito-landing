import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface AboutSectionProps {
  bandImage: string
}

export default function AboutSection({ bandImage }: AboutSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  /* ================================
     INTEGRANTES
  ================================= */

  const members = [
    {
      name: "Juan Pérez",
      role: "Voz & Piano",
      image: "/members/juan.jpg",
    },
    {
      name: "Lucas Gómez",
      role: "Guitarra",
      image: "/members/lucas.jpg",
    },
    {
      name: "Martín Ruiz",
      role: "Bajo",
      image: "/members/martin.jpg",
    },
    {
      name: "Diego López",
      role: "Batería",
      image: "/members/diego.jpg",
    },
  ]

  return (
    <section
      id="banda"
      ref={ref}
      className="py-24 px-6 relative overflow-hidden bg-background"
    >
      {/* ================================
         Glow background
      ================================= */}

      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ================================
           Título
        ================================= */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl mb-4 font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent inline-block">
            Sobre la Banda
          </h2>

          <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* ================================
           LAYOUT PRINCIPAL
        ================================= */}

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* FOTO GRANDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-30" />

            <img
              src={bandImage}
              alt="Giros.Fito banda completa"
              className="relative rounded-2xl shadow-2xl w-full h-[520px] object-cover"
            />
          </motion.div>

          {/* ================================
             TEXTO + CARDS
          ================================= */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10"
          >
            {/* TEXTO ORIGINAL */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-semibold">
                Reviviendo la Magia de Fito Páez
              </h3>

              <p className="text-foreground/80 leading-relaxed">
                Giros.Fito es más que una banda tributo; somos un grupo de músicos apasionados
                que compartimos el amor por la obra de uno de los grandes del rock argentino.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                Cada presentación es un viaje emocional a través de los hits que marcaron generaciones.
              </p>
            </div>

            {/* MINI CARDS INTEGRANTES */}
            <div className="grid grid-cols-4 gap-4">

              {members.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group relative bg-card border border-border rounded-xl overflow-hidden cursor-pointer shadow-md"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent" />
                  </div>

                  <div className="p-3 text-center">
                    <h4 className="text-sm font-semibold">
                      {member.name}
                    </h4>
                    <p className="text-xs text-foreground/60">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
