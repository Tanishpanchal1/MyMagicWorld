
'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, TrendingUp, Zap, Shield, Flame, Wind, BookOpen, BrainCircuit, Target, Award, Linkedin, Github, Code, Menu, X, ChevronRight, Code2 } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';

const aboutSections = [
  {
    title: "Introduction",
    icon: <Briefcase className="w-8 h-8" />,
    gradient: "from-red-700 to-amber-600",
    content: [
      {
        subtitle: "Who I am",
        text: "Creative Full Stack Developer At Little Apps, Inc.",
      },
      {
        subtitle: "Academics",
        text: "B.Tech, CSE, Indian Institute of Technology, Madras (IITM)",
      },
      {
        subtitle: "My Journey",
        text: "From a 1.5 lacs per-annum package to a 24 lacs per-annum package.",
      },
    ],
  },
  {
    title: "Philosophy",
    icon: <BrainCircuit className="w-8 h-8" />,
    gradient: "from-amber-600 to-red-500",
    content: [
      {
        subtitle: "My Mantra",
        text: "Code with passion.",
      },
      {
        subtitle: "My approach",
        text: "Agile Development, Responsive Design, User-Centric focus.",
      },
    ],
  },
  {
    title: "Goals",
    icon: <Target className="w-8 h-8" />,
    gradient: "from-red-900 to-amber-600",
    content: [
      {
        subtitle: "Short term goal",
        text: "Master DSA",
      },
      {
        subtitle: "Long term vision",
        text: "Build something revolutionary.",
      },
    ],
  },
  {
    title: "Achievements",
    icon: <Award className="w-8 h-8" />,
    gradient: "from-red-800 to-amber-500",
    content: [
        {
            subtitle: "Codeathons",
            text: "100+ problems solved.",
        },
        {
            subtitle: "LeetCode",
            text: "2-star rated.",
        },
    ]
  },
];

const techStack = {
  Languages: [
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JS/TS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  ],
  Frameworks: [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "Jetpack Compose", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetpackcompose/jetpackcompose-original.svg" },
  ],
  Databases: [
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  ],
  "DevOps/Cloud": [
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "GCP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  ],
};

export default function AboutPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
        { name: "Work", href: "/projects" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "#contact" },
    ];
  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-red-500/30 overflow-x-hidden">
      {/* Top Bar / Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
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
      <header className="mb-20 relative text-center md:text-left glass-effect p-8 rounded-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/5 text-amber-500 text-[10px] font-black mb-6 tracking-[0.2em] uppercase">
              <BrainCircuit className="w-3 h-3" />
              My Story
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
              Tanish Panchal
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl max-w-3xl leading-relaxed mx-auto md:mx-0">
                A passionate and creative Full Stack Developer based in India, currently working at Little Apps, Inc. I am a B.Tech CSE student at IIT Madras with a journey that reflects my dedication and growth in the tech industry.
            </p>
          </motion.div>
        </header>

        <section id="about-details" className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {aboutSections.map((section, index) => (
                 <motion.div 
                 key={section.title}
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.15 }}
                 className="group relative glass-effect rounded-[2rem]"
               >
                 <div className={`absolute -inset-[2px] rounded-[2rem] bg-gradient-to-r ${section.gradient} opacity-10 group-hover:opacity-100 transition-all duration-700 blur-[1px] group-hover:blur-[8px]`} />
                 
                 <div className="relative h-full bg-transparent p-8 sm:p-10 flex flex-col">
                   <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${section.gradient} flex items-center justify-center mb-8 shadow-xl shadow-red-950/50 group-hover:scale-110 transition-transform duration-500`}>
                     {section.icon}
                   </div>
 
                   <h3 className="text-2xl sm:text-3xl font-black mb-6 group-hover:text-amber-400 transition-colors duration-300">
                     {section.title}
                   </h3>
                   <div className="space-y-4">
                   {section.content.map(item => (
                       <div key={item.subtitle}>
                           <h4 className="font-bold text-amber-400 text-sm uppercase tracking-wider">{item.subtitle}</h4>
                           <p className="text-gray-300">{item.text}</p>
                       </div>
                   ))}
                   </div>
                 </div>
               </motion.div>
            ))}
        </section>

        <section id="tech-stack" className="mt-24">
          <h2 className="text-4xl font-black tracking-tighter text-center mb-12">My Tech Arsenal</h2>
          {Object.entries(techStack).map(([category, technologies]) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-bold text-amber-500 mb-6 text-center">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-effect rounded-lg p-4 flex flex-col items-center justify-center text-center"
                  >
                    <Image src={tech.logo} alt={tech.name} width={48} height={48} className="w-12 h-12 mb-4 filter grayscale group-hover:filter-none transition-all duration-300" />
                    <span className="text-sm font-semibold text-amber-200/70">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </section>

      </main>

      <footer id="contact" className="mt-40 py-20 glass-effect">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-6xl font-black mb-8 tracking-tighter">Let's Connect</h2>
          <div className="flex justify-center gap-8 mb-12">
            <a href="https://www.linkedin.com/in/tanish-panchal-4a2553293/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-500 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://github.com/Tanishpanchal1" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-500 transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://dev.to/tanishpanchal1" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-500 transition-colors">
              <Code className="w-8 h-8" />
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
