
import React, { useState } from 'react';
import FadeIn from './FadeIn';

interface FaqItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
    isLast: boolean;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick, isLast }) => {
    return (
        <div className={`border-b border-white/5 ${isLast ? 'border-b-0' : ''}`}>
            <button onClick={onClick} className="w-full flex justify-between items-center text-left py-6 font-medium text-white hover:text-purple-300 transition-colors group">
                <span className="text-lg font-serif group-hover:translate-x-1 transition-transform duration-200">{question}</span>
                <div className={`ml-4 w-8 h-8 rounded-full flex items-center justify-center border border-white/10 transition-all duration-300 flex-shrink-0 ${isOpen ? 'bg-purple-500/20 border-purple-500/50 rotate-180' : 'bg-white/5 group-hover:bg-white/10'}`}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-400 leading-relaxed pr-8">{answer}</p>
            </div>
        </div>
    );
};

const faqData = [
    {
        question: "How is this different from other social media books?",
        answer: "Most social media books teach you what to post. Algorithm Hypnosis teaches you how the brain processes content and how to use psychological principles to command attention. It's less about content creation and more about attention architecture."
    },
    {
        question: "Do I need to be tech-savvy to use the AI tools?",
        answer: "Not at all. The book includes simple, copy-paste prompts and step-by-step guides for tools like ChatGPT. If you can use a smartphone, you can implement the AI strategies."
    },
    {
        question: "How quickly will I see results?",
        answer: "Many readers report noticeable changes in engagement within the first week of implementing the Pattern Interrupt strategies. The included 7-Day Awakening plan is designed to deliver quick wins while building toward long-term success."
    },
    {
        question: "What if I don't have a large following?",
        answer: "The strategies in Algorithm Hypnosis work regardless of your follower count. In fact, they're especially powerful for those starting out or with smaller audiences, as they help you stand out in a crowded space."
    },
    {
        question: "Is there a money-back guarantee?",
        answer: "Yes! If you implement the strategies in the book and don't see noticeable improvements in your engagement and reach within 90 days, we'll provide a full refund. No questions asked."
    }
];

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 px-4 md:px-8 relative">
             {/* Decorative background glow */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-purple-900/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            <div className="container mx-auto max-w-4xl">
                <FadeIn variant="fade-up">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
                </FadeIn>
                
                {/* Unified Glass Panel styling, removed inner opaque div */}
                <FadeIn delay={200} variant="fade-up">
                    <div className="glass-panel rounded-3xl p-6 md:p-12 border border-white/10 hover:border-white/20 transition-colors duration-500">
                        {faqData.map((item, index) => (
                            <FaqItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                isOpen={openIndex === index}
                                onClick={() => handleToggle(index)}
                                isLast={index === faqData.length - 1}
                            />
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default Faq;
