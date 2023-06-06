import React from 'react';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import img1 from '../../Assets/black_belt_certificate_ph.png'
import img2 from '../../Assets/professional_web_development_certificate.jpg'
import img3 from '../../Assets/Bsc_CSE_Certificate.jpg'

const Certificates = () => {

    const certificates = [
        {
            title: 'Black Belt in Complete Web Development Course ',
            issuer: 'Programming Hero',
            date: '16 February 2023',
            image: img1,
        },
        {
            title: 'Complete Web Development Course With Jhankar Mahbub',
            issuer: 'Programming Hero',
            date: '16 February 2023',
            image: img2,
        },
        {
            title: 'Bachelor of Science in Computer Science and Engineering',
            issuer: 'World University of Bangladesh',
            date: '28 June 2022',
            image: img3,
        },
    ];

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certificates.map((certificate, index) => (
                    <div key={index} className="bg-base-200 p-4 mx-auto w-72 lg:w-80 rounded-xl shadow-xl mb-5 ">
                        <PhotoProvider>
                            <PhotoView src={certificate.image}>
                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                    className="w-full object-cover mb-4"
                                />
                            </PhotoView>
                        </PhotoProvider>
                        <div>
                            <h3 className="text-lg font-bold mb-2">{certificate.title}</h3>
                            <p className="text-gray-400 mb-1">{certificate.issuer}</p>
                            <p className="text-gray-500">{certificate.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certificates;