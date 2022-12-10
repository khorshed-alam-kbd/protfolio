import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Project from '../Project/Project';
import Skills from '../Skills/Skills';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="divider mx-10 font-bold" id='about-me'>ABOUT ME</div>
            <About></About>
            <div className="divider mx-10 font-bold" id='projects'>PROJECTS</div>
            <Project></Project>
            <div className="divider mx-10 font-bold" id='skills'>SKILLS & TECHNOLOGIES</div>
            <Skills></Skills>
            <div className="divider mx-10 font-bold" id='contact'>CONTACT WITH ME</div>
        </div>
    );
};

export default Home;