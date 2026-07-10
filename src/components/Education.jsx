import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const timeline = [
    {
      year: "2023 – 2027",
      title: "B.E. (Hons.) Computer Science and Engineering – Cyber Security",
      institution: "SRM Madurai College for Engineering and Technology, Sivagangai, Tamil Nadu",
      details: "CGPA: 8.1",
      current: true
    }
  ];

  return (
    <section id="education" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold dark:text-white mb-4">Academic Journey</h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto relative px-4">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-800"></div>

        <div className="space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900 z-10"></div>

              {/* Content Card */}
              <div className="ml-12 md:ml-0 md:w-[45%]">
                <div className={`p-6 glass-card hover:border-blue-500/50 transition-colors shadow-none border-2 ${item.current ? 'border-blue-500/30' : ''}`}>
                  <div className="flex items-center gap-3 mb-4 text-blue-600 font-bold">
                    <Calendar size={18} />
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold dark:text-white mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-3">
                    <GraduationCap size={18} />
                    {item.institution}
                  </div>
                  {item.details && (
                    <div className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg inline-flex items-center gap-2 text-sm font-semibold">
                      <Award size={16} />
                      {item.details}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
