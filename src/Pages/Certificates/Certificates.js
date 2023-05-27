import React from 'react';

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
                    <div key={index} className="bg-base-200 p-4 rounded shadow">
                        <img
                            src={certificate.image}
                            alt={certificate.title}
                            className="w-full object-cover mb-4"
                        />
                        <div>
                            <h3 className="text-lg font-bold mb-2">{certificate.title}</h3>
                            <p className="text-gray-400 mb-1 font-semibold">{certificate.issuer}</p>
                            <p className="text-gray-500">{certificate.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certificates;