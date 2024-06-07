import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactForm = () => {
    return (
        <div className="relative w-full md:w-1/2 p-4">
            <form>
                <div className="mb-4">
                    <label className="input input-bordered rounded-btn flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Name" />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Email" />
                    </label>
                </div>
                <div className="mb-4">
                    <textarea className="textarea textarea-bordered w-full" placeholder="Message"></textarea>
                </div>
                <button className="btn btn-wide hover:bg-cyan-400 hover:text-black transition-color">Send Message</button>
            </form>

            <div className="absolute right-4 mt-5 flex gap-4">
                <a href="#" className="text-gray-500 hover:text-cyan-500 flex items-center gap-2">
                    <FaFacebook className="w-6 h-6" />
                    Facebook
                </a>
                <a href="#" className="text-gray-500 hover:text-cyan-500 flex items-center gap-2">
                    <FaTwitter className="w-6 h-6" />
                    Twitter
                </a>
                <a href="#" className="text-gray-500 hover:text-cyan-500 flex items-center gap-2">
                    <FaInstagram className="w-6 h-6" />
                    Instagram
                </a>
            </div>
        </div>
    );
};

export default ContactForm;