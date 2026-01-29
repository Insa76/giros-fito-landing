import { motion } from "framer-motion"

export default function HeroVinyl() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-5 pointer-events-none">

      <div className="relative w-[320px] md:w-[420px] h-[320px] md:h-[420px]">

        {/* VINILO */}
        <motion.img
          src="/hero/vinyl.png"
          className="absolute inset-0 w-full h-full z-0"
          initial={{ x: 0, rotate: 0 }}
          animate={{
            x: 200,         // sale
            rotate: 360,
          }}
          transition={{
            x: {
              duration: 1.2,
              ease: "easeOut",
            },
            rotate: {
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />

        {/* COVER (SE MUEVE AL LADO CONTRARIO) */}
        <motion.img
          src="/hero/cover.jpg"
          className="absolute inset-0 w-full h-full z-10"
          initial={{ x: 0 }}
          animate={{ x: -100 }}   // ← pequeño desplazamiento opuesto
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        />

      </div>
    </div>
  )
}
