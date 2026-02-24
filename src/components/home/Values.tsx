'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Values() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
    const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

    return (
        <section ref={containerRef} className="py-32 lg:py-48 px-6 bg-cream relative z-10">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-24 items-start">
                    <div className="lg:col-span-5 lg:sticky lg:top-32">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-medium leading-[1.1] mb-12 font-serif"
                        >
                            A legislative voice for the <span className="italic text-brown-light">underrepresented.</span>
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col gap-8 text-brown-dark/70 font-light text-lg leading-relaxed max-w-md"
                        >
                            <p>
                                We are committed to fostering economic growth, ensuring social justice, and promoting educational excellence across Oklahoma.
                            </p>
                            <p>
                                Through strategic partnerships and relentless advocacy, we bridge the gap between community needs and legislative action.
                            </p>
                            <Link href="#" className="inline-flex items-center gap-4 mt-8 text-xs uppercase tracking-widest text-brown-dark font-medium hover:text-brown-light transition-colors group w-fit">
                                Our Mission
                                <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-2 font-light">arrow_right_alt</span>
                            </Link>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-7 flex flex-col gap-20">
                        <motion.div style={{ y: y1 }} className="relative w-full aspect-[3/4] lg:w-[80%] ml-auto group">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="object-cover absolute inset-0 w-full h-full contrast-125 transition-all duration-[1.5s] group-hover:scale-105"
                            >
                                <source src="/videos/oklahoma-city-aerial-orbit-of-capitol-dome-in-okc-2023-11-27-05-22-42-utc.mp4" type="video/mp4" />
                            </video>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white p-8 max-w-xs shadow-xl hidden md:block"
                            >
                                <span className="text-6xl font-serif text-brown-light">54</span>
                                <p className="text-xs uppercase tracking-widest mt-2 border-t border-brown-light/20 pt-4">Years of Legislative Service</p>
                            </motion.div>
                        </motion.div>

                        <motion.div style={{ y: y2 }} className="relative w-full aspect-square lg:w-[60%] mr-auto lg:-mt-32 z-10 group">
                            <div className="bg-brown flex w-full h-full absolute top-4 left-4 z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
                            <Image
                                src="/images/oklahoma-flag.jpg"
                                alt="Oklahoma State Flag"
                                fill
                                className="object-cover relative z-10 transition-all duration-[1.5s] "
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
