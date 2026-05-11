"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is RBC24?",
    answer: "RBC24 is India's leading healthcare hiring ecosystem, connecting medical professionals with verified hospitals, clinics, and organizations through web and mobile platforms.",
  },
  {
    question: "Is RBC24 only for healthcare jobs?",
    answer: "Yes, we are a specialized platform dedicated exclusively to the healthcare sector, ensuring that both candidates and recruiters find perfectly matched opportunities.",
  },
  {
    question: "Can hospitals post jobs?",
    answer: "Absolutely. Hospitals and clinics can register as recruiters to post jobs, search candidate databases, and manage their entire hiring pipeline.",
  },
  {
    question: "Is there a mobile app?",
    answer: "Yes, RBC24 offers a comprehensive mobile app for both Android and iOS, allowing you to manage your job search or hiring process on the go.",
  },
  {
    question: "Can doctors apply from mobile?",
    answer: "Yes, doctors can create their profile, search for jobs, and apply directly through the RBC24 mobile app with just a few taps.",
  },
  {
    question: "Can recruiters manage hiring from mobile?",
    answer: "Yes, our mobile app provides recruiters with real-time notifications, applicant tracking, and candidate management tools.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-black text-foreground mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about the RBC24 ecosystem.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm transition-smooth">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="text-lg font-bold text-foreground">{faq.question}</span>
                {openIndex === idx ? (
                  <Minus className="w-5 h-5 text-primary" />
                ) : (
                  <Plus className="w-5 h-5 text-muted-foreground" />
                )}
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed animate-fade-up">
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
