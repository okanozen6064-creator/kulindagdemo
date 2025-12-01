"use client"

import { motion } from "framer-motion"

const rooms = [
  {
    name: "Teras Oda",
    description: "Orman manzaralı balkonlu, rahat ve ferah bir alan. 2 kişi için ideal.",
    features: ["Balkon", "Şömineye Sahip", "Banyo Takımı"],
    image: "/images/cabins-on-hill.jpg",
  },
  {
    name: "Dağ Evi Suit",
    description: "Bağımsız yaşam alanı ve özel havuzlu, lüks dinlenme deneyimi.",
    features: ["Oturma Alanı", "Özel Havuz", "Şömineye Sahip"],
    image: "/images/cabin-winter.jpg",
  },
]

export default function Accommodation() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="accommodation" className="py-16 md:py-24 px-4 bg-light-cream">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-primary mb-12 text-center"
        >
          Konaklama
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-2xl overflow-hidden bg-background shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="h-64 overflow-hidden bg-gradient-to-br from-sage/20 to-wood/10">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 md:p-8">
                <h3 className="font-serif text-2xl text-primary mb-3">{room.name}</h3>
                <p className="font-sans text-foreground/70 mb-6 leading-relaxed">{room.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {room.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-sans rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="font-sans font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                >
                  Detaylı Bilgi →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
