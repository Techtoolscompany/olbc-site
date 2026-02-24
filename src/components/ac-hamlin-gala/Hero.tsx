'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function GalaHero() {
 const containerRef = useRef<HTMLElement>(null);
 const { scrollYProgress } = useScroll({
 target: containerRef,
 offset: ['start start', 'end start'],
 });

 const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
 const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

 return (
 <section ref={containerRef} className="relative min-h-screen flex flex-col justify-end pb-24 px-6 md:px-12 pt-40 overflow-hidden bg-brown-dark">
 <motion.div
 style={{ y, opacity }}
 className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
 >
 <Image
 src="https://oklahomalbc.org/wp-content/uploads/2025/06/R5C_18481-scaled.jpg"
 alt="AC Hamlin Gala"
 fill
 priority
 className="object-cover object-top opacity-30 mix-blend-screen"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-brown-dark via-brown-dark/80 to-transparent"></div>
 </motion.div>

 <div className="relative z-10 max-w-[1800px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
 <div className="lg:col-span-8">
 <motion.div
 initial={{ opacity: 0, scaleX: 0 }}
 animate={{ opacity: 1, scaleX: 1 }}
 transition={{ duration: 0.8 }}
 className="h-[1px] w-24 bg-brown-light mb-8 origin-left"
 ></motion.div>
 <motion.span
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="block text-accent font-sans text-sm md:text-base uppercase tracking-super-wide mb-6"
 >
 25th Biennial Scholarship Gala
 </motion.span>
 <motion.h1
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.3 }}
 className="text-5xl md:text-7xl lg:text-9xl font-serif text-cream leading-[0.9] tracking-tight max-w-5xl mb-8"
 >
 The <span className="italic font-light text-accent">A.C. Hamlin</span> Gala
 </motion.h1>
 </div>

 <div className="lg:col-span-4 flex flex-col gap-6 lg:pb-4 border-l border-brown/30 pl-6 lg:pl-12">
 <motion.div
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8, delay: 0.5 }}
 >
 <span className="block text-xs uppercase tracking-super-wide text-brown-light mb-2">When</span>
 <p className="text-xl md:text-2xl font-serif text-cream">February 27th, 2026</p>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8, delay: 0.6 }}
 >
 <span className="block text-xs uppercase tracking-super-wide text-brown-light mb-2">Where</span>
 <p className="text-xl md:text-2xl font-serif text-cream">The National Cowboy and Western Heritage Museum</p>
 <p className="text-sm font-light text-cream/70 mt-1">Oklahoma City</p>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.8 }}
 className="mt-6"
 >
 <a href="https://www.zeffy.com/en-US/ticketing/2025-oklahoma-legislative-black-caucus-foundation-biannual-gala" target="_blank" rel="noopener noreferrer" className="inline-block relative overflow-hidden bg-accent text-brown-dark hover:text-brown-dark border border-transparent px-8 py-4 text-sm font-serif font-bold transition-colors duration-300 group">
 <span className="relative z-10 transition-colors duration-300">Purchase Tickets</span>
 <div className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 -z-0"></div>
 </a>
 </motion.div>
 </div>
 </div>
 </section>
 );
}
