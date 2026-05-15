"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm z-50">
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#ff6b00] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                R
              </div>
              <span className="font-bold text-xl text-gray-900 tracking-tight">
                RBC<span className="text-[#ff6b00]">24</span>
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => document.getElementById("gateway")?.scrollIntoView({ behavior: "smooth" })} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Gateway
            </button>
            <button onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </button>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </button>
            
            <button
              onClick={() => window.open("https://recruiter.rbc24.com/login", "_blank")}
              className="btn-primary px-5 py-2 text-sm"
            >
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-lg absolute top-20 left-0 w-full">
          <div className="px-6 py-4 space-y-4 flex flex-col">
            <button onClick={() => { setIsOpen(false); document.getElementById("gateway")?.scrollIntoView({ behavior: "smooth" }); }} className="text-left font-medium text-gray-600 hover:text-gray-900">
              Gateway
            </button>
            <button onClick={() => { setIsOpen(false); document.getElementById("features")?.scrollIntoView({ behavior: "smooth" }); }} className="text-left font-medium text-gray-600 hover:text-gray-900">
              Features
            </button>
            <button onClick={() => { setIsOpen(false); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="text-left font-medium text-gray-600 hover:text-gray-900">
              Contact
            </button>
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  window.open("https://recruiter.rbc24.com/login", "_blank");
                }}
                className="w-full btn-primary"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
