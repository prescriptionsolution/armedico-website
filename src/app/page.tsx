"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Activity, Sparkles, BarChart3,
  Phone, Mail, MapPin, Calendar, FileText, Heart, Siren,
  Stethoscope, ArrowRight, Layout, Users, Smartphone, Monitor, Pill, CheckCircle2
} from "lucide-react";

// Animation Variants (Thoda fast transition ke liye duration kam kiya hai)
const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInUpScroll: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {

  const handleComingSoon = () => {
    alert("Our Mobile App is coming soon! Stay tuned.");
  };

  return (
    <main className="min-h-screen font-sans text-slate-800 bg-slate-50 overflow-x-hidden">

      {/* HERO SECTION - Height reduced to h-[85vh] for better focus */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/herobg.jpg"
            alt="AR Medico Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        </div>

        <div className="container relative z-10 mx-auto px-6 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* LEFT TEXT */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInLeft}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Complete{" "}
                <span className="text-teal-400">Healthcare Ecosystem</span>
              </h1>

              <p className="text-base md:text-lg text-slate-200 leading-relaxed max-w-lg border-l-4 border-teal-500 pl-4">
                A unified platform connecting Hospitals, Clinics, and Patients.
                From Smart Prescriptions to Complete Healthcare Management
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="https://dashboard.armedico.com/signup">
                  <button className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-full transition-all shadow-lg flex items-center gap-2">
                    Get Started
                  </button>
                </Link>

                <button
                  onClick={handleComingSoon}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 font-bold rounded-full transition-all flex items-center gap-2"
                >
                  <Smartphone size={18} />
                  Download App
                </button>
              </div>
            </motion.div>

            {/* RIGHT IMAGE - Reduced height */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
              className="hidden md:flex justify-end items-center relative h-[450px] lg:h-[550px]"
            >
              <Image
                src="/test.png"
                alt="Healthcare Professionals"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>


      {/* WHO WE ARE - Reduced Padding */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col md:flex-row items-center gap-10"
          >
            <motion.div variants={fadeInUpScroll} className="md:w-1/2 w-full">
              <div className="relative h-[300px] lg:h-[380px] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/aboutus.png"
                  alt="About AR Medico"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-teal-900/20"></div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUpScroll} className="md:w-1/2 w-full space-y-4">
              <span className="text-teal-600 font-bold uppercase tracking-widest text-xs bg-teal-100 px-3 py-1 rounded-full w-fit">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Bridging Care with <br /> Intelligence
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                AR Medico is an all-in-one health-tech platform designed to simplify clinical workflows and digital prescription management. Whether you are a large hospital, a private clinic, or a patient seeking care, our system streamlines patient records, prescriptions, and day-to-day healthcare operations.
              </p>
              <div className="pt-2">
                <Link href="/about" className="text-teal-600 font-bold flex items-center gap-2 hover:gap-4 transition-all group w-fit">
                  Learn More About Us <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION - Compact Grid */}
      <section className="py-12 md:py-20 bg-white relative overflow-hidden" id="services">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpScroll}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <span className="text-teal-600 font-bold uppercase tracking-widest text-xs bg-teal-50 px-3 py-1 rounded-full">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">Core Solutions</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {/* SERVICE 1: Hospitals */}
            <ServiceCard 
               icon={<Layout size={28} />}
               title="Hospitals"
               category="HOSPITAL MANAGEMENT"
               desc="Complete control for multi-specialty centers.
Manage departments, doctors, and patient records."
               link="/services/healthcare-provider"
               color="teal"
            />
            {/* SERVICE 2: Clinics */}
            <ServiceCard 
               icon={<Stethoscope size={28} />}
               title="Clinics"
               category="CLINIC MANAGEMENT"
               desc="Optimized for private practice.
Manage appointments, patients, and digital prescriptions."
               link="/services/healthcare-provider"
               color="blue"
            />
            {/* SERVICE 3: Patients */}
            <ServiceCard 
               icon={<Pill size={28} />}
               title="Patients"
               category="PATIENT ACCESS"
               desc="Access digital prescriptions and health records.
View and manage medical history easily."
               link="/services/order-medicine"
               color="purple"
            />
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION - Optimized Spacing */}
      <section className="py-16 bg-slate-50 relative" id="features">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpScroll}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Powerful Capabilities</h2>
            <div className="h-1 w-16 bg-teal-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <FeatureCategoryCard
              icon={<Activity className="text-white" size={24} />}
              color="bg-teal-600"
              title="Clinical & Admin"
              items={["Smart Prescription", "EMR", "Admin Dashboard", "Patient Portal"]}
              link="/features"
            />
            <FeatureCategoryCard
              icon={<Sparkles className="text-white" size={24} />}
              color="bg-purple-600"
              title="Future Tech"
              items={["Offline Mode & AI", "IoT Connectivity", "AR/VR Assistance", "SaaS Ready"]}
              link="/features"
            />
            <FeatureCategoryCard
              icon={<BarChart3 className="text-white" size={24} />}
              color="bg-blue-600"
              title="Growth & Business"
              items={["Billing & Subscription", "Clinic Insights", "Usage Tracking", "Performance Overview"]}
              link="/features"
            />
          </div>
        </div>
      </section>

      {/* CTA SECTION - Reduced Height */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/herobg.jpg" alt="CTA" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-slate-900" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to <span className="text-teal-400">Digitize Your Practice?</span></h2>
          <p className="text-lg text-slate-300 mb-8">Start creating digital prescriptions and managing patients seamlessly with AR Medico.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://dashboard.armedico.com/">
              <button className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-full flex items-center gap-2">
                <Layout size={20} /> Get Started on Web
              </button>
            </Link>
            <button onClick={handleComingSoon} className="px-8 py-4 border border-slate-600 hover:border-white text-white rounded-full flex items-center gap-2">
              <Smartphone size={18} /> Mobile App
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

// Reusable Service Card to clean up code
function ServiceCard({ icon, title, category, desc, link, color }: any) {
  const colors: any = {
    teal: `
      text-teal-600 bg-teal-50 
      group-hover:bg-teal-500 group-hover:text-white
      group-active:bg-teal-500 group-active:text-white
    `,
    blue: `
      text-blue-600 bg-blue-50 
      group-hover:bg-blue-500 group-hover:text-white
      group-active:bg-blue-500 group-active:text-white
    `,
    purple: `
      text-purple-600 bg-purple-50 
      group-hover:bg-purple-500 group-hover:text-white
      group-active:bg-purple-500 group-active:text-white
    `
  };

  return (
    <motion.div
      variants={fadeInUpScroll}
      className="
        p-6 bg-white rounded-2xl border border-slate-100 
        shadow-md hover:shadow-xl transition-all 
        group cursor-pointer
        active:scale-[0.98]
      "
    >
      <div
        className={`
          w-14 h-14 rounded-xl flex items-center justify-center mb-6 
          transition-all duration-300
          ${colors[color]}
        `}
      >
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-1">{title}</h3>

      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3">
        {category}
      </p>

      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
        {desc}
      </p>

      <Link
        href={link}
        className="flex items-center gap-2 text-sm font-bold text-teal-600"
      >
        Explore <ArrowRight size={14} />
      </Link>
    </motion.div>
  );
}
function FeatureCategoryCard({ icon, color, title, items, link }: any) {
  let textClass = color.replace('bg-', 'text-');
  return (
    <motion.div variants={fadeInUpScroll} className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-teal-500">
      <div className={`${color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-2 mb-6 text-sm text-slate-600">
        {items.map((item: string, i: number) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle2 size={16} className={textClass} /> {item}
          </li>
        ))}
      </ul>
      <Link href={link} className={`text-sm font-bold ${textClass} flex items-center gap-1`}>
        Details <ArrowRight size={14} />
      </Link>
    </motion.div>
  );
}