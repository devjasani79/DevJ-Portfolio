import { motion } from "framer-motion";
import ProfileImage from "../assets/profile3.jpg";
import ReactPlayer from "react-player";
import {
  Code2,
  Type,
  FileCode2,
  Github,
  GitBranch,
  Server,
  Database,
  Cloud,
  Lock,
  Palette,
  PenTool,
  ArrowRight,
  Music,
  Users,
  Award,
} from "lucide-react";


// Simple fade-in animation wrapper
const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const SkillItem = ({ icon: Icon, title }: { icon: any; title: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center gap-3 p-4 rounded-xl bg-zinc-800/50 border border-zinc-700 hover:border-zinc-600 transition-all"
  >
    <Icon className="w-6 h-6 text-blue-400" />
    <span className="text-white">{title}</span>
  </motion.div>
);

const About = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <FadeIn>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img
                  src={ProfileImage}
                  alt="My profile"
                  className="relative w-64 h-64 rounded-full border-4 border-zinc-800 object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Hi, I'm DevJ
                  </span>
                </h1>
                <p className="text-xl text-zinc-400 mb-6 max-w-xl">
                  A full-stack developer with a passion for creating beautiful, functional applications and a creative side in dance, art, and brand management.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Let's Connect <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-16 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Technical Expertise
              </span>
            </h2>
          </FadeIn>

          <div className="grid gap-12">
            {/* Frontend */}
            <FadeIn delay={0.2}>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Frontend Development</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <SkillItem icon={Code2} title="ReactJS" />
                  <SkillItem icon={Type} title="TypeScript" />
                  <SkillItem icon={Palette} title="Tailwind CSS" />
                  <SkillItem icon={FileCode2} title="HTML/CSS" />
                  <SkillItem icon={FileCode2} title="JavaScript" />
                  <SkillItem icon={FileCode2} title="Zustand" />
                </div>
              </div>
            </FadeIn>

            {/* Backend */}
            <FadeIn delay={0.3}>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Backend Development</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <SkillItem icon={Server} title="Node.js" />
                  <SkillItem icon={Database} title="MongoDB" />
                  <SkillItem icon={Cloud} title="Firebase" />
                  <SkillItem icon={Lock} title="JWT" />
                  <SkillItem icon={FileCode2} title="Express" />
                </div>
              </div>
            </FadeIn>

            {/* Tools */}
            <FadeIn delay={0.4}>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Tools & Platforms</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <SkillItem icon={GitBranch} title="Git" />
                  <SkillItem icon={Github} title="GitHub" />
                  <SkillItem icon={PenTool} title="Figma" />
                  <SkillItem icon={FileCode2} title="Vite" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Creative Side Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Creative Journey
              </span>
            </h2>
          </FadeIn>

          <div className="grid gap-12">
            {/* Dance & Choreography */}
            <FadeIn delay={0.2}>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Dance & Choreography</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <SkillItem icon={Music} title="50+ Students Trained" />
                  <SkillItem icon={Award} title="10+ Events Judged" />
                  <SkillItem icon={Users} title="35+ Events Organized" />
                </div>
              </div>
            </FadeIn>

            {/* Artist Management */}
            <FadeIn delay={0.3}>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Artist Management</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <SkillItem icon={Users} title="Artist Development" />
                  <SkillItem icon={Award} title="Event Management" />
                  <SkillItem icon={Music} title="Performance Direction" />
                </div>
              </div>
            </FadeIn>

            {/* Brand Collaborations */}
            <FadeIn delay={0.4}>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Brand Collaborations</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <SkillItem icon={PenTool} title="Partnership Development" />
                  <SkillItem icon={Award} title="Campaign Strategy" />
                  <SkillItem icon={Users} title="Brand Management" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
