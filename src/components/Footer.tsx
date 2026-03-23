"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Column 1: Brand & Socials */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="ARmedico Logo"
                width={300} 
                height={100}
                className="h-24 w-auto object-contain" 
                priority
              />
            </Link>

            <p className="text-slate-500 text-sm leading-relaxed">
              Transforming healthcare with smart technology. A unified ecosystem for hospitals, clinics, and patients.
            </p>
            
            <div className="flex gap-4 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="bg-white p-2.5 rounded-full text-slate-500 hover:bg-teal-500 hover:text-white transition-all duration-300 shadow-sm border border-slate-200 hover:shadow-teal-500/20"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h3 className="font-bold text-slate-900 text-lg mb-6">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-slate-500 hover:text-teal-600 hover:translate-x-1 transition-all flex items-center gap-1">
                  <ChevronRight className="w-3 h-3" /> About Us
                </Link>
              </li>
              {/* Added Features Link */}
              <li>
                <Link href="/features" className="text-slate-500 hover:text-teal-600 hover:translate-x-1 transition-all flex items-center gap-1">
                  <ChevronRight className="w-3 h-3" /> Software Features
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-500 hover:text-teal-600 hover:translate-x-1 transition-all flex items-center gap-1">
                  <ChevronRight className="w-3 h-3" /> Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-500 hover:text-teal-600 hover:translate-x-1 transition-all flex items-center gap-1">
                  <ChevronRight className="w-3 h-3" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services & Solutions */}
          <div>
            <h3 className="font-bold text-slate-900 text-lg mb-6">Platform</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services" className="text-slate-500 hover:text-teal-600 hover:translate-x-1 transition-all flex items-center gap-1">
                  <ChevronRight className="w-3 h-3" /> Find Doctors
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-500 hover:text-teal-600 hover:translate-x-1 transition-all flex items-center gap-1">
                  <ChevronRight className="w-3 h-3" /> Book Appointments
                </Link>
              </li>
              <li>
                <span className="text-slate-400 cursor-not-allowed flex items-center gap-2 pl-4">
                  Patient App
                  <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-medium">SOON</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="font-bold text-slate-900 text-lg mb-6">Get in Touch</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3 text-slate-500">
                <MapPin className="w-5 h-5 mt-0.5 text-teal-600 flex-shrink-0" />
                {/* Updated Address with Clickable Google Maps Link */}
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Laxmi+Park+Kankiya+Mira+Road+Mumbai+401107" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-teal-600 transition-colors"
                >
                  Laxmi Park, Kankiya,<br /> Mira Road(E) Mumbai-401107
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-500">
                <Mail className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <a href="mailto:armedico.official@gmail.com" className="hover:text-teal-600 transition-colors">armedico.official@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-slate-500">
                <Phone className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <a href="tel:+919234041819" className="hover:text-teal-600 transition-colors">+91 92340 41819</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} ARmedico. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <Link href="/privacy" className="text-slate-400 hover:text-teal-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-400 hover:text-teal-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;