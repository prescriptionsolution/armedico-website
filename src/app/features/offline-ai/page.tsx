"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  WifiOff,
  Database,
  ShieldCheck,
  Zap,
  CloudLightning,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Play,
  Layers,
  Lock,
  ChevronDown,
  BrainCircuit,
  Mic,
  Activity,
  RefreshCw,
  Plus,
  Minus
} from "lucide-react";

export default function OfflineFeaturePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const problemSolution = {
    oldWay: [
      "Clinic operations grind to a halt during internet outages.",
      "Frustrating loading spinners interrupt patient consultations.",
      "High risk of data loss during intermittent connectivity.",
      "Total dependency on expensive high-speed fiber or 5G."
    ],
    newWay: [
      "Uninterrupted Practice: Generate prescriptions 24/7 without lag.",
      "Local-First Storage: Patient data is saved to your device instantly.",
      "Edge AI Processing: AI suggestions work without cloud dependency.",
      "Auto-Conflict Resolution: Your data stays consistent across devices automatically."
    ]
  };

  const faqs = [
    {
      q: "Does the AI engine really work without an active internet connection?",
      a: "Yes. ARmedico’s AI runs locally on your device using Edge Intelligence. You can generate prescriptions, receive clinical suggestions, and complete consultations even when there is no internet connection."
    },
    {
      q: "How secure is my patient data when stored locally?",
      a: "All patient data is encrypted using AES-256 standards and stored securely on your device. Data never leaves your system without encryption, ensuring maximum privacy and compliance."
    },
    {
      q: "How does the cloud synchronization process work?",
      a: "When internet connectivity is restored, ARmedico automatically and securely syncs all changes to the cloud in the background—no manual action required."
    },
    {
      q: "Is Vocal Prescribing available in offline mode?",
      a: "Yes. Vocal prescribing works offline using on-device speech recognition. Certain advanced language enhancements may activate when internet is available."
    }
  ];

  // --- SEO FAQ SCHEMA ---
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      
      {/* SEO FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/herobg.jpg"
            alt="Healthcare Technology Background Pattern"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* LEFT CONTENT */}
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-700 font-semibold text-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                </span>
                Offline-First Edge AI • Secure Auto-Sync
              </div>

              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-slate-900 tracking-tight">
                No Internet? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                  Zero Interruptions.
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Experience the world's most resilient prescription platform. ARmedico’s Edge Intelligence allows you to manage patient records, write smart prescriptions, and handle billing entirely offline.
                
                <span className="block font-semibold text-slate-800 mt-2">
                  No Spinners. No Downtime. Just Care.
                </span>

                <span className="block text-sm text-slate-500 mt-3">
                  🔒 All data is encrypted locally and securely auto-syncs when internet is available.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Link
                  href="/signup"
                  aria-label="Deploy Offline Mode"
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-teal-600 rounded-xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-500/30 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  Deploy Offline Mode
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>

                <Link
                  href="/demo"
                  aria-label="View Offline Sync Technology Demo"
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
                >
                  <Play className="mr-2 w-5 h-5 fill-slate-700" />
                  View Technology Demo
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="lg:w-1/2 relative flex justify-center">
              <div className="relative max-w-[520px] rounded-2xl shadow-2xl border border-slate-200 bg-white p-2 overflow-hidden hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/offline.jpeg"
                  alt="ARmedico Offline Prescription and Auto Sync Interface"
                  width={800}
                  height={600}
                  className="rounded-xl w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STATISTICS SECTION ================= */}
      <section className="py-12 bg-teal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4 border-r border-teal-800 last:border-0">
              <h3 className="text-4xl font-bold mb-1">0ms</h3>
              <p className="text-teal-300 text-sm font-medium uppercase tracking-wider">Input Latency</p>
            </div>
            <div className="p-4 border-r border-teal-800 last:border-0">
              <h3 className="text-4xl font-bold mb-1">AES-256</h3>
              <p className="text-teal-300 text-sm font-medium uppercase tracking-wider">Hardware Encryption</p>
            </div>
            <div className="p-4 border-r border-teal-800 last:border-0">
              <h3 className="text-4xl font-bold mb-1">Instant</h3>
              <p className="text-teal-300 text-sm font-medium uppercase tracking-wider">Background Sync</p>
            </div>
            <div className="p-4 border-r border-teal-800 last:border-0">
              <h3 className="text-4xl font-bold mb-1">100%</h3>
              <p className="text-teal-300 text-sm font-medium uppercase tracking-wider">Availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE OFFLINE AI FEATURES ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-teal-600 font-bold tracking-[0.2em] uppercase text-sm mb-4">The Next Frontier</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Unrivaled Edge Intelligence</h3>
            <p className="text-slate-600 text-lg leading-relaxed">Most software stops working when the cloud goes down. ARmedico moves the cloud to your browser, ensuring your clinic never pauses for a single second.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AI Prescription Engine",
                desc: "Real-time medication suggestions and contraindication alerts powered by local ML models.",
                icon: <BrainCircuit className="w-8 h-8" />
              },
              {
                title: "Vocal Prescribing (NLP)",
                desc: "Enterprise-grade Speech-to-Text conversion for dictating prescriptions with zero cloud delay.",
                icon: <Mic className="w-8 h-8" />
              },
              {
                title: "Edge Computing",
                desc: "Harnessing client-side processing via TensorFlow.js for lightning-fast computational performance.",
                icon: <Zap className="w-8 h-8" />
              },
              {
                title: "Predictive Health Alerts",
                desc: "Advanced pattern recognition models that analyze patient history to flag potential clinical risks.",
                icon: <Activity className="w-8 h-8" />
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-3xl border border-transparent hover:border-teal-200 hover:bg-white hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRIVACY FIRST SECTION ================= */}
      <section className="py-20 bg-teal-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-teal-700/30 rounded-[3rem] p-12 border border-teal-500/30 backdrop-blur-sm">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <ShieldCheck className="w-40 h-40 text-teal-200 opacity-20" />
                <Lock className="w-20 h-20 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
            <div className="md:w-2/3 space-y-6 text-white">
              <h3 className="text-3xl font-bold">Clinical Privacy, Redefined</h3>
              <p className="text-teal-50 text-lg leading-relaxed">
                Because all AI processing happens locally, sensitive patient data never traverses the public internet. This ensures superior security and effortless HIPAA compliance for your practice.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-teal-500/40 rounded-full text-xs font-bold border border-teal-400">100% CLIENT-SIDE PROCESSING</span>
                <span className="px-4 py-2 bg-teal-500/40 rounded-full text-xs font-bold border border-teal-400">AES-256 ENCRYPTED STORAGE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Seamless Synchronization Workflow</h2>
          </div>
          
          <div className="relative flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 z-0"></div>
            {[
              { step: "01", title: "Local Sync", desc: "On first login, your clinic data is securely synced to your device for offline use.", icon: <RefreshCw /> },
              { step: "02", title: "Work Offline", desc: "Continue consultations, AI prescriptions, and billing seamlessly — even with no internet.", icon: <WifiOff /> },
              { step: "03", title: "Cloud Backup", desc: "All changes automatically and securely sync to the cloud once internet is restored.", icon: <CloudLightning /> }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 flex-1 text-center space-y-4">
                <div className="w-20 h-20 bg-white border-4 border-slate-50 shadow-lg rounded-full flex items-center justify-center mx-auto text-teal-600">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <div className="bg-teal-600 text-white text-xs font-bold w-10 h-6 flex items-center justify-center rounded-full mx-auto">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                <p className="text-slate-500 text-sm max-w-[250px] mx-auto leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROBLEM vs SOLUTION ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-10 rounded-3xl border border-slate-200">
              <h4 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8"/> Traditional Cloud Platforms
              </h4>
              <ul className="space-y-6">
                {problemSolution.oldWay.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <span className="text-red-500 text-xl font-bold">×</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900 to-slate-900 p-10 rounded-3xl shadow-2xl text-white">
              <h4 className="text-2xl font-bold text-teal-400 mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8"/> ARmedico Edge-Core
              </h4>
              <ul className="space-y-6">
                {problemSolution.newWay.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-teal-50">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

   {/* ================= UPDATED FAQ SECTION (UI MATCHED) ================= */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Expert Technical Insights</h2>
            <p className="text-slate-500 mt-2">Everything you need to know about our Offline-First architecture.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`border rounded-xl transition-all duration-300 ${
                  openFaqIndex === idx ? "border-teal-500 shadow-md bg-teal-50/20" : "border-slate-200 hover:border-teal-300 bg-slate-50"
                }`}
              >
                <button 
                  onClick={() => toggleFaq(idx)} 
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg flex items-center gap-3 ${
                    openFaqIndex === idx ? "text-teal-700" : "text-slate-800"
                  }`}>
                    <span className="text-teal-500 font-serif italic">Q.</span> {faq.q}
                  </span>
                  <span className={`p-1 rounded-full border transition-all ${
                    openFaqIndex === idx ? "rotate-180 bg-teal-500 text-white border-teal-500" : "bg-slate-100 text-slate-500 border-slate-200"
                  }`}>
                    {openFaqIndex === idx ? <Minus className="w-5 h-5"/> : <Plus className="w-5 h-5"/>}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaqIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 pt-0 pl-11 text-slate-600 leading-relaxed border-t border-slate-100 mt-2 pt-4">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA FOOTER ================= */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-teal-600 to-blue-700 rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-white">Upgrade to India’s Fastest Offline-Ready Clinical Platform.</h2>
              <p className="text-teal-50 text-xl leading-relaxed">Join 500+ clinics scaling their practice with ARmedico’s Hybrid-Core, even without internet.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/signup" className="px-12 py-5 bg-white text-teal-700 font-extrabold rounded-2xl text-xl hover:bg-teal-50 shadow-xl transition-all hover:scale-105">
                  Get Started for Free
                </Link>
                <Link href="/contact" className="px-12 py-5 bg-teal-800/40 text-white border border-teal-300/30 font-extrabold rounded-2xl text-xl hover:bg-teal-800/60 backdrop-blur-md transition-all">
                  Request Private Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}