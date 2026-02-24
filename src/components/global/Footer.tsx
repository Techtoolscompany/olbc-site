'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Footer() {
    return (
        <footer className="bg-brown-dark text-cream pt-24 pb-12">
            <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-24">
                    <div className="flex flex-col gap-8">
                        <h2 className="font-serif text-4xl md:text-5xl text-white">Join the Movement.</h2>
                        <p className="text-cream/70 text-lg font-light max-w-md">
                            Receive weekly legislative updates and learn how you can make a difference in your community.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-0 mt-4 border-b border-cream/30 pb-2 max-w-lg" onSubmit={(e) => e.preventDefault()}>
                            <input
                                className="bg-transparent border-none text-white text-lg placeholder-cream/40 focus:ring-0 px-0 py-3 flex-1 outline-none"
                                placeholder="Your email address"
                                type="email"
                            />
                            <button
                                type="submit"
                                className="text-cream hover:text-white font-medium text-sm uppercase tracking-widest px-6 py-3 transition-colors flex items-center gap-2"
                            >
                                Subscribe
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </button>
                        </form>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                        <div className="flex flex-col gap-6">
                            <h4 className="font-serif italic text-cream/50 text-lg">Organization</h4>
                            <div className="flex flex-col gap-3">
                                <Link href="/about" className="text-sm font-medium hover:text-white text-cream/80 transition-colors">About Us</Link>
                                <Link href="/legacy-members" className="text-sm font-medium hover:text-white text-cream/80 transition-colors">Legacy Members</Link>
                                <Link href="/ac-hamlin-gala" className="text-sm font-medium hover:text-white text-cream/80 transition-colors">A.C. Hamlin Gala</Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <h4 className="font-serif italic text-cream/50 text-lg">Resources</h4>
                            <div className="flex flex-col gap-3">
                                <Link href="/policy" className="text-sm font-medium hover:text-white text-cream/80 transition-colors">Priorities</Link>
                                <Link href="/news" className="text-sm font-medium hover:text-white text-cream/80 transition-colors">News & Media</Link>
                                <Link href="/connect" className="text-sm font-medium hover:text-white text-cream/80 transition-colors">Connect</Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 col-span-1 sm:col-span-2 md:col-span-1">
                            <h4 className="font-serif italic text-cream/50 text-lg">Social</h4>
                            <div className="flex gap-4">
                                <a href="https://facebook.com/okblackcaucus" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-brown-dark transition-all">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                                </a>
                                <a href="https://instagram.com/oklahomalbc" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-brown-dark transition-all">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.373c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/40">
                    <p>© {new Date().getFullYear()} Oklahoma Legislative Black Caucus. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-cream transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-cream transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
