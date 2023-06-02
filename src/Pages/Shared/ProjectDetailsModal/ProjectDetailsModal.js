import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaGithubSquare } from 'react-icons/fa';
const ProjectDetailsModal = () => {
    return (
        <div>
            {/* project-1 */}
            <div>
                <input type="checkbox" id="my-project-1" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-2xl">
                        <label htmlFor="my-project-1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        {/* <figure><img src={img1} alt="" className='rounded-xl' /></figure> */}
                        <div className='bg-base-200 p-5 my-5 rounded-xl'>
                            <h3 className="text-lg font-bold">PLATINAM - is laptops resealing website</h3>
                            <p className="text font-semibold pt-3">Features:</p>
                            <p className="pb-2">• Firebase Authentication is implemented with email and password-based login and Google login with a pop-up. Users can register their account's role as a buyer or a seller. The buyer role default for google account login users. MongoDB database is used for storing all the data.</p>
                            <p className="py-2">• Buyer accounts can book and report products from the selected categories and make payments from the orders dashboard. Seller accounts can manage products such as deleting, advertising unsold products and also added a new product. </p>
                            <p className="py-2">• Another is the admin role, admin manages all buyers, and sellers such as deleting or verify accounts and also deleting reported products.</p>
                            <p className="py-2">Technology: <br /> React.js | React Query | React Hook Form | MongoDB | Node.js | Express.js | Firebase | Tailwind CSS | Daisy UI | Vercel | JWT.</p>
                        </div>
                        <div className="card-actions justify-between items-center p-2 ">
                            <label htmlFor="my-project-1" className='btn btn-xs btn-outline rounded-circle'>✕</label>
                            <a href="https://github.com/khorshed-alam-kbd/platinam-resale-clientsite" target="blank"
                                className="tooltip" data-tip="Client Site"> <FaGithub /></a>
                            <a href="https://github.com/khorshed-alam-kbd/platinam-resale-serversite" target="blank"
                                className="tooltip" data-tip="Server Site"> <FaGithubSquare /></a>
                            <a href="https://platinam-swap.web.app/" target="blank"
                                className="tooltip" data-tip="Live Site"> <FaExternalLinkAlt /></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* project-2 */}
            <div>
                <input type="checkbox" id="my-project-2" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-2xl">
                        <label htmlFor="my-project-2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        {/* <figure><img src={img2} alt="" className='rounded-xl' /></figure> */}
                        <div className='bg-base-200 p-5 my-5 rounded-xl'>
                            <h3 className="text-lg font-bold">KA PHOTOGRAPHY- is weeding photography website</h3>
                            <p className="text font-semibold pt-3">Features:</p>
                            <p className="pb-2">• Firebase Authentication is implemented with email and password-based login, Google and GitHub account Login with a pop-up. MongoDB database is used for storing all the data.</p>
                            <p className="py-2">• Users can explore, review the service, and see other reviews for this service. Reviews are updated when the users add a new review. Users can manage all the reviews such as deleting and updating reviews.</p>
                            <p className="py-2">• Users can add new services and added services available in the services section. MongoDB CRUD operations are used to update all the data in the database</p>
                            <p className="py-2">Technology: <br /> React.js | Node.js | Express.js | MongoDB | Firebase | Tailwind CSS, Daisy UI | Vercel | React photo view | JWT.</p>
                        </div>
                        <div className="card-actions justify-between items-center p-2 ">
                            <label htmlFor="my-project-1" className='btn btn-xs btn-outline rounded-circle'>✕</label>
                            <a href="https://github.com/khorshed-alam-kbd/ka-photography-clientsite" target="blank"
                                className="tooltip" data-tip="Client Site"> <FaGithub /></a>
                            <a href="https://github.com/khorshed-alam-kbd/ka-photography-serversite" target="blank"
                                className="tooltip" data-tip="Server Site"> <FaGithubSquare /></a>
                            <a href="https://ka-photography.web.app/" target="blank"
                                className="tooltip" data-tip="Live Site"> <FaExternalLinkAlt /></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* project-3 */}
            <div>
                <input type="checkbox" id="my-project-3" className="modal-toggle" />
                <div className="modal scrollbar-hide">
                    <div className="modal-box w-11/12 max-w-2xl">
                        <label htmlFor="my-project-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        {/* <figure><img src={img3} alt="" className='rounded-xl' /></figure> */}
                        <div className='bg-base-200 p-5 my-5 rounded-xl'>
                            <h3 className="text-lg font-bold">PLATINAM TUTORIAL- is e-Learning website</h3>
                            <p className="text font-semibold pt-3">Features:</p>
                            <p className="pb-2">• Firebase Authentication is implemented with email and password-based login, Google and GitHub account Login with a pop-up.</p>
                            <p className="py-2">• Users can explore all the courses. Users can download the course details as a pdf file and book a course. An alert pop-up will be shown after every successful or unsuccessful activity.</p>
                            <p className="py-2">• The courses book section is a private route, the user must be logged in to book the course.</p>
                            <p className="py-2">Technology: <br /> React js | Bootstrap | React Bootstrap | JavaScript | Node.js | Express.js, Firebase | Vercel | React-to-pdf.</p>
                        </div>
                        <div className="card-actions justify-between items-center p-2 ">
                            <label htmlFor="my-project-1" className='btn btn-xs btn-outline rounded-circle'>✕</label>
                            <a href="https://github.com/khorshed-alam-kbd/platinam-tutorial-clientsite" target="blank"
                                className="tooltip" data-tip="Client Site"> <FaGithub /></a>
                            <a href="https://github.com/khorshed-alam-kbd/platinam-tutorial-serversite" target="blank"
                                className="tooltip" data-tip="Server Site"> <FaGithubSquare /></a>
                            <a href="https://platinam-tutorial.web.app/" target="blank"
                                className="tooltip" data-tip="Live Site"> <FaExternalLinkAlt /></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProjectDetailsModal;