import React, { useEffect } from 'react';


import AOS from 'aos';
import 'aos/dist/aos.css';




const MySkills = () => {

   useEffect(() => {
      AOS.init({ duration: 800 });
   }, []);

   return (
      <>
         <section className="skill" >
            <header>
               <h2
                  className="h2 article-title"
                  title="Portfolio"
                  name="Portfolio"
               >
                  My skills
               </h2>
            </header>
            <hr className="hr" />

            <ul className="skills-list content-card" data-aos="fade-up">
               <div className="myTechnology">
                  <li className="skills-item">
                     {/* FRONT-END */}
                     <h4 className="h4 skills-title">Front-End</h4>
                     <p className="timeline-text">Javascript</p>
                     <p className="timeline-text">Typescript</p>
                     <p className="timeline-text">React</p>
                     <p className="timeline-text">Next.js</p>
                     <p className="timeline-text">React Context</p>
                     <p className="timeline-text">Redux / Redux Toolkit</p>
                     <p className="timeline-text">Ethers.js / Web3.js</p>
                     <p className="timeline-text">HTML/CSS/TailwindCSS</p>
                     <p className="timeline-text">wagmi, web3Modal</p>
                     <p className="timeline-text">Git</p>
                  </li>
                  <hr className="hr" />

                  {/* BACK-END */}
                  <li className="skills-item">
                     <h4 className="h4 skills-title">Back-End</h4>
                     <p className="timeline-text">Go</p>
                     <p className="timeline-text">Ent - Framework</p>
                     <p className="timeline-text">Postgres</p>
                     <p className="timeline-text">mongoDB</p>
                     <p className="timeline-text">firebase</p>
                     <p className="timeline-text">Node.js</p>
                     <p className="timeline-text">Express</p>
                     <p className="timeline-text">Hardhat</p>
                     <p className="timeline-text">Solidity</p>
                  </li>
               </div>
            </ul>
         </section>
      </>
   );
};

export default MySkills;
