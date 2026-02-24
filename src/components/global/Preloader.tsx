'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Force preloader for 2 seconds to act as intro animation
        const timer = setTimeout(() => {
            setIsLoading(false);
            window.scrollTo(0, 0); // Ensure page starts at top
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                    className="fixed inset-0 z-[100] bg-brown-dark flex items-center justify-center pointer-events-none"
                >
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: '100%' }}
                            animate={{ y: '0%' }}
                            exit={{ y: '-100%', opacity: 0 }}
                            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                            className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream flex items-center gap-4 tracking-tight"
                        >
                            <span>Oklahoma</span>
                            <span className="italic font-light text-brown-light">Legislative</span>
                            <span>Black</span>
                            <span className="text-accent">Caucus</span>
                        </motion.h1>
                    </div>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute bottom-10 left-10 right-10 h-[1px] bg-cream/20 origin-left"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
