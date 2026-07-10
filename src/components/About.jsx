import React from 'react';
import { motion } from 'framer-motion';
import { User, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900 transition-colors">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="aspect-[4/5] bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden relative">
            {/* Placeholder for real image */}
            <div className="absolute inset-0 flex items-center justify-center">
               <User size={120} className="text-slate-400 dark:text-slate-600" />
            </div>
            <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          {/* Decorative frame */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-blue-600 rounded-2xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold dark:text-white mb-8 flex items-center gap-3">
            <User className="text-blue-600" />
            About Me
          </h2>
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              Hi, I’m <span className="text-blue-600 font-semibold uppercase">Arun Kumar M</span>, a Final-year Computer Science Engineering student specializing in Cyber Security, with hands-on, multi-internship experience in VAPT, Network Reconnaissance, API Security Testing, Phishing Detection, and Web Application Security Assessment.
            </p>
            <p>
              I have a proven ability to identify, validate, and report security vulnerabilities using industry-standard tools, backed by strong foundations in secure system design, cryptography, and full-stack development. I have a track record across three internships spanning cybersecurity analysis and data analytics, translating technical findings into clear, client-ready reports.
            </p>
            <p className="flex items-start gap-4 p-4 glass-card bg-blue-50/50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900">
              <span className="p-2 bg-blue-600 text-white rounded-lg"><Target size={20} /></span>
              <span>
                Seeking to apply a strong analytical mindset and growing security toolset to a challenging cybersecurity role.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
