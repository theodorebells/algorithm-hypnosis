
import React from 'react';
import FadeIn from './FadeIn';

interface ItemProps {
    children: React.ReactNode;
}

const PerfectForItem: React.FC<ItemProps> = ({ children }) => (
    <li className="flex items-start group/item">
        <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
        </svg>
        <span className="text-gray-300 group-hover/item:text-white transition-colors">{children}</span>
    </li>
);

const NotForItem: React.FC<ItemProps> = ({ children }) => (
    <li className="flex items-start group/item">
        <svg className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
        </svg>
        <span className="text-gray-400 group-hover/item:text-gray-300 transition-colors">{children}</span>
    </li>
);


const Audience: React.FC = () => {
    return (
        <section className="py-24 px-4 md:px-8 relative">
            <div className="container mx-auto max-w-5xl">
                <FadeIn variant="fade-up">
                    <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-12 text-center">Who Is This For?</h2>
                </FadeIn>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden p-2">
                    {/* Glassmorphism Panel for "Perfect For" - Comes from Left */}
                    <FadeIn delay={100} variant="fade-right" className="h-full">
                        <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden h-full">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                            
                            <h3 className="text-2xl font-serif font-bold text-white mb-8 flex items-center">
                                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center mr-4 border border-green-500/20">
                                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                Perfect For
                            </h3>
                            <ul className="space-y-5 relative z-10">
                                <PerfectForItem>Content creators struggling with visibility</PerfectForItem>
                                <PerfectForItem>Coaches & consultants wanting to attract clients</PerfectForItem>
                                <PerfectForItem>Freelancers looking to stand out and get hired</PerfectForItem>
                                <PerfectForItem>Small business owners wanting to grow online</PerfectForItem>
                                <PerfectForItem>Anyone tired of posting content that gets ignored</PerfectForItem>
                            </ul>
                        </div>
                    </FadeIn>
                    
                    {/* Glassmorphism Panel for "Not For" - Comes from Right */}
                    <FadeIn delay={200} variant="fade-left" className="h-full">
                        <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden h-full">
                             <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                            <h3 className="text-2xl font-serif font-bold text-white mb-8 flex items-center">
                                 <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mr-4 border border-red-500/20">
                                    <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                Not For
                            </h3>
                            <ul className="space-y-5 relative z-10">
                                <NotForItem>Those looking for "get rich quick" schemes</NotForItem>
                                <NotForItem>People unwilling to implement what they learn</NotForItem>
                                <NotForItem>Those wanting to use manipulative tactics</NotForItem>
                                <NotForItem>People satisfied with their current results</NotForItem>
                            </ul>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default Audience;
