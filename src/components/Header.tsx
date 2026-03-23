"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, User, ChevronDown, Sparkles, Activity, BarChart3 } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); 
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false); // New State for Features
  const pathname = usePathname();

  const LOGIN_URL = "https://dashboard.armedico.com";
  const SIGNUP_URL = "https://dashboard.armedico.com/signup";

  // Note: "Features" ko yahan se hata kar alag handle kiya hai
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  // --- Features Menu Data Structure ---
  const featureCategories = [
    {
      title: "Clinical & Admin",
      icon: <Activity className="w-4 h-4 text-teal-600"/>,
      items: [
        { name: "Smart Prescription", href: "/features/prescription" },
        { name: "Patient Records", href: "/features/patient-records" },
        { name: "Admin Dashboard", href: "/features/admin-dashboard" },
        { name: "Patient Portal", href: "/features/patient-portal" },
      ]
    },
    {
      title: "Future Tech",
      icon: <Sparkles className="w-4 h-4 text-purple-600"/>,
      items: [
        { name: "Offline Mode & AI", href: "/features/offline-ai" },
        { name: "IoT & Wearables", href: "/features/iot-devices" },
        { name: "AR/VR Surgery", href: "/features/ar-vr" },
        { name: "Global SaaS Export", href: "/features/global-saas" },
      ]
    },
    {
      title: "Growth & Business",
      icon: <BarChart3 className="w-4 h-4 text-blue-600"/>,
      items: [
        { name: "Analytics & Reports", href: "/features/analytics" },
        { name: "Billing & Finance", href: "/features/billing" },
        { name: "Digital Marketing", href: "/features/digital-marketing" },
        { name: "Education Hub", href: "/features/education" },
      ]
    }
  ];

  const serviceLinks = [
    { name: "Healthcare Provider", href: "/services/healthcare-provider" },
    { name: "Order Medicine", href: "/services/order-medicine" },
  ];

  return (
    <header className="w-full bg-slate-50 border-b border-gray-200 relative z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">

          {/* 1. Logo Section */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/logo.png"
                alt="ARmedico"
                width={300}
                height={120}
                className="h-20 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* 2. Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${pathname === link.href ? "text-teal-600 font-bold" : "text-gray-600 hover:text-teal-600"}`}
              >
                {link.name}
              </Link>
            ))}

            {/* === FEATURES DROPDOWN (NEW) === */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsFeaturesOpen(true)}
              onMouseLeave={() => setIsFeaturesOpen(false)}
            >
              <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${pathname.startsWith('/features') ? "text-teal-600 font-bold" : "text-gray-600 hover:text-teal-600"}`}>
                Features
                <ChevronDown className={`w-4 h-4 transition-transform ${isFeaturesOpen ? "rotate-180" : ""}`} />
              </button>

              {isFeaturesOpen && (
                <div className="absolute top-full -left-16 pt-4 w-[600px] animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white border border-gray-100 shadow-2xl rounded-xl p-6 grid grid-cols-3 gap-6">
                    {featureCategories.map((category, idx) => (
                      <div key={idx} className="space-y-3">
                        <h4 className="font-bold text-xs uppercase tracking-wider text-gray-400 flex items-center gap-2">
                          {category.icon} {category.title}
                        </h4>
                        <div className="space-y-1">
                          {category.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-2 py-1.5 text-sm text-gray-700 hover:text-teal-600 hover:bg-teal-50/50 rounded-md transition-all font-medium"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    {/* View All Link at Bottom */}
                    <div className="col-span-3 border-t border-gray-100 pt-3 mt-1 text-center">
                        <Link href="/features" className="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center justify-center gap-1">
                            View All Features Overview <ChevronRight className="w-3 h-3"/>
                        </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${pathname.startsWith('/services') ? "text-teal-600 font-bold" : "text-gray-600 hover:text-teal-600"}`}>
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full -left-4 pt-4 w-56 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white border border-gray-100 shadow-xl rounded-xl p-2">
                    {serviceLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact" className={`text-sm font-medium transition-colors ${pathname === "/contact" ? "text-teal-600 font-bold" : "text-gray-600 hover:text-teal-600"}`}>
              Contact
            </Link>
          </nav>

          {/* 3. Auth Buttons */}
          <div className="flex-1 flex items-center justify-end">
            <div className="hidden lg:flex items-center gap-4">
              <a href={LOGIN_URL} className="text-sm font-semibold text-gray-700 hover:text-teal-600 transition-colors flex items-center gap-2">
                <User className="w-4 h-4" /> Log in
              </a>
              <a href={SIGNUP_URL} className="flex items-center gap-2 bg-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-teal-600/20 hover:bg-teal-700 hover:shadow-xl transition-all">
                Get Started <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-gray-600 hover:text-teal-600 rounded-md ml-auto">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0 z-50 rounded-b-2xl overflow-y-auto max-h-[90vh]">
          <div className="flex flex-col p-4 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className={`text-base font-medium px-4 py-3 rounded-lg ${pathname === link.href ? "text-teal-600 bg-teal-50 font-bold" : "text-gray-700"}`} onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </Link>
            ))}

            {/* Mobile Features Section */}
             <div className="px-4 py-3 bg-slate-50 rounded-lg my-2">
              <p className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-3">Explore Features</p>
              {featureCategories.map((category, idx) => (
                  <div key={idx} className="mb-4 last:mb-0">
                      <h5 className="text-xs font-semibold text-gray-400 mb-2 flex items-center gap-2">{category.icon} {category.title}</h5>
                      <div className="pl-2 border-l-2 border-gray-200 space-y-2">
                          {category.items.map((item) => (
                              <Link 
                                key={item.name} 
                                href={item.href} 
                                className="block text-sm text-gray-700 hover:text-teal-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                          ))}
                      </div>
                  </div>
              ))}
              <Link href="/features" className="block text-center text-xs font-bold text-teal-600 mt-2 py-2 border border-teal-200 rounded-md bg-white">View Main Feature Page</Link>
            </div>
            
            {/* Mobile Services Section */}
            <div className="px-4 py-2">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Our Services</p>
              {serviceLinks.map((subLink) => (
                <Link key={subLink.name} href={subLink.href} className="block py-3 text-gray-700 border-l-2 border-transparent hover:border-teal-600 hover:pl-2 transition-all" onClick={() => setIsMobileMenuOpen(false)}>
                  {subLink.name}
                </Link>
              ))}
            </div>

            <Link href="/contact" className="text-base font-medium px-4 py-3 rounded-lg text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>

            <div className="border-t border-gray-100 pt-4 space-y-3">
              <a href={LOGIN_URL} className="block w-full text-center py-3 text-gray-700 font-bold border border-gray-200 rounded-lg">Log in</a>
              <a href={SIGNUP_URL} className="block w-full text-center py-3 bg-teal-600 text-white font-bold rounded-lg shadow-md">Get Started</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;