import React, { Suspense, lazy } from 'react';
import './App.css';
import Navbar from './components/Navbar'; // Import Navbar

// Lazy loading components
const AboutMe = lazy(() => import('./components/AboutMe'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Resume = lazy(() => import('./components/Resume'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Render Navbar */}
      <Suspense fallback={<div>Loading...</div>}>
        <AboutMe />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
