"use client"
import React, { useState } from 'react';
import projectData from '@/config/projectData';
import { MdVisibility } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const changeCategory = (category, index) => {
        setActiveCategory(category);
        setActiveTabIndex(index);
    };

    const filteredProjects = activeCategory === 'All' ? projectData : projectData.filter(project => project.tab_categories.includes(activeCategory));

    return (
        <div className="flex flex-col items-center py-8 mx-10">
            <div className="tabs tabs-lifted mb-8">
                {['All', 'Mobile', 'Desktop', 'Web'].map((category, index) => (
                    <label
                        key={category}
                        className={`tab tab-lifted cursor-pointer mr-4 ${activeTabIndex === index ? 'tab-active [--tab-bg:gray]' : ''}`}
                        onClick={() => changeCategory(category, index)}
                    >
                        {category}
                    </label>
                ))}
            </div>

            {filteredProjects.length === 0 ? (
                <div className="flex justify-center items-center h-80">
                    <div className="text-center text-gray-600">
                        No projects available in this category.
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <figure className="relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 hover:bg-opacity-50 flex items-center justify-center space-x-4 opacity-0 hover:opacity-100">
                                    <MdVisibility className="text-white h-10 w-10 cursor-pointer hover:text-cyan-400 transition-colors" />
                                    <FaGithub className="text-white h-10 w-10 cursor-pointer hover:text-cyan-400 transition-colors" />
                                </div>
                            </figure>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">
                                    {project.title}
                                    {project.isNew && (
                                        <span className="ml-2 inline-block bg-cyan-500 text-white text-xs px-2 py-1 rounded-full">
                                            NEW
                                        </span>
                                    )}
                                </h3>
                                <p className="mb-4">{project.description}</p>
                                <div className="flex flex-wrap space-x-2">
                                    {project.categories.map((category, index) => (
                                        <div key={index} className="badge badge-outline">{category}</div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Projects;
