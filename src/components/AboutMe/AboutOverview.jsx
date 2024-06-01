import React from 'react';

const AboutOverview = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="flex flex-col-reverse md:flex-row items-center max-w-5xl">
                <div className="md:w-1/2 p-8">
                    <h1 className="text-5xl sm:text-4xl font-bold mb-4 ">About Me</h1>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                        Aspiring <span className="font-bold text-cyan-500">software developer</span> and <span className="font-bold text-cyan-500">tech enthusiast</span> with over <span className="text-cyan-500 font-bold">3 years of experience</span>. Passionate about creating <span className="font-bold text-cyan-500">functional</span> and <span className="font-bold text-cyan-500">elegant solutions</span>, collaborating, and learning from the tech community. Looking forward to <span className="font-bold text-cyan-500">connecting</span> and <span className="font-bold text-cyan-500">collaborating</span> on exciting projects!
                    </p>
                </div>
                <div className="md:w-1/2 p-8 flex justify-center items-center">
                    <img
                        src="images/me.png"
                        alt="Profile"
                        className="w-3/4 h-auto max-w-xs rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutOverview;
