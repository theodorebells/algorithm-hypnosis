
import React from 'react';
import FadeIn from './FadeIn';

const Header: React.FC = () => {
    return (
        <header className="relative min-h-[90vh] flex items-center justify-center p-8 text-center overflow-hidden">
            {/* Central Glow Effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-center">
                <FadeIn delay={100} variant="zoom-in">
                    <div className="mb-6 inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm tracking-widest uppercase font-semibold backdrop-blur-sm">
                        New Release 2025
                    </div>
                </FadeIn>

                <h1 className="font-serif text-6xl sm:text-8xl font-bold leading-none tracking-tight mb-6 text-white glow-title">
                    <FadeIn delay={300} variant="blur" duration={1000} className="inline-block">
                        <span className="inline-block animate-hypnotic">Algorithm</span>
                    </FadeIn> <br/>
                    <FadeIn delay={500} variant="blur" duration={1000} className="inline-block">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-[length:200%_auto] animate-aurora italic pr-2">Hypnosis</span>
                    </FadeIn>
                </h1>
                
                <FadeIn delay={800} variant="fade-up">
                    <p className="text-2xl sm:text-3xl font-medium text-gray-200 mb-8 max-w-3xl mx-auto">
                        The Secret Language That Commands Attention.
                    </p>
                </FadeIn>

                <FadeIn delay={1000} variant="fade-up">
                    <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Stop chasing trends. Learn the psychological triggers that force the algorithm to work for you, not against you.
                    </p>
                </FadeIn>
                
                <FadeIn delay={1200} variant="pop">
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full sm:w-auto">
                        <a href="https://selar.com/algorithmhypnosis" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-white/5 border border-white/20 font-sans rounded-full focus:outline-none hover:bg-white/10 hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.4)]">
                            <span className="mr-2">Get The Book</span>
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </a>
                        <a href="#free-chapter" className="text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-gray-400 pb-1">
                            Read Chapter 5 Free
                        </a>
                    </div>
                </FadeIn>
            </div>
        </header>
    );
};

export default Header;
