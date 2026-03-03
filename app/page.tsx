"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Sparkles, Code2, Rocket, Layers, Menu, X, ChevronRight, Wand2 } from "lucide-react";
import Link from 'next/link';


export default function Home() {
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

      <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-32 sm:pt-40 flex items-center justify-center text-center min-h-screen">
        <header className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/5 text-amber-500 text-[10px] font-black mb-6 tracking-[0.2em] uppercase">
              <Sparkles className="w-3 h-3" />
              Master of the Digital Arts
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
              The Archmage <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-amber-400 to-red-600 bg-[length:200%_auto] animate-gradient">
                of Code.
              </span>
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl leading-relaxed mx-auto">
              Weaving spells in TypeScript and conjuring ethereal interfaces.
              Welcome to my sanctum of digital sorcery.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/projects">
              <button className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-red-700 to-amber-600 text-white hover:shadow-lg hover:shadow-red-600/20 transition-all font-bold text-xs tracking-widest uppercase flex items-center gap-2">
                <Wand2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                View My Spells
              </button>
            </Link>

            <Link href="/about">
              <button className="px-8 py-4 rounded-xl border border-red-900/20 hover:border-red-700 transition-all hover:bg-red-950/20 text-amber-500">
                Read the Chronicles
              </button>
            </Link>
          </motion.div>

          {/* Background Glows */}
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[150px] -z-10 animate-pulse" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600/10 rounded-full blur-[120px] -z-10" />
        </header>
      </main>

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