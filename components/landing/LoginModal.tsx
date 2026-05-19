"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, User, X, ArrowRight, ShieldCheck, Stethoscope } from "lucide-react";
import { useEffect, useState } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const accountTypes = [
    {
      title: "Recruiter",
      description: "Manage hiring, applicants, and recruitment workflows.",
      icon: Briefcase,
      href: "https://recruiter.rbc24.com/",
      color: "orange",
    },
    {
      title: "Job Seeker",
      description: "Find verified healthcare jobs and manage applications.",
      icon: Stethoscope,
      href: "https://jobs.rbc24.com/",
      color: "blue",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 modal-backdrop-blur"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col sm:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors z-10 text-slate-400 hover:text-slate-600"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Side: Visual/Context (Desktop Only) */}
            <div className="hidden sm:flex flex-col justify-between w-1/3 bg-slate-50 p-8 border-r border-slate-100">
              <div>
                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200 mb-6">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Welcome Back</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Join thousands of healthcare professionals and recruiters on RBC24.
                </p>
              </div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                Secure Login Platform
              </div>
            </div>

            {/* Right Side: Selection Cards */}
            <div className="flex-1 p-8 sm:p-10">
              <div className="mb-8">
                <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight text-balance">
                  Choose Account Type
                </h2>
                <p className="text-slate-500 text-sm">
                  Select how you would like to continue to your dashboard.
                </p>
              </div>

              <div className="grid gap-4">
                {accountTypes.map((type) => (
                  <motion.a
                    key={type.title}
                    href={type.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex items-center gap-4 p-5 rounded-2xl border border-slate-100 bg-white login-card-shadow hover:login-card-hover shine-effect transition-all duration-300"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-50/30 group-hover:to-transparent transition-all duration-500" />
                    
                    <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      type.title === "Recruiter" ? "bg-orange-50 text-orange-600 group-hover:bg-orange-500 group-hover:text-white" : "bg-blue-50 text-blue-600 group-hover:bg-blue-500 group-hover:text-white"
                    }`}>
                      <type.icon className="w-7 h-7" />
                    </div>

                    <div className="relative flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-slate-900 text-lg group-hover:text-orange-600 transition-colors">
                          {type.title}
                        </h4>
                        <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-orange-500 transform group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                        {type.description}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-50 flex items-center gap-2 text-slate-400">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-medium">End-to-end encrypted login experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
