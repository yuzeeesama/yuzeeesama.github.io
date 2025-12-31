import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react'; // Importing icons
import { PROFILE, SOCIALS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 group-hover:opacity-60 blur transition duration-500"></div>
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
            {/* Fallback to a placeholder if the local image fails, but default to user path */}
          <img 
            src={PROFILE.avatar} 
            alt={PROFILE.name}
            onError={(e) => {
                // Fallback if local image not found
                e.currentTarget.src = "https://picsum.photos/300/300?grayscale";
            }}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-6 text-4xl font-bold text-slate-800 tracking-tight"
      >
        {PROFILE.name}
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-4 text-lg text-slate-500 max-w-lg font-light leading-relaxed"
      >
        {PROFILE.bio}
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-8 flex gap-6"
      >
        {SOCIALS.map((social) => (
          <a 
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 bg-white text-slate-600 rounded-full shadow-sm border border-slate-200 hover:border-blue-400 hover:text-blue-500 hover:shadow-md transition-all duration-300 group"
          >
            {social.platform === 'GitHub' && <Github size={20} className="group-hover:scale-110 transition-transform" />}
            <span className="font-medium">{social.platform}</span>
          </a>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;