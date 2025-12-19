// javascript
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaUser, FaBriefcase, FaCode, FaMusic, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrollProgress, setScrollProgress] = useState(0);

    const navLinks = [
        { name: 'Home', href: '#home', icon: <FaHome /> },
        { name: 'About', href: '#about', icon: <FaUser /> },
        { name: 'Skills', href: '#skills', icon: <FaCode /> },
        { name: 'Projects', href: '#projects', icon: <FaBriefcase /> },
        { name: 'Contact', href: '#contact', icon: <FaEnvelope /> }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            setScrolled(y > 50);

            const sections = navLinks.map(link => link.href.substring(1));
            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }

            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress(docHeight > 0 ? Math.min(1, y / docHeight) : 0);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const scrollToSection = (href) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? 'bg-white/95 backdrop-blur-lg shadow-xl'
                        : 'bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative flex justify-between items-center h-20">
                        {/* Left: Brand / Logo */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center gap-3 cursor-pointer"
                            onClick={() => scrollToSection('#home')}
                        >
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30">
                                <img src="/photo_2025-12-18_21-27-53.jpg" alt="logo" className="w-full h-full object-cover" />
                            </div>
                            <div className={`font-bold text-lg ${scrolled ? 'text-gray-800' : 'text-white'}`}>M. Bekzod</div>
                        </motion.div>

                        {/* Center: Nav Links (centered with absolute positioning) */}
                        <div className="hidden md:flex items-center gap-1 lg:gap-2 absolute left-1/2 transform -translate-x-1/2 z-20">
                            {navLinks.map((link, index) => (
                                <motion.button
                                    key={index}
                                    type="button"
                                    onClick={() => scrollToSection(link.href)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`relative px-4 lg:px-6 py-2 rounded-full font-semibold text-sm lg:text-base transition-all overflow-hidden ${
                                        activeSection === link.href.substring(1)
                                            ? 'text-white'
                                            : scrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-indigo-200'
                                    }`}
                                >
                                    {activeSection === link.href.substring(1) && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full pointer-events-none"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center gap-2">
                                        <span className="hidden lg:inline">{link.icon}</span>
                                        {link.name}
                                    </span>
                                </motion.button>
                            ))}
                        </div>

                        {/* Right: Mobile Toggle */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className={`md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                                scrolled
                                    ? 'bg-gray-100 text-gray-800'
                                    : 'bg-white/10 backdrop-blur-md text-white'
                            }`}
                        >
                            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 shadow-2xl md:hidden overflow-y-auto"
                        >
                            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 text-white">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-black">Menu</h3>
                                        <p className="text-sm text-indigo-100">Navigate Portfolio</p>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                                    >
                                        <FaTimes size={20} />
                                    </button>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">

                                    <div>
                                        <div className="font-bold">Mukumov Bekzod</div>
                                        <div className="text-xs text-indigo-100">Full Stack Developer</div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 space-y-2">
                                {navLinks.map((link, index) => (
                                    <motion.button
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        onClick={() => scrollToSection(link.href)}
                                        className={`w-full flex items-center gap-4 p-4 rounded-xl font-semibold transition-all ${
                                            activeSection === link.href.substring(1)
                                                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                        }`}
                                    >
                                        <span className="text-2xl">{link.icon}</span>
                                        <span className="flex-1 text-left">{link.name}</span>
                                        {activeSection === link.href.substring(1) && (
                                            <span className="text-xl">→</span>
                                        )}
                                    </motion.button>
                                ))}
                            </div>

                            <div className="p-6 border-t border-gray-200">
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToSection('#contact')}
                                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                                >
                                    Let's Work Together
                                    <span className="text-xl">→</span>
                                </motion.button>
                            </div>

                            <div className="p-6 border-t border-gray-200">
                                <p className="text-sm text-gray-500 mb-4">Connect with me</p>
                                <div className="flex gap-3">
                                    {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((social, i) => (
                                        <motion.a
                                            key={i}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            href={`https://${social.toLowerCase()}.com`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-colors"
                                        >
                                            {social[0]}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: scrollProgress }}
                className="fixed top-20 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 origin-left z-40"
            />
        </>
    );
};

export default Navbar;
