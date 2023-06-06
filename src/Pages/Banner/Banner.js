import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Banner = () => {
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
        <div className="my-10 bg-base-100 mt-20">
            <div>
                <div className="">
                    <p className='my-3 text-gray-400'>Hi, my name is</p>
                    <h1 className="text-2xl lg:text-5xl font-bold my-3 ">MD. KHORSHED ALAM</h1>

                    <p className="text-xl text-amber-800 lg:text-3xl font-bold my-3">
                        <Typewriter

                            options={{
                                strings: ['FRONT-END DEVELOPER', 'MERN-STACK DEVELOPER'],
                                autoStart: true,
                                loop: true,
                            }}
                        />

                    </p>
                    <p className='my-3 lg:w-1/2 text-gray-400'>I am completed Bachelor of Science in Computer Science and Engineering from the World University of Bangladesh. I am developing web applications and working across MERN Stack development .</p>
                    <Link onClick={downloadResume} className="btn  btn-outline mt-3 mr-3">Resume</Link>
                    <a href="/#contact"><button className="btn btn-outline mt-3">HIRE ME</button></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;