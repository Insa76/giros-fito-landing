import { motion } from "framer-motion"

export default function HeroTurntable() {
  return (
    <div className="absolute inset-0 flex items-center justify-center md:justify-start md:pl-52">
      <div className="relative w-[340px] md:w-[440px] h-[340px] md:h-[440px]">

        {/* PLATO / TOCADISCOS (ATRÁS) */}
        <img
          src="/hero/turntable.png"
          className="absolute inset-0 w-full h-full z-0 translate-x-10 translate-y-5"
        />

        {/* VINILO (UNO SOLO) */}
        <motion.img
          src="/hero/vinyl.png"
          className="absolute inset-0 w-full h-full z-10"
          initial={{ x: 20, y: 50, rotate: 0 }}
          animate={{
            x: 0,
            y: 0,
            rotate: 360,
          }}
          transition={{
            x: { duration: 1, ease: "easeOut" },
            y: { duration: 1, ease: "easeOut" },
            rotate: {
              delay: 1,          // empieza a girar después de caer
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />

        {/* COVER ENCIMA */}
        <motion.img
          src="/hero/cover.jpg"
          className="absolute w-[70%] h-[70%] left-10 top-20  z-20"
          initial={{ x: 0 }}
          animate={{ x: 500 }}
          transition={{
           duration: 3,
           ease: [0.22, 1, 0.36, 1] // easeOutExpo feel
          }}
          style={{
           filter: "drop-shadow(0 25px 45px rgba(151, 145, 145, 0.55))"
        }}
        />
      </div>
    </div>
  )
}
