import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Layers, Cpu, ShieldCheck } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "ParkLink",
      subtitle: "Smart Parking & EV Slot Management Platform",
      tech: ["React.js", "Node.js", "Google Maps API", "Firebase", "IoT"],
      features: [
        "Built a real-time smart parking platform for car/bike parking and EV charging discovery with live slot availability, OTP/Google authentication, and role-based dashboards.",
        "Prevented double booking using MongoDB atomic transactions with cron-based auto slot recovery; added QR-based booking verification, WhatsApp booking bot, surge prediction, split payments, and CCTV monitoring."
      ],
      icon: <Database className="text-blue-600" />,
      color: "blue"
    },
    {
      title: "BlockSecure",
      subtitle: "AI & Blockchain Fake Profile Detection",
      tech: ["Python", "Machine Learning", "Ethereum", "Solidity", "FastAPI"],
      features: [
        "ML model to classify social media profiles",
        "Blockchain-based tamper-proof evidence",
        "Secure digital investigation support",
        "Web3.py integration"
      ],
      icon: <Layers className="text-purple-600" />,
      color: "purple",
      ongoing: true
    }
  ];

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold dark:text-white mb-4">Featured Projects</h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card overflow-hidden group flex flex-col h-full bg-white dark:bg-slate-900 border-2 hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="p-8 flex-grow">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(project.icon, { size: 32 })}
                </div>
                {project.ongoing && (
                  <span className="px-3 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-full text-xs font-bold border border-amber-200 dark:border-amber-800 uppercase tracking-tighter">
                    Ongoing
                  </span>
                )}
              </div>
              
              <h3 className="text-2xl font-bold dark:text-white mb-2">{project.title}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-6">{project.subtitle}</p>
              
              <div className="mb-8">
                <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                      <ShieldCheck size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-t dark:border-slate-800 flex gap-4">
              <a href="#" className="flex-1 btn-primary text-center py-2 text-sm flex items-center justify-center gap-2">
                <Github size={16} /> Code
              </a>
              <a href="#" className="flex-1 btn-secondary text-center py-2 text-sm flex items-center justify-center gap-2 dark:text-white">
                <ExternalLink size={16} /> Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
