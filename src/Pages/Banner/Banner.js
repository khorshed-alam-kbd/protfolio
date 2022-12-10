import React from 'react';

const Banner = () => {
    return (
        <div className="mx-10 my-10 bg-base-100">
            <div>
                <div className="">
                    <p className='my-3'>Hi, my name is</p>
                    <h1 className="text-3xl lg:text-5xl font-bold my-3">MD. KHORSHED ALAM</h1>
                    <h1 className="text-2xl lg:text-4xl font-bold my-3">WEB DEVELOPER</h1>
                    <p className='my-3 lg:w-1/2'>I am completed Bachelor of Science in Computer Science and Engineering from the World University of Bangladesh. I am passionate about developing web applications and working across MERN-Stack development.</p>
                    <button className="btn btn-outline my-3">GET RESUME</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;