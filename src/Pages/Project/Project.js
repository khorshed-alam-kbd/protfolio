import React from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import platinam from '../../Assets/platinam.jpg'
import kaPhotograhy from '../../Assets/ka-photography.jpg'
import paltinamTutorial from '../../Assets/platinam-tutorial.jpg'


const Project = () => {
    return (
        <div className='lg:flex flex-row gap-5 justify-center place-items-center'>
            <div className="card card-compact w-96 bg-base-200 shadow-xl mb-5">
                <figure><img src={platinam} alt="platinam" /></figure>
                <div className="card-body">
                    <h2 className="card-title">PLATINAM</h2>
                    <p>PLATINAM - is laptops resealing website</p>
                    <p>Technology: React.js, React Query, React Hook Form, MongoDB, Node.js, Express.js, Firebase, Tailwind CSS, Daisy UI, Vercel, JWT.</p>
                    <div className="card-actions justify-end">
                        <a href="https://platinam-swap.web.app/" target="blank"> <FaExternalLinkAlt></FaExternalLinkAlt></a>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-200 shadow-xl mb-5">
                <figure><img src={kaPhotograhy} alt="kaPhotography" /></figure>
                <div className="card-body">
                    <h2 className="card-title">KA PHOTOGRAPHY</h2>
                    <p>KA PHOTOGRAPHY- is weeding photography website</p>
                    <p>Technology: React.js, Node.js, Express.js, MongoDB, Firebase, Tailwind CSS, Daisy UI, Vercel, React Photo View, JWT.</p>
                    <div className="card-actions justify-end">
                        <a href="https://ka-photography.web.app/" target="blank"> <FaExternalLinkAlt></FaExternalLinkAlt></a>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-200 shadow-xl mb-5">
                <figure><img src={paltinamTutorial} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">PLATINAM TUTORIAL</h2>
                    <p>PLATINAM TUTORIAL- is e-Learning website</p>
                    <p>Technology: React js, Bootstrap, React Bootstrap, JavaScript, Node.js, Express.js, Firebase, Vercel, React to Pdf.</p>
                    <div className="card-actions justify-end">
                        <a href="https://platinam-tutorial.web.app/" target="blank"> <FaExternalLinkAlt></FaExternalLinkAlt></a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Project;