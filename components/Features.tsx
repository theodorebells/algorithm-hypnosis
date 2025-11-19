
import React from 'react';

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
        description: "Engineer content that shares itself. Create feedback loops that amplify reach exponentially without extra effort."
    },
    {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
        title: "Neuro-Hooking",
        description: "Scientific structure for the first 3 seconds of any video or post. Grip the reptilian brain immediately."
    },
    {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
        title: "Shadowban Immunity",
        description: "Navigate the algorithm's safety nets. Learn exactly what triggers suppression and how to stay in the spotlight."
    }
];

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => (
    <div className="glass-panel p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group relative overflow-hidden border border-white/5">
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors"></div>
        
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border border-white/10 flex items-center justify-center mb-6 text-purple-300 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-900/20">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {icon}
            </svg>
        </div>
        <h3 className="text-xl font-serif font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
);

const Features: React.FC = () => {
    return (
        <section className="py-24 px-4 md:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">Inside The System</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">This isn't just a book. It's a toolkit for dominating the attention economy.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuresData.map((feature, index) => (
                        <FeatureCard key={index} {...feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
