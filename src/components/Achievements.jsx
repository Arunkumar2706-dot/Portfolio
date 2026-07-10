import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, ChevronRight } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Event Coordinator – TECHDAY'26",
      organization: "TECHDAY'26",
      description: "Managed and coordinated 120+ participants across technical events.",
      date: "2026"
    },
    {
      title: "Ideathon Participant",
      organization: "Thiagarajar College of Engineering, Madurai",
      description: "Presented an innovative product concept.",
      date: "2024"
    },
    {
      title: "IEEE Xplore Training Webinar",
      organization: "SRM Madurai",
      description: "Gained exposure to industry-standard research methodologies.",
      date: "2024"
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-white dark:bg-slate-900">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold dark:text-white mb-4">Achievements</h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto grid gap-6">
        {achievements.map((ach, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 glass-card flex items-start gap-6 hover:border-blue-500/50 transition-all group"
          >
            <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <Trophy size={28} />
            </div>
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold dark:text-white">{ach.title}</h3>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full uppercase">
                  {ach.date}
                </span>
              </div>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{ach.organization}</p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{ach.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
