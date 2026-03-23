import React from "react";
import { Shield, Lock, Eye, FileText, Mail } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | ARmedico",
  description:
    "Read how ARmedico collects, uses, and protects your personal and medical data while using our healthcare platform.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-slate-800 font-sans">
      <h1 className="text-3xl md:text-4xl font-semibold mb-2">
        Privacy Policy
      </h1>
      <p className="text-sm text-slate-500 mb-10">
        Last Updated: February 4, 2026
      </p>

      {/* 1. Introduction */}
      <section className="space-y-4 mb-10">
        <h2 className="text-xl font-semibold">1. Introduction</h2>
        <p>
          ARmedico (“we”, “our”, or “us”) is a healthcare technology platform
          that enables users to search for doctors, clinics, and hospitals,
          book appointments, and interact with healthcare providers digitally.
        </p>
        <p>
          We understand that medical and personal information is highly
          sensitive. This Privacy Policy explains how we collect, use, store,
          and protect your information when you use our website, mobile
          applications, or related services (collectively, the “Platform”).
        </p>
        <p>
          By accessing or using ARmedico, you agree to the practices described
          in this Privacy Policy. If you do not agree, please discontinue use
          of the Platform.
        </p>
      </section>

      {/* 2. Information We Collect */}
      <section className="space-y-4 mb-10">
        <h2 className="text-xl font-semibold">2. Information We Collect</h2>

        <p className="font-medium">a) Personal Identity Information</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Gender and age</li>
        </ul>

        <p className="font-medium mt-4">b) Medical & Appointment Information</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Doctor / clinic / hospital selected</li>
          <li>Appointment date and time</li>
          <li>Reason for visit and symptoms (only if voluntarily provided)</li>
        </ul>

        <p className="font-medium mt-4">
          c) Healthcare Provider Information
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Name, qualifications, specialization</li>
          <li>Clinic / hospital details</li>
          <li>Professional contact information</li>
        </ul>

        <p className="font-medium mt-4">d) User-Generated Content</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Reviews, ratings, feedback, or comments</li>
        </ul>

        <p className="font-medium mt-4">e) Device & Usage Information</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>IP address</li>
          <li>Browser type and operating system</li>
          <li>Pages visited and interaction data</li>
        </ul>
      </section>

      {/* 3. How We Use Information */}
      <section className="space-y-4 mb-10">
        <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Appointment Management:</strong> Sharing required patient
            details with the selected healthcare provider.
          </li>
          <li>
            <strong>Communication:</strong> Sending confirmations, reminders,
            cancellations, and service updates via SMS, WhatsApp, or Email.
          </li>
          <li>
            <strong>Platform Improvement:</strong> Using anonymized analytics
            to improve services and user experience.
          </li>
          <li>
            <strong>Security & Fraud Prevention:</strong> Protecting the
            platform from misuse or unauthorized access.
          </li>
        </ul>
      </section>

      {/* 4. Data Sharing */}
      <section className="space-y-4 mb-10">
        <h2 className="text-xl font-semibold">4. Data Sharing & Third Parties</h2>
        <p>We do not sell your personal or medical data.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Healthcare Providers:</strong> Only necessary details are
            shared with the doctor, clinic, or hospital you book with.
          </li>
          <li>
            <strong>Service Providers:</strong> Trusted vendors (SMS, Email,
            cloud services) strictly for platform operation.
          </li>
          <li>
            <strong>Legal Requirements:</strong> When disclosure is required
            by law or government authorities.
          </li>
        </ul>
      </section>

      {/* 5. Reviews */}
      <section className="space-y-4 mb-10">
        <h2 className="text-xl font-semibold">5. Reviews & Public Content</h2>
        <p>
          Reviews and ratings may be publicly visible. Users should not share
          sensitive personal or medical information in public reviews.
        </p>
        <p>
          ARmedico reserves the right to moderate or remove content that
          violations platform guidelines or applicable laws.
        </p>
      </section>

      {/* 6. Cookies */}
      <section className="space-y-4 mb-10">
        <h2 className="text-xl font-semibold">6. Cookies & Analytics</h2>
        <p>
          We may use cookies and similar technologies to improve functionality,
          analyze usage, and enhance user experience. Disabling cookies may
          affect certain features.
        </p>
      </section>

      {/* 7. Storage */}
      <section className="space-y-4 mb-10">
        <h2 className="text-xl font-semibold">7. Data Storage & Retention</h2>
        <p>
          Data is stored on secure servers with restricted access. Information
          is retained only as long as required for service delivery or legal
          compliance.
        </p>
      </section>

      {/* 8. Security */}
      <section className="space-y-4 mb-10">
        <h2 className="text-xl font-semibold">8. Data Security</h2>
        <p>
          We use SSL encryption, secure infrastructure, and role-based access
          controls. However, no system is 100% secure, and users are
          responsible for keeping login credentials confidential.
        </p>
      </section>

      {/* 9. Children */}
      <section className="space-y-4 mb-10">
        <h2 className="text-xl font-semibold">9. Children’s Privacy</h2>
        <p>
          Appointments for minors must be booked by a parent or legal guardian.
          We do not knowingly collect children’s data without consent.
        </p>
      </section>

      {/* 10. Rights */}
      <section className="space-y-4 mb-10">
        <h2 className="text-xl font-semibold">10. Your Rights</h2>
        <p>
          You may request access, correction, or deletion of your personal
          data. Some records may be retained if legally required.
        </p>
      </section>

      {/* 11. Changes */}
      <section className="space-y-4 mb-10">
        <h2 className="text-xl font-semibold">11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Continued use of the
          Platform indicates acceptance of the updated policy.
        </p>
      </section>

      {/* 12. Contact */}
      <section className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-4">
        <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-lg">
                <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-slate-900">Support & Contact</h2>
        </div>
        <p className="text-slate-600">
          For any privacy-related questions, data requests, or concerns regarding your information, 
          please reach out to our support team at{" "}
          <a 
            href="mailto:armedico.official@gmail.com" 
            className="text-blue-600 hover:underline font-medium"
          >
            armedico.official@gmail.com
          </a>.
        </p>
      </section>
    </main>
  );
}