"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  BookOpen, Video, FileText, Users, Award, GraduationCap, 
  Download, PlayCircle, MessageSquare, Search, ArrowRight, 
  CheckCircle2, Bookmark, Eye, ChevronLeft, ChevronRight, X
} from "lucide-react";

export default function EducationHubClient() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);
  const [previewData, setPreviewData] = useState<any | null>(null);
  
  const sliderRef = useRef<HTMLDivElement>(null);

  const categories = ["All", "Patient Handouts", "Doctor's Learning", "Clinic Management"];

  const resources = [
    {
      id: 1,
      category: "Patient Handouts",
      title: "Diabetes Diet Chart",
      type: "PDF",
      size: "2.4 MB",
      icon: <FileText className="w-5 h-5 text-rose-500"/>,
      color: "bg-rose-50",
      tags: ["Endocrinology", "Hindi/English"]
    },
    {
      id: 2,
      category: "Doctor's Learning",
      title: "New Cardiology Protocols 2026",
      type: "Video Course",
      size: "45 Mins",
      icon: <Video className="w-5 h-5 text-blue-500"/>,
      color: "bg-blue-50",
      tags: ["Cardiology", "CME Approved"]
    },
    {
      id: 3,
      category: "Clinic Management",
      title: "Staff Training Manual",
      type: "Template",
      size: "Docx",
      icon: <BookOpen className="w-4 h-4 text-emerald-500"/>,
      color: "bg-emerald-50",
      tags: ["HR", "Operations"]
    },
    {
      id: 4,
      category: "Patient Handouts",
      title: "Post-Surgery Care Guide",
      type: "PDF",
      size: "1.2 MB",
      icon: <FileText className="w-4 h-4 text-rose-500"/>,
      color: "bg-rose-50",
      tags: ["General Surgery", "English"]
    },
    {
      id: 5,
      category: "Doctor's Learning",
      title: "Pediatric Antibiotic Dosing Chart",
      type: "Quick Ref",
      size: "1 Page PDF",
      icon: <FileText className="w-4 h-4 text-blue-500"/>,
      color: "bg-blue-50",
      tags: ["Pediatrics", "High Yield"]
    },
    {
      id: 6,
      category: "Patient Handouts",
      title: "Lower Back Pain Exercises",
      type: "Video",
      size: "12 Mins",
      icon: <PlayCircle className="w-4 h-4 text-rose-500"/>,
      color: "bg-rose-50",
      tags: ["Orthopedics", "Hindi"]
    },
    {
      id: 7,
      category: "Clinic Management",
      title: "Biomedical Waste Disposal SOP",
      type: "PDF",
      size: "3.1 MB",
      icon: <BookOpen className="w-4 h-4 text-emerald-500"/>,
      color: "bg-emerald-50",
      tags: ["Compliance", "NABH"]
    },
    {
      id: 8,
      category: "Patient Handouts",
      title: "Dengue Fever Prevention Kit",
      type: "PDF",
      size: "800 KB",
      icon: <FileText className="w-4 h-4 text-rose-500"/>,
      color: "bg-rose-50",
      tags: ["General Medicine", "Regional"]
    }
  ];

  const toggleBookmark = (id: number) => {
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredResources = resources.filter((res) => {
    const matchesTab = activeTab === "All" || res.category === activeTab;
    const matchesSearch = 
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      res.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesTab && matchesSearch;
  });

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 340; // Card size chhota hone ki wajah se scroll amount kam kiya hai
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 overflow-x-hidden">
      
     {/* ================= HERO SECTION ================= */}
<section className="relative pt-24 pb-16 overflow-hidden bg-white">
  <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] opacity-30"></div>

  <div className="container mx-auto px-4 relative z-10 text-center">
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold mb-6 border border-teal-100 shadow-sm">
      <GraduationCap className="w-3.5 h-3.5" />
      <span>ARmedico Academy 2.0</span>
    </div>

    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-5 tracking-tight leading-tight">
      Elevate Your <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
        Medical Practice
      </span>
    </h1>

    <p className="text-sm text-teal-700 font-semibold mb-3">
      Built for Doctors, Clinics & Hospital Teams
    </p>

    <p className="text-base text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
      Expert-curated clinical resources, patient education kits, and CME-ready learning —
      designed for the modern Indian healthcare professional.
    </p>

    <div className="max-w-2xl mx-auto flex flex-col md:flex-row gap-3 items-center">
      <div className="relative w-full">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search treatment protocols, CME modules..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 bg-white shadow-md shadow-slate-200/40 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
        />
      </div>

      <button className="w-full md:w-auto px-8 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-md flex items-center justify-center gap-2 whitespace-nowrap">
        Explore Resources
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  </div>
</section>

{/* ================= STATS SECTION ================= */}
<section className="py-12 bg-slate-50 border-y border-slate-100">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200">
      {[
        { label: "Medical Resources", val: "500+" },
        { label: "Active Doctors", val: "10k+" },
        { label: "CME Hours", val: "1,200+" },
        { label: "Cities Served", val: "150+" },
      ].map((stat, i) => (
        <div key={i} className="text-center py-4 md:py-0">
          <div className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {stat.val}
          </div>
          <div className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wider">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ================= RESOURCES CAROUSEL SECTION ================= */}
<section className="py-20 bg-white relative">
  <div className="container mx-auto px-4">

    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Clinical Resource Library
        </h2>
        <p className="text-slate-500 text-sm md:text-base mt-2 max-w-lg">
          Swipe through structured, ready-to-use content designed for real-world medical practice.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
        <div className="flex bg-slate-100 p-1 rounded-lg overflow-x-auto max-w-full border border-slate-200 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-md text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === cat
                  ? "bg-white text-teal-600 shadow-sm"
                  : "text-slate-500 hover:text-slate-700 hover:bg-white/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredResources.length > 0 && (
          <div className="hidden sm:flex gap-2">
            <button 
              onClick={() => scrollSlider('left')}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200 transition-all shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollSlider('right')}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200 transition-all shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>

    {filteredResources.length > 0 ? (
      <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
        <div 
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-8 pt-2 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {filteredResources.map((res) => {
            const isBookmarked = bookmarkedIds.includes(res.id);
            
            return (
              <div
                key={res.id}
                className="w-[85vw] sm:w-[320px] flex-none snap-start group relative bg-white border border-slate-200 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-100/60 hover:border-teal-300 flex flex-col"
              >
                <div className="flex justify-between items-start mb-5">
                  <div className={`w-12 h-12 ${res.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {res.icon}
                  </div>
                  <button 
                    onClick={() => toggleBookmark(res.id)}
                    className={`p-1.5 rounded-full transition-colors ${isBookmarked ? 'bg-teal-50 text-teal-600' : 'text-slate-300 hover:bg-slate-50 hover:text-slate-500'}`}
                  >
                    <Bookmark className="w-4 h-4" fill={isBookmarked ? "currentColor" : "none"} />
                  </button>
                </div>

                <div className="flex-1 space-y-2.5">
                  <span className="text-[9px] font-bold text-teal-600 uppercase tracking-widest px-2 py-0.5 bg-teal-50/80 rounded inline-block">
                    {res.category}
                  </span>

                  <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-teal-700 transition-colors">
                    {res.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {res.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-medium text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-3 border-t border-slate-100 mt-3">
                    <span className="flex items-center gap-1 font-medium text-emerald-600">
                      <CheckCircle2 className="w-3 h-3" />
                      {res.type}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>{res.size}</span>
                  </div>
                </div>

                <div className="mt-6 flex gap-2">
                  <button 
                    onClick={() => setPreviewData(res)}
                    className="flex-1 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-all text-xs"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Preview
                  </button>
                  <button className="flex-1 py-2.5 bg-slate-900 hover:bg-teal-600 border border-transparent text-white rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-all text-xs shadow-sm">
                    <Download className="w-3.5 h-3.5" />
                    Get
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    ) : (
      <div className="flex flex-col items-center justify-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300 mx-4 sm:mx-0 mt-6">
        <Search className="w-10 h-10 text-slate-300 mb-3" />
        <h3 className="text-lg font-bold text-slate-700">No resources found</h3>
        <p className="text-slate-500 text-xs mt-1">Try searching for a different term or category.</p>
        <button 
          onClick={() => {setSearchQuery(""); setActiveTab("All");}}
          className="mt-4 px-6 py-2 bg-white border border-slate-200 rounded-lg font-semibold text-sm text-slate-700 hover:bg-slate-100 transition-colors shadow-sm"
        >
          Clear Search
        </button>
      </div>
    )}
  </div>
</section>

      {/* ================= COMMUNITY SECTION ================= */}
      <section className="py-16 bg-slate-900 rounded-[2rem] mx-4 lg:mx-8 mb-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-500/10 blur-[100px]"></div>
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                          Where India's Best <br/> Doctors Collaborate.
                      </h2>
                      <div className="space-y-6">
                          {[
                              { title: "Anonymous Case Reviews", desc: "Share complex cases without compromising patient privacy.", icon: <MessageSquare className="w-5 h-5 text-teal-400"/> },
                              { title: "Verified Specialist Network", desc: "Connect with consultants from AIIMS, Apollo, and more.", icon: <Users className="w-5 h-5 text-blue-400"/> },
                              { title: "Earn Rewards", desc: "Get ARmedico points for active participation.", icon: <Award className="w-5 h-5 text-yellow-400"/> }
                          ].map((item, i) => (
                              <div key={i} className="flex gap-4">
                                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                      {item.icon}
                                  </div>
                                  <div>
                                      <h4 className="text-white font-semibold text-base">{item.title}</h4>
                                      <p className="text-slate-400 text-xs mt-1 leading-relaxed">{item.desc}</p>
                                  </div>
                              </div>
                          ))}
                      </div>
                      <button className="mt-8 group flex items-center gap-2 bg-teal-500 text-slate-900 px-6 py-3 rounded-xl text-sm font-bold hover:bg-white transition-all">
                          Get Early Access <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                      </button>
                  </div>

                  <div className="relative hidden lg:block">
                      <div className="bg-white rounded-[1.5rem] p-6 shadow-2xl relative z-20 max-w-sm ml-auto">
                          <div className="flex items-center gap-3 mb-6">
                              <div className="w-10 h-10 rounded-full bg-teal-100 border-2 border-white shadow-sm overflow-hidden relative">
                                 <Users className="absolute inset-0 m-auto text-teal-600 w-5 h-5 opacity-50"/>
                              </div>
                              <div>
                                  <h5 className="font-bold text-slate-900 text-sm">Dr. Rajesh Kumar</h5>
                                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">Pediatrician • New Delhi</p>
                              </div>
                          </div>
                          <div className="space-y-3">
                              <div className="h-3 w-3/4 bg-slate-100 rounded-full"></div>
                              <div className="h-3 w-full bg-slate-100 rounded-full"></div>
                              <div className="h-28 w-full bg-slate-50 rounded-xl border border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-xs italic">
                                  [Patient Imaging Attachment]
                              </div>
                          </div>
                          <div className="mt-6 flex justify-between items-center border-t border-slate-100 pt-4">
                              <div className="flex -space-x-2">
                                  {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white"></div>)}
                                  <div className="w-6 h-6 rounded-full bg-teal-500 text-[9px] text-white flex items-center justify-center font-bold border-2 border-white">+15</div>
                              </div>
                              <span className="text-xs font-bold text-teal-600">Join Discussion</span>
                          </div>
                      </div>
                      <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                  </div>
              </div>
          </div>
      </section>

      {/* ================= PRESCRIPSOLUTION SOFTWARE SECTION ================= */}
      <section className="py-20 bg-white relative overflow-hidden border-t border-slate-100">
          <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                  <div className="lg:w-1/2 max-w-lg">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-5 border border-blue-100 shadow-sm">
                          <BookOpen className="w-3.5 h-3.5" /> 
                          <span>Smart Clinic Management</span>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
                          Apply this knowledge with <br/>
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">PrescripSolution.</span>
                      </h2>
                      
                      <p className="text-base text-slate-600 mb-6 leading-relaxed">
                          Why stop at learning? Use our flagship hospital and clinic software to directly attach ARmedico Academy diet charts and care protocols to your patient's digital prescriptions in just one click.
                      </p>
                      
                      <ul className="space-y-3 mb-8">
                          {[
                              "1-Click Patient Handout Attachments",
                              "Smart & Fast Digital Prescriptions",
                              "Complete Hospital & Billing Management"
                          ].map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm">
                                      <CheckCircle2 className="w-3 h-3" />
                                  </div>
                                  {feature}
                              </li>
                          ))}
                      </ul>

                      <button className="bg-slate-900 hover:bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-md flex items-center gap-2 group w-fit">
                          Book a Free Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                  </div>

                  <div className="lg:w-1/2 w-full">
                      <div className="bg-[#F8FAFC] border border-slate-200 rounded-[1.5rem] p-4 shadow-xl shadow-blue-900/5 relative transform hover:-translate-y-1 transition-transform duration-500 max-w-xl mx-auto">
                          
                          <div className="flex items-center gap-1.5 mb-5 border-b border-slate-200 pb-3">
                              <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                              <div className="ml-3 text-[10px] font-bold tracking-widest text-slate-400 uppercase">PrescripSolution</div>
                          </div>
                          
                          <div className="flex gap-4">
                              <div className="w-1/4 space-y-2 hidden sm:block">
                                  <div className="h-8 bg-slate-200/50 rounded-lg"></div>
                                  <div className="h-8 bg-slate-200/50 rounded-lg"></div>
                                  <div className="h-8 bg-blue-100 rounded-lg border border-blue-200 relative overflow-hidden">
                                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                                  </div>
                                  <div className="h-8 bg-slate-200/50 rounded-lg"></div>
                              </div>
                              
                              <div className="w-full sm:w-3/4 space-y-3">
                                  
                                  <div className="bg-white border border-slate-100 rounded-xl p-3 flex gap-3 items-center shadow-sm">
                                      <div className="w-10 h-10 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center font-bold text-sm">
                                          RS
                                      </div>
                                      <div className="flex-1">
                                          <h4 className="font-bold text-slate-900 text-xs">Rahul Sharma</h4>
                                          <p className="text-[10px] text-slate-500 mt-0.5">
                                              45 Yrs &bull; Male &bull; Type 2 Diabetes
                                          </p>
                                      </div>
                                  </div>
                                  
                                  <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                                      <h4 className="font-bold text-slate-800 text-xs mb-3 flex items-center gap-1.5 border-b border-slate-50 pb-2">
                                          <span className="text-blue-600 text-lg font-serif">Rx</span>
                                          Medication
                                      </h4>
                                      
                                      <div className="space-y-3">
                                          <div>
                                              <p className="font-semibold text-slate-700 text-xs">1. Tab Metformin 500mg</p>
                                              <p className="text-[10px] text-slate-500 mt-0.5 italic">Take 1 tablet after dinner for 30 days.</p>
                                          </div>
                                          <div>
                                              <p className="font-semibold text-slate-700 text-xs">2. Tab Sitagliptin 50mg</p>
                                              <p className="text-[10px] text-slate-500 mt-0.5 italic">Take 1 tablet morning after breakfast.</p>
                                          </div>
                                      </div>

                                      <div className="mt-4 pt-4 border-t border-slate-100">
                                          <button className="w-full py-2.5 bg-blue-50/50 hover:bg-blue-50 border border-blue-200 border-dashed rounded-lg text-xs flex items-center justify-center gap-1.5 text-blue-600 font-bold transition-all relative group cursor-pointer">
                                              <div className="absolute inset-0 rounded-lg ring-1 ring-blue-400/40 animate-pulse"></div>
                                              <FileText className="w-3.5 h-3.5" />
                                              + Attach Diet Chart
                                          </button>
                                      </div>
                                  </div>

                              </div>
                          </div>
                          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 pointer-events-none"></div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 text-center bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto bg-gradient-to-br from-teal-600 to-emerald-600 rounded-[2rem] p-10 md:p-14 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 opacity-10"><GraduationCap className="w-48 h-48 -mr-12 -mt-12 rotate-12"/></div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Start Your Academy <br/> Journey Today.</h2>
                  <p className="text-teal-50 text-sm md:text-base mb-8 max-w-md mx-auto opacity-90 relative z-10">
                      Join 5,000+ medical professionals using ARmedico to deliver better patient care.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
                      <Link href="/signup" className="px-8 py-3 bg-white text-teal-700 text-sm font-bold rounded-xl hover:scale-105 transition-all shadow-md">
                          Create Free Account
                      </Link>
                      <Link href="/demo" className="px-8 py-3 bg-teal-700 text-white text-sm font-bold rounded-xl border border-teal-400/30 hover:bg-teal-800 transition-all">
                          Talk to Sales
                      </Link>
                  </div>
              </div>
          </div>
      </section>

      {/* ================= PREVIEW MODAL ================= */}
      {previewData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setPreviewData(null)}
          ></div>
          
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl relative z-10 animate-in fade-in zoom-in-95 duration-200">
            
            <div className="px-5 py-3 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${previewData.color}`}>
                  {previewData.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{previewData.title}</h3>
                  <p className="text-xs font-medium text-slate-500">{previewData.category} &bull; {previewData.size}</p>
                </div>
              </div>
              <button 
                onClick={() => setPreviewData(null)} 
                className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 p-5 bg-slate-100/50 overflow-y-auto flex items-center justify-center min-h-[40vh]">
              <div className="bg-white border-2 border-slate-200 border-dashed rounded-xl w-full h-full min-h-[300px] flex flex-col items-center justify-center text-slate-400 p-6 text-center shadow-sm">
                
                {previewData.type === 'Video Course' || previewData.type === 'Video' ? (
                  <PlayCircle className="w-16 h-16 mb-3 text-slate-300" />
                ) : (
                  <FileText className="w-16 h-16 mb-3 text-slate-300" />
                )}
                
                <h4 className="text-base font-bold text-slate-600 mb-1.5">Secure Document Viewer</h4>
                <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                  In the live software, the actual <span className="font-semibold text-slate-600">{previewData.type}</span> file will be loaded here using a secure iframe or video player.
                </p>
                
                <div className="mt-4 px-3 py-1.5 bg-slate-50 rounded-md border border-slate-100 text-[10px] font-mono text-slate-500">
                  File: {previewData.title.replace(/\s+/g, '-').toLowerCase()}.{previewData.type === 'Video Course' || previewData.type === 'Video' ? 'mp4' : 'pdf'}
                </div>
              </div>
            </div>

            <div className="px-5 py-4 border-t border-slate-100 bg-white flex justify-end gap-2">
              <button 
                onClick={() => setPreviewData(null)} 
                className="px-5 py-2.5 text-xs text-slate-600 font-semibold hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-200"
              >
                Close
              </button>
              <button className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition-all shadow-sm hover:shadow-md">
                <Download className="w-3.5 h-3.5" />
                Download to PC
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}