import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Front-End Technologies",
      topics: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Introduction to IoT",
      topics: ["IoT Architecture", "Sensors & Communication Protocols (MQTT/HTTP)", "Cloud Integration", "Security Basics"]
    },
    {
      title: "Cyber Security Internship – Future Interns",
      topics: ["Web Application Security", "API Testing", "Threat Analysis"]
    },
    {
      title: "Data Analytics – IBM Cognos Analytics",
      topics: ["Data Visualization", "Dashboard Creation", "Reporting", "Business Intelligence"]
    }
  ];

  return (
    <section id="certificates" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold dark:text-white mb-4">Certifications</h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 bg-white dark:bg-slate-900 relative overflow-hidden group"
          >
            {/* Background design */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/10 transition-colors"></div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-500/20">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold dark:text-white uppercase tracking-tight">{cert.title}</h3>
            </div>
            
            <div className="space-y-3">
              <p className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">What I Learned</p>
              <div className="grid grid-cols-1 gap-3">
                {cert.topics.map((topic, tIdx) => (
                  <div key={tIdx} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t dark:border-slate-800">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-tighter">Certified Professional</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
