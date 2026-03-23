"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { 
  FileText, Users, Database, ShieldCheck, 
  Activity, ArrowRight, Layout, 
  CreditCard, BarChart3, Stethoscope, Building2, UserPlus, CheckCircle2,
  WifiOff, Watch, GraduationCap, Globe2, Megaphone, Glasses, Cpu, Lock
} from "lucide-react";

// --- Animation Variants ---
const fadeInUpScroll: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/herobg.jpg" 
            alt="AR Medico Software Dashboard" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/80 bg-gradient-to-b from-slate-900/50 to-slate-900/95" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center mt-10">
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.span variants={fadeInUpScroll} className="inline-block py-1 px-4 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-sm font-bold tracking-widest mb-6">
              PLATFORM OVERVIEW
            </motion.span>
            <motion.h1 variants={fadeInUpScroll} className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              A Complete Digital <br />
              <span className="text-teal-400">Operating System</span> for Healthcare.
            </motion.h1>
            <motion.p variants={fadeInUpScroll} className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              From multi-specialty hospitals to single-doctor clinics. Explore the features that connect the entire healthcare ecosystem.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ==================== FEATURE PILLAR 1: THE PRESCRIPTION ENGINE ==================== */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Text Side */}
            <motion.div 
               initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUpScroll}
               className="lg:w-1/2 space-y-8 order-2 lg:order-1"
            >
              <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center shadow-sm">
                <FileText size={30} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Advanced Prescription Builder
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                The heart of our platform for doctors. Create professional, accurate digital prescriptions in seconds with patient history at a glance.
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                    <h4 className="font-bold text-teal-800 mb-3 flex items-center gap-2"><Layout size={18}/> 3 Custom Layouts</h4>
                    <ul className="space-y-2">
                        <FeaturePoint text="Blank Canvas: Start from scratch." />
                        <FeaturePoint text="Readymade Templates: Pre-filled for common treatments." />
                        <FeaturePoint text="Custom Branding: Your clinic's header & footer automatically applied." />
                    </ul>
                </div>
                <FeaturePoint text="Instant Preview & Print-Ready output." />
                <FeaturePoint text="Select registered patients to auto-fill details." />
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div 
               initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
               className="lg:w-1/2 order-1 lg:order-2 relative"
            >
               <div className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50 group">
                  <Image 
                    src="/Prescription Interface.jpeg" 
                    alt="Prescription Interface" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-teal-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURE PILLAR 2: ADMINISTRATION & ROLES ==================== */}
      <section className="py-24 bg-slate-50 overflow-hidden border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Image Side */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
               className="lg:w-1/2 relative"
            >
               <div className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                  <Image 
                    src="/Admin Dashboard.jpeg" 
                    alt="Admin Dashboard" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               </div>
            </motion.div>

             {/* Text Side Right */}
            <motion.div 
               initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUpScroll}
               className="lg:w-1/2 space-y-8"
            >
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shadow-sm">
                <Building2 size={30} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Hospital & Clinic Administration
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Whether you are managing a single clinic or a large hospital, keep your operations organized with hierarchical management.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><Stethoscope size={18} className="text-blue-500"/> For Hospitals</h4>
                      <ul className="space-y-2 text-sm">
                          <FeaturePoint text="Manage multiple Departments." />
                          <FeaturePoint text="Invite-based roles for Doctors." />
                          <FeaturePoint text="Invite Receptionists per department." />
                      </ul>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><Activity size={18} className="text-teal-500"/> For Clinics</h4>
                      <ul className="space-y-2 text-sm">
                          <FeaturePoint text="Manage Clinic Profile & Details." />
                          <FeaturePoint text="Single Role Receptionist invite." />
                          <FeaturePoint text="Simplified Doctor Dashboard." />
                      </ul>
                  </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* ==================== FEATURE PILLAR 3: PATIENT CARE & RECORDS ==================== */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Text Side */}
            <motion.div 
               initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUpScroll}
               className="lg:w-1/2 space-y-8 order-2 lg:order-1"
            >
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center shadow-sm">
                <UserPlus size={30} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Patient Records & Appointments
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Streamline the patient journey from registration to recovery. Accessible by doctors and receptionists based on their role permissions.
              </p>
              <ul className="space-y-4 pt-4">
                <FeaturePoint text="Add New Patients & Edit existing details easily." />
                <FeaturePoint text="Smart Dashboard displaying daily appointment details." />
                <FeaturePoint text="Booking feature for Receptionists to manage queues." />
                <FeaturePoint text="View registered details and treatment history instantly." />
              </ul>
            </motion.div>

            {/* Image Side */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
               className="lg:w-1/2 order-1 lg:order-2 relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50 group"
            >
               <Image 
                  src="/Patient Care.jpeg" 
                  alt="Patient Care" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
               />
               <div className="absolute inset-0 bg-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          </div>
        </div>
      </section>

       {/* ==================== BASIC TOOLS GRID ==================== */}
       <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 font-bold uppercase tracking-widest text-sm">Essentials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">Business & Patient Insights</h2>
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 lg:gap-12"
          >
            <SmallFeatureCard 
                icon={<CreditCard />} 
                title="Billing & Subscription Info" 
                desc="Admins can track subscription status and view billing details transparently within the dashboard." 
            />
            <SmallFeatureCard 
                icon={<BarChart3 />} 
                title="Detailed Patient Reports" 
                desc="Generate and view comprehensive reports on patient demographics and treatment trends." 
            />
            <SmallFeatureCard 
                icon={<Users />} 
                title="Normal User (Patient) Portal" 
                desc="Patients get their own dashboard to manage profiles, view history, and order medicines online." 
            />
          </motion.div>
        </div>
       </section>

       {/* ==================== NEW SECTION: INNOVATION & ECOSYSTEM ==================== */}
       <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.png')] opacity-5"></div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.span variants={fadeInUpScroll} initial="hidden" whileInView="visible" className="text-teal-400 font-bold uppercase tracking-widest text-sm">
              Future Ready
            </motion.span>
            <motion.h2 variants={fadeInUpScroll} initial="hidden" whileInView="visible" className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Innovation & Ecosystem
            </motion.h2>
            <motion.p variants={fadeInUpScroll} initial="hidden" whileInView="visible" className="text-slate-400 text-lg">
              Pushing the boundaries of healthcare with offline capabilities, edge AI, and global compliance.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {/* 1. Offline & Edge AI */}
            <DarkFeatureCard 
              icon={<WifiOff size={24} />}
              title="Offline-First & Edge AI"
              desc="Device-level intelligence capable of functioning without continuous internet connectivity."
            />

            {/* 2. IoT Integration */}
            <DarkFeatureCard 
              icon={<Watch size={24} />}
              title="IoT & Medical Devices"
              desc="Integrate diagnostic equipment, IoT sensors, and wearables for remote health monitoring."
            />

            {/* 3. AR/VR */}
            <DarkFeatureCard 
              icon={<Glasses size={24} />}
              title="AR/VR & Surgical Planning"
              desc="Extended Reality (XR) solutions for medical training, diagnostics, and patient education."
            />

            {/* 4. Research Data */}
            <DarkFeatureCard 
              icon={<Lock size={24} />}
              title="Ethical Data & Research"
              desc="Anonymized benchmarking and population health studies compliant with data laws."
            />

            {/* 5. Education */}
            <DarkFeatureCard 
              icon={<GraduationCap size={24} />}
              title="Education Platforms"
              desc="Online/Offline certification programs and professional training for healthcare staff."
            />

            {/* 6. Global Export */}
            <DarkFeatureCard 
              icon={<Globe2 size={24} />}
              title="Global SaaS Export"
              desc="Cross-border delivery of healthcare software compliant with international standards."
            />

            {/* 7. Digital Marketing - Spans 2 cols on large screens to balance grid */}
            <div className="md:col-span-2 xl:col-span-2">
              <motion.div variants={fadeInUpScroll} className="h-full bg-slate-800/50 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700/50 hover:border-teal-500/50 transition-all group flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-12 h-12 bg-teal-500/20 text-teal-400 rounded-xl flex items-center justify-center shrink-0">
                   <Megaphone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Healthcare Digital Marketing</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Tech-enabled lead generation, promotion, and advertising services specifically tailored for hospitals, doctors, and diagnostic centers.
                  </p>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
       </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-24 bg-slate-900 relative overflow-hidden border-t border-slate-800">
         <div className="absolute inset-0 bg-teal-600/10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/50 to-slate-900" />
         
         <div className="container mx-auto px-6 relative z-10 text-center text-white">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUpScroll} className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Ready to Modernize Your Practice?
              </h2>
              <p className="text-xl text-teal-100 mb-8">
                Get access to all these premium features. No credit card needed for early access.
              </p>
              <div className="inline-block bg-teal-500/20 border-2 border-teal-400 p-4 rounded-2xl mb-10 shadow-[0_0_30px_rgba(45,212,191,0.3)]">
                 <span className="text-2xl font-bold text-teal-300 uppercase tracking-wider flex items-center gap-3">
                    <CheckCircle2 size={28} /> Currently Free for Early Adopters!
                 </span>
              </div>
              
              <div className="flex justify-center">
                <button className="px-10 py-5 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-full text-lg shadow-lg hover:shadow-teal-500/50 transition-all flex items-center gap-3 hover:scale-105 active:scale-95">
                  Create Free Account Now <ArrowRight size={22} />
                </button>
              </div>
            </motion.div>
         </div>
      </section>

    </main>
  );
}

// --- Helper Components ---
function FeaturePoint({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-slate-700 font-medium">
      <CheckCircle2 className="text-teal-500 flex-shrink-0 mt-1" size={20} />
      {text}
    </li>
  )
}

function SmallFeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div variants={fadeInUpScroll} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-2 group">
      <div className="w-14 h-14 bg-slate-50 text-slate-600 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:text-teal-600 group-hover:bg-teal-50 transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
    </motion.div>
  )
}

// New Dark Card for the Innovation Section
function DarkFeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div variants={fadeInUpScroll} className="bg-slate-800/50 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700/50 hover:border-teal-500/50 transition-all group">
      <div className="w-12 h-12 bg-slate-700 text-slate-300 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-500/20 group-hover:text-teal-400 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}