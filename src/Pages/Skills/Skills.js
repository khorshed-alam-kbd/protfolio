import React from 'react';
import skills from '../../Assets/skills.png'
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Skills = () => {
    return (
        <div className='grid place-items-center'>
            {/* <div className="card flex-col lg:flex-row bg-base-100">
                <figure className='lg:w-1/2'><img src={skills} alt="skills" className=' rounded-xl' /></figure>
                <div className="card-body">
                    <h1 className='flex gap-3 items-center'><span><span className='font-bold'>Expertise: </span> <br /><span className='text-gray-400'>HTML5 | CSS3 | ES6 | JavaScript | React.js | Bootstrap | React Bootstrap | Tailwind CSS | DaisyUI. </span></span></h1>
                    <h1 className='flex gap-3 items-center'> <span> <span className='font-bold'>Comfortable:</span> <br /> <span className='text-gray-400'>Express.js | Node.js | MongoDB | JSON | REST Api | React Query | React Hook Form.</span> </span></h1>
                    <h1 className='flex gap-3 items-center'><span><span className='font-bold'>Familiar:</span> <br /><span className='text-gray-400'>Next.js | JWT Token | Axios | Redux.</span> </span></h1>
                    <h1 className='flex gap-3 items-center'><span><span className='font-bold'> Tools:</span> <br /><span className='text-gray-400'>Firebase | Vercel | Netlify | GitHub | Figma | VS Code | Chrome Dev Tools. </span></span></h1>
                </div>
            </div> */}


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div className="bg-base-200 p-4 rounded shadow grid place-content-center">

                    <PhotoProvider>
                        <PhotoView src={skills}>
                            <img src={skills} alt='skills' className="w-96" />
                        </PhotoView>
                    </PhotoProvider>

                </div>

                <div className="bg-base-200 p-5 rounded shadow grid place-content-center ">
                    <div>
                        <h1 className='my-5'><span><span className='font-bold'>Expertise: </span> <br /><span className='text-gray-400'>HTML5 | CSS3 | ES6 | JavaScript | React.js | Bootstrap | React Bootstrap | Tailwind CSS | DaisyUI. </span></span></h1>
                        <h1 className='my-5'> <span> <span className='font-bold'>Comfortable:</span> <br /> <span className='text-gray-400'>Express.js | Node.js | MongoDB | JSON | REST Api | React Query | React Hook Form.</span> </span></h1>
                        <h1 className='my-5'><span><span className='font-bold'>Familiar:</span> <br /><span className='text-gray-400'>Next.js | JWT Token | Axios | Redux.</span> </span></h1>
                        <h1 className='my-5'><span><span className='font-bold'> Tools:</span> <br /><span className='text-gray-400'>Firebase | Vercel | Netlify | GitHub | Figma | VS Code | Chrome Dev Tools. </span></span></h1>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Skills;