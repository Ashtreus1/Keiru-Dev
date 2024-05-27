import React from 'react';

const AboutOverview = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                    Aspiring <span className="font-bold text-cyan-500">software developer</span> and <span className="font-bold text-cyan-500">tech enthusiast</span> with over <span className="text-cyan-500 font-bold">3 years of experience</span>. Passionate about creating <span className="font-bold text-cyan-500">functional</span> and <span className="font-bold text-cyan-500">elegant solutions</span>, collaborating, and learning from the tech community. Looking forward to <span className="font-bold text-cyan-500">connecting</span> and <span className="font-bold text-cyan-500">collaborating</span> on exciting projects!
                </p>
            </div>
        </div>
    );
}

export default AboutOverview;
