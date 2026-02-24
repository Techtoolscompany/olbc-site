'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Journal() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);
    const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '5%']);

    return (
        <section ref={containerRef} className="py-32 px-6 bg-white overflow-hidden relative z-10">
            <div className="max-w-[1600px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-between items-end mb-16"
                >
                    <h2 className="text-3xl font-serif text-brown-dark">Journal</h2>
                    <Link href="/news" className="text-xs uppercase tracking-widest text-brown-dark hover:text-brown-light transition-colors group flex items-center gap-2">
                        View All
                        <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">

                    {/* Featured Article - Large Bento Block */}
                    <motion.article
                        style={{ y: y1 }}
                        className="md:col-span-2 md:row-span-2 group cursor-pointer relative overflow-hidden bg-brown-dark rounded-sm"
                    >
                        <Image
                            src="/images/news/news-1.png"
                            alt="Protecting Oklahoma's Young Voices Online"
                            fill
                            className="object-cover transition-all duration-700 ease-out group-hover:scale-105 opacity-60 "
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/90 via-brown-dark/30 to-transparent flex flex-col justify-end p-8 md:p-12">
                            <span className="text-xs uppercase tracking-super-wide text-accent mb-4 block">Feb 10, 2026</span>
                            <h3 className="text-3xl lg:text-5xl font-serif leading-tight text-white group-hover:italic transition-all duration-500 max-w-2xl">
                                Recognizing Black History Month at the Capitol
                            </h3>
                            <div className="mt-8 flex items-center gap-3 text-white text-sm tracking-wider uppercase font-medium overflow-hidden">
                                <span className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">Read Full Story</span>
                                <span className="material-symbols-outlined transform -translate-x-8 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500">arrow_right_alt</span>
                            </div>
                        </div>
                    </motion.article>

                    {/* Secondary Article - Top Right Square */}
                    <motion.article
                        style={{ y: y2 }}
                        className="md:col-span-1 md:row-span-1 group cursor-pointer relative overflow-hidden bg-brown-dark rounded-sm"
                    >
                        <Image
                            src="/images/news/news-2.png"
                            alt="Exposing Adversaries and Strengthening Our Courts"
                            fill
                            className="object-cover transition-all duration-[1.5s] group-hover:scale-105 opacity-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/90 to-transparent flex flex-col justify-end p-8">
                            <span className="text-[10px] uppercase tracking-super-wide text-accent mb-3 block">Feb 18, 2026</span>
                            <h3 className="text-xl lg:text-2xl font-serif text-white group-hover:italic transition-all duration-300">
                                OLBC Honors the Legacy of Rev. Jesse Jackson
                            </h3>
                        </div>
                    </motion.article>

                    {/* Tertiary Article - Bottom Right Text-Only Square */}
                    <motion.article
                        style={{ y: y2 }}
                        className="md:col-span-1 md:row-span-1 group cursor-pointer relative bg-brown-light overflow-hidden rounded-sm flex flex-col justify-between p-8"
                    >
                        <div className="absolute inset-0 bg-brown opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                        <div>
                            <span className="text-[10px] uppercase tracking-super-wide text-brown-dark block mb-4 border-b border-brown-dark/20 pb-4">Nov 24, 2025</span>
                            <h3 className="text-2xl font-serif text-brown-dark group-hover:text-white transition-colors duration-300">
                                Mourning the Passing of Viola Fletcher, Tulsa Race Massacre Survivor
                            </h3>
                        </div>
                        <span className="inline-block text-xs font-medium uppercase tracking-widest text-brown-dark group-hover:text-white transition-colors mt-auto">
                            Read Article &rarr;
                        </span>
                    </motion.article>

                </div>
            </div>
        </section>
    );
}
