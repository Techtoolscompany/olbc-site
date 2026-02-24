'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import Image from 'next/image';

export default function AboutHero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-[70vh] flex flex-col justify-end pb-24 px-6 md:px-12 pt-40 overflow-hidden bg-brown-dark">
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover object-center w-full h-full opacity-60 mix-blend-screen grayscale"
                >
                    <source src="/videos/oklahoma-city-aerial-orbit-of-capitol-dome-in-okc-2023-11-27-05-22-42-utc.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark via-brown-dark/40 to-transparent"></div>
            </motion.div>

            <div className="relative z-10 max-w-[1800px] mx-auto w-full">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="block text-brown-light font-sans text-xs uppercase tracking-super-wide mb-6"
                >
                    Our Mission
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-9xl font-serif text-cream leading-[0.9] tracking-tight max-w-5xl"
                >
                    Advancing <span className="italic font-light text-brown-light">Equity</span> & Opportunity
                </motion.h1>
            </div>
        </section>
    );
}
