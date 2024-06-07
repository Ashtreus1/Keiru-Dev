import React from 'react';
import { techStack } from '@/config/icons';

const Skills = () => {
  
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-center">Technologies I've Used</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4 transition-transform transform hover:scale-105 hover:bg-cyan-700 cursor-pointer">
            <img src={tech.icon} alt={tech.name} className="h-12 w-12 mb-2" />
            <h2 className="text-sm font-semibold">{tech.name}</h2>
          </div>
        ))}
         <div className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 text-right font-bold text-cyan-500">and many more...</div>
      </div>
    </div>
  );
};

export default Skills;
