"use client"
import React from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const AboutOverview = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <motion.div
                ref={ref}
                className="flex flex-col-reverse md:flex-row items-center max-w-5xl"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <motion.div className="md:w-1/2 p-8" variants={itemVariants}>
                    <h1 className="text-5xl sm:text-4xl font-bold mb-4">About Me</h1>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                        Aspiring <span className="font-bold text-cyan-500">software developer</span> and <span className="font-bold text-cyan-500">tech enthusiast</span> with over <span className="text-cyan-500 font-bold">3 years of experience</span>. Passionate about creating <span className="font-bold text-cyan-500">functional</span> and <span className="font-bold text-cyan-500">elegant solutions</span>, collaborating, and learning from the tech community. Looking forward to <span className="font-bold text-cyan-500">connecting</span> and <span className="font-bold text-cyan-500">collaborating</span> on exciting projects!
                    </p>
                </motion.div>
                <motion.div className="md:w-1/2 p-8 flex justify-center items-center" variants={itemVariants}>
                    <Image
                        src="/images/me.png"
                        alt="Profile"
                        width={400}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default AboutOverview;
