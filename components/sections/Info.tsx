"use client";

import { MapPin, Bus, Info, Car } from "lucide-react";

export default function InfoSection() {
    return (
        <section id="transport" className="py-24 bg-cream-light relative">
            <div className="container mx-auto px-4">

                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Transport */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif text-forest mb-8">Nasıl Gelinir?</h2>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sienna/10 flex items-center justify-center text-sienna">
                                    <Car size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif text-forest mb-2">Özel Aracınızla</h3>
                                    <p className="text-charcoal/70 leading-relaxed">
                                        TEM otoyolundan Kavacık çıkışını kullanıp Riva yönüne ilerleyin. Mahmut Şevket Paşa tabelasından sağa dönün. Köy merkezinden Alibahadır yönüne devam ederken, mezarlığı geçtikten 100 metre sonra soldaki Kibrit Çıkmazı'na girin. 300 metre sonra Kulindağ sizi karşılayacak.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center text-forest">
                                    <Bus size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif text-forest mb-2">Toplu Taşıma İle</h3>
                                    <p className="text-charcoal/70 leading-relaxed">
                                        Beykoz merkezden kalkan <strong>136, 136R veya 136Z</strong> numaralı otobüsleri kullanabilirsiniz. Mahmut Şevket Paşa Köy Mezarlığı durağında indikten sonra, Alibahadır yönüne 200 metre yürüyüp soldaki Kibrit Çıkmazı'na girmeniz yeterli.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <a
                                href="https://goo.gl/maps/..."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-cream rounded-lg hover:bg-forest-light transition-colors"
                            >
                                <MapPin size={18} />
                                Haritada Görüntüle
                            </a>
                        </div>
                    </div>

                    {/* Need to Know */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl border border-forest/5 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <Info className="text-sienna" size={28} />
                            <h2 className="text-2xl md:text-3xl font-serif text-forest">Bilmeniz Gerekenler</h2>
                        </div>

                        <div className="space-y-6 text-charcoal/80 leading-relaxed">
                            <p>
                                Kulindağ, doğanın doğal eğimine saygı duyularak, ağaçların arasına gizlenmiş teraslar üzerine kurulmuştur. Bu özgün mimari, size eşsiz bir manzara sunarken, tesis içinde merdiven kullanımını gerektirmektedir.
                            </p>
                            <p>
                                Minik misafirlerimizin güvenliği bizim için çok önemli. Eğimli arazi yapımız nedeniyle çocuklarınızın her an gözetiminizde olmasını rica ederiz.
                            </p>
                            <p>
                                Doğal dokuyu korumak adına yaptığımız mimari tercihler nedeniyle, tesisimiz tekerlekli sandalye erişimine tam uygunluk gösterememektedir. Anlayışınız için teşekkür ederiz.
                            </p>
                            <div className="pt-4 border-t border-forest/10">
                                <p className="text-sm text-charcoal/60 italic">
                                    *Rezervasyonlarınızın kesinleşmesi için konaklama bedelinin bir hafta önceden iletilmesi gerekmektedir. Planlarınız değişirse, 48 saat öncesine kadar yapılan iptallerde iade yardımcı olabiliyoruz.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
