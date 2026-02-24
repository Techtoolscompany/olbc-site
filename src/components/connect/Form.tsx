'use client';

import { motion } from 'framer-motion';

export default function ConnectForm() {
    return (
        <section className="py-24 px-6 md:px-12 bg-cream">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                {/* Bento Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-8"
                >
                    <div className="mb-4">
                        <h2 className="text-3xl md:text-5xl font-serif text-brown-dark mb-6">Contact Information</h2>
                        <p className="text-brown/80 text-lg leading-relaxed max-w-md">
                            Reach out to the Oklahoma Legislative Black Caucus for press inquiries, event partnerships, or legislative questions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Office Location Bento */}
                        <div className="md:col-span-2 group bg-white border border-brown/10 p-8 hover:border-brown-dark transition-all duration-500 relative overflow-hidden">
                            <span className="text-xs uppercase tracking-widest font-mono text-brown-light block mb-4 relative z-10">Office Location</span>
                            <a href="#" className="text-2xl md:text-3xl font-serif text-brown-dark group-hover:italic transition-all duration-300 relative z-10 block leading-tight">
                                Oklahoma State Capitol<br />
                                2300 N Lincoln Blvd<br />
                                Oklahoma City, OK 73105
                            </a>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-accent scale-x-0 origin-left transition-transform duration-700 ease-out group-hover:scale-x-100 z-0"></div>
                        </div>

                        {/* Email Bento */}
                        <div className="group bg-white border border-brown/10 p-8 hover:border-brown-dark transition-all duration-500 relative overflow-hidden flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[220px]">
                            <span className="text-xs uppercase tracking-widest font-mono text-brown-light block relative z-10">Email Directory</span>
                            <a href="mailto:info@oklahomalbc.org" className="text-xl lg:text-2xl font-serif text-brown-dark group-hover:italic transition-all duration-300 relative z-10 block mt-auto leading-tight break-all">
                                info@oklahomalbc.<br className="hidden lg:block" />org
                            </a>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-brown scale-x-0 origin-left transition-transform duration-700 ease-out group-hover:scale-x-100 z-0"></div>
                        </div>

                        {/* Press Bento */}
                        <div className="group bg-brown-dark p-8 border border-transparent hover:border-accent transition-all duration-500 relative overflow-hidden flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[220px]">
                            <span className="text-xs uppercase tracking-widest font-mono text-accent block relative z-10">Press Inquiries</span>
                            <a href="mailto:press@oklahomalbc.org" className="text-xl lg:text-2xl font-serif text-cream group-hover:italic transition-all duration-300 relative z-10 block mt-auto leading-tight break-all">
                                press@oklahomalbc.<br className="hidden lg:block" />org
                            </a>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-accent scale-x-0 origin-left transition-transform duration-700 ease-out group-hover:scale-x-100 z-0 text-white"></div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white p-8 md:p-16 border border-brown/10 shadow-sm"
                >
                    <h3 className="text-2xl font-serif text-brown-dark mb-8">Send us a message</h3>

                    <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="first_name" className="text-xs uppercase tracking-widest font-mono text-brown/70">First Name</label>
                                <input
                                    type="text"
                                    id="first_name"
                                    className="border-b border-brown/20 pb-2 bg-transparent focus:outline-none focus:border-brown-dark text-brown-dark transition-colors rounded-none placeholder:text-brown/30"
                                    placeholder="Jane"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="last_name" className="text-xs uppercase tracking-widest font-mono text-brown/70">Last Name</label>
                                <input
                                    type="text"
                                    id="last_name"
                                    className="border-b border-brown/20 pb-2 bg-transparent focus:outline-none focus:border-brown-dark text-brown-dark transition-colors rounded-none placeholder:text-brown/30"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-xs uppercase tracking-widest font-mono text-brown/70">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className="border-b border-brown/20 pb-2 bg-transparent focus:outline-none focus:border-brown-dark text-brown-dark transition-colors rounded-none placeholder:text-brown/30"
                                placeholder="jane@example.com"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="subject" className="text-xs uppercase tracking-widest font-mono text-brown/70">Subject</label>
                            <select
                                id="subject"
                                className="border-b border-brown/20 pb-2 bg-transparent focus:outline-none focus:border-brown-dark text-brown-dark transition-colors rounded-none appearance-none cursor-pointer"
                            >
                                <option>General Inquiry</option>
                                <option>Press/Media</option>
                                <option>Legislation Idea</option>
                                <option>Event Partnership</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2 mb-4">
                            <label htmlFor="message" className="text-xs uppercase tracking-widest font-mono text-brown/70">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="border-b border-brown/20 pb-2 bg-transparent focus:outline-none focus:border-brown-dark text-brown-dark transition-colors rounded-none resize-none placeholder:text-brown/30"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>

                        <button type="submit" className="relative overflow-hidden bg-brown-dark text-white hover:text-white border border-transparent px-8 py-4 text-sm font-serif font-bold transition-colors duration-300 group self-start w-full md:w-auto">
                            <span className="relative z-10 transition-colors duration-300">Submit Message</span>
                            <div className="absolute inset-0 bg-accent transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 -z-0"></div>
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
