'use client';

import React, { useState } from 'react'; // Added useState for FAQ
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Plus, Minus } from 'lucide-react'; // Added for FAQ UI

const devices = [
  {
    id: 1,
    name: 'Smart Sensor Hub',
    description: 'Centralize your data collection with our high-efficiency hub.',
    price: '$199',
    image: '/Smart Sensor Hub.png',
  },
  {
    id: 2,
    name: 'Industrial Monitor',
    description: 'Real-time analytics and tracking for heavy machinery.',
    price: '$299',
    image: '/Industrial Monitor.png',
  },
  {
    id: 3,
    name: 'Climate Tracker',
    description: 'Precision temperature and humidity sensing for agriculture.',
    price: '$149',
    image: '/Climate Tracker.png',
  },
  {
    id: 4,
    name: 'Security Gateway',
    description: 'Enterprise-grade encryption for all edge devices.',
    price: '$399',
    image: '/Security Gateway.png',
  },
  {
    id: 5,
    name: 'Energy Meter',
    description: 'Track consumption patterns and optimize usage.',
    price: '$89',
    image: '/Energy Meter.png',
  },
  {
    id: 6,
    name: 'Asset Tag',
    description: 'GPS and Bluetooth enabled tracking for logistics.',
    price: '$49',
    image: '/Asset Tag.png',
  },
];

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function IotDevicesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // --- FAQ DATA ---
  const faqs = [
    {
      q: "How long is the battery life of these IoT devices?",
      a: "Most of our edge devices, including Asset Tags and Climate Trackers, are optimized for ultra-low power consumption and offer a battery life of up to 5 years depending on the ping interval."
    },
    {
      q: "Is the data transmitted by the devices secure?",
      a: "Yes, all data is protected using AES-256 bank-grade encryption at the hardware level. Our Security Gateway ensures that data remains encrypted from the moment it is collected until it reaches your dashboard."
    },
    {
      q: "Can these devices integrate with existing hospital management systems?",
      a: "Absolutely. Our IoT ecosystem is designed with open APIs and MQTT support, making it easy to sync real-time patient vitals or asset locations with your existing EMR or hospital software."
    },
    {
      q: "Do the devices work in areas with poor internet connectivity?",
      a: "Yes. Our devices support local data logging and use LoRaWAN or NB-IoT technology to transmit data over long distances with minimal connectivity. Data is locally cached and synced once a connection is stable."
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

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      {/* SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[80vh] w-full flex items-center justify-center text-white overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/herobg.jpg"
            alt="IoT Background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Connected Intelligence
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-2xl mb-10 text-gray-200 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Seamlessly bridge the physical and digital worlds with our next-generation IoT ecosystem.
          </motion.p>
          
          <motion.button 
            className="bg-blue-600 text-white font-semibold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-blue-500/50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, backgroundColor: "#2563EB" }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Catalog
          </motion.button>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="relative h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/iot 2nd section.png"
              alt="Secure IoT Hardware & Connectivity"
              fill
              priority
              className="object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-semibold text-lg tracking-wide">Smart IoT Integration</p>
              <p className="text-sm opacity-80">Secure • Reliable • AI-Ready</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
              Engineered for <span className="text-blue-600">Mission-Critical Performance</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 mb-6 text-lg leading-relaxed">
              Our hardware doesn’t just collect data — it drives mission-critical decisions.
            </motion.p>
            <motion.ul variants={fadeInUp} className="space-y-4">
              {['Real-time Sync', '5-Year Battery Life', 'Edge-Computing Ready'].map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-700 font-medium">
                  <span className="w-6 h-6 bg-blue-600/10 text-blue-600 rounded-full mr-3 flex items-center justify-center text-xs">✓</span>
                  {item}
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

   {/* --- CATALOG GRID --- */}
      <section className="bg-white py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Device Catalog</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {devices.map((device) => (
              <motion.div 
                key={device.id} 
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={device.image}
                    alt={device.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-blue-600 shadow-sm">
                    {device.price}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {device.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {device.description}
                  </p>
                  <button className="w-full py-3 border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- FAQ SECTION (NEW) --- */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">IoT & Connectivity FAQs</h2>
            <p className="text-gray-500 mt-2">Everything you need to know about our smart hardware.</p>
          </motion.div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`border rounded-xl transition-all duration-300 ${
                  openFaqIndex === idx ? "border-blue-500 shadow-md bg-blue-50/20" : "border-gray-200 hover:border-blue-300 bg-white"
                }`}
              >
                <button 
                  onClick={() => toggleFaq(idx)} 
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg flex items-center gap-3 ${
                    openFaqIndex === idx ? "text-blue-700" : "text-gray-800"
                  }`}>
                    <span className="text-blue-500 font-serif italic">Q.</span> {faq.q}
                  </span>
                  <span className={`p-1 rounded-full border transition-all ${
                    openFaqIndex === idx ? "rotate-180 bg-blue-600 text-white border-blue-600" : "bg-gray-100 text-gray-500 border-gray-200"
                  }`}>
                    {openFaqIndex === idx ? <Minus className="w-5 h-5"/> : <Plus className="w-5 h-5"/>}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaqIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 pt-0 pl-11 text-gray-600 leading-relaxed border-t border-gray-50 mt-2 pt-4">
                    {faq.a}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}