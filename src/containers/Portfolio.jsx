import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Icons from '../components/Icons';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

function Portfolio() {
    return (
        <React.Fragment>
            <Header />
            <About />
            <Icons />
            <Projects />
            <Footer />
        </React.Fragment>
    )
}

export default Portfolio;