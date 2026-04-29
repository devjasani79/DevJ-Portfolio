import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Services />
      <Skills />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}