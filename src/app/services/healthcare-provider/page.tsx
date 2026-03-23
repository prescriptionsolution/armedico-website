"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; 
import { motion } from "framer-motion";
import { 
  MapPin, Search, Star, Clock, Activity, 
  Stethoscope, HeartPulse, ChevronLeft, ChevronRight
} from "lucide-react";

// IMPORTANT: Same folder se import kar rahe hain
import { MOCK_PROVIDERS } from "./providers";

const HEALTH_TIPS = [
  {
    title: "5 Tips for a Healthy Heart",
    category: "Cardiology",
    desc: "Learn how diet and exercise can significantly reduce heart risks.",
    date: "Jan 24, 2026"
  },
  {
    title: "Understanding Seasonal Flu",
    category: "General Health",
    desc: "Symptoms to watch out for and when to visit a doctor immediately.",
    date: "Jan 20, 2026"
  },
  {
    title: "Mental Wellness at Work",
    category: "Psychology",
    desc: "Simple breathing exercises to manage stress during high-pressure jobs.",
    date: "Jan 18, 2026"
  }
];

const ITEMS_PER_PAGE = 6;

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All"); 
  const [currentPage, setCurrentPage] = useState(1);

  // Filter Logic
  const filteredProviders = MOCK_PROVIDERS.filter((provider) => {
    const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          provider.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "All" || provider.type === filterType;
    return matchesSearch && matchesType;
  });

  // Reset pagination when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterType]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredProviders.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentProviders = filteredProviders.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      document.getElementById("provider-grid")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative h-[450px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src="/herobg.jpg" alt="Healthcare Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-teal-900/80" />
        </div>

        <div className="relative z-10 w-full max-w-4xl px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Find the Best Healthcare Near You
          </motion.h1>
          <p className="text-teal-100 text-lg mb-8">
            Search doctors, clinics, and hospitals in Patna. View full details & book appointments.
          </p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-2 rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-3xl mx-auto"
          >
            <div className="flex items-center px-4 w-full md:w-1/3 border-b md:border-b-0 md:border-r border-slate-200 py-2">
              <MapPin className="text-teal-500 w-5 h-5 mr-2" />
              <input 
                type="text" 
                placeholder="Location (e.g. Patna)" 
                className="w-full outline-none text-slate-700 bg-transparent"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center px-4 w-full md:w-2/3 py-2">
              <Search className="text-teal-500 w-5 h-5 mr-2" />
              <input 
                type="text" 
                placeholder="Search Hospital, Doctor..." 
                className="w-full outline-none text-slate-700 bg-transparent"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-bold transition-all w-full md:w-auto">
              Search
            </button>
          </motion.div>
        </div>
      </section>

      {/* ==================== PROVIDER DIRECTORY ==================== */}
      <section id="provider-grid" className="py-20 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Healthcare Providers</h2>
            <p className="text-slate-500 mt-1">
              Showing {filteredProviders.length} results
            </p>
          </div>
          
          <div className="flex gap-2 mt-4 md:mt-0 bg-white p-1 rounded-lg shadow-sm border border-slate-200">
            {["All", "Hospital", "Clinic"].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                  filterType === type 
                  ? "bg-teal-100 text-teal-700" 
                  : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                {type}s
              </button>
            ))}
          </div>
        </div>

        {/* Provider Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentProviders.length > 0 ? (
            currentProviders.map((provider) => (
              /* CHANGE: provider.id ko provider.slug se replace kiya taaki URL name wala bane */
              <Link 
                href={`/services/healthcare-provider/${provider.slug}`} 
                key={provider.id} 
                className="block h-full group"
              >
                <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl shadow-md border border-slate-100 hover:shadow-2xl transition-all overflow-hidden flex flex-col h-full"
                >
                    {/* Image Header */}
                    <div className="relative h-48 w-full flex-shrink-0">
                    <Image src={provider.image} alt={provider.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-slate-800 flex items-center gap-1">
                        {provider.type === "Hospital" ? <Activity size={14} className="text-teal-600"/> : <Stethoscope size={14} className="text-blue-600"/>}
                        {provider.type}
                    </div>
                    {provider.isOpen247 && (
                        <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1 shadow-sm">
                        <Clock size={12} /> 24/7 Open
                        </div>
                    )}
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white/90 text-slate-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">View Details</span>
                    </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors line-clamp-1">{provider.name}</h3>
                            <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                            <MapPin size={14} /> {provider.location}
                            </p>
                        </div>
                        <div className="flex flex-col items-end flex-shrink-0 ml-2">
                            <div className="bg-green-50 text-green-700 px-2 py-1 rounded text-sm font-bold flex items-center gap-1">
                            {provider.rating} <Star size={12} fill="currentColor" />
                            </div>
                            <span className="text-xs text-slate-400 mt-1">{provider.reviewsCount} reviews</span>
                        </div>
                    </div>

                    <div className="border-t border-slate-100 my-4 pt-4 space-y-2 flex-grow">
                        <div className="flex flex-wrap gap-2 mb-3">
                            {provider.hasOxygen && (
                            <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded border border-blue-100 flex items-center gap-1">
                                <HeartPulse size={12} /> Oxygen
                            </span>
                            )}
                            {provider.departments.slice(0, 2).map((item: string, idx: number) => (
                            <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">
                                {item}
                            </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-4">
                        <div>
                            <p className="text-xs text-slate-400 font-semibold uppercase">Consultation</p>
                            <p className="font-bold text-slate-900">{provider.price}</p>
                        </div>
                        <span 
                            className="text-teal-600 font-bold text-sm group-hover:underline flex items-center gap-1"
                        >
                        Details &rarr;
                        </span>
                    </div>
                    </div>
                </motion.div>
              </Link>
            ))
          ) : (
             <div className="col-span-full text-center py-20">
                <p className="text-slate-500 text-lg">No providers found matching your criteria.</p>
                <button 
                  onClick={() => {setSearchTerm(""); setFilterType("All");}} 
                  className="mt-4 text-teal-600 font-bold hover:underline"
                >
                  Clear Filters
                </button>
             </div>
          )}
        </div>

        {/* Pagination Controls */}
        {filteredProviders.length > ITEMS_PER_PAGE && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-3 rounded-full border ${currentPage === 1 ? 'border-slate-200 text-slate-300 cursor-not-allowed' : 'border-slate-300 text-slate-600 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200'} transition-all`}
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-slate-600 font-medium">
              Page <span className="text-teal-600 font-bold">{currentPage}</span> of {totalPages}
            </span>
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-3 rounded-full border ${currentPage === totalPages ? 'border-slate-200 text-slate-300 cursor-not-allowed' : 'border-slate-300 text-slate-600 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200'} transition-all`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </section>

      {/* ==================== HEALTH TIPS SECTION ==================== */}
      <section className="bg-teal-50 py-20">
        <div className="container mx-auto px-6">
           <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold text-slate-900">Health Tips & Learning</h2>
              <a href="#" className="text-teal-600 font-semibold hover:underline">View All</a>
           </div>

           <div className="grid md:grid-cols-3 gap-6">
              {HEALTH_TIPS.map((tip, idx) => (
                 <div key={idx} className="bg-white p-6 rounded-xl border border-teal-100 shadow-sm hover:shadow-md transition-all">
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">{tip.category}</span>
                    <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2">{tip.title}</h3>
                    <p className="text-slate-600 text-sm mb-4">{tip.desc}</p>
                    <p className="text-xs text-slate-400">{tip.date}</p>
                 </div>
              ))}
           </div>
        </div>
      </section>

    </main>
  );
}