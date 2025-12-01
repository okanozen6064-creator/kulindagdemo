"use client";

import { motion } from "framer-motion";
import { Utensils, Coffee, Home, BedDouble, ArrowRight, Clock, MapPin } from "lucide-react";
import Image from "next/image";

const ServiceCard = ({ title, description, icon: Icon, link, image }: any) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="group relative overflow-hidden rounded-2xl border border-forest/10 bg-cream-light/50 hover:bg-cream-light transition-all duration-300 flex flex-col h-full"
    >
        <div className="relative h-48 w-full overflow-hidden">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 sepia-[.2]"
            />
            <div className="absolute inset-0 bg-forest/20 group-hover:bg-transparent transition-colors duration-300" />
        </div>

        <div className="p-8 flex flex-col flex-grow">
            <div className="w-12 h-12 rounded-full border border-forest/20 flex items-center justify-center mb-6 text-forest group-hover:bg-forest group-hover:text-cream transition-colors">
                <Icon strokeWidth={1} size={24} />
            </div>

            <h3 className="text-2xl font-serif text-forest mb-3">{title}</h3>
            <p className="text-charcoal/70 mb-6 flex-grow leading-relaxed">
                {description}
            </p>

            <a href={link} className="inline-flex items-center gap-2 text-sienna font-medium group-hover:translate-x-2 transition-transform">
                Detaylı İncele <ArrowRight size={16} />
            </a>
        </div>
    </motion.div>
);

export default function Features() {
    return (
        <section className="py-24 bg-cream-light">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-sienna font-medium tracking-widest uppercase text-sm mb-3 block">Deneyimler</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-forest mb-6">Doğanın Sundukları</h2>
                    <p className="text-charcoal/70">
                        İster günübirlik bir lezzet kaçamağı, ister yıldızların altında bir gece. Kulindağ'da her an size özel.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

                    {/* Restaurant Card */}
                    <div id="menu">
                        <ServiceCard
                            title="Restoran & Menü"
                            description="Hafta sonları zengin açık büfe kahvaltımızla güne başlayın, hafta içi ise şefimizin özel alakart menüsünün tadını çıkarın. Doğal ürünler, ev yapımı lezzetler."
                            icon={Utensils}
                            link="#menu-details"
                            image="/images/img4.jpg"
                        />
                    </div>

                    {/* Accommodation Card */}
                    <div id="accommodation">
                        <ServiceCard
                            title="Bungalov Konaklama"
                            description="Tamamen ahşap, doğayla bütünleşmiş bungalov evlerimizde huzurlu bir uykuya dalın. Şehrin ışıklarından uzakta, sadece doğanın sesleri."
                            icon={Home}
                            link="#room-details"
                            image="/images/img5.jpg"
                        />
                    </div>

                </div>

                {/* Info Grid (Bento Style) */}
                <div className="mt-16 grid md:grid-cols-3 gap-6">
                    <div className="p-8 rounded-2xl bg-forest text-cream flex flex-col justify-center items-center text-center">
                        <Clock strokeWidth={1} size={32} className="mb-4 text-sienna" />
                        <h4 className="font-serif text-xl mb-2">Çalışma Saatleri</h4>
                        <p className="text-cream/80 text-sm">
                            Hafta İçi: 09:00 - 22:00<br />
                            Hafta Sonu: 09:00 - 23:00
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl border border-forest/10 bg-white flex flex-col justify-center items-center text-center">
                        <Coffee strokeWidth={1} size={32} className="mb-4 text-forest" />
                        <h4 className="font-serif text-xl mb-2 text-forest">Kahvaltı Keyfi</h4>
                        <p className="text-charcoal/70 text-sm">
                            Cumartesi - Pazar<br />
                            09:30 - 13:30 Arası Açık Büfe
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl bg-sienna/10 border border-sienna/20 flex flex-col justify-center items-center text-center">
                        <MapPin strokeWidth={1} size={32} className="mb-4 text-sienna" />
                        <h4 className="font-serif text-xl mb-2 text-forest">Konum</h4>
                        <p className="text-charcoal/70 text-sm">
                            Mahmut Şevket Paşa Köyü<br />
                            Riva Yolu, Beykoz
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
