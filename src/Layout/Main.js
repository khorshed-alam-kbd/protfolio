import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import { FaGithub, FaFacebook, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Main = () => {
    const downloadResume = () => {
        fetch('khorshed-alam-resume.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'khorshed-alam-resume.pdf';
                alink.click();
            })
        })
    }


    return (
        <div>
            <div className="drawer drawer-end">
                <input id="ka-header-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Header></Header>
                    <div className='grid grid-cols-12'>
                        <div className='hidden lg:grid text-center absolute bottom-0 left-3'>
                            <div className="menu menu-vertical ">
                                <li><a href="https://github.com/khorshed-alam-kbd/" target="blank" className='hover:border-l-2 hover:border-amber-300' ><FaGithub /></a></li>
                                <li><a href="https://linkedin.com/in/khorshedalam-kbd/" target="blank" className='hover:border-l-2 hover:border-amber-300'><FaLinkedinIn /></a></li>
                                <li><a href="https://facebook.com/engr.khorshedalam.bd/" target="blank" className='hover:border-l-2 hover:border-amber-300' ><FaFacebook /></a></li>
                                <li><a href="https://instagram.com/khor__shed/" target="blank" className='hover:border-l-2 hover:border-amber-300'><FaInstagram /></a></li>
                                <li><a href="https://twitter.com/khor__shed" target="blank" className='hover:border-l-2 hover:border-amber-300'><FaTwitter /></a></li>
                                <div style={{ writingMode: 'vertical-rl' }}>_________________________</div>
                            </div>
                        </div>
                        <div className='col-start-2 col-span-10'><Outlet></Outlet></div>
                        <div className='hidden lg:grid text-center absolute bottom-0 right-10'>
                            <div style={{ writingMode: 'vertical-rl' }}>khorshedalam.kbd@gmail.com ____________________</div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
                <div className="drawer-side">
                    <label htmlFor="ka-header-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-1/2 bg-base-100 text-base-content">
                        <li className='place-content-end'><label htmlFor="ka-header-drawer" className="btn btn-sm btn-circle ">✕</label></li>
                        <ul className="text-center px-1">
                            <li><a href="/#about-me" htmlFor="ka-header-drawer" className='hover:border-l-2 hover:border-amber-300 px-4 mx-2'>About</a></li>
                            <li><a href="/#projects" className='hover:border-l-2 hover:border-amber-300 px-4 mx-2'>Projects</a></li>
                            <li><a href="/#skills" className='hover:border-l-2 hover:border-amber-300 px-4 mx-2'>Skills</a></li>
                            <li><a href="/#contact" className='hover:border-l-2 hover:border-amber-300 px-4 mx-2'>Contact</a></li>
                            <li><Link to='/blog' className='hover:border-l-2 hover:border-amber-300 px-4 mx-2'>Blog</Link></li>
                        </ul>
                        <li><Link onClick={downloadResume} className="btn btn-outline mt-5">Resume</Link></li>
                    </ul>
                </div>
            </div>


        </div >
    );
};

export default Main;