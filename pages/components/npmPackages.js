import React from 'react';
import 'tailwindcss/tailwind.css';

const NpmPackages = () => {
   const npmPackages = [
      {
         id: '1',
         name: 'paginationah',
         description:
            'A simple, efficient TypeScript pagination utility for handling pagination logic in your applications.',
         npmUrl: 'https://www.npmjs.com/package/paginationah',
         githubUrl: 'https://github.com/onah/paginationah',
      },

      // Add more packages here if needed
   ];
   return (
      <section className="py-8">
     
            <h2 className="h2 article-title mt-3" title="Portfolio">
               Npm Packages
            </h2>
         <hr className="hr" />


         <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {npmPackages.map((pkg) => (
               <div key={pkg.id} className="bg-gradient-to-br from-[##212123] p-6 rounded-lg shadow-lg">
                  <h4 className="h4 skills-title text-xl text-white font-semibold">
                     {pkg.name}
                  </h4>
                  <p className="mt-4 timeline-text  text-gray-500">{pkg.description}</p>
                  <div className="mt-6 flex space-x-4">
                     <a
                        href={pkg.npmUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
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
