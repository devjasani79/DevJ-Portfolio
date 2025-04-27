import { useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Home/Hero';
import About from './components/About/About';
import ProjectsSection from './components/Projects/ProjectsSection';
import CreativeSection from './components/Creative/CreativeSection';
import Contact from './components/Contact/Contact';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProjectsSection />
        <CreativeSection />
        <Contact />
      </main>
    </div>
  );
}

export default App;