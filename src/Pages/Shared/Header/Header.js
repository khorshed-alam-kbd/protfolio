import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../Assets/khorshed-photo.jpg'

const Header = () => {

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
        <div className="navbar bg-base-100 px-10 fixed z-30">
            <div className="navbar-start">
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src={img} alt="" />
                    </div>
                </div>
                <Link to='/' className='lg:text-xl font-semibold px-3'>KHORSHED ALAM</Link>
            </div>

            <div className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="mx-10 flex px-1 font-semibold">
                        <li><a href="/#about-me" className='hover:border-b-2  hover:border-amber-300 pb-2 px-4 mx-2'>About</a></li>
                        <li><a href="/#projects" className='hover:border-b-2 hover:border-amber-300 pb-2 px-4 mx-2'>Projects</a></li>
                        <li><a href="/#skills" className='hover:border-b-2 hover:border-amber-300 pb-2 px-4 mx-2'>Skills</a></li>
                        <li><a href="/#contact" className='hover:border-b-2 hover:border-amber-300 pb-2 px-4 mx-2'>Contact</a></li>
                        <li><Link to='/blog' className='hover:border-b-2 hover:border-amber-300 pb-2 px-4 mx-2'>Blog</Link></li>
                    </ul>
                </div>
                <Link onClick={downloadResume} className="btn btn-outline hidden lg:flex">Resume</Link>
                <div className="dropdown">
                    <label htmlFor="ka-header-drawer" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div >
    );
};

export default Header;