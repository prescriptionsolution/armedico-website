"use client";

import React, { useState } from "react"; // Added useState
import Image from "next/image";
import Link from "next/link";
import { 
  Smartphone, 
  Calendar, 
  Video, 
  FileHeart, 
  BellRing, 
  QrCode, 
  MessageCircle, 
  Download,
  Check,
  Star,
  ShieldCheck,
  Plus, // Added for FAQ
  Minus // Added for FAQ
} from "lucide-react";

export default function PatientPortalPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null); // State for FAQ
  
  // --- FAQ DATA (Tailored for Patient App & Portal) ---
  const faqs = [
    {
      q: "Is the ARmedico app available for both Android and iOS?",
      a: "Yes! The ARmedico Patient App is available for download on both the Google Play Store and Apple App Store, ensuring all your patients can stay connected regardless of their device."
    },
    {
      q: "How do patients log in to their account?",
      a: "Patients can easily log in using their registered mobile number. A secure 6-digit OTP is sent to their phone, removing the need to remember complex passwords."
    },
    {
      q: "Can patients view their past prescriptions and lab reports?",
      a: "Absolutely. Once you finalize a prescription or upload a report in your dashboard, it is instantly synced to the patient's 'Health Vault' in the app for them to view or download."
    },
    {
      q: "Is the video consultation secure and private?",
      a: "Yes, our tele-consultation feature uses end-to-end encrypted video channels. We comply with healthcare privacy standards to ensure that all doctor-patient conversations remain confidential."
    },
    {
      q: "Can patients book follow-up appointments through the app?",
      a: "Yes. Patients can see your live availability slots and book or reschedule follow-up appointments directly from the app without calling your reception."
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

  // --- MOCK APP FEATURES (ORIGINAL) ---
  const appFeatures = [
    {
      title: "Instant Appointments",
      desc: "Patients can book, reschedule, or cancel slots based on your live availability. No more phone calls.",
      icon: <Calendar className="w-6 h-6 text-pink-600"/>,
      color: "bg-pink-50"
    },
    {
      title: "Tele-Consultation",
      desc: "Integrated HD video calling for follow-ups. Secure payment gateway built-in before the call starts.",
      icon: <Video className="w-6 h-6 text-violet-600"/>,
      color: "bg-violet-50"
    },
    {
      title: "Health Vault",
      desc: "Patients get automatic access to their digital prescriptions and lab reports instantly after the visit.",
      icon: <FileHeart className="w-6 h-6 text-teal-600"/>,
      color: "bg-teal-50"
    },
    {
      title: "Medication Reminders",
      desc: "Automated push notifications remind patients to take medicines on time, improving adherence.",
      icon: <BellRing className="w-6 h-6 text-orange-600"/>,
      color: "bg-orange-50"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-20 pb-24 overflow-hidden bg-slate-900 text-white">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-teal-300 text-sm font-bold tracking-wide backdrop-blur-sm">
                <Smartphone className="w-4 h-4" /> Available on iOS & Android
              </div>

              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                Your Clinic in <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-400">
                  Their Pocket.
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                Don't just treat patients; engage them. Give them a branded mobile app to book appointments, view records, and consult you online.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="flex items-center gap-3 px-6 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-200 transition-colors">
                  <Image src="/herobg.jpg" alt="Play Store" width={24} height={24} className="object-contain" />
                  <span>Google Play</span>
                </button>
                <button className="flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-colors backdrop-blur-md">
                  <Image src="/herobg.jpg" alt="App Store" width={24} height={24} className="object-contain" />
                  <span>App Store</span>
                </button>
              </div>

              <div className="pt-6 flex items-center gap-2 text-sm text-slate-400">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span>4.9/5 Rating by Patients</span>
              </div>
            </div>

            {/* Right Visual (Phone Mockups) */}
            <div className="lg:w-1/2 relative flex justify-center">
                <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden z-20 transform rotate-[-5deg] hover:rotate-0 transition-all duration-500">
                    <div className="absolute top-0 w-full h-8 bg-black z-30 rounded-b-xl"></div>
                    <Image src="/herobg.jpg" alt="App Screen 1" fill className="object-cover" />
                    {/* Floating Notification */}
                    <div className="absolute top-20 left-4 right-4 bg-white/90 backdrop-blur p-3 rounded-xl shadow-lg flex gap-3 items-center animate-slide-down">
                        <div className="p-2 bg-green-100 rounded-full text-green-600">
                            <Calendar className="w-4 h-4" />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500">Appointment Confirmed</p>
                            <p className="text-sm font-bold text-slate-900">Today, 5:00 PM</p>
                        </div>
                    </div>
                </div>
                
                {/* Second Phone behind */}
                <div className="absolute top-12 right-12 w-[280px] h-[580px] bg-slate-800 rounded-[2.5rem] border-8 border-slate-700 shadow-xl overflow-hidden z-10 transform rotate-[10deg] opacity-60">
                     <Image src="/herobg.jpg" alt="App Screen 2" fill className="object-cover" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS (QR FLOW) ================= */}
      <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-slate-900">Seamless Onboarding</h2>
                  <p className="text-slate-500 mt-2">How your patients connect with you.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 relative">
                  {/* Connecting Line */}
                  <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-teal-200 via-pink-200 to-teal-200 border-t-2 border-dashed border-slate-300 z-0"></div>

                  <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-24 h-24 bg-white border-2 border-teal-100 rounded-full flex items-center justify-center shadow-lg mb-6">
                          <QrCode className="w-10 h-10 text-teal-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">1. Scan QR</h4>
                      <p className="text-slate-500 text-sm px-4">Patient scans the QR code placed at your reception desk.</p>
                  </div>

                  <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-24 h-24 bg-white border-2 border-pink-100 rounded-full flex items-center justify-center shadow-lg mb-6">
                          <Download className="w-10 h-10 text-pink-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">2. Auto-Login</h4>
                      <p className="text-slate-500 text-sm px-4">App installs and logs them in using their registered mobile number.</p>
                  </div>

                  <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-24 h-24 bg-white border-2 border-violet-100 rounded-full flex items-center justify-center shadow-lg mb-6">
                          <MessageCircle className="w-10 h-10 text-violet-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">3. Connect</h4>
                      <p className="text-slate-500 text-sm px-4">Patient sees their prescription and can chat or book follow-ups.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="py-24 bg-slate-200">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Empower your patients. <br/> Reduce your workload.</h2>
                    <p className="text-lg text-slate-600">
                        When patients can book appointments and download reports themselves, your reception staff saves hours of phone time daily.
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-end">
                    <Link href="/demo" className="px-8 py-3 bg-teal-600 text-white font-bold rounded-lg shadow-lg hover:bg-teal-700 transition-all">
                        View Live Demo
                    </Link>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {appFeatures.map((feat, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className={`w-12 h-12 ${feat.color} rounded-xl flex items-center justify-center mb-4`}>
                            {feat.icon}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{feat.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* ================= TELEMEDICINE HIGHLIGHT ================= */}
      <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
              <div className="bg-slate-900 rounded-3xl p-8 md:p-16 relative overflow-hidden text-white">
                  {/* Background Elements */}
                  <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
                       <Image src="/herobg.jpg" alt="Video Call" fill className="object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900 to-transparent z-10"></div>
                  
                  <div className="relative z-20 max-w-xl">
                      <div className="flex items-center gap-2 text-pink-400 font-bold mb-4 uppercase text-sm tracking-wider">
                          <Video className="w-5 h-5" /> Built-in Telemedicine
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold mb-6">Consult from anywhere.</h2>
                      <p className="text-slate-300 text-lg mb-8">
                          Expand your practice beyond your city. The Patient Portal includes secure, high-quality video calling with integrated payment collection.
                      </p>
                      
                      <div className="space-y-4">
                          <div className="flex items-center gap-4">
                              <div className="p-2 bg-slate-800 rounded-lg"><ShieldCheck className="w-5 h-5 text-green-400"/></div>
                              <p className="text-sm">Payments settled directly to your bank account (T+1).</p>
                          </div>
                          <div className="flex items-center gap-4">
                              <div className="p-2 bg-slate-800 rounded-lg"><MessageCircle className="w-5 h-5 text-blue-400"/></div>
                              <p className="text-sm">In-call chat for sharing photos or reports.</p>
                          </div>
                      </div>

                      <button className="mt-10 px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl transition-all">
                          Enable Telemedicine
                      </button>
                  </div>
              </div>
          </div>
      </section>
      {/* ================= NEW FAQ SECTION ================= */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Patient Portal FAQs</h2>
            <div className="space-y-4">
                {faqs.map((faq, idx) => (
                    <div key={idx} className={`border rounded-xl bg-white transition-all duration-300 ${openFaqIndex === idx ? "border-teal-500 shadow-md" : "border-slate-200 hover:border-teal-300"}`}>
                        <button onClick={() => toggleFaq(idx)} className="w-full flex items-center justify-between p-5 text-left focus:outline-none">
                            <span className={`font-bold text-lg ${openFaqIndex === idx ? "text-teal-700" : "text-slate-800"}`}>
                                <span className="text-teal-500 italic mr-2">Q.</span> {faq.q}
                            </span>
                            {openFaqIndex === idx ? <Minus className="text-teal-600 w-5 h-5"/> : <Plus className="text-slate-400 w-5 h-5"/>}
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${openFaqIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                          <div className="p-5 pt-0 pl-11 text-slate-600 border-t border-slate-50">{faq.a}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-slate-200">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Give your patients the VIP experience.</h2>
              <p className="text-slate-500 mb-8">Get the ARmedico Patient App included with your subscription.</p>
              <Link href="/signup" className="text-teal-600 font-bold hover:underline flex items-center justify-center gap-2">
                  Check Eligibility <Check className="w-4 h-4"/>
              </Link>
          </div>
      </section>
    </div>
  );
}