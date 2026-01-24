import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { X, ZoomIn } from "lucide-react"

interface GallerySectionProps {
  images: string[]
}

export default function GallerySection({ images }: GallerySectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="galeria"
      ref={ref}
      className="py-24 px-6 relative overflow-hidden bg-background"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent inline-block">
            Galería
          </h2>

          <p className="mt-6 text-xl text-foreground/70">
            Momentos inolvidables de nuestras presentaciones
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedImage(index)}
            >
              {/* Glow border */}
              <motion.div
                className="absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 blur-md
                           bg-gradient-to-r from-primary via-secondary to-accent"
              />

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-2xl aspect-square bg-card border border-border"
              >
                <img
                  src={image}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <ZoomIn className="w-10 h-10 text-white" />
                </div>
              </motion.div>
            </motion.div>
          ))}

        </div>

        {/* LIGHTBOX */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-lg z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              whileHover={{ rotate: 90 }}
              className="absolute top-6 right-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X />
            </motion.button>

            <img
              src={images[selectedImage]}
              className="max-h-[80vh] rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}
