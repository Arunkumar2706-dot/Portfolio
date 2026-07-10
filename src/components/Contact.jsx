import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Send, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white dark:bg-slate-900 transition-colors">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold dark:text-white mb-4">Get In Touch</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities and security challenges.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="glass-card p-10 bg-blue-600 text-white border-none relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group/item">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-blue-100 text-sm">Phone</p>
                  <p className="font-bold">+91 9342590906</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group/item">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-blue-100 text-sm">Email</p>
                  <p className="font-bold">marun4201@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group/item">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-blue-100 text-sm">Location</p>
                  <p className="font-bold">Tamil Nadu, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10 flex gap-4">
              <a href="https://github.com/Arunkumar2706-dot" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all font-bold">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all font-bold">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form className="glass-card p-10 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-tighter ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Arun Kumar"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-600 dark:text-white outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-tighter ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-600 dark:text-white outline-none transition-all"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-tighter ml-1">Subject</label>
              <input 
                type="text" 
                placeholder="Collaboration Inquiry"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-600 dark:text-white outline-none transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-tighter ml-1">Message</label>
              <textarea 
                rows="4"
                placeholder="How can I help you?"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-600 dark:text-white outline-none transition-all resize-none"
              ></textarea>
            </div>
            
            <button className="w-full btn-primary flex items-center justify-center gap-2">
              <Send size={18} /> Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
