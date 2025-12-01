"use client"

import { motion } from "framer-motion"
import { Mountain, UtensilsCrossed, Leaf } from "lucide-react"

const values = [
  {
    icon: Mountain,
    title: "Eşsiz Manzara",
    description: "Orman içinde konumlanmış, doğayla iç içe bir yaşam deneyimi",
  },
  {
    icon: UtensilsCrossed,
    title: "Taş Fırın Lezzetleri",
    description: "Geleneksel yöntemlerle hazırlanan, mevsime uygun menü",
  },
  {
    icon: Leaf,
    title: "Doğa ile İç İçe",
    description: "Saf hava, yeşil ormanlar ve huzur sizleri bekliyor",
  },
]

export default function ValueProposition() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-16 md:py-24 px-4 bg-light-cream border-t border-b border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="p-4 bg-primary/10 rounded-full">
                  <Icon className="text-primary" size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-primary">{value.title}</h3>
                <p className="font-sans text-sm text-foreground/70 leading-relaxed">{value.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
