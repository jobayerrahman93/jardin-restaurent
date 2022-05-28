import React from 'react';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';
import SpecialMenu from '../../components/SpecialMenu/SpecialMenu';

const Home = () => {
    return (
        <>

            <HeroSection />
            <About />
            <SpecialMenu />
            <Footer />

        </>
    );
};

export default Home;