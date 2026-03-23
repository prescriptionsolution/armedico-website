"use client";

import React from "react";
// Added 'Variants' import to fix TypeScript errors
import { motion, Variants } from "framer-motion";
// Fixed typo: 'Microsope' to 'Microscope'
import { Activity, Eye, Shield, Cpu, ChevronRight, Stethoscope, Microscope, MonitorPlay } from "lucide-react";

export default function ARVRSurgeryPage() {
  // Animation Variants explicitly typed as 'Variants'
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/herobg.jpg"
            alt="AR VR Surgery Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-sm font-semibold mb-6 tracking-wider uppercase">
              The Future of Healthcare
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Precision Meets Reality in <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
                AR/VR Surgery
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Empowering surgeons with real-time 3D visualization, holographic overlays, and sub-millimeter precision. Experience the next evolution in minimal invasive and complex surgical procedures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2 group">
                Explore Technology
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-gray-400 hover:border-white text-white rounded-full font-semibold transition-all">
                Request a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- ABOUT TECHNOLOGY SECTION --- */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Seeing Beyond the Surface
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Augmented and Virtual Reality are transforming the operating room. By converting standard 2D MRI and CT scans into interactive 3D holograms, surgeons can now "see through" the patient's anatomy before making a single incision.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Enhanced spatial understanding of complex anatomies.",
                "Real-time vital signs and imaging overlays.",
                "Reduced cognitive load on the surgical team.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <Activity className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl group"
          >
            <img
              src="/herobg.jpg"
              alt="Surgeon using AR"
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-8">
              <h3 className="text-white text-2xl font-bold">Holographic Navigation</h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CORE FEATURES GRID --- */}
      <section className="py-24 bg-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Revolutionizing the O.R.</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our comprehensive suite of immersive tools brings unprecedented safety and efficiency to modern medicine.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Feature 1 */}
            <motion.div variants={fadeInUp} className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">X-Ray Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Overlay internal patient structures directly onto their body in real-time, allowing for pinpoint accuracy during operations.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={fadeInUp} className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform">
                <Cpu className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Surgical Rehearsal</h3>
              <p className="text-gray-600 leading-relaxed">
                Surgeons can practice complex, high-risk procedures in a risk-free VR environment using the patient's exact anatomical digital twin.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={fadeInUp} className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enhanced Safety</h3>
              <p className="text-gray-600 leading-relaxed">
                By visualizing critical vessels and nerves beforehand, the risk of complications is drastically reduced, ensuring better patient outcomes.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- SHOWCASE/USE CASES SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">Clinical Applications</h2>
        </motion.div>

        <div className="flex flex-col space-y-20">
          {/* Case 1 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <MonitorPlay className="text-blue-500 w-8 h-8" />
                Neurosurgery
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Navigating the complex pathways of the brain requires absolute precision. AR provides an immersive 3D map, allowing neurosurgeons to identify tumor margins and avoid critical functional areas with confidence.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 overflow-hidden rounded-2xl shadow-lg">
              <img src="/herobg.jpg" alt="Neurosurgery VR" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

          {/* Case 2 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg">
              <img src="/herobg.jpg" alt="Orthopedic VR" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Stethoscope className="text-teal-500 w-8 h-8" />
                Orthopedics & Spine
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                From pedicle screw placement to complex joint replacements, AR headsets project the patient's skeletal structure, turning the surgeon's field of view into an interactive GPS system for the human body.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <img src="/herobg.jpg" alt="CTA BG" className="w-full h-full object-cover blur-sm" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Step into the Future?</h2>
            <p className="text-xl text-gray-300 mb-10">
              Join leading medical institutions worldwide who are already enhancing their surgical precision with our AR/VR solutions.
            </p>
            <button className="px-10 py-4 bg-white text-gray-900 hover:bg-blue-50 hover:text-blue-600 rounded-full font-bold text-lg transition-colors shadow-xl">
              Partner With Us
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}