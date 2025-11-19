
import React, { useState, useEffect } from 'react';

const StickyCta: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className={`fixed bottom-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="absolute inset-0 bg-[#050507]/90 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_40px_-15px_rgba(139,92,246,0.3)]"></div>
            <div className="relative container mx-auto max-w-6xl px-4 py-3 md:py-4 flex items-center justify-between">
                {/* Text Container - Visible on all screens now */}
                <div className="flex flex-col pr-4 max-w-[65%] md:max-w-none">
                    <span className="text-white font-serif font-bold tracking-tight text-sm md:text-base">Algorithm Hypnosis</span>
                    <span className="text-gray-400 text-[10px] md:text-xs leading-tight mt-0.5">The Secret Language That Commands Attention</span>
                </div>
                
                {/* Button Container */}
                <div className="flex items-center shrink-0">
                    <a href="https://selar.com/algorithmhypnosis" className="px-5 py-2.5 md:px-6 md:py-3 bg-white text-black font-bold rounded-full text-xs md:text-sm hover:bg-gray-200 transition-colors hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] whitespace-nowrap">
                        Get It Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default StickyCta;
