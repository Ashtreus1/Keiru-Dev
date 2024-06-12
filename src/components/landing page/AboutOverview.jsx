"use client"
import React from 'react';
import Balancer from 'react-wrap-balancer';
import Dots from '../decorations/Dots';
import { motion, useInView } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 } }
};

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const About = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <section className="py-16 relative" ref={ref}>
            <div className="absolute right-20 top-[90px] z-[-1]">
                <Dots h="130" w="130" />
            </div>
            <div className="absolute left-20 bottom-[90px] z-[-1]">
                <Dots h="130" w="130" />
            </div>
            <motion.div 
                className="container mx-auto px-4"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <motion.h2 className="text-5xl font-bold text-center mb-8" variants={itemVariants}>
                    About Me
                </motion.h2>
                <motion.div className="max-w-4xl mx-auto text-center" variants={containerVariants}>
                    <Balancer className="text-lg leading-7 mb-8" variants={itemVariants}>
                        Hello, I'm Jameson, an <span className="text-cyan-400 font-bold">aspiring software developer</span> and <span className="text-cyan-400 font-bold">tech enthusiast</span>.
                        I've been developing and enhancing my skills for more than <span className='text-cyan-400 font-bold'>3 years</span>,
                        and I am committed to expanding my knowledge and skills as a <span className="text-cyan-400 font-bold">lifelong learner</span>.
                    </Balancer>
                    <Balancer className="text-lg leading-7 mb-8" variants={itemVariants}>
                        My journey into the world of software development started with a <span className='text-cyan-400 font-bold'>curiosity for technology </span>
                        and a <span className='text-cyan-400 font-bold'>desire to understand how things work</span>. Over the years, I've immersed myself in various
                        programming languages and technologies, always striving to stay
                        on the cutting edge of the field.
                    </Balancer>
                    <Balancer className="text-lg leading-7 mb-8" variants={itemVariants}>
                        Whether it's building <span className='text-cyan-400 font-bold'>web applications</span>, <span className='text-cyan-400 font-bold'>experimenting with new frameworks</span>,
                        or <span className='text-cyan-400 font-bold'>contributing to open-source projects</span>, I am passionate about creating solutions
                        that are both <span className='text-cyan-400 font-bold'>functional</span> and <span className='text-cyan-400 font-bold'>elegant</span>. I believe in the power of <span className='text-cyan-400 font-bold'>collaboration </span>
                        and continuously <span className='text-cyan-400 font-bold'>seek out opportunities</span> to learn from others in the <span className='text-cyan-400 font-bold'>tech community</span>.
                    </Balancer>
                    <Balancer className="text-lg leading-7 mb-8" variants={itemVariants}>
                        Thank you for taking the time to learn more about me. I look forward to connecting and
                        potentially collaborating on exciting projects!
                    </Balancer>
                </motion.div>
            </motion.div>
        </section>
    );
}
