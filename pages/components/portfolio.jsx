import React, { useEffect } from 'react';
import Image from 'next/image';
import { useProjects } from '../../hooks/useProjects';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Portfolio = () => {
   const { projects, loading, error } = useProjects();

   useEffect(() => {
      AOS.init({ duration: 800 });
   }, []);


   console.log("projects", projects)


   if (loading) return <div>Loading...</div>;
   if (error) return <div>Error: {error}</div>;

   return (
      <>
         <div className="top-space" id="portfolio" >
            <header>
               <h2
                  className="h2 article-title"
                  title="Portfolio"
                  // name="Portfolio"
               >
                  Portfolio
               </h2>
            </header>
            {/* <div className="separator" /> */}
            <hr className="hr" />

            <section className="projects" data-aos="fade-up">
               {/* <div className="filter-select-box">
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
               </div> */}
               <ul className="project-list">
                  {projects.map((p) => (
                     <li
                        key={p.id}
                        className="project-item active"
                        data-filter-item=""
                        data-category="web design"
                     >
                        <a href={p.link} target="_blank" rel="noreferrer">
                           <figure className="project-img">
                              <div className="project-item-icon-box">
                                 <ion-icon name="eye-outline" />
                              </div>
                              <Image
                                 src={p.imageUrl}
                                 alt={p.name}
                                 width={1000}
                                 height={150}
                                 className=""
                                 loading="lazy"
                              />
                           </figure>
                           <h3 className="project-title">{p.name}</h3>
                           <span className="project-category">
                              {p.description}
                           </span>
                        </a>
                        <ul className="project-stacks">
                           {p.stacks.map((stack, index) => (
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
