"use client";
import React from "react";
import Dots from '../decorations/Dots';
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const AboutOverview = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center p-6 mb-10">
            <div className="absolute right-10 top-[50px] md:right-20 md:top-[90px] z-[-1]">
                <Dots h="200" w="200" />
            </div>
            <div className="absolute left-10 bottom-[50px] md:left-20 md:bottom-[90px] z-[-1]">
                <Dots h="200" w="200" />
            </div>
            <motion.div
                ref={ref}
                className="flex flex-col md:flex-row items-center w-full max-w-5xl space-y-10 md:space-y-0 md:space-x-10"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <motion.div className="w-full md:w-1/2 flex justify-center md:justify-end p-4" variants={itemVariants}>
                    <Image
                        src="/images/me.png"
                        alt="Profile"
                        width={400}
                        height={400}
                        className="rounded-full border-4 border-cyan-500"
                    />
                </motion.div>
                <motion.div className="w-full md:w-1/2 p-4 text-center md:text-left" variants={itemVariants}>
                    <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6">
                        About Me
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed">
                        Aspiring{" "}
                        <span className="font-bold text-cyan-500">software developer</span>{" "}
                        and{" "}
                        <span className="font-bold text-cyan-500">tech enthusiast</span>{" "}
                        with over{" "}
                        <span className="text-cyan-500 font-bold">3 years of experience</span>
                        . Passionate about creating{" "}
                        <span className="font-bold text-cyan-500">functional</span> and{" "}
                        <span className="font-bold text-cyan-500">elegant solutions</span>,
                        collaborating, and learning from the tech community.<br />
                        Looking forward to{" "}
                        <span className="font-bold text-cyan-500">connecting</span> and{" "}
                        <span className="font-bold text-cyan-500">collaborating</span> on
                        exciting projects!
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AboutOverview;
