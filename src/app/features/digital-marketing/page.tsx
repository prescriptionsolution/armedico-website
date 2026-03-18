"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Megaphone,
  Search,
  Star,
  Target,
  BarChart3,
  ShieldCheck,
  Workflow,
  Link2,
  CheckCircle2,
  ArrowDown,
  Sparkles,
} from "lucide-react";

export default function DigitalMarketingPage() {
  // Animation Variants (typed)
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
  };

  const stagger: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardHover =
    "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10";

  const sectionTitle = "text-3xl md:text-4xl font-semibold tracking-tight text-slate-900";
  const sectionDesc = "text-slate-600 text-base md:text-lg leading-relaxed";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-rose-500 selection:text-white">
      {/* ================= HERO (Feature Page Style) ================= */}
      <section className="relative h-[68vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/herobg.jpg"
            alt="Digital Marketing for Healthcare"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95" />
          {/* subtle vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0,rgba(0,0,0,0)_55%)]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-rose-400 text-sm font-semibold tracking-wider uppercase mb-4">
              Growth & Business
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Digital Marketing
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-violet-500">
                Built for Healthcare.
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-200/90 leading-relaxed">
              Increase patient visibility, strengthen local reputation, and drive sustainable practice growth with
              integrated, healthcare-focused digital systems.
            </p>

            {/* Scroll cue (premium subtle) */}
            <button
              type="button"
              onClick={() =>
                document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="mt-10 inline-flex items-center gap-2 text-slate-200/80 hover:text-white transition text-sm"
              aria-label="Explore how it works"
            >
              <ArrowDown className="w-4 h-4" />
              Explore How It Works
            </button>
          </motion.div>
        </div>
      </section>

      {/* ================= PROBLEM ================= */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={sectionTitle}>The Problem Doctors Face</h2>
            <p className={`${sectionDesc} max-w-2xl mx-auto mt-3`}>
              Even great clinics struggle online because visibility, trust, and patient conversion are not managed as a
              system.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Search,
                title: "Patients can’t find you on Google",
                desc: "Low local visibility reduces discovery from nearby patients who are actively searching.",
              },
              {
                icon: Workflow,
                title: "Unpredictable patient flow",
                desc: "No repeatable process means seasonal spikes and dry periods.",
              },
              {
                icon: Star,
                title: "Low online trust & reviews",
                desc: "Weak review strategy makes patients choose competitors with stronger credibility.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className={`bg-white border border-slate-200 rounded-2xl p-6 ${cardHover}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-slate-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= HOW IT WORKS (System Overview) ================= */}
      <section id="how-it-works" className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-rose-300/90 text-sm font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-4 h-4" />
              System Overview
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              A Unified Healthcare Growth Engine
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mt-4">
              AR Medico brings visibility, reputation, and conversion tracking into one integrated growth workflow —
              designed for clinics and hospitals.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Target,
                title: "Visibility",
                desc: "Improve discoverability across local search and location intent queries.",
              },
              {
                icon: ShieldCheck,
                title: "Trust",
                desc: "Build a consistent review & reputation process to increase patient confidence.",
              },
              {
                icon: BarChart3,
                title: "Conversion",
                desc: "Track inquiries → appointments with measurable performance insights.",
              },
            ].map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className={`rounded-2xl p-6 border border-slate-800 bg-slate-950/30 ${cardHover}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white/90" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{p.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
{/* ================= TYPICAL OUTCOMES ================= */}
<section className="py-16 px-4 bg-white border-b border-slate-200">
  <div className="max-w-7xl mx-auto">

    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
      <div>
        <h3 className="text-2xl font-semibold text-slate-900">
          Typical Outcomes
        </h3>
        <p className="text-slate-600 mt-1">
          Benchmarks vary by specialty, location, and baseline presence.
        </p>
      </div>
      <div className="text-xs text-slate-500">
        *Illustrative ranges • Use your dashboard for actual performance
      </div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {[
        { label: "Increase in Discovery", value: "↑ 30–120%" },
        { label: "Lower Cost per Inquiry", value: "↓ 15–45%" },
        { label: "Better Conversion", value: "↑ 1.5–3x" },
        { label: "Reviews Growth", value: "↑ 2–5x" },
      ].map((stat, idx) => (
        <div
          key={idx}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:shadow-md transition-all duration-300"
        >
          <div className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
            {stat.value}
          </div>
          <div className="text-slate-600 uppercase tracking-wide text-xs font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


{/* ================= WHAT'S INCLUDED ================= */}
<section className="py-24 px-4 bg-slate-50">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">
      <h2 className="text-4xl font-semibold text-slate-900 mb-4">
        What’s Included
      </h2>
      <p className="text-slate-600 max-w-3xl mx-auto text-lg">
        These modules work together inside AR Medico — ensuring your growth
        activities connect directly with appointments, patients, and reporting.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          title: "Local SEO & Profile Optimization",
          desc: "Structured tasks and checks to improve local visibility and profile completeness.",
          tags: ["Maps", "Local search", "Listings"],
        },
        {
          title: "Reputation & Reviews Workflow",
          desc: "Automated prompts and response workflows to build trust consistently.",
          tags: ["Trust", "5-star process", "Responses"],
        },
        {
          title: "Campaign Setup & Tracking",
          desc: "Plan campaigns ethically and track inquiries with clear attribution.",
          tags: ["Ethical", "Attribution", "ROI"],
        },
        {
          title: "Analytics & Performance Insights",
          desc: "Understand discovery → inquiry → appointment metrics in one dashboard.",
          tags: ["KPIs", "Trends", "Reports"],
        },
        {
          title: "Patient Education Content",
          desc: "Guided healthcare content system to strengthen authority and retention.",
          tags: ["Content", "Education", "Brand"],
        },
        {
          title: "Compliance-Safe Messaging",
          desc: "Healthcare-first guardrails to maintain credibility and reduce risky claims.",
          tags: ["Safe", "Compliant", "Credible"],
        },
      ].map((module, idx) => (
        <div
          key={idx}
          className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
              <Megaphone className="w-6 h-6 text-slate-700" />
            </div>

            <span className="text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full">
              Module
            </span>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            {module.title}
          </h3>

          <p className="text-slate-600 leading-relaxed mb-5">
            {module.desc}
          </p>

          <div className="flex flex-wrap gap-2">
            {module.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

      {/* ================= INTEGRATION ================= */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Fully Integrated with Your Practice
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mt-4">
              Growth insights connect directly with appointments, patient records, and reporting — so decisions are
              based on real outcomes, not guesses.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Link2,
                title: "Appointments",
                desc: "Track how discovery turns into booked visits over time.",
              },
              {
                icon: Workflow,
                title: "Patient Records",
                desc: "Understand retention and repeat visits linked to trust-building activities.",
              },
              {
                icon: BarChart3,
                title: "Reports",
                desc: "Get clear weekly/monthly snapshots with actionable recommendations.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className={`rounded-2xl p-6 border border-slate-800 bg-slate-950/30 ${cardHover}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white/90" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= PROCESS (Instead of "Hard Sell Funnel") ================= */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                How Growth Happens (Step-by-step)
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                Healthcare growth is built on clarity, trust, and measurable improvements. This is the workflow we
                follow inside the module.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "1) Visibility Setup",
                    desc: "Profiles, listings, and local intent coverage get structured and optimized.",
                  },
                  {
                    title: "2) Trust Building",
                    desc: "Review workflows and patient education content improve credibility.",
                  },
                  {
                    title: "3) Measurement & Improvement",
                    desc: "Insights show what’s working so you can scale safely and reduce waste.",
                  },
                ].map((s, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-rose-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">{s.title}</h4>
                      <p className="text-slate-600 mt-1 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-2xl"
            >
              <div className="absolute inset-0">
                <img
                  src="/herobg.jpg"
                  alt="Module Preview"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/85 to-rose-900/30" />
              </div>

              <div className="relative p-10 md:p-12 text-white">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase bg-white/10 border border-white/15 px-3 py-1 rounded-full">
                  <BarChart3 className="w-4 h-4" />
                  Performance Dashboard
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold mt-5 mb-3">
                  Data-driven decisions, not guesswork.
                </h3>
                <p className="text-white/85 leading-relaxed max-w-md">
                  Track discovery, inquiries, and appointments with clean metrics. Iterate safely with
                  healthcare-first guardrails.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SOFT CTA (Feature Page Appropriate) ================= */}
      <section className="py-20 px-4 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
           Start Building Predictable Patient Growth
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
          Activate this module inside your AR Medico dashboard and configure it for your specialty and city.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-semibold transition shadow-lg shadow-rose-600/20">
              Request Demo
            </button>
            <button className="px-8 py-3 rounded-full border border-slate-300 hover:border-slate-900 text-slate-900 font-semibold transition">
              View Plans
            </button>
          </div>

          <div className="mt-6 text-xs text-slate-500">
            No aggressive marketing claims • Healthcare-first messaging • Transparent reporting
          </div>
        </div>
      </section>
    </div>
  );
}