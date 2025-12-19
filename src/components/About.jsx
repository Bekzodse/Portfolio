import React from 'react';
import { motion } from 'framer-motion';
import { FaBirthdayCake, FaMapMarkerAlt, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden flex items-center">
            {/* Background Decorative Elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-30"></div>

            <div className="max-w-7xl mx-auto w-full">
                {/* Magazine Layout */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <div className="grid lg:grid-cols-[300px_1fr_1fr] min-h-[600px]">

                        {/* Left Sidebar - "ABOUT ME" Vertical Text */}
                        <div className="hidden lg:flex bg-gradient-to-b from-amber-200 via-amber-300 to-amber-200 items-center justify-center relative overflow-hidden">
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="transform -rotate-0"
                            >
                                <h2 className="text-[120px] font-black text-indigo-900/20 tracking-widest writing-mode-vertical select-none">
                                    ABOUT ME
                                </h2>
                            </motion.div>

                            {/* Decorative Lines */}
                            <div className="absolute top-0 left-0 right-0 h-2 bg-white/30"></div>
                            <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/30"></div>
                        </div>

                        {/* Center Column - Photo and Name */}
                        <div className="bg-gray-100 p-8 md:p-12 flex flex-col justify-center items-center text-center relative">
                            {/* Profile Photo */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="mb-8 relative"
                            >
                                <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                                    <img
                                        src="/photo_2025-12-18_22-40-45.jpg"
                                        alt="Mukumov Bekzod"
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                    />

                                </div>
                                {/* Corner Accent */}
                            </motion.div>

                            {/* Name */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <h3 className="text-4xl md:text-5xl font-black text-gray-800 mb-2 tracking-tight">
                                    MUKUMOV BEKZOD
                                </h3>
                                <div className="w-24 h-1 bg-indigo-600 mx-auto mb-4"></div>
                                <p className="text-lg md:text-xl text-gray-600 font-light">
                                    Full Stack Developer
                                </p>
                            </motion.div>

                            {/* Quick Info */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="mt-8 space-y-3 text-left w-full max-w-xs"
                            >
                                <div className="flex items-center gap-3 text-gray-700">
                                    <FaBirthdayCake className="text-indigo-600 text-xl" />
                                    <span className="text-sm md:text-base">27 May 2005 (20 y.o)</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <FaMapMarkerAlt className="text-indigo-600 text-xl" />
                                    <span className="text-sm md:text-base">Tashkent, Uzbekistan</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <FaBriefcase className="text-indigo-600 text-xl" />
                                    <span className="text-sm md:text-base">2+ years of experience</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <FaGraduationCap className="text-indigo-600 text-xl" />
                                    <span className="text-sm md:text-base">Computer Science</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column - Story */}
                        <div className="bg-gray-200 p-8 md:p-12 flex flex-col justify-center relative">
                            {/* "MY STORY" Header */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x:  0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="mb-8"
                            >
                                <h3 className="text-3xl md:text-4xl font-black text-gray-800 mb-6 tracking-wide">
                                    MY STORY
                                </h3>
                            </motion.div>

                            {/* Story Text */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y:  0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base"
                            >
                                <p>
                                    Men <span className="font-bold text-indigo-900">Mukumov Bekzod</span>,
                                    I was born on May 27, 2005 in Bukhara region. From a young age,
                                    I have been interested in technology and innovation.
                                </p>

                                <p>
                                    In the field of programming <span className="font-bold">I have more than 3 years of experience.</span>
                                    As a Full Stack Developer, I specialize in building modern web applications, UI/UX design, and solving complex problems.
                                </p>

                                <p>
                                    I am an instigator who is always eager to learn new technologies and develop myself.
                                    I love turning complex tasks into simple and effective solutions.
                                </p>

                                <p>
                                    My goal is to use my knowledge to create useful projects
                                    on a global scale and contribute to improving people's lives through technology.
                                </p>

                                {/* Signature */}
                                <div className="pt-6">
                                    <div className="text-2xl md:text-3xl font-bold text-indigo-900 italic">
                                        — Mukumov Bekzod
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative Quote Mark */}
                            <div className="absolute top-8 right-8 text-9xl font-serif text-indigo-600/10 leading-none">
                                "
                            </div>
                        </div>

                    </div>
                </div>

                {/* Stats Section Below */}

                {/* Skills Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-12 bg-white rounded-2xl p-8 shadow-xl"
                >
                    <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">Core Competencies</h4>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            'React. js', 'Node.js', 'TypeScript', 'Python',
                            'UI/UX Design', 'MongoDB', 'PostgreSQL', 'Docker',
                            'AWS', 'Git', 'Django', 'Shadcn', 'FastAPI', 'RestAPI'
                        ].map((skill, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 + index * 0.05 }}
                                whileHover={{ scale: 1.1, backgroundColor: '#4f46e5', color: '#fff' }}
                                className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold text-sm cursor-pointer transition-all border-2 border-gray-200 hover:border-indigo-600"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
        </section>
    );
};

export default About;