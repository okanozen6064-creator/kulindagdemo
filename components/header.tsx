"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

const navigationItems = [
  { label: "Anasayfa", href: "#" },
  { label: "Konaklama", href: "#accommodation" },
  { label: "Menü", href: "#menu" },
  { label: "Galeri", href: "#gallery" },
  { label: "Ulaşım", href: "#contact" },
  { label: "İletişim", href: "#contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-cream/95 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-primary">KULİNDAĞ</h1>
            <p className="font-sans text-xs text-sage">Dağ Evi & Restaurant</p>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="font-sans text-sm text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="hidden md:inline-block px-6 py-2 bg-primary text-primary-foreground rounded-full font-sans text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Rezervasyon Yap
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col space-y-4 pt-6 pb-4 px-2">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-xl font-medium text-foreground hover:text-primary transition-colors py-1 block"
              >
                {item.label}
              </a>
            ))}
            <button className="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-full font-sans text-sm font-semibold hover:bg-primary/90 transition-colors">
              Rezervasyon Yap
            </button>
          </div>
        </motion.nav>
      </div>
    </header>
  )
}
