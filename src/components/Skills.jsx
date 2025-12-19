import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CircularProgress = ({ percentage, label, color, delay }) => {
    const [count, setCount] = React.useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    React.useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = percentage;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, percentage]);

    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (count / 100) * circumference;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="flex flex-col items-center"
        >
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
                <svg className="transform -rotate-90 w-full h-full">
                    <circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="#e0e7ff"
                        strokeWidth="12"
                        fill="none"
                    />
                    <circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke={color}
                        strokeWidth="12"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                        style={{ filter: `drop-shadow(0 0 8px ${color})` }}
                    />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <span className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-indigo-900 to-purple-900 bg-clip-text text-transparent">
                            {count}%
                        </span>
                    </div>
                </div>

                <div className="absolute inset-0 rounded-full blur-xl opacity-30" style={{ backgroundColor: color }} />
            </div>

            <h3 className="mt-4 md:mt-6 text-xl md:text-2xl font-bold text-indigo-900">
                {label}
            </h3>
        </motion.div>
    );
};
const Skills = () => {
    const skills = [
        { name: 'Backend', percentage: 85, color: '#4f46e5' },
        { name: 'Frontend', percentage: 90, color: '#3b82f6' },
        { name: 'Logo Design', percentage: 75, color: '#8b5cf6' }
    ];

    return (
        <section id="skills" className="py-12 md:py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 bg-clip-text text-transparent mb-4">
                        Skills & Expertise
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
                    {skills.map((skill, index) => (
                        <CircularProgress
                            key={index}
                            percentage={skill.percentage}
                            label={skill.name}
                            color={skill.color}
                            delay={index * 0.2}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Skills;
