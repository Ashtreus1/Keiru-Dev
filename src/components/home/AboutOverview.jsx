"use client";
import React, { useRef } from 'react';
import projectData from '@/config/projectData';
import Link from 'next/link';
import Dots from '../decorations/Dots';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 } }
};

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <section className="relative mt-10" ref={ref}>
            <div className="absolute right-10 top-[50px] md:right-20 md:top-[90px] z-[-1]">
                <Dots h="100" w="100" />
            </div>
            <div className="absolute left-10 bottom-[50px] md:left-20 md:bottom-[90px] z-[-1]">
                <Dots h="100" w="100" />
            </div>
            <motion.div
                className="container mx-auto px-4 mb-10"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <motion.h2 className="text-3xl md:text-5xl font-bold font-mono text-center mb-6 md:mb-8" variants={itemVariants}>
                    About Me
                </motion.h2>

                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
                    <motion.div
                        ref={ref}
                        className="stat text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl p-2 sm:p-3 md:p-4 lg:p-5"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={statVariants}
                    >
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4" />
                            </svg>
                        </div>
                        <div className="stat-title text-xs sm:text-sm md:text-base lg:text-lg">Experience</div>
                        <div className="stat-value text-sm sm:text-base md:text-lg lg:text-xl">3 years</div>
                    </motion.div>

                    <motion.div
                        ref={ref}
                        className="stat mx-1 my-1 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl p-2 sm:p-3 md:p-4 lg:p-5"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={statVariants}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32">
                                <path fill="currentColor" d="M30 18H20v6.468a5.02 5.02 0 0 0 2.861 4.52L25 30l2.139-1.013A5.02 5.02 0 0 0 30 24.467zm-5 9.786l-1.283-.607A3.01 3.01 0 0 1 22 24.468V20h6v4.468a3.01 3.01 0 0 1-1.717 2.71zM17 18H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12v-2H5v-5h12zM27 4h-5a2 2 0 0 0-2 2v9h2V6h5v9h2V6a2 2 0 0 0-2-2M15 4H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M5 13V6h10v7z" />
                            </svg>
                        </div>
                        <div className="stat-title text-xs sm:text-sm md:text-base lg:text-lg">Projects Made</div>
                        <div className="stat-value text-sm sm:text-base md:text-lg lg:text-xl">{projectData.length}</div>
                    </motion.div>

                    <motion.div
                        ref={ref}
                        className="stat mx-1 my-1 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl p-2 sm:p-3 md:p-4 lg:p-5"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={statVariants}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512">
                                <path fill="currentColor" d="m305.975 298.814l22.704 2.383V486l-62.712-66.965V312.499l18.214 8.895zm-99.95 0l-22.716 2.383V486l62.711-66.965V312.499l-18.213 8.895zm171.98-115.78l7.347 25.574l-22.055 14.87l-1.847 26.571l-25.81 6.425l-10.803 24.314l-26.46-2.795l-18.475 19.087L256 285.403l-23.902 11.677l-18.475-19.15l-26.46 2.795l-10.803-24.313l-25.81-6.363l-1.847-26.534l-22.118-14.92l7.348-25.573l-15.594-21.544l15.644-21.52l-7.398-25.523l22.068-14.87L150.5 73.03l25.86-6.362l10.803-24.313l26.46 2.794L232.098 26L256 37.677L279.902 26l18.475 19.149l26.46-2.794l10.803 24.313l25.81 6.425l1.847 26.534l22.055 14.87l-7.347 25.574l15.656 21.407zm-49.214-21.556a72.242 72.242 0 1 0-72.242 72.242a72.355 72.355 0 0 0 72.242-72.242m-72.242-52.283a52.282 52.282 0 1 0 52.282 52.283a52.395 52.395 0 0 0-52.282-52.245z" />
                            </svg>
                        </div>
                        <div className="stat-title text-xs sm:text-sm md:text-base lg:text-lg">Skills</div>
                        <div className="stat-value text-sm sm:text-base md:text-lg lg:text-xl">
                            <div className='flex space-x-3'>
                                <Image src="/icons/react.png" width={30} height={30} alt="React" className="rounded-full opacity-75 border-2 border-dashed border-black" />
                                <Image src="/icons/daisyui.png" width={30} height={30} alt="DaisyUI" className="rounded-full opacity-75 border-2 border-dashed border-black" />
                                <Image src="/icons/tailwindcss.png" width={30} height={30} alt="Tailwind CSS" className="rounded-full opacity-75 border-2 border-dashed border-black" />
                            </div>
                            and more...
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="text-center"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <Link href="/abouts">
                        <button className="btn-wide py-4 font-semibold border border-cyan-500 bg-transparent hover:bg-cyan-700 transition-all duration-300 ease-in-out">
                            Get to Know Me {'->'}
                        </button>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
