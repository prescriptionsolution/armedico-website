"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  PieChart,
  FileText,
  Activity,
  ShieldCheck,
  Download,
  ChevronRight,
  Users,
  Timer,
  Database,
  FileDown,
} from "lucide-react";

export default function AnalyticsReportsPage() {
  // ✅ Animation Variants (TS-safe)
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.16 } },
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans selection:bg-teal-500 selection:text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay (image change later) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/herobg.jpg"
            alt="Medical Analytics Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm" />
          {/* subtle gradient for premium depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-teal-500/15 text-teal-200 border border-teal-500/25 text-sm font-semibold mb-6 tracking-wider uppercase">
              Analytics & Reports
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Healthcare Analytics <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">
                That Drives Action
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Track outcomes, optimize resources, and export compliance-ready reports—fast, secure, and
              built for hospitals & clinics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-semibold transition-all shadow-lg shadow-teal-500/30 flex items-center gap-2 group">
                Explore Analytics Dashboard
                <BarChart3 className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-transparent border-2 border-gray-300/70 hover:border-white text-white rounded-full font-semibold transition-all flex items-center gap-2">
                <Download className="w-5 h-5" />
                View Sample Hospital Report
              </button>
            </div>

            {/* Trust Chips */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-gray-200">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                Secure & Encrypted
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                Role-based Access
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                Export PDF/CSV
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                Offline-ready Sync
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= QUICK STATS SECTION ================= */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { label: "Prescriptions / Records Processed", value: "10M+", icon: <Database className="w-5 h-5" /> },
              { label: "Average Report Export Time", value: "< 2 sec", icon: <Timer className="w-5 h-5" /> },
              { label: "Stakeholder-ready Reports", value: "100+", icon: <FileDown className="w-5 h-5" /> },
              { label: "Teams & Facilities Supported", value: "500+", icon: <Users className="w-5 h-5" /> },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-4 rounded-2xl hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-center gap-2 mb-2 text-teal-600">
                  {stat.icon}
                  <h4 className="text-4xl font-extrabold">{stat.value}</h4>
                </div>
                <p className="text-gray-500 font-medium uppercase tracking-wide text-xs md:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <p className="mt-6 text-center text-xs text-gray-400">
            *Metrics may vary by configuration, usage, and data sources.
          </p>
        </div>
      </section>

      {/* ================= DASHBOARD PREVIEW SECTION ================= */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              A Complete View of Your Healthcare Operations
            </h2>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Dashboards consolidate information from clinical workflows and administrative systems. Spot
              trends instantly, reduce bottlenecks, and make decisions faster.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-gray-700">
                <TrendingUp className="w-6 h-6 text-teal-500 flex-shrink-0" />
                <span>
                  <strong className="text-gray-900">Predictive Insights:</strong> Identify patterns like
                  repeat visits, high-risk cases, and follow-up needs.
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <Activity className="w-6 h-6 text-teal-500 flex-shrink-0" />
                <span>
                  <strong className="text-gray-900">Real-time Monitoring:</strong> Track OPD flow, waiting
                  time, and daily load with clear visuals.
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <ShieldCheck className="w-6 h-6 text-teal-500 flex-shrink-0" />
                <span>
                  <strong className="text-gray-900">Privacy & Security:</strong> Encryption, access control,
                  and audit-friendly report sharing.
                </span>
              </li>
            </ul>

            {/* Small use-cases line */}
            <div className="inline-flex items-center gap-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-full px-4 py-2">
              <span className="font-semibold text-gray-900">Best for:</span>
              OPD, IPD, Billing, Management Reviews
            </div>
          </motion.div>

          {/* Dashboard Preview (image change later) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800 bg-gray-800 group"
          >
            {/* Top bar */}
            <div className="w-full h-8 bg-gray-900 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-3 text-xs text-gray-400">Analytics Preview</div>
            </div>

            <img
              src="/herobg.jpg"
              alt="Analytics Dashboard Preview"
              className="w-full h-[420px] object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* Bottom label */}
            <div className="absolute bottom-4 right-4 bg-gray-900/80 backdrop-blur px-4 py-2 rounded-lg border border-gray-700">
              <p className="text-teal-300 font-semibold text-sm flex items-center gap-2">
                <BarChart3 className="w-4 h-4" /> Dashboard Snapshot
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= REPORTING FEATURES GRID ================= */}
      <section className="py-24 bg-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Reporting Tools</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Generate reports for clinicians, admins, and managers—clear, printable, and shareable.
            </p>

            {/* small audience chips */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
              <span className="px-3 py-1 rounded-full bg-white/70 border border-gray-200 text-gray-700">
                Doctors
              </span>
              <span className="px-3 py-1 rounded-full bg-white/70 border border-gray-200 text-gray-700">
                Hospital Admin
              </span>
              <span className="px-3 py-1 rounded-full bg-white/70 border border-gray-200 text-gray-700">
                Operations Team
              </span>
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Feature 1 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Clinical Outcomes</h3>

              <ul className="text-gray-600 leading-relaxed space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600/70" />
                  Recovery timeline & follow-ups
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600/70" />
                  Repeat visit & adherence patterns
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600/70" />
                  Treatment success indicators
                </li>
              </ul>

              <button className="text-sm font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1">
                View sample <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform">
                <PieChart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resource Allocation</h3>

              <ul className="text-gray-600 leading-relaxed space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600/70" />
                  OPD/IPD load & peak hours
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600/70" />
                  Staff workload distribution
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600/70" />
                  Equipment & room utilization
                </li>
              </ul>

              <button className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1">
                View sample <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Analytics</h3>

              <ul className="text-gray-600 leading-relaxed space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-600/70" />
                  Billing cycle & collections
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-600/70" />
                  Revenue trends & summary
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-600/70" />
                  Operational cost snapshot
                </li>
              </ul>

              <button className="text-sm font-semibold text-purple-700 hover:text-purple-800 inline-flex items-center gap-1">
                View sample <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>

          {/* ================= HOW IT WORKS (New) ================= */}
          <div className="mt-16">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8 md:p-10">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-gray-900">How Reports Work</h3>
                <p className="text-gray-600 mt-2">
                  Simple workflow—from data capture to export-ready reports.
                </p>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-4 gap-6"
              >
                {[
                  {
                    title: "Collect Data",
                    desc: "Appointments, prescriptions, billing & operations.",
                    icon: <Database className="w-6 h-6 text-teal-600" />,
                  },
                  {
                    title: "Organize",
                    desc: "Clean dashboards with filters & role views.",
                    icon: <BarChart3 className="w-6 h-6 text-teal-600" />,
                  },
                  {
                    title: "Generate",
                    desc: "Smart summaries for doctors & administrators.",
                    icon: <FileText className="w-6 h-6 text-teal-600" />,
                  },
                  {
                    title: "Export & Share",
                    desc: "PDF/CSV exports with controlled access.",
                    icon: <Download className="w-6 h-6 text-teal-600" />,
                  },
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="rounded-2xl border border-gray-200 bg-gray-50 p-6 hover:bg-white transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4">
                      {step.icon}
                    </div>
                    <p className="text-sm font-semibold text-teal-700 mb-1">
                      Step {idx + 1}
                    </p>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          {/* image change later */}
          <img
            src="/herobg.jpg"
            alt="CTA Background"
            className="w-full h-full object-cover blur-sm"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stop Guessing, Start Measuring
            </h2>

            <p className="text-xl text-gray-400 mb-10">
              Bring AR Medico analytics into your workflow and make decisions backed by real insights.
            </p>

            <div className="flex flex-col items-center gap-3">
              <button className="px-10 py-4 bg-teal-500 hover:bg-teal-400 text-gray-900 rounded-full font-bold text-lg transition-colors shadow-xl shadow-teal-500/20">
                Book a Free Demo
              </button>
              <p className="text-sm text-gray-400">No spam. Quick 15-minute walkthrough.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}