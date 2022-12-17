import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import skills from '../../Assets/skills.png'

const Skills = () => {
    return (
        <div className=''>
            <div className="card flex-col lg:flex-row bg-base-100">
                <figure><img src={skills} alt="skills" className='w-96 rounded-2xl' /></figure>
                <div className="card-body">
                    <p className='flex gap-3 items-center'><FaAngleDoubleRight /><span><span className='font-bold'>Expertise: </span> HTML5 | CSS3 | ES6 | JavaScript | React.js | Bootstrap | React Bootstrap | Tailwind CSS | DaisyUI. </span></p>
                    <p className='flex gap-3 items-center'><FaAngleDoubleRight /> <span> <span className='font-bold'>Comfortable:</span> Express.js | Node.js | MongoDB | JSON | REST Api | React Query | React Hook Form.</span></p>
                    <p className='flex gap-3 items-center'><FaAngleDoubleRight /><span><span className='font-bold'>Familiar:</span> Next.js | JWT Token | Axios.</span></p>
                    <p className='flex gap-3 items-center'><FaAngleDoubleRight /><span><span className='font-bold'> Tools:</span> Firebase | Vercel | Netlify | GitHub | Figma | VS Code | Chrome Dev Tools.</span></p>
                </div>
            </div>


        </div>
    );
};

export default Skills;