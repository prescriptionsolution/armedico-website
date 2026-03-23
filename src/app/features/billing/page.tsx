"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  CreditCard, 
  Receipt, 
  FileSignature, 
  Wallet, 
  ShieldCheck, 
  Calculator, 
  ArrowRight,
  Landmark,
  CheckCircle2
} from "lucide-react";

export default function BillingFinancePage() {
  // Animation Variants (Typed properly to prevent TS errors)
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
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/herobg.jpg"
            alt="Healthcare Finance Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-sm font-semibold mb-6 tracking-wider uppercase">
              Smart Revenue Cycle Management
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Simplify Healthcare <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
                Billing & Finance
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Automate claim submissions, reduce denial rates, and provide your patients with a transparent, frictionless payment experience. End-to-end financial control for modern medical facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition-all shadow-lg shadow-indigo-500/30 flex items-center gap-2 group">
                Automate Billing Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-gray-400 hover:border-white text-white rounded-full font-semibold transition-all flex items-center gap-2">
                Explore Pricing Models
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FINANCIAL HIGHLIGHTS / STATS --- */}
      <section className="py-12 bg-white border-b border-gray-200 shadow-sm relative z-20 -mt-8 mx-4 md:mx-12 rounded-2xl">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100"
          >
            {[
              { label: "Claim Acceptance", value: "99.2%" },
              { label: "Faster Payments", value: "3x" },
              { label: "Reduction in Errors", value: "85%" },
              { label: "Transactions Processed", value: "$2B+" },
            ].map((stat, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="p-4">
                <h4 className="text-4xl font-extrabold text-gray-900 mb-2">{stat.value}</h4>
                <p className="text-indigo-600 font-bold uppercase tracking-wide text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- INSURANCE & CLAIMS MANAGEMENT SECTION --- */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl group border-4 border-white"
          >
            <img
              src="/herobg.jpg"
              alt="Insurance Claims processing"
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/40 to-transparent flex flex-col justify-end p-8">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="text-emerald-400 w-8 h-8" />
                <h3 className="text-white text-2xl font-bold">Auto-Verification Engine</h3>
              </div>
              <p className="text-indigo-100">Real-time patient eligibility and benefit verification.</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
              Flawless Insurance <br className="hidden md:block"/> 
              <span className="text-indigo-600">Claims Processing</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Say goodbye to manual data entry and rejected claims. Our intelligent billing system cross-references medical codes (ICD-10, CPT) instantly, ensuring your claims are clean, compliant, and ready for fast reimbursement.
            </p>
            <ul className="space-y-5">
              {[
                "Automated coding error detection before submission.",
                "Direct integration with major health insurance networks.",
                "Denial management with AI-driven appeal suggestions.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-800 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* --- CORE FINANCE FEATURES GRID --- */}
      <section className="py-24 bg-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Financial Ecosystem</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Manage everything from patient co-pays to complex multi-departmental hospital accounting in one centralized platform.
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
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-indigo-500 group">
              <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Receipt className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Invoicing</h3>
              <p className="text-gray-600 leading-relaxed">
                Generate clear, itemized bills for patients. Break down insurance coverage versus out-of-pocket costs easily so patients understand their charges.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-emerald-500 group">
              <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CreditCard className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Channel Payments</h3>
              <p className="text-gray-600 leading-relaxed">
                Accept payments securely via credit cards, UPI, bank transfers, or EMIs. Send automated payment links via SMS and email.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500 group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Landmark className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ledger & Accounting</h3>
              <p className="text-gray-600 leading-relaxed">
                Seamlessly sync all transactions with your hospital's central accounting software. Maintain strict HIPAA compliance and audit trails.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- PATIENT EXPERIENCE SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
         <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-indigo-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            <div className="p-10 md:p-16 flex flex-col justify-center w-full md:w-1/2">
              <div className="w-16 h-16 bg-indigo-800 rounded-2xl flex items-center justify-center mb-6">
                <Wallet className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Empower Patients with Self-Service
              </h2>
              <p className="text-indigo-200 text-lg mb-8">
                Reduce administrative burden by allowing patients to view their financial history, download receipts, and set up payment plans directly from their secure patient portal.
              </p>
              <button className="self-start px-6 py-3 bg-white text-indigo-900 hover:bg-emerald-400 hover:text-white rounded-full font-bold transition-colors">
                View Patient Portal Demo
              </button>
            </div>
            <div className="w-full md:w-1/2 relative min-h-[300px]">
              <img 
                src="/herobg.jpg" 
                alt="Patient Payment Portal" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay"
              />
              {/* Decorative UI elements over the image to simulate an app */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                 <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-full max-w-sm shadow-2xl">
                    <div className="flex justify-between items-center mb-6 border-b border-white/20 pb-4">
                      <span className="text-white font-medium">Total Due</span>
                      <span className="text-2xl font-bold text-emerald-400">$150.00</span>
                    </div>
                    <button className="w-full py-3 bg-emerald-500 text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors">
                      <CreditCard className="w-5 h-5"/> Pay Now
                    </button>
                 </div>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Stop Leaking Revenue</h2>
            <p className="text-xl text-gray-300 mb-10">
              Upgrade your hospital's financial infrastructure. Faster billing, fewer errors, and happier patients.
            </p>
            <button className="px-10 py-4 bg-indigo-500 hover:bg-indigo-400 text-white rounded-full font-bold text-lg transition-colors shadow-xl shadow-indigo-500/20 flex items-center gap-2 mx-auto">
              <Calculator className="w-6 h-6" />
              Calculate Your ROI
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}