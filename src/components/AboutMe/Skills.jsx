import React from 'react';

const Skills = () => {
  const techStack = [
    { name: 'Java', icon: 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png' },
    { name: 'Javascript', icon: 'https://img.icons8.com/color/48/000000/javascript--v1.png' },
    { name: 'HTML5 & CSS3', icon: 'https://img.icons8.com/color/48/000000/html-5--v1.png' },
    { name: 'Python', icon: 'https://img.icons8.com/color/48/000000/python--v1.png' },
    { name: 'PHP', icon: 'https://img.icons8.com/officel/48/000000/php-logo.png' },
    { name: 'C++', icon: 'https://img.icons8.com/color/48/000000/c-plus-plus-logo--v1.png' },
    { name: 'MYSQL', icon: 'https://img.icons8.com/ios/48/000000/mysql-logo.png' },
    { name: 'Firebase', icon: 'https://img.icons8.com/color/48/000000/firebase.png' },
    { name: 'SQLite', icon: 'https://img.icons8.com/ios/48/000000/sqlite.png' },
    { name: 'React', icon: 'https://img.icons8.com/plasticine/100/000000/react.png' },
    { name: 'Laravel', icon: 'https://img.icons8.com/fluency/48/000000/laravel.png' },
    { name: 'NextJS', icon: 'https://img.icons8.com/color/48/000000/next.png' },
    { name: 'Tailwindcss', icon: 'https://img.icons8.com/color/48/000000/tailwind-css.png' },
    { name: 'Flask', icon: 'https://img.icons8.com/office/48/000000/flask.png' },
    { name: 'Bootstrap', icon: 'https://img.icons8.com/color/48/000000/bootstrap.png' },
    { name: 'DaisyUI', icon: 'https://img.icons8.com/color/48/000000/unity.png' },
    { name: 'ShadCN', icon: 'https://img.icons8.com/color/48/000000/unity.png' },
    { name: 'Wordpress', icon: 'https://img.icons8.com/color/48/000000/wordpress.png' },
    { name: 'Webpack', icon: 'https://img.icons8.com/ios/48/000000/webpack.png' },
  ];

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
