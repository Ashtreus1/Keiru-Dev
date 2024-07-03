"use client";
import React, { useState, useRef } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';


const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ContactOverview = () => {

    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    const form = useRef();

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };


    // DON'T MODIFY THIS FUNCTION
    // This function is used to send email using EmailJS
    // You can find the documentation here: https://www.emailjs.com/docs/
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_anlif28',
            'template_5t659fm',
            form.current,
            {
                publicKey: 'E_Im3DBTnGaQZusqf'
            })
        .then(
            () => {
                setStatus('Message sent successfully!');
                setFormState({ name: '', email: '', message: '' });
            },
            (error) => {
                console.error('Failed to send message:', error);
                setStatus('Failed to send message. Please try again.');
            }
        );
    };

    return (
        <section className='mb-10' ref={ref}>
            <motion.div
                className="mx-4 md:mx-20"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <motion.div className="p-4" variants={itemVariants}>
                    <h2 className="text-3xl md:text-5xl text-cyan-500 font-bold text-center mb-4">Interact with Me</h2>
                    <p className="text-center mb-8">
                        I'm always open to discuss new projects, <br />
                        creative ideas, or opportunities to be part of your vision. <br />
                        <span className='text-cyan-500 font-bold'>Reach out</span> and <span className='text-cyan-500 font-bold'>let's start a conversation!</span>
                    </p>
                </motion.div>
                <motion.div className="flex flex-col md:flex-row mx-auto md:mx-0" variants={itemVariants}>
                    <motion.div className="w-full md:w-1/2 p-4" variants={itemVariants}>
                        <form onSubmit={sendEmail} ref={form}>
                            <div className="mb-4">
                                <label className="input input-bordered rounded-btn flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                    </svg>
                                    <input
                                        type="text"
                                        name="name"
                                        className="grow"
                                        placeholder="Name"
                                        value={formState.name}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="mb-4">
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                    </svg>
                                    <input
                                        type="email"
                                        name="email"
                                        className="grow"
                                        placeholder="Email"
                                        value={formState.email}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="mb-4">
                                <textarea
                                    name="message"
                                    className="textarea textarea-bordered w-full"
                                    placeholder="Message"
                                    value={formState.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button className="btn btn-wide hover:bg-cyan-400 hover:text-black transition-color">Send Message</button>
                        </form>
                        {status && <p className="text-center mt-4">{status}</p>}
                    </motion.div>
                    <motion.div className="w-full md:w-1/2 p-4 flex flex-col justify-center items-center mb-20" variants={itemVariants}>
                        <h2 className="text-3xl text-cyan-500 font-bold text-center mb-4 hidden md:block">Contact me with</h2>
                        <div className="hidden md:flex gap-4 items-center">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-500 flex items-center gap-2">
                                <FaFacebook className="w-6 h-6" />
                                Facebook
                            </a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-500 flex items-center gap-2">
                                <FaTwitter className="w-6 h-6" />
                                Twitter
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-500 flex items-center gap-2">
                                <FaInstagram className="w-6 h-6" />
                                Instagram
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ContactOverview;
