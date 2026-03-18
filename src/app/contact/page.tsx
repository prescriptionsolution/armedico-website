"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/herobg.jpg" 
            alt="Contact Background" 
            fill 
            className="object-cover scale-105" 
            priority 
          />
          <div className="absolute inset-0 bg-slate-900/90" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto -mt-10">
          <motion.div 
             initial="hidden" 
             animate="visible" 
             variants={containerVariants}
          >
            <motion.span variants={itemVariants} className="inline-block py-1 px-4 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-bold tracking-widest mb-6">
              GET IN TOUCH
            </motion.span>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to <span className="text-teal-400">Digitalize</span> Your <br className="hidden md:block" /> Healthcare Facility?
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Whether you need a demo for your hospital or help with the prescription software, our team is here to assist you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ==================== CONTACT GRID ==================== */}
      <section className="pt-24 pb-12 container mx-auto px-6 relative z-20 -mt-24">
        <div className="grid lg:grid-cols-3 gap-8">
            
            {/* LEFT SIDE: Contact Information Card */}
            <motion.div 
                className="lg:col-span-1"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div variants={itemVariants} className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 h-full flex flex-col">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Info</h3>
                    <div className="space-y-8">
                        {/* Phone */}
                        <div className="flex items-start gap-4 group">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">Phone</h4>
                                <p className="text-slate-600 mb-1">+91 92340 41819</p>
                                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Mon-Fri 9am to 6pm</p>
                            </div>
                        </div>
                        
                        {/* Email */}
                        <div className="flex items-start gap-4 group">
                            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">Email</h4>
                                <p className="text-slate-600 mb-1">armedico.official@gmail.com</p>
                                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Online 24/7 Support</p>
                            </div>
                        </div>

                        {/* Address (UPDATED) */}
                        <div className="flex items-start gap-4 group">
                            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">Headquarters</h4>
                                <p className="text-slate-600">
                                  Laxmi Park, Kankiya<br />
                                  Mira Road(E) Mumbai-401107
                                </p>
                                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mt-1">Main Tech Hub</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* RIGHT SIDE: Interactive Form */}
            <motion.div 
                className="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="mb-10 border-b border-slate-100 pb-6">
                    <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                        Send us a Message <MessageSquare className="text-teal-500 hidden md:block" size={28}/>
                    </h2>
                    <p className="text-slate-500 mt-2 text-lg">Fill out the form below and our team will get back to you within 24 hours.</p>
                </div>

                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wide">First Name</label>
                            <input 
                                type="text" 
                                className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-teal-500 focus:bg-white focus:ring-0 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400 placeholder:font-normal" 
                                placeholder="e.g. Amit" 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wide">Last Name</label>
                            <input 
                                type="text" 
                                className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-teal-500 focus:bg-white focus:ring-0 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400 placeholder:font-normal" 
                                placeholder="e.g. Kumar" 
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wide">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input 
                                type="email" 
                                className="w-full pl-12 pr-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-teal-500 focus:bg-white focus:ring-0 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400 placeholder:font-normal" 
                                placeholder="name@example.com" 
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wide">Project Details</label>
                        <textarea 
                            rows={5} 
                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-teal-500 focus:bg-white focus:ring-0 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400 placeholder:font-normal resize-none" 
                            placeholder="Tell us about your requirements (e.g., I need software for my Clinic)..."
                        ></textarea>
                    </div>

                    <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit" 
                        className="w-full py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl shadow-lg shadow-teal-500/30 transition-all flex items-center justify-center gap-2 text-lg"
                    >
                        Send Message <Send size={20} />
                    </motion.button>
                </form>
            </motion.div>
        </div>
      </section>

      {/* ==================== GOOGLE MAP SECTION (NEW) ==================== */}
      <section className="container mx-auto px-6 mb-24">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[450px] bg-slate-200 rounded-3xl overflow-hidden shadow-xl border border-slate-100"
        >
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30128.036830532463!2d72.876537!3d19.282166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0458cf7298b%3A0x468ed839e9df2b21!2sMira%20Road%20East%2C%20Mira%20Bhayandar%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1769934550914!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
            ></iframe>
        </motion.div>
      </section>

    </main>
  );
}