'use client';

import { motion } from 'framer-motion';
import { Sparkles, Scroll, Sword, BookOpen, Zap, Shield, Flame, Wind } from 'lucide-react';
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
  return (
    <main className="relative min-h-screen pt-32 pb-20 px-6">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex gap-4 p-2 rounded-full magical-border px-6">
        <Link href="/" className="hover:text-purple-400 transition-colors flex items-center gap-2">
          <Sparkles className="w-4 h-4" /> Home
        </Link>
        <Link href="/about" className="text-purple-400 flex items-center gap-2">
          <Scroll className="w-4 h-4" /> Grimoire
        </Link>
        <Link href="/projects" className="hover:text-purple-400 transition-colors flex items-center gap-2">
          <Sword className="w-4 h-4" /> Armory
        </Link>
      </nav>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 magical-text">The Chronicles</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Forged in the fires of the digital realm, I have spent years mastering the arcane arts of web development. 
            My journey began in the ancient libraries of documentation, and now I weave complex systems into existence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-8 rounded-2xl magical-border overflow-hidden"
            >
              <div className={`mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-purple-400 font-mono">Rank:</span>
                <span className="text-sm text-slate-300">{skill.level}</span>
              </div>
              
              {/* Magical hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-10 rounded-3xl magical-border text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">The Quest Continues</h2>
            <p className="text-slate-400 mb-8 max-w-3xl mx-auto">
              I am currently seeking new realms to conquer and legendary teams to join. 
              Whether it's building ethereal frontends or robust backend citadels, 
              I am ready to cast my next great spell.
            </p>
            <Link href="mailto:archmage@example.com">
              <button className="px-8 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 transition-colors font-bold">
                Send a Raven
              </button>
            </Link>
          </div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </motion.div>
      </div>
    </main>
  );
}
