import React from 'react';
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
        <div className="navbar bg-base-100 px-10">
            <div className="navbar-start">
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>

            <div className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="/#about-me">About</a></li>
                        <li><a href="/#projects">Projects</a></li>
                        <li><a href="/#skills">Skills</a></li>
                        <li><a href="/#contact">Contact</a></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <Link onClick={downloadResume} className="btn  btn-outline hidden lg:flex">Resume</Link>
                <div className="dropdown">
                    <label htmlFor="ka-header-drawer" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;