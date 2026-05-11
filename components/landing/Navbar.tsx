"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "For Job Seekers", href: "#job-seekers" },
    { name: "For Recruiters", href: "#recruiters" },
    { name: "Mobile App", href: "#mobile-app" },
    { name: "Specialties", href: "#specialties" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 glass-strong border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-3xl font-display font-black text-primary tracking-tight">
              RBC24
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
            <div className="flex items-center space-x-4 pl-4 border-l border-border">
              <Link href="#" className="text-sm font-bold text-foreground hover:text-primary transition-smooth">
                Login
              </Link>
              <Link href="#" className="px-6 py-2.5 rounded-full bg-primary text-white font-bold text-sm hover:shadow-lg hover:shadow-primary/20 transition-smooth">
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-bold text-foreground/70 hover:bg-primary/5 hover:text-primary rounded-xl"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-border mt-4 flex flex-col gap-2">
              <Link href="#" className="block px-3 py-2 text-center font-bold text-foreground">
                Login
              </Link>
              <Link href="#" className="block px-3 py-3 text-center font-bold bg-primary text-white rounded-xl">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
