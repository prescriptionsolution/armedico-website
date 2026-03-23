"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  Target, Eye, Award, TrendingUp, CheckCircle2, XCircle, 
  ArrowRight, ArrowDown, BrainCircuit, Stethoscope, Video, 
  BarChart3, ShieldCheck, Globe2, Smartphone, Network, GraduationCap 
} from "lucide-react";

// ==================== 1. TYPE DEFINITIONS ====================

interface MemberPhotoProps {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
}

// ==================== 2. CUSTOM IMAGE COMPONENT ====================
// Attempts to load 'src'. If it fails, switches to 'fallback'.
const MemberPhoto = ({ src, fallback, alt, className }: MemberPhotoProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image 
      src={imgSrc} 
      alt={alt}
      fill
      className={className}
      sizes="(max-width: 768px) 100vw, 200px"
      onError={() => {
        setImgSrc(fallback);
      }}
    />
  );
};

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
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

// ==================== DATA CONFIGURATION ====================

// Note: Removed 'className="text-teal-500"' from icons here to allow hover effects in the component
const CORE_OBJECTIVES = [
  {
    title: "AI Prescription Engine",
    description: "Smart AI that suggests medications based on history, detecting drug interactions and dosage errors in real-time.",
    icon: <BrainCircuit size={32} />, 
    source_ref: "AI-Powered Diagnostics"
  },
  {
    title: "AR Medical Visualization",
    description: "Augmented Reality tools for surgeons and students to visualize complex anatomy and patient data in 3D space.",
    icon: <Eye size={32} />, 
    source_ref: "AR Immersive Tech"
  },
  {
    title: "Digital E-Prescriptions",
    description: "Paperless prescription management with secure digital signatures and direct pharmacy integration.",
    icon: <Stethoscope size={32} />, 
    source_ref: "Digital Rx Management"
  },
  {
    title: "VR Surgical Training",
    description: "Virtual Reality simulations allowing practitioners to practice procedures in a risk-free digital environment.",
    icon: <Globe2 size={32} />, 
    source_ref: "VR Simulation"
  },
  {
    title: "Predictive Health AI",
    description: "Machine learning models that analyze patient trends to predict potential health risks before they occur.",
    icon: <BarChart3 size={32} />, 
    source_ref: "AI Data Intelligence"
  },
  {
    title: "Smart Pharmacy Sync",
    description: "Automated network connecting clinics to pharmacies for instant medication availability checks and fulfillment.",
    icon: <Network size={32} />, 
    source_ref: "Interoperability"
  },
  {
    title: "Voice-to-Prescription",
    description: "Advanced Natural Language Processing (NLP) that converts doctor-patient dialogue into structured prescriptions.",
    icon: <Video size={32} />, 
    source_ref: "AI Voice Interface"
  },
  {
    title: "Bio-Metric Security",
    description: "Blockchain and AI-driven security layers to protect sensitive medical data and digital identity.",
    icon: <ShieldCheck size={32} />, 
    source_ref: "Data Security"
  },
  {
    title: "Mixed Reality Anatomy",
    description: "Educational platforms using MR to provide holographic training for medical professionals and students.",
    icon: <GraduationCap size={32} />, 
    source_ref: "Education & XR"
  }
];

const MANAGEMENT_BOARD = [
  {
    name: "Romharshan",
    role: "Founder",
    image: "/rh.png",
    bio: "Visionary leader focused on scaling AR/VR healthcare solutions and strategic tech partnerships."
  },
   {
    name: "Rashmi A Kanchagar",
    role: "Project Manager",
    image: "/Rashmi A Kanchagar.jpg", 
    bio: "Managing the development lifecycle of AI-driven prescription modules and cross-platform integration."
  },
  {
    name: "Dr. Naveen",
    role: "Clinical AI Advisor",
    image: "/Naveen.jpeg", 
    bio: "Ensuring AI algorithms meet strict clinical standards and medical safety protocols for prescriptions."
  },
  {
  name: "Ashwini Singh",
  role: "Backend Developer",
  image: "/Ashwini.png",
  bio: "Developing robust backend architecture that manage data and ensure smooth performance of the platform."
},
 {
    name: "Jitendra Gaur ",
    role: "Infrastructure Head",
    image: "/Jitendra Gaur.jpeg", 
    bio: "Optimizing cloud systems to support low-latency VR streaming and massive AI data processing."
  },
  {
    name: "Chaitali Karale",
    role: "AI Data Analyst",
    image: "/Chaitali.png", 
    bio: "Training machine learning models to improve the accuracy of digital diagnosis and predictive analytics."
  },
  {
    name: "Sakshi Singh",
    role: "Immersive UI Designer",
    image: "/Sakshi Singh.jpg", 
    bio: "Designing 3D user interfaces for AR glasses and VR headsets to simplify complex medical workflows."
  },
  {
    name: "Chaitanya Karale",
    role: "Lead XR Developer",
    image: "/Chaitnya karale.jpg",
    bio: "Specializing in building high-performance AR and VR interfaces for next-gen medical visualization."
  },
  {
    name: "Arjun Mehra",
    role: "Cybersecurity Lead",
    image: "/Arjun Mehra.jpg",
    bio: "Implementing AI-based threat detection to protect the digital prescription ecosystem from breaches."
  },
  {
    name: "Priya Das",
    role: "Software QA Engineer",
    image: "/Priya Das.jpg",
    bio: "Conducting rigorous testing on AR/VR modules to ensure glitch-free performance in surgical settings."
  },
  {
    name: "Karan Malhotra",
    role: "Backend Architect",
    image: "/Karan Malhotra.jpg",
    bio: "Developing the secure, high-speed API network that powers instant digital prescription transfers."
  },
  {
    name: "Sneha Reddy",
    role: "Product Strategist",
    image: "/Sneha Reddy.jpg",
    bio: "Aligning AR Medico's technology roadmap with the evolving needs of the global digital health market."
  }
];

const ADVISORY_BOARD = [
  {
    name: "Dr. Shashikant P Chaudhary",
    role: "Professor & HOD Dermatology",
    image: "/Dr. Shashikant P Chaudhary.jpg",
    bio: "Advising on the use of AI for skin analysis and digital dermatological prescriptions."
  },
  {
    name: "Dr. Shashidhar Shreeniwas",
    role: "Clinical Director | Nephrology",
    image: "/Dr. Shashidhar Shreeniwas.jpg",
    bio: "Guiding the integration of AR tools in complex renal and transplant surgical training."
  },
  {
    name: "Dr. Srinjeeta Garg",
    role: "Consultant Head Neck Oncology",
    image: "/Dr. Srinjeeta Garg.jpg",
    bio: "Strategic advisor for VR-based cancer diagnostic and educational visualization modules."
  },
  {
    name: "Dr. Shashank Shourabh",
    role: "MBBS, DNB General Surgery",
    image: "/Dr. Shashank Shourabh.jpg",
    bio: "Evaluating the practical surgical application of AR Medico’s immersive technology suite."
  }
];

// ==================== COMPONENT ====================

export default function About() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/herobg.jpg" 
            alt="AI & AR Medico Lab" 
            fill 
            className="object-cover scale-105" 
            priority 
          />
          <div className="absolute inset-0 bg-slate-900/90" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto -mt-10">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={containerVariants}
          >
            <motion.span variants={itemVariants} className="inline-block py-1 px-4 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-sm font-bold tracking-widest mb-6">
              THE FUTURE OF MEDICINE
            </motion.span>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI-Driven Care. <br className="hidden md:block" />
              <span className="text-teal-400">AR-Enhanced Precision.</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

     {/* ==================== STATS SECTION ==================== */}
      <section className="relative z-20 -mt-20 mx-4 md:mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100 text-center"
        >
          {[
            { label: "AI Accuracy", value: "98.5%" },
            { label: "VR Latency", value: "<15ms" },
            { label: "Digital Rxs", value: "1M+" },
            { label: "Data Security", value: "AES-256" },
          ].map((stat, idx) => (
            <div key={idx} className="p-2">
              <h3 className="text-3xl md:text-4xl font-extrabold text-teal-600 mb-2">{stat.value}</h3>
              <p className="text-slate-500 text-xs md:text-sm font-bold uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ==================== WHO WE ARE ==================== */}
      <section className="pt-24 pb-12 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <Image 
                src="/aboutus.png" 
                alt="AR Surgeon at Work" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-teal-900/20 group-hover:bg-teal-900/10 transition-colors duration-500"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block z-10">
              <div className="flex items-center gap-4">
                <div className="bg-teal-100 p-3 rounded-full text-teal-600">
                  <Award size={32} />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-lg">Next-Gen Tech</p>
                  <p className="text-slate-500 text-sm">Certified AI/VR Modules</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="space-y-3">
              <span className="text-teal-600 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                <span className="w-8 h-0.5 bg-teal-600"></span> Leading Innovation
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                Transforming Medicine with <span className="text-teal-600">AI & Immersive Reality</span>
              </h2>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              At AR Medico, we believe the future of healthcare is intelligent and immersive. We aren't just building software; we are building an ecosystem where Artificial Intelligence assists in every diagnosis and Augmented Reality guides every procedure.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our core mission is to empower medical professionals with a digital prescription engine that thinks with them and AR/VR tools that let them see beyond the surface. We are bridge-builders between high-tech labs and real-world clinics.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                "AI-optimized clinical decision support for Rxs.",
                "Immersive VR/AR environments for surgical precision.",
                "Secure, paperless prescription infrastructure."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-800 font-medium">
                  <CheckCircle2 className="text-teal-500 flex-shrink-0 mt-1" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ==================== CORE CAPABILITIES ==================== */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-teal-600 font-bold uppercase tracking-widest text-sm">Our Ecosystem</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">AI & XR Capabilities</h2>
                    <p className="text-slate-500 text-lg">
                    We specialize in high-impact medical technologies designed for the next generation of hospitals.
                    </p>
                </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {CORE_OBJECTIVES.map((obj, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-teal-300 shadow-sm hover:shadow-xl transition-all duration-300 group"
                    >
                        {/* Icon Container Update:
                           - Default: bg-teal-50, text-teal-500 (Green Icon on Light Green BG)
                           - Hover: group-hover:bg-teal-500, group-hover:text-white (White Icon on Green BG)
                        */}
                        <div className="mb-6 p-4 rounded-2xl w-fit bg-teal-50 text-teal-500 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                             {obj.icon}
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{obj.title}</h3>
                        <p className="text-slate-600 leading-relaxed mb-4">{obj.description}</p>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wide border-t border-slate-100 pt-4">
                            Module: {obj.source_ref}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* ==================== ADVISORY BOARD ==================== */}
      <section className="pt-24 pb-12 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Strategic Insight</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">Medical Advisory</h2>
                <p className="text-slate-500 text-lg">
                Renowned medical experts ensuring our AI and AR tools align with clinical reality.
                </p>
            </motion.div>
        </div>

        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
            {ADVISORY_BOARD.map((member, idx) => (
            <motion.div 
                key={idx} 
                variants={itemVariants}
                className="group relative bg-white/50 rounded-3xl p-8 text-center border border-slate-200 hover:bg-white hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
                <div className="relative w-40 h-40 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full border-4 border-slate-200 group-hover:border-blue-500 transition-colors duration-300 transform group-hover:scale-105"></div>
                    <div className="w-full h-full rounded-full overflow-hidden relative shadow-md bg-slate-200">
                        {/* Using Custom MemberPhoto with Fallback */}
                        <MemberPhoto 
                            src={member.image} 
                            fallback="/doctorplaceholder.png" 
                            alt={member.name}
                            className="object-cover"
                        />
                    </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                <p className="text-blue-500 font-bold uppercase tracking-wide text-xs mt-2 mb-4">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
            ))}
        </motion.div>
      </section>

      {/* ==================== MANAGEMENT BOARD ==================== */}
      <section className="pb-24 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 mt-12 border-t border-slate-200 pt-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="text-teal-600 font-bold uppercase tracking-widest text-sm">Tech Leadership</span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">Innovation Team</h2>
                <p className="text-slate-500 text-lg">
                The developers and visionaries building the next frontier of AR/VR medicine.
                </p>
            </motion.div>
        </div>

        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10"
        >
            {MANAGEMENT_BOARD.map((member, idx) => (
            <motion.div 
                key={idx} 
                variants={itemVariants}
                className="group relative bg-white rounded-3xl p-6 text-center border border-slate-200 hover:border-teal-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center"
            >
                <div className="relative w-40 h-40 md:w-44 md:h-44 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full border-4 border-teal-500/20 group-hover:border-teal-500 transition-colors duration-300 transform group-hover:scale-105 z-10"></div>
                    <div className="w-full h-full rounded-full overflow-hidden relative shadow-lg bg-slate-100">
                        {/* Using Custom MemberPhoto with Fallback */}
                        <MemberPhoto 
                            src={member.image} 
                            fallback="/teamplaceholder.jpeg"
                            alt={member.name}
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">{member.name}</h3>
                <p className="text-teal-500 font-bold uppercase tracking-wide text-[10px] mt-2 mb-4">{member.role}</p>
                <p className="text-slate-500 text-xs leading-relaxed max-w-[220px]">{member.bio}</p>
            </motion.div>
            ))}
        </motion.div>
      </section>

      {/* ==================== WHY WE STARTED ==================== */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 font-bold uppercase tracking-widest text-sm">The Evolution</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">Why AI & AR?</h2>
            <p className="text-slate-500 mt-4 text-lg">Overcoming the limitations of analog healthcare through deep technology.</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-red-50 p-8 rounded-3xl border border-red-100 w-full md:w-1/2 lg:w-[45%] shadow-sm hover:shadow-md transition-all"
            >
               <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
                 <XCircle className="text-red-500" /> Static Medicine
               </h3>
               <ul className="space-y-4">
                 <li className="flex gap-4 text-red-800/80">
                   <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0" />
                   Manual prescription errors and drug interaction risks.
                 </li>
                 <li className="flex gap-4 text-red-800/80">
                   <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0" />
                   Lack of 3D anatomical visualization during surgery.
                 </li>
                 <li className="flex gap-4 text-red-800/80">
                   <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0" />
                   Reactive care instead of AI-based predictive analytics.
                 </li>
               </ul>
            </motion.div>

            <div className="flex justify-center text-slate-300">
              <ArrowRight size={40} className="hidden md:block" />
              <ArrowDown size={30} className="block md:hidden" />
            </div>

            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-teal-50 p-8 rounded-3xl border border-teal-100 w-full md:w-1/2 lg:w-[45%] shadow-lg hover:shadow-xl transition-all"
            >
               <h3 className="text-2xl font-bold text-teal-900 mb-6 flex items-center gap-3">
                 <CheckCircle2 className="text-teal-600" /> The Intelligent Way
               </h3>
               <ul className="space-y-4">
                 <li className="flex gap-4 text-teal-900/80">
                   <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 shrink-0" />
                   AI-validated prescriptions for maximum patient safety.
                 </li>
                 <li className="flex gap-4 text-teal-900/80">
                   <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 shrink-0" />
                   Real-time AR overlays for intraoperative guidance.
                 </li>
                 <li className="flex gap-4 text-teal-900/80">
                   <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 shrink-0" />
                   Predictive models that save lives through early detection.
                 </li>
               </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== VISION & MISSION ==================== */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 -skew-x-12 z-0 opacity-50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10"
          >
            <motion.div variants={itemVariants} className="group p-10 bg-white rounded-3xl border border-slate-200 hover:border-teal-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">The VR Vision</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To bridge the gap between human expertise and machine intelligence, creating a healthcare environment where every surgeon has AR sight and every doctor has AI insight.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="group p-10 bg-slate-900 rounded-3xl border border-slate-800 text-white shadow-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-slate-800 text-teal-400 rounded-2xl flex items-center justify-center shadow-inner mb-8 group-hover:bg-teal-500 group-hover:text-white transition-all">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Tech Mission</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-4 items-center group-hover:translate-x-2 transition-transform">
                  <span className="w-2 h-2 bg-teal-400 rounded-full"></span> 
                  Scale AR/VR diagnostic tools to every hospital.
                </li>
                <li className="flex gap-4 items-center group-hover:translate-x-2 transition-transform delay-75">
                  <span className="w-2 h-2 bg-teal-400 rounded-full"></span> 
                  Eliminate prescription errors via AI validation.
                </li>
                <li className="flex gap-4 items-center group-hover:translate-x-2 transition-transform delay-100">
                  <span className="w-2 h-2 bg-teal-400 rounded-full"></span> 
                  Pioneer secure bio-tech data standards.
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

     {/* ==================== CTA SECTION ==================== */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <Image src="/herobg.jpg" alt="bg" fill className="object-cover grayscale" />
         </div>
         
         <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Innovate Your Practice</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
               Step into the future of immersive healthcare. Let’s build the intelligent clinic, together.
            </p>
            
            <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-500 text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:bg-teal-400 transition-colors flex items-center gap-2 mx-auto"
              >
                 Partner With Us <TrendingUp size={22} />
              </motion.button>
            </Link>
         </div>
      </section>

    </main>
  );
}