import React from 'react';

const workExperienceData = [
  {
    title: 'Innotech',
    date: '2023 - Present',
    description: 'A non-profit technology organization dedicated to the digital empowerment of small to medium scale businesses. Our primary mission is the development of website boilerplates, which serve as a fundamental blueprint for efficient and effective website creation. Furthermore, we also offer a range of website applications designed to streamline online operations, enhance digital presence, and promote the sustainable growth of these businesses in the increasingly digital marketplace.',
    roles: ['Lead Software Developer']
  },
  {
    title: 'Work Immersion',
    date: '2022 - 2023',
    description: 'This is a comprehensive, school-based program specifically designed for Information and Communication Technology (ICT) students. The program\'s main focus is providing work immersion opportunities. Work immersion serves as a practical, hands-on experience that allows students to apply the ICT knowledge and skills they\'ve learned in the classroom to real-world scenarios. It is an integral part of their educational journey, preparing them for their future careers in the ICT industry.',
    roles: ['Lead Software Developer', 'Project Leader']
  }
];

const WorkExperience = () => {
  return (
    <div className="min-h-screen p-6 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        <h2 className="text-4xl font-bold mb-8">Work Experience</h2>
        {workExperienceData.map((item, index) => (
          <div key={index} tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200 mb-4 rounded-lg shadow-lg">
            <div className="collapse-title text-xl font-medium">
              {item.title}: <span className="text-cyan-500">{item.date}</span>
            </div>
            <div className="collapse-content p-4">
              <p>{item.description}</p>
              <h3 className="text-lg font-semibold mt-2">Job Role</h3>
              <ul className="list-disc list-inside ml-4">
                {item.roles.map((role, i) => (
                  <li key={i}>{role}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
