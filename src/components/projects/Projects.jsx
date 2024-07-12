"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import projectData from '@/config/projectData';
import { MdVisibility } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

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
                <motion.div
                    className="flex flex-wrap justify-center px-4"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="w-full sm:w-1/2 lg:w-1/3 p-4 flex justify-center"
                            variants={itemVariants}
                        >
                            <div className="card bg-base-100 shadow-xl p-4 relative w-full">
                                <figure className="relative">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={500} 
                                        height={320}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-50 flex items-center justify-center">
                                        {project.live_prev !== null && project.live_prev !== '' ? (
                                            <div className="flex space-x-4">
                                                <Link href={project.live_prev}>
                                                    <MdVisibility className="text-white h-10 w-10 cursor-pointer hover:text-cyan-400 transition-colors" />
                                                </Link>
                                                <Link href={project.repo_link}>
                                                    <FaGithub className="text-white h-10 w-10 cursor-pointer hover:text-cyan-400 transition-colors" />
                                                </Link>
                                            </div>
                                        ) : (
                                            <Link href={project.repo_link}>
                                                <FaGithub className="text-white h-10 w-10 cursor-pointer hover:text-cyan-400 transition-colors" />
                                            </Link>
                                        )}
                                    </div>
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {project.title}
                                        {project.isNew && <div className="badge badge-secondary">NEW</div>}
                                    </h2>
                                    <p>{project.description}</p>
                                    <div className="card-actions justify-end">
                                        {project.categories.map((category, index) => (
                                            <div key={index} className="badge badge-outline">{category}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default Projects;
