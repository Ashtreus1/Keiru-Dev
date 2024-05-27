import React from 'react';

const Skills = () => {
  const techStack = [
    { name: 'Java', icon: 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png', percentage: 87, category: 'Programming Languages' },
    { name: 'Javascript', icon: 'https://img.icons8.com/color/48/000000/javascript--v1.png', percentage: 90, category: 'Programming Languages' },
    { name: 'HTML5 & CSS3', icon: 'https://img.icons8.com/color/48/000000/html-5--v1.png', percentage: 88, category: 'Programming Languages' },
    { name: 'Python', icon: 'https://img.icons8.com/color/48/000000/python--v1.png', percentage: 93, category: 'Programming Languages' },
    { name: 'PHP', icon: 'https://img.icons8.com/officel/48/000000/php-logo.png', percentage: 84, category: 'Programming Languages' },
    { name: 'C++', icon: 'https://img.icons8.com/color/48/000000/c-plus-plus-logo--v1.png', percentage: 80, category: 'Programming Languages' },
    { name: 'MYSQL', icon: 'https://img.icons8.com/ios/48/000000/mysql-logo.png', percentage: 93, category: 'Database' },
    { name: 'Firebase', icon: 'https://img.icons8.com/color/48/000000/firebase.png', percentage: 90, category: 'Database' },
    { name: 'SQLite', icon: 'https://img.icons8.com/ios/48/000000/sqlite.png', percentage: 89, category: 'Database' },
    { name: 'React', icon: 'https://img.icons8.com/plasticine/100/000000/react.png', percentage: 95, category: 'Frameworks' },
    { name: 'Laravel', icon: 'https://img.icons8.com/fluency/48/000000/laravel.png', percentage: 85, category: 'Frameworks' },
    { name: 'NextJS', icon: 'https://img.icons8.com/color/48/000000/next.png', percentage: 95, category: 'Frameworks' },
    { name: 'Tailwindcss', icon: 'https://img.icons8.com/color/48/000000/tailwind-css.png', percentage: 95, category: 'Frameworks' },
    { name: 'Flask', icon: 'https://img.icons8.com/office/48/000000/flask.png', percentage: 89, category: 'Frameworks' },
    { name: 'Bootstrap', icon: 'https://img.icons8.com/color/48/000000/bootstrap.png', category: 'Other technologies' },
    { name: 'DaisyUI', icon: 'https://img.icons8.com/color/48/000000/unity.png', category: 'Other technologies' },
    { name: 'ShadCN', icon: 'https://img.icons8.com/color/48/000000/unity.png', category: 'Other technologies' },
    { name: 'Wordpress', icon: 'https://img.icons8.com/color/48/000000/wordpress.png', category: 'Other technologies' },
    { name: 'Webpack', icon: 'https://img.icons8.com/ios/48/000000/webpack.png', category: 'Other technologies' },
  ];

   // Group tech stack items by category
   const groupedTechStack = techStack.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {});

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Technologies I've Used</h1>
      {Object.entries(groupedTechStack).map(([category, techs]) => (
        <div key={category} className="mb-8">
          <h2 className="text-xl text-cyan-500 font-bold mb-2">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {techs.map((tech, index) => (
              <div key={index} className="bg-transparent shadow-md rounded-lg p-4 flex flex-col items-center w-80 mx-auto">
                <img src={tech.icon} alt={tech.name} className="h-16 w-16 mb-2" />
                <h2 className="text-sm font-bold mb-1">{tech.name}</h2>
                {tech.percentage && (
                  <>
                    <progress className="w-full progress progress-info rounded-lg" value={tech.percentage} max="100"></progress>
                    <span className="text-xs font-bold">{tech.percentage}%</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;