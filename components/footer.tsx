"use client"

import { motion } from "framer-motion"
import { Phone, MapPin, Mail, Instagram, Facebook, Twitter } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-xl mb-6">İletişim</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <div className="font-sans text-sm">
                  <p>Sapanca, Sakarya</p>
                  <p>Dağ Evi Mah., Orman Yolu 42</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0" />
                <a href="tel:+905551234567" className="font-sans text-sm hover:underline">
                  +90 555 123 45 67
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0" />
                <a href="mailto:info@kulindagdagevi.com" className="font-sans text-sm hover:underline">
                  info@kulindagdagevi.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-serif text-xl mb-6">Hızlı Linkler</h3>
            <ul className="space-y-3">
              {[
                { label: "Anasayfa", href: "#" },
                { label: "Konaklama", href: "#accommodation" },
                { label: "Menü", href: "#menu" },
                { label: "Galeri", href: "#gallery" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-sans text-sm hover:underline transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-serif text-xl mb-6">Bize Takip Edin</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="p-3 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="font-sans text-sm text-center text-primary-foreground/80">
            © 2025 Kulindağ Dağ Evi. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
