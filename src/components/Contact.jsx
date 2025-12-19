import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegram, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target. name]: '' });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.fullName. trim()) newErrors.fullName = 'Required';
        if (!formData.email.trim()) {
            newErrors.email = 'Required';
        } else if (!/\S+@\S+\.\S+/.test(formData. email)) {
            newErrors.email = 'Invalid email';
        }
        if (!formData.message.trim()) newErrors.message = 'Required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({ fullName: '', email: '', message: '' });

        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="min-h-screen py-12 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50 flex items-center">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-2xl">

                    {/* Left Side - Image/Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50 p-8 md:p-12 flex flex-col justify-between min-h-[400px] md:min-h-[600px]"
                    >
                        {/* Decorative Image */}
                        <div className="relative mb-8">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl"></div>
                            <img
                                src="/profile. jpg"
                                alt="Mukumov Bekzod"
                                className="relative w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600';
                                }}
                            />
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                    Contact
                                </h3>
                                <a
                                    href="mailto:bekzod@example.com"
                                    className="text-base md:text-lg text-indigo-700 hover:text-indigo-900 transition-colors"
                                >
                                    bekzodmukumov9655@icloud.com
                                </a>
                            </div>

                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                    Based in
                                </h3>
                                <p className="text-base md:text-lg text-gray-700">
                                    Tashkent, Uzbekistan
                                </p>
                            </div>


                        </div>
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity:  1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="p-8 md:p-12 bg-white flex flex-col justify-center"
                    >
                        {/* Header */}
                        <div className="mb-8 md:mb-12">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-2">
                                Contact Us
                            </h2>
                        </div>

                        {/* Success Message */}
                        {submitted && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded"
                            >
                                Message sent successfully! ✓
                            </motion.div>
                        )}

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                            {/* Full Name */}
                            <div>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    className={`w-full px-0 py-3 bg-transparent border-b-2 ${
                                        errors.fullName ?  'border-red-500' : 'border-gray-300'
                                    } focus:border-black outline-none text-gray-900 placeholder-gray-500 text-base md:text-lg transition-colors`}
                                />
                                {errors.fullName && (
                                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData. email}
                                    onChange={handleChange}
                                    placeholder="E-mail"
                                    className={`w-full px-0 py-3 bg-transparent border-b-2 ${
                                        errors.email ? 'border-red-500' : 'border-gray-300'
                                    } focus:border-black outline-none text-gray-900 placeholder-gray-500 text-base md:text-lg transition-colors`}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                <textarea
                    name="message"
                    value={formData. message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows="4"
                    className={`w-full px-0 py-3 bg-transparent border-b-2 ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                    } focus:border-black outline-none text-gray-900 placeholder-gray-500 text-base md:text-lg resize-none transition-colors`}
                />
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full md:w-auto px-12 py-4 bg-black text-white font-bold text-base md:text-lg rounded-full hover:bg-indigo-600 transition-all shadow-lg hover:shadow-xl"
                            >
                                Contact Us
                            </motion.button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;