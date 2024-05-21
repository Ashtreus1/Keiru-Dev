"use client"
import React from 'react';
import Dots from "../decorations/Dots";

export const HeroSection = () => {
    return (
        <section id="home" className="relative">
            <div className="hero min-h-screen bg-base-200 relative border-b-4 border-cyan-500">
                <div className="hero-content text-center mx-5">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-6xl font-bold">Hello I'm <span className="text-cyan-300">Jameson</span></h1>
                        <p className="py-6 text-xl">
                            <span className="text-cyan-400 font-bold">Aspiring software developer</span> and <span className="text-cyan-400 font-bold">tech enthusiast</span>.<br />Been developing and enhancing my skills for more than
                            <span className="text-cyan-400 font-semibold"> 3 years</span>.<br />Expanding my knowledge and my skills as a life-long learning commitment.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button className="px-5 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors text-xl">Inspect C.V</button>
                            <button className="px-5 py-3 bg-transparent border border-solid font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-colors text-xl">See GitHub</button>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-5 left-0  w-full bg-cyan-500 glow-effect" />
            </div>
            <style jsx>{`
                .glow-effect {
                    box-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
                }
            `}</style>
        </section>
    );
}
