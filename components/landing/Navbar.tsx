"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "For Job Seekers", href: "#job-seekers" },
    { name: "For Recruiters", href: "#recruiters" },
    { name: "Mobile App", href: "#mobile-app" },
    { name: "Specialties", href: "#specialties" },
    { name: "How It Works", href: "#how-it-works" },
  ];

  return (
    <nav className="fixed w-full z-50 glass-strong border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-3xl sm:text-4xl font-display font-black text-primary tracking-tighter flex items-center gap-2">
              RBC24
              <span className="text-foreground/20 font-light ml-1 hidden sm:block">|</span>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="text-sm font-bold text-foreground/70 hover:text-primary transition-smooth"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <Link href="#" className="text-sm font-bold text-foreground hover:text-primary">
                Login
              </Link>
              <Link href="#" className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-black text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-smooth">
                Get Started
              </Link>
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
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
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-border animate-fade-up">
          <div className="px-6 pt-4 pb-6 space-y-2">
            {menuItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="block py-3 text-base font-bold text-foreground/70 hover:text-primary rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link href="#" className="w-full py-3 text-center font-bold text-foreground bg-muted/50 rounded-xl">
                Login
              </Link>
              <Link href="#" className="w-full py-3 text-center font-bold bg-primary text-primary-foreground rounded-xl">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
