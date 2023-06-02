import React from 'react';
import { FaGithub, FaFacebook, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-4 bg-base-100 text-base-content">
                <div className="menu menu-horizontal lg:hidden">
                    <li><a href="https://github.com/khorshed-alam-kbd/" target="blank" className='hover:border-b-2 hover:border-amber-300'><FaGithub /></a></li>
                    <li><a href="https://linkedin.com/in/khorshedalam-kbd/" target="blank" className='hover:border-b-2 hover:border-amber-300' ><FaLinkedinIn /></a></li>
                    <li><a href="https://facebook.com/engr.khorshedalam.bd/" target="blank" className='hover:border-b-2 hover:border-amber-300'><FaFacebook /></a></li>
                    <li><a href="https://instagram.com/khor__shed/" target="blank" className='hover:border-b-2 hover:border-amber-300'><FaInstagram /></a></li>
                    <li><a href="https://twitter.com/khor__shed" target="blank" className='hover:border-b-2 hover:border-amber-300'><FaTwitter /></a></li>
                </div>
                <div>
                    <p>Copyright © 2023 - All right reserved by KHORSHED ALAM</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;