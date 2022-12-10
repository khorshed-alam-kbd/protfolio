import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <div className="drawer drawer-end">
                <input id="ka-header-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Header></Header>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="ka-header-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-1/2 bg-base-100 text-base-content">
                        <li className='place-content-end'><label htmlFor="ka-header-drawer" className="btn btn-sm btn-circle ">✕</label></li>
                        <div className='text-center'>
                            <Link to=''>About</Link> <br />
                            <Link to=''>About</Link> <br />
                            <Link to=''>About</Link>
                        </div>
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Main;