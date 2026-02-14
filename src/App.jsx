import React from 'react';
import Navbar from './components/Navbar';
import Particles from './components/Particles';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Badges from './components/Badges';
import FunFacts from './components/FunFacts';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import GithubStats from './components/GithubStats';
import Vision from './components/Vision';

function App() {
  return (
    <div className="relative">
      <CustomCursor />
      <ScrollProgress />
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Vision />
        <Timeline />
        <Projects />
        <GithubStats />
        <Badges />
        <FunFacts />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
