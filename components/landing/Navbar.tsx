"use client";
import Image from "next/image";
import { useState } from "react";
import LoginModal from "./LoginModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const isAuthenticated = false;

  const menuItems = [
    { name: "For Job Seekers", href: "https://jobs.rbc24.com/", target: "_blank", rel: "noopener noreferrer" },
    { name: "For Recruiters", href: "https://recruiter.rbc24.com/", target: "_blank", rel: "noopener noreferrer" },
    { name: "Mobile App", href: "#mobile-app" },
    { name: "Specialties", href: "#specialties" },
    { name: "How It Works", href: "#how-it-works" },
  ];

  return (
    <>
      <nav className="
      fixed top-0 w-full z-50
      bg-white/90
      backdrop-blur-md
      border-b border-slate-200/60
      shadow-sm
      transition-all duration-300
      pointer-events-none
      ">
        <div className="flex items-center justify-between w-full h-20 md:h-22 lg:h-24 px-4 sm:px-6 lg:px-8 gap-4 pointer-events-auto">
          <a
            href={isAuthenticated ? "/jobs" : "/"}
            className="flex items-center shrink-0 cursor-pointer select-none"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="relative w-[150px] h-12 min-[375px]:w-[170px] min-[375px]:h-14 min-[425px]:w-[180px] min-[425px]:h-14 md:w-[220px] md:h-16 lg:w-[300px] lg:h-20 flex-shrink-0 overflow-hidden -ml-1 md:-ml-2">
              <Image
                src="/images/RBC24 Horizontal Logo Transparent.png"
                alt="RBC24"
                fill
                priority
                className="object-contain object-left"
                sizes="
                  (max-width: 768px) 180px,
                  (max-width: 1024px) 240px,
                  300px
                "
              />
            </div>
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.target}
                rel={item.rel}
                className="text-sm font-bold text-foreground/70 hover:text-primary transition-smooth"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center ml-4">
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="px-8 py-3 rounded-xl bg-orange-400 text-white -800 text-sm font-bold border border-slate-200/60 hover:bg-orange-400 hover:scale-105 transition-smooth cursor-pointer"
              >
                Login
              </button>
            </div>
          </div>

          <div className="lg:hidden flex items-center relative z-50 shrink-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="text-foreground p-2 hover:bg-slate-100/50 rounded-xl transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-b border-border animate-fade-up pointer-events-auto">
            <div className="px-6 pt-4 pb-6 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.target}
                  rel={item.rel}
                  className="block py-3 text-base font-bold text-foreground/70 hover:text-primary rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsLoginModalOpen(true);
                  }}
                  className="w-full py-4 text-center font-semibold bg-slate-100 text-slate-800 rounded-xl border border-slate-200/60 hover:bg-slate-200 transition-smooth"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
}
