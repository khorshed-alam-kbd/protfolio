import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../Assets/khorshed-photo-ph.jpg'

const Header = () => {
    return (
        <div className="navbar bg-base-100 px-10">
            <div className="navbar-start">
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src={img} alt="" />
                    </div>
                </div>
                < Link to='/' className="btn btn-ghost normal-case text-xl">KHORSHED</Link>
            </div>

            <div className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to=''>About</Link></li>
                        <li><Link to=''>Project</Link></li>
                        <li><Link to=''>Skills</Link></li>
                    </ul>
                </div>
                <Link to='' className="btn  btn-outline hidden lg:flex">Resume</Link>
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