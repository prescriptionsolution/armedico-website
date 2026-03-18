"use client";

import React, { useState } from "react"; // Added useState for FAQ
import Image from "next/image";
import Link from "next/link";
import { 
  BarChart3, 
  Users, 
  Settings, 
  TrendingUp, 
  DollarSign, 
  CalendarCheck, 
  Briefcase,
  PieChart,
  ArrowUpRight,
  Download,
  Bell,
  Plus, // Added for FAQ UI
  Minus // Added for FAQ UI
} from "lucide-react";

export default function AdminDashboardPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null); // State for FAQ
  
  // --- FAQ DATA (Tailored for Admin & Management) ---
  const faqs = [
    {
      q: "Can I limit what my staff can see in the dashboard?",
      a: "Yes. Our Role-Based Access Control allows you to define specific permissions. For example, your receptionist can manage appointments but won't be able to view revenue reports or clinical data."
    },
    {
      q: "How many clinics can I manage under one account?",
      a: "ARmedico supports multi-clinic management. You can add unlimited clinic locations and switch between them instantly from the sidebar without needing to log out."
    },
    {
      q: "Can I export data for my CA or tax filing?",
      a: "Absolutely. You can generate and export GST-compliant financial reports, expense sheets, and daily settlement data in Excel, PDF, or CSV formats with just one click."
    },
    {
      q: "Is there an activity log to track staff changes?",
      a: "Yes, the Admin Dashboard includes a comprehensive Audit Trail. You can see exactly which staff member created a record, edited a bill, or deleted an appointment and at what time."
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

  // --- MOCK DASHBOARD WIDGETS DATA ---
  const stats = [
    { label: "Today's Revenue", value: "₹24,500", trend: "+12%", icon: <DollarSign className="w-5 h-5 text-emerald-600"/>, bg: "bg-emerald-50", color: "text-emerald-600" },
    { label: "Active Patients", value: "142", trend: "+5%", icon: <Users className="w-5 h-5 text-blue-600"/>, bg: "bg-blue-50", color: "text-blue-600" },
    { label: "Appointments", value: "38", trend: "Full", icon: <CalendarCheck className="w-5 h-5 text-purple-600"/>, bg: "bg-purple-50", color: "text-purple-600" },
    { label: "Staff Present", value: "8/10", trend: "2 Leave", icon: <Briefcase className="w-5 h-5 text-orange-600"/>, bg: "bg-orange-50", color: "text-orange-600" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* ================= HERO HEADER ================= */}
      <section className="bg-white pt-24 pb-20 border-b border-slate-100">
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider">
                        <Settings className="w-4 h-4" /> Super Admin Control
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
                        Your Practice on <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Autopilot.</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                        Manage multiple clinics, track revenue, control staff access, and analyze growth—all from a single powerful dashboard.
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                        <Link href="/signup" className="bg-slate-900 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-slate-800 transition-colors">
                            Access Dashboard
                        </Link>
                        <Link href="#features" className="text-slate-600 font-semibold hover:text-teal-600 px-6 py-3.5">
                            See Features
                        </Link>
                    </div>
                </div>

                {/* Hero Graphic: Simulated Dashboard */}
                <div className="lg:w-1/2 w-full">
                    <div className="relative rounded-xl bg-white shadow-2xl border border-slate-200 p-4 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 rounded-t-xl"></div>
                        <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-2">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="text-xs text-slate-400 font-mono">admin.armedico.com</div>
                        </div>
                        {/* Mock Content */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                             {stats.map((stat, i) => (
                                 <div key={i} className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                                     <div className="flex justify-between items-start mb-2">
                                         <div className={`p-2 rounded-md ${stat.bg}`}>{stat.icon}</div>
                                         <span className={`text-xs font-bold ${stat.color} bg-white px-2 py-0.5 rounded-full shadow-sm`}>{stat.trend}</span>
                                     </div>
                                     <p className="text-xs text-slate-500">{stat.label}</p>
                                     <p className="text-xl font-bold text-slate-800">{stat.value}</p>
                                 </div>
                             ))}
                        </div>
                        <div className="h-32 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 text-sm">
                            <BarChart3 className="w-6 h-6 mr-2" /> Real-time Analytics Graph Placeholder
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* ================= KEY MANAGEMENT FEATURES ================= */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900">Total Control Over Your Clinic</h2>
                <p className="text-slate-500 mt-2">Designed for individual practitioners and multi-specialty hospitals.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Feature 1: Role Management */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-teal-300 transition-colors group">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Users className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Staff & Role Management</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                        Create accounts for Receptionists, Nurses, and Assistant Doctors. Limit their access (e.g., Reception can't see revenue).
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"/> Custom Permissions</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"/> Activity Logs</li>
                    </ul>
                </div>

                {/* Feature 2: Financial Reports */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-teal-300 transition-colors group">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <PieChart className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Financial Reports</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                        Know exactly how much you earned today, this week, or this month. Export GST-ready reports in one click.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-500 rounded-full"/> Daily/Monthly Settlement</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-500 rounded-full"/> Expense Tracking</li>
                    </ul>
                </div>

                {/* Feature 3: Multi-Clinic Support */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-teal-300 transition-colors group">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Briefcase className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Multi-Clinic Support</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                        Do you visit multiple clinics? Manage all of them from one login. Switch profiles instantly without logging out.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full"/> Unified Patient Database</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full"/> Location-wise Analytics</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* ================= ANALYTICS PREVIEW ================= */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/3">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Data that drives decisions.</h2>
                    <p className="text-slate-500 mb-8">
                        Stop guessing. Use ARmedico's advanced analytics to understand patient footfall trends, peak hours, and most popular treatments.
                    </p>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-white rounded-lg shadow-sm text-teal-600">
                                <Download className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800">Export Data</h4>
                                <p className="text-xs text-slate-500">Excel, PDF, or CSV formats.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white rounded-lg shadow-sm text-orange-600">
                                <Bell className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800">Smart Alerts</h4>
                                <p className="text-xs text-slate-500">Get notified for low stock or cancellations.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/3">
                    {/* Abstract Graph Representation */}
                    <div className="relative h-[400px] w-full bg-slate-900 rounded-2xl overflow-hidden p-8 flex items-end justify-between shadow-2xl">
                         <div className="absolute inset-0 opacity-20">
                             <Image src="/herobg.jpg" alt="Graph BG" fill className="object-cover" />
                         </div>
                         
                         {/* CSS Bars for Graph */}
                         {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                             <div key={i} className="w-[10%] bg-teal-500 rounded-t-lg relative group transition-all duration-500 hover:bg-teal-400" style={{height: `${h}%`}}>
                                 <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                     {h*10} Patients
                                 </div>
                             </div>
                         ))}
                    </div>
                </div>
            </div>
        </div>
      </section>
      {/* ================= NEW FAQ SECTION ================= */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Administration FAQs</h2>
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

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Take charge of your clinic.</h2>
              <div className="flex justify-center gap-4">
                  <Link href="/signup" className="px-8 py-3 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold rounded-lg transition-colors">
                      Get Admin Access
                  </Link>
              </div>
          </div>
      </section>

    </div>
  );
}