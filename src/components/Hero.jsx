import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileDown, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-100/30 dark:bg-blue-900/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-200/20 dark:bg-blue-800/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-6">
            <ShieldCheck size={16} />
            Final-year CSE (Cyber Security) Student
          </div>
          <h1 className="text-5xl md:text-7xl font-bold dark:text-white leading-tight mb-6">
            Hi, I'm <span className="text-blue-600">ARUN KUMAR M</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-xl">
            Specializing in Cyber Security with hands-on experience in VAPT, Network Reconnaissance, and Web Application Security Assessment.
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-500 mb-10 italic">
            "Identifying, validating, and reporting security vulnerabilities."
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary flex items-center gap-2">
              View Projects
            </button>
            <button className="btn-secondary flex items-center gap-2 dark:text-white">
              <FileDown size={20} />
              Download Resume
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <a href="https://github.com/Arunkumar2706-dot" className="p-3 bg-white dark:bg-slate-900 rounded-full shadow-sm hover:translate-y-[-4px] transition-all dark:text-white">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="p-3 bg-white dark:bg-slate-900 rounded-full shadow-sm hover:translate-y-[-4px] transition-all dark:text-white">
              <Linkedin size={24} />
            </a>
            <a href="mailto:marun4201@gmail.com" className="p-3 bg-white dark:bg-slate-900 rounded-full shadow-sm hover:translate-y-[-4px] transition-all dark:text-white">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative hidden md:block"
        >
          <div className="relative w-[500px] h-[500px] mx-auto">
            {/* Cybersecurity inspired graphic */}
            <div className="absolute inset-0 border-4 border-dashed border-blue-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-10 border-2 border-slate-300 dark:border-slate-800 rounded-full"></div>
            <div className="absolute inset-20 bg-blue-600/10 dark:bg-blue-600/5 rounded-full flex items-center justify-center">
              <ShieldCheck className="w-48 h-48 text-blue-600 animate-pulse" />
            </div>
            
            {/* Tags around the center */}
            <div className="absolute top-0 right-1/4 p-4 glass-card shadow-lg animate-bounce">
              <span className="text-blue-600 font-bold">Kali Linux</span>
            </div>
            <div className="absolute bottom-1/4 left-0 p-4 glass-card shadow-lg">
              <span className="text-emerald-600 font-bold">Python</span>
            </div>
            <div className="absolute top-1/2 -right-8 p-4 glass-card shadow-lg">
              <span className="text-orange-600 font-bold">Ethical Hacking</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
