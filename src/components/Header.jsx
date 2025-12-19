import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import * as THREE from 'three';

// Bright Realistic Globe with Enhanced Lighting
const RealisticGlobe = () => {
    const globeRef = useRef();
    const cloudsRef = useRef();

    // Load Earth Textures
    const earthMap = useLoader(
        THREE.TextureLoader,
        'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg'
    );

    const earthNormalMap = useLoader(
        THREE.TextureLoader,
        'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg'
    );

    const earthSpecularMap = useLoader(
        THREE.TextureLoader,
        'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg'
    );

    const cloudsMap = useLoader(
        THREE.TextureLoader,
        'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_clouds_1024.png'
    );

    useFrame(({ clock }) => {
        if (globeRef.current) {
            globeRef.current.rotation.y = clock.getElapsedTime() * 0.05;
        }
        if (cloudsRef.current) {
            cloudsRef.current.rotation.y = clock.getElapsedTime() * 0.06;
        }
    });

    return (
        <group>
            <mesh ref={globeRef} castShadow receiveShadow>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshPhongMaterial
                    map={earthMap}
                    normalMap={earthNormalMap}
                    specularMap={earthSpecularMap}
                    shininess={30}
                    bumpScale={0.05}
                    emissive="#1e3a8a"
                    emissiveIntensity={0.4}
                />
            </mesh>

            <mesh ref={cloudsRef}>
                <sphereGeometry args={[1.52, 64, 64]} />
                <meshPhongMaterial
                    map={cloudsMap}
                    transparent={true}
                    opacity={0.5}
                    depthWrite={false}
                    emissive="#ffffff"
                    emissiveIntensity={0.2}
                />
            </mesh>

            <mesh scale={[1.1, 1.1, 1.1]}>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshBasicMaterial
                    color="#60a5fa"
                    transparent={true}
                    opacity={0.3}
                    side={THREE.BackSide}
                />
            </mesh>

            <mesh scale={[1.15, 1.15, 1.15]}>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshBasicMaterial
                    color="#3b82f6"
                    transparent={true}
                    opacity={0.2}
                    side={THREE.BackSide}
                />
            </mesh>

            <mesh scale={[1.2, 1.2, 1.2]}>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshBasicMaterial
                    color="#818cf8"
                    transparent={true}
                    opacity={0.1}
                    side={THREE.BackSide}
                />
            </mesh>

            <pointLight position={[3, 0, 3]} intensity={2} color="#60a5fa" distance={8} />
            <pointLight position={[-3, 0, -3]} intensity={1.5} color="#818cf8" distance={8} />
            <pointLight position={[0, 3, 0]} intensity={1.8} color="#ffffff" distance={6} />
        </group>
    );
};

const SimpleGlobe = () => {
    const globeRef = useRef();
    const cloudsRef = useRef();

    useFrame(({ clock }) => {
        if (globeRef.current) {
            globeRef.current.rotation.y = clock.getElapsedTime() * 0.08;
        }
        if (cloudsRef.current) {
            cloudsRef.current.rotation.y = clock.getElapsedTime() * 0.1;
        }
    });

    return (
        <group>
            <mesh ref={globeRef}>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshPhongMaterial
                    color="#3b82f6"
                    emissive="#1e40af"
                    emissiveIntensity={0.6}
                    shininess={40}
                    specular="#ffffff"
                />
            </mesh>

            {[
                { pos: [-0.6, 0.9, 1.3], size: 0.35 },
                { pos: [-0.4, -0.4, 1.4], size: 0.28 },
                { pos: [0.2, 1.1, 1.2], size: 0.2 },
                { pos: [0.3, 0.2, 1.5], size: 0.4 },
                { pos: [1.2, 0.7, 0.9], size: 0.45 },
                { pos: [1.3, -0.6, 1.0], size: 0.22 }
            ].map((continent, i) => (
                <mesh key={i} position={continent.pos}>
                    <sphereGeometry args={[continent.size, 16, 16]} />
                    <meshPhongMaterial
                        color="#10b981"
                        emissive="#059669"
                        emissiveIntensity={0.5}
                        shininess={20}
                    />
                </mesh>
            ))}

            <mesh ref={cloudsRef}>
                <sphereGeometry args={[1.52, 64, 64]} />
                <meshPhongMaterial
                    color="#ffffff"
                    transparent={true}
                    opacity={0.35}
                    depthWrite={false}
                    emissive="#ffffff"
                    emissiveIntensity={0.3}
                />
            </mesh>

            <mesh scale={[1.1, 1.1, 1.1]}>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshBasicMaterial
                    color="#60a5fa"
                    transparent={true}
                    opacity={0.3}
                    side={THREE.BackSide}
                />
            </mesh>

            <mesh scale={[1.15, 1.15, 1.15]}>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshBasicMaterial
                    color="#3b82f6"
                    transparent={true}
                    opacity={0.2}
                    side={THREE.BackSide}
                />
            </mesh>

            <pointLight position={[3, 0, 3]} intensity={2} color="#60a5fa" distance={8} />
            <pointLight position={[-3, 0, -3]} intensity={1.5} color="#818cf8" distance={8} />
        </group>
    );
};

const Globe = () => {
    const [useRealistic, setUseRealistic] = useState(true);

    return (
        <>
            {useRealistic ? (
                <React.Suspense fallback={<SimpleGlobe />}>
                    <RealisticGlobe />
                </React.Suspense>
            ) : (
                <SimpleGlobe />
            )}
        </>
    );
};

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-950 text-white px-4 py-20 md:py-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(isMobile ? 50 : 150)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white rounded-full"
                        style={{
                            width: Math.random() * 3 + 'px',
                            height: Math.random() * 3 + 'px',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0.2, 1, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center lg:text-left order-2 lg:order-1"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
                        className="mb-6 md:mb-8 flex justify-center lg:justify-start"
                    >
                        <div className="relative group">

                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                                <TypeAnimation
                                    sequence={[
                                        'Full Stack Developer',
                                        2500,
                                        'UI/UX Designer',
                                        2500,
                                    ]}
                                    wrapper="span"
                                    speed={30}
                                    repeat={Infinity}
                                />
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="space-y-4"
                    >
                        <p className="text-2xl sm:text-3xl md:text-4xl text-white font-bold">
                            Mukumov Bekzod
                        </p>
                        <p className="text-base sm:text-lg md:text-xl text-indigo-200 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            I create amazing projects with modern technologies on a global scale 🌍
                        </p>

                        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0 mt-6">
                            {[
                                { number: '2+', label: 'Years Experience' },
                                { number: '15+', label: 'Projects Done' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.4 + i * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                                >
                                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                                    <div className="text-xs md:text-sm text-indigo-200">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.7 }}
                        className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group px-10 py-5 bg-white text-indigo-900 rounded-full font-bold shadow-2xl overflow-hidden relative"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                My Projects
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.span>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-indigo-900 transition-all shadow-lg backdrop-blur-sm"
                        >
                            Contact Me
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, type: "spring" }}
                    className="order-1 lg:order-2 flex items-center justify-center"
                >
                    <div className="relative w-full max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/60 to-indigo-400/60 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/40 to-blue-300/40 rounded-full blur-2xl"></div>

                        <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
                            <Canvas
                                camera={{
                                    position: [0, 0, 5],
                                    fov: 45
                                }}
                                gl={{
                                    antialias: true,
                                    alpha: true,
                                }}
                            >
                                <ambientLight intensity={1.2} />
                                <directionalLight position={[5, 3, 5]} intensity={3.5} color="#ffffff" />
                                <directionalLight position={[-5, 3, -5]} intensity={2} color="#60a5fa" />
                                <pointLight position={[5, 0, 0]} intensity={2} color="#ffffff" />
                                <pointLight position={[-5, 0, 0]} intensity={2} color="#60a5fa" />
                                <pointLight position={[0, 5, 0]} intensity={2} color="#818cf8" />
                                <pointLight position={[0, -5, 0]} intensity={1.5} color="#3b82f6" />
                                <pointLight position={[0, 0, -5]} intensity={2.5} color="#a78bfa" />

                                <Stars
                                    radius={100}
                                    depth={50}
                                    count={isMobile ? 2000 : 5000}
                                    factor={5}
                                    saturation={0}
                                    fade
                                    speed={0.5}
                                />

                                <Globe />

                                <OrbitControls
                                    enableZoom={false}
                                    autoRotate
                                    autoRotateSpeed={0.5}
                                    enablePan={false}
                                    minPolarAngle={Math.PI / 3}
                                    maxPolarAngle={2 * Math.PI / 3}
                                    enableDamping
                                    dampingFactor={0.05}
                                />
                            </Canvas>
                        </div>


                    </div>
                </motion.div>
            </div>


        </header>
    );
};

export default Header;
