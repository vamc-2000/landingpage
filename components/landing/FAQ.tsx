"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is RBC24?",
    answer: "RBC24 is India's leading healthcare hiring ecosystem, connecting medical professionals with verified hospitals and clinics through specialized web and mobile platforms.",
  },
  {
    question: "How do I verify my profile?",
    answer: "Verification is simple. Once you upload your medical credentials and certifications, our team reviews them within 24-48 hours to grant you the 'Verified' status.",
  },
  {
    question: "How do hospitals post jobs?",
    answer: "Hospitals can register on the Recruiter portal, choose a plan, and start posting clinical roles immediately. You can also search our verified candidate database.",
  },
  {
    question: "Is there a mobile app available?",
    answer: "Yes, RBC24 is available on both Google Play and the App Store, offering real-time alerts and easy application management on the go.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section mb-6">Frequently Asked Questions</h2>
          <p className="text-body max-w-3xl mx-auto">
            Everything you need to know about the RBC24 ecosystem.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-[1.5rem] border border-border overflow-hidden shadow-sm hover:shadow-xl transition-smooth">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 lg:p-8 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="text-card pr-8">{faq.question}</span>
                {openIndex === idx ? (
                  <Minus className="w-5 h-5 text-primary" />
                ) : (
                  <Plus className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
              
              {openIndex === idx && (
                <div className="px-6 lg:px-8 pb-6 lg:pb-8 text-body animate-fade-up">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
