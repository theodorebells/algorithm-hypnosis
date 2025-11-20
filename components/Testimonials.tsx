import React from 'react';
import FadeIn from './FadeIn';

const Testimonials: React.FC = () => {
    return (
        <section className="py-24 px-4 md:px-8 relative">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row items-start gap-16">
                    
                    {/* Book Visualization - Sticky on Desktop */}
                    <div className="w-full lg:w-1/3 flex-shrink-0 flex justify-center lg:justify-end lg:sticky lg:top-32 h-fit">
                        <FadeIn variant="zoom-in" duration={800} className="w-full flex justify-center lg:justify-end">
                            <div className="relative group cursor-default">
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-lg blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse-slow"></div>
                                <div className="relative w-64 aspect-[2/3] bg-[#0a0a0c] border border-white/10 rounded-lg shadow-2xl flex flex-col items-center justify-center p-6 text-center transform group-hover:-translate-y-2 transition-transform duration-500 z-10">
                                    {/* Spine / Book Detail */}
                                    <div className="absolute left-1 top-1 bottom-1 w-[2px] bg-white/10 rounded-full"></div>
                                    
                                    <div className="w-full h-full border border-white/5 flex flex-col items-center justify-center relative overflow-hidden rounded-[4px] bg-gradient-to-br from-white/5 to-transparent">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]"></div>
                                        
                                        <h3 className="font-serif text-2xl font-bold text-white mb-1 drop-shadow-md">ALGORITHM</h3>
                                        <h3 className="font-serif text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 tracking-widest mb-8 animate-aurora bg-[length:200%_auto]">HYPNOSIS</h3>
                                        
                                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md shadow-inner">
                                            <span className="text-[10px] text-gray-400 font-mono tracking-widest">VOL.1</span>
                                        </div>

                                        {/* Decorative lines */}
                                        <div className="absolute bottom-8 w-12 h-[1px] bg-white/20"></div>
                                        <div className="absolute bottom-7 w-8 h-[1px] bg-white/10"></div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="w-full lg:w-2/3">
                        <FadeIn variant="fade-up">
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-16 text-center lg:text-left">
                                Real Results from<br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">The Underground.</span>
                            </h2>
                        </FadeIn>
                        
                        <div className="flex flex-col gap-10 pb-12">
                            {/* Review 1 - Purple */}
                            <FadeIn delay={200} variant="fade-left">
                                <div className="glass-panel p-8 md:p-10 rounded-2xl border-l-4 border-l-purple-500 relative overflow-hidden group hover:bg-white/5 transition-colors">
                                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors"></div>
                                    <div className="flex gap-1 mb-6 text-purple-400">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 fill-current drop-shadow-lg" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                        ))}
                                    </div>
                                    <p className="text-xl md:text-2xl text-gray-100 leading-relaxed font-serif italic relative z-10">"This isn't a book—it's a tactical guide to a new way of thinking. I stopped posting like a software company and started communicating like a human solving a real problem. The results were instant."</p>
                                    <div className="mt-8 flex items-center border-t border-white/5 pt-6">
                                        <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-300 font-bold text-sm mr-4">JD</div>
                                        <div>
                                            <p className="text-sm font-bold text-white uppercase tracking-wider">B2B SaaS Marketer</p>
                                            <p className="text-xs text-purple-400">Verified Purchase</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Review 2 - Blue */}
                            <FadeIn delay={300} variant="fade-left">
                                <div className="glass-panel p-8 md:p-10 rounded-2xl border-l-4 border-l-blue-500 relative overflow-hidden group hover:bg-white/5 transition-colors">
                                     <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors"></div>
                                     <div className="flex gap-1 mb-6 text-blue-400">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 fill-current drop-shadow-lg" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                        ))}
                                    </div>
                                    <p className="text-xl md:text-2xl text-gray-100 leading-relaxed font-serif italic relative z-10">"I deleted every CTA from my posts and doubled my conversions in 48 hours. This book teaches you to speak the algorithm's native tongue, and it's a game-changer."</p>
                                    <div className="mt-8 flex items-center border-t border-white/5 pt-6">
                                        <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-300 font-bold text-sm mr-4">MS</div>
                                        <div>
                                            <p className="text-sm font-bold text-white uppercase tracking-wider">Freelance Strategist</p>
                                            <p className="text-xs text-blue-400">Verified Purchase</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Review 3 - Cyan */}
                            <FadeIn delay={400} variant="fade-left">
                                <div className="glass-panel p-8 md:p-10 rounded-2xl border-l-4 border-l-cyan-500 relative overflow-hidden group hover:bg-white/5 transition-colors">
                                     <div className="absolute -right-10 -top-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors"></div>
                                     <div className="flex gap-1 mb-6 text-cyan-400">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 fill-current drop-shadow-lg" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                        ))}
                                    </div>
                                    <p className="text-xl md:text-2xl text-gray-100 leading-relaxed font-serif italic relative z-10">"This book is a masterclass in modern digital psychology. It teaches you how to hypnotize an audience without any of the manipulative fluff. A must read."</p>
                                    <div className="mt-8 flex items-center border-t border-white/5 pt-6">
                                        <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-300 font-bold text-sm mr-4">AL</div>
                                        <div>
                                            <p className="text-sm font-bold text-white uppercase tracking-wider">Content Creator</p>
                                            <p className="text-xs text-cyan-400">Verified Purchase</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;