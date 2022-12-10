import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

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
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
                <div className="drawer-side">
                    <label htmlFor="ka-header-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-1/2 bg-base-100 text-base-content">
                        <li className='place-content-end'><label htmlFor="ka-header-drawer" className="btn btn-sm btn-circle ">✕</label></li>
                        <ul className="menu menu-vertical text-center px-1">
                            <li><a href="/#about-me" htmlFor="ka-header-drawer">About</a></li>
                            <li><a href="/#projects">Projects</a></li>
                            <li><a href="/#skills">Skills</a></li>
                            <li><a href="/#contact">Contact</a></li>
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                        <li><Link onClick={downloadResume} className="btn  btn-outline mt-5">Resume</Link></li>
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Main;