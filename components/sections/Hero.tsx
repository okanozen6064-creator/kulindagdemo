"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-cream-light">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-xl z-10"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-forest/5 text-forest text-xs font-semibold tracking-wider mb-6 uppercase">
                        İstanbul'un Saklı Cenneti
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-forest leading-[1.1] mb-8">
                        Şehrin Yanı Başında, <span className="italic text-sienna">Doğanın Kalbinde.</span>
                    </h1>
                    <p className="text-lg text-charcoal/80 mb-10 leading-relaxed max-w-md">
                        Riva'nın huzurlu tepelerinde, kuş sesleri ve orman kokusu eşliğinde unutulmaz bir kaçış deneyimi.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            href="#reservation"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 bg-forest text-cream rounded-[2rem] font-medium flex items-center gap-2 shadow-xl shadow-forest/20 hover:bg-forest-light transition-colors"
                        >
                            Rezervasyon Yap
                            <ArrowRight size={18} />
                        </motion.a>
                        <motion.a
                            href="#menu"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 bg-transparent border border-forest/20 text-forest rounded-[2rem] font-medium hover:bg-forest/5 transition-colors"
                        >
                            Menüyü İncele
                        </motion.a>
                    </div>
                </motion.div>

                {/* Image Composition */}
                <div className="relative h-[600px] w-full hidden lg:block">
                    {/* Main Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute top-10 right-10 w-3/4 h-[400px] rounded-2xl overflow-hidden shadow-2xl rotate-3 z-10"
                    >
                        <Image
                            src="/images/img1.jpg"
                            alt="Kulindağ Manzara"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>

                    {/* Secondary Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="absolute bottom-20 left-0 w-1/2 h-[300px] rounded-2xl overflow-hidden shadow-xl -rotate-6 z-20 border-4 border-cream-light"
                    >
                        <Image
                            src="/images/img2.jpg"
                            alt="Bungalov Detay"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-sienna/10 rounded-full blur-3xl -z-10" />
                    <div className="absolute bottom-0 left-20 w-72 h-72 bg-forest/10 rounded-full blur-3xl -z-10" />
                </div>
            </div>
        </section>
    );
}
