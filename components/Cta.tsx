
import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({ hours: '00', minutes: '00', seconds: '00' });
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        const BONUS_DURATION = 30 * 60 * 1000;
        let expiryTime = localStorage.getItem('bonusExpiry');
        
        if (!expiryTime) {
            const newExpiryTime = new Date().getTime() + BONUS_DURATION;
            localStorage.setItem('bonusExpiry', newExpiryTime.toString());
            expiryTime = newExpiryTime.toString();
        }

        const expiryTimeNum = parseInt(expiryTime, 10);
        
        if (new Date().getTime() > expiryTimeNum) {
            setIsExpired(true);
            return;
        }

        const intervalId = setInterval(() => {
            const now = new Date().getTime();
            const distance = expiryTimeNum - now;

            if (distance < 0) {
                clearInterval(intervalId);
                setIsExpired(true);
                localStorage.removeItem('bonusExpiry'); 
                const bonusDetailBox = document.querySelector('.bonus-detail-box');
                if (bonusDetailBox) {
                  (bonusDetailBox as HTMLElement).style.display = 'none';
                }
                return;
            }

            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({
                hours: String(hours).padStart(2, '0'),
                minutes: String(minutes).padStart(2, '0'),
                seconds: String(seconds).padStart(2, '0')
            });
        }, 1000);

        return () => clearInterval(intervalId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isExpired) {
        return <p className="text-lg font-bold text-red-400 font-mono tracking-widest">OFFER EXPIRED</p>;
    }

    return (
        <div className="flex justify-center items-center space-x-6 font-mono">
            <div className="text-center">
                <span className="text-4xl font-bold text-white block">{timeLeft.hours}</span>
                <span className="text-[10px] uppercase text-gray-500 tracking-widest">Hours</span>
            </div>
            <span className="text-2xl text-gray-600 mb-3">:</span>
            <div className="text-center">
                <span className="text-4xl font-bold text-white block">{timeLeft.minutes}</span>
                <span className="text-[10px] uppercase text-gray-500 tracking-widest">Mins</span>
            </div>
            <span className="text-2xl text-gray-600 mb-3">:</span>
            <div className="text-center">
                <span className="text-4xl font-bold text-purple-400 block">{timeLeft.seconds}</span>
                <span className="text-[10px] uppercase text-gray-500 tracking-widest">Secs</span>
            </div>
        </div>
    );
};

const Cta: React.FC = () => {
    const [isBonusVisible, setIsBonusVisible] = useState(true);

    useEffect(() => {
      const expiryTime = localStorage.getItem('bonusExpiry');
      if (expiryTime && new Date().getTime() > parseInt(expiryTime, 10)) {
        setIsBonusVisible(false);
      }
    }, []);

    return (
        <section id="purchase" className="py-24 px-4 md:px-8 text-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-purple-900/5 to-transparent -z-10"></div>

            <div className="container mx-auto max-w-4xl">
                <h2 className="font-serif text-4xl sm:text-6xl font-bold mb-6 text-white">The Algorithm is Waiting.</h2>
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                    Stop being a content consumer. Start being an Algorithm Architect.
                </p>
                
                <div className="glass-panel rounded-3xl p-8 md:p-12 mb-12 text-left relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-3 opacity-20">
                        <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"></path></svg>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 relative z-10">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">What's Included</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start group">
                                    <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <span className="text-gray-300 group-hover:text-white transition-colors">The <strong>Algorithm Hypnosis</strong> eBook</span>
                                </li>
                                <li className="flex items-start group">
                                    <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <span className="text-gray-300 group-hover:text-white transition-colors"><strong>The Forbidden Techniques</strong> PDF</span>
                                </li>
                                <li className="flex items-start group">
                                    <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <span className="text-gray-300 group-hover:text-white transition-colors"><strong>AI Tool Directory</strong> & Prompt Vault</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="flex flex-col justify-center">
                             {isBonusVisible && (
                                <div className="bg-purple-500/10 p-6 rounded-xl border border-purple-500/30 bonus-detail-box mb-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Fast Action Bonus</span>
                                        <span className="flex h-2 w-2 relative">
                                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                          <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                                        </span>
                                    </div>
                                    <p className="text-white font-medium">7-Day Implementation Checklist</p>
                                    <p className="text-purple-300 text-sm mt-1">Yours free if you order before the timer hits zero.</p>
                                </div>
                            )}
                            <div id="countdown-timer">
                                <CountdownTimer />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col items-center">
                    <a href="https://selar.com/algorithmhypnosis" className="relative inline-flex items-center justify-center px-12 py-5 text-lg font-bold text-black transition-all duration-200 bg-white rounded-full focus:outline-none hover:bg-gray-200 hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]">
                        Secure Your Copy Now
                    </a>
                    
                    <div className="mt-8 flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2 opacity-70" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            Money-Back Guarantee
                        </div>
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2 opacity-70" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path></svg>
                            Instant Access
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
