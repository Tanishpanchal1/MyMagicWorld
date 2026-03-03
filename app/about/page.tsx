'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Sparkles, Code2, Rocket, Layers, Menu, X, ChevronRight, BookOpen, Zap, Shield, Flame, Wind } from "lucide-react";
import Link from 'next/link';

const skills = [
  { name: 'React / Next.js', level: 'Archmage', icon: <Zap className="w-6 h-6" />, color: 'text-blue-400' },
  { name: 'TypeScript', level: 'Grandmaster', icon: <Shield className="w-6 h-6" />, color: 'text-purple-400' },
  { name: 'Three.js', level: 'Illusionist', icon: <Sparkles className="w-6 h-6" />, color: 'text-pink-400' },
  { name: 'Tailwind CSS', level: 'Artisan', icon: <Flame className="w-6 h-6" />, color: 'text-orange-400' },
  { name: 'Node.js', level: 'Alchemist', icon: <Wind className="w-6 h-6" />, color: 'text-green-400' },
  { name: 'Supabase', level: 'Gatekeeper', icon: <BookOpen className="w-6 h-6" />, color: 'text-emerald-400' },
];

export default function About() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
        { name: "Work", href: "/projects" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "#contact" },
    ];
  return (
    <div className="min-h-screen bg-[#080000] text-white selection:bg-red-500/30 overflow-x-hidden">
      {/* Top Bar / Navigation */}
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
          
          {/* Desktop Nav */}
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

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-amber-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
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
        </AnimatePresence>
      </nav>

      <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-32 sm:pt-40">
        <header className="mb-20 relative text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/5 text-amber-500 text-[10px] font-black mb-6 tracking-[0.2em] uppercase">
              <Sparkles className="w-3 h-3" />
              The Chronicles
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
              The Visionary <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-amber-400 to-red-600 bg-[length:200%_auto] animate-gradient">
                Behind The Craft.
              </span>
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl leading-relaxed mx-auto md:mx-0">
              With over 5 years of experience in digital architecture, I specialize in creating high-stakes applications that don't just function—they inspire. My philosophy is simple: if it's worth building, it's worth making legendary.
            </p>
          </motion.div>
          
          {/* Background Glows */}
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[150px] -z-10 animate-pulse" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600/10 rounded-full blur-[120px] -z-10" />
        </header>

        <section id="skills">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {skills.map((skill, index) => (
                <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ y: -12 }}
                    className="group relative"
                >
                    <div className="absolute -inset-[2px] rounded-[2rem] bg-gradient-to-r from-red-800 via-red-600 to-amber-500 opacity-10 group-hover:opacity-100 transition-all duration-700 blur-[1px] group-hover:blur-[8px]" />
                    
                    <div className="relative h-full bg-[#0F0000] border border-red-900/20 rounded-[2rem] overflow-hidden p-8 sm:p-10 flex flex-col shadow-2xl">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-700 to-amber-600 flex items-center justify-center mb-8 shadow-xl shadow-red-950/50 group-hover:scale-110 transition-transform duration-500">
                        {skill.icon}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black mb-4 group-hover:text-amber-400 transition-colors duration-300">
                        {skill.name}
                    </h3>
                    
                    <div className="flex items-center gap-2">
                        <span className="text-xs uppercase tracking-widest text-amber-400 font-mono">Rank:</span>
                        <span className="text-sm text-gray-300">{skill.level}</span>
                    </div>

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
            <a href="#" className="hover:text-red-500 transition-colors">Twitter</a>
            <a href="#" className="hover:text-red-500 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-red-500 transition-colors">Dribbble</a>
          </div>
          <p className="text-gray-700 text-[10px] mt-16 font-bold tracking-widest uppercase">
            © {new Date().getFullYear()} LEGACY STUDIO. ALL RIGHTS RESERVED.
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
