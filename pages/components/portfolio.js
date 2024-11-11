// import React, { useState } from 'react';
// import Image from 'next/image';

// import { useProjects } from '../../hooks/useProjects';

// const Portfolio = () => {
//    const { projects, loading, error } = useProjects();
//    // console.log(projects, 'projects in header');

//    if (loading) return <div>Loading...</div>;
//    if (error) return <div>Error: {error}</div>;
//    // console.log(projects);

//    return (
//       <>
//          <div className="top-space" id="portfolio">
//             <header>
//                <h2
//                   className="h2 article-title"
//                   title="Portfolio"
//                   name="Portfolio"
//                >
//                   Portfolio
//                </h2>
//             </header>
//             {/* <div className="separator" /> */}
//             <hr className="hr" />

//             <section className="projects">
//                <div className="filter-select-box">
//                   <ul className="select-list">
//                      <li className="select-item">
//                         <button data-select-item="">All</button>
//                      </li>
//                      <li className="select-item">
//                         <button data-select-item="">Web design</button>
//                      </li>
//                      <li className="select-item">
//                         <button data-select-item="">Applications</button>
//                      </li>
//                      <li className="select-item">
//                         <button data-select-item="">Web development</button>
//                      </li>
//                   </ul>
//                </div>
//                <ul className="project-list">
//                   {projects.map((project) => (
//                      <li
//                         key={project.id}
//                         className="project-item active"
//                         data-filter-item=""
//                         data-category="web design"
//                      >
//                         <a href={project.link} target="_blank" rel="noreferrer">
//                            <figure className="project-img">
//                               <div className="project-item-icon-box">
//                                  <ion-icon name="eye-outline" />
//                               </div>
//                               <Image
//                                  src={project.imageUrl}
//                                  alt={project.name}
//                                  width={1000}
//                                  height={150}
//                                  className=""
//                                  loading="lazy"
//                               />
//                            </figure>
//                            <h3 className="project-title">{project.name}</h3>
//                            <span className="project-category">
//                               {project.description}
//                            </span>
//                         </a>
//                         <ul className="project-stacks">
//                            {project.stacks.map((stack, index) => (
//                               <li key={index}>{stack}</li>
//                            ))}
//                         </ul>
//                      </li>
//                   ))}
//                </ul>
//             </section>
//          </div>
//       </>
//    );
// };
// export default Portfolio;


// Portfolio.js
import React from 'react';
import Image from 'next/image';
import { useProjects } from '../../hooks/useProjects';

const Portfolio = () => {
  const { projects, loading, error } = useProjects();

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
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
        
        {/* Filter Categories */}
        {/* <div className="flex justify-center gap-4 mb-8">
          <button className="px-4 py-2 hover:bg-gray-100 rounded">All</button>
          <button className="px-4 py-2 hover:bg-gray-100 rounded">Web Design</button>
          <button className="px-4 py-2 hover:bg-gray-100 rounded">Applications</button>
          <button className="px-4 py-2 hover:bg-gray-100 rounded">Web Development</button>
        </div> */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {project.image && (
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stacks?.map((stack, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;