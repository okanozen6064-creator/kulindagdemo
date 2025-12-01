"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img1.jpg", // Repeating for demo
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-24 bg-cream">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-forest mb-4">Kulindağ'dan Kareler</h2>
                    <p className="text-charcoal/70 max-w-2xl mx-auto">
                        Her köşesi ayrı bir hikaye, her mevsimi ayrı bir tablo.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative rounded-xl overflow-hidden break-inside-avoid shadow-md hover:shadow-xl transition-shadow duration-300 group"
                        >
                            <Image
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                width={600}
                                height={400} // Aspect ratio will be handled by natural height in columns
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 sepia-[.1]"
                            />
                            <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/20 transition-colors duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
