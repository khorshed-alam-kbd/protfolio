import React from 'react';
import skills from '../../Assets/skills.png'

const Skills = () => {
    return (
        <div className='mx-10'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={skills} alt="skills" className='w-96' /></figure>
                <div className="card-body">
                    <p>Expertise: HTML5 | CSS3 | ES6 | JavaScript | React.js | Bootstrap | React Bootstrap | Tailwind CSS | DaisyUI.</p>
                    <p>Comfortable: Express.js | Node.js | MongoDB | JSON | REST Api | React Query | React Hook Form.</p>
                    <p>Familiar: Next.js | JWT Token | Axios.</p>
                    <p>Tools: Firebase | Vercel | Netlify | GitHub | Figma | VS Code | Chrome Dev Tools.</p>
                </div>
            </div>


        </div>
    );
};

export default Skills;