"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  // Button 1 (Find Jobs): Starts White (Text: Primary Orange), Hover: Secondary Teal, Text: White
  const button1Variants = {
    hover: {
      y: -5,
      scale: 1.04,
      backgroundColor: "#0D9488", // Secondary Teal
      color: "#FFFFFF",
      boxShadow: "0 20px 30px -5px rgba(13, 148, 136, 0.35)",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 18
      }
    },
    tap: {
      scale: 0.97,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 15
      }
    }
  };

  // Button 2 (Start Hiring): Starts border-2 border-white/20, Hover: bg-primary (Orange), border-primary
  const button2Variants = {
    hover: {
      y: -5,
      scale: 1.04,
      backgroundColor: "#EA580C", // Primary Orange
      borderColor: "#EA580C",
      color: "#FFFFFF",
      boxShadow: "0 20px 30px -5px rgba(234, 88, 12, 0.35)",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 18
      }
    },
    tap: {
      scale: 0.97,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 15
      }
    }
  };

  // Button 3 (Download App): Starts Dark Slate, Hover: Secondary Teal
  const button3Variants = {
    hover: {
      y: -5,
      scale: 1.04,
      backgroundColor: "#0D9488", // Secondary Teal
      color: "#FFFFFF",
      boxShadow: "0 20px 30px -5px rgba(13, 148, 136, 0.35)",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 18
      }
    },
    tap: {
      scale: 0.97,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 15
      }
    }
  };

  // Rightward slide variant for navigation/action arrows
  const arrowVariants = {
    hover: {
      x: 5,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 12
      }
    }
  };

  // Downward slide variant for the download icon (visually represents downloading)
  const downloadVariants = {
    hover: {
      y: 3.5,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 12
      }
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white bg-ambient-glow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[3rem] p-8 lg:p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <h2 className="text-fluid-h2 font-black mb-4 relative z-10 leading-[1.15] tracking-tightest text-balance">
            Start Your Healthcare <br /> Journey Today
          </h2>
          <p className="text-lg lg:text-xl text-white/80 mb-6 max-w-3xl mx-auto relative z-10">
            Join thousands of medical professionals and hospitals already using RBC24 to transform healthcare recruitment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            {/* Button 1: Find Jobs */}
            <motion.a
              href="https://jobs.rbc24.com/jobs"
              target="_blank"
              rel="noopener noreferrer"
              variants={button1Variants}
              initial={false}
              whileHover="hover"
              whileTap="tap"
              className="group w-full sm:w-auto px-10 py-4 rounded-2xl bg-white text-primary font-black text-lg flex items-center justify-center gap-3 transition-colors duration-200 text-center will-change-transform focus:outline-none focus:ring-4 focus:ring-white/20 select-none"
            >
              <span>Find Jobs</span>
              <motion.span variants={arrowVariants} className="flex items-center shrink-0">
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </motion.a>

            {/* Button 2: Start Hiring */}
            <motion.a
              href="https://recruiter.rbc24.com/"
              target="_blank"
              rel="noopener noreferrer"
              variants={button2Variants}
              initial={false}
              whileHover="hover"
              whileTap="tap"
              className="group w-full sm:w-auto px-10 py-4 rounded-2xl bg-primary-foreground/10 text-white border-2 border-white/20 font-black text-lg flex items-center justify-center gap-3 transition-colors duration-200 text-center will-change-transform focus:outline-none focus:ring-4 focus:ring-white/15 select-none"
            >
              <span>Start Hiring</span>
              <motion.span variants={arrowVariants} className="flex items-center shrink-0">
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </motion.a>

            {/* Button 3: Download App */}
            <motion.a
              href="#mobile-app"
              variants={button3Variants}
              initial={false}
              whileHover="hover"
              whileTap="tap"
              className="group w-full sm:w-auto px-10 py-4 rounded-2xl bg-foreground text-white font-black text-lg flex items-center justify-center gap-3 transition-colors duration-200 shadow-lg no-underline will-change-transform focus:outline-none focus:ring-4 focus:ring-foreground/20 select-none"
            >
              <motion.span variants={downloadVariants} className="flex items-center shrink-0">
                <Download className="w-5 h-5" />
              </motion.span>
              <span>Download App</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
