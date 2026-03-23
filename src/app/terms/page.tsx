export const metadata = {
  title: "Terms of Use | ARMedico",
  description:
    "Read the Terms of Use for ARMedico. Understand our medical disclaimer, appointment policies, user responsibilities, and legal terms.",
};

export default function TermsOfUsePage() {
  return (
    <main className="bg-slate-50 py-16 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-10">
          
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              Terms of Use
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Last Updated: February 4, 2026
            </p>
            <hr className="mt-6 border-slate-200" />
          </header>

          {/* 1. Medical Disclaimer (Highlighted) */}
          <div className="mb-10 rounded-xl border border-amber-200 bg-amber-50 p-5 md:p-6">
            <div className="flex items-start gap-4">
              <span className="text-2xl">⚠️</span>
              <div>
                <h2 className="font-bold text-amber-800 uppercase tracking-wide text-sm">
                  Important: Medical Disclaimer
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-amber-900">
                  ARMedico is a technology intermediary and appointment booking
                  facilitator. We are <strong>NOT</strong> a hospital, medical
                  clinic, or healthcare provider. The doctors listed on this
                  platform are independent practitioners. ARMedico does not
                  provide medical advice and is not responsible for any
                  diagnosis, treatment decisions, medical errors, or negligence
                  by healthcare providers.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-amber-900 font-medium italic">
                  In case of a medical emergency, do not use this platform.
                  Please visit the nearest hospital or emergency facility
                  immediately.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                1. Acceptance of Terms
              </h2>
              <p className="text-slate-700 leading-relaxed">
                By accessing, browsing, or using the ARMedico website, mobile
                application, or services, you agree to be bound by these Terms of
                Use. These terms form a legally binding agreement between you
                (&quot;User&quot;) and ARMedico.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                2. Appointment Booking & Fees
              </h2>
              <p className="text-slate-700 leading-relaxed">
                ARMedico enables users to search for healthcare providers and book
                appointments. Consultation fees, cancellation policies, and refund
                terms are determined solely by the respective healthcare provider
                or clinic. ARMedico does not control, collect, or guarantee pricing unless 
                explicitly stated.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                3. User Responsibilities
              </h2>
              <p className="text-slate-700 leading-relaxed">
                You agree to provide accurate and complete information while using
                ARMedico. You are solely responsible for maintaining the
                confidentiality of your account credentials. Any unauthorized use of 
                your account must be reported to us immediately.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                4. Termination of Access
              </h2>
              <p className="text-slate-700 leading-relaxed">
                We reserve the right to suspend or terminate your access to our services 
                at our sole discretion, without notice, for conduct that we believe 
                violates these Terms of Use, is harmful to other users, or violates any law.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                5. Limitation of Liability
              </h2>
              <p className="text-slate-700 leading-relaxed">
                To the maximum extent permitted by law, ARMedico shall not be liable 
                for any direct, indirect, incidental, or consequential damages resulting 
                from your use or inability to use the platform or the services provided 
                by third-party healthcare professionals.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                6. Severability & Entire Agreement
              </h2>
              <p className="text-slate-700 leading-relaxed">
                If any provision of these Terms is found to be invalid by a court of law, 
                the remaining provisions will remain in full force and effect. These 
                Terms constitute the entire agreement between you and ARMedico regarding 
                the use of the platform.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                7. Governing Law & Jurisdiction
              </h2>
              <p className="text-slate-700 leading-relaxed">
                These Terms shall be governed by the laws of India. Any disputes arising 
                out of or in connection with these terms shall be subject to the 
                exclusive jurisdiction of the courts located in 
                <strong> Mumbai</strong>, India.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                8. Contact Us
              </h2>
              <p className="text-slate-700 leading-relaxed">
                If you have any questions or concerns regarding these Terms, 
                please reach out to us:
              </p>
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-2">
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">Support:</span>{" "}
                  <a 
                    href="mailto:armedico.official@gmail.com" 
                    className="text-blue-600 hover:underline font-medium"
                  >
                    armedico.official@gmail.com
                  </a>
                </p>
              </div>
            </section>
          </div>

          {/* Final Agreement Footer */}
          <footer className="mt-16 pt-8 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-500 italic max-w-2xl mx-auto">
              By using ARMedico, you acknowledge that you have read, understood, 
              and agree to be bound by these Terms of Use.
            </p>
            <p className="mt-6 text-xs text-slate-400 uppercase tracking-widest">
              © {new Date().getFullYear()} ARMedico. All rights reserved.
            </p>
          </footer>

        </div>
      </div>
    </main>
  );
}