import React, { useState,useEffect } from 'react';
import Image from 'next/image';

import { getProjects } from '../../actions/actions';

const Portfolio = () => {
   // const { projects, loading, error } = useProjects();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        console.error('Error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-red-500">
        <div>Error: {error}</div>
      </div>
    );
  }

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
