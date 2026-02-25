'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ArticleItem {
    icon: string;
    category: string;
    title: string;
    description: string;
    extra?: React.ReactNode;
}

interface PolicySectionProps {
    number: string;
    title: React.ReactNode;
    bgClassRight: string;
    bgClassLeft: string;
    textClassLeft: string;
    textClassRight: string;
    imageSrc?: string;
    articles: ArticleItem[];
}

export default function PolicySection({
    number,
    title,
    bgClassRight,
    bgClassLeft,
    textClassLeft,
    textClassRight,
    imageSrc,
    articles
}: PolicySectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

    return (
        <section ref={containerRef} className="group relative w-full border-t border-brown/10 z-10">
            <div className="flex flex-col lg:flex-row min-h-screen">
                {/* Sticky Sidebar */}
                <div className={cn("lg:w-1/2 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between p-6 md:p-12 lg:p-20", bgClassLeft)}>
                    <div className="flex flex-col gap-6 pt-20">
                        <span className={cn("font-mono text-xs", textClassLeft)}>{number}</span>
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={cn("font-serif text-5xl md:text-7xl", textClassLeft)}
                        >
                            {title}
                        </motion.h2>
                        <div className={cn("w-16 h-0.5 mt-4 opacity-20", number === '03' ? 'bg-cream' : 'bg-brown')}></div>
                    </div>

                    <div className="mt-8 lg:mt-auto block w-full h-[30vh] lg:h-[40vh] relative overflow-hidden group/img rounded-xl lg:rounded-none">
                        {imageSrc ? (
                            <motion.div style={{ y: imageY }} className="w-full h-[120%] -top-[10%] relative object-cover">
                                <Image
                                    src={imageSrc}
                                    alt={`Section ${number} image`}
                                    fill
                                    className="object-cover transition-all duration-[1.5s] ease-out group-hover/img:scale-105"
                                />
                            </motion.div>
                        ) : (
                            <div className={cn("w-full h-full flex items-center justify-center", number === '03' ? 'bg-black/20' : 'bg-brown/5')}>
                                <span className={cn("font-serif italic text-xl", number === '03' ? 'text-white/40' : 'text-brown/40')}>Photography Placeholder</span>
                            </div>
                        )}

                        {/* Curtain Reveal Effect on Scroll */}
                        <motion.div
                            initial={{ y: 0 }}
                            whileInView={{ y: "100%" }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                            className={cn("absolute inset-0 z-20", bgClassLeft)}
                        />
                    </div>
                </div>

                {/* Content Area */}
                <div className={cn("lg:w-1/2 px-6 md:px-12 lg:px-20 py-20 lg:py-40 flex flex-col gap-24", bgClassRight)}>
                    {articles.map((article, idx) => (
                        <motion.article
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.1 * idx }}
                            className="flex flex-col gap-6"
                        >
                            <div className={cn("flex items-center gap-4 mb-2", number === '03' ? 'text-brown-dark/60' : 'text-brown-light')}>
                                <span className="material-symbols-outlined">{article.icon}</span>
                                <span className="text-sm font-bold uppercase tracking-wider">{article.category}</span>
                            </div>
                            <h3 className={cn("font-serif text-3xl md:text-4xl leading-tight", textClassRight)}>
                                {article.title}
                            </h3>
                            <p className={cn("leading-loose text-lg", number === '03' ? 'text-brown/80' : 'text-brown/70')}>
                                {article.description}
                            </p>
                            {article.extra && <div className="mt-4">{article.extra}</div>}
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
