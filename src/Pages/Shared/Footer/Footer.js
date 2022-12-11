import React from 'react';
import { FaGithub, FaFacebook, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-4 bg-base-100 text-base-content">
                <div className="menu menu-horizontal lg:hidden">
                    <li><a href="https://github.com/khorshed-alam-kbd/" target="blank"><FaGithub /></a></li>
                    <li><a href="https://linkedin.com/in/khorshedalam-kbd/" target="blank"><FaLinkedinIn /></a></li>
                    <li><a href="https://facebook.com/engr.khorshedalam.bd/" target="blank"><FaFacebook /></a></li>
                    <li><a href="https://instagram.com/khor__shed/" target="blank"><FaInstagram /></a></li>
                    <li><a href="https://twitter.com/khor__shed" target="blank"><FaTwitter /></a></li>
                </div>
                <div>
                    <p>Copyright © 2022 - All right reserved by KHORSHED ALAM</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;