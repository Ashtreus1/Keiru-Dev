"use client"
import { MdVisibility } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

const ProjectOverview = () => {
    const projects = [
        {
            title: 'Travel Destinations',
            image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
            description: 'Explore the most beautiful travel destinations around the world.',
            categories: ['Travel', 'Adventure'],
            isNew: true
        },
        {
            title: 'Recipe App',
            image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
            description: 'Discover delicious recipes and cooking tips.',
            categories: ['Food', 'Cooking'],
            isNew: false
        },
        {
            title: 'Fitness Tracker',
            image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
            description: 'Track your fitness progress and set goals.',
            categories: ['Fitness', 'Health'],
            isNew: true
        },
        {
            title: 'E-commerce Store',
            image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
            description: 'Buy and sell products online.',
            categories: ['E-commerce', 'Shopping'],
            isNew: false
        },
        {
            title: 'Weather App',
            image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
            description: 'Get real-time weather updates for your location.',
            categories: ['Weather', 'Forecast'],
            isNew: true
        }
    ];

    return (
        <section className="py-16 relative">
            <div className="flex justify-center">
                <h1 className="text-5xl font-bold mb-4">Project Overview</h1>
            </div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
                {projects.map((project, index) => (
                    <div key={index} className="card bg-base-100 shadow-xl p-4 relative">
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
                ))}
            </div>
        </section>
    );
};

export default ProjectOverview;
