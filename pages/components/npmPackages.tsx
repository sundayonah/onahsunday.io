import React, { useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { usePackages } from '../../hooks/usePackages';
import { PackageItem } from '../../types/types';
import { NpmPackagesSkeleton } from "../../loading/loading"
import AOS from 'aos';
import 'aos/dist/aos.css';

const NpmPackages = () => {
   const { npmPackages, loading, error } = usePackages();


   useEffect(() => {
      AOS.init({ duration: 800 });
   }, []);

   if (loading) return <NpmPackagesSkeleton />;

   if (error) return <div className="text-red-500 text-center py-8">Error: {error}</div>;

   return (
      <section className="py-8" data-aos="fade-up">
         <h2 className="h2 article-title mt-3" title="Portfolio">
            Npm Packages
         </h2>
         <hr className="hr" />

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" data-aos="fade-up">
            {npmPackages.map((pkg) => (
               <div
                  key={pkg.id}
                  className="bg-gradient-to-br from-[#212123] p-6 rounded-lg shadow-lg"
               >
                  <h4 className="h4 skills-title text-xl text-white font-semibold">
                     {pkg.package_data.name}
                  </h4>
                  <p className="mt-4 timeline-text text-gray-400">
                     {pkg.package_data.description}
                  </p>
                  {pkg.package_data.stacks && pkg.package_data.stacks.length > 0 && (
                     <ul className="project-stacks">
                        {pkg.package_data.stacks.map((stack, index) => (
                           <li key={index}>{stack}</li>
                        ))}
                     </ul>
                  )}
                  <div className="mt-6 flex space-x-4">
                     <a
                        href={pkg.package_data.link}  // Changed from npmUrl to link
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