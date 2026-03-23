import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  MapPin, Star, Clock, Phone, Info, Stethoscope, 
  Activity, User, CheckCircle2, ChevronLeft 
} from "lucide-react";

// Import path check kar lena - ye providers.ts se data fetch karega
import { MOCK_PROVIDERS } from "../providers"; 

interface PageProps {
  params: Promise<{
    slug: string; // CHANGE: 'id' ko 'slug' se replace kiya
  }>;
}

export default async function ProviderDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  
  // CHANGE: ID ke bajaye slug ke basis par provider find kar rahe hain
  const provider = MOCK_PROVIDERS.find((p) => p.slug === slug);

  if (!provider) {
    return notFound();
  }

  return (
    // CHANGE 1: 'pt-24' hata diya. Header relative hai, to wo automatically upar rahega.
    // 'pb-20' rakha hai footer spacing ke liye.
    <main className="min-h-screen bg-slate-50 pb-20 font-sans">
      
      {/* ==================== HERO SECTION ==================== */}
      {/* CHANGE 2: Height badha di (h-[350px] -> h-[450px] md:h-[550px])
          Taaki image ko khulne ki jagah mile aur wo shrink na ho. */}
      <div className="relative h-[450px] md:h-[550px] w-full bg-slate-900">
        
        <Image 
            src={provider.image} 
            alt={provider.name} 
            fill 
            // CHANGE 3: 'object-top' lagaya hai.
            // Isse image ka TOP hissa (heads/faces) hamesha dikhega, chahe screen size kuch bhi ho.
            className="object-cover object-top opacity-80" 
            priority 
        />
        
        {/* Overlay Gradients for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        <div className="absolute inset-0 bg-black/20" /> 

        {/* Back Button */}
        <div className="absolute top-6 left-6 z-10">
            <Link href="/services/healthcare-provider" className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/30 transition-all font-medium border border-white/20 shadow-sm">
                <ChevronLeft size={20} /> Back to List
            </Link>
        </div>

        {/* Title Content - Absolute Bottom */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white z-20">
            <div className="container mx-auto max-w-7xl">
                <div className="flex items-center gap-3 mb-3">
                   <span className="bg-teal-500 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider shadow-sm">
                       {provider.type}
                   </span>
                   {provider.isOpen247 && (
                        <span className="bg-green-500 text-white px-3 py-1 rounded-md text-xs font-bold flex items-center gap-1 shadow-sm">
                            <Clock size={14} /> 24/7 Open
                        </span>
                   )}
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-md">{provider.name}</h1>
                
                <div className="flex flex-wrap items-center gap-6 text-slate-100 text-sm md:text-base font-medium">
                    <span className="flex items-center gap-1.5 drop-shadow-sm">
                        <MapPin size={18} className="text-teal-400" /> {provider.location}
                    </span>
                    <div className="flex items-center gap-2">
                        <span className="bg-yellow-500 text-slate-900 px-2 py-0.5 rounded font-bold flex items-center gap-1 text-sm shadow-sm">
                            {provider.rating} <Star size={12} fill="currentColor" />
                        </span>
                        <span className="hover:text-teal-300 cursor-pointer transition-colors">
                            ({provider.reviewsCount} Reviews)
                        </span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* ==================== CONTENT GRID ==================== */}
      <div className="container mx-auto px-6 mt-8 relative z-20 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
            
            {/* LEFT COLUMN: Main Details */}
            <div className="lg:w-2/3 space-y-8">
                
                {/* About Section */}
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-4">
                        <Info className="text-teal-600" /> About
                    </h2>
                    <p className="text-slate-600 leading-relaxed text-lg">{provider.about}</p>
                </section>

                {/* Departments */}
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-6">
                        <Stethoscope className="text-blue-600" /> Departments
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {provider.departments.map((dept, i) => (
                            <span key={i} className="px-5 py-2.5 bg-blue-50 text-blue-700 rounded-xl font-medium border border-blue-100 hover:bg-blue-100 transition-colors">
                                {dept}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Facilities */}
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-6">
                        <Activity className="text-purple-600" /> Facilities & Equipment
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                        {provider.equipment.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-slate-700 font-medium p-2 hover:bg-slate-50 rounded-lg transition-colors">
                                <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" /> {item}
                            </div>
                        ))}
                        {provider.hasOxygen && (
                             <div className="flex items-center gap-3 text-slate-700 font-medium p-2 hover:bg-slate-50 rounded-lg transition-colors">
                                <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" /> 24/7 Oxygen Supply
                            </div>
                        )}
                    </div>
                </section>

                 {/* Doctors / Faculty */}
                 <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-6">
                        <User className="text-orange-600" /> Key Doctors
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {provider.faculty.map((doc, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-orange-200 transition-colors">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-400 shadow-sm border border-slate-100">
                                    <User size={24} />
                                </div>
                                <div>
                                    <span className="font-bold text-slate-800 block">{doc}</span>
                                    <span className="text-xs text-slate-500 uppercase tracking-wide">Specialist</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Reviews */}
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-6">
                        <Star className="text-yellow-500" /> Patient Reviews
                    </h2>
                    <div className="space-y-4">
                        {provider.reviews.length > 0 ? (
                            provider.reviews.map((rev, i) => (
                                <div key={i} className="p-5 border border-slate-100 rounded-xl bg-slate-50/50">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-bold text-slate-900">{rev.user}</span>
                                        <div className="flex gap-0.5">
                                            {[...Array(5)].map((_, starIdx) => (
                                                <Star key={starIdx} size={14} className={starIdx < rev.rating ? "text-yellow-400 fill-current" : "text-slate-300"} />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-slate-600 italic">"{rev.comment}"</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-slate-500">No reviews yet.</p>
                        )}
                    </div>
                </section>
            </div>

            {/* RIGHT COLUMN: Booking Card (Sticky) */}
            <div className="lg:w-1/3">
                <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200 border border-slate-100 sticky top-24">
                    <h3 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">Book Appointment</h3>
                    
                    <div className="space-y-5 mb-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-teal-50 p-2 rounded-lg text-teal-600">
                                <Clock size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Timings</p>
                                <p className="text-slate-800 font-medium">{provider.timing}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-teal-50 p-2 rounded-lg text-teal-600">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Contact</p>
                                <p className="text-slate-800 font-medium">+91 98765 43210</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-teal-50 p-2 rounded-lg text-teal-600">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Location</p>
                                <p className="text-slate-800 font-medium">{provider.location}</p>
                            </div>
                        </div>
                    </div>

                    {/* Booking Form Mini */}
                    <form className="space-y-3 bg-slate-50 p-4 rounded-xl mb-4 border border-slate-100">
                        <p className="text-sm font-bold text-slate-700 mb-2">Instant Booking</p>
                        <input type="text" placeholder="Patient Name" className="w-full text-sm p-3 rounded-lg border border-slate-200 outline-none focus:border-teal-500" />
                        <input type="date" className="w-full text-sm p-3 rounded-lg border border-slate-200 outline-none focus:border-teal-500" />
                        <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-teal-500/20 mt-2">
                            Confirm Booking
                        </button>
                    </form>

                    <div className="text-center">
                        <p className="text-xs text-slate-400 font-bold uppercase mb-1">Consultation Fee</p>
                        <p className="text-2xl font-bold text-teal-700">{provider.price}</p>
                        <p className="text-[10px] text-slate-400 mt-2">Pay at clinic/hospital</p>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </main>
  );
}