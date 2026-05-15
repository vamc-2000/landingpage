"use client";

import { useState, useEffect } from "react";
import { 
  Heart, 
  Brain, 
  Activity, 
  Baby, 
  UserCircle, 
  Stethoscope, 
  Microscope, 
  Building2, 
  ShieldAlert,
  Zap,
  Flame
} from "lucide-react";

const specialties = [
  { name: "Cardiology", Icon: Heart, animation: "hover-animate-heart" },
  { name: "Neurology", Icon: Brain, animation: "hover-animate-brain" },
  { name: "Orthopedics", Icon: Activity, animation: "hover-animate-activity" },
  { name: "Pediatrics", Icon: Baby, animation: "hover-animate-baby" },
  { name: "Gynecology", Icon: UserCircle, animation: "hover-animate-user" },
  { name: "Dermatology", Icon: Zap, animation: "hover-animate-zap" },
  { name: "Radiology", Icon: Flame, animation: "hover-animate-flame" },
  { name: "General Physician", Icon: Stethoscope, animation: "hover-animate-stethoscope" },
  { name: "Nursing", Icon: UserCircle, animation: "hover-animate-user" },
  { name: "Lab Technician", Icon: Microscope, animation: "hover-animate-microscope" },
  { name: "Hospital Admin", Icon: Building2, animation: "hover-animate-building" },
  { name: "Emergency", Icon: ShieldAlert, animation: "hover-animate-shield" },
];

export default function Specialties() {
  return (
    <section
      id="specialties"
      className="py-24 bg-surface-cream overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section mb-6">Browse by <span className="text-gradient">Specialties</span></h2>
          <p className="text-body max-w-3xl mx-auto">
            Find the right match across specialized healthcare domains and clinical roles with precision-matched hiring categories.
          </p>
        </div>

        {/* Infinite Marquee */}
        <div className="relative flex overflow-hidden">
          <div className="flex space-x-4 lg:space-x-6 animate-marquee py-8 hover:[animation-play-state:paused] w-max">
            {[...specialties, ...specialties].map((item, index) => (
              <div 
                key={`${item.name}-${index}`} 
                className="premium-card w-[240px] lg:w-[280px] shrink-0 p-6 flex flex-col items-center gap-4 cursor-pointer transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:scale-105 hover:border-primary/30 z-10 group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm transition-smooth bg-white text-primary group-hover:scale-125 group-hover:bg-primary group-hover:text-white">
                  <item.Icon className={`w-6 h-6 ${item.animation}`} />
                </div>
                <h3 className="text-base font-semibold transition-colors text-center mt-2 text-foreground group-hover:text-primary">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}