import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import TechStack from '../components/TechStack';
import FutureScope from '../components/FutureScope';
import Impact from '../components/Impact';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Problem />
                <HowItWorks />
                <Features />
                <TechStack />
                <FutureScope />
                <Impact />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
