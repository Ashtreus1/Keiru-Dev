"use client"
import React, { useState, useEffect } from 'react';
import { HomeIcon, UserIcon, ClipboardListIcon, MailIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const NavItem = ({ icon, title, href }) => (
    <li>
        <Link href={href} className="block text-center hover:text-cyan-400 cursor-pointer">
            <div className="flex flex-col items-center">
                {icon}
                <span className="text-xs">{title}</span>
            </div>
        </Link>
    </li>
);

export const Navigation = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isMobile) {
        return (
            <>
                <nav className="bg-base-100 shadow-md">
                    <div className="container mx-auto flex items-center justify-between py-4">
                        <span className="font-bold text-3xl text-cyan-500 cursor-pointer mx-5" href='#home'>keiru_dev</span>

                        <label className="swap swap-rotate mx-5">
                            <input type="checkbox" className="theme-controller" value="autumn" />

                            <svg className="swap-on fill-current h-8" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            <svg className="swap-off fill-current h-8" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>
                    </div>
                </nav>

                <nav className="bg-base-100 shadow-md fixed bottom-0 left-0 right-0 z-50">
                    <ul className="flex justify-around py-2">
                        <NavItem icon={<HomeIcon className="w-6 h-6" />} title="Home" href="/" />
                        <NavItem icon={<UserIcon className="w-6 h-6" />} title="About Me" href="/abouts" />
                        <NavItem icon={<ClipboardListIcon className="w-6 h-6" />} title="Projects" href="/projects" />
                        <NavItem icon={<MailIcon className="w-6 h-6" />} title="Contact" href="/contacts" />
                    </ul>
                </nav>

            </>
        );
    }

    return (
        <nav className="bg-base-100 shadow-md">
            <div className="container mx-auto flex items-center justify-between py-4">
                <Link className="font-bold text-4xl text-cyan-500 cursor-pointer " href='/'>keiru_dev</Link>
                <ul className="flex space-x-8 cursor-pointer">
                    <li>
                        <Link
                            href="/abouts"
                            className="text-lg text-base-content hover:text-cyan-400 transition duration-300 ease-in"
                        >
                            about_me
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/projects"
                            className="text-lg text-base-content hover:text-cyan-400 transition duration-300 ease-in"
                        >
                            projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contacts"
                            className="text-lg text-base-content hover:text-cyan-400 transition duration-300 ease-in"
                        >
                            contact
                        </Link>
                    </li>
                </ul>
                <label className="swap swap-rotate mx-5">
                    <input type="checkbox"  className="theme-controller" value="autumn"/>

                    <svg className="swap-on fill-current h-8" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    <svg className="swap-off fill-current h-8" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                </label>
            </div>
        </nav>
    );
};


