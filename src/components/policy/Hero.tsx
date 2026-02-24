'use client';

import { motion } from 'framer-motion';

export default function PolicyHero() {
    return (
        <section className="px-6 md:px-12 pb-24 pt-32 max-w-[1800px] mx-auto min-h-[60vh] flex flex-col justify-end">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                <div className="lg:col-span-8">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="block text-brown-light font-sans text-sm uppercase tracking-[0.2em] mb-6"
                    >
                        Legislative Agenda {new Date().getFullYear()}
                    </motion.span>
                    <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-brown-dark leading-[0.9] tracking-tight">
                        <motion.span
                            initial={{ opacity: 0, y: 50, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
                            animate={{ opacity: 1, y: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                            className="block"
                        >
                            Our
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 50, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
                            animate={{ opacity: 1, y: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                            transition={{ duration: 1, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
                            className="block italic font-light"
                        >
                            Priorities
                        </motion.span>
                    </h1>
                </div>
                <div className="lg:col-span-4 pb-2">
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-brown/80 text-lg leading-relaxed max-w-md ml-auto"
                    >
                        We are dedicated to dismantling systemic barriers through targeted legislation. Our focus is singular: building a future that serves everyone.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
