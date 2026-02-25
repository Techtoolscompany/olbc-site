'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MissionHistory() {
    return (
        <section className="py-24 md:py-40 px-6 md:px-12 bg-cream">
            <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                {/* Text Content */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-serif text-brown-dark mb-10 leading-tight">
                            A Legacy of Leadership and Resilience
                        </h2>
                        <div className="flex flex-col gap-6 text-brown/80 text-lg leading-relaxed font-light">
                            <p>
                                The Oklahoma Legislative Black Caucus was established to be the steadfast voice for minority communities across the state. Our journey began with a commitment to address systemic inequalities and champion the rights of those often marginalized in the political process.
                            </p>
                            <p>
                                Today, we continue that vital work. We are a collective of dedicated public servants who believe that true progress is achieved through collaboration, unwavering conviction, and policies that uplift every Oklahoman—regardless of their background or zip code.
                            </p>
                            <p>
                                We stand on the shoulders of giants who fought for civil rights, and we carry that torch forward into the halls of the State Capitol, fighting for economic empowerment, justice reform, and educational excellence.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Imagery */}
                <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="relative aspect-[3/4] md:mt-24 h-[60vh] md:h-auto w-full md:w-auto overflow-hidden rounded-xl"
                    >
                        <Image
                            src="/images/okc-skyline.jpg"
                            alt="Oklahoma City Skyline"
                            fill
                            className="object-cover transition-all duration-700"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 40 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative aspect-[4/5] -mt-12 md:-mt-24 z-10 w-4/5 md:w-auto h-[60vh] md:h-auto overflow-hidden rounded-xl md:rounded-none shadow-2xl md:shadow-none mx-auto md:mx-0"
                    >
                        <Image
                            src="/images/ac-hamlin-real.jpg"
                            alt="A.C. Hamlin, First African-American legislator of Oklahoma"
                            fill
                            unoptimized={true}
                            className="object-cover object-[center_20%] transition-all duration-700"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
