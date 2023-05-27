import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import Project from '../Project/Project';
import ProjectDetailsModal from '../Shared/ProjectDetailsModal/ProjectDetailsModal';
import Skills from '../Skills/Skills';
import Certificates from '../Certificates/Certificates';
import IntConferencePublication from '../IntConferencePublication/IntConferencePublication';
const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <div className="divider font-bold" id='projects'>PROJECTS</div>
            <Project></Project>
            <div className="divider font-bold" id='skills'>SKILLS & TECHNOLOGIES</div>
            <Skills></Skills>
            <div className="divider font-bold" id='skills'>CERTIFICATIONS</div>
            <Certificates></Certificates>
            <div className="divider font-bold uppercase" id='skills'> international conference & publication</div>
            <IntConferencePublication></IntConferencePublication>
            <div className="divider font-bold" id='about-me'>ABOUT ME</div>
            <About></About>
            <div className="divider font-bold" id='contact'>CONTACT WITH ME</div>
            <ContactForm></ContactForm>
            <ProjectDetailsModal></ProjectDetailsModal>
        </div>
    );
};

export default Home;