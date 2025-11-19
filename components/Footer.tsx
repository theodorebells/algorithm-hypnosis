
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="relative py-12 px-4 text-center border-t border-white/5 bg-black/20 backdrop-blur-md">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-left">
                    <h3 className="font-serif text-xl font-bold text-white">Algorithm Hypnosis</h3>
                    <p className="text-gray-500 text-sm mt-1">Master the code. Command attention.</p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Support</a>
                </div>

                <div className="text-gray-600 text-xs">
                    <p>&copy; 2025 Algorithm Hypnosis. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
