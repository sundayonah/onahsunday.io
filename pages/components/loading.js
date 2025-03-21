import React from 'react';
import 'tailwindcss/tailwind.css';

// Skeleton loader for NpmPackages
export const NpmPackagesSkeleton = () => {
    return (
        <section className="py-8">
            <h2 className="h2 article-title mt-3" title="Portfolio">
                Npm Packages
            </h2>
            <hr className="hr" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {Array(4).fill(0).map((_, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-br from-[#212123] p-6 rounded-lg shadow-lg animate-pulse"
                    >
                        <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
                        <div className="h-4 bg-gray-600 rounded w-full mb-2"></div>
                        <div className="h-4 bg-gray-600 rounded w-5/6 mb-4"></div>
                        <div className="h-4 bg-gray-500 rounded w-1/4"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

// Skeleton loader for Portfolio
export const PortfolioSkeleton = () => {
    return (
        <div className="top-space" id="portfolio">
            <header>
                <h2 className="h2 article-title" title="Portfolio">
                    Portfolio
                </h2>
            </header>
            <hr className="hr" />
            <section className="projects">
                <ul className="project-list">
                    {Array(3).fill(0).map((_, index) => (
                        <li
                            key={index}
                            className="project-item active animate-pulse"
                            data-filter-item=""
                            data-category="web design"
                        >
                            <div className="project-img">
                                <div className="project-item-icon-box bg-gray-700 w-10 h-10 rounded-full"></div>
                                <div className="bg-gray-700 w-full h-40 rounded-md"></div>
                            </div>
                            <div className="h-6 bg-gray-600 rounded w-3/4 mt-4"></div>
                            <div className="h-4 bg-gray-500 rounded w-full mt-2"></div>
                            <ul className="project-stacks flex space-x-2 mt-2">
                                {Array(3).fill(0).map((_, stackIndex) => (
                                    <li key={stackIndex} className="h-4 bg-gray-400 rounded w-16"></li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};