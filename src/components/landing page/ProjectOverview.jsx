"use client"
import { MdVisibility } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import projectData from '@/config/projectData';

const ProjectOverview = () => {
    return (
        <section className="py-16 relative">
            <div className="flex flex-col items-center">
                <h1 className="text-5xl font-bold mb-2">Project Overview</h1>
                <p className="text-lg text-gray-600 mb-8">Here's my top pins in all of my projects</p>
            </div>
            <div className="flex flex-wrap justify-center px-4">
                {projectData.map((project, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4 flex justify-center">
                        <div className="card bg-base-100 shadow-xl p-4 relative w-full">
                            <figure className="relative">
                                <img src={project.image} alt={project.title} />
                                <div className="overlay absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-50 flex items-center justify-center">
                                    <MdVisibility className="text-white h-10 w-10 mr-10 cursor-pointer hover:text-cyan-400 transition-colors" />
                                    <FaGithub className="text-white h-10 w-10 cursor-pointer hover:text-cyan-400 transition-colors" />
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
                    </div>
                ))}
            </div>
            <div className="flex justify-end mt-8 pr-20">
                <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-md transition duration-500 ease-in-out">
                    See more projects -{'->'}
                </button>
            </div>
        </section>
    );
};

export default ProjectOverview;
