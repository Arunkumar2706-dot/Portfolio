import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ShieldAlert, Cpu, Globe, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Web",
      icon: <Code2 className="text-blue-600" />,
      skills: ["Python", "Java", "HTML", "CSS", "JavaScript", "PHP"]
    },
    {
      title: "Databases & OS",
      icon: <Globe className="text-orange-600" />,
      skills: ["SQL", "Server-Side Tech", "Linux (Kali, Ubuntu)", "Windows"]
    },
    {
      title: "Cybersecurity",
      icon: <ShieldAlert className="text-emerald-600" />,
      skills: ["VAPT", "Reconnaissance", "Network Scanning", "Web Security Assessment", "Phishing Detection", "API Security Analysis", "OWASP Top 10", "CVE", "CVSS"]
    },
    {
      title: "Core Concepts",
      icon: <Server className="text-rose-600" />,
      skills: ["Cryptography", "TCP/IP", "HTTP/HTTPS", "DNS", "Problem Solving", "Debugging"]
    },
    {
      title: "Tools & Technologies",
      icon: <Cpu className="text-purple-600" />,
      skills: ["Nmap", "OWASP ZAP", "Burp Suite", "Metasploit", "Nikto", "Nuclei", "Postman", "Wireshark"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section-padding bg-white dark:bg-slate-900">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold dark:text-white mb-4">Technical Expertise</h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="p-8 glass-card group hover:translate-y-[-8px] transition-all duration-300 hover:border-blue-500/50"
          >
            <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
              {React.cloneElement(category.icon, { size: 32 })}
            </div>
            <h3 className="text-2xl font-bold dark:text-white mb-6 uppercase tracking-wider text-sm">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-medium border border-transparent hover:border-blue-500/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
