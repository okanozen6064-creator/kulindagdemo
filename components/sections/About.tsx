"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-24 bg-cream relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image Area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/img3.jpg"
                                alt="Kulindağ Atmosfer"
                                fill
                                className="object-cover sepia-[.15]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent mix-blend-multiply" />
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cream-light rounded-full flex items-center justify-center p-2 shadow-xl animate-spin-slow">
                            <div className="w-full h-full border border-dashed border-forest rounded-full flex items-center justify-center text-center">
                                <span className="text-xs font-serif font-bold text-forest uppercase tracking-widest">
                                    Doğal<br />Yaşam
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Area */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-forest mb-8">
                            Ruhunuzu Dinlendiren <br />
                            <span className="text-sienna italic">Bir Kaçış Hikayesi.</span>
                        </h2>
                        <div className="space-y-6 text-charcoal/80 text-lg leading-relaxed font-light">
                            <p>
                                Şehrin gürültüsünden uzak, sadece rüzgarın ağaç yapraklarında bıraktığı melodiyi duyabileceğiniz bir yer hayal edin. Kulindağ, doğanın en saf halini modern bir konforla buluşturuyor.
                            </p>
                            <p>
                                Her sabah kuş sesleriyle uyanıp, orman manzarasına karşı kahvenizi yudumlayabileceğiniz, akşamları ise yıldızların altında huzuru hissedebileceğiniz butik bir deneyim sunuyoruz.
                            </p>
                            <p>
                                Ahşabın sıcaklığı, toprağın kokusu ve şefimizin özenle hazırladığı lezzetler... Burada zaman biraz daha yavaş akıyor, anın tadı damağınızda kalıyor.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
