import React, { useState } from 'react';
import Image from 'next/image';

import { useProjects } from '../../hooks/useProjects';

const Portfolio = () => {
   const { projects, loading, error } = useProjects();
   // console.log(projects, 'projects in header');

   if (loading) return <div>Loading...</div>;
   if (error) return <div>Error: {error}</div>;
   // console.log(projects);

   return (
      <>
         <div className="top-space" id="portfolio">
            <header>
               <h2
                  className="h2 article-title"
                  title="Portfolio"
                  name="Portfolio"
               >
                  Portfolio
               </h2>
            </header>
            {/* <div className="separator" /> */}
            <hr className="hr" />

            <section className="projects">
               <div className="filter-select-box">
                  <ul className="select-list">
                     <li className="select-item">
                        <button data-select-item="">All</button>
                     </li>
                     <li className="select-item">
                        <button data-select-item="">Web design</button>
                     </li>
                     <li className="select-item">
                        <button data-select-item="">Applications</button>
                     </li>
                     <li className="select-item">
                        <button data-select-item="">Web development</button>
                     </li>
                  </ul>
               </div>
               <ul className="project-list">
                  {projects.map((project) => (
                     <li
                        key={project.id}
                        className="project-item active"
                        data-filter-item=""
                        data-category="web design"
                     >
                        <a href={project.link} target="_blank" rel="noreferrer">
                           <figure className="project-img">
                              <div className="project-item-icon-box">
                                 <ion-icon name="eye-outline" />
                              </div>
                              <Image
                                 src={project.imageUrl}
                                 alt={project.name}
                                 width={1000}
                                 height={150}
                                 className=""
                                 loading="lazy"
                              />
                           </figure>
                           <h3 className="project-title">{project.name}</h3>
                           <span className="project-category">
                              {project.description}
                           </span>
                        </a>
                        <ul className="project-stacks">
                           {project.stacks.map((stack, index) => (
                              <li key={index}>{stack}</li>
                           ))}
                        </ul>
                     </li>
                  ))}
               </ul>
            </section>
         </div>
      </>
   );
};
export default Portfolio;
