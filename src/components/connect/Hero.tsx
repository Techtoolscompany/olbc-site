'use client';

import { motion } from 'framer-motion';

export default function ConnectHero() {
    return (
        <section className="relative pt-40 pb-20 px-6 md:px-12 bg-brown-dark text-center overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <div className="max-w-[1200px] mx-auto relative z-10">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-xs uppercase tracking-super-wide text-brown-light mb-6 block"
                >
                    Get Involved
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif text-cream leading-[0.9] mb-8"
                >
                    Connect With Us
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-cream/70 leading-relaxed max-w-2xl mx-auto font-light"
                >
                    Whether you have a question about our legislative priorities or want to join our mailing list, we’d love to hear from you.
                </motion.p>
            </div>
        </section>
    );
}
