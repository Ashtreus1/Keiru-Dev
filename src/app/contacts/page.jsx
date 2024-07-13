import React from 'react';
import ContactForm from '@/components/contacts/ContactForm';

const ContactOverview = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center pb-10 mb-10 mx-10">
            <div className="mx-4 md:mx-20 w-full">
                <h2 className="text-4xl font-mono md:text-5xl font-bold mb-4 mt-10">Interact with Me!</h2>
                <div className="flex flex-col md:flex-row justify-center gap-10">
                    <div className="w-full md:w-1/2 md:order-2 flex flex-col justify-center lg:mb-20">
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl font-mono text-cyan-500 mb-4 hidden lg:block ">Get in Touch</h3>
                            <p className="text-lg font-semibold mb-4">
                                I’m always open to new opportunities and collaborations.<br/>
                                Feel free to reach out through the contact form or connect with me via social media!
                            </p>
                            <div className="flex flex-col gap-2">
                                <a href="mailto:jameson.gelarman@cvsu.edu.ph" className='font-mono'>
                                    Email: <span className="text-cyan-500 hover:text-cyan-700 transition-colors">jameson.gelarman@cvsu.edu.ph</span>
                                </a>
                                <a href="https://github.com/Ashtreus1">
                                    Github: <span className="text-cyan-500 hover:text-cyan-700 transition-colors">Ashtreus1</span>
                                </a>
                                <a href="https://www.linkedin.com/in/jameson-gelarman-a33a8a24b/">
                                    LinkedIn: <span className="text-cyan-500 hover:text-cyan-700 transition-colors">Jameson Gelarman</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <ContactForm className="lg:order-1"/>
                </div>
            </div>
        </div>
    );
};

export default ContactOverview;
