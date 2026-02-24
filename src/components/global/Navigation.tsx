'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Magnetic from '@/components/global/Magnetic';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Priorities', href: '/policy' },
        { name: 'Gala', href: '/ac-hamlin-gala' },
        { name: 'News', href: '/news' },
        { name: 'Connect', href: '/connect' },
    ];

    return (
        <>
            <header
                className={cn(
                    'fixed top-0 w-full z-50 py-6 px-6 md:px-12 transition-all duration-500',
                    scrolled || pathname !== '/'
                        ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-brown/5'
                        : 'bg-transparent'
                )}
            >
                <div className="max-w-[1800px] mx-auto flex items-center justify-between">
                    <Magnetic strength={0.4}>
                        <Link href="/" className="flex items-center gap-3 group relative overflow-hidden">
                            <div className="size-10 text-brown transition-transform duration-500 group-hover:scale-110">
                                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"></path>
                                </svg>
                            </div>
                            <h2 className="text-brown font-serif text-2xl font-bold tracking-tight">OLBC</h2>
                        </Link>
                    </Magnetic>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Magnetic key={link.name} strength={0.2}>
                                    <Link
                                        href={link.href}
                                        className="relative group py-2"
                                    >
                                        <span
                                            className={cn(
                                                'font-medium text-sm tracking-wide transition-colors duration-300',
                                                isActive ? 'text-brown font-bold' : 'text-brown/70 group-hover:text-brown'
                                            )}
                                        >
                                            {link.name}
                                        </span>
                                        <span
                                            className={cn(
                                                'absolute left-0 bottom-0 h-[1.5px] bg-brown transition-all duration-300 ease-out',
                                                isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                            )}
                                        />
                                    </Link>
                                </Magnetic>
                            );
                        })}
                    </nav>

                    <div className="hidden md:flex items-center gap-8">
                        <Magnetic strength={0.3}>
                            <button className="relative overflow-hidden text-brown hover:text-white border border-brown/20 px-6 py-2.5 text-sm font-serif font-bold transition-colors duration-300 group cursor-hover">
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Support</span>
                                <div className="absolute inset-0 bg-brown transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 -z-0"></div>
                            </button>
                        </Magnetic>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <Magnetic strength={0.4}>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-brown z-[60] relative w-8 h-8 flex flex-col justify-center items-center gap-[5px] cursor-hover"
                        >
                            <span className={cn('w-6 h-[1.5px] bg-brown transition-all duration-300', mobileMenuOpen ? 'rotate-45 translate-y-[6.5px]' : '')}></span>
                            <span className={cn('w-6 h-[1.5px] bg-brown transition-all duration-300', mobileMenuOpen ? 'opacity-0' : '')}></span>
                            <span className={cn('w-6 h-[1.5px] bg-brown transition-all duration-300', mobileMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : '')}></span>
                        </button>
                    </Magnetic>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-50 bg-cream flex flex-col items-center justify-center pointer-events-auto"
                    >
                        <nav className="flex flex-col items-center gap-8 text-center">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="font-serif text-4xl sm:text-5xl text-brown-dark hover:italic transition-all duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                className="mt-8"
                            >
                                <button className="text-white bg-brown px-8 py-3 text-sm font-serif font-bold uppercase tracking-widest">
                                    Support
                                </button>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
