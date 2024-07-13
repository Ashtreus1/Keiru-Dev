"use client";
import { motion, useInView } from "framer-motion";
import React from 'react';

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9, rotate: -5 },
  visible: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const roleVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

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
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="flex justify-center">
      <motion.div
        className="w-full max-w-5xl px-4 mb-10"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 className="text-4xl font-mono font-bold mb-8 text-center" variants={itemVariants}>
          Work Experience
        </motion.h2>
        {workExperienceData.map((item, index) => (
          <motion.div
            key={index}
            tabIndex={0}
            className="collapse collapse-plus bg-base-200 mb-4 rounded-lg shadow-lg shadow-cyan-700 border-b border-cyan-300"
            variants={itemVariants}
          >
            <motion.div className="collapse-title text-xl font-medium font-mono" variants={itemVariants}>
              {item.title}: <span className="text-cyan-500">{item.date}</span>
            </motion.div>
            <motion.div className="collapse-content p-4" variants={itemVariants}>
              <p>{item.description}</p>
              <h3 className="text-lg font-semibold mt-2">Job Role</h3>
              <ul className="list-disc list-inside ml-4">
                {item.roles.map((role, i) => (
                  <motion.li key={i} variants={roleVariants}>
                    {role}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WorkExperience;
