import Link from "next/link";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-forest text-cream py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-12">

                    {/* Brand */}
                    <div>
                        <h3 className="text-3xl font-serif font-bold mb-6">Kulindağ</h3>
                        <p className="text-cream/70 leading-relaxed mb-6">
                            Şehrin karmaşasından uzak, doğanın kalbinde huzurlu bir sığınak. Lezzet ve konforun buluşma noktası.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-sienna transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-sienna transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xl font-serif font-bold mb-6">İletişim</h4>
                        <ul className="space-y-4 text-cream/80">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-sienna mt-1" />
                                <span>Mahmut Şevket Paşa Köyü,<br />Kibrit Çıkmazı No:6<br />Beykoz / İstanbul</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-sienna" />
                                <a href="tel:+902161234567" className="hover:text-sienna transition-colors">+90 (216) 433 33 33</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-sienna" />
                                <a href="mailto:info@kulindag.com" className="hover:text-sienna transition-colors">info@kulindag.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-serif font-bold mb-6">Hızlı Erişim</h4>
                        <ul className="space-y-3 text-cream/80">
                            <li><Link href="#hero" className="hover:text-sienna transition-colors">Anasayfa</Link></li>
                            <li><Link href="#menu" className="hover:text-sienna transition-colors">Menü & Restoran</Link></li>
                            <li><Link href="#accommodation" className="hover:text-sienna transition-colors">Konaklama</Link></li>
                            <li><Link href="#gallery" className="hover:text-sienna transition-colors">Galeri</Link></li>
                            <li><Link href="#transport" className="hover:text-sienna transition-colors">Ulaşım</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-cream/10 mt-12 pt-8 text-center text-cream/40 text-sm">
                    <p>&copy; {new Date().getFullYear()} Kulindağ Dağ Evi. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
}
