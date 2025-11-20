
import React from 'react';
import FadeIn from './FadeIn';

const Testimonials: React.FC = () => {
    return (
        <section className="py-24 px-4 md:px-8 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row items-start gap-16">
                    
                    {/* Book Visualization - Sticky on Desktop */}
                    <div className="w-full lg:w-1/3 flex-shrink-0 flex justify-center lg:justify-end lg:sticky lg:top-32">
                        <FadeIn variant="zoom-in" duration={800} className="w-full flex justify-center lg:justify-end">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-lg blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                                <div className="relative w-64 aspect-[2/3] bg-gradient-to-br from-gray-800 to-black border border-white/10 rounded-lg shadow-2xl flex flex-col items-center justify-center p-6 text-center transform group-hover:-translate-y-2 transition-transform duration-500">
                                    <div className="w-full h-full border border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                                        <h3 className="font-serif text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-1">ALGORITHM</h3>
                                        <h3 className="font-serif text-2xl font-bold text-purple-400 tracking-widest mb-8">HYPNOSIS</h3>
                                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                                            <span className="text-xs text-gray-500">AH</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="w-full lg:w-2/3">
                        <FadeIn variant="fade-up">
                            <h2 className="font-serif text-4xl font-bold text-white mb-12 text-center lg:text-left">
                                Real Results from<br/>
                                <span className="text-gray-500">The Underground.</span>
                            </h2>
                        </FadeIn>
                        
                        <div className="flex flex-col gap-6">
                            {/* Review 1 - Purple */}
                            <FadeIn delay={200} variant="fade-left">
                                <div className="glass-panel p-8 rounded-xl border-l-4 border-l-purple-500">
                                    <div className="flex gap-1 mb-4 text-purple-400">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                        ))}
                                    </div>
                                    <p className="text-lg text-gray-200 leading-relaxed font-serif italic">"This isn't a book—it's a tactical guide to a new way of thinking. I stopped posting like a software company and started communicating like a human solving a real problem. The results were instant."</p>
                                    <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">— B2B SaaS Marketer</p>
                                </div>
                            </FadeIn>

                            {/* Review 2 - Blue */}
                            <FadeIn delay={300} variant="fade-left">
                                <div className="glass-panel p-8 rounded-xl border-l-4 border-l-blue-500">
                                     <div className="flex gap-1 mb-4 text-blue-400">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                        ))}
                                    </div>
                                    <p className="text-lg text-gray-200 leading-relaxed font-serif italic">"I deleted every CTA from my posts and doubled my conversions in 48 hours. This book teaches you to speak the algorithm's native tongue, and it's a game-changer."</p>
                                    <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">— Freelance Strategist</p>
                                </div>
                            </FadeIn>

                            {/* Review 3 - Cyan (New) */}
                            <FadeIn delay={400} variant="fade-left">
                                <div className="glass-panel p-8 rounded-xl border-l-4 border-l-cyan-500">
                                     <div className="flex gap-1 mb-4 text-cyan-400">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                        ))}
                                    </div>
                                    <p className="text-lg text-gray-200 leading-relaxed font-serif italic">"This book is a masterclass in modern digital psychology. It teaches you how to hypnotize an audience without any of the manipulative fluff. A must read."</p>
                                    <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">— Content Creator</p>
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
