"use client";
import Image from "next/image";
import { useState } from "react";
import LoginModal from "./LoginModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

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
      ">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between py-1 lg:py-1">
          <div className="flex-shrink-0 flex items-center">
            <a
              href="/"
              className="relative w-[170px] lg:w-[230px] h-16 lg:h-20 -ml-2 block"
            >
              <Image
                src="/images/RBC24 Horizontal Logo Transparent.png"
                alt="RBC24 Logo"
                fill
                className="object-contain object-left scale-[1.95] origin-left"
                sizes="(max-width: 768px) 260px, 380px"
                priority
              />
            </a>
          </div>

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
                className="px-8 py-3 rounded-xl bg-slate-100 text-slate-800 text-sm font-bold border border-slate-200/60 hover:bg-slate-200 hover:scale-105 transition-smooth cursor-pointer"
              >
                Login
              </button>
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground p-2">
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
          <div className="lg:hidden bg-white border-b border-border animate-fade-up">
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
