import React from 'react';
import kaImg from '../../Assets/5th-convocation-22.jpeg'

const About = () => {
    return (
        <div className="hero bg-base-100" >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={kaImg} className="w-3/4 lg:max-w-sm rounded-lg shadow-2xl" alt='khorshed' />
                <div>
                    <p>I am Md. Khorshed Alam completed Bachelor of Science in Computer Science and Engineering from the World University of Bangladesh. I am passionate about developing web applications and working across MERN-Stack development. My recently finished web development course experience has shaped my code evaluation and website development knowledge.</p>
                    <br />
                    <p>I have developed Full-stack web application projects and designed front-end UI. I have also experience in the database and backend. I have experience in React.js, Node.js, MongoDB, Bootstrap, Tailwind CSS, and DaisyUI.</p>
                    <br />
                    <p>During developing web application projects, I am working with web applications technologies such as Express.js, Next.js, JSON, REST API, React Query, React Hook Form, and JWT Token. I have also experience in web application tools such as Firebase, Vercel, Netlify, GitHub, Figma, VS Code, and Chrome Dev Tools.</p>
                </div>
            </div>
        </div>
    );
};

export default About;