'use client';

import { motion } from 'framer-motion';
import { Sparkles, Wand2, Scroll, Sword } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-6 z-50 flex gap-4 p-2 rounded-full magical-border px-6">
        <Link href="/" className="hover:text-purple-400 transition-colors flex items-center gap-2">
          <Sparkles className="w-4 h-4" /> Home
        </Link>
        <Link href="/about" className="hover:text-purple-400 transition-colors flex items-center gap-2">
          <Scroll className="w-4 h-4" /> Grimoire
        </Link>
        <Link href="/projects" className="hover:text-purple-400 transition-colors flex items-center gap-2">
          <Sword className="w-4 h-4" /> Armory
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-purple-400 font-mono tracking-widest mb-4 uppercase text-sm">
            Master of the Digital Arts
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 magical-text">
            The Archmage of Code
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Weaving spells in TypeScript and conjuring ethereal interfaces. 
            Welcome to my sanctum of digital sorcery.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/projects">
            <button className="group relative px-8 py-4 rounded-xl magical-border overflow-hidden transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2 font-bold">
                <Wand2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                View My Spells
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </Link>
          
          <Link href="/about">
            <button className="px-8 py-4 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all hover:bg-purple-500/5">
              Read the Chronicles
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
    </main>
  );
}
