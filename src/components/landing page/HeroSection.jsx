"use client"
import React from 'react';
import { motion, useInView } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

export const HeroSection = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <section id="home" className="relative">
            <motion.div 
                ref={ref}
                className="hero min-h-screen relative"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <div className="hero-content text-center mx-5">
                    <div className="max-w-3xl mx-auto">
                        <motion.h1 className="text-6xl font-bold" variants={itemVariants}>
                            Hello I'm <span className="text-cyan-300">Jameson</span>
                        </motion.h1>
                        <motion.p className="py-6 text-xl" variants={itemVariants}>
                            <span className="text-cyan-400 font-bold">Aspiring software developer</span> and <span className="text-cyan-400 font-bold">tech enthusiast</span>.<br />Been developing and enhancing my skills for more than
                            <span className="text-cyan-400 font-semibold"> 3 years</span>.<br />Expanding my knowledge and my skills as a life-long learning commitment.
                        </motion.p>
                        <div className="flex justify-center space-x-4">
                            <motion.button 
                                className="px-5 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors text-xl" 
                                variants={buttonVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Inspect C.V
                            </motion.button>
                            <motion.button 
                                className="px-5 py-3 bg-transparent border border-solid font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-colors text-xl" 
                                variants={buttonVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                See GitHub
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
