"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
            <motion.h2
              variants={itemVariants}
              className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-primary text-balance"
            >
              Şehrin Yanı Başında, Doğanın Kalbinde
            </motion.h2>

            <motion.p variants={itemVariants} className="font-sans text-lg text-foreground/80 leading-relaxed max-w-md">
              İstanbul'un gürültüsünden uzak, orman manzaralı eşsiz bir kaçış noktası. Taş fırın lezzetleri ve dağ
              konaklama deneyimini bir arada sunuyoruz.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 border-2 border-primary text-primary font-sans font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                Menüyü İncele
              </button>
              <button className="px-8 py-3 bg-primary text-primary-foreground font-sans font-semibold rounded-full hover:bg-primary/90 transition-colors">
                Odalara Göz At
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Bento Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            id="gallery"
            className="grid grid-cols-2 gap-4"
          >
            {/* Large image - top left */}
            <div className="col-span-1 row-span-2">
              <div className="h-full rounded-2xl overflow-hidden bg-gradient-to-br from-sage/20 to-wood/10 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 via-wood/5 to-sage/10 flex items-center justify-center">
                  <img
                    src="/images/mountain-lodge-forest-view.jpg"
                    alt="Mountain Lodge Forest View"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Top right */}
            <div className="col-span-1">
              <div className="h-40 rounded-xl overflow-hidden bg-gradient-to-br from-wood/20 to-sage/10 flex items-center justify-center">
                <img src="/images/cozy-rustic-interior.jpg" alt="Rustic Interior" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Bottom right - split into 2 */}
            <div className="col-span-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-32 rounded-lg overflow-hidden bg-gradient-to-br from-sage/20 to-wood/10 flex items-center justify-center">
                  <img src="/images/stone-oven-bread.jpg" alt="Stone Oven" className="w-full h-full object-cover" />
                </div>
                <div className="h-32 rounded-lg overflow-hidden bg-gradient-to-br from-wood/20 to-sage/10 flex items-center justify-center">
                  <img
                    src="/images/mountain-autumn-landscape.jpg"
                    alt="Mountain Landscape"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="flex justify-center mt-16"
        >
          <ChevronDown className="text-sage" size={32} />
        </motion.div>
      </div>
    </section>
  )
}
