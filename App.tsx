import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header / Hero Section */}
        <Hero />

        {/* Projects Section */}
        <main className="py-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-10 text-center"
          >
            <h2 className="text-2xl font-bold text-slate-800 inline-block relative">
              Projects
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full opacity-30"></span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </main>

        {/* Footer */}
        <Footer />
        
      </div>
    </div>
  );
};

export default App;