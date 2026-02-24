'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';

const priorities = [
    {
        num: "01",
        title: "Economic Empowerment",
        desc: "Creating pathways to prosperity for all Oklahomans through strategic economic initiatives.",
        image: "/images/priorities/economic_empowerment_black_1771881116371.png"
    },
    {
        num: "02",
        title: "Criminal Justice Reform",
        desc: "Advocating for fair and equitable treatment within the justice system.",
        image: "/images/priorities/criminal_justice_reform_black_1771881132085.png"
    },
    {
        num: "03",
        title: "Educational Excellence",
        desc: "Ensuring every child has access to high-quality education and modern resources.",
        image: "/images/priorities/educational_excellence_black_1771881149686.png"
    },
    {
        num: "04",
        title: "Health Equity",
        desc: "Expanding access to affordable healthcare and addressing systemic disparities.",
        image: "/images/priorities/health_equity_black_1771881174140.png"
    }
];

export default function FocusAreas() {
    const [isDesktop, setIsDesktop] = useState(true);
    const [scrollRange, setScrollRange] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    // Measure the actual overflow and compute the exact pixel shift needed
    useEffect(() => {
        const measure = () => {
            if (trackRef.current) {
                const trackWidth = trackRef.current.scrollWidth;
                const viewportWidth = window.innerWidth;
                setScrollRange(trackWidth - viewportWidth);
            }
        };
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, []);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Map vertical scroll progress to negative horizontal pixel offset
    const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

    return (
        <section ref={sectionRef} className={`relative bg-cream border-t border-brown/10 ${isDesktop ? 'h-[300vh]' : 'h-auto py-24'}`}>
            <div className={`flex flex-col justify-center ${isDesktop ? 'sticky top-0 h-screen overflow-hidden' : 'h-full px-6 relative'}`}>

                {/* Section Header */}
                <div className={`${isDesktop ? 'absolute top-24 left-6 md:left-12 lg:left-24 z-20 pointer-events-none' : 'mb-12'}`}>
                    <span className="text-xs uppercase tracking-super-wide text-brown-light mb-4 block">Focus Areas</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-brown-dark">Legislative Priorities</h2>
                </div>

                {/* Cards Container */}
                {isDesktop ? (
                    <div className="w-full h-full pt-32 flex items-center">
                        <motion.div
                            ref={trackRef}
                            style={{ x }}
                            className="flex gap-12 h-full items-center px-12 lg:px-24 will-change-transform"
                        >
                            {priorities.map((item, index) => (
                                <FocusCard key={`desktop-${item.num}-${index}`} item={item} isDesktop={isDesktop} />
                            ))}
                        </motion.div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-8 w-full h-auto mt-24">
                        {priorities.map((item) => (
                            <FocusCard key={`mobile-${item.num}`} item={item} isDesktop={isDesktop} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

function FocusCard({ item, isDesktop }: { item: typeof priorities[0], isDesktop: boolean }) {
    return (
        <div
            className={`${isDesktop ? 'w-[40vw] flex-shrink-0 h-[60vh]' : 'w-full aspect-[4/5] sm:aspect-video'} relative group cursor-pointer`}
        >
            <div className="w-full h-full relative overflow-hidden bg-brown-dark rounded-sm">
                {/* Image Background with Parallax/Scale Effect */}
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-[1.5s] ease-out group-hover:scale-105"
                />
                {/* Lightened gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/80 via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                    <div className="flex items-baseline gap-6 mb-6 overflow-hidden">
                        <motion.span
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="font-mono text-sm md:text-xl text-brown-light"
                        >
                            {item.num}
                        </motion.span>
                        <motion.h3
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl md:text-5xl font-serif text-white group-hover:italic transition-all duration-500"
                        >
                            {item.title}
                        </motion.h3>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={`overflow-hidden transition-all duration-500 ease-out ${isDesktop ? 'max-h-0 group-hover:max-h-32 opacity-0 group-hover:opacity-100' : 'h-auto mt-2'}`}
                    >
                        <p className="text-base md:text-lg font-light text-white/95 leading-relaxed max-w-lg mt-2">
                            {item.desc}
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
