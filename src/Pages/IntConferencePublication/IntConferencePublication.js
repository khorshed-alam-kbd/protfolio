import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import image from '../../Assets/antic-22_certificate_.jpg'
import { FaAngleDoubleRight } from 'react-icons/fa';

const IntConferencePublication = () => {

    const handleJournalClick = (link) => {
        window.open(link, '_blank');
    };


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div className="bg-base-200 p-4 rounded shadow">

                    <PhotoProvider>
                        <PhotoView src={image}>
                            <img src={image} alt='2nd International Conference on Advanced Network Technologies and Intelligent Computing (ANTIC-2022) certificate' className="w-full object-cover" />
                        </PhotoView>
                    </PhotoProvider>

                </div>

                <div className="bg-base-200 p-5 rounded shadow grid place-content-center ">
                    <div>
                        <h3 className="text-xl font-bold mb-2 tex">2nd International Conference on Advanced Network Technologies and Intelligent Computing (ANTIC-2022)</h3>
                        <p className="text-gray-400 mb-1 font-semibold">Department of Computer Science, Banaras Hindu University, India</p>
                        <p className="text-gray-500"> 22 to 24 December, 2022</p>

                        <h3 className="text-lg font-bold mb-2 mt-5">An Improved Approach of Image Steganography Based on Least Significant Bit Technique for Secure Communication in Cloud</h3>
                        <p className="text-gray-400 mb-1 font-semibold">Springer, Cham</p>
                        <p className="text-gray-500">22 March 2023</p>
                        <button
                            className="mt-5 text-blue-400 hover:underline flex gap-1 items-center"
                            onClick={() => handleJournalClick('https://link.springer.com/chapter/10.1007/978-3-031-28180-8_15')}
                        >
                            <FaAngleDoubleRight /> Read the Journal
                        </button>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default IntConferencePublication;