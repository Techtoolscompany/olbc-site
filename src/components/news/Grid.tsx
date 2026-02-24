'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Article {
    date: string;
    title: string;
    category: string;
    excerpt: string;
    image?: string;
    featured?: boolean;
}

const articles: Article[] = [
    {
        date: "Feb 10, 2026",
        category: "Legislation",
        title: "Recognizing Black History Month at the Capitol",
        excerpt: "Rep. Ron Stewart sponsored HR1034 to recognize Black History Month, joined by Sen. Nikki Nice and Sen. Regina Goodwin via SR29.",
        image: "/images/news/news-1.png",
        featured: true
    },
    {
        date: "Feb 18, 2026",
        category: "Press Release",
        title: "OLBC Honors the Legacy of Rev. Jesse Jackson",
        excerpt: "Rep. Ron Stewart, Chair of the OLBC, released a statement mourning the passing of the civil rights icon and honoring his impact on equality.",
        image: "/images/news/news-2.png"
    },
    {
        date: "Nov 24, 2025",
        category: "Press Release",
        title: "Mourning the Passing of Viola Fletcher",
        excerpt: "The OLBC released a joint statement honoring the legacy of one of the last known survivors of the 1921 Tulsa Race Massacre.",
        image: "/images/news/news-3.png"
    },
    {
        date: "Oct 15, 2025",
        category: "Policy",
        title: "Urgent Call to Protect SNAP Recipients",
        excerpt: "The OLBC issued a call for Gov. Kevin Stitt to convene a Special Session to protect SNAP recipients during a federal government shutdown.",
        image: "/images/news/news-4.png"
    }
];

export default function NewsGrid() {
    return (
        <section className="px-6 md:px-12 py-24 max-w-[1800px] mx-auto bg-cream">

            {/* Featured Article */}
            <div className="mb-24">
                {articles.filter(a => a.featured).map((article, idx) => (
                    <motion.article
                        key={`featured-${idx}`}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="group cursor-pointer grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center"
                    >
                        <div className="w-full aspect-[4/3] relative overflow-hidden">
                            {article.image && (
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-all duration-[1.5s] ease-out group-hover:scale-105"
                                />
                            )}
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-[10px] uppercase tracking-super-wide text-brown-light">{article.date}</span>
                                <span className="w-1 h-1 rounded-full bg-brown/20"></span>
                                <span className="text-[10px] uppercase tracking-super-wide text-brown font-bold">{article.category}</span>
                            </div>
                            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brown-dark leading-[1.1] mb-8 group-hover:text-brown-light transition-colors duration-500">
                                {article.title}
                            </h2>
                            <p className="text-lg text-brown/70 leading-relaxed mb-10 max-w-lg">
                                {article.excerpt}
                            </p>
                            <Link href="#" className="inline-flex items-center gap-4 text-xs uppercase tracking-widest text-brown-dark font-medium group-hover:text-brown-light transition-colors w-fit">
                                Read Full Story
                                <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-2 font-light">arrow_right_alt</span>
                            </Link>
                        </div>
                    </motion.article>
                ))}
            </div>

            {/* Bento Grid Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.filter(a => !a.featured).map((article, idx) => (
                    <motion.article
                        key={`article-${idx}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 * idx }}
                        // First item spans 2 columns on desktop for an asymmetrical bento look
                        className={`group cursor-pointer flex flex-col h-[500px] border border-brown/10 hover:border-brown-dark bg-white transition-all duration-500 overflow-hidden relative ${idx === 0 ? 'lg:col-span-2' : 'lg:col-span-1'}`}
                    >
                        {/* Background Image if available */}
                        {article.image && (
                            <div className="absolute inset-0 z-0 overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-700 mix-blend-multiply"
                                />
                            </div>
                        )}

                        <div className="relative z-10 flex flex-col h-full p-10 md:p-12 bg-gradient-to-t from-white via-white/95 to-transparent">
                            <div className="flex items-center gap-4 mb-auto">
                                <span className="text-[10px] uppercase tracking-super-wide text-brown-light">{article.date}</span>
                                <span className="w-1 h-1 rounded-full bg-brown/20"></span>
                                <span className={`text-[10px] uppercase tracking-super-wide font-bold ${article.category === 'Statement' ? 'text-accent' : 'text-brown'}`}>{article.category}</span>
                            </div>

                            <div className="mt-8">
                                <h3 className={`font-serif text-brown-dark leading-tight mb-4 group-hover:italic transition-all duration-300 ${idx === 0 ? 'text-4xl md:text-5xl lg:text-5xl max-w-2xl' : 'text-3xl md:text-4xl'}`}>
                                    {article.title}
                                </h3>
                                <p className="text-brown/70 leading-relaxed text-base line-clamp-3 mb-8">
                                    {article.excerpt}
                                </p>
                                <span className="inline-block text-xs font-medium text-brown-dark uppercase tracking-widest relative overflow-hidden pb-1 group/link">
                                    {article.category === 'Statement' ? 'Read Statement' : 'Read Article'}
                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brown-dark transform origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-30"></span>
                                </span>
                            </div>
                        </div>

                        {/* Accent top border hover effect */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 origin-left transition-transform duration-700 ease-out group-hover:scale-x-100 z-20"></div>
                    </motion.article>
                ))}
            </div>

            <div className="mt-32 flex justify-center">
                <button className="border border-brown text-brown hover:bg-brown hover:text-white transition-colors duration-300 px-12 py-4 text-xs uppercase tracking-widest font-bold">
                    Load More Stories
                </button>
            </div>

        </section>
    );
}
