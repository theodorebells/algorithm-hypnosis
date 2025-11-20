
import React, { useState } from 'react';
import FadeIn from './FadeIn';

const FreeChapter: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChapter = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section id="free-chapter" className="py-24 px-4 md:px-8 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none"></div>
            
            <div className="container mx-auto max-w-4xl relative z-10">
                <FadeIn variant="zoom-in" duration={700} delay={200}>
                    <div className="glass-panel rounded-3xl p-1 border-t border-white/10 shadow-2xl shadow-purple-900/20">
                        <div className="bg-[#0a0a0c]/90 backdrop-blur-xl rounded-[20px] overflow-hidden">
                            {/* Header of the Card */}
                            <div className="p-8 md:p-12 text-center border-b border-white/5">
                                <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-widest rounded-sm mb-4">
                                    Free Preview Access
                                </div>
                                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                                    Chapter 5: Commanding Attention
                                </h2>
                                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                                    Discover the "Pattern Interrupt" method that stops the scroll dead in its tracks. No email required.
                                </p>
                                
                                <button 
                                    onClick={toggleChapter} 
                                    className={`group flex items-center justify-center mx-auto w-full md:w-auto px-6 py-3 rounded-full border transition-all duration-300 ${isOpen ? 'bg-purple-600 border-purple-600 text-white' : 'bg-transparent border-gray-600 text-gray-300 hover:border-purple-400 hover:text-white'}`}
                                >
                                    <span className="font-medium mr-2">{isOpen ? 'Close Preview' : 'Read Chapter Now'}</span>
                                    <svg className={`w-4 h-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>
                            </div>
                            
                            <div className={`chapter-content bg-black/20 ${isOpen ? 'open' : ''}`}>
                                <div className="p-8 md:p-12 max-w-3xl mx-auto">
                                    <div className="prose prose-invert prose-lg max-w-none font-serif">
                                        <h3 className="text-2xl font-bold text-purple-200 italic mb-6">"You don't need more followers — you need more interruption."</h3>
                                        
                                        <div className="font-sans text-gray-300 space-y-6">
                                            <p>The average person scrolls past <strong className="text-white bg-purple-900/50 px-1 rounded">92% of the content they see</strong>. Not because it's bad — because their brain is already full.</p>
                                            <p>You're not competing with creators. You're competing with <strong>cortisol, chaos, and cat videos</strong>.</p>
                                            
                                            <div className="my-8 pl-6 border-l-2 border-purple-500">
                                                <h4 className="text-white font-bold text-xl mb-2">What is a Pattern Interrupt?</h4>
                                                <p className="text-gray-400">A deliberate break in rhythm that disrupts the brain's auto-scroll reflex. It forces attention. It creates pause.</p>
                                            </div>

                                            <h5 className="text-white font-bold text-lg mt-8">3 Proven Pattern Interrupt Types</h5>
                                            <ul className="list-none space-y-3 pl-0">
                                                <li className="flex items-start">
                                                    <span className="text-purple-400 mr-2">01.</span>
                                                    <span><strong>Shock + Curiosity:</strong> Say something that challenges assumptions.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-purple-400 mr-2">02.</span>
                                                    <span><strong>Format Disruption:</strong> Use voice notes, ugly slides, raw Notes app screens.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-purple-400 mr-2">03.</span>
                                                    <span><strong>Taboo Truths:</strong> Talk about what no one else will.</span>
                                                </li>
                                            </ul>

                                            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-white/10 mt-8">
                                                <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">Case Study</div>
                                                <p className="text-white font-bold mb-2">The "Blurry Screenshot" Strategy</p>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-4">
                                                    <div>
                                                        <span className="block text-gray-500 mb-1">Before (Polished)</span>
                                                        <span className="text-gray-300">80–150 views, 0 leads</span>
                                                    </div>
                                                    <div>
                                                        <span className="block text-purple-400 mb-1">After (Raw/Blurry)</span>
                                                        <span className="text-white font-bold">38K impressions, 7 calls booked</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-12 text-center pt-8 border-t border-white/10">
                                        <p className="text-gray-400 italic text-sm mb-6">This is just 1 of 12 chapters in the full system.</p>
                                        <a href="https://selar.com/algorithmhypnosis" className="inline-flex items-center px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-purple-50 transition-colors">
                                            Unlock All 12 Chapters
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default FreeChapter;
