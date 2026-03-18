"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FileText, 
  Search, 
  Lock, 
  Clock, 
  UploadCloud, 
  Share2, 
  Activity, 
  UserCheck,
  CalendarDays,
  FolderOpen,
  ShieldAlert,
  ChevronRight,
  PlayCircle,
  Plus,
  Minus 
} from "lucide-react";

export default function PatientRecordsPage() {
  const [activeFeature, setActiveFeature] = useState("timeline");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // --- FAQ DATA ---
  const faqs = [
    {
      q: "How secure is the patient data stored on ARmedico?",
      a: "We use bank-grade 256-bit AES encryption for all data. Your records are stored on secure cloud servers with role-based access, meaning only authorized staff can view sensitive patient information."
    },
    {
      q: "Can I upload old physical reports and X-rays?",
      a: "Yes! You can use our 'Digital Document Vault' to upload photos or PDFs of old prescriptions, lab reports, and X-rays directly from your phone or computer."
    },
    {
      q: "Is ARmedico compliant with India's ABDM mission?",
      a: "Absolutely. ARmedico is built to support ABHA (Ayushman Bharat Health Account) integration, allowing you to create health IDs and share records securely."
    },
    {
      q: "Can I find a patient if they forget their ID?",
      a: "Yes, our 'Lightning Fast Search' allows you to find any patient instantly using their Mobile Number, Name, or even a partial UHID."
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

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // --- ORIGINAL DATA ---
  const recordFeatures = [
    {
      id: "timeline",
      title: "Visual Health Timeline",
      desc: "See a patient's entire medical journey in a chronological, easy-to-read timeline.",
      icon: <Clock className="w-5 h-5" />,
      image: "/visual.webp"
    },
    {
      id: "documents",
      title: "Digital Document Vault",
      desc: "Store X-Rays, Lab Reports, and past prescriptions securely in the cloud.",
      icon: <FolderOpen className="w-5 h-5" />,
      image: "/digital.webp"
    },
    {
      id: "vitals",
      title: "Vitals Tracking",
      desc: "Graphically track BP, Sugar, Weight, and Pulse over months or years.",
      icon: <Activity className="w-5 h-5" />,
      image: "/vitals.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
     {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center pt-20 pb-12 overflow-hidden bg-white">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
             <Image src="/herobg.jpg" alt="Background" fill className="object-cover opacity-10" />
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text & CTA */}
            <div className="text-left max-w-2xl mx-auto lg:mx-0">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-bold tracking-wide mb-6 uppercase">
               AI-Powered Smart Prescription System
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Every Patient Detail.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  One Secure Place.
                </span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
               Create intelligent prescriptions with AI assistance,
visualize treatment using AR & VR,
and manage complete patient records securely — all in one place.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/signup" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all">
                    Start for Free
                </Link>
                <Link href="/demo" className="px-6 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center gap-2">
                    <PlayCircle className="w-5 h-5"/> See it in Action
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Interface Mockup */}
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              <div className="bg-slate-900 rounded-2xl p-2 shadow-2xl border border-slate-700 transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-slate-800 rounded-xl overflow-hidden relative aspect-[4/3] sm:aspect-video lg:aspect-[4/3] xl:aspect-[16/9]">
                      <Image src="/patient record.png" alt="Patient Records Interface" fill className="object-cover opacity-90" />
                      
                      {/* Floating UI Elements */}
                      <div className="absolute top-6 left-6 bg-white p-3 rounded-lg shadow-xl max-w-[200px] animate-slide-in-left">
                          <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                  <UserCheck className="w-4 h-4" />
                              </div>
                              <div>
                                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Patient Found</p>
                                  <p className="text-xs font-extrabold text-slate-800 truncate">John deo</p>
                              </div>
                          </div>
                      </div>

                      <div className="absolute bottom-6 right-6 bg-white p-3 rounded-lg shadow-xl max-w-[200px] animate-slide-in-right delay-100">
                          <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                  <Activity className="w-4 h-4" />
                              </div>
                              <div>
                                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Vitals Alert</p>
                                  <p className="text-xs font-extrabold text-slate-800">BP: 120/80</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FEATURE DEEP DIVE (Grid) ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
                {/* Search Feature */}
                <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600">
                        <Search className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Lightning Fast Search</h3>
                    <p className="text-slate-500 leading-relaxed mb-6">
                        Find any patient by Name, Phone Number, or Patient ID in milliseconds. No more waiting at the reception.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400"/> Search by Mobile No.</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400"/> Search by UHID</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400"/> Search by Name</li>
                    </ul>
                </div>

                {/* Security Feature */}
                <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600">
                        <Lock className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Bank-Grade Security</h3>
                    <p className="text-slate-500 leading-relaxed mb-6">
                        Your data is encrypted and stored on secure cloud servers. Only you and authorized staff can access it.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"/> 256-bit Encryption</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"/> Role-based Access</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"/> Daily Auto-Backups</li>
                    </ul>
                </div>

                {/* Upload Feature */}
                <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-600">
                        <UploadCloud className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Paperless Storage</h3>
                    <p className="text-slate-500 leading-relaxed mb-6">
                        Upload photos of old prescriptions, lab reports, or X-rays directly from your phone to the patient's file.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400"/> Unlimited Storage</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400"/> PDF & Image Support</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400"/> Easy Retrieval</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* ================= INTERACTIVE PREVIEW SECTION ================= */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                
                {/* Left Controls */}
                <div className="lg:w-1/3 space-y-6">
                    <h2 className="text-3xl font-bold text-slate-900">Patient Data at your fingertips</h2>
                    <p className="text-slate-500">Switch views to understand how ARmedico organizes complex medical history.</p>
                    
                    <div className="space-y-3">
                        {recordFeatures.map((feat) => (
                            <button
                                key={feat.id}
                                onClick={() => setActiveFeature(feat.id)}
                                className={`w-full flex items-start gap-4 p-4 rounded-xl text-left transition-all ${
                                    activeFeature === feat.id 
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" 
                                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                                }`}
                            >
                                <div className={`mt-1 ${activeFeature === feat.id ? "text-blue-200" : "text-slate-400"}`}>
                                    {feat.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm mb-1">{feat.title}</h4>
                                    <p className={`text-xs ${activeFeature === feat.id ? "text-blue-100" : "text-slate-400"}`}>
                                        {feat.desc}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Interactive Image */}
                <div className="lg:w-2/3 w-full">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
                        <Image 
                            // Added dynamic source based on active feature
                            src={recordFeatures.find(f => f.id === activeFeature)?.image || "/visual.webp"} 
                            alt={activeFeature} 
                            fill 
                            className="object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                        
                        {/* Dynamic Label */}
                        <div className="absolute bottom-6 left-6">
                            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-md mb-2 uppercase tracking-wider">
                                Active View
                            </span>
                            <h3 className="text-2xl font-bold text-white">
                                {recordFeatures.find(f => f.id === activeFeature)?.title} Mode
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      {/* ================= FAQ SECTION ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Common Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, idx) => (
                    <div key={idx} className={`border rounded-xl bg-white transition-all duration-300 ${openFaqIndex === idx ? "border-blue-500 shadow-md" : "border-slate-200 hover:border-blue-300"}`}>
                        <button onClick={() => toggleFaq(idx)} className="w-full flex items-center justify-between p-5 text-left focus:outline-none">
                            <span className={`font-bold text-lg ${openFaqIndex === idx ? "text-blue-700" : "text-slate-800"}`}>
                                <span className="text-blue-500 italic mr-2">Q.</span> {faq.q}
                            </span>
                            {openFaqIndex === idx ? <Minus className="text-blue-600 w-5 h-5"/> : <Plus className="text-slate-400 w-5 h-5"/>}
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${openFaqIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                          <div className="p-5 pt-0 pl-11 text-slate-600 border-t border-slate-50">{faq.a}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* ================= COMPLIANCE & CONSENT ================= */}
      <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                  <div className="md:w-1/2">
                      <div className="flex items-center gap-2 mb-4 text-emerald-400 font-bold uppercase tracking-wider text-xs">
                          <ShieldAlert className="w-5 h-5"/>
                          ABDM Compliant
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for India's Digital Health Mission</h2>
                      <p className="text-slate-300 text-lg leading-relaxed mb-8">
                          ARmedico is built to support ABHA (Ayushman Bharat Health Account) integration. Create unique health IDs for patients and share records seamlessly with their consent.
                      </p>
                      <Link href="/features/security" className="text-emerald-400 font-bold hover:text-emerald-300 flex items-center gap-2">
                          Learn about Data Privacy <ChevronRight className="w-4 h-4"/>
                      </Link>
                  </div>
                  <div className="md:w-1/2 relative">
                      <div className="grid grid-cols-2 gap-4">
                          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                              <h4 className="text-4xl font-bold text-emerald-400 mb-2">100%</h4>
                              <p className="text-slate-400 text-sm">Consent Based Sharing</p>
                          </div>
                          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 mt-8">
                              <h4 className="text-4xl font-bold text-blue-400 mb-2">HIPAA</h4>
                              <p className="text-slate-400 text-sm">Standard Compliance</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Organize your clinic today.</h2>
            <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
                Join the digital revolution. Safe, secure, and smart patient record management is just a click away.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/signup" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all">
                    Start Managing Records
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all">
                    View Pricing
                </Link>
            </div>
        </div>
      </section>

    </div>
  );
}