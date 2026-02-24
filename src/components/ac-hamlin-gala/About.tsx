'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GalaAbout() {
    return (
        <section className="py-24 md:py-40 px-6 md:px-12 bg-cream">
            <div className="max-w-[1800px] mx-auto flex flex-col gap-32">

                {/* About the Gala & Honoree */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="block text-xs uppercase tracking-super-wide text-brown-light mb-6">Our Legacy</span>
                            <h2 className="text-4xl md:text-6xl font-serif text-brown-dark mb-10 leading-tight">
                                Honoring Oklahoma's First Black Legislator
                            </h2>
                            <div className="flex flex-col gap-6 text-brown-dark/80 text-lg leading-relaxed font-light">
                                <p>
                                    The Oklahoma Legislative Black Caucus proudly presents its biennial A.C. Hamlin Scholarship Gala. This prestigious event honors the legacy of Oklahoma's first African-American legislator while raising critical scholarship funds for students attending Langston University, Oklahoma's only Historically Black College and University (HBCU).
                                </p>
                                <p>
                                    A.C. Hamlin was an exceptional leader who fought for civil rights and economic justice. His pioneering spirit broke barriers and paved the way for future generations. All proceeds from this distinguished evening directly benefit academic scholarships for deserving scholars.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-7 relative aspect-[16/9] w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1 }}
                            className="w-full h-full relative"
                        >
                            <Image
                                src="/images/AC Hamlin/1e-scaled.jpg"
                                alt="AC Hamlin Gala Event"
                                fill
                                className="object-cover transition-all duration-700 rounded-sm"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Event Highlights - Bento Grid */}
                <div className="flex flex-col gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-brown-dark mb-4">Event Highlights</h2>
                        <p className="text-brown-light text-lg font-light max-w-2xl mx-auto">Awards honoring outstanding Oklahomans and mission impact.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                            className="md:col-span-2 relative bg-brown-dark group overflow-hidden rounded-sm"
                        >
                            <Image src="/images/AC Hamlin/1e-scaled.jpg" alt="Awards" fill className="object-cover opacity-50 group-hover:scale-105 transition-all duration-700" />
                            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-brown-dark/90 to-transparent">
                                <h3 className="text-2xl font-serif text-accent mb-2">Chairman's Award</h3>
                                <p className="text-white/80 font-light">Recognizing an outstanding Oklahoman who has made significant contributions toward advancing progress in our state.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                            className="relative bg-brown-dark group overflow-hidden rounded-sm"
                        >
                            <Image src="/images/AC Hamlin/R5C_20071-scaled.jpg" alt="Medical Awards" fill className="object-cover opacity-40 transition-all duration-700 group-hover:opacity-60" />
                            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-brown-dark/90 to-transparent">
                                <h3 className="text-2xl font-serif text-accent mb-2">Medical Award</h3>
                                <p className="text-white/80 font-light">Honoring exceptional healthcare providers dedicated to improving outcomes.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative bg-brown-dark group overflow-hidden rounded-sm"
                        >
                            <Image src="/images/AC Hamlin/R5C_22201-scaled.jpg" alt="Scholars" fill className="object-cover opacity-40 transition-all duration-700 group-hover:opacity-60" />
                            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-brown-dark/90 to-transparent">
                                <h3 className="text-2xl font-serif text-accent mb-2">Mission Impact</h3>
                                <p className="text-white/80 font-light">Direct support for academic scholarships at Langston University.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
                            className="md:col-span-2 relative bg-brown-light group overflow-hidden rounded-sm flex items-center justify-center p-12 text-center"
                        >
                            <div className="relative z-10 flex flex-col items-center">
                                <h3 className="text-3xl font-serif text-brown-dark mb-4">Become a Sponsor</h3>
                                <p className="text-brown-dark/80 font-light mb-8 max-w-lg">
                                    Align your organization with a legacy of educational equity and connect with community leaders. Choose a sponsorship tier that suits your budget.
                                </p>
                                <a href="https://artemsemkin.com/asli/wp/contacts-03-form-fullscreen/" className="inline-block relative overflow-hidden bg-brown-dark text-white hover:text-white border border-transparent px-8 py-3 text-sm font-serif font-bold transition-colors duration-300 group/btn">
                                    <span className="relative z-10 transition-colors duration-300">Download Packet</span>
                                    <div className="absolute inset-0 bg-accent transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover/btn:scale-x-100 -z-0"></div>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}
