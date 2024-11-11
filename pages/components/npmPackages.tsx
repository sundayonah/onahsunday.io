import React from 'react';
import 'tailwindcss/tailwind.css';

interface PackageItem {
id: string;
name: string;
description: string;
npmUrl: string;
stacks?: string[];
}

const NpmPackages = ({ npmPackages = [] }: {npmPackages:PackageItem[]}) => {
 

   return (
      <section className="py-8">
         <h2 className="h2 article-title mt-3" title="Portfolio">
            Npm Packages
         </h2>
         <hr className="hr" />

         <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {npmPackages.map((pkg: PackageItem) => (
               <div
                  key={pkg.id}
                  className="bg-gradient-to-br from-[##212123] p-6 rounded-lg shadow-lg"
               >
                  <h4 className="h4 skills-title text-xl text-white font-semibold">
                     {pkg.name}
                  </h4>
                  <p className="mt-4 timeline-text  text-gray-400">
                     {pkg.description}
                  </p>
                   {pkg.stacks && pkg.stacks.length > 0 && (
                     <ul className="project-stacks">
                        {pkg.stacks.map((stack, index) => (
                           <li key={index}>{stack}</li>
                        ))}
                     </ul>
                  )}
                  <div className="mt-6 flex space-x-4">
                     <a
                        href={pkg.npmUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline cursor-pointer"
                     >
                        View on npm
                     </a>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};

export default NpmPackages;
