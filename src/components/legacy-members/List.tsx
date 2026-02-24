'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';

const legacyMembers = [
    { name: "Monroe Nichols", image: "/images/legacy/monroe-nichols.jpg" },
    { name: "Jason Lowe", image: "/images/legacy/jason-lowe.jpg" },
    { name: "George Young", image: null },
    { name: "Mauree Turner", image: "/images/legacy/mauree-turner.jpg" },
    { name: "Marilyn Bell", image: null },
    { name: "Anastasia Pittman", image: "/images/legacy/anastasia-pittman.jpg" },
    { name: "T.W. Shannon", image: "/images/legacy/tw-shannon.jpg" },
    { name: "Kevin Matthews", image: "/images/legacy/kevin-matthews.jpg" },
    { name: "Constance Johnson", image: "/images/legacy/constance-johnson.jpg" },
    { name: "Mike Shelton", image: null },
    { name: "Angela Monson", image: null },
    { name: "Judy McIntyre", image: "/images/legacy/judy-mcintyre.jpg" }
];

export default function LegacyList() {
    return (
        <section className="py-32 px-6 md:px-12 bg-cream">
            <div className="max-w-[1600px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center mb-32"
                >
                    <p className="text-xl md:text-2xl font-sans text-brown-dark leading-relaxed font-light">
                        The Oklahoma Legislative Black Caucus honors the trailblazers whose vision and courage paved the way for today’s leaders. From A.C. Hamlin—Oklahoma’s first Black legislator in 1908—to the bipartisan founders of 2012, these legacy members set a standard of resilience and service. Their groundbreaking work in education, justice reform, economic empowerment, and healthcare access continues to guide the Caucus’s mission. As we celebrate their contributions, we recommit to carrying their torch forward, ensuring every new initiative builds on a foundation of equity and community.
                    </p>
                </motion.div>

                {/* Legacy Members Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {legacyMembers.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.05 }}
                            className="group relative overflow-hidden bg-brown/5 rounded-[2rem] aspect-[3/4] cursor-pointer border border-brown/10 hover:border-transparent transition-all duration-500"
                        >
                            {member.image ? (
                                <>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        unoptimized={true}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover object-top transition-all duration-[1.5s] ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/95 via-brown-dark/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-2 drop-shadow-md">Legacy Member</span>
                                        <h3 className="text-2xl font-serif text-white group-hover:italic transition-all duration-500">{member.name}</h3>
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 h-1.5 bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 z-10 ease-in-out"></div>
                                </>
                            ) : (
                                <div className="absolute inset-0 p-8 flex flex-col items-center justify-center bg-brown-dark group-hover:bg-brown transition-colors duration-500">
                                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">Legacy Member</span>
                                    <h3 className="text-3xl font-serif text-cream text-center group-hover:italic transition-all duration-500">{member.name}</h3>
                                    <div className="w-12 h-px bg-brown mt-8 group-hover:bg-accent transition-colors duration-500"></div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
