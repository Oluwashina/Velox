import React from 'react';
import AboutSection from '../components/Home/About';
import Download from '../components/Home/Download';
import Footer from '../components/Home/Footer';
import Hero from '../components/Home/Hero';
import Process from '../components/Home/Process';

const Home = () => {
    return ( 
        <>
            <Hero />
            <AboutSection />
            <Process />
            <Download />
            <Footer />
        </>
     );
}
 
export default Home;