import React from 'react';
import { Shield, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <Shield className="text-blue-600 w-8 h-8" />
            <span className="text-2xl font-bold dark:text-white tracking-tighter uppercase">Arun Kumar M</span>
          </div>
          
          <div className="flex gap-6">
            <a href="https://github.com/Arunkumar2706-dot" className="p-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm hover:translate-y-[-4px] transition-all dark:text-white">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" className="p-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm hover:translate-y-[-4px] transition-all dark:text-white">
              <Linkedin size={20} />
            </a>
            <a href="mailto:marun4201@gmail.com" className="p-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm hover:translate-y-[-4px] transition-all dark:text-white">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 dark:text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} ARUN KUMAR M. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="text-rose-500 fill-rose-500" /> & React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
