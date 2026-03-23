"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { 
  Heart, Globe, Zap,  
  Users, ChevronRight, Clock, MapPin, ArrowRight,
  Stethoscope, Building2, GraduationCap, ClipboardList
} from "lucide-react";

// Animation Variants
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

export default function Careers() {
  const features = [
    {
      title: "Job Opportunities",
      desc: "Connect with top hospitals and clinics looking for Doctors, Nurses, and Receptionists.",
      icon: Stethoscope,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Medical Training",
      desc: "Upskill with hands-on training programs and specialized certifications for doctors.",
      icon: GraduationCap,
      color: "bg-teal-50 text-teal-600"
    },
    {
      title: "Verified Hospitals",
      desc: "We partner with trusted healthcare institutions to ensure a safe and professional work environment.",
      icon: Building2,
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "Easy Hiring",
      desc: "Hospitals can easily post requirements and find qualified staff within 24 hours.",
      icon: Users,
      color: "bg-purple-50 text-purple-600"
    }
  ];

  const opportunities = [
    {
      role: "Junior Resident (MBBS)",
      category: "Doctor Job",
      hospital: "City Care Hospital",
      loc: "Patna, Bihar",
      tags: ["Emergency", "ICU Duty", "Night Shift"],
      isTraining: false
    },
    {
      role: "Advanced Cardiac Training",
      category: "Training Program",
      hospital: "AIIMS Partner Lab",
      loc: "Delhi / Hybrid",
      tags: ["Certification", "3 Months", "Practical"],
      isTraining: true
    },
    {
      role: "Hospital Receptionist",
      category: "Admin Staff",
      hospital: "Sunrise Poly Clinic",
      loc: "Ranchi, Jharkhand",
      tags: ["Patient Management", "Billing", "Full Time"],
      isTraining: false
    },
    {
      role: "Consultant Pediatrician",
      category: "Doctor Job",
      hospital: "LifeLine Medical Center",
      loc: "Remote / Tele-consult",
      tags: ["OPD", "Flexible Hours", "High Pay"],
      isTraining: false
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/herobg.jpg" 
            alt="Medical Careers Background" 
            fill 
            className="object-cover scale-105" 
            priority 
          />
          <div className="absolute inset-0 bg-slate-900/90 bg-gradient-to-b from-slate-900/80 to-slate-900" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto -mt-10">
          <motion.div 
             initial="hidden" 
             animate="visible" 
             variants={containerVariants}
          >
            
            {/* HEADLINE */}
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Connecting Healthcare <br className="hidden md:block" />
              <span className="text-teal-400">Talent with Opportunity.</span>
            </motion.h1>

            {/* FIXED TEXT: BOLD SPANS INSTEAD OF ASTERISKS */}
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Whether you are a <span className="font-bold text-white">Doctor looking for training</span>, 
              a <span className="font-bold text-white">Receptionist seeking a job</span>, 
              or a <span className="font-bold text-white">Hospital needing staff</span> — we bridge the gap.
            </motion.p>
            
            <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-teal-500/20">
                    Find a Job / Training
                </button>
                <button className="px-8 py-3 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-xl transition-all">
                    I am a Hospital (Hire Staff)
                </button>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ==================== FEATURES GRID ==================== */}
      <section className="py-24 container mx-auto px-6 relative z-20 -mt-20">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ==================== OPENINGS & TRAINING LIST ==================== */}
      <section className="py-24 bg-white relative border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <span className="text-teal-600 font-bold uppercase tracking-widest text-sm">Active Listings</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Jobs & Training Programs</h2>
                    <p className="text-slate-500 mt-2">Apply directly to hospitals or enroll in courses.</p>
                </div>
                <button className="text-teal-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    View All Listings <ArrowRight size={20} />
                </button>
            </div>

            <div className="space-y-4">
                {opportunities.map((job, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.01 }}
                        className={`group bg-slate-50 hover:bg-white border-l-4 ${job.isTraining ? 'border-l-amber-400' : 'border-l-teal-500'} border-y border-r border-slate-200 hover:border-slate-300 p-6 md:p-8 rounded-r-2xl rounded-l-md transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6`}
                    >
                        <div>
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">{job.role}</h3>
                                <span className={`text-xs font-bold px-2 py-1 rounded-md ${job.isTraining ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>
                                    {job.category}
                                </span>
                            </div>
                            <p className="text-slate-700 font-medium mb-3 flex items-center gap-2">
                                <Building2 size={16} className="text-slate-400"/> {job.hospital}
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
                                <span className="flex items-center gap-1"><MapPin size={14} /> {job.loc}</span>
                            </div>
                            <div className="flex gap-2">
                                {job.tags.map(tag => (
                                    <span key={tag} className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className="flex-shrink-0">
                            <button className={`w-full md:w-auto px-6 py-3 ${job.isTraining ? 'bg-amber-500 hover:bg-amber-600' : 'bg-slate-900 hover:bg-teal-600'} text-white font-bold rounded-xl transition-all shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2`}>
                                {job.isTraining ? 'Enroll Now' : 'Apply Now'} <ChevronRight size={18} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* ==================== FOR HOSPITALS (HIRING SECTION) ==================== */}
      <section className="py-24 container mx-auto px-6">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-3/5 p-12 lg:p-16 flex flex-col justify-center">
                <span className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-4">For Hospitals & Clinics</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Staff? Post a Job.</h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                    Are you a hospital administrator looking for <span className="font-bold text-white">specialist doctors, nursing staff, or receptionists</span>? 
                    Post your requirements on AR Medico and get connected with verified professionals instantly.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                       <ClipboardList size={20} /> Post Requirements
                    </button>
                    <button className="px-8 py-4 bg-transparent border border-slate-600 hover:bg-slate-800 text-white font-bold rounded-xl transition-all">
                       Contact Sales
                    </button>
                </div>
            </div>
            <div className="md:w-2/5 relative min-h-[300px] bg-slate-800">
                 {/* Placeholder for an image of a Hospital Building or Doctor shaking hands */}
                 {/* Removed opacity-50 and removed the text overlay div */}
                <Image src="/hero1.webp" alt="Hospital Partnership" fill className="object-cover" />
            </div>
        </div>
      </section>

    </main>
  );
}