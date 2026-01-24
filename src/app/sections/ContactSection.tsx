import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Instagram, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const contactMethods = [
    {
      icon: Instagram,
      label: "@giros.fito",
      href: "https://instagram.com/giros.fito",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: Mail,
      label: "info@girosfito.com",
      href: "mailto:info@girosfito.com",
      color: "from-primary to-accent",
    },
    {
      icon: Phone,
      label: "+54 9 11 1234-5678",
      href: "tel:+5491112345678",
      color: "from-secondary to-primary",
    },
    {
      icon: MapPin,
      label: "Chaco, Argentina",
      href: "#",
      color: "from-accent to-secondary",
    },
  ]

  return (
    <section
      id="contacto"
      ref={ref}
      className="py-24 px-6 relative overflow-hidden bg-background"
    >
      {/* glow blobs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        animate={{ scale: [1.3, 1, 1.3], y: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent inline-block">
            Contacto
          </h2>

          <p className="mt-6 text-xl text-foreground/70">
            ¿Querés que toquemos en tu evento? ¡Escribinos!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <h3 className="text-2xl mb-6">Envianos un mensaje</h3>

            <form
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                placeholder="Nombre"
                className="w-full px-4 py-3 bg-background border border-border rounded-xl"
              />

              <input
                placeholder="Email"
                type="email"
                className="w-full px-4 py-3 bg-background border border-border rounded-xl"
              />

              <textarea
                rows={4}
                placeholder="Mensaje..."
                className="w-full px-4 py-3 bg-background border border-border rounded-xl resize-none"
              />

              <button className="w-full py-3 bg-primary text-white rounded-xl">
                Enviar
              </button>
            </form>
          </motion.div>

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="space-y-6"
          >
            {contactMethods.map((method, i) => {
              const Icon = method.icon

              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 bg-card border border-border rounded-xl p-4"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="text-white w-6 h-6" />
                  </div>

                  <span>{method.label}</span>
                </motion.a>
              )
            })}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
