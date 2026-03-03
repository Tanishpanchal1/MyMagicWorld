'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, Code2, Rocket, Menu, X, ChevronRight, Wand2, Lightbulb, Activity, Linkedin, Star, GitFork } from "lucide-react";
import Link from "next/link";

const featuredProjects = [
  {
    id: 1,
    title: "Ride_Scanner",
    description: "A Kotlin-based tool for scanning and analyzing ride data, forked from skrish-g.",
    techStack: ["Kotlin"],
    liveDemo: "#",
    github: "https://github.com/Tanishpanchal1/Ride_Scanner",
    icon: <Rocket className="w-5 h-5 text-red-100" />,
    gradient: "from-red-800 via-red-600 to-amber-500",
    stars: 1,
  },
  {
    id: 2,
    title: "QuizVerseDeepMind",
    description: "A modern, interactive quiz platform with real-time features and beautiful animations.",
    techStack: ["JavaScript", "React", "Firebase"],
    liveDemo: "#",
    github: "https://github.com/Tanishpanchal1/QuizVerseDeepMind",
    icon: <Sparkles className="w-5 h-5 text-amber-100" />,
    gradient: "from-amber-600 via-red-500 to-red-700",
    stars: 1,
  },
  {
    id: 3,
    title: "MyMagicWorld",
    description: "An immersive web experience built with TypeScript.",
    techStack: ["TypeScript"],
    liveDemo: "#",
    github: "https://github.com/Tanishpanchal1/MyMagicWorld",
    icon: <Wand2 className="w-5 h-5 text-purple-100" />,
    gradient: "from-purple-800 via-purple-600 to-indigo-500",
    stars: 1,
  },
  {
    id: 4,
    title: "NeutraYield",
    description: "An AI-driven, non-custodial execution engine for scanning markets and executing trades securely.",
    techStack: ["Python", "LLM", "MetaMask"],
    liveDemo: "#",
    github: "https://github.com/Tanishpanchal1/NeutraYield",
    icon: <Activity className="w-5 h-5 text-green-100" />,
    gradient: "from-green-800 via-green-600 to-teal-500",
    stars: 1,
  },
];

const otherProjects = [
    {
        id: 1,
        title: "Daytona",
        description: "A secure and elastic infrastructure for running AI-generated code.",
        github: "https://github.com/daytonaio/daytona",
        stars: 61672,
        forks: 5076,
        tech: "TypeScript",
      }
];

export default function ProjectsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: "Work", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500/30 overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-red-900/20 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 font-bold text-2xl tracking-tighter"
          >
            <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-700 to-amber-600 flex items-center justify-center shadow-lg shadow-red-900/20">
                <Code2 className="w-6 h-6 text-white" />
                </div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-200 to-red-400">
                LEGACY
                </span>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-red-700 to-amber-600 text-white hover:shadow-lg hover:shadow-red-600/20 transition-all font-bold text-xs tracking-widest uppercase">
              Hire Me
            </button>
          </div>

          <button 
            className="md:hidden p-2 text-amber-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 border-b border-red-900/30 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-bold text-gray-300 hover:text-amber-400 flex items-center justify-between"
                  >
                    {link.name}
                    <ChevronRight className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
      </nav>

      <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-32 sm:pt-40">
        <header className="mb-20 relative text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/5 text-amber-500 text-[10px] font-black mb-6 tracking-[0.2em] uppercase">
                    <Wand2 className="w-3 h-3" />
                    My Portfolio
                </div>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-none">
                    Crafting Digital <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-amber-400 to-red-600">
                        Experiences
                    </span>
                </h1>
                <p className="text-gray-400 text-lg sm:text-xl max-w-3xl leading-relaxed mx-auto">
                    A collection of my work, from personal projects to professional endeavors. Each project reflects my dedication to quality, innovation, and creating impactful solutions.
                </p>
            </motion.div>
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[150px] -z-10 animate-pulse" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600/10 rounded-full blur-[120px] -z-10" />
        </header>


        <section id="featured-work" className="scroll-mt-32">
          <h2 class="text-4xl font-black tracking-tighter mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative"
              >
                <div className={`absolute -inset-[2px] rounded-[2rem] bg-gradient-to-r ${project.gradient} opacity-10 group-hover:opacity-100 transition-all duration-700 blur-[1px] group-hover:blur-[8px]`} />
                
                <div className="relative h-full bg-[#0F0000] border border-red-900/20 rounded-[2rem] overflow-hidden p-8 sm:p-10 flex flex-col shadow-2xl">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-8 shadow-xl shadow-red-950/50 group-hover:scale-110 transition-transform duration-500`}>
                    {project.icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black mb-4 group-hover:text-amber-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed flex-grow font-medium">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {project.techStack.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1.5 bg-red-950/30 border border-red-900/30 text-amber-200/70 text-[9px] font-black rounded-lg uppercase tracking-widest"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-red-900/10">
                    <div className="flex items-center gap-4 text-gray-400">
                        <div className="flex items-center gap-1 text-xs font-bold">
                            <Star className="w-4 h-4 text-amber-500" />
                            <span>{project.stars}</span>
                        </div>
                    </div>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl hover:bg-red-900/20 transition-all text-gray-500 hover:text-amber-400"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="other-projects" className="mt-24">
            <h2 className="text-4xl font-black tracking-tighter text-center mb-12">Other Noteworthy Projects</h2>
            <div className="space-y-4">
            {otherProjects.map((project, index) => (
                <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, y: 40 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: index * 0.1 }}
                    className="bg-[#0F0000] border border-red-900/20 rounded-2xl p-6 flex items-center justify-between"
                >
                    <div>
                        <h3 className="text-xl font-bold text-amber-500">{project.title}</h3>
                        <p className="text-gray-400 text-sm mt-1">{project.description}</p>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="text-xs bg-gray-800 px-2 py-1 rounded-md">{project.tech}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 text-gray-400">
                        <div className="flex items-center gap-1 font-bold">
                            <Star className="w-5 h-5 text-amber-500" />
                            <span>{project.stars.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1 font-bold">
                            <GitFork className="w-5 h-5" />
                            <span>{project.forks.toLocaleString()}</span>
                        </div>
                        <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl hover:bg-red-900/20 transition-all text-gray-500 hover:text-amber-400"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                    </div>
                </motion.div>
            ))}
            </div>
        </section>
      </main>

      <footer id="contact" className="mt-40 py-20 border-t border-red-900/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-6xl font-black mb-8 tracking-tighter">Ready to build <br /> something <span className="text-amber-500">Golden?</span></h2>
          <button className="px-10 py-4 rounded-full bg-white text-black hover:bg-amber-400 transition-all font-black text-sm tracking-[0.2em] uppercase mb-12">
            Start a Project
          </button>
          <div className="flex justify-center gap-8 text-gray-500 font-bold text-xs tracking-widest uppercase">
          <a href="https://www.linkedin.com/in/tanish-panchal-4a2553293/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-500 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://github.com/Tanishpanchal1" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-500 transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://dev.to/tanishpanchal1" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-500 transition-colors">
              <Code2 className="w-8 h-8" />
            </a>
          </div>
          <p className="text-gray-700 text-[10px] mt-16 font-bold tracking-widest uppercase">
            © {new Date().getFullYear()} Tanish Panchal. All Rights Reserved.
          </p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s linear infinite;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
