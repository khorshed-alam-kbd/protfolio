import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Project from '../Project/Project';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="divider mx-10">ABOUT ME</div>
            <About></About>
            <div className="divider mx-10">PROJECT</div>
            <Project></Project>
            <div className="divider mx-10">CONTACT ME</div>
        </div>
    );
};

export default Home;