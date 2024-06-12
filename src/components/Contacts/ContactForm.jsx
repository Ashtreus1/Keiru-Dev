"use client"
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

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

  return (
    <motion.div
      className="relative w-full md:w-1/2 p-4"
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <motion.form variants={formVariants}>
        <motion.div className="mb-4" variants={formVariants}>
          <label className="input input-bordered rounded-btn flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Name" />
          </label>
        </motion.div>
        <motion.div className="mb-4" variants={formVariants}>
          <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
        </motion.div>
        <motion.div className="mb-4" variants={formVariants}>
          <textarea className="textarea textarea-bordered w-full" placeholder="Message"></textarea>
        </motion.div>
        <motion.button className="btn btn-wide hover:bg-cyan-400 hover:text-black transition-color" variants={buttonVariants}>
          Send Message
        </motion.button>
      </motion.form>

      <motion.div className="absolute right-4 mt-5 flex gap-4" variants={socialLinkVariants}>
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
