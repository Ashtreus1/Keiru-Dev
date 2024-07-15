"use client"
import React from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';



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
        <section id="home" className="relative px-4 md:px-10 border-b border-cyan-300">
            <div class="absolute inset-0 z-[-1] h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"/>
            <motion.div
                ref={ref}
                className="min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between text-left"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <div className="flex-1 flex flex-col justify-center">
                    <motion.h1 className="text-4xl sm:text-5xl lg:no-underline sm:underline sm:decoration-cyan-500 md:underline md:decoration-cyan-500 md:text-6xl  font-bold font-mono mb-4" variants={itemVariants}>
                        Hello, I'm <span className="text-cyan-300">Keiru</span>
                    </motion.h1>
                    <motion.h2 className="text-lg md:text-xl text-gray-500 font-semibold mb-4" variants={itemVariants}>
                        A passionate <span className='text-cyan-300'>full stack developer</span>
                        <br/>in the Philippines.
                    </motion.h2>
                    <div className="flex flex-wrap justify-start space-x-2 mt-5">
                        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                            <motion.button
                                className="px-4 md:px-6 py-2 md:py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-transform"
                                variants={buttonVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Inspect C.V
                            </motion.button>
                        </a>
                        <a href='https://github.com/Ashtreus1' target='_blank' rel="noopener noreferrer">
                            <motion.button
                                className="px-4 md:px-6 py-2 md:py-3 border border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-transform"
                                variants={buttonVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                See GitHub
                            </motion.button>
                        </a>
                    </div>
                    <div className="flex flex-row items-center justify-start mt-5 space-x-2">
                        <h3 className="text-lg">Made with</h3>
                        <div className="flex flex-row gap-3">
                            <Image src="/icons/react.png" width={50} height={50} alt="React" className="rounded-full opacity-75 border-2 border-dashed border-black p-2" />
                            <Image src="/icons/daisyui.png" width={50} height={50} alt="DaisyUI" className="rounded-full opacity-75 border-2 border-dashed border-black p-2" />
                            <Image src="/icons/tailwindcss.png" width={50} height={50} alt="Tailwind CSS" className="rounded-full opacity-75 border-2 border-dashed border-black p-2" />
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center mt-10 lg:mt-0 hidden lg:flex">
                    <Image
                        src="/logo.png"
                        className="rounded-lg shadow-lg shadow-cyan-500 cursor-pointer"
                        style={{
                            animation: 'moveUpDown 2s infinite'
                        }}
                        width={400}
                        height={400}
                        alt="Logo"
                    />

                    <style jsx>{`
                        @keyframes moveUpDown {
                            0%, 100% {
                                transform: translateY(0);
                            }
                            50% {
                                transform: translateY(-10px);
                            }
                        }
                    `}</style>

                </div>
            </motion.div>
        </section>
    );
};
