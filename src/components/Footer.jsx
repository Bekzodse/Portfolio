import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegram, FaInstagram, FaTwitter, FaHeart, FaArrowUp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FaGithub />, url: 'https://github.com/Bekzodse', label: 'GitHub', color: '#333' },
        { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/bekzod-mukumov-aa9ba132a', label: 'LinkedIn', color: '#0077b5' },
        { icon: <FaTelegram />, url: 'https://t.me/justbekzodse', label: 'Telegram', color: '#0088cc' },
        { icon: <FaInstagram />, url: 'https://www.instagram.com/bekzodse', label: 'Instagram', color: '#E4405F' },
    ];

    const quickLinks = [
        { name: 'About Me', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 text-white overflow-hidden">
            <div className="absolute inset-0 overflow-hidden opacity-10">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >

                        <p className="text-indigo-200 text-sm md:text-base leading-relaxed">
                            Full Stack Developer va UI/UX Designer. I create amazing projects with modern technologies.
                        </p>
                        <div className="flex items-center gap-2 text-indigo-300 text-sm">
                            <FaMapMarkerAlt />
                            <span>Tashkent, Uzbekistan</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-4"
                    >
                        <h4 className="text-lg md:text-xl font-bold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-indigo-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group text-sm md:text-base"
                                    >
                                        <span className="w-0 group-hover:w-4 h-0.5 bg-indigo-400 transition-all duration-300"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h4 className="text-lg md:text-xl font-bold text-white mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:bekzod@example.com"
                                    className="text-indigo-200 hover:text-white transition-colors flex items-center gap-3 group text-sm md:text-base"
                                >
                                    <FaEnvelope className="text-indigo-400 group-hover:scale-110 transition-transform" />
                                    bekzodmukumov9655@icloud.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+998901234567"
                                    className="text-indigo-200 hover:text-white transition-colors flex items-center gap-3 group text-sm md:text-base"
                                >
                                    <FaPhone className="text-indigo-400 group-hover:scale-110 transition-transform" />
                                    +998 99 447 96 55
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="space-y-4"
                    >
                        <h4 className="text-lg md:text-xl font-bold text-white mb-4">Follow Me</h4>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-indigo-900 transition-all duration-300 border border-white/20 group"
                                    title={social.label}
                                >
                                    <span className="text-lg md:text-xl">{social.icon}</span>
                                </motion.a>
                            ))}
                        </div>



                    </motion.div>
                </div>



            </div>



        </footer>
    );
};

export default Footer;
