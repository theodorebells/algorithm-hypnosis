
import React from 'react';
import Header from './components/Header';
import SocialProof from './components/SocialProof';
import FreeChapter from './components/FreeChapter';
import Audience from './components/Audience';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Cta from './components/Cta';
import Footer from './components/Footer';
import StickyCta from './components/StickyCta';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <SocialProof />
                <FreeChapter />
                <Audience />
                <Features />
                <Testimonials />
                <Faq />
                <Cta />
            </main>
            <Footer />
            <StickyCta />
        </>
    );
};

export default App;
