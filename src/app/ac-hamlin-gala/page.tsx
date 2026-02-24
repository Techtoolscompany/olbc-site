'use client';

import { motion } from 'framer-motion';

export default function ACHamlinGalaPage() {
    return (
        <div className="bg-background-dark text-text-cream font-sans antialiased overflow-x-hidden selection:bg-primary selection:text-white -mt-24">

            {/* HERO SECTION */}
            <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-background-dark/40 to-background-dark z-10"></div>
                    <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat bg-fixed transform scale-105 saturate-50"
                        style={{ backgroundImage: "url('/images/AC%20Hamlin/1e-scaled.jpg')" }}
                    />
                </div>
                <div className="relative z-20 container mx-auto px-6 text-center max-w-4xl pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-4 border-b border-primary text-primary text-xs font-medium tracking-[0.2em] uppercase mb-8">
                            The National Cowboy and Western Heritage Museum • February 27th, 2026
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-text-cream mb-6 leading-[1.1] tracking-tight">
                            The 25th Biennial <span className="block text-4xl md:text-6xl italic font-normal text-primary mt-2">A.C. Hamlin Scholarship Gala</span>
                        </h1>
                        <p className="text-lg md:text-xl text-text-cream/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed font-sans">
                            The Oklahoma Legislative Black Caucus proudly presents an evening honoring the legacy of Oklahoma's first African-American legislator while raising critical scholarship funds for students attending Langston University.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a className="inline-flex items-center justify-center bg-background-dark border border-primary text-primary hover:bg-primary hover:text-background-dark text-base font-medium px-8 py-4 transition-all shadow-lg hover:shadow-primary/25 min-w-[200px]" href="#tickets">
                                Reserve Your Seat
                            </a>
                            <a className="inline-flex items-center justify-center bg-transparent hover:bg-white/5 text-text-cream border border-text-cream/30 hover:border-text-cream/60 text-base font-medium px-8 py-4 transition-all backdrop-blur-sm min-w-[200px]" href="#program">
                                View Program
                            </a>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* CELEBRATING HERITAGE */}
            <section className="py-24 bg-background-dark relative border-b border-border-brown/30">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="material-symbols-outlined text-primary text-5xl mb-6 font-light">history_edu</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-cream mb-8">About A.C. Hamlin</h2>
                        <div className="text-xl text-text-cream/70 leading-relaxed font-light font-sans flex flex-col gap-6">
                            <p>
                                A.C. Hamlin was an exceptional leader who fought for civil rights and economic justice as Oklahoma's first African-American legislator. His pioneering spirit and dedication to public service broke barriers and paved the way for future generations of leaders.
                            </p>
                            <p>
                                Named after this political trailblazer, the gala serves as an opportunity to honor his legacy while continuing his mission of empowerment through education. All proceeds from this distinguished evening directly benefit academic scholarships for deserving Langston University students.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* WHY SPONSOR */}
            <section className="py-24 bg-surface-dark relative overflow-hidden" id="program">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="mb-16 md:mb-24 text-center md:text-left">
                        <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-3">Sponsorship Benefits</h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-text-cream">Why Sponsor?</h3>
                    </div>
                    <div className="grid gap-8 md:gap-12">
                        {/* Event 1 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group relative flex flex-col md:flex-row gap-8 items-start md:items-center border-b border-border-brown/50 pb-12 last:border-0">
                            <div className="w-full md:w-1/4 text-primary text-2xl font-serif italic border-l border-primary pl-6 py-2">
                                Educational Impact
                            </div>
                            <div className="w-full md:w-3/4 pl-6 md:pl-0">
                                <h4 className="text-2xl font-serif font-bold text-text-cream group-hover:text-primary transition-colors mb-2">Fund Deserving Students</h4>
                                <p className="text-text-cream/60 font-sans font-light">Your sponsorship directly funds scholarships for deserving students at Langston University, Oklahoma's only HBCU, creating lasting change in young lives.</p>
                            </div>
                        </motion.div>
                        {/* Event 2 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="group relative flex flex-col md:flex-row gap-8 items-start md:items-center border-b border-border-brown/50 pb-12 last:border-0">
                            <div className="w-full md:w-1/4 text-primary text-2xl font-serif italic border-l border-primary pl-6 py-2">
                                Community & Brand
                            </div>
                            <div className="w-full md:w-3/4 pl-6 md:pl-0">
                                <h4 className="text-2xl font-serif font-bold text-text-cream group-hover:text-primary transition-colors mb-2">Visibility & Leadership</h4>
                                <p className="text-text-cream/60 font-sans font-light">Align your organization with a prestigious event that celebrates excellence, leadership, and progress in Oklahoma. Gain exposure to a distinguished audience committed to education.</p>
                            </div>
                        </motion.div>
                        {/* Event 3 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="group relative flex flex-col md:flex-row gap-8 items-start md:items-center border-b border-border-brown/50 pb-12 last:border-0">
                            <div className="w-full md:w-1/4 text-primary text-2xl font-serif italic border-l border-primary pl-6 py-2">
                                Networking
                            </div>
                            <div className="w-full md:w-3/4 pl-6 md:pl-0">
                                <h4 className="text-2xl font-serif font-bold text-text-cream group-hover:text-primary transition-colors mb-2">Build Connections</h4>
                                <p className="text-text-cream/60 font-sans font-light">Connect with influential state legislators, community leaders, and business professionals in an elegant setting while joining a tradition of supporting educational excellence.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* HONOREES */}
            <section className="py-24 bg-background-dark" id="honorees">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-3">What to Expect</h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-text-cream mb-6">Event Highlights</h3>
                        <p className="text-text-cream/60 max-w-2xl mx-auto font-sans font-light">Join us as we recognize excellence and raise crucial scholarship funds for the only HBCU in the state.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
                        {/* Honoree 1 (Keynote) - Large Bento */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-2 md:row-span-2 group relative overflow-hidden bg-surface-dark border border-border-brown/30 rounded-sm">
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500"></div>
                            <div className="w-full h-full bg-cover bg-center transition-all duration-700 transform group-hover:scale-105" style={{ backgroundImage: "url('/images/AC%20Hamlin/chairman_award.png')" }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/40 to-transparent flex flex-col justify-end p-8 md:p-12 z-20">
                                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2 font-sans">Chairman's Award</p>
                                <h4 className="text-4xl md:text-5xl font-serif font-bold text-text-cream mb-2 group-hover:text-primary transition-colors">Outstanding Oklahoman</h4>
                                <p className="text-text-cream/80 text-lg font-sans font-light">Recognizing an outstanding Oklahoman who has made significant contributions toward advancing progress in our state.</p>
                            </div>
                        </motion.div>

                        {/* Honoree 2 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="group relative overflow-hidden bg-surface-dark border border-border-brown/30 rounded-sm">
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500"></div>
                            <div className="w-full h-full bg-cover bg-center transition-all duration-700 transform group-hover:scale-105" style={{ backgroundImage: "url('/images/AC%20Hamlin/medical_award.png')" }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 to-transparent flex flex-col justify-end p-8 z-20">
                                <p className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1 font-sans">Medical Award</p>
                                <h4 className="text-2xl font-serif font-bold text-text-cream mb-1 group-hover:text-primary transition-colors">Exceptional Healthcare Providers</h4>
                                <p className="text-text-cream/80 text-sm font-sans font-light">Honoring providers dedicated to improving health outcomes in our communities.</p>
                            </div>
                        </motion.div>

                        {/* Honoree 3 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="group relative overflow-hidden bg-surface-dark border border-border-brown/30 rounded-sm">
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500"></div>
                            <div className="w-full h-full bg-cover bg-center transition-all duration-700 transform group-hover:scale-105" style={{ backgroundImage: "url('/images/AC%20Hamlin/langston_scholarships.png')" }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 to-transparent flex flex-col justify-end p-8 z-20">
                                <p className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1 font-sans">Mission Impact</p>
                                <h4 className="text-2xl font-serif font-bold text-text-cream mb-1 group-hover:text-primary transition-colors">Langston Scholarships</h4>
                                <p className="text-text-cream/80 text-sm font-sans font-light">Direct support for academic scholarships, empowering the next generation of leaders.</p>
                            </div>
                        </motion.div>

                        {/* Honoree 4 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="md:col-span-3 group relative overflow-hidden bg-surface-dark border border-border-brown/30 rounded-sm h-[250px] flex items-center">
                            <div className="w-1/2 h-full bg-cover bg-center transition-all duration-700" style={{ backgroundImage: "url('/images/AC%20Hamlin/gathering_leaders.png')" }}></div>
                            <div className="w-1/2 p-8 md:p-12 z-20">
                                <p className="text-primary text-[10px] font-bold uppercase tracking-widest mb-2 font-sans">Distinguished Attendees</p>
                                <h4 className="text-3xl font-serif font-bold text-text-cream mb-2 group-hover:text-primary transition-colors">A Gathering of Leaders</h4>
                                <p className="text-text-cream/80 text-sm font-sans font-light">Join state legislators, community leaders, philanthropists, and distinguished citizens from across Oklahoma.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ABOUT OLBC */}
            <section className="py-24 bg-surface-dark border-y border-border-brown/20 relative">
                <div className="w-full h-full absolute top-0 left-0 opacity-5 bg-fixed" style={{ backgroundImage: "url('/images/AC%20Hamlin/1e-scaled.jpg')" }}></div>
                <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                    <span className="material-symbols-outlined text-primary/40 text-6xl mb-6">account_balance</span>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-text-cream mb-6 leading-tight">
                        The Oklahoma Legislative Black Caucus
                    </h3>
                    <p className="text-text-cream/80 font-light font-sans text-lg md:text-xl leading-relaxed mb-6">
                        The OLBC is comprised of African American members of the Oklahoma State Legislature and is dedicated to advocating for policy and legislation that benefits Black citizens and other marginalized communities. The OLBC works to promote equality, opportunity, and access while addressing issues affecting Black Oklahomans.
                    </p>
                    <p className="text-text-cream/80 font-light font-sans text-lg md:text-xl leading-relaxed">
                        With a focus on education, public safety, and economic development, the caucus strives to address disparities and promote positive change throughout the state.
                    </p>
                </div>
            </section>

            {/* TICKETS */}
            <section className="py-24 bg-background-dark" id="tickets">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-3">Reservations</h2>
                            <h3 className="text-4xl md:text-5xl font-serif font-bold text-text-cream">Sponsor & Attend</h3>
                        </div>
                        <p className="text-text-cream/60 max-w-md text-right md:text-left font-sans font-light">
                            We offer tailored sponsorship opportunities to suit every level of engagement. Contact us to learn how your sponsorship can make a meaningful difference.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                        {/* Package 1 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-surface-light text-background-dark border border-transparent rounded-sm p-8 flex flex-col gap-6 shadow-md hover:shadow-xl transition-all duration-300">
                            <div>
                                <h4 className="text-background-dark font-serif text-2xl font-bold mb-2">Individual Seat</h4>
                                <p className="text-background-dark/70 text-sm font-sans">Perfect for community members and guests.</p>
                            </div>
                            <div className="py-4 border-y border-background-dark/10 flex items-baseline gap-2">
                                <span className="text-4xl font-serif font-bold text-background-dark">$150</span>
                                <span className="text-background-dark/60 text-sm font-sans">/ seat</span>
                            </div>
                            <ul className="flex flex-col gap-3 text-background-dark/80 text-sm font-sans">
                                <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary-dark text-lg">check</span> Entry to Gala Dinner</li>
                                <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary-dark text-lg">check</span> Two Drink Tickets</li>
                                <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary-dark text-lg">check</span> Commemorative Program</li>
                            </ul>
                            <button className="mt-4 w-full py-3 border border-background-dark/20 text-background-dark font-bold font-sans tracking-wide uppercase text-sm hover:bg-background-dark hover:text-surface-light transition-colors">
                                Purchase Ticket
                            </button>
                        </motion.div>

                        {/* Package 2 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#3e342c] border border-primary rounded-sm p-8 flex flex-col gap-6 relative shadow-2xl shadow-primary/10 transform scale-105 z-10">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background-dark text-xs font-bold px-4 py-1 uppercase tracking-wider shadow-lg">
                                Most Impactful
                            </div>
                            <div>
                                <h4 className="text-text-cream font-serif text-2xl font-bold mb-2">Premier Table</h4>
                                <p className="text-text-cream/70 text-sm font-sans">For organizations and large groups.</p>
                            </div>
                            <div className="py-4 border-y border-primary/30 flex items-baseline gap-2">
                                <span className="text-4xl font-serif font-bold text-primary">$1,500</span>
                                <span className="text-text-cream/60 text-sm font-sans">/ table of 8</span>
                            </div>
                            <ul className="flex flex-col gap-3 text-text-cream/90 text-sm font-sans">
                                <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> <span className="font-bold">Priority Seating near Stage</span></li>
                                <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-lg">check</span> Full Table Service</li>
                                <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-lg">check</span> Bottle of Champagne</li>
                                <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-lg">check</span> Listing in Program & Website</li>
                                <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-lg">check</span> Valet Parking Included</li>
                            </ul>
                            <button className="mt-4 w-full py-3 bg-primary text-background-dark font-bold font-sans tracking-wide uppercase text-sm hover:bg-white transition-colors shadow-lg">
                                Reserve Table
                            </button>
                        </motion.div>

                        {/* Package 3 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-surface-light text-background-dark border border-transparent rounded-sm p-8 flex flex-col gap-6 shadow-md hover:shadow-xl transition-all duration-300">
                            <div>
                                <h4 className="text-background-dark font-serif text-2xl font-bold mb-2">Corporate Sponsor</h4>
                                <p className="text-background-dark/70 text-sm font-sans">Maximum visibility and impact.</p>
                            </div>
                            <div className="py-4 border-y border-background-dark/10 flex items-baseline gap-2">
                                <span className="text-4xl font-serif font-bold text-background-dark">$5,000</span>
                                <span className="text-background-dark/60 text-sm font-sans">/ sponsorship</span>
                            </div>
                            <ul className="flex flex-col gap-3 text-background-dark/80 text-sm font-sans">
                                <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary-dark text-lg">check</span> Two Premier Tables (16 Seats)</li>
                                <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary-dark text-lg">check</span> VIP Reception Access</li>
                                <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary-dark text-lg">check</span> Full Page Ad in Program</li>
                                <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary-dark text-lg">check</span> On-Stage Recognition</li>
                            </ul>
                            <button className="mt-4 w-full py-3 border border-background-dark/20 text-background-dark font-bold font-sans tracking-wide uppercase text-sm hover:bg-background-dark hover:text-surface-light transition-colors">
                                Become a Sponsor
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* LOCATION IMAGE */}
            <section className="h-96 md:h-[600px] relative w-full transition-all duration-700">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/AC%20Hamlin/R5C_22201-scaled.jpg')" }}></div>
                <div className="absolute inset-0 bg-background-dark/60 flex items-center justify-center">
                    <div className="bg-background-dark/80 backdrop-blur-md p-10 rounded-sm text-center border border-primary/20">
                        <span className="material-symbols-outlined text-primary text-4xl mb-2">location_on</span>
                        <h3 className="text-2xl font-serif font-bold text-text-cream">Oklahoma State Capitol</h3>
                        <p className="text-text-cream/70 mt-2 font-sans font-light">2300 N Lincoln Blvd, Oklahoma City, OK</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
