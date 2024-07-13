"use client"
import React from 'react';
import { motion, useInView } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const iconVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const EducationTimeline = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center mx-10">
      <motion.h1
        className="text-4xl font-mono font-bold mb-8"
        variants={textVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        Education Timeline
      </motion.h1>
      <motion.ul
        className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.li variants={itemVariants}>
          <motion.div className="timeline-middle" variants={iconVariants}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-cyan-500"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
          <motion.div className="timeline-start md:text-end mb-10 border border-cyan-300 p-5 rounded-sm cursor-pointer hover:bg-black transition-colors" variants={textVariants}>
            <time className="font-mono italic text-cyan-500">Senior Highschool Level</time>
            <div className="text-lg font-black font-mono">
              Information and Communication Technology Strand Major in Computer Programming
            </div>
            <p>
              I learned the fundamentals and Object Oriented Programming in my first year of it. In
              second year, I learned the basics of MySQL Database and the uses of it in the
              real-world application.
            </p>
          </motion.div>
          <hr className="bg-cyan-500" />
        </motion.li>
        <motion.li variants={itemVariants}>
          <hr />
          <motion.div className="timeline-middle" variants={iconVariants}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-cyan-500"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
          <motion.div className="timeline-end mb-10 border border-cyan-300 p-5 rounded-sm cursor-pointer hover:bg-black transition-colors" variants={textVariants}>
            <time className="font-mono italic text-cyan-500">Bachelor Degree (Present)</time>
            <div className="text-lg font-black font-mono">Bachelor of Science in Information Technology</div>
            <p>
              Currently pursuing Bachelor of Science in Information Technology as my course
              program. Sophomore year in this present day, and have the commitment to pursue the
              degree of it.
            </p>
          </motion.div>
          <hr />
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default EducationTimeline;
