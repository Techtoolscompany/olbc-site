'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const members = [
    {
        name: "Rep. Ron Stewart",
        district: "District 73",
        role: "Chair / Treasurer",
        image: "/images/team/ron-stewart.jpg",
        link: "https://www.okhouse.gov/representatives/ron-stewart",
    },
    {
        name: "Sen. Nikki Nice",
        district: "District 48",
        role: "Vice Chair",
        image: "/images/team/nikki-nice.jpg",
        link: "https://oksenate.gov/senators/nikki-nice",
    },
    {
        name: "Sen. Regina Goodwin",
        district: "District 11",
        role: "Member",
        image: "/images/team/regina-goodwin.jpg",
        link: "https://oksenate.gov/senators/regina-goodwin",
    },
    {
        name: "Rep. Erick Harris",
        district: "District 39",
        role: "Member",
        image: "/images/team/erick-harris.jpg",
        link: "https://www.okhouse.gov/representatives/erick-harris",
    },
    {
        name: "Rep. Michelle McCane",
        district: "District 72",
        role: "Member",
        image: "/images/team/michelle-mccane.jpg",
        link: "https://www.okhouse.gov/representatives/michelle-mccane",
    },
    {
        name: "Rep. Aletia Timmons",
        district: "District 97",
        role: "Member",
        image: "/images/team/aletia-timmons.jpg",
        link: "https://www.okhouse.gov/representatives/aletia-timmons",
    }
];

export default function MembersGrid() {
    return (
        <section className="py-32 px-6 md:px-12 bg-cream">
            <div className="max-w-[1600px] mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-brown-dark mb-6">
                        Your Oklahoma Legislative Black Caucus
                    </h2>
                    <p className="text-lg text-brown-light font-sans max-w-2xl mx-auto">
                        Dedicated leaders advocating for policy and legislation that benefits Black citizens and marginalized communities across the state.
                    </p>
                </div>

                {/* 3-Column Premium Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {members.map((member, idx) => (
                        <motion.a
                            href={member.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className={`group relative overflow-hidden bg-brown/5 rounded-[2rem] cursor-pointer aspect-[3/4] block`}
                        >
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                unoptimized={true}
                                className="object-cover object-top transition-all duration-[1.5s] ease-out group-hover:scale-105 "
                            />
                            {/* Overlay Gradient for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/95 via-brown-dark/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>

                            {/* Content overlay */}
                            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4 drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {member.role} &bull; {member.district}
                                </span>
                                <h3 className="text-3xl md:text-4xl font-serif text-white group-hover:italic transition-all duration-500 drop-shadow-lg">
                                    {member.name}
                                </h3>
                            </div>

                            {/* Accent Line */}
                            <div className="absolute inset-x-0 bottom-0 h-1.5 bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 z-10 ease-in-out"></div>
                        </motion.a>
                    ))}
                </div>

                {/* Legacy Members Link */}
                <div className="mt-32 text-center">
                    <h3 className="text-3xl font-serif text-brown-dark mb-8">Honoring Our History</h3>
                    <motion.a
                        href="/legacy-members"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-4 border border-brown-dark text-brown-dark hover:bg-brown-dark hover:text-cream transition-colors duration-300 px-10 py-5 text-sm uppercase tracking-widest font-bold group"
                    >
                        Discover Legacy Members
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_right_alt</span>
                    </motion.a>
                </div>
            </div >
        </section >
    );
}
