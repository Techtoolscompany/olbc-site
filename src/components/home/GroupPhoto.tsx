'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function GroupPhoto() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

    return (
        <section ref={containerRef} className="py-24 md:py-32 px-6 bg-cream overflow-hidden">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

                    {/* Text block (Left Column) */}
                    <div className="lg:col-span-5 flex flex-col justify-between group">
                        <div className="bg-brown/5 rounded-[2rem] p-10 md:p-14 h-full flex flex-col justify-center relative overflow-hidden">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="relative z-10"
                            >
                                <span className="text-sm font-sans uppercase tracking-widest text-brown-light mb-4 block">
                                    Our Leadership
                                </span>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brown-dark leading-[1.1] mb-6">
                                    Meet The <br /><span className="italic text-brown-light">Caucus</span>
                                </h2>
                                <p className="text-brown-dark/70 font-light text-lg leading-relaxed max-w-sm mb-10">
                                    United by purpose. Driven by the community. We are dedicated to translating the needs of our constituents into legislative action.
                                </p>

                                <Link
                                    href="/about"
                                    className="inline-flex items-center gap-3 bg-brown-dark text-cream px-8 py-4 rounded-full font-sans tracking-wide hover:bg-brown transition-colors duration-300 group/btn w-fit"
                                >
                                    <span>Learn More About Us</span>
                                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                </Link>
                            </motion.div>

                            {/* Decorative element */}
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brown-light/10 rounded-full blur-3xl group-hover:bg-brown-light/20 transition-colors duration-700"></div>
                        </div>
                    </div>

                    {/* Image block (Right Column) */}
                    <div className="lg:col-span-7 relative h-full min-h-[500px] md:min-h-[600px] rounded-[2rem] overflow-hidden group/img">
                        {/* Parallax Image Container */}
                        <motion.div style={{ y, scale }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                            <Image
                                src="/images/homepage-group-upscaled.jpg"
                                alt="The Oklahoma Legislative Black Caucus Members"
                                fill
                                quality={100}
                                priority
                                sizes="(max-width: 1024px) 100vw, 1024px"
                                className="object-cover object-[35%_25%] transition-all duration-[2s] group-hover/img:scale-[1.03]"
                            />
                        </motion.div>

                        {/* Gradient Overlay for sophisticated lighting */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-brown-dark/40 via-transparent to-transparent opacity-80 mix-blend-multiply pointer-events-none"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
