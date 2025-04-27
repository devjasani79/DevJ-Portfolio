import { motion } from 'framer-motion'
import { ArrowRight, Code2, Palette, Server } from 'lucide-react'
import { useEffect, useState } from 'react'

const roles = [
  "Developer",
  "Choreographer",
  "Artist",
  "Collaborator"
]

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(1500)

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = roles[currentRole]
      
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1))
        setTypingSpeed(10.5)
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1))
        setTypingSpeed(15)
      }

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setCurrentRole((prev) => (prev + 1) % roles.length)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentRole, typingSpeed])

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 ">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent m-4">
              Hi, I'm DevJ
            </span>
            <br />
            <span className="text-white m-3 ">
              I'm a <span className="text-blue-400">{displayText}</span>
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
            I build modern, responsive web applications with a focus on clean code and great user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              View My Work <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
            >
              Get in Touch
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-zinc-800/50 rounded-xl border border-zinc-700"
            >
              <Code2 className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Frontend Development</h3>
              <p className="text-zinc-400">React, TypeScript, Tailwind CSS</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-zinc-800/50 rounded-xl border border-zinc-700"
            >
              <Server className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Backend Development</h3>
              <p className="text-zinc-400">Node.js, Express, MongoDB</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-zinc-800/50 rounded-xl border border-zinc-700"
            >
              <Palette className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Creative Direction</h3>
              <p className="text-zinc-400">Dance, Art, Brand Management</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home