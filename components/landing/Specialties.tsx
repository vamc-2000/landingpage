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
  Flame,
  Eye
} from "lucide-react";

const getIconForSpecialty = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes('cardio')) return Heart;
  if (lower.includes('neuro')) return Brain;
  if (lower.includes('ortho')) return Activity;
  if (lower.includes('pediatric')) return Baby;
  if (lower.includes('gynecol')) return UserCircle;
  if (lower.includes('derma')) return Zap;
  if (lower.includes('radio')) return Flame;
  if (lower.includes('general')) return Stethoscope;
  if (lower.includes('ophthalmology') || lower.includes('eye')) return Eye;
  return Activity;
};

const getAnimationForSpecialty = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes('cardio')) return 'hover-animate-heart';
  if (lower.includes('neuro')) return 'hover-animate-brain';
  if (lower.includes('ortho')) return 'hover-animate-activity';
  if (lower.includes('pediatric')) return 'hover-animate-baby';
  if (lower.includes('gynecol')) return 'hover-animate-user';
  if (lower.includes('derma')) return 'hover-animate-zap';
  if (lower.includes('radio')) return 'hover-animate-flame';
  if (lower.includes('general')) return 'hover-animate-stethoscope';
  return 'hover-animate-activity';
};

const defaultSpecialties = [
  { name: "Cardiology", Icon: Heart, animation: "hover-animate-heart", count: 0 },
  { name: "Neurology", Icon: Brain, animation: "hover-animate-brain", count: 0 },
  { name: "Orthopedics", Icon: Activity, animation: "hover-animate-activity", count: 0 },
  { name: "Pediatrics", Icon: Baby, animation: "hover-animate-baby", count: 0 },
  { name: "Gynecology", Icon: UserCircle, animation: "hover-animate-user", count: 0 },
  { name: "Dermatology", Icon: Zap, animation: "hover-animate-zap", count: 0 },
  { name: "Radiology", Icon: Flame, animation: "hover-animate-flame", count: 0 },
  { name: "General Physician", Icon: Stethoscope, animation: "hover-animate-stethoscope", count: 0 },
  { name: "Nursing", Icon: UserCircle, animation: "hover-animate-user", count: 0 },
  { name: "Lab Technician", Icon: Microscope, animation: "hover-animate-microscope", count: 0 },
  { name: "Hospital Admin", Icon: Building2, animation: "hover-animate-building", count: 0 },
  { name: "Emergency", Icon: ShieldAlert, animation: "hover-animate-shield", count: 0 },
];

export default function Specialties() {
  const [specialtiesList, setSpecialtiesList] = useState(defaultSpecialties);

  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        const response = await fetch('/api/specialties');
        if (!response.ok) {
          const text = await response.text();
          throw new Error(`Failed with status ${response.status}: ${text}`);
        }
        const html = await response.text();
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const links = doc.querySelectorAll('a[href^="/jobs?specialization="]');
        
        if (links.length > 0) {
          const dynamicData = Array.from(links).map((link) => {
            const nameEl = link.querySelector('p.font-bold');
            const countEl = link.querySelector('.absolute.top-2.right-2');
            
            const name = nameEl ? nameEl.textContent || '' : '';
            const count = countEl ? parseInt(countEl.textContent || '0', 10) : 0;
            
            return {
              name,
              count,
              Icon: getIconForSpecialty(name),
              animation: getAnimationForSpecialty(name)
            };
          }).filter(item => item.name);
          
          if (dynamicData.length > 0) {
            setSpecialtiesList(dynamicData);
          }
        }
      } catch (error) {
        console.error('Failed to fetch specialties dynamically:', error);
      }
    };

    fetchSpecialties();
  }, []);

  return (
    <section
      id="specialties"
      className="pb-24 pt-0 bg-surface-cream overflow-hidden"
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
            {[...specialtiesList, ...specialtiesList].map((item, index) => (
              <div 
                key={`${item.name}-${index}`} 
                className="premium-card w-[240px] lg:w-[280px] shrink-0 p-6 flex flex-col items-center gap-4 cursor-pointer transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:scale-105 hover:border-primary/30 z-10 group relative"
              >
                {(item.count ?? 0) > 0 && (
                  <div className="absolute top-4 right-4 inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-black border shadow-sm z-10 transition-transform group-hover:scale-110 bg-orange-50 text-orange-600 border-orange-100">
                    {item.count}
                  </div>
                )}
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