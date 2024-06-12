"use client"
import React from 'react';
import { motion, useInView } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.3 } }
};

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export const HeroSection = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <section id="home" className="relative">
            <motion.div 
                ref={ref}
                className="min-h-screen flex flex-col items-center justify-center text-center px-4"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <motion.h1 className="text-6xl font-bold mb-4" variants={itemVariants}>
                    Hello, I'm <span className="text-cyan-300">Jameson</span>
                </motion.h1>
                <motion.p className="text-2xl mb-8" variants={itemVariants}>
                    <span className="text-cyan-400 font-bold">Aspiring software developer</span> and <span className="text-cyan-400 font-bold">tech enthusiast</span>.<br />
                    Developing and enhancing my skills for over <span className="text-cyan-400 font-semibold">3 years</span>.<br />
                    Expanding my knowledge and skills as a lifelong learner.
                </motion.p>
                <div className="flex space-x-4">
                    <motion.button 
                        className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-transform text-xl"
                        variants={buttonVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Inspect C.V
                    </motion.button>
                    <motion.button 
                        className="px-6 py-3 border border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-transform text-xl"
                        variants={buttonVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        See GitHub
                    </motion.button>
                </div>
                    <div className="absolute right-20 top-20">
                        <img src="https://img.icons8.com/plasticine/200/000000/react.png" alt="React" className="rounded-full opacity-50 border-2 border-dashed border-black w-48 h-48" />
                    </div>
                    <div className="absolute right-40 bottom-20">
                        <img src="https://raw.githubusercontent.com/saadeghi/daisyui-images/master/images/daisyui-logo/favicon-192.png" alt="DaisyUI" className="rounded-full opacity-50 border-2 border-dashed border-black w-48 h-48" />
                    </div>
                    <div className="absolute left-20 top-10">
                        <img src="https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000" alt="Tailwind CSS" className="rounded-full opacity-50 border-2 border-dashed border-black w-48 h-48" />
                    </div>
                    <div className="absolute left-20 bottom-20">
                        <img src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" alt="DaisyUI" className="rounded-full p-3 opacity-50 border-2 border-dashed border-black w-48 h-48" />
                    </div>
                    
            </motion.div>
        </section>
    );
}
