"use client"
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { techStack } from '@/config/icons';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Skills = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h1 className="text-4xl font-mono font-bold mb-12 text-center " variants={textVariants}>
        Technologies I've Used
      </motion.h1>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        variants={containerVariants}
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-4 bg-transparent shadow-lg rounded-lg  hover:text-cyan-300 hover:shadow-cyan-500 cursor-pointer"
            variants={itemVariants}
          >
            <Image src={tech.icon} alt={tech.name} width={64} height={64} className="mb-4" />
            <h2 className="text-lg font-mono font-semibold">{tech.name}</h2>
          </motion.div>
        ))}
        <motion.div
          className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 text-right font-bold text-cyan-500"
          variants={textVariants}
        >
          and many more...
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
