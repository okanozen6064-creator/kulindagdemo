"use client"

import { motion } from "framer-motion"

const signatureDishes = [
  {
    name: "Taş Fırında Köy Ekmeği",
    description: "Taze maya ve doğal malzemelerle hazırlanan, içi yumuşak dışı çıtır ekmeğimiz",
    image: "/images/stone-stairs-green.jpg",
  },
  {
    name: "Dağ Keçisinden Peynir",
    description: "Yerel dağ keçisinden elde edilen, taze ve besleyici peynir tabağımız",
    image: "/images/deck-view-snow.png",
  },
  {
    name: "Orman Gözlemesi",
    description: "Mevsim sebzeleri ve yerel malzemelerin yer aldığı, hafif ve lezzetli gözlemesi",
    image: "/images/main-lodge-winter.jpg",
  },
  {
    name: "Dağ Tavası",
    description: "Organik yumurta, dağ sebzeleri ve erzurum peynirinden hazırlanan sıcak porsiyon",
    image: "/images/cabin-winter.jpg",
  },
]

export default function MenuTeaser() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="menu" className="py-16 md:py-24 px-4 bg-cream relative overflow-hidden">
      {/* Subtle texture background */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%238c5e3c" fillOpacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: "120px 120px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4 text-balance">Odun Ateşinden Sofranıza</h2>
          <p className="font-sans text-lg text-foreground/70">Hafta sonu kahvaltıları ve özel akşam yemekleri</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {signatureDishes.map((dish, index) => (
            <motion.div key={index} variants={itemVariants} className="flex gap-4 group cursor-pointer">
              <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-sage/20 to-wood/10">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-serif text-lg text-primary mb-2">{dish.name}</h3>
                <p className="font-sans text-sm text-foreground/70">{dish.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="font-sans text-primary hover:text-primary/80 font-semibold transition-colors inline-flex items-center gap-2"
          >
            Tam Menüyü Gör →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
