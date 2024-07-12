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

const Faq = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <section className="relative flex justify-center" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <div className="w-full max-w-3xl">
                        <motion.div className="chat chat-start mb-4" variants={itemVariants}>
                            <div className="chat-bubble chat-bubble-primary">What is your skills?</div>
                        </motion.div>
                        <motion.div className="chat chat-end mb-4" variants={itemVariants}>
                            <div className="chat-bubble chat-bubble-info">I developed various software applications, such as web, desktop, and mobile applications.</div>
                        </motion.div>
                        <motion.div className="chat chat-start mb-4" variants={itemVariants}>
                            <div className="chat-bubble chat-bubble-secondary">How can I get in touch with you?</div>
                        </motion.div>
                        <motion.div className="chat chat-end mb-4" variants={itemVariants}>
                            <div className="chat-bubble chat-bubble-success">You can reach out to me through my contact form or via social media on Facebook, Twitter, and Instagram.</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Faq;
