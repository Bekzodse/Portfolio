import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 overflow-x-hidden">
            <Navbar />

            <div id="home">
                <Header />
            </div>

            <div id="about">
                <About />
            </div>

            <div id="skills">
                <Skills />
            </div>

            <div id="projects">
                <Projects />
            </div>


            <div id="contact">
                <Contact />
            </div>

            <Footer />
        </div>
    );
}

export default App;