'use client';

import { motion } from 'framer-motion';

export default function NewsHero() {
    return (
        <section className="px-6 md:px-12 pb-24 pt-40 max-w-[1800px] mx-auto min-h-[50vh] flex flex-col justify-end border-b border-brown/10">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
                <div className="lg:w-2/3">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="block text-brown-light font-sans text-sm uppercase tracking-[0.2em] mb-6"
                    >
                        Editorial, News &amp; Press
                    </motion.span>
                    <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-brown-dark leading-[0.9] tracking-tight">
                        <motion.span
                            initial={{ opacity: 0, y: 50, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
                            animate={{ opacity: 1, y: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                            className="block"
                        >
                            The
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 50, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
                            animate={{ opacity: 1, y: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                            transition={{ duration: 1, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
                            className="block italic font-light"
                        >
                            Briefing
                        </motion.span>
                    </h1>
                </div>
                <div className="lg:w-1/3 pb-2 flex justify-start lg:justify-end w-full">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex gap-4 border-b border-brown-dark/20 pb-2 w-full max-w-xs"
                    >
                        <span className="material-symbols-outlined text-brown-light">search</span>
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="bg-transparent border-none outline-none text-brown-dark placeholder:text-brown/40 w-full text-sm font-medium tracking-wide"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
