"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  FileText, 
  Activity, 
  Database, 
  BrainCircuit,
  Share2,
  Printer,
  History,
  AlertTriangle,
  Play,
  Plus,
  Minus,
  Quote,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export default function SmartPrescriptionPage() {
  const [activeTab, setActiveTab] = useState("templates");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // --- UPDATED FAQ DATA (Optimized for Doctors & SEO) ---
  const faqs = [
    {
      q: "Can I use my own clinic's letterhead for printing?",
      a: "Yes! ARmedico allows you to fully customize your prescription layout. You can upload your clinic's logo, header, and footer, and adjust margins to print perfectly on your existing stationery."
    },
    {
      q: "How does the Offline Mode work?",
      a: "Our platform uses Edge Intelligence, allowing you to create prescriptions and manage records without an active internet connection. Your data is stored locally and auto-syncs to the cloud once you're back online."
    },
    {
      q: "Is patient data encrypted and secure?",
      a: "Security is our priority. We use bank-grade 256-bit encryption and comply with HIPAA and Indian healthcare data laws to ensure all patient records remain private and protected."
    },
    {
      q: "Does the AI suggest dosages automatically?",
      a: "Yes, the Smart Prescription AI learns from your practice patterns and the built-in database of over 20,000 Indian medicines to suggest common dosages and frequencies."
    },
    {
      q: "Can I send digital prescriptions via WhatsApp?",
      a: "Absolutely. Once a prescription is finalized, you can instantly share a professional, secure PDF link with the patient via WhatsApp or SMS with just one click."
    },
    {
      q: "Can I create templates for different specialties?",
      a: "Yes, you can build custom templates for various conditions (e.g., Fever, Diabetes, Hypertension). This allows you to complete a full prescription in under 10 seconds."
    }
  ];

  // --- SEO FAQ SCHEMA (JSON-LD) ---
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

  const featuresList = [
    {
      title: "AI-Powered Auto-Fill",
      description: "Stop typing the same medicines again. Our AI predicts your next move based on patient history.",
      icon: <BrainCircuit className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Drug Interaction Alerts",
      description: "Real-time safety checks that warn you if prescribed medicines react negatively with each other.",
      icon: <AlertTriangle className="w-6 h-6 text-orange-600" />
    },
    {
      title: "Custom Templates",
      description: "Create specialty-specific templates (Cardiology, Derma, etc.) and prescribe in 10 seconds.",
      icon: <FileText className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Digital & Printable",
      description: "Send prescriptions via WhatsApp/SMS instantly or print on your clinic's letterhead.",
      icon: <Printer className="w-6 h-6 text-teal-600" />
    }
  ];

  const testimonials = [
    {
      id: 1,
      text: "ARMedico has completely changed how fast I prescribe. I now finish notes before the patient even stands up.",
      name: "Dr. Rajesh Kumar",
      role: "Cardiologist, Delhi"
    },
    {
      id: 2,
      text: "The AI suggestions help me avoid prescription mistakes during busy OPD hours. Huge time saver.",
      name: "Dr. Anjali Mehta",
      role: "General Physician, Ahmedabad"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      {/* GOOGLE SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* ================= HERO ================= */}
      <section className="relative pt-20 pb-32 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/herobg.jpg" alt="bg" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* LEFT */}
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-100 rounded-full text-sm font-semibold text-teal-700">
                <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
                #1 Rated Smart Prescription Tool
              </div>

              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                Prescribe Faster <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                  Diagnose Better — with AI Assistance
                </span>
              </h1>

              <p className="text-xl text-slate-600 max-w-xl">
                Create error-free digital prescriptions with AI assistance —
                designed for everyday clinics, not just the future.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 shadow-lg shadow-teal-500/30 transition"
                >
                  Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
                </Link>

                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50"
                >
                  <Play className="mr-2 w-5 h-5" /> Watch Demo
                </Link>
              </div>

              <p className="text-sm text-slate-500">
                No credit card required • Setup in under 5 minutes
              </p>

              <p className="text-sm text-slate-500">
                ⭐⭐⭐⭐⭐ Trusted by <strong>10,000+</strong> doctors & clinics across India
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="lg:w-1/2 relative">
              <div className="relative bg-white rounded-2xl shadow-2xl border overflow-hidden h-[420px] lg:h-[520px]">

                <Image
                  src="/preshero.webp"
                  alt="Smart Prescription"
                  fill
                  priority
                  className="object-cover"
                />

                {/* STATUS BADGE */}
                <div className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow border flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-green-text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-slate-500">Status</p>
                    <p className="font-bold text-slate-800">Prescription Sent!</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STATISTICS SECTION ================= */}
      <section className="py-10 bg-teal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-teal-700/50">

            {/* Stat 1 */}
            <div className="p-4">
              <h3 className="text-4xl font-bold mb-1">30s</h3>
              <p className="text-teal-200 text-sm font-medium">
                Avg. Prescription Time
              </p>
            </div>

            {/* Stat 2 */}
            <div className="p-4">
              <h3 className="text-4xl font-bold mb-1">Always</h3>
              <p className="text-teal-200 text-sm font-medium">
                Legible & Clear
              </p>
            </div>

            {/* Stat 3 */}
            <div className="p-4">
              <h3 className="text-4xl font-bold mb-1">20k+</h3>
              <p className="text-teal-200 text-sm font-medium">
                Indian Medicines Database
              </p>
            </div>

            {/* Stat 4 */}
            <div className="p-4">
              <h3 className="text-4xl font-bold mb-1">AI Alerts</h3>
              <p className="text-teal-200 text-sm font-medium">
                Drug Interaction Checks
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PROBLEM vs SOLUTION ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-3">Why Upgrade?</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Leave the Pen & Paper Behind</h3>
                <p className="text-slate-600 text-lg">Traditional prescriptions are prone to errors, hard to read, and difficult to manage. ARmedico transforms your workflow.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Traditional Way */}
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative group overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <History className="w-32 h-32 text-slate-400" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                        <span className="p-2 bg-red-100 text-red-600 rounded-lg"><Activity className="w-6 h-6"/></span>
                        The Old Way
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-slate-600">
                        <span className="text-red-500 text-xl">×</span> Hand-written errors increase patient risk.
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <span className="text-red-500 text-xl">×</span> No quick access to past medication history.
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <span className="text-red-500 text-xl">×</span> Time wasted on repetitive manual writing.
                      </li>
                    </ul>

                </div>

                {/* ARmedico Way */}
                <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-3xl border border-teal-100 shadow-xl relative group overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Zap className="w-32 h-32 text-teal-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-teal-900 mb-6 flex items-center gap-3">
                        <span className="p-2 bg-teal-100 text-teal-600 rounded-lg"><ShieldCheck className="w-6 h-6"/></span>
                        The ARmedico Way
                    </h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-slate-700 font-medium">
                            <CheckCircle2 className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" /> 
                            AI-assisted suggestions prevent errors.
                        </li>
                        <li className="flex items-start gap-3 text-slate-700 font-medium">
                            <CheckCircle2 className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" /> 
                            One-click repeat prescriptions.
                        </li>
                        <li className="flex items-start gap-3 text-slate-700 font-medium">
                            <CheckCircle2 className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" /> 
                            Professional, branded printouts.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* ================= KEY FEATURES BENTO GRID ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
            <div className="mb-12">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Everything you need to <br/> prescribe efficiently.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Large Feature */}
                <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">Medicine Interaction Checker</h3>
                            <p className="text-slate-500">Automatically warns you about severe drug interactions
                            before you finalize the prescription.</p>
                        </div>
                        <div className="p-3 bg-purple-100 text-purple-600 rounded-xl group-hover:scale-110 transition-transform">
                            <Activity className="w-8 h-8" />
                        </div>
                    </div>
                    <div className="h-72 bg-slate-50 rounded-2xl overflow-hidden relative">
                      <Image
                        src="/medicine.png"
                        alt="Interaction Checker"
                        fill
                        className="object-cover object-center"
                        priority
                      />
                    </div>
                </div>

                {/* Tall Feature */}
                <div className="row-span-2 bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
                     <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-slate-900/90 z-10"></div>
                     <Image src="/wp.webp" alt="Mobile App" fill className="object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" />
                     <div className="relative z-20 h-full flex flex-col justify-end">
                        <div className="p-3 bg-teal-500/20 backdrop-blur-md w-fit rounded-xl mb-4 border border-teal-500/30">
                            <Share2 className="w-6 h-6 text-teal-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Share via WhatsApp</h3>
                        <p className="text-slate-300">Don't just print. Send digital prescriptions directly to patients' phones instantly — clear, readable, and easy to store.</p>
                     </div>
                </div>

                {/* Small Feature */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                            <Database className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">20k+ Medicines Database</h3>
                    </div>
                    <p className="text-slate-500 text-sm">Pre-loaded Indian drug database with brands, generics, and dosages.</p>
                </div>

                {/* Small Feature */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-teal-100 text-teal-600 rounded-xl">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">Favorites & Sets</h3>
                    </div>
                    <p className="text-slate-500 text-sm">One-click add for your most frequently prescribed combinations.</p>
                </div>
            </div>
        </div>
      </section>

      {/* ================= INTERACTIVE TABS / DEEP DIVE ================= */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Designed for speed. <br/> Built for accuracy.</h2>
                    <div className="space-y-4">
                        {[
                            {id: "templates", label: "Custom Templates", desc: "Build your own templates for cough, fever, diabetes etc."},
                            {id: "history", label: "Patient History", desc: "View last 10 visits and repeat meds with one click."},
                            {id: "billing", label: "Integrated Billing", desc: "Prescription automatically generates the bill invoice."}
                        ].map((tab) => (
                            <button 
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border ${
                                    activeTab === tab.id 
                                    ? "bg-teal-50 border-teal-200 shadow-md" 
                                    : "bg-white border-transparent hover:bg-slate-50"
                                }`}
                            >
                                <h4 className={`text-lg font-bold mb-1 ${activeTab === tab.id ? "text-teal-700" : "text-slate-700"}`}>{tab.label}</h4>
                                <p className="text-slate-500 text-sm">{tab.desc}</p>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="relative aspect-square md:aspect-video bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-200">
                        {/* Dynamic Image based on Tab */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Image 
                                src="/template.webp" 
                                alt={activeTab} 
                                fill 
                                className="object-cover transition-opacity duration-500" 
                            />
                            {/* Overlay Text to simulate UI change */}
                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-6 py-3 rounded-xl shadow-lg">
                                <p className="font-bold text-slate-800 uppercase text-xs tracking-wider">Previewing Feature</p>
                                <p className="text-teal-600 font-bold text-lg capitalize">{activeTab.replace('-', ' ')} Mode</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS (UPDATED: LESS PADDING) ================= */}
      <section className="py-12 bg-teal-900 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-teal-600/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Doctors across India
          </h2>
          <p className="text-teal-200 max-w-2xl mx-auto mb-8">
            Thousands of doctors rely on ARMedico every day to prescribe faster, safer, and smarter.
          </p>

          {/* Slider Container */}
          <div className="max-w-4xl mx-auto relative">
            <div className="overflow-hidden relative min-h-[300px] md:min-h-[250px] flex items-center justify-center">
              
              {testimonials.map((t, index) => (
                <div 
                  key={t.id}
                  className={`absolute w-full transition-all duration-700 ease-in-out transform ${
                    index === currentTestimonial 
                      ? "opacity-100 translate-x-0 scale-100" 
                      : "opacity-0 translate-x-10 scale-95"
                  }`}
                >
                   {/* Card Content */}
                   <div className="bg-white/10 backdrop-blur-md p-10 md:p-14 rounded-3xl border border-teal-700/50 max-w-3xl mx-auto">
                      <div className="flex justify-center mb-6">
                        <Quote className="w-10 h-10 text-teal-400 opacity-50" />
                      </div>
                      <p className="text-teal-50 text-xl md:text-2xl leading-relaxed font-light mb-8 italic">
                        "{t.text}"
                      </p>
                      <div className="flex flex-col items-center">
                         <div className="flex gap-1 mb-2">
                            {[1,2,3,4,5].map(i => (
                              <span key={i} className="text-yellow-400 text-sm">★</span>
                            ))}
                         </div>
                         <h5 className="text-white font-bold text-lg">{t.name}</h5>
                         <p className="text-teal-300 text-sm">{t.role}</p>
                      </div>
                   </div>
                </div>
              ))}
            </div>

            {/* Slider Controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button 
                onClick={() => setCurrentTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="p-2 rounded-full bg-teal-800 text-teal-200 hover:bg-teal-700 transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentTestimonial ? "w-8 bg-teal-400" : "w-2 bg-teal-700"
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length)}
                className="p-2 rounded-full bg-teal-800 text-teal-200 hover:bg-teal-700 transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <p className="text-center text-teal-200 text-sm mt-8">
            ⭐ 4.9/5 average rating • Used by <strong>10,000+</strong> doctors across India
          </p>
        </div>
      </section>

     {/* ================= FAQ SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
                <p className="text-slate-500 mt-2">Everything you need to know about the Prescription module.</p>
            </div>
            
            <div className="space-y-4">
                {faqs.map((faq, idx) => (
                    <div 
                      key={idx} 
                      className={`border rounded-xl transition-all duration-300 ${
                        openFaqIndex === idx ? "border-teal-500 shadow-md bg-teal-50/30" : "border-slate-200 hover:border-teal-300"
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
                            openFaqIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="p-5 pt-0 pl-10 text-slate-600 leading-relaxed">
                             {faq.a}
                          </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* ================= CTA FOOTER ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                 <div className="absolute top-0 left-0 w-full h-full opacity-70">
                    <Image src="/herobg.jpg" alt="BG" fill className="object-cover" />
                 </div>
                 
                 <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to modernize your clinic?</h2>
                    <p className="text-teal-100 text-lg">Join 10,000+ doctors who trust ARmedico for their daily practice. No credit card required for trial.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/signup" className="px-10 py-4 bg-white text-teal-700 font-bold rounded-xl text-lg hover:bg-teal-50 shadow-lg transition-transform hover:scale-105">
                            Get Started Free
                        </Link>
                        <Link href="/contact" className="px-10 py-4 bg-teal-700/50 text-white border border-teal-400 font-bold rounded-xl text-lg hover:bg-teal-700/70 transition-transform hover:scale-105 backdrop-blur-sm">
                            Contact Sales
                        </Link>
                    </div>
                    <p className="text-sm text-teal-200/80 mt-4">Full access to Prescription module • No hidden fees</p>
                 </div>
            </div>
        </div>
      </section>

    </div>
  );
}