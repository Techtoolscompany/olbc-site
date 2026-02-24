'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-[85vh] flex flex-col justify-center items-center pt-32 px-6 overflow-hidden bg-brown-dark">

            {/* Video Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 w-full h-[120%] -top-[10%] z-0 pointer-events-none"
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover object-center w-full h-full opacity-30 mix-blend-screen"
                >
                    <source src="/videos/state-flag-of-oklahoma-waving-in-the-wind-2023-11-27-05-10-26-utc.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark via-brown-dark/60 to-transparent"></div>
            </motion.div>

            {/* Content */}
            <div className="w-full max-w-[1600px] mx-auto flex flex-col items-center justify-center text-center relative z-20">
                <motion.div
                    className="flex flex-col items-center z-20 relative text-cream"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-brown-light font-sans text-xs md:text-sm uppercase tracking-super-wide mb-8"
                    >
                        Oklahoma Legislative Black Caucus
                    </motion.span>

                    <h1 className="text-[12vw] sm:text-[9vw] md:text-7xl lg:text-[8rem] font-medium leading-[0.9] tracking-tight mb-10 font-serif max-w-5xl mx-auto">
                        <span className="block overflow-hidden pb-2 sm:pb-3">
                            <motion.span
                                initial={{ y: '100%', opacity: 0 }}
                                animate={{ y: '0%', opacity: 1 }}
                                transition={{ duration: 1, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
                                className="block"
                            >
                                Empowering <span className="italic font-light text-brown-light">Black</span> Oklahomans
                            </motion.span>
                        </span>
                    </h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="text-cream/80 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
                    >
                        We transform bold ideas into real-world solutions, supporting access to quality education, justice reform, economic empowerment, and health equity.
                    </motion.p>
                </motion.div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
                <div className="h-16 w-[1px] bg-brown-light/30 overflow-hidden relative">
                    <motion.div
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-full bg-accent"
                    />
                </div>
            </div>
        </section>
    );
}
