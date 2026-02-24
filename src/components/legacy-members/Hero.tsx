'use client';

import { motion } from 'framer-motion';

export default function LegacyHero() {
    return (
        <section className="relative pt-48 pb-32 px-6 md:px-12 bg-brown-dark overflow-hidden flex flex-col items-center justify-center min-h-[60vh]">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 w-full h-full opacity-30 bg-brown mix-blend-multiply pointer-events-none"></div>

            <div className="container mx-auto max-w-5xl relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <span className="inline-block text-accent text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] lg:tracking-[0.4em] mb-8">
                        Honoring Our Trailblazers
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif text-cream leading-tight mb-16">
                        OLBC Legacy Members
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                    className="relative max-w-4xl mx-auto py-12 px-8 md:px-16"
                >
                    <span className="absolute top-0 left-0 text-[120px] text-brown-light opacity-20 font-serif leading-none">"</span>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-cream/90 leading-relaxed italic relative z-10 pt-4">
                        A legacy is not what we leave behind in monuments, but the lives we’ve touched and the progress we inspire.
                    </p>
                    <span className="absolute bottom-0 right-0 md:-right-8 text-[120px] text-brown-light opacity-20 font-serif leading-none mt-4 rotate-180">"</span>
                </motion.div>
            </div>
        </section>
    );
}
