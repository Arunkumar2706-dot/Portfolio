import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Cybersecurity Analyst Intern",
      company: "Hebsec Technologies Pvt. Ltd.",
      period: "June 2026 – Present",
      description: "Conducted vulnerability assessments, network reconnaissance, web application security testing, and technical security reporting using industry-standard cybersecurity tools."
    },
    {
      title: "Cyber Security Intern",
      company: "Future Interns",
      period: "Apr 2026 – May 2026",
      description: "Conducted web application security assessments, vulnerability analysis, and phishing/email header analysis to identify threat vectors. Assessed API security flaws in authentication, authorization, and data exposure; performed passive scanning with Nmap and OWASP ZAP, and endpoint testing with Postman; prepared client-ready remediation reports."
    },
    {
      title: "Data Analytics Intern (Virtual)",
      company: "IBM",
      period: "Mar 2026 – Apr 2026",
      description: "Developed List/Crosstab reports and interactive dashboards (Bar, Line, Pie) in IBM Cognos Analytics to monitor KPIs and generate business insights."
    }
  ];

  return (
    <section id="experience" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold dark:text-white mb-4 flex items-center justify-center gap-3">
          <Briefcase className="text-blue-600" />
          Internship Experience
        </h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 glass-card border-2 hover:border-blue-500/30 transition-colors shadow-sm"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold dark:text-white">{exp.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">{exp.company}</p>
              </div>
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full whitespace-nowrap">
                <Calendar size={16} />
                {exp.period}
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
