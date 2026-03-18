"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  Globe2, 
  Server, 
  ShieldCheck, 
  Languages, 
  Rocket, 
  Network, 
  CheckCircle2,
  Building2,
  ArrowRight
} from "lucide-react";

export default function GlobalSaaSExportPage() {
  // Animation Variants explicitly typed to prevent TS errors
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
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/herobg.jpg"
            alt="Global Healthcare SaaS Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-sm font-semibold mb-6 tracking-widest uppercase flex items-center justify-center gap-2 max-w-max mx-auto">
              <Globe2 className="w-4 h-4" /> Borderless HealthTech
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Exporting Healthcare SaaS <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                To The World
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Scale your medical software across continents. With built-in localization, multi-region compliance (GDPR, HIPAA), and enterprise-grade cloud infrastructure, we make global deployment seamless.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-semibold transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2 group">
                Deploy Globally
                <Rocket className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-slate-500 hover:border-white text-white rounded-full font-semibold transition-all flex items-center gap-2">
                Explore Infrastructure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- GLOBAL PRESENCE STATS --- */}
      <section className="py-12 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { label: "Active Countries", value: "40+" },
              { label: "Languages Supported", value: "25" },
              { label: "Global Uptime", value: "99.99%" },
              { label: "Data Centers", value: "12" },
            ].map((stat, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="p-4">
                <h4 className="text-4xl font-extrabold text-blue-600 mb-2">{stat.value}</h4>
                <p className="text-gray-500 font-bold uppercase tracking-wider text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- CORE EXPORT CAPABILITIES GRID --- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Engineered for International Scale</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Breaking geographical barriers requires more than just translating text. Our SaaS architecture is built from the ground up for global healthcare ecosystems.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Feature 1 */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Region Compliance</h3>
              <p className="text-gray-600 leading-relaxed">
                Stay legally compliant everywhere. Built-in regulatory adherence for HIPAA (USA), GDPR (Europe), DHA (Dubai), and other regional healthcare data laws.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-6">
                <Server className="w-8 h-8 text-cyan-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Residency & Sovereignty</h3>
              <p className="text-gray-600 leading-relaxed">
                Route patient data to specific localized cloud servers (AWS/Azure) ensuring that sensitive medical records never leave the host country's borders.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                <Languages className="w-8 h-8 text-amber-500 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Localization (i18n)</h3>
              <p className="text-gray-600 leading-relaxed">
                Not just translation. Our platform adapts to local date formats, medical coding standards (ICD-10 vs SNOMED CT), and Right-to-Left (RTL) languages like Arabic.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group md:col-span-2 lg:col-span-3 flex flex-col md:flex-row gap-8 items-center mt-4">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Network className="text-blue-500 w-8 h-8" />
                  Global Interoperability (HL7 & FHIR)
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Exporting to a new country means integrating with completely different hospital networks. Our unified API layer seamlessly connects with legacy international EHRs, local lab systems, and government health registries using standard FHIR protocols.
                </p>
                <button className="text-cyan-600 font-bold hover:text-cyan-700 flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Integration Docs <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 rounded-xl overflow-hidden shadow-md border-4 border-slate-100">
                <img src="/herobg.jpg" alt="API Interoperability" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- ENTERPRISE DEPLOYMENT SECTION --- */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-800"
          >
            <img
              src="/herobg.jpg"
              alt="Global Map Dashboard"
              className="w-full h-[500px] object-cover mix-blend-overlay opacity-60"
            />
            {/* Overlay UI to represent global nodes */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 w-max border border-white/20">
                 <p className="text-cyan-300 font-mono text-sm">Node Status: <span className="text-green-400">Online</span></p>
                 <p className="text-white font-bold text-lg">EU-Central-1 (Frankfurt)</p>
              </div>
              <div className="self-end bg-white/10 backdrop-blur-md rounded-xl p-4 w-max border border-white/20">
                 <p className="text-cyan-300 font-mono text-sm">Node Status: <span className="text-green-400">Online</span></p>
                 <p className="text-white font-bold text-lg">ME-South-1 (Dubai)</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
              Franchise & Multi-Tenant <br />
              <span className="text-blue-600">Architecture</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Whether you are an international hospital chain or a HealthTech vendor licensing your product overseas, our multi-tenant cloud setup allows you to manage thousands of clinics from a single central master dashboard.
            </p>
            
            <div className="space-y-4">
              {[
                "White-labeling for different international partners.",
                "Centralized updates with zero downtime globally.",
                "Automated currency conversion for billing modules.",
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                  </div>
                  <p className="font-medium text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <img src="/herobg.jpg" alt="CTA Background" className="w-full h-full object-cover blur-sm" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Cross Borders?</h2>
            <p className="text-xl text-gray-300 mb-10">
              Join leading HealthTech companies who have successfully exported their SaaS solutions using our enterprise deployment frameworks.
            </p>
            <button className="px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 rounded-full font-bold text-lg transition-colors shadow-xl shadow-cyan-500/20 flex items-center gap-2 mx-auto">
              Schedule Architecture Review
              <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}