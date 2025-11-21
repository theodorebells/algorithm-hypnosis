
import React, { useState, useEffect, useRef } from 'react';
import FadeIn from './FadeIn';

const featuresData = [
    {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />,
        title: "The Hypnotic Framework",
        description: "Master the psychological triggers and pattern interrupts that force attention and turn scrollers into loyal followers."
    },
    {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />,
        title: "The AI Amplifier",
        description: "Leverage tools like ChatGPT to write viral hooks, automate DMs, and turn one idea into 30 days of content."
    },
    {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
        title: "Silent Sales Engine",
        description: "Turn conversations into cash. Convert inbound interest into paying clients without \"launching\" or feeling salesy."
    },
    {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />,
        title: "The Anti-Content System",
        description: "Stop chasing polished perfection. Raw, authentic \"Truth Bombs\" attract a loyal audience faster than a fancy funnel."
    },
    {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
        title: "Credibility Shortcut",
        description: "Skip years of trying to build authority. Use ethical psychological shortcuts to package your expertise instantly."
    },
    {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
        title: "7-Day Awakening",
        description: "A step-by-step roadmap to implement the entire system in just one week. Go from invisible to commanding."
    },
    {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />,
        title: "The Viral Loop",
        description: "Create content that doesn't just get viewed, but shared. Turn every follower into a distribution channel for your brand."
    },
    {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />,
        title: "Neuro-Hooking",
        description: "The specific science of the first 3 seconds. How to trigger an immediate dopamine response that makes scrolling impossible."
    },
    {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
        title: "Shadowban Immunity",
        description: "Navigate the dangerous waters of algorithm censorship. Learn exactly what words trigger reach restriction and how to bypass them."
    }
];

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    isActive: boolean;
    onClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, isActive, onClick }) => (
    <div 
        onClick={onClick}
        className={`glass-panel p-8 rounded-3xl transition-all duration-500 group relative overflow-hidden border flex-shrink-0 w-[85vw] md:w-[380px] snap-center flex flex-col h-full cursor-pointer
        ${isActive 
            ? 'border-purple-500 shadow-[0_0_30px_-10px_rgba(168,85,247,0.5)] opacity-100 scale-100 z-10 bg-white/10' 
            : 'border-white/5 opacity-50 scale-95 bg-transparent hover:opacity-70'}`}
    >
        {isActive && (
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl transition-colors animate-pulse"></div>
        )}
        
        <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 transition-all duration-500 shadow-lg flex-shrink-0
            ${isActive 
                ? 'bg-purple-900/50 border-purple-400 text-white scale-110' 
                : 'bg-white/5 border-white/10 text-purple-300/70'}`}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {icon}
            </svg>
        </div>
        <h3 className={`text-xl font-serif font-bold mb-3 transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400'}`}>{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-grow">{description}</p>
    </div>
);

const Features: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Automatic scroll timer
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % featuresData.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [isPaused]);

    // Sync scroll position with active index to CENTER the card
    useEffect(() => {
        if (containerRef.current) {
            const container = containerRef.current;
            const cards = Array.from(container.children) as HTMLElement[];
            const activeCard = cards[activeIndex];

            if (activeCard) {
                // Calculate scroll position to center the card
                // scrollLeft = card.offsetLeft - (containerWidth / 2) + (cardWidth / 2)
                const scrollLeft = activeCard.offsetLeft - (container.clientWidth / 2) + (activeCard.clientWidth / 2);
                
                container.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth'
                });
            }
        }
    }, [activeIndex]);

    return (
        <section className="py-24 px-0 md:px-8 overflow-hidden">
            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12 px-4">
                    <FadeIn variant="blur" duration={1000}>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">Inside The System</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">This isn't just a book. It's a toolkit for dominating the attention economy.</p>
                    </FadeIn>
                </div>
                
                {/* Auto-Scrolling Carousel */}
                <FadeIn variant="fade-up" delay={200}>
                    <div 
                        ref={containerRef}
                        className="flex overflow-x-auto gap-6 px-4 md:px-12 py-12 hide-scrollbar snap-x snap-mandatory items-center"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onTouchStart={() => setIsPaused(true)} // Pause on touch drag
                        onTouchEnd={() => setIsPaused(false)}
                    >
                        {featuresData.map((feature, index) => (
                            <FeatureCard 
                                key={index} 
                                {...feature} 
                                isActive={index === activeIndex}
                                onClick={() => setActiveIndex(index)}
                            />
                        ))}
                        {/* Spacer to ensure nice padding at end if needed */}
                        <div className="w-1 md:w-12 flex-shrink-0"></div>
                    </div>
                </FadeIn>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-2 mt-0">
                    {featuresData.map((_, i) => (
                        <button 
                            key={i} 
                            onClick={() => setActiveIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-purple-500' : 'w-2 bg-gray-700 hover:bg-gray-500'}`}
                            aria-label={`Go to feature ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
    