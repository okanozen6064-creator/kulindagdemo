"use client"

import { motion } from "framer-motion"
import { AlertCircle, Users, Sofa } from "lucide-react"

const infoItems = [
  {
    icon: AlertCircle,
    title: "Merdivenli Yapı",
    description: "Dağ evi yapısı gereği bazı alanlarda merdivenler bulunmaktadır.",
  },
  {
    icon: Users,
    title: "Aile Dostu",
    description: "Çocuklar için güvenli alanlar ve oyun yerleri bulunmaktadır.",
  },
  {
    icon: Sofa,
    title: "Pazartesi Kapalı",
    description: "Hafta sonu ve bayram günleri açık. Pazartesi günü kapalı.",
  },
]

export default function ImportantInfo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="py-16 md:py-24 px-4 bg-cream border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-primary mb-12 text-center"
        >
          Bilmeniz Gerekenler
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {infoItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-xl bg-light-cream border border-border/50 hover:border-sage/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sage/10 rounded-lg flex-shrink-0">
                    <Icon className="text-sage" size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-primary mb-2">{item.title}</h3>
                    <p className="font-sans text-sm text-foreground/70">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
