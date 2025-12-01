"use client";

import { motion } from "framer-motion";

export default function ReservationCTA() {
    return (
        <section id="reservation" className="py-24 bg-forest relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4F1DE 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-cream mb-6">Yeriniz Hazır Mı?</h2>
                    <p className="text-cream/80 text-lg max-w-2xl mx-auto mb-10">
                        Doğanın kalbinde, huzur dolu bir deneyim için rezervasyonunuzu hemen yapın. İster kahvaltı, ister konaklama...
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="tel:+902164333333"
                            className="px-8 py-4 bg-sienna text-cream rounded-full font-medium hover:bg-sienna-light transition-colors shadow-lg"
                        >
                            Hemen Ara: (0216) 433 33 33
                        </a>
                        <a
                            href="mailto:info@kulindag.com"
                            className="px-8 py-4 bg-transparent border border-cream/30 text-cream rounded-full font-medium hover:bg-cream/10 transition-colors"
                        >
                            E-posta Gönder
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
