import React from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import platinam from '../../Assets/platinam.jpg'
import kaPhotograhy from '../../Assets/ka-photography.jpg'
import paltinamTutorial from '../../Assets/platinam-tutorial.jpg'


const Project = () => {
    return (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className="card card-compact mx-auto w-72 lg:w-80 bg-base-200 shadow-xl mb-5">
                <figure className='p-3 rounded-xl'><img src={platinam} alt="platinam" /></figure>
                <div className="card-body">
                    <h2 className="card-title">PLATINAM</h2>
                    <p className=''>PLATINAM - is laptops resealing website</p>
                    <p className='text-gray-400'>Technology: React.js | React Query | React Hook Form | MongoDB | Node.js | Express.js | Firebase | Tailwind CSS | Daisy UI | Vercel | JWT.</p>
                    <div className="card-actions justify-between items-center bg-base-100 p-3 rounded-xl">
                        <label htmlFor="my-project-1" className='btn btn-xs btn-outline'>Details</label>
                        <a href="https://platinam-swap.web.app/" target="blank"> <FaExternalLinkAlt></FaExternalLinkAlt></a>
                    </div>
                </div>
            </div>
            <div className="card card-compact mx-auto w-72 lg:w-80 bg-base-200 shadow-xl mb-5">
                <figure className='p-3 rounded-xl'><img src={kaPhotograhy} alt="kaPhotography" /></figure>
                <div className="card-body">
                    <h2 className="card-title">KA PHOTOGRAPHY</h2>
                    <p>KA PHOTOGRAPHY- is weeding photography website</p>
                    <p className='text-gray-400'>Technology: React.js | Node.js | Express.js | MongoDB | Firebase | Tailwind CSS | Daisy UI | Vercel | React photo view | JWT.</p>
                    <div className="card-actions justify-between items-center bg-base-100 p-3 rounded-xl">
                        <label htmlFor="my-project-2" className='btn btn-xs btn-outline'>Details</label>
                        <a href="https://ka-photography.web.app/" target="blank"> <FaExternalLinkAlt></FaExternalLinkAlt></a>
                    </div>
                </div>
            </div>
            <div className="card card-compact mx-auto w-72 lg:w-80 bg-base-200 shadow-xl mb-5">
                <figure className='p-3 rounded-xl'><img src={paltinamTutorial} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">PLATINAM TUTORIAL</h2>
                    <p>PLATINAM TUTORIAL- is e-Learning website</p>
                    <p className='text-gray-400'>Technology: React js | Bootstrap | React Bootstrap | JavaScript | Node.js | Express.js, Firebase | Vercel | React-to-pdf.</p>
                    <div className="card-actions justify-between items-center bg-base-100 p-3 rounded-xl">
                        <label htmlFor="my-project-3" className='btn btn-xs btn-outline'>Details</label>
                        <a href="https://platinam-tutorial.web.app/" target="blank"> <FaExternalLinkAlt></FaExternalLinkAlt></a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Project;