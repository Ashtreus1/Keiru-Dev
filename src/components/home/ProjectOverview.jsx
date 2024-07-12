"use client"
import React from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import projectData from '@/config/projectData';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ProjectOverview = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <section className="py-16 relative" ref={ref}>
            <motion.div
                className="flex flex-col items-center"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <motion.h1 className="text-3xl md:text-5xl font-bold font-mono text-center mb-6 md:mb-8" variants={itemVariants}>
                    Project Overview
                </motion.h1>
                <motion.p className="text-lg text-gray-600 mb-8" variants={itemVariants}>
                    Here are my top pins in all of my projects
                </motion.p>
            </motion.div>
            <motion.div
                className="flex flex-wrap justify-center px-4"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                {projectData.map((project, index) => (
                    <motion.div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4 flex justify-center" variants={itemVariants}>
                        <div className="card bg-base-100 shadow-md shadow-cyan-700 p-4 relative w-full">
                            <figure className="relative">
                                <Image src={project.image} alt={project.title} width={500}
                                    height={320} className="w-full h-64 object-cover" />
                                <div className="overlay absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-50 flex items-center justify-center">
                                    <Link href={project.repo_link}>
                                        <FaGithub className="text-white h-10 w-10 cursor-pointer hover:text-cyan-400 transition-colors" />
                                    </Link>
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
            <motion.div
                className="flex justify-end mt-8 pr-20"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={itemVariants}
            >
                <Link href='/projects'>
                    <button className="btn-wide py-4 font-semibold border border-cyan-500 bg-transparent hover:bg-cyan-700 transition-all duration-300 ease-in-out">
                        See more projects {'->'}
                    </button>
                </Link>
            </motion.div>
        </section>
    );
};

export default ProjectOverview;
