import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Note-taking app',
            shortDesc: 'Connected to the database',
            description: 'I connected the note taking app with FastAPI and Database. Full CRUD operations with secure authentication.',
            image: '/note-taking-app-icon-in-illustration-vector.jpg',
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com/Bekzodse',
            tags: ['FastAPI', 'Database', 'Python']
        },

        {
            id: 2,
            title: 'Todo App',
            shortDesc: 'Easy way to count students',
            description: 'I built the project using fast api and frontend and connected to the database.',
            image: 'thumb_u.min.webp',
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com/Bekzodse',
            tags: ['Python', 'FastAPI', 'Database',]
        },
        {
            id: 3,
            title: 'Atlant-fortuna-Ecommerce',
            shortDesc: 'E-commerce project built fullstack',
            description: 'An ecommerce project with integrated frontend and backend was created by admin.',
            image: '/atlant-fortuna2.webp',
            liveUrl: 'https://atlant-frontend-swart.vercel.app',
            githubUrl: 'https://github.com/Bekzodse',
            tags: ['React', 'Tailwind', 'Java', 'FastAPI', 'Database']
        },

        {
            id: 4,
            title: 'Portfolio Builder',
            shortDesc: 'Drag & drop portfolio yaratish',
            description: 'Portfolio builder for developers. Choose a template, customize it, and deploy it with one click.',
            image: '2025-12-19_02-14-02.png',
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com/Bekzodse',
            tags: ['React', 'Tailwind', 'Database', 'Python', 'FastAPI']
        },
    ];

    return (
        <section id="projects" className="py-12 md:py-20 px-4 bg-gradient-to-br from-white via-indigo-50 to-purple-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 bg-clip-text text-transparent mb-4">
                        Projects
                    </h2>
                    <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8 md:mb-16 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="relative h-48 md:h-56 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex-1 bg-white text-indigo-900 px-3 py-2 rounded-lg font-semibold text-center text-sm hover:bg-indigo-100 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <FaExternalLinkAlt /> Live
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex-1 bg-gray-900 text-white px-3 py-2 rounded-lg font-semibold text-center text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <FaGithub /> Code
                                    </a>
                                </div>
                            </div>

                            <div className="p-5 md:p-6">
                                <h3 className="text-xl md:text-2xl font-bold text-indigo-900 mb-2 group-hover:text-purple-700 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm md:text-base text-gray-600 mb-4">
                                    {project.shortDesc}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.slice(0, 3).map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                                            +{project.tags.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500 rounded-2xl md:rounded-3xl transition-colors duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 50 }}
                            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
                            >
                                <FaTimes className="text-gray-700" />
                            </button>

                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-64 md:h-80 object-cover rounded-t-3xl"
                            />

                            <div className="p-6 md:p-8">
                                <h3 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
                                    {selectedProject.title}
                                </h3>
                                <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                                    {selectedProject.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={selectedProject.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold text-center hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <FaExternalLinkAlt /> View Live
                                    </a>
                                    <a
                                        href={selectedProject.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-xl font-bold text-center hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <FaGithub /> View Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
