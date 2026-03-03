"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Sparkles, Code2, Rocket, Layers, Menu, X, ChevronRight } from "lucide-react";

export default function ProjectsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Royal E-commerce",
      description: "A premium full-stack shopping experience with secure payments and elegant design.",
      tags: ["Next.js", "Supabase", "Stripe", "Tailwind"],
      link: "#work",
      icon: <Rocket className="w-5 h-5 text-red-100" />,
      gradient: "from-red-800 via-red-600 to-amber-500"
    },
    {
      id: 2,
      title: "Crimson AI",
      description: "Advanced content generation powered by neural networks with a focus on creative writing.",
      tags: ["React", "OpenAI", "Node.js", "TypeScript"],
      link: "#work",
      icon: <Sparkles className="w-5 h-5 text-amber-100" />,
      gradient: "from-amber-600 via-red-500 to-red-700"
    },
    {
      id: 3,
      title: "Golden Dashboard",
      description: "High-performance analytics dashboard for tracking real-time financial metrics.",
      tags: ["Next.js", "PostgreSQL", "Prisma", "Real-time"],
      link: "#work",
      icon: <Layers className="w-5 h-5 text-red-100" />,
      gradient: "from-red-900 via-amber-600 to-amber-400"
    }
  ];

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-700 to-amber-600 flex items-center justify-center shadow-lg shadow-red-900/20">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-200 to-red-400">
              LEGACY
            </span>
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
              The Golden Standard
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
              Elegance in <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-amber-400 to-red-600 bg-[length:200%_auto] animate-gradient">
                Every Pixel.
              </span>
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl leading-relaxed mx-auto md:mx-0">
              Merging the intensity of crimson with the prestige of gold. 
              I build digital artifacts that command attention and deliver results.
            </p>
          </motion.div>
          
          {/* Background Glows */}
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[150px] -z-10 animate-pulse" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600/10 rounded-full blur-[120px] -z-10" />
        </header>

        <section id="work" className="scroll-mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -12 }}
                className="group relative"
              >
                {/* Magical Border Effect */}
                <div className={`absolute -inset-[2px] rounded-[2rem] bg-gradient-to-r ${project.gradient} opacity-10 group-hover:opacity-100 transition-all duration-700 blur-[1px] group-hover:blur-[8px]`} />
                
                <div className="relative h-full bg-[#0F0000] border border-red-900/20 rounded-[2rem] overflow-hidden p-8 sm:p-10 flex flex-col shadow-2xl">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-8 shadow-xl shadow-red-950/50 group-hover:scale-110 transition-transform duration-500`}>
                    {project.icon}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black mb-4 group-hover:text-amber-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-8 text-sm sm:text-base leading-relaxed flex-grow font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2.5 mb-10">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1.5 bg-red-950/30 border border-red-900/30 text-amber-200/70 text-[9px] font-black rounded-lg uppercase tracking-widest"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-red-900/10">
                    <a 
                      href={project.link}
                      className="flex items-center gap-2 text-xs font-black text-white hover:text-amber-400 transition-colors uppercase tracking-widest"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Preview
                    </a>
                    <a 
                      href="#"
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

        <section id="about" className="mt-40 py-20 border-t border-red-900/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-black tracking-tighter">The Visionary Behind <br /><span className="text-red-600">The Craft.</span></h2>
              <p className="text-gray-400 leading-relaxed">
                With over 5 years of experience in digital architecture, I specialize in creating high-stakes applications that don't just function—they inspire. My philosophy is simple: if it's worth building, it's worth making legendary.
              </p>
              <div className="flex gap-4">
                <div className="p-4 rounded-2xl bg-red-950/20 border border-red-900/20">
                  <div className="text-2xl font-black text-amber-500">50+</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500">Projects Done</div>
                </div>
                <div className="p-4 rounded-2xl bg-red-950/20 border border-red-900/20">
                  <div className="text-2xl font-black text-amber-500">12</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500">Awards Won</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border-2 border-amber-500/20">
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
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
