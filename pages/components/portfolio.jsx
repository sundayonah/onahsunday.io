import React, { useEffect } from 'react';
import Image from 'next/image';
// import { useProjects } from '../../hooks/useProjects';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { PortfolioSkeleton } from '../../loading/loading';
import projectsData from '../../jsonFile/projects.json';
import { getImagePath } from '../../hooks/assetPrefix';

const Portfolio = () => {
   // const { projects, loading, error } = useProjects();
   const projects = projectsData.projects;

   useEffect(() => {
      AOS.init({ duration: 800 });
   }, []);

   // if (loading) return <PortfolioSkeleton />;
   // if (error) return <div className="text-red-500 text-center py-8">Error: {error}</div>;

   return (
      <div className="top-space" id="portfolio">
         <header>
            <h2 className="h2 article-title" title="Portfolio">
               Portfolio
            </h2>
         </header>
         <section className="projects" data-aos="fade-up">
            <ul className="project-list">
               {projects.map((p) => (
                  <li
                     key={p.id}
                     className="project-item active"
                     data-filter-item=""
                     data-category="web design"
                  >
                     <a
                        href={p.project_data.link}
                        target="_blank"
                        rel="noreferrer"
                     >
                        <figure className="project-img">
                           <div className="project-item-icon-box">
                              <ion-icon name="eye-outline" />
                           </div>
                           <Image
                              // src={p.project_data.image_url}
                              src={getImagePath(p.project_data.image_url)}
                              alt={p.project_data.name}
                              width={1000}
                              height={150}
                              className=""
                              loading="lazy"
                           />
                        </figure>
                        <h3 className="project-title">{p.project_data.name}</h3>
                        <span className="project-category">
                           {p.project_data.description}
                        </span>
                     </a>
                     <ul className="project-stacks">
                        {p.project_data.stacks.map((stack, index) => (
                           <li key={`${p.id}-${stack}-${index}`}>{stack}</li>
                        ))}
                     </ul>
                  </li>
               ))}
            </ul>
         </section>
      </div>
   );
};

export default Portfolio;
