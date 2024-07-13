"use client"
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};

const socialLinkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 } }
};


const ContactForm = () => {
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
    <motion.div
      className="relative w-full md:w-1/2 p-4"
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <motion.form variants={formVariants} onSubmit={sendEmail} ref={form}>
        <motion.div className="mb-4" variants={formVariants}>
          <label className="input-bordered rounded-btn flex items-center gap-2">
            <input
              type="text"
              name="name"
              className="grow p-5 rounded-md"
              placeholder="Name"
              value={formState.name}
              onChange={handleChange}
            />
          </label>
        </motion.div>
        <motion.div className="mb-4" variants={formVariants}>
          <label className="input-bordered flex items-center gap-2">
            <input
              type="email"
              name="email"
              className="grow p-5 rounded-md"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
            />
          </label>
        </motion.div>
        <motion.div className="mb-4" variants={formVariants}>
          <textarea
            name="message"
            className="textarea-bordered p-5 rounded-md w-full"
            placeholder="Message"
            value={formState.message}
            onChange={handleChange}
          ></textarea>
        </motion.div>
        <button className="btn-wide rounded-md py-4 font-semibold border border-cyan-500 bg-transparent hover:bg-cyan-700 transition-all duration-300 ease-in-out">
          Send Message
        </button>
      </motion.form>
      {status && <p className="text-center mt-4">{status}</p>}
      <motion.div className="absolute right-4 mt-5 flex gap-4 border-b border-cyan-500 pb-5" variants={socialLinkVariants}>
        <motion.a href="#" className="text-gray-500 hover:text-cyan-500 flex items-center gap-2" variants={socialLinkVariants}>
          <FaFacebook className="w-6 h-6" />
          Facebook
        </motion.a>
        <motion.a href="#" className="text-gray-500 hover:text-cyan-500 flex items-center gap-2" variants={socialLinkVariants}>
          <FaTwitter className="w-6 h-6" />
          Twitter
        </motion.a>
        <motion.a href="#" className="text-gray-500 hover:text-cyan-500 flex items-center gap-2" variants={socialLinkVariants}>
          <FaInstagram className="w-6 h-6" />
          Instagram
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
