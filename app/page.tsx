import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Skills from "./components/sections/Skills";



export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Services />
      <Skills />
    </main>
  );
}